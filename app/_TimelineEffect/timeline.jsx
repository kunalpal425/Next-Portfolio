import React, { useEffect, useRef } from "react";

// const NIGHT = "#0a0a0a";
const NIGHT = "#000000";
const PARCHMENT = "#F3EFE6";
const ICE = "#7FA8C9";
const DAWN = "#D98E4A";
const muted = (opacity) => `rgba(243,239,230,${opacity})`;

const EVENTS = [
    {
        year: "2022",
        accent: "ice",
        title: "Started Programming Fundamentals",
        text: "Learned C programming, problem-solving, variables, loops, functions, arrays, and basic algorithms to build a strong programming foundation.",
    },
    {
        year: "2022",
        accent: "ice",
        title: "Mastered Data Structures & Algorithms",
        text: "Studied arrays, linked lists, stacks, queues, trees, graphs, recursion, sorting, searching, and time complexity analysis.",
    },
    {
        year: "2023",
        accent: "ice",
        title: "Learned Object-Oriented Programming",
        text: "Understood classes, objects, inheritance, polymorphism, encapsulation, and abstraction using Java and JavaScript.",
    },
    {
        year: "2023",
        accent: "ice",
        big: true,
        badge: "Core CS",
        title: "Database Management Systems",
        text: "Learned SQL, normalization, indexing, joins, transactions, and database design concepts with MySQL and MongoDB.",
    },
    {
        year: "2023",
        accent: "dawn",
        title: "Computer Networks",
        text: "Studied HTTP, HTTPS, DNS, TCP/IP, OSI model, REST APIs, client-server architecture, and networking fundamentals.",
    },
    {
        year: "2024",
        accent: "dawn",
        title: "Frontend Development",
        text: "Built responsive user interfaces using HTML, CSS, JavaScript, Tailwind CSS, React.js, and component-based architecture.",
    },
    {
        year: "2024",
        accent: "dawn",
        title: "Backend Development",
        text: "Developed REST APIs using Node.js and Express.js, implemented authentication, middleware, and server-side logic.",
    },
    {
        year: "2024",
        accent: "dawn",
        title: "MERN Stack Projects",
        text: "Integrated MongoDB, Express.js, React.js, and Node.js to create full-stack applications with authentication and CRUD operations.",
    },
    {
        year: "2025",
        accent: "dawn",
        title: "Version Control & Deployment",
        text: "Used Git and GitHub for version control and deployed applications on platforms like Vercel, Netlify, and Render.",
    },
    {
        year: "2025",
        accent: "dawn",
        title: "React Native Development",
        text: "Started building cross-platform mobile applications using React Native, Expo, navigation, state management, and API integration.",
    },
    {
        year: "2025",
        accent: "dawn",
        big: true,
        badge: "Portfolio Ready",
        title: "Full-Stack Web Developer",
        text: "Applied Computer Science fundamentals and the MERN stack to build scalable projects, optimize performance, and create production-ready applications.",
    },
];

