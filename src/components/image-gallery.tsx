"use client";

import { useState, useCallback } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import { useTranslations } from "next-intl";

const images = [
  "/android-chrome-512x512.png",
  
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
