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
        </footer>
    );
}
