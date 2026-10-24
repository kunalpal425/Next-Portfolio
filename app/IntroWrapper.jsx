"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/_Navbar/Navbar";
import Footer from "@/app/_Footer/Footer";
import PageTransition from "@/components/ui/pageTransaction";
import StairTransition from "@/components/ui/StairTransition";
import IntroAnimation from "./AnimatedIntro";

export default function IntroWrapper({ children }) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      window.scrollTo({
        top: 0,
        behavior: "auto"
      });

    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return <IntroAnimation />;
  }

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