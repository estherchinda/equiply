"use client";

import Image,{ ImageProps } from "next/image";
import { useState } from "react";

type ImageWithFallbackProps = ImageProps & {
  fallbackSrc: string;
};

export function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  ...rest
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
}

type ReviewsProps = {
    image: string;
    name: string;
    date: string;
    review: string;
    stars: Record<number, boolean>;
}

export default function ReviewsRow ({
    image,
    name,
    date,
    review,
    stars
}: ReviewsProps) {
    return (
        <section className="space-y-3">
            <div className="flex flex-row items-center gap-4">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <ImageWithFallback
                    src={image}
                    fallbackSrc="/default-avatar.jpg"
                    alt={`Profile Image - ${name}`}
                    height={40}
                    width={40}
                    loading="lazy"
                    className="rounded-full object-cover h-full w-full"
                />
              </div>
              <div>
                <h3 className="text-base font-medium leading-6">{name}</h3>
                <p className="text-sm text-[#94C7A8] font-normal leading-5">
                  {date}
                </p>
              </div>
            </div>
            <div className="flex gap-0.5 items-center">
                {Object.entries(stars).map(([key, isFilled]) => (
                    <span key={key} className="text-lg">
                        {isFilled ? 
                            <Image
                            src={'/review-full.svg'}
                            alt="Review"
                            width={20}
                            height={20}
                            /> 
                            : 
                            <Image
                            src={'/review-empty.svg'}
                            alt="Review"
                            width={20}
                            height={20}
                            /> 
                        }
                    </span>
                ))}
            </div>
            <div>
                <p className="text-xs md:text-sm font-normal leading-6">{review}</p>
            </div>
        </section>
    )
}