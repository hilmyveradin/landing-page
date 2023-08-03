/* eslint-disable sonarjs/no-duplicate-string */
import Image from 'next/image';

import DescriptionComponent from './DescriptionComponent';

const AboutFeatures2 = () => {
  const dataArray = [
    {
      title: 'First feature from Generix care',
    },
    {
      title: 'Second feature from Generix care',
    },
    {
      title: 'Third feature from Generix care',
    },
    // Add more objects as needed
  ];

  return (
    <div className="flex items-center mx-auto max-w-7xl">
      <div className="grid grid-cols-12 py-[120px]">
        <div className="col-span-5">
          <Image
            src="/assets/about-house.svg"
            width={487}
            height={540}
            alt=""
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
              {dataArray.map((data, index) => (
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
                alt=""
              />
              <p className="ml-3"> Learn More </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFeatures2;
