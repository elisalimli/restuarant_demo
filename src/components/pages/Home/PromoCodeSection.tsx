import Image from 'next/image';
import React from 'react';

import Button from '@/components/buttons/Button';

const PromoCodeSection = () => {
  return (
    <section className='relative mx-auto h-96 max-w-screen-md rounded-3xl bg-gradient-to-t from-black/75 via-black/0 '>
      <Image
        layout='fill'
        className='pointer-events-none rounded-3xl object-cover object-center '
        src='/images/photo-1559925393-8be0ec4767c8.png'
        alt='cafe background image'
      />
      <div className='relative flex h-full flex-col items-center justify-center rounded-3xl bg-gradient-to-t from-black/75'>
        <h1 className='flex-wrap text-center font-bold text-white2'>
          Get Our Promo Code by
          <br />
          Subscribing To Our Newsletter
        </h1>
        <div className='mt-4'>
          <input
            type='email'
            name='email'
            id='email'
            className='rounded-2xl'
            placeholder='your@email.com'
          />
          <Button variant='primary' className='ml-2'>
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromoCodeSection;
