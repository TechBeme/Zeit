"use client";

import { useEffect, useRef } from "react";

const COOLDOWN = 800; // ms between section jumps

export default function SectionScroller({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const lastJump = useRef(0);
    const isScrolling = useRef(false);
    const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        // Track any active scroll animation (programmatic or otherwise)
        const onScroll = () => {
            isScrolling.current = true;
            if (scrollTimer.current) clearTimeout(scrollTimer.current);
            scrollTimer.current = setTimeout(() => {
                isScrolling.current = false;
            }, 150);
        };

        const findCurrentSection = (sections: HTMLElement[]) => {
            let currentIdx = 0;
            let minDist = Infinity;
            for (let i = 0; i < sections.length; i++) {
                const dist = Math.abs(sections[i].getBoundingClientRect().top);
                if (dist < minDist) {
                    minDist = dist;
                    currentIdx = i;
                }
            }
            return { currentIdx, minDist };
        };

        const jumpToSection = (direction: "down" | "up") => {
            if (isScrolling.current) return;

            const sections = Array.from(container.children) as HTMLElement[];
            if (sections.length === 0) return;

            const { currentIdx, minDist } = findCurrentSection(sections);
            if (minDist > 10) return;

            const current = sections[currentIdx];
            if (current.id === "solucoes" || current.id === "sobre") return;

            const now = Date.now();
            if (now - lastJump.current < COOLDOWN) return;

            const targetIdx = direction === "down" ? currentIdx + 1 : currentIdx - 1;
            if (targetIdx >= 0 && targetIdx < sections.length) {
                lastJump.current = now;
                sections[targetIdx].scrollIntoView({ behavior: "smooth" });
            }
        };

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            jumpToSection(e.deltaY > 0 ? "down" : "up");
        };

        // --- Touch handling ---
        let touchStartY = 0;
        const SWIPE_THRESHOLD = 30; // min px to trigger a swipe

        const onTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };

        const onTouchMove = (e: TouchEvent) => {
            e.preventDefault();
        };

        const onTouchEnd = (e: TouchEvent) => {
            const deltaY = touchStartY - e.changedTouches[0].clientY;
            if (Math.abs(deltaY) < SWIPE_THRESHOLD) return;
            jumpToSection(deltaY > 0 ? "down" : "up");
        };

        window.addEventListener("wheel", onWheel, { passive: false });
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("touchstart", onTouchStart, { passive: true });
        window.addEventListener("touchmove", onTouchMove, { passive: false });
        window.addEventListener("touchend", onTouchEnd, { passive: true });
        return () => {
            window.removeEventListener("wheel", onWheel);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("touchstart", onTouchStart);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onTouchEnd);
            if (scrollTimer.current) clearTimeout(scrollTimer.current);
        };
    }, []);

    return <main ref={ref}>{children}</main>;
}
