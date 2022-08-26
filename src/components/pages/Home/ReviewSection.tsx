import React from 'react';
// Import Swiper styles
import ReactStars from 'react-stars';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import colors from 'tailwindcss/colors';
import 'swiper/css';

import NextImage from '@/components/NextImage';

const ReviewSection = () => {
  return (
    <section
      id='reviews'
      className='mx-auto mt-12 mb-20 max-w-5xl bg-lightGray1/40 p-4'
    >
      <header className='my-16 flex flex-col items-center justify-center'>
        <h2 className='h0 font-normal'>Our Happy Customers</h2>
        {/* Description */}
        <p className='mt-6 max-w-md text-center text-darkGray'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          mattis maximus lobortis. fringilla quam suscipit
        </p>
      </header>
      <Swiper spaceBetween={80} slidesPerView={1.5}>
        {Array.from({ length: 5 })
          .fill(0)
          .map((_, index) => (
            <SwiperSlide key={`testimonial-item-${index}`}>
              <div className='relative flex flex-col items-center justify-center rounded-tl-[72px] rounded-tr-3xl rounded-bl-3xl rounded-br-[72px] bg-white p-4 shadow-lg'>
                <NextImage
                  useSkeleton
                  imgClassName='rounded-full'
                  className='mb-4 w-24'
                  src='/images/pic-3.png'
                  width='18'
                  height='18'
                  alt='Hero food image'
                />
                <ReactStars
                  className='my-4'
                  count={5}
                  size={24}
                  value={5}
                  edit={false}
                  color2={colors.orange[600]}
                />
                <div className='max-w-lg'>
                  <p className='text-darkGray'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur mattis maximus lobortis. Proin dictum mi et tellus
                    venenatis mattis. Aliquam congue porta rhoncus. Vivamus ut
                    arcu fringilla quam suscipit volutpat at eget ligula.
                  </p>
                </div>
                <div className='my-6'>
                  <h4 className='text-center font-bold'>Elon Musk</h4>
                  <p>CEO & Founder, Tesla Inc.</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default ReviewSection;
