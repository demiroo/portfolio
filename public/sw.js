if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let f={};const o=e=>i(e,n),t={module:{uri:n},exports:f,require:o};s[n]=Promise.all(a.map((e=>t[e]||o(e)))).then((e=>(c(...e),f)))}}define(["./workbox-ee5ddb69"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"a675d333cd8292f9a97ee0189f98c134"},{url:"/_next/static/chunks/156-fcac61d6a49e4ce9.js",revision:"i2KTa6IGZL4foxqBsUJEo"},{url:"/_next/static/chunks/1c5ca26c-603047804a687d09.js",revision:"i2KTa6IGZL4foxqBsUJEo"},{url:"/_next/static/chunks/483-ffdb0022f384be12.js",revision:"i2KTa6IGZL4foxqBsUJEo"},{url:"/_next/static/chunks/4d8d35ee-071b95259c25daad.js",revision:"i2KTa6IGZL4foxqBsUJEo"},{url:"/_next/static/chunks/560-75cb16148874e724.js",revision:"i2KTa6IGZL4foxqBsUJEo"},{url:"/_next/static/chunks/577-422eefaac6dfc413.js",revision:"i2KTa6IGZL4foxqBsUJEo"},{url:"/_next/static/chunks/813-2ca6947fae39f368.js",revision:"i2KTa6IGZL4foxqBsUJEo"},{url:"/_next/static/chunks/950-1c931068fa95e6c3.js",revision:"i2KTa6IGZL4foxqBsUJEo"},{url:"/_next/static/chunks/app/%5Blocale%5D/blog/%5Bslug%5D/page-8bfce9efd1ace7fb.js",revision:"i2KTa6IGZL4foxqBsUJEo"},{url:"/_next/static/chunks/app/%5Blocale%5D/blog/page-6389b6dccc9b0f11.js",revision:"i2KTa6IGZL4foxqBsUJEo"},{url:"/_next/static/chunks/app/%5Blocale%5D/images/page-666c9543ff82c8ec.js",revision:"i2KTa6IGZL4foxqBsUJEo"},{url:"/_next/static/chunks/app/%5Blocale%5D/layout-5ee2d920eeb296fa.js",revision:"i2KTa6IGZL4foxqBsUJEo"},{url:"/_next/static/chunks/app/%5Blocale%5D/page-73c019da19552e22.js",revision:"i2KTa6IGZL4foxqBsUJEo"},{url:"/_next/static/chunks/app/_not-found/page-be74d57eb051d84f.js",revision:"i2KTa6IGZL4foxqBsUJEo"},{url:"/_next/static/chunks/framework-6e06c675866dc992.js",revision:"i2KTa6IGZL4foxqBsUJEo"},{url:"/_next/static/chunks/main-app-65a0ba90682ff184.js",revision:"i2KTa6IGZL4foxqBsUJEo"},{url:"/_next/static/chunks/main-bffd1a5cc02efb0d.js",revision:"i2KTa6IGZL4foxqBsUJEo"},{url:"/_next/static/chunks/pages/_app-e23de10d5395dcfd.js",revision:"i2KTa6IGZL4foxqBsUJEo"},{url:"/_next/static/chunks/pages/_error-47c7bfd8ac3a9f8f.js",revision:"i2KTa6IGZL4foxqBsUJEo"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-b35c12592535bdd0.js",revision:"i2KTa6IGZL4foxqBsUJEo"},{url:"/_next/static/css/784a4182bb0230cf.css",revision:"784a4182bb0230cf"},{url:"/_next/static/i2KTa6IGZL4foxqBsUJEo/_buildManifest.js",revision:"53c67e9f43b0a4f05edcf358131c76b7"},{url:"/_next/static/i2KTa6IGZL4foxqBsUJEo/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/android-chrome-192x192.png",revision:"a0608ab16a107aa9d64b768848340d9c"},{url:"/android-chrome-512x512.png",revision:"0a47e9631eabb4589cd67567f4c78dd3"},{url:"/apple-touch-icon.png",revision:"b80f571f9ea3f174b9cfdceee9430b22"},{url:"/atomic.png",revision:"1af4fa1401ca5fbc70b50402d361e8a0"},{url:"/buildspace.jpg",revision:"9180ca9fcd4936feba8086b27eb7f886"},{url:"/favicon-16x16.png",revision:"064e5f81ea8f448fc0a662aece0da90e"},{url:"/favicon-32x32.png",revision:"62d6c36c9fc207f10a21d4bf90b876e6"},{url:"/favicon.ico",revision:"ec870aef04a2e362964e5deadadaa4f3"},{url:"/ib.png",revision:"80fed313e52b0b8d125b9488a0dc873e"},{url:"/laurier.png",revision:"c72e80fcffd7bd86aabd1e6e44d0039c"},{url:"/lime.svg",revision:"39110530d819d230ad4f7edd9a4656c1"},{url:"/manifest.json",revision:"bd9a249a07cc29f8e92180930dd632d6"},{url:"/me.png",revision:"43a478f4414247ada0e10b5a9063d114"},{url:"/mitremedia.png",revision:"57103de66b15ea0d476f0935eb88db2c"},{url:"/nvidia.png",revision:"9fc901a4145d36106b036fdb5bfcc4f6"},{url:"/shopify.svg",revision:"973f8824ab58e30b8d9e7916dc4beace"},{url:"/splunk.svg",revision:"219de6775033f528d5c4f377ff27ceab"},{url:"/waterloo.png",revision:"1dca09093af1a0608b5ef26dcff30532"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/(.*?)\/(assets|static)\/.*/i,new e.CacheFirst({cacheName:"static-assets",plugins:[new e.ExpirationPlugin({maxEntries:200,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/.*(?:png|jpg|jpeg|svg|gif|webp)/i,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/^https?:\/\/.*\/api\/.*/i,new e.NetworkFirst({cacheName:"api-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:3600})]}),"GET")}));
