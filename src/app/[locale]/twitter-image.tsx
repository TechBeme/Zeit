import { ImageResponse } from "next/og";
import { i18n, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export const alt = "Zeit - Telecomunicações Corporativas";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default async function Image({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale: rawLocale } = await params;
    const locale = (i18n.locales as readonly string[]).includes(rawLocale)
        ? (rawLocale as Locale)
        : i18n.defaultLocale;
    const dict = await getDictionary(locale);

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #0a0a0f 0%, #0d1117 40%, #111827 100%)",
                    fontFamily: "sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Decorative gradient circles */}
                <div
                    style={{
                        position: "absolute",
                        top: "-100px",
                        right: "-100px",
                        width: "500px",
                        height: "500px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
                        display: "flex",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-150px",
                        left: "-100px",
                        width: "600px",
                        height: "600px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
                        display: "flex",
                    }}
                />

                {/* Border glow top */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6)",
                        display: "flex",
                    }}
                />

                {/* Logo / Brand */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        marginBottom: "24px",
                    }}
                >
                    <div
                        style={{
                            fontSize: "80px",
                            fontWeight: 700,
                            color: "#ffffff",
                            letterSpacing: "-2px",
                            display: "flex",
                        }}
                    >
                        Zeit
                    </div>
                </div>

                {/* Tagline */}
                <div
                    style={{
                        fontSize: "32px",
                        fontWeight: 500,
                        color: "#e2e8f0",
                        textAlign: "center",
                        maxWidth: "800px",
                        lineHeight: 1.3,
                        display: "flex",
                    }}
                >
                    {dict.metadata.twitterTitle.replace("Zeit | ", "")}
                </div>

                {/* Description */}
                <div
                    style={{
                        fontSize: "20px",
                        fontWeight: 400,
                        color: "#94a3b8",
                        textAlign: "center",
                        maxWidth: "700px",
                        marginTop: "16px",
                        lineHeight: 1.5,
                        display: "flex",
                    }}
                >
                    {dict.metadata.twitterDescription}
                </div>

                {/* Bottom bar with URL */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "32px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                    }}
                >
                    <div
                        style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            background: "#22c55e",
                            display: "flex",
                        }}
                    />
                    <div
                        style={{
                            fontSize: "18px",
                            color: "#64748b",
                            letterSpacing: "1px",
                            display: "flex",
                        }}
                    >
                        zeitit.com
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
