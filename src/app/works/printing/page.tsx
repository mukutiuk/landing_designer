"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box } from "@mui/material";
import { useRef, useState } from "react";

const poligrafItems = [
  {
    image: "/p3.png",
    title: "ЛИСТІВКИ",
    description: "для бренду декору",
    href: "/works/printing/belove",
  },
  {
    image: "/p2.png",
    title: "СЕРТИФІКАТ",
    description: "для фотографа",
    href: "/works/printing/certificate",
  },
  {
    image: "/p1.png",
    title: "ЛИСТІВКИ",
    description: "для дня народження",
    href: "/works/printing/postcard",
  },
  {
    image: "/poligraf-4.png",
    title: "МЕНЮ",
    description: "для закладу харчування",
    href: "/works/printing/pizza",
  },
];

const poligrafItemsS = [
  {
    image: "/I1.png",
    title: "ЛИСТІВКИ",
    description: "для бренду декору",
    href: "/works/printing/belove",
  },
  {
    image: "/I2.png",
    title: "СЕРТИФІКАТ",
    description: "для фотографа",
    href: "/works/printing/certificate",
  },
  {
    image: "/I3.png",
    title: "ЛИСТІВКИ",
    description: "для дня народження",
    href: "/works/printing/postcard",
  },
  {
    image: "/I4.png",
    title: "МЕНЮ",
    description: "для закладу харчування",
    href: "/works/printing/pizza",
  },
];

export default function Page() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const SLIDE_WIDTH = 402 + 16; // ширина слайда + gap

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const index = Math.round(sliderRef.current.scrollLeft / SLIDE_WIDTH);
    setActiveIndex(index);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => setIsDragging(false);

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

  return (
    <main className="h-[calc(100vh-60px)] py-6 flex justify-center items-center px-2">
      <section className="flex flex-col max-w-[1232px] w-full">
        {/* Мобільний слайдер */}
        <Box
          ref={sliderRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
          sx={{
            display: { xs: "flex", md: "none" },
            overflowX: "auto",
            gap: 2,
            scrollSnapType: "x mandatory",
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
            "&::-webkit-scrollbar": {
              height: 8,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#f1f1f1",
              borderRadius: 4,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
              borderRadius: 4,
            },
          }}
        >
          {poligrafItemsS.map((item, index) => (
            <Box
              key={index}
              sx={{
                flex: "0 0 402px",
                scrollSnapAlign: "start",
              }}
            >
              <Link href={item.href} className="block">
                <div className="relative w-[402px] h-[528px] mb-[50px]">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={`${item.title} — ${item.description}`}
                    fill
                    className="object-cover pointer-events-none"
                    draggable={false}
                    sizes="402px"
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

                <p className="font-normal text-[18px]">{item.description}</p>
              </Link>
            </Box>
          ))}
        </Box>

        {/* ІНДИКАТОР */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {poligrafItemsS.map((_, index) => (
            <span
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-black w-4" : "bg-gray-300 w-2"
              }`}
            />
          ))}
        </div>

        {/* Десктопна сітка */}
        <div className="hidden md:flex gap-[50px] justify-between">
          {poligrafItems.map((item, index) => (
            <Link key={index} href={item.href} className="w-[252px]">
              <div className="relative w-[252px] h-[328px] mb-[50px]">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={`${item.title} — ${item.description}`}
                  fill
                  className="object-cover"
                  sizes="252px"
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

              <p className="font-normal text-[18px]">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
