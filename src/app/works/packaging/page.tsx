"use client";

import type React from "react";

import Link from "next/link";
import { Box } from "@mui/material";
import { useRef, useState } from "react";

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

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const packagingItems = [
    {
      href: "/works/packaging/cocon",
      image: "/pakink-1.png",
      title: "Етикетка",
      description: "для соняшникового меду",
    },
    {
      href: "",
      image: "/packing-2.png",
      title: "ЕТИКЕТКА+КОРОБКА",
      description: "для регенеруючої мазі",
    },
    {
      href: "",
      image: "/packing-3.png",
      title: "ЕТИКЕТКА+КОРОБКА",
      description: "серія упаковаль для олій",
    },
    {
      href: "",
      image: "/packing-4.png",
      title: "АЙДЕНТИКА",
      description: "Smart dragon english school",
    },
  ];

  return (
    <main className="h-[calc(100vh-60px)] py-6 flex justify-center items-center px-2">
      <section className="flex flex-col max-w-[1232px] w-full">
        {/* Mobile Slider */}
        <Box
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="md:hidden"
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: "16px",
            padding: "16px",
            scrollSnapType: "x mandatory",
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
            "&::-webkit-scrollbar": {
              height: "8px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#f1f1f1",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "#555",
              },
            },
          }}
        >
          {packagingItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                flexShrink: 0,
                width: "402px",
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
                    draggable={false}
                  />
                </div>
                <p className="font-normal text-[18px]">{item.description}</p>
              </Link>
            </Box>
          ))}
        </Box>

        {/* Desktop Grid */}
        <div className="hidden md:flex gap-[50px] justify-between">
          {packagingItems.map((item, index) => (
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
