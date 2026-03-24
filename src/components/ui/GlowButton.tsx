"use client";

import { useRef, useState, useCallback } from "react";

interface GlowButtonProps {
    children: React.ReactNode;
    href: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    className?: string;
    glowColor?: string;
    ambientGlow?: boolean;
}

export default function GlowButton({
    children,
    href,
    onClick,
    className = "",
    glowColor = "rgba(255, 255, 255, 0.2)",
    ambientGlow = false,
}: GlowButtonProps) {
    const ref = useRef<HTMLAnchorElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>) => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        },
        []
    );

    return (
        <a
            ref={ref}
            href={href}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative inline-block overflow-hidden ${className}`}
            style={{
                boxShadow: isHovered
                    ? `0 0 40px -5px ${glowColor}, inset 0 1px 0 0 rgba(229,226,225,0.1)`
                    : ambientGlow
                        ? `0 0 25px -5px ${glowColor}, 0 8px 32px -8px rgba(12,12,12,0.6), inset 0 1px 0 0 rgba(229,226,225,0.04)`
                        : "0 8px 32px -8px rgba(12,12,12,0.6), 0 2px 8px -2px rgba(12,12,12,0.4), inset 0 1px 0 0 rgba(229,226,225,0.04)",
                transition: "box-shadow 0.3s ease, transform 0.2s ease",
                transform: isHovered ? "translateY(-1px)" : "translateY(0)",
            }}
        >
            {/* Border glow that follows mouse */}
            <span
                className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 60%)`,
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "1.5px",
                }}
            />

            {/* Inner surface glow */}
            <span
                className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(180px circle at ${mousePos.x}px ${mousePos.y}px, rgba(229,226,225,0.06), transparent 60%)`,
                }}
            />

            {/* Top highlight edge for 3D */}
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-[inherit] bg-gradient-to-r from-transparent via-[#e5e2e1]/12 to-transparent" />

            {/* Ambient border glow (always visible) */}
            {ambientGlow && (
                <span
                    className="pointer-events-none absolute -inset-px rounded-[inherit]"
                    style={{
                        background: `linear-gradient(135deg, ${glowColor}, transparent 40%, transparent 60%, ${glowColor})`,
                        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        maskComposite: "exclude",
                        WebkitMaskComposite: "xor",
                        padding: "1px",
                        opacity: 0.6,
                    }}
                />
            )}

            {/* Bottom shadow edge for 3D depth */}
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px rounded-[inherit] bg-gradient-to-r from-transparent via-[#0c0c0c]/30 to-transparent" />

            {/* Content */}
            <span className="relative z-10">{children}</span>
        </a>
    );
}
