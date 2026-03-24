"use client";

import { createContext, useContext } from "react";
import type { Dictionary } from "./getDictionary";
import type { Locale } from "./config";

type DictionaryContextType = {
    dict: Dictionary;
    locale: Locale;
};

const DictionaryContext = createContext<DictionaryContextType | null>(null);

export function DictionaryProvider({
    children,
    dict,
    locale,
}: {
    children: React.ReactNode;
    dict: Dictionary;
    locale: Locale;
}) {
    return (
        <DictionaryContext.Provider value={{ dict, locale }}>
            {children}
        </DictionaryContext.Provider>
    );
}

export function useDictionary() {
    const ctx = useContext(DictionaryContext);
    if (!ctx) throw new Error("useDictionary must be used within DictionaryProvider");
    return ctx;
}
