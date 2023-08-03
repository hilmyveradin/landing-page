import type { NextPage } from 'next';

import AboutFeatures2 from '@/lib/components/about/AboutFeatures2';
import AboutStepsFeature from '@/lib/components/about/AboutSteps';
import AboutFeatures from '@/lib/components/about/Features';
import AboutHero from '@/lib/components/about/Hero';
import AboutMembers from '@/lib/components/about/Members';
import { Separator } from '@/lib/components/ui/separator';

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-[#D5E4F6] min-w-full">
        <AboutHero />
      </div>
      <AboutMembers />
      <Separator className="mt-[120px] max-w-7xl mx-auto" />
      <AboutFeatures />
      <AboutFeatures2 />
      <div className="bg-[#FAFAFA]">
        <AboutStepsFeature />
      </div>
    </>
  );
};

export default Home;
