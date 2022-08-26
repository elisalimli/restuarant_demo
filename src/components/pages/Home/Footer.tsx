import React from 'react';

import Logo from '@/components/Logo';

const Footer = () => {
  return (
    <footer className='mt-20 border-t border-t-lightGray2 bg-white p-12 shadow-xl '>
      <div className='grid grid-cols-1 lg:grid-cols-4'>
        {/* Logo & description */}
        <div className='col-span-2'>
          <Logo />
          <p className='mt-4 text-darkGray'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            bibendum scelerisque magna eget suscipit. Aenean sed est massa.
          </p>
          <h5 className='mt-4 mb-2 font-semibold'>Opening hours</h5>
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
        <div>bay</div>
        <div>fay</div>
      </div>
    </footer>
  );
};

export default Footer;
