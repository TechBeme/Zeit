"use client";

import { useRef, useState, useCallback } from "react";

interface GlowCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
    as?: "div" | "ul";
    style?: React.CSSProperties;
}

export default function GlowCard({
    children,
    className = "",
    glowColor = "rgba(255, 255, 255, 0.15)",
    as: Tag = "div",
    style: externalStyle,
}: GlowCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
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
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative overflow-hidden ${className}`}
            style={{
                ...externalStyle,
                boxShadow: "0 8px 32px -8px rgba(12,12,12,0.6), 0 2px 8px -2px rgba(12,12,12,0.4), inset 0 1px 0 0 rgba(229,226,225,0.04)",
                transition: "box-shadow 0.3s ease",
            }}
        >
            {/* Inner surface glow that follows mouse */}
            <div
                className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(120px circle at ${mousePos.x}px ${mousePos.y}px, rgba(229,226,225,0.06), transparent 100%)`,
                }}
            />

            {/* 3D top highlight edge */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-[inherit] bg-gradient-to-r from-transparent via-[#e5e2e1]/15 to-transparent" />

            {/* Content */}
            <Tag className="relative z-10 flex items-center">{children}</Tag>
        </div>
    );
}
