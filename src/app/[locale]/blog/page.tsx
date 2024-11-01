import React from "react";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="w-full py-12">
      <div className="space-y-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                My Blog
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Latest Posts
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Thoughts, ideas, and discoveries from my journey
              </p>
            </div>
          </div>
        </BlurFade>

        <div className="max-w-[800px] mx-auto space-y-4">
          {posts
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post, id) => (
              <BlurFade
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                key={post.slug}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block p-6 rounded-lg border border-muted hover:border-foreground transition-colors duration-200"
                >
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold tracking-tight">
                        {post.metadata.title}
                      </h3>
                      <time className="text-sm text-muted-foreground">
                        {new Date(post.metadata.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </time>
                    </div>
                    {post.metadata.description && (
                      <p className="text-muted-foreground line-clamp-2">
                        {post.metadata.description}
                      </p>
                    )}
                    {post.metadata.tags && (
                      <div className="flex flex-wrap gap-2">
                        {post.metadata.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="inline-block px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </BlurFade>
            ))}
        </div>
      </div>
    </section>
  );
}
