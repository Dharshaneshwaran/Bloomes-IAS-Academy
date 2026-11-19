import Hero from '@/components/modules/Hero';
import AboutSection from '@/components/modules/AboutSection';
import Features from '@/components/modules/Features';
import OnlineClasses from '@/components/modules/OnlineClasses';
import CTASection from '@/components/modules/CTASection';
import PricingCards from '@/components/modules/PricingCards';
import { Header, FooterNew } from '@/components/layout';
import MatrixEducationRain from '@/components/ui/MatrixEducationRain';
import ParticleConstellation from '@/components/ui/ParticleConstellation';
import CubeTunnel from '@/components/ui/CubeTunnel';
import StatsBanner from '@/components/ui/StatsBanner';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsBanner variant="blue" />
        <AboutSection />
        <ParticleConstellation />
        <PricingCards />
        <StatsBanner variant="purple" />
        <Features />
        <CubeTunnel />
        <OnlineClasses />
        <StatsBanner variant="emerald" />
        <CTASection />
      </main>
      <FooterNew />
    </>
  );
}
