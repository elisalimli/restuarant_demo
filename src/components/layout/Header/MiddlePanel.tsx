import { useRouter } from 'next/router';
import React from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/links/UnstyledLink';

// Home Dishes About Menu Review Order
const links = [
  { href: '/#home', label: 'Home' },
  { href: '/#dishes', label: 'Dishes' },
  { href: '/#about', label: 'About' },
  { href: '/#menu', label: 'Menu' },
  { href: '/#review', label: 'Review' },
  { href: '/#order', label: 'Order' },
];

const MiddlePanel = () => {
  const router = useRouter();

  return (
    <ul className='lg hidden items-center justify-between space-x-6 lg:flex'>
      {links.map(({ href, label }) => {
        // checking if the link is active
        const isActive = router?.asPath === href;

        return (
          <UnstyledLink
            key={`${href}${label}`}
            href={href}
            className={clsxm(
              'animated-underline group p-2',
              isActive && 'bg-primary animated-underline-active'
            )}
          >
            <li className={clsxm('text-gray')}>{label}</li>
          </UnstyledLink>
        );
      })}
    </ul>
  );
};

export default MiddlePanel;
