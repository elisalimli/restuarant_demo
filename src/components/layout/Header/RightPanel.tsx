import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

import Icon from '@/components/buttons/Icon';

const right_icons = [
  { href: '/', icon: BsFillTelephoneFill },
  { href: '/', icon: IoLogoWhatsapp },
  // { href: '/', icon: IoFastFood },
];

const RightPanel = () => {
  return (
    <ul className='flex items-center justify-between space-x-4'>
      <Icon className='lg:hidden'>
        <AiOutlineMenu />
      </Icon>
      {right_icons.map(({ href, icon: LinkIcon }, index) => (
        <li key={`${href}${index}`}>
          {/* <UnstyledLink href={href} className='hover:text-gray-600'>
                {label}
              </UnstyledLink> */}
          <Icon>
            <LinkIcon />
          </Icon>
        </li>
      ))}
    </ul>
  );
};

export default RightPanel;
