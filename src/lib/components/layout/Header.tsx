import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const navBarLists = [
  { name: 'About', link: '/about' },
  { name: 'Services', link: '/services' },
  { name: 'Customer Stories', link: '/customer-stories' },
  { name: 'Help', link: '/help' },
  { name: 'Contact', link: '/contact' },
];

const Header = () => {
  return (
    <header className="z-10 w-full px-10 bg-base-100/80 backdrop-blur-md lg:max-w-7xl lg:px-4  bg-[#D5E4F6]">
      <div className="flex-col hidden w-full lg:flex ">
        <div className="flex items-center justify-between py-2 mx-auto">
          <Image src="/assets/logo.svg" width={100} height={20} alt="" />
          <ul className="flex flex-row space-x-4 mr-[100px]">
            {navBarLists.map((items) => (
              <Link href={items.link}>
                <li className="p-2 rounded-md hover:bg-slate-100">
                  {' '}
                  {items.name}{' '}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex space-x-4">
            <Button className="font-semibold text-black bg-white hover:bg-slate-100">
              {' '}
              Log in{' '}
            </Button>
            <Button className="bg-[#2E3E97] font-semibold hover:bg-[#2E3E97]/50">
              {' '}
              Get a quotes{' '}
            </Button>
          </div>
        </div>
        <Separator className="bg-gray-500" />
      </div>
      <div className="flex items-center justify-between py-2 lg:hidden  bg-[#D5E4F6]">
        <div className="w-7" />
        <div className="flex items-center">
          <Image src="/assets/logo.svg" width={100} height={20} alt="" />
        </div>
        <Sheet>
          <SheetTrigger className="w-10 h-10 bg-transparent hover:bg-transparent">
            <Image src="/assets/ic_menu.svg" width={24} height={24} alt="" />
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col">
              <ul>
                {navBarLists.map((items) => (
                  <Link href={items.link}>
                    <li className="p-2 rounded-md hover:bg-slate-100">
                      {' '}
                      {items.name}{' '}
                    </li>
                  </Link>
                ))}
              </ul>
              <Button className="font-semibold text-black bg-white hover:bg-slate-100">
                {' '}
                Log in{' '}
              </Button>
              <Button className="bg-[#2E3E97] font-semibold hover:bg-[#2E3E97]/50">
                {' '}
                Get a quotes{' '}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
