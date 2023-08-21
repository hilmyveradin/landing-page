/* eslint-disable sonarjs/no-duplicate-string */
import Image from 'next/image';

import DescriptionComponent from '../description-component';

const dataArray = [
  {
    title: 'Set goals & plan gifts',
    description:
      'Sometimes features require a short description. This can be detailed description or just a short text.',
  },
  {
    title: 'Trusted Circle',
    description:
      'Sometimes features require a short description. This can be detailed description or just a short text.',
  },
  {
    title: 'Safe Transfer',
    description:
      'Sometimes features require a short description. This can be detailed description or just a short text.',
  },
];

const dataArray2 = [
  {
    title: 'First feature from Generix care',
  },
  {
    title: 'Second feature from Generix care',
  },
  {
    title: 'Third feature from Generix care',
  },
];

const Features = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center px-10 mx-auto max-w-7xl">
        <div className="grid-cols-12 mt-[120px] max-w-7xl lg:grid hidden">
          <div className="col-span-6">
            <div className="flex flex-col">
              <h1> Feel in control, give peace of mind </h1>
              <p className="mt-4">
                {' '}
                Sometimes features require a short description. This can be
                detailed description or just a short text.{' '}
              </p>
              <div className="mt-11">
                {dataArray.map((data, index) => (
                  <div className="mb-7">
                    <DescriptionComponent
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      title={data.title}
                      description={data.description}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-row mt-5">
                <Image
                  src="/assets/arrow-right.svg"
                  width={21.538}
                  height={11.7}
                  alt="arrow next"
                />
                <p className="ml-3 text-lg text-[#2E3E97] font-semibold">
                  {' '}
                  Learn More{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="col-start-8 col-span-5 pl-[40px]">
            <Image
              src="/assets/about-mom-child.svg"
              width={505.549}
              height={556.667}
              alt="mom-child image"
            />
          </div>
        </div>
        <div className="flex flex-col items-center text-center lg:hidden mt-[100px]">
          <Image
            src="/assets/about-mom-child.svg"
            width={243.737}
            height={269.695}
            alt="mom-child image"
          />
          <h1 className="mt-16"> Feel in control, give peace of mind </h1>
          <p className="mt-4">
            {' '}
            Sometimes features require a short description. This can be detailed
            description or just a short text.{' '}
          </p>
          <div className="text-left mt-11">
            {dataArray.map((data, index) => (
              <div className="mb-7">
                <DescriptionComponent
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  title={data.title}
                  description={data.description}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-row mt-5">
            <Image
              src="/assets/arrow-right.svg"
              width={21.538}
              height={11.7}
              alt="arrow next"
            />
            <p className="ml-3 text-lg text-[#2E3E97] font-semibold">
              {' '}
              Learn More{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center px-10 mx-auto max-w-7xl">
        <div className="lg:grid grid-cols-12 py-[120px] hidden">
          <div className="col-span-5">
            <Image
              src="/assets/about-house.svg"
              width={487}
              height={540}
              alt="house image"
            />
          </div>
          <div className="col-span-6 col-start-7">
            <div className="flex flex-col">
              <h1 className="text-5xl">
                {' '}
                Protect your estate against loss of income or death.{' '}
              </h1>
              <p className="mt-4">
                {' '}
                Sometimes features require a short description. This can be
                detailed description or just a short text.{' '}
              </p>
              <div className="mt-11">
                {dataArray2.map((data, index) => (
                  <div className="mb-7">
                    <DescriptionComponent
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      title={data.title}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-row mt-[52px]">
                <Image
                  src="/assets/arrow-right.svg"
                  width={21.538}
                  height={11.7}
                  alt="arrow next"
                />
                <p className="ml-3"> Learn More </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center lg:hidden mt-[100px]">
          <Image
            src="/assets/about-house.svg"
            width={243.737}
            height={269.695}
            alt="mom-child image"
          />
          <h1 className="mt-16">
            {' '}
            Protect your estate against loss of income or death.{' '}
          </h1>
          <p className="mt-4">
            {' '}
            Sometimes features require a short description. This can be detailed
            description or just a short text.{' '}
          </p>
          <div className="text-left mt-11">
            {dataArray2.map((data, index) => (
              <div className="mb-7">
                <DescriptionComponent
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  title={data.title}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-row mt-5">
            <Image
              src="/assets/arrow-right.svg"
              width={21.538}
              height={11.7}
              alt="arrow next"
            />
            <p className="ml-3 text-lg text-[#2E3E97] font-semibold">
              {' '}
              Learn More{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
