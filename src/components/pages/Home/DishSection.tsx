import React from 'react';

import NextImage from '@/components/NextImage';

const FoodListItem = () => {
  return (
    <li className='flex w-full flex-col items-center justify-center rounded-lg p-1'>
      <div className='relative flex w-3/4 items-center justify-center'>
        <NextImage
          useSkeleton
          className='h-full w-full'
          src='/images/home-img-2.png'
          width='180'
          height='180'
          alt='Delicious food image'
        />
        <span className='absolute -right-5 top-1/4 rounded-full bg-darkBlue p-2 text-white2'>
          14$
        </span>
      </div>

      <div className='mt-2 flex flex-col items-center justify-center'>
        <h4>Fish & Veggie</h4>
        <p className='mt-2 max-w-sm text-center text-darkGray'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          convallis
        </p>
      </div>
    </li>
  );
};

// todo refactor

const DishSection = () => {
  return (
    <section id='dishes' className='my-40 p-2'>
      {/* Header and subtitle */}
      <header className='flex flex-col items-center justify-center'>
        <h2 className='h0'>Our Special Dish</h2>
        <p className='mt-4 max-w-sm text-center text-gray'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          convallis massa.
        </p>
      </header>

      {/* Food list */}

      <ul className='my-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {[1, 1, 1, 1].map((_, index) => (
          <FoodListItem key={`home-food-list-item-${index}`} />
        ))}
      </ul>
    </section>
  );
};

export default DishSection;
