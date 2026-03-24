import type { MetadataRoute } from "next";
import { i18n } from "@/i18n/config";

const baseUrl = "https://zeitit.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const localeEntries = i18n.locales.map((locale) => ({
        url: `${baseUrl}/${locale}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 1,
        alternates: {
            languages: Object.fromEntries(
                i18n.locales.map((l) => [
                    l === "pt" ? "pt-BR" : l === "es" ? "es-ES" : "en-US",
                    `${baseUrl}/${l}`,
                ])
            ),
        },
    }));

    return localeEntries;
}
