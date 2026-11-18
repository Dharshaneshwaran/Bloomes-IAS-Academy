import Hero from '@/components/modules/Hero';
import AboutSection from '@/components/modules/AboutSection';
import Features from '@/components/modules/Features';
import OnlineClasses from '@/components/modules/OnlineClasses';
import CTASection from '@/components/modules/CTASection';
import { Header, FooterNew } from '@/components/layout';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <Features />
        <OnlineClasses />
        <CTASection />
      </main>
      <FooterNew />
    </>
  );
}
