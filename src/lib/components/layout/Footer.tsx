import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/button';
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
    <div>
      <footer className="max-w-7xl py-[108px] px-[100px] hidden lg:block">
        <div className="grid grid-cols-12 gap-x-10 gap-y-8">
          <div className="col-span-2">
            <Image src="/assets/logo.svg" width={100} height={20} alt="" />
          </div>
          <div className="col-span-5 col-start-3">
            This is the usefull template from Sebo. You can buy this on our
            website, UI8 and also our Creativemarket.
          </div>
          <div className="col-span-3 col-start-9 bg-slate-400">foobar</div>
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
      <footer className="flex flex-col items-center lg:hidden py-[100px] text-center">
        <Image
          src="/assets/logo.svg"
          width={120}
          height={24}
          alt="generix logo"
        />
        <Separator className="mt-12" />
        <p className="mt-6">
          This is the usefull template from Sebo. You can buy this on our
          website, UI8 and also our Creativemarket.
        </p>
        <div className="mt-6 bg-slate-400">foobar</div>
        <div className="grid grid-cols-6 mt-[64px]">
          {navBarLists.map((items, index) => {
            if (index === 3) {
              return (
                <div className="col-span-2 col-start-2">
                  <Link href={items.link}>
                    <Button variant="link" className="p-0 text-xs">
                      {items.name}
                    </Button>
                  </Link>
                </div>
              );
            }
            if (index === 4) {
              return (
                <div className="col-span-2 col-start-4">
                  <Link href={items.link}>
                    <Button variant="link" className="p-0 text-xs">
                      {items.name}
                    </Button>
                  </Link>
                </div>
              );
            }
            return (
              <div className="col-span-2">
                <Link href={items.link}>
                  <Button variant="link" className="p-0 text-xs">
                    {items.name}
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="mt-12">
          <Image
            src="/assets/social-footer.svg"
            width={120}
            height={24}
            alt=""
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
