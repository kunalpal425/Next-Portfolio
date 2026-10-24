"use client";
import Link from "next/link";
import Button from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Kunal_resume.pdf";
    link.download = "resume.pdf";
    link.click();
};

export default function Navbar() {

    const [hidden, setHidden] = useState(false);
    const [hireMeCoolingDown, setHireMeCoolingDown] = useState(false);
    const hireMeCooldownRef = useRef(false);
    const hireMeTimeoutRef = useRef(null);

    const handleHireMeClick = () => {
        if (hireMeCooldownRef.current) return;

        hireMeCooldownRef.current = true;
        setHireMeCoolingDown(true);
        downloadResume();

        hireMeTimeoutRef.current = window.setTimeout(() => {
            hireMeCooldownRef.current = false;
            setHireMeCoolingDown(false);
            hireMeTimeoutRef.current = null;
        }, 3000);
    };

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down
                setHidden(true);
            } else {
                // Scrolling up
                setHidden(false);
            }
            lastScrollY = currentScrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (hireMeTimeoutRef.current !== null) {
                window.clearTimeout(hireMeTimeoutRef.current);
            }
        };
    }, []);

    return (
        <nav className={`fixed w-full mt-3 top-0 z-50 flex sm:pt-1.5 items-center justify-between  px-8 py-4 bg-transparent backdrop-blur-sm ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
            <h2 className="text-xl font-bold">
                <span className="text-cyan-400">KUNAL</span> | MERN Stack Developer
            </h2>
            <div className="hidden md:flex gap-8 text-lg">
                <Link href="/" className="hover:text-gray-300 transition">Home</Link>
                <Link href="/about" className="hover:text-gray-300 transition">About</Link>
                <Link href="/projects" className="hover:text-gray-300 transition">Projects</Link>
                <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
                <Link href="/blog" className="hover:text-gray-300 transition">Blog</Link>
            </div>
            <div className="hidden md:block">
                <Button
                    text={hireMeCoolingDown ? "Please wait..." : "Hire Me"}
                    onClick={handleHireMeClick}
                    disabled={hireMeCoolingDown}
                />
            </div>
        </nav>
    );
}
