import React from 'react';

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

const Test = ({ children }) => {
  return (
    <div>
      yay!
      {children}
    </div>
  );
};

export default function HomePage() {
  return (
    <div>
      Hello world
      <Test>
        <div className='text-red-700'>salam</div>
      </Test>
    </div>
  );
}
