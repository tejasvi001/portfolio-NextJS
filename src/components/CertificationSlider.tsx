"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { certifications } from '@/app/certifications/certifications-data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const highlightedCertifications = certifications.filter(cert => cert.isHighlight);

export function CertificationSlider() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full py-8"
      >
        {highlightedCertifications.map((cert) => (
          <SwiperSlide key={cert.id}>
            <div className="relative h-[350px] w-full rounded-lg overflow-hidden group">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-lg mb-2">{cert.title}</h3>
                <p className="text-white/80 text-sm">{cert.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-white/60 text-xs">{cert.issuer}</span>
                  <span className="text-white/60 text-xs">•</span>
                  <span className="text-white/60 text-xs">{cert.date}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 