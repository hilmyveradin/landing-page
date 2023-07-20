const AboutMembers = () => {
  return (
    // question: gimana caranya biar kita gaperlu pake div <a> ini ?
    <div className="max-w-5xl">
      <div className="grid grid-cols-12 space-x-4 space-y-4 text-center grid-rows-9">
        <div className="col-span-12 row-span-1 bg-red-500"> a </div>
        <div className="justify-center col-span-8 col-start-3 row-span-2 row-start-2 text-5xl">
          Get the right protection to keep moving forward
        </div>
        <div className="col-span-10 col-start-2 row-span-2 row-start-4">
          From customized auto insurance to superior claims service, our people
          and technology will support you every step of the way. Join us today
          and experience why we are one of the best insurance companies.
        </div>
        <div className="col-span-2 col-start-2 row-span-1 row-start-6 text-blue-500">
          SAVINGS
        </div>
        <div className="col-start-2 row-span-1 row-start-7 text-5xl font-bold text-blue-700 col-span2">
          $750+
        </div>
        <div className="col-span-2 col-start-6 row-span-1 row-start-6 text-blue-500">
          MEMBERS
        </div>
        <div className="col-span-2 col-start-6 row-span-1 row-start-7 text-5xl font-bold text-blue-700">
          18 M+
        </div>
        <div className="col-span-2 col-start-10 row-span-1 row-start-6 text-blue-500">
          SUPPORT
        </div>
        <div className="col-span-2 col-start-10 row-span-1 row-start-7 text-5xl font-bold text-blue-700">
          24 hr
        </div>
        <div className="col-span-12 col-start-1 row-span-2 bg-red-500 row-start-8">
          {' '}
          a{' '}
        </div>
      </div>
    </div>
  );
};

export default AboutMembers;
