import Image from 'next/image';
import Link from 'next/link';

import { Separator } from '../ui/separator';

const Footer = () => {
  const navBarLists = [
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Customer Stories', link: '/customer-stories' },
    { name: 'Help', link: '/help' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <footer className="max-w-5xl h-[337px]">
      <div className="grid grid-cols-12 gap-x-10 gap-y-8">
        <div className="col-span-2">
          <Image src="/assets/logo.svg" width={100} height={20} alt="" />
        </div>
        <div className="col-span-5 col-start-3">
          This is the usefull template from Sebo. You can buy this on our
          website, UI8 and also our Creativemarket.
        </div>
        <div className="col-span-3 col-start-9 bg-slate-400">
          is simply dummy text of the printing
        </div>
        <Separator className="col-span-12" />

        <div className="col-span-6 col-start-1">
          <ul className="flex space-x-4">
            {navBarLists.map((items) => (
              <Link href={items.link}>
                <li> {items.name} </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="col-span-2 col-start-11">
          <Image
            src="/assets/social-footer.svg"
            width={120}
            height={24}
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
