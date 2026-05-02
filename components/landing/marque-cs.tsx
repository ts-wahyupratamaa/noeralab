'use client';

import React, { useEffect, useState } from 'react';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

export function Testimoni() {
  return (
    <div className='h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
      <h2 className='text-2xl md:text-3xl font-semibold text-center text-zinc-900 dark:text-white mb-2'>
        What Noera Labs is built to do
      </h2>

      <p className='text-center text-zinc-600 dark:text-zinc-400 max-w-2xl mb-8 px-4'>
        A continuous build engine where people use structured collaboration and
        AI to produce tangible outputs.
      </p>
      <InfiniteMovingCards
        items={testimonials}
        direction='right'
        speed='slow'
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      'Noera Labs is a collective that turns human thinking and artificial intelligence into real, working solutions.',
    name: 'What',
    title: 'A collective',
  },

  {
    quote:
      'It bridges the gap between learning and execution by moving ideas into systems, prototypes, and products.',
    name: 'Why',
    title: 'Execution over discussion',
  },

  {
    quote:
      'Members are contributors, not passive participants. Everyone is expected to think critically and build.',
    name: 'Who',
    title: 'Builders and problem-solvers',
  },

  {
    quote:
      'The model is simple: identify real problems, explore with AI, prototype fast, and deliver measurable outputs.',
    name: 'How',
    title: 'Structured collaboration',
  },

  {
    quote:
      'The first focus areas are digital systems, software, and AI-driven solutions with room to expand into applied technologies.',
    name: 'Focus',
    title: 'Software and AI systems',
  },

  {
    quote:
      'AI is not used as a shortcut. It is used as a thinking partner to improve speed, structure, and outcomes.',
    name: 'Principle',
    title: 'Human + AI',
  },

  {
    quote:
      'Noera comes from the idea of thinking and understanding, then transforming insight into something real.',
    name: 'Meaning',
    title: 'From thought to action',
  },

  {
    quote:
      'Success is measured by working solutions delivered, product quality, and the capability growth of the people building them.',
    name: 'Success',
    title: 'Measured by output',
  },

  {
    quote:
      'This is not a traditional community, incubator, or software house. It is a continuous learning and building engine.',
    name: 'Difference',
    title: 'A build engine',
  },

  {
    quote:
      'The long-term goal is to create a platform where capable individuals collaborate to produce real solutions at scale.',
    name: 'Vision',
    title: 'Collaborative intelligence',
  },
];
