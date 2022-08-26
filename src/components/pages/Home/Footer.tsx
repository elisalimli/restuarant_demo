import React from 'react';

import Logo from '@/components/Logo';
import NextImage from '@/components/NextImage';

const Footer = () => {
  return (
    <footer className='mt-20 overflow-hidden border-t border-t-lightGray2 p-12 shadow-xl '>
      <div className='relative grid grid-cols-1 lg:grid-cols-4'>
        {/* Logo & description */}
        <div className='col-span-2'>
          <Logo />
          <p className='mt-4 text-darkGray'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            bibendum scelerisque magna eget suscipit. Aenean sed est massa.
          </p>
          <h4 className='mt-4 mb-2 text-sm font-semibold'>Opening hours</h4>
          <table className='w-full'>
            <thead>
              <tr>
                <th className='text-start text-sm text-gray/75'>
                  Monday-Friday
                </th>
                <th className='text-start text-sm text-gray/75'>Saturday</th>
                <th className='text-start text-sm text-gray/75'>Sunday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='text-sm text-gray/75'>8:00 am to 9:00pm</td>
                <td className='text-sm text-gray/75'>8:00 am to 9:00pm</td>
                <td className='text-sm text-gray/75'>CLOSED</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div></div>
        <div></div>
        {/* Background image - Egg Pan Illustration  */}
        <div className='absolute top-0 left-1/4 -z-10 w-1/2 rotate-45 opacity-10'>
          <NextImage
            useSkeleton
            className='w-full'
            src='/images/outline_egg_pan.png'
            width='180'
            height='180'
            alt='Icon'
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
