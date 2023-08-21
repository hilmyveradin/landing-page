import Image from 'next/image';

interface DescriptionComponentProps {
  title: string;
  description?: string;
}

const DescriptionComponent = ({
  title,
  description,
}: DescriptionComponentProps) => {
  return (
    <div className="flex flex-row items-start">
      <Image src="/assets/ic_checklist.svg" width={24} height={24} alt="" />
      <div className="flex flex-col ml-3">
        <p className="font-semibold"> {title} </p>
        {description !== null && <p> {description} </p>}
      </div>
    </div>
  );
};

export default DescriptionComponent;
