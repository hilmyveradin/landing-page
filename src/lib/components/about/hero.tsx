import Image from 'next/image';

import { Button } from '../ui/button';

const AboutHero = () => {
  return (
    // question: gimana caranya biar kita gaperlu pake div <a> ini ?
    <div className="max-w-5xl">
      <div className="grid grid-cols-12 space-x-4 space-y-4 grid-rows-10">
        <div className="col-span-12 row-span-1 bg-red-500"> a </div>
        <div className="col-span-6 col-start-1 row-span-5 row-start-2 text-7xl">
          Map and protect your lifetime wealth on a single online platform.
        </div>
        <div className="col-span-6 col-start-7 row-start-2 row-span-9">
          <Image
            src="/assets/about-hero.svg"
            width={662.851}
            height={554.71}
            alt=""
          />
        </div>
        <div className="col-span-5 col-start-1 row-span-1 row-start-7">
          Use Generix Insurance to collate all of your lifetime assets. Generate
          a Will template, fast.
          abc
        </div>
        <Button className="col-span-3 col-start-1 row-span-2 bg-blue-800 row-start-8">
          Get the best quotes
        </Button>
      </div>
      <div className="col-span-12 row-span-1 bg-red-500 row-start-10"> a </div>
    </div>
  );
};

export default AboutHero;
