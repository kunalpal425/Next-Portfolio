"use client";

import { useState } from "react";
import Navbar from "@/app/_Navbar/Navbar";
import Footer from "@/app/_Footer/Footer";
import PageTransition from "@/components/ui/pageTransaction";
import StairTransition from "@/components/ui/StairTransition";
import IntroAnimation from "./AnimatedIntro";

export default function IntroWrapper({ children }) {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {/* Intro overlay */}
      {showIntro && (
        <IntroAnimation onFinish={() => setShowIntro(false)} />
      )}

      {/* Site */}
      <Navbar />

      <main>
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </main>

      <Footer />
    </>
  );
}
