// components/PortfolioSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "@/app/components/OptimizedImage";
import { Box, Card, CardContent, Typography } from "@mui/material";

const slides = [
  {
    title: "Senior Flowers",
    img: "/13.jpg",
  },
  {
    title: "Марта Янчинська",
    img: "/14.jpg",
  },
  {
    title: "Club Food",
    img: "/15.jpg",
  },
  {
    title: "Срібна Нота",
    img: "/12.jpg",
  },
];

export default function PortfolioSlider() {
  return (
    <div className="bg-black py-10">
      <h2 className="text-center text-white text-2xl font-semibold mb-6">
        ПОРТФОЛІО
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        grabCursor={true}
        simulateTouch={true}
        cssMode={true}
        className="max-w-5xl mx-auto"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Card className="bg-zinc-900 text-white rounded-2xl shadow-lg overflow-hidden transition-transform">
              <Box sx={{ position: "relative", height: 200 }}>
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </Box>
              <CardContent>
                <Typography variant="h6" className="text-center">
                  {slide.title}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
