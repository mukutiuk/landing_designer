"use client";

import type React from "react";

import Link from "next/link";
import { Box } from "@mui/material";
import { useRef, useState } from "react";

const poligrafItems = [
  {
    image: "/poligraf-1.png",
    title: "БАНЕР А3",
    description: "для Medline nail",
    href: "",
  },
  {
    image: "/poligraf-2.png",
    title: "ЛИСТІВКИ",
    description: "для студії декору Belove",
    href: "",
  },
  {
    image: "/poligraf-3.png",
    title: "БУКЛЕТ, ФЛАЄР",
    description: "для HempActive",
    href: "",
  },
  {
    image: "/poligraf-4.png",
    title: "МЕНЮ",
    description: "для закладу харчування",
    href: "",
  },
];

export default function Page() {
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

  const handleMouseUp = () => {
    setIsDragging(false);
  };

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
        <Box
          ref={sliderRef}
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
              "&:hover": {
                backgroundColor: "#555",
              },
            },
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
          }}
        >
          {poligrafItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                flex: "0 0 402px",
                scrollSnapAlign: "start",
              }}
            >
              <Link href={item.href} className="block">
                <img
                  className="w-[402px] h-[528px] mb-[50px] object-cover"
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  draggable={false}
                />
                <div className="flex justify-between items-end">
                  <h4 className="text-[18px] font-bold">{item.title}</h4>
                  <img
                    className="w-[15px] h-[15px] rotate-270"
                    src="/Group16.svg"
                    alt=""
                  />
                </div>
                <p className="font-normal text-[18px]">{item.description}</p>
              </Link>
            </Box>
          ))}
        </Box>

        <div className="hidden md:flex gap-[50px] justify-between ">
          {poligrafItems.map((item, index) => (
            <Link key={index} href={item.href} className="w-[252px]">
              <img
                className="w-[252px] h-[328px] mb-[50px]"
                src={item.image || "/placeholder.svg"}
                alt={item.title}
              />
              <div className="flex justify-between items-end">
                <h4 className="text-[18px] font-bold">{item.title}</h4>
                <img
                  className="w-[15px] h-[15px] rotate-270"
                  src="/Group16.svg"
                  alt=""
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
