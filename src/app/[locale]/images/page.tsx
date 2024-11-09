"use client";

import { useState } from "react";
import ImageGallery from "@/components/image-gallery";

const BLUR_FADE_DELAY = 0.04;

export default function Images() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <ImageGallery />
    </>
  );
}
