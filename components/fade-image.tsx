"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

interface FadeImageProps extends Omit<ImageProps, "onLoad"> {
  fadeDelay?: number;
}

export function FadeImage({ className, sizes, ...props }: FadeImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden bg-muted/30">
      <Image
        {...props}
        sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        className={`${className || ""} transition-opacity duration-500 ease-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
