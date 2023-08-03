/* eslint-disable sonarjs/no-duplicate-string */
import Image from 'next/image';

import DescriptionComponent from './DescriptionComponent';

const AboutFeatures = () => {
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
    // Add more objects as needed
  ];

  return (
    <div className="flex items-center mx-auto max-w-7xl">
      <div className="grid grid-cols-12 mt-[120px] max-w-7xl">
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
                alt=""
              />
              <p className="ml-3 text-lg"> Learn More </p>
            </div>
          </div>
        </div>
        <div className="col-start-8 col-span-5 pl-[40px]">
          <Image
            src="/assets/about-mom-child.svg"
            width={505.549}
            height={556.667}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutFeatures;
