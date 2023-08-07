import Image from 'next/image';

import { Button } from '../../ui/button';

const Hero = () => {
  return (
    <div className="px-10 mx-auto max-w-7xl bg-[#D5E4F6]">
      <div className="flex flex-col items-center text-center space-x-4 pt-[90px] pb-[100px] lg:grid lg:grid-cols-12 lg:text-left">
        <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-1 lg:order-none">
          <div className="flex-1">
            <p className="text-4xl text-[#2E3E97] font-bold lg:hidden">
              Bring clarity to your work every time
            </p>
            <p className="text-6xl text-[#2E3E97] font-bold hidden lg:block">
              Map and protect your lifetime wealth on a single online platform.
            </p>
          </div>
          <div className="mt-6">
            <p>
              Use Generix Insurance to collate all of your lifetime assets.
              Generate a Will template, fast.
            </p>
          </div>

          <div className="items-center justify-center flex-1 mt-12">
            <Button className="px-10 py-5 bg-blue-800">
              Get the best quotes
            </Button>
          </div>
        </div>
        <div className="mt-[60px] lg:col-span-6 lg:col-start-7 lg:order-none">
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

export default Hero;
