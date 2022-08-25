import React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const Logo = () => {
  return (
    <UnstyledLink
      href='/'
      className='text-gray-800 hover:text-gray-600 text-2xl font-bold'
    >
      Resto.
    </UnstyledLink>
  );
};

export default Logo;
