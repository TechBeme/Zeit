"use client";

import { useDictionary } from "@/i18n/DictionaryProvider";

export default function Footer() {
    const { dict } = useDictionary();
    const year = new Date().getFullYear();

    return (
        <footer className="relative flex h-screen flex-col items-center justify-center bg-[#0c0c0c] px-6">
            {/* Logo + name */}
            <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Zeit" className="h-10 w-auto" />
                <span className="text-3xl font-bold tracking-tighter text-[#e5e2e1] font-[family-name:var(--font-headline)]">
                    Zeit
                </span>
            </div>

            {/* Copyright */}
            <p className="mt-6 text-sm text-[#c6c6cf]/40 font-[family-name:var(--font-body)]">
                © {year} Zeit. {dict.footer.copyright}
            </p>

            {/* Created by */}
            <p className="mt-3 text-sm text-[#c6c6cf]/30 font-[family-name:var(--font-body)]">
                {dict.footer.createdBy}{" "}
                <a
                    href="https://github.com/TechBeme/Zeit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f6be39]/50 hover:text-[#f6be39] transition-colors"
                >
                    Rafael Vieira @techbeme
                </a>
            </p>
        </footer>
    );
}
