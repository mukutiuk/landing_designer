"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useRef, useState } from "react";

const identityItems = [
  {
    href: "/works/identity/cocon",
    image: "/logo-1.svg",
    title: "АЙДЕНТИКА",
    description: "Сocon Luxe lingerie store",
  },
  {
    href: "/works/identity/immortal",
    image: "/logo-3.svg",
    title: "АЙДЕНТИКА",
    description: "Immortal english school",
  },
  {
    href: "/works/identity/medline",
    image: "/logo-3.svg",
    title: "АЙДЕНТИКА",
    description: "Medline nails school/stuio",
  },
  {
    href: "/works/identity/dragon",
    image: "/Sm.jpg",
    title: "АЙДЕНТИКА",
    description: "Smart dragon english school",
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

  const stopDragging = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
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

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const index = Math.round(sliderRef.current.scrollLeft / FULL_SLIDE_WIDTH);
    setActiveIndex(index);
  };

  return (
    <main className="h-[calc(100vh)] py-6 flex justify-center items-center px-2">
      <section className="max-w-[1232px] mx-auto w-full">
        {/* ===== MOBILE SLIDER ===== */}
        <Box
          ref={sliderRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          className="flex overflow-x-auto lg:hidden"
          sx={{
            gap: `${GAP}px`,
            padding: "16px",
            scrollSnapType: "x mandatory",
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
            marginLeft: "5px",
          }}
        >
          {identityItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                flexShrink: 0,
                width: `${SLIDE_WIDTH}px`,
                scrollSnapAlign: "start",
              }}
            >
              <Link href={item.href}>
                <div className="relative w-[402px] h-[528px] mb-[40px]">
                  <Image
                    src={item.image}
                    alt={`${item.title} - ${item.description}`}
                    fill
                    className="object-cover pointer-events-none"
                    draggable={false}
                  />
                </div>

                <div className="flex justify-between items-end">
                  <h4 className="text-[18px] font-bold">{item.title}</h4>
                  <Image
                    src="/Group16.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="rotate-[-90deg]"
                  />
                </div>

                <p className="text-[18px]">{item.description}</p>
              </Link>
            </Box>
          ))}
        </Box>

        {/* ===== DOTS INDICATOR ===== */}
        <div className="flex justify-center gap-2 mt-4 lg:hidden">
          {identityItems.map((_, index) => (
            <span
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-black w-4" : "bg-gray-300 w-2"
              }`}
            />
          ))}
        </div>

        {/* ===== DESKTOP GRID ===== */}
        <div className="hidden md:flex gap-[50px] justify-between mt-8">
          {identityItems.map((item, index) => (
            <Link key={index} href={item.href} className="w-[252px]">
              <div className="relative w-[252px] h-[328px] mb-[40px]">
                <Image
                  src={item.image}
                  alt={`${item.title} - ${item.description}`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex justify-between items-end">
                <h4 className="text-[18px] font-bold">{item.title}</h4>
                <Image
                  src="/Group16.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="rotate-[-90deg]"
                />
              </div>

              <p className="text-[18px]">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
