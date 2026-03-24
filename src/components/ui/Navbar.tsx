"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import GlowCard from "./GlowCard";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { i18n, type Locale } from "@/i18n/config";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const { dict, locale } = useDictionary();
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const langRef = useRef<HTMLDivElement>(null);

    const NAV_LINKS = [
        { label: dict.navbar.home, href: "#inicio" },
        { label: dict.navbar.solutions, href: "#solucoes" },
        { label: dict.navbar.about, href: "#sobre" },
    ];

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (!langOpen) return;
        const handleClickOutside = (e: MouseEvent) => {
            if (langRef.current && !langRef.current.contains(e.target as Node)) {
                setLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [langOpen]);

    const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileOpen(false);

        // Dispatch event so SolucoesSection can sync its active card
        const target = href.replace("#", "");
        window.dispatchEvent(new CustomEvent("zeit:nav", { detail: { target } }));

        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    const switchLocale = (newLocale: Locale) => {
        const segments = pathname.split("/");
        segments[1] = newLocale;
        window.location.href = segments.join("/") || `/${newLocale}`;
    };

    const LOCALE_LABELS: Record<Locale, string> = {
        pt: "PT",
        en: "EN",
        es: "ES",
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50"
        >
            <div className="relative mx-auto flex max-w-7xl items-center px-6 py-5 lg:px-12">
                {/* Logo - left side */}
                <a
                    href="#inicio"
                    onClick={(e) => handleNav(e, "#inicio")}
                    className="flex items-center gap-3 group shrink-0"
                >
                    <img
                        src="/logo.png"
                        alt="Zeit"
                        className="h-10 w-auto"
                    />
                    <span className="text-3xl font-bold tracking-tighter text-[#e5e2e1] font-[family-name:var(--font-headline)]">
                        Zeit
                    </span>
                </a>

                {/* Desktop Nav - truly centered pill */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <GlowCard
                        className="rounded-full border border-[#4f4634]/15 backdrop-blur-xl"
                        style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 40%, #2a2a2a 0%, #1a1a1a 50%, #111111 100%)' }}
                    >
                        <ul className="flex items-center gap-8 px-8 py-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNav(e, link.href)}
                                        className="text-xs font-normal uppercase tracking-widest text-[#c6c6cf]/70 transition-colors hover:text-[#e5e2e1] font-[family-name:var(--font-label)]"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </GlowCard>
                </div>

                {/* Contact + Language Switcher — desktop */}
                <div ref={langRef} className="hidden md:flex items-center ml-auto gap-3 relative">
                    <a
                        href="mailto:guilherme.vieira@zeitit.com"
                        className="flex items-center gap-2 rounded-full border border-[#f6be39]/30 bg-[#f6be39]/10 px-4 py-1.5 text-xs font-normal uppercase tracking-widest text-[#f6be39] backdrop-blur-xl transition-all hover:bg-[#f6be39]/20 hover:border-[#f6be39]/50 font-[family-name:var(--font-label)]"
                    >
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                            <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.5-9.75-6.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {dict.navbar.contact}
                    </a>
                    <button
                        type="button"
                        onClick={() => setLangOpen(!langOpen)}
                        className="flex items-center gap-1.5 rounded-full border border-[#4f4634]/15 bg-[#1a1a1a]/80 px-3.5 py-1.5 text-xs font-normal uppercase tracking-widest text-[#c6c6cf]/70 backdrop-blur-xl transition-colors hover:text-[#e5e2e1] font-[family-name:var(--font-label)] cursor-pointer"
                    >
                        {LOCALE_LABELS[locale]}
                        <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.5}>
                            <path d="M3 5l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    {langOpen && (
                        <div className="absolute right-0 top-full mt-2 flex flex-col overflow-hidden rounded-xl border border-[#4f4634]/15 bg-[#1a1a1a]/95 backdrop-blur-xl">
                            {i18n.locales.map((loc) => (
                                <button
                                    key={loc}
                                    type="button"
                                    onClick={() => { setLangOpen(false); switchLocale(loc); }}
                                    className={`px-5 py-2 text-xs font-normal uppercase tracking-widest transition-colors font-[family-name:var(--font-label)] cursor-pointer ${loc === locale ? "text-[#f6be39]" : "text-[#c6c6cf]/70 hover:text-[#e5e2e1]"
                                        }`}
                                >
                                    {LOCALE_LABELS[loc]}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Mobile Toggle */}
                <button
                    type="button"
                    aria-label={dict.navbar.openMenu}
                    className="relative z-[60] ml-auto flex flex-col gap-1.5 md:hidden cursor-pointer"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    <span
                        className={`block h-[2px] w-6 bg-[#e5e2e1] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${mobileOpen ? "translate-y-[5px] rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`block h-[2px] w-6 bg-[#e5e2e1] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${mobileOpen ? "opacity-0 scale-x-0" : ""
                            }`}
                    />
                    <span
                        className={`block h-[2px] w-6 bg-[#e5e2e1] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${mobileOpen ? "-translate-y-[5px] -rotate-45" : ""
                            }`}
                    />
                </button>
            </div>

            {/* Mobile Fullscreen Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-50 flex flex-col md:hidden"
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(30,30,30,0.98) 0%, rgba(12,12,12,0.99) 100%)",
                                backdropFilter: "blur(24px)",
                                WebkitBackdropFilter: "blur(24px)",
                            }}
                        />

                        {/* Ambient glow */}
                        <div
                            className="pointer-events-none absolute inset-0"
                            style={{
                                background: "radial-gradient(ellipse 40% 30% at 50% 20%, rgba(246, 190, 57, 0.04) 0%, transparent 70%)",
                            }}
                        />

                        {/* Navigation content */}
                        <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-2 px-8">
                            {NAV_LINKS.map((link, idx) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 15 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.76, 0, 0.24, 1],
                                        delay: 0.1 + idx * 0.08,
                                    }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNav(e, link.href)}
                                        className="group relative block py-4 text-center"
                                    >
                                        <span className="font-[family-name:var(--font-headline)] text-2xl font-bold tracking-tight text-[#e5e2e1]/80 transition-colors duration-300 group-hover:text-[#e5e2e1]">
                                            {link.label}
                                        </span>
                                        {/* Hover underline accent */}
                                        <span className="absolute bottom-2 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#f6be39]/50 to-transparent transition-all duration-500 group-hover:w-full" />
                                    </a>
                                </motion.div>
                            ))}

                            {/* Thin separator */}
                            <motion.div
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.35 }}
                                className="my-4 h-[1px] w-24 bg-gradient-to-r from-transparent via-[#4f4634]/30 to-transparent"
                            />

                            {/* Contact button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
                            >
                                <a
                                    href="mailto:guilherme.vieira@zeitit.com"
                                    className="inline-flex items-center gap-2.5 rounded-full border border-[#f6be39]/25 bg-[#f6be39]/8 px-7 py-2.5 text-xs font-normal uppercase tracking-widest text-[#f6be39] transition-all duration-300 hover:bg-[#f6be39]/15 hover:border-[#f6be39]/40 font-[family-name:var(--font-label)]"
                                >
                                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                                        <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.5-9.75-6.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {dict.navbar.contact}
                                </a>
                            </motion.div>

                            {/* Language switcher */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
                                className="mt-3 flex items-center gap-1"
                            >
                                {i18n.locales.map((loc, idx) => (
                                    <span key={loc} className="flex items-center">
                                        <button
                                            type="button"
                                            onClick={() => switchLocale(loc)}
                                            className={`px-3 py-1.5 text-xs font-normal uppercase tracking-widest transition-colors duration-300 font-[family-name:var(--font-label)] cursor-pointer rounded-full ${loc === locale
                                                ? "text-[#f6be39] bg-[#f6be39]/10"
                                                : "text-[#c6c6cf]/40 hover:text-[#c6c6cf]/70"
                                                }`}
                                        >
                                            {LOCALE_LABELS[loc]}
                                        </button>
                                        {idx < i18n.locales.length - 1 && (
                                            <span className="text-[#4f4634]/30 text-xs">·</span>
                                        )}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
