import React from 'react';

import MiddlePanel from '@/components/layout/Header/MiddlePanel';
import RightPanel from '@/components/layout/Header/RightPanel';
import Logo from '@/components/Logo';
import GlowingEffect from '@/components/pages/Home/GlowingEffect';

export default function Header() {
  return (
    <header className='z-50 mt-5 bg-white'>
      <nav className='layout flex h-14 items-center justify-between'>
        <GlowingEffect />
        <Logo />
        <MiddlePanel />
        <RightPanel />
      </nav>
    </header>
  );
}
