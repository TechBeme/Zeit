"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "motion/react";
import { useDictionary } from "@/i18n/DictionaryProvider";


// Pre-computed particle positions to avoid hydration mismatch from Math.random()
const PARTICLES = [
    { id: 0, top: 8, left: 12, duration: 4.2, delay: 0.5 },
    { id: 1, top: 15, left: 67, duration: 5.8, delay: 1.2 },
    { id: 2, top: 22, left: 34, duration: 3.5, delay: 2.1 },
    { id: 3, top: 31, left: 89, duration: 6.1, delay: 0.8 },
    { id: 4, top: 45, left: 23, duration: 4.7, delay: 1.9 },
    { id: 5, top: 52, left: 56, duration: 5.3, delay: 0.3 },
    { id: 6, top: 18, left: 78, duration: 3.9, delay: 2.7 },
    { id: 7, top: 63, left: 45, duration: 6.5, delay: 1.1 },
    { id: 8, top: 71, left: 8, duration: 4.1, delay: 0.6 },
    { id: 9, top: 38, left: 92, duration: 5.6, delay: 2.4 },
    { id: 10, top: 85, left: 31, duration: 3.8, delay: 1.5 },
    { id: 11, top: 92, left: 72, duration: 4.9, delay: 0.9 },
    { id: 12, top: 5, left: 51, duration: 5.1, delay: 2.0 },
    { id: 13, top: 76, left: 63, duration: 6.3, delay: 0.4 },
    { id: 14, top: 28, left: 17, duration: 4.4, delay: 1.7 },
    { id: 15, top: 59, left: 82, duration: 3.6, delay: 2.8 },
    { id: 16, top: 41, left: 4, duration: 5.9, delay: 0.7 },
    { id: 17, top: 67, left: 38, duration: 4.3, delay: 1.3 },
    { id: 18, top: 12, left: 95, duration: 6.0, delay: 2.5 },
    { id: 19, top: 88, left: 19, duration: 3.7, delay: 0.2 },
    { id: 20, top: 34, left: 58, duration: 5.4, delay: 1.8 },
    { id: 21, top: 49, left: 75, duration: 4.6, delay: 2.3 },
    { id: 22, top: 96, left: 42, duration: 6.2, delay: 0.1 },
    { id: 23, top: 25, left: 28, duration: 3.4, delay: 1.6 },
    { id: 24, top: 56, left: 11, duration: 5.7, delay: 2.9 },
    { id: 25, top: 74, left: 86, duration: 4.0, delay: 0.5 },
    { id: 26, top: 3, left: 41, duration: 5.2, delay: 1.4 },
    { id: 27, top: 82, left: 53, duration: 6.4, delay: 2.6 },
    { id: 28, top: 47, left: 68, duration: 3.3, delay: 0.8 },
    { id: 29, top: 19, left: 2, duration: 4.8, delay: 2.2 },
];

