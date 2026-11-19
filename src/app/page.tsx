import Hero from '@/components/modules/Hero';
import AboutSection from '@/components/modules/AboutSection';
import Features from '@/components/modules/Features';
import OnlineClasses from '@/components/modules/OnlineClasses';
import CTASection from '@/components/modules/CTASection';
import PricingCards from '@/components/modules/PricingCards';
import { Header, FooterNew } from '@/components/layout';
import StatsBanner from '@/components/ui/StatsBanner';
import FoundationBanner from '@/components/ui/FoundationBanner';
import GeometricStats from '@/components/ui/GeometricStats';
import OnlineClassesPromo from '@/components/ui/OnlineClassesPromo';
import StudyMaterialsShowcase from '@/components/ui/StudyMaterialsShowcase';
import CourseBenefits from '@/components/ui/CourseBenefits';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsBanner variant="blue" />
        <AboutSection />
        <GeometricStats />
        <OnlineClassesPromo />
        <StudyMaterialsShowcase />
        <PricingCards />
        <FoundationBanner />
        <CourseBenefits />
        <StatsBanner variant="purple" />
        <Features />
        <OnlineClasses />
        <StatsBanner variant="emerald" />
        <CTASection />
      </main>
      <FooterNew />
    </>
  );
}
