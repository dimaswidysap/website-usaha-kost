"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { slideImages } from "./ImageData";

const INTERVAL_MS = 4000;

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slideImages.length);
      setIsTransitioning(false);
    }, 50);
  }, []);

  useEffect(() => {
    const timer = setInterval(goToNext, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {slideImages.map((image, index) => (
        <div
          key={image.id}
          style={{
            position: "absolute",
            inset: 0,
            opacity: index === currentIndex ? (isTransitioning ? 0 : 1) : 0,
            transition: "opacity 0.2s ease-in-out",
            pointerEvents: index === currentIndex ? "auto" : "none",
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority={index === 0}
            unoptimized
          />
        </div>
      ))}

      {/* Dot indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "12px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          zIndex: 10,
        }}
      >
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              width: index === currentIndex ? "20px" : "8px",
              height: "8px",
              borderRadius: "9999px",
              border: "none",
              backgroundColor:
                index === currentIndex
                  ? "rgba(255,255,255,1)"
                  : "rgba(255,255,255,0.45)",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.3s ease, background-color 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
