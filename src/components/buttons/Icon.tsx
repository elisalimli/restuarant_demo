import React from 'react';

import clsxm from '@/lib/clsxm';

type IconProps = React.ComponentPropsWithRef<'button'>;

const Icon = React.forwardRef<HTMLButtonElement, IconProps>(
  ({ children, className, disabled: buttonDisabled, ...rest }, ref) => {
    const disabled = buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxm(
          'hover:bg-primary/90 rounded-full bg-gray3/30 p-3 text-cyan-800 transition-all duration-200 ease-in-out hover:rotate-[360deg] hover:bg-gray2',
          className
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default Icon;
