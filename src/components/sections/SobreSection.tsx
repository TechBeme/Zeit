"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { useDictionary } from "@/i18n/DictionaryProvider";

const FOOTER_HEIGHT = 150; // px the about slides up to reveal footer
const WHEEL_COOLDOWN = 600;

export default function SobreSection() {
    const { dict } = useDictionary();
    const zeitRef = useRef<HTMLSpanElement>(null);
    const telecomRef = useRef<HTMLSpanElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const [showFooter, setShowFooter] = useState(false);
    const showFooterRef = useRef(false);
    const lastWheel = useRef(0);

    useEffect(() => {
        showFooterRef.current = showFooter;
    }, [showFooter]);

    useEffect(() => {
        const sync = () => {
            if (zeitRef.current && telecomRef.current) {
                const zeitW = zeitRef.current.offsetWidth;
                let lo = 8, hi = 200;
                for (let i = 0; i < 30; i++) {
                    const mid = (lo + hi) / 2;
                    telecomRef.current.style.fontSize = `${mid}px`;
                    const w = telecomRef.current.offsetWidth;
                    if (w < zeitW) lo = mid;
                    else hi = mid;
                }
                telecomRef.current.style.fontSize = `${lo}px`;
            }
        };
        document.fonts.ready.then(sync);
        window.addEventListener("resize", sync);
        return () => window.removeEventListener("resize", sync);
    }, []);

    // Listen for navbar navigation events
    useEffect(() => {
        const onNav = (e: Event) => {
            const detail = (e as CustomEvent).detail;
            if (detail?.target === "sobre") {
                setShowFooter(false);
            }
        };
        window.addEventListener("zeit:nav", onNav);
        return () => window.removeEventListener("zeit:nav", onNav);
    }, []);

    // Internal scroll handling (like SolucoesSection)
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const handleScroll = (direction: "down" | "up") => {
            const rect = section.getBoundingClientRect();
            const inView = Math.abs(rect.top) < 10;
            if (!inView) return;

            const now = Date.now();
            if (now - lastWheel.current < WHEEL_COOLDOWN) return;

            const footerVisible = showFooterRef.current;

            if (direction === "down" && !footerVisible) {
                // Show footer
                lastWheel.current = now;
                setShowFooter(true);
            } else if (direction === "up" && footerVisible) {
                // Hide footer
                lastWheel.current = now;
                setShowFooter(false);
            } else if (direction === "up" && !footerVisible) {
                // Go to previous section
                lastWheel.current = now;
                const prev = section.previousElementSibling as HTMLElement | null;
                if (prev) prev.scrollIntoView({ behavior: "smooth" });
            }
            // direction === "down" && footerVisible → do nothing, last position
        };

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            handleScroll(e.deltaY > 0 ? "down" : "up");
        };

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
            id="sobre"
            ref={sectionRef}
            className="relative h-screen overflow-hidden bg-[#0c0c0c]"
        >
            {/* About content — slides up to reveal footer */}
            <div
                className="absolute inset-0 flex items-center px-6 transition-transform duration-700 ease-in-out"
                style={{ transform: showFooter ? `translateY(-${FOOTER_HEIGHT}px)` : "translateY(0)" }}
            >
                {/* Full-section background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url(/about.png)" }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/85 to-[#131313]/60" />

                {/* Subtle radial glow */}
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(246, 190, 57, 0.03) 0%, transparent 70%)",
                    }}
                />

                <div className="relative z-10 mx-auto w-full max-w-6xl py-20 lg:py-0">
                    <div className="grid items-center gap-16 md:grid-cols-[1fr_1fr] md:gap-20">
                        {/* Left — Brand visual */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative flex items-center justify-center"
                        >
                            <div className="relative">
                                {/* Glow behind logo */}
                                <div
                                    className="absolute inset-0 -m-8 rounded-full blur-3xl"
                                    style={{
                                        background:
                                            "radial-gradient(circle, rgba(246, 190, 57, 0.08) 0%, transparent 70%)",
                                    }}
                                />
                                {/* Logo + Text lockup */}
                                <div className="relative flex items-center gap-5">
                                    <img
                                        src="/logo.png"
                                        alt="Zeit"
                                        className="h-28 w-auto md:h-36"
                                    />
                                    <div className="flex flex-col items-start">
                                        <span
                                            ref={zeitRef}
                                            className="font-[family-name:var(--font-headline)] text-7xl font-bold tracking-tighter uppercase text-[#e5e2e1] md:text-8xl"
                                            style={{ lineHeight: 1 }}
                                        >
                                            Zeit
                                        </span>
                                        <span
                                            ref={telecomRef}
                                            className="font-[family-name:var(--font-headline)] font-bold text-[#e5e2e1]"
                                            style={{ lineHeight: 1, marginTop: "4px", display: "inline-block" }}
                                        >
                                            Telecom
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right — Content */}
                        <div className="flex flex-col">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <span className="font-[family-name:var(--font-label)] text-xs font-medium uppercase tracking-[0.25em] text-[#f6be39]">
                                    {dict.about.label}
                                </span>
                                <h2 className="mt-4 font-[family-name:var(--font-headline)] text-4xl font-bold tracking-tighter text-[#e5e2e1] md:text-5xl lg:text-6xl">
                                    {dict.about.title}{" "}
                                    <span className="text-[#f6be39]">{dict.about.titleHighlight}</span>
                                </h2>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.15 }}
                            >
                                <p className="mt-6 text-base leading-relaxed text-[#c6c6cf]/70 font-[family-name:var(--font-body)]">
                                    {dict.about.description1}
                                </p>
                                <p className="mt-4 text-base leading-relaxed text-[#c6c6cf]/50 font-[family-name:var(--font-body)]">
                                    {dict.about.description2}
                                </p>
                            </motion.div>

                            {/* Stats grid */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4"
                            >
                                {dict.about.stats.map((stat) => (
                                    <div key={stat.label} className="flex flex-col">
                                        <span className="font-[family-name:var(--font-headline)] text-3xl font-bold tracking-tight text-[#f6be39]">
                                            {stat.value}
                                        </span>
                                        <span className="mt-1 font-[family-name:var(--font-label)] text-xs font-medium uppercase tracking-wider text-[#c6c6cf]/40">
                                            {stat.label}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Accent line */}
                            <motion.div
                                initial={{ opacity: 0, scaleX: 0 }}
                                whileInView={{ opacity: 1, scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.45 }}
                                className="mt-10 h-[1px] w-full origin-left bg-gradient-to-r from-[#f6be39]/30 via-[#4f4634]/20 to-transparent"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer — revealed at the bottom when about slides up */}
            <div
                className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-3 border-t border-[#4f4634]/15 bg-[#0c0c0c] px-6 transition-opacity duration-700"
                style={{ height: `${FOOTER_HEIGHT}px`, opacity: showFooter ? 1 : 0 }}
            >
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Zeit" className="h-6 w-auto" />
                    <span className="text-lg font-bold tracking-tighter text-[#e5e2e1] font-[family-name:var(--font-headline)]">
                        Zeit
                    </span>
                </div>
                <p className="text-xs text-[#c6c6cf]/40 font-[family-name:var(--font-body)]">
                    © {new Date().getFullYear()} Zeit. {dict.footer.copyright}
                </p>
                <p className="text-xs text-[#c6c6cf]/60 font-[family-name:var(--font-body)]">
                    {dict.footer.createdBy}{" "}
                    <a
                        href="https://github.com/TechBeme/Zeit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#f6be39]/80 hover:text-[#f6be39] transition-colors"
                    >
                        Rafael Vieira @techbeme
                    </a>
                </p>
            </div>
        </section>
    );
}