export default function HeroSection() {
    const { dict } = useDictionary();
    const btnRef = useRef<HTMLAnchorElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const rightRef = useRef<SVGPathElement>(null);
    const leftRef = useRef<SVGPathElement>(null);
    const [btnMouse, setBtnMouse] = useState({ x: 0, y: 0 });
    const [btnHovered, setBtnHovered] = useState(false);
    const [btnSize, setBtnSize] = useState({ w: 0, h: 0 });

    const handleBtnMouseMove = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>) => {
            if (!btnRef.current) return;
            const rect = btnRef.current.getBoundingClientRect();
            setBtnMouse({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        },
        []
    );

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Measure button for SVG overlay
    useEffect(() => {
        const el = btnRef.current;
        if (!el) return;
        const measure = () => {
            setBtnSize({ w: el.offsetWidth, h: el.offsetHeight });
        };
        measure();
        const ro = new ResizeObserver(measure);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    // Sync border draw with video — CapCut timeline 00:00:20 → 00:02:20 (30fps)
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const START = 20 / 30;          // frame 20 @ 30fps ≈ 0.667s
        const END = 2 + 20 / 30;        // 2s + frame 20 ≈ 2.667s
        const DURATION = END - START;    // ≈ 2s

        let rafId: number;
        const update = () => {
            const t = video.currentTime;
            const progress = t < START ? 0 : Math.min((t - START) / DURATION, 1);
            const offset = 1 - progress;
            if (rightRef.current) rightRef.current.style.strokeDashoffset = String(offset);
            if (leftRef.current) leftRef.current.style.strokeDashoffset = String(offset);
            rafId = requestAnimationFrame(update);
        };

        rafId = requestAnimationFrame(update);
        return () => cancelAnimationFrame(rafId);
    }, []);

    return (
        <section
            id="inicio"
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#131313]"
        >
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="h-full w-full object-cover opacity-60"
                >
                    <source src="/hero.mp4" type="video/mp4" />
                </video>
                {/* Dark warm overlay */}
                <div className="absolute inset-0 bg-black/55" />
                {/* Warm gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
                {/* Amber ambient glow at center — primary as light source */}
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 55%, rgba(246, 190, 57, 0.07) 0%, transparent 70%)' }} />
            </div>

            {/* Particle dots - decorative (fixed positions to avoid hydration mismatch) */}
            <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
                {PARTICLES.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute h-[2px] w-[2px] rounded-full bg-[#c6c6cf]/30"
                        style={{
                            top: `${p.top}%`,
                            left: `${p.left}%`,
                        }}
                        animate={{
                            opacity: [0.1, 0.6, 0.1],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
                {/* Title */}
                <motion.h1
                    className="font-[family-name:var(--font-headline)] text-4xl font-bold tracking-tighter leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl text-[#e5e2e1]"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                >
                    {dict.hero.title1}
                    <br />
                    {dict.hero.title2}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="font-[family-name:var(--font-headline)] text-2xl font-bold tracking-tighter leading-tight sm:text-3xl md:text-4xl lg:text-5xl text-[#f6be39]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                >
                    {dict.hero.subtitle}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
                    className="relative mt-8"
                >
                    {/* Soft diffused glow behind button — like a warm shadow */}
                    <div
                        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{
                            width: 280,
                            height: 120,
                            background: 'radial-gradient(ellipse 50% 45% at 50% 50%, rgba(246, 190, 57, 0.08) 0%, rgba(246, 190, 57, 0.03) 40%, transparent 100%)',
                            filter: 'blur(20px)',
                        }}
                    />
                    {/* SVG animated border — two dots from bottom center meeting at top */}
                    {btnSize.w > 0 && (() => {
                        const W = btnSize.w;
                        const H = btnSize.h;
                        const R = H / 2;
                        // Right half: bottom-center → right edge → right semicircle → top-center
                        const rightPath = [
                            `M ${W / 2} ${H}`,
                            `L ${W - R} ${H}`,
                            `A ${R} ${R} 0 0 0 ${W - R} 0`,
                            `L ${W / 2} 0`,
                        ].join(' ');
                        // Left half: bottom-center → left edge → left semicircle → top-center
                        const leftPath = [
                            `M ${W / 2} ${H}`,
                            `L ${R} ${H}`,
                            `A ${R} ${R} 0 0 1 ${R} 0`,
                            `L ${W / 2} 0`,
                        ].join(' ');

                        return (
                            <svg
                                className="pointer-events-none absolute inset-0 z-20"
                                width={W}
                                height={H}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    ref={rightRef}
                                    d={rightPath}
                                    stroke="rgba(246,190,57,0.45)"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                    pathLength={1}
                                    strokeDasharray={1}
                                    strokeDashoffset={1}
                                    fill="none"
                                />
                                <path
                                    ref={leftRef}
                                    d={leftPath}
                                    stroke="rgba(246,190,57,0.45)"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                    pathLength={1}
                                    strokeDasharray={1}
                                    strokeDashoffset={1}
                                    fill="none"
                                />
                            </svg>
                        );
                    })()}
                    <a
                        ref={btnRef}
                        href="#solucoes"
                        onClick={(e) => handleScroll(e, "#solucoes")}
                        onMouseMove={handleBtnMouseMove}
                        onMouseEnter={() => setBtnHovered(true)}
                        onMouseLeave={() => setBtnHovered(false)}
                        className="relative z-10 inline-block rounded-full px-12 py-3.5 text-sm font-normal uppercase tracking-widest text-[#c6c6cf]/70 font-[family-name:var(--font-label)] backdrop-blur-sm"
                        style={{
                            background: 'radial-gradient(ellipse 80% 80% at 50% 40%, #2a2a2a 0%, #1a1a1a 50%, #111111 100%)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            transform: btnHovered ? 'scale(1.06)' : 'scale(1)',
                            boxShadow: btnHovered
                                ? '0 8px 30px -6px rgba(12,12,12,0.7), inset 0 1px 0 0 rgba(229,226,225,0.06)'
                                : '0 4px 16px -4px rgba(12,12,12,0.5), inset 0 1px 0 0 rgba(229,226,225,0.04)',
                        }}
                    >
                        {/* Inner glow: soft center default, follows mouse on hover */}
                        <span
                            className="pointer-events-none absolute inset-0 rounded-[inherit] transition-all duration-300"
                            style={{
                                background: btnHovered
                                    ? `radial-gradient(80px circle at ${btnMouse.x}px ${btnMouse.y}px, rgba(246, 190, 57, 0.08), transparent 100%)`
                                    : 'radial-gradient(60px circle at 50% 50%, rgba(246, 190, 57, 0.05), transparent 100%)',
                            }}
                        />
                        <span className="relative z-10">{dict.hero.cta}</span>
                    </a>
                </motion.div>
            </div>

        </section>
    );
}
