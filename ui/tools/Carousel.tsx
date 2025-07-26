"use client";

import Image from "next/image";
import React, { useEffect } from "react";

type ImageCarouselProps = {
  images: string[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  useEffect(() => {
    const track = document.querySelector(".carousel-track") as HTMLElement;
    const indicators = document.querySelectorAll(".carousel-indicator");
    const container = document.querySelector(".carousel-container");
    const totalSlides = images.length;
    let currentIndex = 0;
    let interval: NodeJS.Timeout;
    const isPaused = false;

    let touchStartX = 0;
    let touchEndX = 0;
    const swipeThreshold = 50;

    const updateCarousel = () => {
      if (track) {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
      }

      indicators.forEach((btn, i) => {
        btn.classList.toggle("bg-green-500", i === currentIndex);
        btn.classList.toggle("w-4", i === currentIndex);
        btn.classList.toggle("bg-gray-300", i !== currentIndex);
      });
    };

    const goToSlide = (index: number) => {
      currentIndex = (index + totalSlides) % totalSlides;
      updateCarousel();
    };

    const nextSlide = () => goToSlide(currentIndex + 1);
    const prevSlide = () => goToSlide(currentIndex - 1);

    indicators.forEach((btn, i) => {
      btn.addEventListener("click", () => goToSlide(i));
    });

    const startAutoplay = () => {
      interval = setInterval(() => {
        if (!isPaused) nextSlide();
      }, 4000);
    };

    // Swipe listeners
    if (container) {
      container.addEventListener("touchstart", (e) => {
        touchStartX = (e as TouchEvent).touches[0].clientX;
      });

      container.addEventListener("touchmove", (e) => {
        touchEndX = (e as TouchEvent).touches[0].clientX;
      });

      container.addEventListener("touchend", () => {
        const swipeDistance = touchStartX - touchEndX;
        if (Math.abs(swipeDistance) > swipeThreshold) {
          if (swipeDistance > 0) {
            nextSlide();
          } else {
            prevSlide();
          }
        }
      });
    }

    updateCarousel();
    startAutoplay();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative w-full carousel-container overflow-hidden">
      {/* Carousel Track */}
      <div className="relative w-full overflow-hidden mx-auto">
        <div className="carousel-track flex transition-transform duration-700 ease-in-out">
          {images.map((item, i) => (
            <div
              key={i}
              className="carousel-item w-full flex-shrink-0 flex flex-col items-center text-center px-4"
            >
              <div className="relative w-full max-w-md md:max-w-2xl mx-auto">
                <div className="relative w-full aspect-[2/3] md:aspect-[16/9] overflow-hidden rounded-lg">
                  <Image
                    src={item}
                    alt={item}
                    fill
                    sizes="(max-width: 768px) 80vw, 800px"
                    className="object-cover rounded-lg"
                    priority={i === 0}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator w-2 h-2 rounded-full transition-all duration-300 ${
              index === 0 ? "bg-[#264533] w-3" : "bg-gray-300"
            }`}
            data-index={index}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
