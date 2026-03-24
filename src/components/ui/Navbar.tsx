"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
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

                {/* Language Switcher — desktop */}
                <div className="hidden md:flex items-center ml-auto relative">
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
                    className="ml-auto flex flex-col gap-1.5 md:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    <span
                        className={`block h-[2px] w-6 bg-[#e5e2e1] transition-transform duration-300 ${mobileOpen ? "translate-y-[5px] rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`block h-[2px] w-6 bg-[#e5e2e1] transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block h-[2px] w-6 bg-[#e5e2e1] transition-transform duration-300 ${mobileOpen ? "-translate-y-[5px] -rotate-45" : ""
                            }`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden transition-all duration-500 md:hidden ${mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="mx-6 rounded-2xl border border-[#4f4634]/15 bg-[#252525]/60 backdrop-blur-xl">
                    <ul className="flex flex-col items-center gap-6 py-8">
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
                        {/* Mobile language switcher */}
                        <li className="flex items-center gap-4 pt-2 border-t border-[#4f4634]/15">
                            {i18n.locales.map((loc) => (
                                <button
                                    key={loc}
                                    type="button"
                                    onClick={() => switchLocale(loc)}
                                    className={`text-xs font-normal uppercase tracking-widest transition-colors font-[family-name:var(--font-label)] cursor-pointer ${loc === locale ? "text-[#f6be39]" : "text-[#c6c6cf]/70 hover:text-[#e5e2e1]"
                                        }`}
                                >
                                    {LOCALE_LABELS[loc]}
                                </button>
                            ))}
                        </li>
                    </ul>
                </div>
            </div>
        </motion.nav>
    );
}
