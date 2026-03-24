import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope, Inter } from "next/font/google";
import "../globals.css";
import { i18n, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { DictionaryProvider } from "@/i18n/DictionaryProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport: Viewport = {
    viewportFit: "cover",
};

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

    const baseUrl = "https://zeitit.com";
    const ogLocale =
        locale === "pt" ? "pt_BR" : locale === "es" ? "es_ES" : "en_US";
    const alternateLocales = (["pt_BR", "es_ES", "en_US"] as const).filter(
        (l) => l !== ogLocale
    );

    const keywords = dict.metadata.keywords
        .split(",")
        .map((k: string) => k.trim());

    return {
        metadataBase: new URL(baseUrl),
        title: dict.metadata.title,
        description: dict.metadata.description,
        keywords,
        authors: [{ name: "Zeit Telecomunicações" }],
        creator: "Zeit Telecomunicações",
        publisher: "Zeit Telecomunicações",
        applicationName: "Zeit",
        referrer: "origin-when-cross-origin",
        generator: "Next.js",
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        alternates: {
            canonical: `${baseUrl}/${locale}`,
            languages: {
                "pt-BR": `${baseUrl}/pt`,
                "en-US": `${baseUrl}/en`,
                "es-ES": `${baseUrl}/es`,
                "x-default": `${baseUrl}/pt`,
            },
        },
        openGraph: {
            title: dict.metadata.ogTitle,
            description: dict.metadata.ogDescription,
            url: `${baseUrl}/${locale}`,
            siteName: "Zeit",
            type: "website",
            locale: ogLocale,
            alternateLocale: alternateLocales as unknown as string[],
            images: [
                {
                    url: "/logo.png",
                    alt: "Zeit",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: dict.metadata.twitterTitle,
            description: dict.metadata.twitterDescription,
            images: ["/logo.png"],
        },
        icons: {
            icon: [
                { url: "/favicon.ico", sizes: "any" },
                { url: "/icon.svg", type: "image/svg+xml" },
            ],
            apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
        },
        category: "technology",
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

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Zeit",
        url: "https://zeitit.com",
        logo: "https://zeitit.com/logo.png",
        description: dict.metadata.description,
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: ["Portuguese", "English", "Spanish"],
        },
        sameAs: [],
    };

    return (
        <html
            lang={htmlLang}
            className={`${spaceGrotesk.variable} ${manrope.variable} ${inter.variable} antialiased`}
        >
            <body>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd),
                    }}
                />
                <DictionaryProvider dict={dict} locale={locale}>
                    {children}
                </DictionaryProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
