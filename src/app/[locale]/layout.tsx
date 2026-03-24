import type { Metadata } from "next";
import { Space_Grotesk, Manrope, Inter } from "next/font/google";
import "../globals.css";
import { i18n, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { DictionaryProvider } from "@/i18n/DictionaryProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const spaceGrotesk = Space_Grotesk({
    variable: "--font-headline",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
    variable: "--font-body",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
    variable: "--font-label",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale: rawLocale } = await params;
    const locale = (i18n.locales as readonly string[]).includes(rawLocale)
        ? (rawLocale as Locale)
        : i18n.defaultLocale;
    const dict = await getDictionary(locale);

    return {
        title: dict.metadata.title,
        description: dict.metadata.description,
        keywords: [
            "telecomunicações",
            "fibra óptica",
            "internet empresarial",
            "conectividade B2B",
            "Zeit",
            "internet para eventos",
        ],
        openGraph: {
            title: dict.metadata.ogTitle,
            description: dict.metadata.ogDescription,
            url: "https://zeitit.com",
            siteName: "Zeit",
            type: "website",
            locale: locale === "pt" ? "pt_BR" : locale === "es" ? "es_ES" : "en_US",
        },
    };
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale: rawLocale } = await params;
    const locale = (i18n.locales as readonly string[]).includes(rawLocale)
        ? (rawLocale as Locale)
        : i18n.defaultLocale;
    const dict = await getDictionary(locale);

    const htmlLang = locale === "pt" ? "pt-BR" : locale === "es" ? "es" : "en";

    return (
        <html
            lang={htmlLang}
            className={`${spaceGrotesk.variable} ${manrope.variable} ${inter.variable} antialiased`}
        >
            <body>
                <DictionaryProvider dict={dict} locale={locale}>
                    {children}
                </DictionaryProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
