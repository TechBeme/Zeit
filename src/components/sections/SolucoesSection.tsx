"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useDictionary } from "@/i18n/DictionaryProvider";

const SOLUTION_ICONS = [
    (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.467.732-3.558" />
        </svg>
    ),
    (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
        </svg>
    ),
    (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>
    ),
    (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
    ),
];

const SOLUTION_IMAGES = [
    "/solucoes/internet.png",
    "/solucoes/data-center.png",
    "/solucoes/fibra-ponto-a-ponto.png",
    "/solucoes/firewall.png",
];

const COUNT = SOLUTION_ICONS.length;
const WHEEL_COOLDOWN = 600; // ms between card transitions

export default function SolucoesSection() {
    const { dict } = useDictionary();
    const sectionRef = useRef<HTMLElement>(null);
    const [active, setActive] = useState(0);
    const lastWheel = useRef(0);
    const activeRef = useRef(0); // mirror of active state for use in wheel handler

    // Keep ref in sync with state
    useEffect(() => {
        activeRef.current = active;
    }, [active]);

    // Listen for navbar navigation events to reset/set active card
    useEffect(() => {
        const onNav = (e: Event) => {
            const detail = (e as CustomEvent).detail;
            if (detail?.target === "inicio") {
                setActive(0);
            } else if (detail?.target === "sobre") {
                setActive(COUNT - 1);
            } else if (detail?.target === "solucoes") {
                setActive(0);
            }
        };
        window.addEventListener("zeit:nav", onNav);
        return () => window.removeEventListener("zeit:nav", onNav);
    }, []);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const handleScroll = (direction: "down" | "up") => {
            const rect = section.getBoundingClientRect();
            const inView = Math.abs(rect.top) < 10;
            if (!inView) return;

            const now = Date.now();
            if (now - lastWheel.current < WHEEL_COOLDOWN) return;

            const down = direction === "down";
            const current = activeRef.current;

            if (down && current < COUNT - 1) {
                lastWheel.current = now;
                setActive(current + 1);
            } else if (!down && current > 0) {
                lastWheel.current = now;
                setActive(current - 1);
            } else {
                lastWheel.current = now;
                if (down) {
                    const next = section.nextElementSibling as HTMLElement | null;
                    if (next) next.scrollIntoView({ behavior: "smooth" });
                } else {
                    const prevSection = section.previousElementSibling as HTMLElement | null;
                    if (prevSection) prevSection.scrollIntoView({ behavior: "smooth" });
                }
            }
        };

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            handleScroll(e.deltaY > 0 ? "down" : "up");
        };

        // --- Touch handling ---
        let touchStartY = 0;
        const SWIPE_THRESHOLD = 30;

        const onTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };

        const onTouchMove = (e: TouchEvent) => {
            e.preventDefault();
        };

        const onTouchEnd = (e: TouchEvent) => {
            const deltaY = touchStartY - e.changedTouches[0].clientY;
            if (Math.abs(deltaY) < SWIPE_THRESHOLD) return;
            handleScroll(deltaY > 0 ? "down" : "up");
        };

        window.addEventListener("wheel", onWheel, { passive: false });
        window.addEventListener("touchstart", onTouchStart, { passive: true });
        window.addEventListener("touchmove", onTouchMove, { passive: false });
        window.addEventListener("touchend", onTouchEnd, { passive: true });
        return () => {
            window.removeEventListener("wheel", onWheel);
            window.removeEventListener("touchstart", onTouchStart);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onTouchEnd);
        };
    }, []);

    return (
        <section
            id="solucoes"
            ref={sectionRef}
            className="relative flex h-screen items-center overflow-hidden bg-[#131313]"
        >
            {/* Full-section background image — changes with active solution */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={SOLUTION_IMAGES[active]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${SOLUTION_IMAGES[active]})` }}
                />
            </AnimatePresence>
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/85 to-[#131313]/60" />

            {/* Ambient glow */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(246, 190, 57, 0.04) 0%, transparent 70%)",
                }}
            />

            <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 text-center sm:mb-12 md:mb-16"
                >
                    <h2 className="font-[family-name:var(--font-headline)] text-2xl font-bold tracking-tighter text-[#e5e2e1] sm:text-4xl md:text-5xl lg:text-6xl">
                        {dict.solutions.title}
                    </h2>
                    <p className="mx-auto mt-2 max-w-xl text-sm font-light leading-relaxed text-[#c6c6cf]/60 sm:mt-4 sm:text-base font-[family-name:var(--font-body)]">
                        {dict.solutions.subtitle}
                    </p>
                </motion.div>

                {/* Content area */}
                <div className="grid gap-6 sm:gap-10 md:grid-cols-[1fr_1.5fr] md:items-center md:gap-12">
                    {/* Left — solution list */}
                    <div className="flex flex-col gap-1 sm:gap-2">
                        {dict.solutions.items.map((sol, idx) => {
                            const isActive = idx === active;
                            return (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => setActive(idx)}
                                    className={`group relative flex items-center gap-3 rounded-2xl px-4 py-2.5 text-left transition-all duration-500 cursor-pointer sm:gap-4 sm:px-5 sm:py-4 ${isActive ? "bg-[#1e1e1e]" : "bg-transparent hover:bg-[#1a1a1a]"
                                        }`}
                                >
                                    {/* Active bar */}
                                    <div
                                        className={`absolute left-0 top-1/2 h-8 w-[3px] -translate-y-1/2 rounded-r-full transition-all duration-500 ${isActive ? "bg-[#f6be39] opacity-100" : "bg-transparent opacity-0"
                                            }`}
                                    />
                                    {/* Icon */}
                                    <div
                                        className={`shrink-0 transition-colors duration-500 ${isActive ? "text-[#f6be39]" : "text-[#c6c6cf]/30"
                                            }`}
                                    >
                                        {SOLUTION_ICONS[idx]}
                                    </div>
                                    {/* Title */}
                                    <span
                                        className={`text-sm font-medium tracking-wide transition-colors duration-500 font-[family-name:var(--font-label)] ${isActive ? "text-[#e5e2e1]" : "text-[#c6c6cf]/40"
                                            }`}
                                    >
                                        {sol.title}
                                    </span>
                                </button>
                            );
                        })}

                        {/* Scroll progress dots */}
                        <div className="mt-4 flex items-center gap-2 px-5">
                            {SOLUTION_ICONS.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${idx === active
                                        ? "w-6 bg-[#f6be39]"
                                        : idx < active
                                            ? "w-1.5 bg-[#f6be39]/30"
                                            : "w-1.5 bg-[#4f4634]/40"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right — featured card */}
                    <div className="relative min-h-[260px] sm:min-h-[320px] md:min-h-[380px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -30, scale: 0.96 }}
                                transition={{ duration: 0.45, ease: "easeInOut" }}
                                className="absolute inset-0"
                            >
                                <div
                                    className="flex h-full flex-col justify-between rounded-3xl border border-[#4f4634]/15 p-5 sm:p-8 md:p-10"
                                    style={{
                                        background:
                                            "radial-gradient(ellipse 80% 80% at 50% 40%, rgba(42,42,42,0.6) 0%, rgba(26,26,26,0.6) 50%, rgba(19,19,19,0.6) 100%)",
                                        backdropFilter: "blur(12px)",
                                        WebkitBackdropFilter: "blur(12px)",
                                        boxShadow:
                                            "0 8px 32px -8px rgba(12,12,12,0.6), 0 2px 8px -2px rgba(12,12,12,0.4), inset 0 1px 0 0 rgba(229,226,225,0.04)",
                                    }}
                                >
                                    {/* Icon + Number */}
                                    <div className="flex items-start justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6be39]/10 text-[#f6be39]">
                                            {SOLUTION_ICONS[active]}
                                        </div>
                                        <span className="font-[family-name:var(--font-headline)] text-4xl font-bold tracking-tighter text-[#4f4634]/30 sm:text-6xl">
                                            {String(active + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="mt-4 sm:mt-8">
                                        <h3 className="font-[family-name:var(--font-headline)] text-xl font-bold tracking-tight text-[#e5e2e1] sm:text-2xl md:text-3xl">
                                            {dict.solutions.items[active].title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-relaxed text-[#c6c6cf]/60 sm:mt-4 sm:text-base font-[family-name:var(--font-body)]">
                                            {dict.solutions.items[active].description}
                                        </p>
                                    </div>

                                    {/* Bottom accent line */}
                                    <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-[#f6be39]/20 via-[#f6be39]/5 to-transparent sm:mt-8" />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
