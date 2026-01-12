"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useRef, useState } from "react";

const logos = [
  {
    href: "/works/identity/cocon",
    image: "/logo1.png",
    title: "ЛОГОТИП",
    subtitle: "HempActive",
  },
  {
    href: "/works/logo/boungainvillea",
    image: "/logo2.png",
    title: "ЛОГОТИП",
    subtitle: "Boungainvillea",
  },
  {
    href: "/works/logo/lamma",
    image: "/logo3.png",
    title: "ЛОГОТИП",
    subtitle: "Lamma english",
  },
  {
    href: "/works/logo/iplantbasic",
    image: "/logo4.png",
    title: "ЛОГОТИП",
    subtitle: "Iplantbasic",
  },
];

export default function Page() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <main className="h-[calc(100vh-60px)] py-6 flex justify-center items-center px-2">
      <section className="flex flex-col max-w-[1232px] w-full">
        {isMobile ? (
          // Мобільний слайдер
          <Box
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            sx={{
              display: "flex",
              gap: "20px",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
              px: 2,
              pb: 2,
              cursor: isDragging ? "grabbing" : "grab",
              userSelect: "none",
              "&::-webkit-scrollbar": {
                height: 6,
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#f1f1f1",
                borderRadius: 3,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888",
                borderRadius: 3,
                "&:hover": {
                  backgroundColor: "#555",
                },
              },
            }}
          >
            {logos.map((logo, index) => (
              <Box
                key={index}
                sx={{
                  flexShrink: 0,
                  width: "402px",
                  scrollSnapAlign: "start",
                }}
              >
                <Link href={logo.href} className="block">
                  <div className="relative w-[402px] h-[528px] mb-[50px]">
                    <Image
                      src={logo.image || "/placeholder.svg"}
                      alt={`Логотип ${logo.subtitle}`}
                      fill
                      className="object-cover pointer-events-none"
                      draggable={false}
                      sizes="402px"
                    />
                  </div>

                  <div className="flex justify-between items-end">
                    <h4 className="text-[18px] font-bold">{logo.title}</h4>
                    <Image
                      src="/Group16.svg"
                      alt=""
                      width={15}
                      height={15}
                      className="rotate-[-90deg]"
                    />
                  </div>

                  <p className="font-normal text-[18px]">{logo.subtitle}</p>
                </Link>
              </Box>
            ))}
          </Box>
        ) : (
          // Десктопна сітка
          <div className="flex gap-[50px] justify-between">
            {logos.map((logo, index) => (
              <Link key={index} href={logo.href} className="w-[252px]">
                <div className="relative w-[252px] h-[328px] mb-[50px]">
                  <Image
                    src={logo.image || "/placeholder.svg"}
                    alt={`Логотип ${logo.subtitle}`}
                    fill
                    className="object-cover"
                    sizes="252px"
                  />
                </div>

                <div className="flex justify-between items-end">
                  <h4 className="text-[18px] font-bold">{logo.title}</h4>
                  <Image
                    src="/Group16.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="rotate-[-90deg]"
                  />
                </div>

                <p className="font-normal text-[18px]">{logo.subtitle}</p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
