import { NextRequest, NextResponse } from "next/server";
import { i18n } from "./i18n/config";

function getLocale(request: NextRequest): string {
    const acceptLanguage = request.headers.get("accept-language") ?? "";
    const preferred = acceptLanguage
        .split(",")
        .map((lang) => lang.split(";")[0].trim().toLowerCase());

    for (const lang of preferred) {
        // exact match (e.g. "pt", "en", "es")
        if ((i18n.locales as readonly string[]).includes(lang)) return lang;
        // prefix match (e.g. "pt-BR" → "pt", "en-US" → "en", "es-MX" → "es")
        const prefix = lang.split("-")[0];
        if ((i18n.locales as readonly string[]).includes(prefix)) return prefix;
    }
    return i18n.defaultLocale;
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Skip static files / api / _next
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.includes(".")
    ) {
        return;
    }

    // Check if pathname already has a locale
    const pathnameHasLocale = i18n.locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Redirect to locale-prefixed path
    const locale = getLocale(request);
    return NextResponse.redirect(
        new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url)
    );
}

export const config = {
    matcher: ["/((?!_next|api|.*\\..*).*)"],
};
