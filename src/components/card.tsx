import { cn } from '@/lib/utils';
import { PropsWithoutRef } from '@/types';
import React, { forwardRef } from 'react';

export type CardProps = PropsWithoutRef<HTMLDivElement, HTMLDivElement>;

export const Card: React.FC<CardProps> = forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const { className, children, ...other } = props;

    return (
      <div
        {...other}
        ref={ref}
        className={cn(
          'rounded-md bg-primary-800 p-6 border-primary-700 border w-full',
          className
        )}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
