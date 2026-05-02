'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow' | 'very-slow' | 'ultra-slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '50s');
      } else if (speed === 'slow') {
        containerRef.current.style.setProperty('--animation-duration', '90s');
      } else if (speed === 'very-slow') {
        containerRef.current.style.setProperty('--animation-duration', '130s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '200s');
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_12%,white_88%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 will-change-transform [transform:translateZ(0)] [backface-visibility:hidden]',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <li
            className='
    relative w-[350px] max-w-full shrink-0 
    rounded-2xl border border-gray-300
    px-8 py-6 md:w-[450px]
    bg-[rgba(255,255,255,0.05)] 
    dark:border-white/10 
  '
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden='true'
                className='user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]'
              ></div>
              <span className='relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100'>
                {item.quote}
              </span>
              <div className='relative z-20 mt-6 flex flex-row items-center'>
                <span className='flex flex-col gap-1'>
                  <span className='text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400'>
                    {item.name}
                  </span>
                  <span className='text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400'>
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
