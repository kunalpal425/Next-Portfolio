"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function IntroAnimation({ onFinish }) {
    const greetings = [
        "Hello",
        "Hi",
        "Bonjour",
        "Ciao",
        "Hola",
        "Namaste",
        "Salaam",
    ];

    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    // rotate greetings
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((i) => (i + 1) % greetings.length);
        }, 700);

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait" onExitComplete={onFinish}>
            {visible && (
                <motion.div
                    className="fixed  inset-0 flex items-center justify-center bg-black text-white overflow-hidden"
                    initial={{ y: 0 }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.h1
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35 }}
                        className="text-4xl md:text-6xl font-bold text-center"
                    >
                        {greetings[index]}
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
