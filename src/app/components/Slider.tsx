// components/PortfolioSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const slides = [
  {
    title: "Senior Flowers",
    img: "/IMG_1655 (2).JPG",
  },
  {
    title: "Марта Янчинська",
    img: "/IMG_0922.JPG",
  },
  {
    title: "Club Food",
    img: "/IMG_1592.JPG",
  },
  {
    title: "Срібна Нота",
    img: "/IMG_1670.JPG",
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
              <CardMedia
                component="img"
                height="200"
                image={slide.img}
                alt={slide.title}
                sx={{ objectFit: "cover" }}
              />
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
