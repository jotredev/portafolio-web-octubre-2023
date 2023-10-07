'use client';

import { ReactNode, useState } from 'react';
import { RiMenu2Line } from 'react-icons/ri';

import Sidebar from '@/components/shared/sidebar';
import ButtonIcon from '@/components/ui/button-icon';
import Footer from '@/components/shared/footer';

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <Sidebar showMenu={showMenu} onClose={() => setShowMenu(false)} />
      <ButtonIcon
        icon={RiMenu2Line}
        onClick={() => setShowMenu(true)}
        className='lg:hidden fixed right-0 bottom-0 z-30 bg-primary p-4 rounded-tl-lg'
      />

      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
