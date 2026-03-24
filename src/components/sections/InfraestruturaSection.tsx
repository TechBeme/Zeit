"use client";

import { useDictionary } from "@/i18n/DictionaryProvider";

export default function InfraestruturaSection() {
    const { dict } = useDictionary();

    return (
        <section
            id="infraestrutura"
            className="flex min-h-screen items-center justify-center bg-[#131313] px-6"
        >
            <div className="mx-auto max-w-5xl text-center">
                <h2 className="text-4xl font-extralight tracking-[0.2em] text-[#e5e2e1] md:text-5xl">
                    {dict.infrastructure.title}
                </h2>
                <p className="mt-6 text-lg font-light leading-relaxed text-[#c6c6cf]/60">
                    {dict.infrastructure.description}
                </p>
            </div>
        </section>
    );
}
