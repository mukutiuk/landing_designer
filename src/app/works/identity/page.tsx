"use client";

import type React from "react";

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
    image: "/logo-2.png",
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
    image: "/logo-4.png",
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

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  if (isMobile) {
    return (
      <main className="min-h-[calc(100vh-60px)] py-6 flex justify-center items-center px-2">
        <section className="flex flex-col w-full">
          <Box
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            sx={{
              display: "flex",
              gap: "20px",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              cursor: isDragging ? "grabbing" : "grab",
              userSelect: "none",
              px: 2,
              pb: 2,
              "&::-webkit-scrollbar": {
                height: "6px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#f1f1f1",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#555",
              },
            }}
          >
            {identityItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: "0 0 auto",
                  width: "402px",
                  scrollSnapAlign: "center",
                }}
              >
                <Link href={item.href} className="block">
                  <img
                    className="w-[402px] h-[528px] mb-[50px] object-cover"
                    src={item.image || "/placeholder.svg"}
                    alt={item.description}
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
        </section>
      </main>
    );
  }

  return (
    <main className="h-[calc(100vh-60px)] py-6 flex justify-center items-center">
      <section className="flex flex-col max-w-[1232px] w-full">
        <div className="flex gap-[50px] justify-between">
          {identityItems.map((item, index) => (
            <Link key={index} href={item.href} className="w-[252px]">
              <img
                className="w-[252px] h-[328px] mb-[50px]"
                src={item.image || "/placeholder.svg"}
                alt={item.description}
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
