'use client';

import Spline from '@splinetool/react-spline';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

interface SplineFrameProps {
  scene: string;
  lazy?: boolean;
  className?: string;
  inViewAmount?: number;
  inViewMargin?: string;
}

export function SplineFrame({
  scene,
  lazy = false,
  className = '',
  inViewAmount = 0.15,
  inViewMargin = '200px 0px',
}: SplineFrameProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: inViewAmount,
    margin: inViewMargin,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  const shouldRender = !lazy || isInView;

  return (
    <div ref={ref} className={`relative h-full w-full overflow-hidden ${className}`}>
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_28%_28%,rgba(255,130,92,0.18),transparent_28%),radial-gradient(circle_at_72%_38%,rgba(118,225,255,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_45%)]' />
        <div className='absolute inset-0 animate-pulse bg-background/70' />
      </div>
      {shouldRender ? (
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Spline scene={scene} onLoad={() => setIsLoaded(true)} />
        </div>
      ) : null}
    </div>
  );
}
