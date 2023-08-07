import Image from 'next/image';

const StepsFeature = () => {
  return (
    <div>
      <div className="lg:flex flex-col py-[120px] max-w-7xl px-40 hidden bg-[#FAFAFA]">
        <h1> A simple step to do </h1>
        <div className="grid grid-cols-12 mt-20">
          <div className="col-span-1">
            <p className="text-7xl text-[#FFC300]"> 1. </p>
          </div>
          <div className="col-span-3">
            <div className="flex items-center h-full pr-5">
              <Image
                src="/assets/dashed-line.svg"
                alt="Dashed Line"
                width={274}
                height={1}
              />
            </div>
          </div>
          <div className="col-span-1">
            <p className="text-7xl text-[#FFC300]"> 2. </p>
          </div>
          <div className="col-span-3">
            <div className="flex items-center h-full ml-[-20px] pr-5">
              <Image
                src="/assets/dashed-line.svg"
                alt="Dashed Line"
                width={274}
                height={1}
              />
            </div>
          </div>

          <div className="col-span-1">
            <p className="text-7xl text-[#FFC300]"> 3. </p>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-8">
          <div className="col-span-2">
            <p className="text-base font-semibold"> First Step </p>
          </div>
          <div className="col-span-2 col-start-5">
            <p className="font-semibold"> Second Step </p>
          </div>
          <div className="col-span-2 col-start-9">
            <p className="font-semibold"> Third Step </p>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-3">
          <div className="col-span-3">
            <p>
              {' '}
              Sometimes features require a short description. This can be
              detailed description or just a short text.{' '}
            </p>
          </div>
          <div className="col-span-3 col-start-5">
            <p>
              {' '}
              Sometimes features require a short description. This can be
              detailed description or just a short text.{' '}
            </p>
          </div>
          <div className="col-span-3 col-start-9">
            <p>
              {' '}
              Sometimes features require a short description. This can be
              detailed description or just a short text.{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:hidden mt-[100px] text-center px-7 space-y-6">
        <h1> A simple step to do </h1>
        <div className="space-y-3">
          <p className="text-4xl text-[#FFC300]"> 1. </p>
          <p className="text-base font-semibold"> First Step </p>
          <p>
            {' '}
            Sometimes features require a short description. This can be detailed
            description or just a short text.{' '}
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-4xl text-[#FFC300]"> 2. </p>
          <p className="text-base font-semibold"> Second Step </p>
          <p>
            {' '}
            Sometimes features require a short description. This can be detailed
            description or just a short text.{' '}
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-4xl text-[#FFC300]"> 3. </p>
          <p className="text-base font-semibold"> Third Step </p>
          <p>
            {' '}
            Sometimes features require a short description. This can be detailed
            description or just a short text.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepsFeature;
