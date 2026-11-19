import Hero from '@/components/modules/Hero';
import AboutSection from '@/components/modules/AboutSection';
import Features from '@/components/modules/Features';
import OnlineClasses from '@/components/modules/OnlineClasses';
import CTASection from '@/components/modules/CTASection';
import { Header, FooterNew } from '@/components/layout';
import MatrixEducationRain from '@/components/ui/MatrixEducationRain';
import ParticleConstellation from '@/components/ui/ParticleConstellation';
import CubeTunnel from '@/components/ui/CubeTunnel';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <MatrixEducationRain />
        <AboutSection />
        <ParticleConstellation />
        <Features />
        <CubeTunnel />
        <OnlineClasses />
        <MatrixEducationRain />
        <CTASection />
      </main>
      <FooterNew />
    </>
  );
}
