import React from 'react';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';

const Hero = () => {
  return (
    <section id='home' className='relative mx-auto mt-12 max-w-5xl p-4'>
      <div className='flex flex-col space-x-4 lg:flex-row'>
        <div className='flex-[4] '>
          {/* Header */}
          <h1 className='h0 font-normal'>Provide the best food for you.</h1>
          {/* Description */}
          <p className='mt-6 max-w-xl text-darkGray'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            mattis maximus lobortis. Proin dictum mi et tellus venenatis mattis.
            Aliquam congue porta rhoncus. Vivamus ut arcu fringilla quam
            suscipit volutpat at eget ligula.
          </p>
          {/* Action buttons */}
          <div className='mt-6 mb-4 space-x-2'>
            <Button className='rounded-tl-2xl rounded-br-2xl' variant='dark'>
              Menu
            </Button>
            <Button className='rounded-tl-2xl rounded-br-2xl' variant='primary'>
              Book a table
            </Button>
          </div>
        </div>
        {/* Food image */}
        <div className='absolute top-[76%] left-5 hidden rotate-[-30deg] lg:flex'>
          <NextImage
            useSkeleton
            className='w-32 md:w-40'
            src='/images/leaf_04.png'
            width='180'
            height='180'
            alt='Icon'
          />
        </div>
        <NextImage
          useSkeleton
          className='w-full max-w-md'
          src='/images/home-img-2.png'
          width='180'
          height='180'
          alt='Hero food image'
        />
      </div>
    </section>
  );
};

export default Hero;
