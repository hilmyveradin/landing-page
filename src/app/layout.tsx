import type { Metadata } from 'next';

import Layout from '@/lib/components/layout';
import { fontSans } from '@/lib/styles/fonts';
import { cn } from '@/lib/utils';

import '@/lib/styles/globals.css';

const APP_NAME = 'Generix';

export const metadata: Metadata = {
  title: APP_NAME,
  description: 'Your insurance partner',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: '#FFFFFF',
  openGraph: {
    url: 'https://landing-page-gamma-lyart.vercel.app/',
    title: 'Generix',
    description: 'Your insurance partner',
    images: {
      url: 'https://lh3.googleusercontent.com/drive-viewer/AITFw-w7oxusPQFZedmWyTkYJFrdDmWYS-ZH1-f2OyZlpv1Vn3kA5D_eJpIjbjfIspIXLQDnMM0-DnrPh5jocCGZcnUykmo93w=s2560',
      alt: 'generix image',
    },
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased items-center',
          fontSans.variable
        )}
      >
        <Layout>
          <div className="flex-1">{children}</div>
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
