"use client";

import type React from "react";
import Image from "next/image";
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
        {/* Мобільний слайдер */}
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
                <div className="relative w-[402px] h-[528px] mb-[50px]">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={`${item.title} - ${item.description}`}
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
                    draggable={false}
                  />
                </div>

                <p className="font-normal text-[18px]">{item.description}</p>
              </Link>
            </Box>
          ))}
        </Box>

        {/* Десктопна сітка */}
        <div className="hidden md:flex gap-[50px] justify-between">
          {packagingItems.map((item, index) => (
            <Link key={index} href={item.href} className="w-[252px]">
              <div className="relative w-[252px] h-[328px] mb-[50px]">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={`${item.title} - ${item.description}`}
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
