"use client";

import { useState, useCallback } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import { useTranslations } from "next-intl";

const images = [
  "/images/ele-im-flugzeug.jpeg",
  "/images/ela-im-schnee.png",
  "/images/ela.jpeg",
  "/images/ele-trinkt-fanta.jpg",
  "/images/ela-im-dorf.jpg",
  "/images/1.jpeg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
  "/images/11.jpg",
  "/images/12.jpg",
  "/images/13.jpg",
  "/images/14.jpg",
  "/images/15.jpg",
  "/images/16.jpg",
  "/images/17.jpg",
  "/images/18.jpg",
  "/images/19.jpg",
  "/images/20.jpg",
  "/images/21.jpg",
  "/images/22.jpg",
  "/images/23.jpg",
  "/images/24.jpg",
  "/images/25.jpg",
  "/images/26.jpg",
  "/images/27.jpg",
  "/images/28.jpg",
  "/images/29.jpg",
  "/images/30.jpg",
  "/images/31.jpg",
  "/images/32.jpg",
  "/images/33.jpg",
  "/images/34.jpg",
  "/images/35.jpg",
  "/images/36.jpg",
  "/images/37.jpg",
  "/images/38.jpg",
  "/images/39.jpg",
  "/images/40.jpg",
  "/images/41.jpg",
  "/images/42.jpg",
  "/images/43.jpg",
  "/images/44.jpg",
  "/images/45.jpg",
  "/images/46.jpg",
  "/images/47.jpg",
  "/images/48.jpg",
  "/images/49.jpg",
  "/images/50.jpg",
  "/images/51.jpg",
  "/images/52.jpg",
  "/images/53.jpg",
  "/images/54.jpg",
  "/images/55.jpg",
  "/images/56.jpg",
  "/images/57.jpg",
  "/images/58.jpg",
  "/images/59.jpg",
  "/images/60.jpg",
  "/images/61.jpg",
  "/images/67.jpg",
  "/images/68.jpg",
  "/images/69.jpg",
  "/images/70.jpg",
  "/images/71.jpg",
  "/images/72.jpg",
  "/images/73.jpg",
  "/images/74.jpg",
  "/images/75.jpg",
  "/images/76.jpg",
  "/images/77.jpg",
  "/images/78.jpg",
  "/images/79.jpg",
  "/images/80.jpg",
  "/images/81.jpg",
  "/images/82.jpg",
  "/images/83.jpg",
  "/images/84.jpg",
  "/images/85.jpg",
  "/images/86.jpg",
  "/images/87.jpg",
  "/images/88.jpg",
  "/images/89.jpg",
  "/images/90.jpg",
  "/images/91.jpg",
  "/images/92.jpg",
  "/images/93.jpg",
  "/images/94.jpg",
  "/images/95.jpg",
  "/images/96.jpg",
  "/images/97.jpg",
  "/images/98.jpg",
  "/images/99.jpg",
  "/images/100.jpg",
];

const BLUR_FADE_DELAY = 0.04;

export default function ImageGallery() {
    const t = useTranslations("ImageGallery");

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
  }, []);

  const handleImageLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      const img = e.target as HTMLImageElement;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (ctx) {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        ctx.font = "20px Arial";
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.fillText("© Your Name", 10, 30);
        img.src = canvas.toDataURL();
      }
    },
    []
  );

  return (
    <>
      <h1 className="justify-center items-center text-center text-5xl pb-2 font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 bg-clip-text text-transparent">
        {t("imageGalleryh1")}
      </h1>
      <p className="justify-center items-center text-center mt-1 mb-5 text-xl text-gray-500">
        My thoughts on software development, life, and more.
      </p>
      <section id="photos" className="select-none">
        <div className="columns-2 gap-4 sm:columns-3">
          {images.map((imageUrl, idx) => (
            <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
              <div
                className="relative mb-4 overflow-hidden rounded-lg"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onContextMenu={handleContextMenu}
              >
                <Image
                  src={imageUrl}
                  alt={`Image ${idx + 1}`}
                  width={800}
                  height={600}
                  className={`size-full object-contain transition-transform duration-300 ease-in-out ${
                    hoveredIndex === idx ? "scale-110" : ""
                  }`}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={75}
                  onLoad={handleImageLoad}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-transparent" />
                {hoveredIndex === idx && (
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">❤️</span>
                  </div>
                )}
              </div>
            </BlurFade>
          ))}
        </div>
      </section>
    </>
  );
}
