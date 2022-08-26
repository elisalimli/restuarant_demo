import React from 'react';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';

const ChefSection = () => {
  return (
    <section id='about' className='relative mx-auto mt-12 max-w-5xl p-4'>
      <div className='flex flex-col space-x-4 lg:flex-row'>
        <div className='flex-[4] '>
          {/* Header */}
          <h2 className='h0 font-normal'>Our Expert Chefs</h2>
          {/* Description */}
          <p className='mt-6 max-w-xl text-darkGray'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            mattis maximus lobortis. Proin dictum mi et tellus venenatis mattis.
            Aliquam congue porta rhoncus. Vivamus ut arcu fringilla quam
            suscipit volutpat at eget ligula.
          </p>
          {/* About us */}
          <ul className='my-8 grid grid-cols-2 gap-4 p-2'>
            {Array.from({ length: 6 })
              .fill(1)
              .map((_, index) => (
                <li
                  key={`about-us-item-${index}`}
                  className='flex items-center justify-center'
                >
                  <NextImage
                    useSkeleton
                    className='w-8'
                    src='/icons/check_circle.png'
                    width='18'
                    height='18'
                    alt='Check circle icon'
                  />

                  <p className='ml-2 text-sm text-darkGray2'>
                    Lorem ipsum dolor sit amet, consectetur elit
                  </p>
                </li>
              ))}
          </ul>
          {/* Action buttons */}
          <div className='mt-6 mb-4 space-x-2'>
            <Button
              className='rounded-tl-2xl rounded-br-2xl py-3 px-6'
              variant='dark'
            >
              Menu
            </Button>
            <Button
              className='rounded-tl-2xl rounded-br-2xl py-3 px-6'
              variant='primary'
            >
              Book a table
            </Button>
          </div>
        </div>
        {/* Outlined Onion Illustration  */}
        <div className='absolute -top-[100px] -left-[148px] hidden rotate-[-45deg] opacity-40 lg:flex'>
          <NextImage
            useSkeleton
            className='w-32 md:w-52'
            src='/images/outline_onion.png'
            width='180'
            height='180'
            alt='Icon'
          />
        </div>
        <NextImage
          useSkeleton
          className='w-full max-w-md'
          src='/images/chef.png'
          width='180'
          height='180'
          alt='Icon'
        />
      </div>
    </section>
  );
};

export default ChefSection;
