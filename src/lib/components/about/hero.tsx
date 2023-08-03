import Image from 'next/image';

import { Button } from '../ui/button';

const AboutHero = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-12 space-x-4 space-y-4 pt-[90px] pb-[100px]">
        <div className="flex flex-col col-span-6 col-start-1">
          <div className="flex-1">
            <p className="text-6xl text-[#2E3E97] font-bold">
              Map and protect your lifetime wealth on a single online platform.
            </p>
          </div>
          <div className="flex mt-6">
            <p>
              Use Generix Insurance to collate all of your lifetime assets.
              Generate a Will template, fast.
            </p>
          </div>

          <div className="flex-1 mt-12">
            <Button className="bg-blue-800">Get the best quotes</Button>
          </div>
        </div>
        <div className="col-span-6 col-start-7">
          <Image
            src="/assets/about-hero.svg"
            width={662.851}
            height={554.71}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
