import React from 'react';

import MiddlePanel from '@/components/layout/Header/MiddlePanel';
import RightPanel from '@/components/layout/Header/RightPanel';
import Logo from '@/components/Logo';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white shadow-lg'>
      <nav className='layout flex h-14 items-center justify-between'>
        <Logo />
        <MiddlePanel />
        <RightPanel />
      </nav>
    </header>
  );
}
