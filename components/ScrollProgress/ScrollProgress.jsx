"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <motion.div
            style={{ width }}
            className="fixed top-0 left-0 h-[3px] z-[9999]
      bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
      shadow-[0_0_10px_rgba(168,85,247,0.7)]"
        />
    );
}