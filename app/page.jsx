"use client";

import { Code } from "@deemlol/next-icons";
import { Geist } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import EarthCanvas from "../components/ui/EarthCanvas";
import Button from "@/components/ui/button";

const geist = Geist({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const pathname = usePathname();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 999) return;

    const interval = setInterval(() => {
      setCount((prev) => Math.min(prev + 1, 999));
    }, 300);

    return () => clearInterval(interval);
  }, []); 


  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white flex items-center px-8 lg:px-24 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="flex flex-col space-y-10 z-10">
          {/* 🎬 Masked Video Text */}
          <div className="relative w-full h-[420px]">
            <div className="absolute -inset-10 bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />
            <svg
              className="relative tracking-widest w-full h-full top-15"
              viewBox="0 0 1600 900"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <mask id="textMask">
                  <rect width="100%" height="100%" fill="black" />

                  <text
                    x="50%"
                    y="40%"
                    textAnchor="middle"
                    fontSize="160"
                    fontWeight="800"
                    fontFamily="Arial, Helvetica, sans-serif"
                    fill="white"
                    letterSpacing="8"
                  >
                    WEB
                  </text>

                  <text
                    x="50%"
                    y="62%"
                    textAnchor="middle"
                    fontSize="170"
                    fontWeight="900"
                    fontFamily="Arial, Helvetica, sans-serif"
                    fill="white"
                    letterSpacing="6"
                  >
                    DEVELOPER
                  </text>

                </mask>
              </defs>

              <foreignObject width="100%" height="100%" mask="url(#textMask)" key={pathname}>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/video.mp4" type="video/mp4" />
                </video>
              </foreignObject>

            </svg>
          </div>

          {/* 🧊 Description */}
          <div className="border rounded-2xl p-6 shadow-lg text-center w-full max-w-3xl bg-gray-800/50 backdrop-blur-md border-cyan-500/20">
            <p className="text-gray-300 text-lg leading-relaxed">
              Crafting fast, modern and scalable web experiences. I build
              high-performance full-stack applications with clean UI and smooth
              interactions.
            </p>

            <div className="flex gap-4 mt-6 justify-center">
              <Link href="/about">
                <Button text="Skills" />
              </Link>
              <Link href="/contact">
                <Button text="Contact Me" />
              </Link>
            </div>
          </div>
        </div>

        <EarthCanvas key={pathname} />
        <div />
      </div>
    </section>
  );
}
