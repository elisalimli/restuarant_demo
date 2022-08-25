import React from 'react';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';

const Hero = () => {
  return (
    <section id='hero' className='mx-auto mt-12 h-20 max-w-5xl p-4'>
      <div className='flex flex-col space-x-4 lg:flex-row'>
        <div className='flex-[4] '>
          <h2 className='h0 font-normal'>Provide the best food for you.</h2>
          <p className='mt-6 max-w-xl text-darkGray'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            mattis maximus lobortis. Proin dictum mi et tellus venenatis mattis.
            Aliquam congue porta rhoncus. Vivamus ut arcu fringilla quam
            suscipit volutpat at eget ligula.
          </p>
          <div className='mt-6 space-x-2'>
            <Button className='rounded-tl-2xl rounded-br-2xl' variant='dark'>
              Menu
            </Button>
            <Button className='rounded-tl-2xl rounded-br-2xl' variant='primary'>
              Book a table
            </Button>
          </div>
        </div>
        <div className='my-8 flex flex-[3] items-center justify-center lg:mt-0'>
          <NextImage
            useSkeleton
            className='w-full max-w-md'
            src='/images/home-img-2.png'
            width='180'
            height='180'
            alt='Icon'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
