import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/button';

const navBarLists = [
  { name: 'About', link: '/about' },
  { name: 'Services', link: '/services' },
  { name: 'Customer Stories', link: '/customer-stories' },
  { name: 'Help', link: '/help' },
  { name: 'Contact', link: '/contact' },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full max-w-7xl bg-base-100/80 backdrop-blur-md">
      <section className="flex flex-row items-center justify-between py-2 mx-auto">
        <Image src="/assets/logo.svg" width={100} height={20} alt="" />
        <ul className="flex flex-row space-x-4">
          {navBarLists.map((items) => (
            <Link href={items.link}>
              <li> {items.name} </li>
            </Link>
          ))}
        </ul>
        <Button className="bg-blue-400"> Sign Up </Button>
      </section>
    </header>
  );
};

export default Header;
