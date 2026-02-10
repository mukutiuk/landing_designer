"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useRef, useState } from "react";

const logos = [
  {
    href: "/works/logo/hemp-active",
    image: "/m2.png",
    title: "ЛОГОТИП",
    subtitle: "HempActive",
  },
  {
    href: "/works/logo/boungainvillea",
    image: "/m1.png",
    title: "ЛОГОТИП",
    subtitle: "Boungainvillea",
  },
  {
    href: "/works/logo/lamma",
    image: "/L.png",
    title: "ЛОГОТИП",
    subtitle: "Lamma english",
  },
  {
    href: "/works/logo/iplantbasic",
    image: "/r1.png",
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
  const [activeIndex, setActiveIndex] = useState(0);

  const SLIDE_WIDTH = 402;
  const GAP = 20;
  const FULL_SLIDE_WIDTH = SLIDE_WIDTH + GAP;

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

  const stopDragging = () => setIsDragging(false);

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

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const index = Math.round(sliderRef.current.scrollLeft / FULL_SLIDE_WIDTH);
    setActiveIndex(index);
  };

  return (
    <main className="h-[calc(100vh)] py-6 flex justify-center items-center px-2">
      <section className="flex flex-col max-w-[1232px] w-full">
        {isMobile ? (
          <>
            {/* ===== MOBILE SLIDER ===== */}
            <Box
              ref={sliderRef}
              onScroll={handleScroll}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={stopDragging}
              onMouseLeave={stopDragging}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={stopDragging}
              sx={{
                display: "flex",
                gap: `${GAP}px`,
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth",
                px: 2,
                pb: 2,
                cursor: isDragging ? "grabbing" : "grab",
                userSelect: "none",
                marginLeft: "5px",
              }}
            >
              {logos.map((logo, index) => (
                <Box
                  key={index}
                  sx={{
                    flexShrink: 0,
                    width: `${SLIDE_WIDTH}px`,
                    scrollSnapAlign: "start",
                  }}
                >
                  <Link href={logo.href}>
                    <div className="relative w-[402px] h-[528px] mb-[50px]">
                      <Image
                        src={logo.image}
                        alt={`Логотип ${logo.subtitle}`}
                        fill
                        className="object-cover pointer-events-none"
                        draggable={false}
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

                    <p className="text-[18px]">{logo.subtitle}</p>
                  </Link>
                </Box>
              ))}
            </Box>

            <div className="flex justify-center gap-2 mt-4">
              {logos.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-black w-4" : "bg-gray-300 w-2"
                  }`}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="flex gap-[50px] justify-between pt-[30px]">
            {logos.map((logo, index) => (
              <Link key={index} href={logo.href} className="w-[252px]">
                <div className="relative w-[252px] h-[328px] mb-[50px]">
                  <Image
                    src={logo.image}
                    alt={`Логотип ${logo.subtitle}`}
                    fill
                    className="object-cover"
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

                <p className="text-[18px]">{logo.subtitle}</p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
