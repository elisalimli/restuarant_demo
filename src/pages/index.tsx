import React from 'react';

import Header from '@/components/layout/Header';
import ChefSection from '@/components/pages/Home/ChefSection';
import DishSection from '@/components/pages/Home/DishSection';
import Footer from '@/components/pages/Home/Footer';
import Hero from '@/components/pages/Home/Hero';
import ReviewSection from '@/components/pages/Home/ReviewSection';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main className='layout'>
      <Seo
        date='2022-08-26T16:12:54.413Z'
        templateTitle='Home Page'
        description='Resto. A beautiful restaruant landing page.'
      />
      <Header />
      <Hero />
      <DishSection />
      <ChefSection />
      <ReviewSection />
      {/* <PromoCodeSection /> */}
      <Footer />
    </main>
  );
}
