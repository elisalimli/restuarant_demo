import React from 'react';

import Header from '@/components/layout/Header';
import ChefSection from '@/components/pages/Home/ChefSection';
import DishSection from '@/components/pages/Home/DishSection';
import Footer from '@/components/pages/Home/Footer';
import Hero from '@/components/pages/Home/Hero';
import PromoCodeSection from '@/components/pages/Home/PromoCodeSection';
import ReviewSection from '@/components/pages/Home/ReviewSection';

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
    <div className='layout'>
      <Header />
      <Hero />
      <DishSection />
      <ChefSection />
      <ReviewSection />
      <PromoCodeSection />
      <Footer />
    </div>
  );
}
