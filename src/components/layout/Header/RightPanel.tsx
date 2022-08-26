import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

import Icon from '@/components/buttons/Icon';
import UnstyledLink from '@/components/links/UnstyledLink';

const right_icons = [
  {
    // This is an invalid phone number
    href: 'tel:+15005550001',
    icon: BsFillTelephoneFill,
    ariaLabel: 'Phone Number',
  },
  {
    href: 'https://api.whatsapp.com/send?text=This+is+a+test+message',
    icon: IoLogoWhatsapp,
    ariaLabel: 'Whatsapp number',
  },
  // { href: '/', icon: IoFastFood },
];

const RightPanel = () => {
  return (
    <ul className='flex items-center justify-between space-x-4'>
      <li>
        <Icon aria-label='Menu' title='Open Menu' className='lg:hidden'>
          <AiOutlineMenu />
        </Icon>
      </li>
      {right_icons.map(({ href, icon: LinkIcon, ariaLabel }, index) => (
        <li key={`${href}${index}`}>
          {/* <UnstyledLink href={href} className='hover:text-gray-600'>
                {label}
              </UnstyledLink> */}

          <UnstyledLink tabIndex={-1} href={href}>
            <Icon aria-label={ariaLabel} type='button' title={ariaLabel}>
              <LinkIcon />
            </Icon>
          </UnstyledLink>
        </li>
      ))}
    </ul>
  );
};

export default RightPanel;
