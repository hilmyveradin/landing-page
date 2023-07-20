import type { NextPage } from 'next';

import AboutHero from '@/lib/components/about/hero';
import AboutMembers from '@/lib/components/about/members';

const Home: NextPage = () => {
  return (
    <>
      <AboutHero />
      <AboutMembers />
    </>
  );
};

export default Home;