export default function EverestTimeline() {
    const trackRef = useRef(null);
    const fillRef = useRef(null);
    const rowRefs = useRef([]);
    rowRefs.current = [];

    const addRowRef = (el) => {
        if (el && !rowRefs.current.includes(el)) rowRefs.current.push(el);
    };

    useEffect(() => {
        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReduced) {
            rowRefs.current.forEach((el) => el.classList.add("is-visible"));
            if (fillRef.current && trackRef.current) {
                fillRef.current.style.transition = "none";
                fillRef.current.style.height = trackRef.current.offsetHeight + "px";
            }
            return;
        }

        // Reveal each entry once, as it scrolls into view.
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
        );
        rowRefs.current.forEach((el) => observer.observe(el));

        // Draw the center line as a percentage of the timeline scrolled past viewport-center.
        let ticking = false;
        const updateLine = () => {
            ticking = false;
            if (!trackRef.current || !fillRef.current) return;
            const rect = trackRef.current.getBoundingClientRect();
            const viewportMid = window.innerHeight * 0.5;
            let progress = (viewportMid - rect.top) / rect.height;
            progress = Math.max(0, Math.min(1, progress));
            fillRef.current.style.height = progress * 100 + "%";
        };
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateLine);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        updateLine();

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return (
        <div
            style={{
                background: NIGHT,
                color: PARCHMENT,
                fontFamily: "'Inter', sans-serif",
            }}
            className="min-h-screen"
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap');

        .et-display { font-family: 'Fraunces', serif; }
        .et-mono { font-family: 'JetBrains Mono', monospace; }

        .et-row {
          position: relative;
          display: grid;
          grid-template-columns: 2.5rem 1fr;
          column-gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .et-row { grid-template-columns: 1fr 2.5rem 1fr; column-gap: 3rem; }
        }

        .reveal {
          opacity: 0;
          transition: opacity 0.8s cubic-bezier(.21,.47,.32,.98),
                      transform 0.8s cubic-bezier(.21,.47,.32,.98);
        }
        .reveal-right { transform: translate(28px, 14px); }
        .reveal-left  { transform: translate(-28px, 14px); }
        .reveal.is-visible { opacity: 1; transform: translate(0, 0); }

        .dot-marker { transform: scale(0); transition: transform 0.4s ease 0.35s; }
        .reveal.is-visible .dot-marker { transform: scale(1); }

        @media (prefers-reduced-motion: reduce) {
          .reveal, .dot-marker {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
            {/* Hero */}
            <header
                className="relative overflow-hidden"
                style={{ borderBottom: `1px solid ${muted(0.1)}` }}
            >
                <svg
                    className="absolute bottom-0 left-0 w-full h-24 md:h-32"
                    style={{ color: muted(0.1) }}
                    viewBox="0 0 1200 200"
                    preserveAspectRatio="none"
                    fill="none"
                >
                    <path
                        d="M0 200 L150 90 L260 160 L420 40 L520 130 L640 20 L760 140 L900 70 L1040 150 L1200 60 L1200 200 Z"
                        fill="currentColor"
                    />
                </svg>
                <div className="relative max-w-3xl mx-auto px-6 pt-20 pb-28 md:pt-28 md:pb-36 text-center">
                    <h1 className="et-display text-5xl md:text-7xl font-semibold tracking-tight">
                        Learning Timeline
                    </h1>
                    <p
                        className="mt-5 text-base md:text-lg leading-relaxed max-w-xl mx-auto"
                        style={{ color: muted(0.6) }}
                    >
                        Some Important Bacholar of Science important topic
                    </p>
                </div>
            </header>
            {/* Timeline */}
            <main className="max-w-5xl mx-auto px-6 py-20 md:py-28">
                <div className="relative" ref={trackRef}>
                    {/* center line: faint track + animated progress fill */}
                    <div
                        className="absolute top-0 bottom-0 left-5 md:left-1/2 md:-translate-x-1/2 w-px"
                        style={{ background: muted(0.1) }}
                        aria-hidden="true"
                    />
                    <div
                        ref={fillRef}
                        className="absolute top-0 left-5 md:left-1/2 md:-translate-x-1/2 w-px"
                        style={{
                            height: "0%",
                            background: `linear-gradient(to bottom, ${ICE}, rgba(127,168,201,0.6), ${DAWN})`,
                            transition: "height 0.15s ease-out",
                        }}
                        aria-hidden="true"
                    />

                    <div className="space-y-14 md:space-y-20">
                        {EVENTS.map((ev, i) => {
                            const side = i % 2 === 0 ? "right" : "left";
                            const accentColor = ev.accent === "ice" ? ICE : DAWN;

                            const content = (
                                <div
                                    className={
                                        side === "right"
                                            ? "col-start-2 md:col-start-3"
                                            : "col-start-2 md:col-start-1 md:text-right"
                                    }
                                >
                                    {ev.badge && (
                                        <span
                                            className="et-mono inline-block uppercase rounded-full mb-2 px-2 py-1"
                                            style={{
                                                fontSize: "10px",
                                                letterSpacing: "0.1em",
                                                background: "rgba(217,142,74,0.15)",
                                                color: DAWN,
                                            }}
                                        >
                                            {ev.badge}
                                        </span>
                                    )}
                                    <div
                                        className="et-mono text-xs uppercase"
                                        style={{ letterSpacing: "0.15em", color: accentColor }}
                                    >
                                        {ev.year} · {ev.elevation}
                                    </div>
                                    <h3
                                        className={`et-display mt-1.5 mb-2 ${ev.big
                                            ? "text-2xl md:text-3xl font-semibold"
                                            : "text-xl md:text-2xl font-medium"
                                            }`}
                                    >
                                        {ev.title}
                                    </h3>
                                    <p
                                        className="text-sm md:text-base leading-relaxed"
                                        style={{ color: muted(ev.big ? 0.7 : 0.65) }}
                                    >
                                        {ev.text}
                                    </p>
                                </div>
                            );

                            return (
                                <div
                                    key={ev.year}
                                    ref={addRowRef}
                                    className={`et-row reveal ${side === "right" ? "reveal-right" : "reveal-left"
                                        }`}
                                >
                                    <div className="col-start-1 md:col-start-2 flex justify-center">
                                        <span
                                            className="dot-marker rounded-full"
                                            style={{
                                                marginTop: ev.big ? "4px" : "6px",
                                                width: ev.big ? "16px" : "10px",
                                                height: ev.big ? "16px" : "10px",
                                                background: accentColor,
                                                boxShadow: ev.big
                                                    ? `0 0 0 4px ${NIGHT}, 0 0 0 8px rgba(217,142,74,0.35)`
                                                    : `0 0 0 4px ${NIGHT}`,
                                            }}
                                        />
                                    </div>
                                    {side === "right" ? (
                                        <>
                                            <div className="hidden md:block md:col-start-1" />
                                            {content}
                                        </>
                                    ) : (
                                        <>
                                            {content}
                                            <div className="hidden md:block md:col-start-3" />
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </div>
    );
}
