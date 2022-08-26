import React from 'react';

import MiddlePanel from '@/components/layout/Header/MiddlePanel';
import RightPanel from '@/components/layout/Header/RightPanel';
import Logo from '@/components/Logo';

export default function Header() {
  return (
    <header className='z-50 mt-5 bg-white'>
      <nav className='layout flex h-14 items-center justify-between'>
        <div className='absolute -top-16 left-[400px] hidden h-[200px] w-[600px] overflow-hidden bg-circle bg-no-repeat lg:flex'></div>
        <Logo />
        <MiddlePanel />
        <RightPanel />
      </nav>
    </header>
  );
}
