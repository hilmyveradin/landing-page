import type { NextPage } from 'next';

import Features from '@/lib/components/about/sections/features';
import Hero from '@/lib/components/about/sections/hero';
import Members from '@/lib/components/about/sections/members';
import StepsFeature from '@/lib/components/about/sections/steps';
import { Separator } from '@/lib/components/ui/separator';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Members />
      <Separator className="mt-[100px] max-w-[90%] mx-[20px] lg:mt-[120px] lg:mx-auto" />
      <Features />
      <StepsFeature />
    </div>
  );
};

export default Home;
