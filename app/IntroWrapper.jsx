"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/_Navbar/Navbar";
import Footer from "@/app/_Footer/Footer";
import PageTransition from "@/components/ui/pageTransaction";
import StairTransition from "@/components/ui/StairTransition";
import IntroAnimation from "./AnimatedIntro";

export default function IntroWrapper({ children }) {
  const [showIntro, setShowIntro] = useState(true);

  // ⭐ control intro duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500); // 👈 match your intro animation duration

    return () => clearTimeout(timer);
  }, []);

  // ⭐ show intro FIRST
  if (showIntro) {
    return <IntroAnimation />;
  }

  // ⭐ show site AFTER intro
  return (
    <>
      <Navbar />
      <main>
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  );
}