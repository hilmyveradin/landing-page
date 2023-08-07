const Members = () => {
  return (
    <div className="px-10 mt-[90px] max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center">
        <p className="text-2xl font-semibold lg:text-5xl">
          Get the right protection to keep moving forward
        </p>

        <div className="grid grid-cols-12 space-x-4 text-center mt-[20px]">
          <div className="col-span-10 col-start-2">
            <p>
              From customized auto insurance to superior claims service, our
              people and technology will support you every step of the way. Join
              us today and experience why we are one of the best insurance
              companies.
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-16 lg:hidden space-y-11">
          <div className="">
            <p className="text-[#65CED6] font-bold">SAVINGS</p>
            <p className="text-5xl font-bold text-[#2E3E97] mt-6">$750+</p>
          </div>

          <div className="">
            <p className="text-[#65CED6] font-bold">MEMBERS</p>
            <p className="text-5xl font-bold text-[#2E3E97] mt-6">18 M+</p>
          </div>

          <div className="">
            <p className="text-[#65CED6] font-bold"> SUPPORT</p>
            <p className="text-5xl font-bold text-[#2E3E97] mt-6">24 hr</p>
          </div>
        </div>

        <div className="grid-cols-12 space-x-4 text-center mt-[65px] hidden lg:grid">
          <div className="col-span-2 col-start-2">
            <p className="text-[#65CED6] font-bold">SAVINGS</p>
          </div>

          <div className="col-span-2 col-start-6">
            <p className="text-[#65CED6] font-bold">MEMBERS</p>
          </div>

          <div className="col-span-2 col-start-10">
            <p className="text-[#65CED6] font-bold"> SUPPORT</p>
          </div>

          <div className="col-span-2 col-start-2 mt-8">
            <p className="text-5xl font-bold text-[#2E3E97]">$750+</p>
          </div>

          <div className="col-span-2 col-start-6 mt-8">
            <p className="text-5xl font-bold text-[#2E3E97]">18 M+</p>
          </div>

          <div className="col-span-2 col-start-10 mt-8">
            <p className="text-5xl font-bold text-[#2E3E97]">24 hr</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
