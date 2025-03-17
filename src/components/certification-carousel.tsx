"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { type Certification } from "@/app/certifications/certifications-data";
import AutoPlay from "embla-carousel-autoplay";

interface CertificationCarouselProps {
  certifications: Certification[];
}

export function CertificationCarousel({ certifications }: CertificationCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoPlay({ delay: 4000 })
  ]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full max-w-5xl mx-auto mb-12">
      <div className="overflow-hidden rounded-lg bg-card" ref={emblaRef}>
        <div className="flex">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="relative flex-[0_0_100%] min-w-0 h-[400px] md:h-[500px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10" />
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                <div className="max-w-4xl mx-auto">
                  <div className={cn("inline-block px-3 py-1 rounded-full text-sm mb-3", cert.badgeColor)}>
                    {cert.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-200 mb-2">
                    {cert.issuer} • {cert.date}
                  </p>
                  <p className="text-sm md:text-base text-gray-300 line-clamp-2">
                    {cert.description}
                  </p>
                  {cert.skills && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 rounded-full bg-white/10 text-white text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
} 