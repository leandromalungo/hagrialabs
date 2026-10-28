"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

interface FadeImageProps extends Omit<ImageProps, "onLoad"> {
  fadeDelay?: number;
}

export function FadeImage({ className, sizes, ...props }: FadeImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const rawSrc = typeof props.src === "string" ? props.src : "";
  if (!props.src || rawSrc.trim() === "") {
    return null;
  }

  const safeSrc =
    typeof props.src === "string" &&
    !props.src.startsWith("/") &&
    !props.src.startsWith("http")
      ? `/${props.src}`
      : props.src;

  return (
    <div className="relative h-full w-full overflow-hidden bg-muted/30">
      <Image
        {...props}
        src={safeSrc}
        sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        className={`${className || ""} transition-opacity duration-500 ease-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
