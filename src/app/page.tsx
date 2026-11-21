import Hero from '@/components/modules/Hero';
import { Header, FooterNew } from '@/components/layout';
import ResultsLedger from '@/components/home/ResultsLedger';
import AboutBlooms from '@/components/home/AboutBlooms';
import PreparationSteps from '@/components/home/PreparationSteps';
import CourseList from '@/components/home/CourseList';
import StudyModes from '@/components/home/StudyModes';
import StudentVoices from '@/components/home/StudentVoices';
import NextBatch from '@/components/home/NextBatch';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ResultsLedger />
        <AboutBlooms />
        <PreparationSteps />
        <CourseList />
        <StudyModes />
        <StudentVoices />
        <NextBatch />
      </main>
      <FooterNew />
    </>
  );
}
