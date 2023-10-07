import { ReactNode } from 'react';
import './globals.css';
import { Figtree } from 'next/font/google';
import { cn } from '@/libs/utils';

const font = Figtree({ subsets: ['latin'] });

export const metadata = {
  title: 'Portafolio web',
  description: 'Portfolio web',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn('bg-dark text-gray-300', font.className)}>
        <main className='lg:pl-[24vw] xl:pl-[13vw] px-5 xl:px-0'>
          {children}
        </main>
      </body>
    </html>
  );
}
