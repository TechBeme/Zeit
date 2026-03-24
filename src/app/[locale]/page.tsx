import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SolucoesSection from "@/components/sections/SolucoesSection";
import SobreSection from "@/components/sections/SobreSection";
import SectionScroller from "@/components/ui/SectionScroller";

export default function Home() {
    return (
        <>
            <Navbar />
            <SectionScroller>
                <HeroSection />
                <SolucoesSection />
                <SobreSection />
            </SectionScroller>
        </>
    );
}
