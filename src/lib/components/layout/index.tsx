import type { ReactNode } from 'react';

import { ThemeProvider } from '@/lib/components/theme-provider';

import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col items-center min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
