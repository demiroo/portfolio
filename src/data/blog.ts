import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type Metadata = {
  [x: string]: any;
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

interface BlogPost {
  [x: string]: any;
  slug: string;
  metadata: {
    [x: string]: any;
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
  };
  source: string;
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

// Improved slug generation
function generateSlug(title: string): string {
  if (!title) throw new Error("Title is required to generate slug");
  
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove starting and ending hyphens
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    if (!slug) {
      console.error('No slug provided to getPost');
      return null;
    }

    // Try both .mdx and .mdx.mdx extensions
    const possiblePaths = [
      path.join(process.cwd(), "content", `${slug}.mdx`),
      path.join(process.cwd(), "content", `${slug}.mdx.mdx`)
    ];

    let filePath = possiblePaths.find(path => fs.existsSync(path));
    
    if (!filePath) {
      console.error(`Post file not found: ${possiblePaths.join(' or ')}`);
      return null;
    }

    const source = fs.readFileSync(filePath, "utf-8");
    const { content: rawContent, data } = matter(source);
    const metadata: Metadata = data as Metadata;
    
    // Ensure required metadata fields exist
    if (!metadata.title || !metadata.publishedAt || !metadata.summary) {
      console.error(`Missing required metadata in ${slug}`);
      return null;
    }

    // Use provided slug or generate from title
    metadata.slug = metadata.slug || generateSlug(metadata.title);
    
    const content = await markdownToHTML(rawContent);
    
    return {
      source: content,
      metadata,
      slug: metadata.slug,
    };
  } catch (error) {
    console.error(`Error getting post ${slug}:`, error);
    return null;
  }
}

async function getAllPosts(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      let post = await getPost(slug);
      if (!post) {
        throw new Error(`Post not found for slug: ${slug}`);
      }
      let { metadata, source } = post;
      return {
        metadata,
        slug,
        source,
      };
    })
  );
}

export async function getBlogPosts() {
  try {
    const contentDir = path.join(process.cwd(), "content");
    const files = fs.readdirSync(contentDir);
    const posts = await Promise.all(
      files
        .filter((file) => file.endsWith(".mdx"))
        .map(async (file) => {
          const post = await getPost(file.replace(/\.mdx$/, ""));
          return post;
        })
    );
    return posts.filter((post): post is BlogPost => post !== null);
  } catch (error) {
    console.error(`Error getting blog posts: ${error}`);
    return [];
  }
}
