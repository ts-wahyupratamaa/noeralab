'use client';

import React, { useEffect, useState } from 'react';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

export function Testimoni() {
  return (
    <section className='h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-10'>
      <h2 className='text-2xl md:text-3xl font-semibold text-center text-zinc-900 dark:text-white mb-2'>
        What Kognifx is built to do
      </h2>

      <p className='text-center text-zinc-600 dark:text-zinc-400 max-w-2xl mb-8 px-4'>
        Illustrative enterprise scenarios inspired by real operational
        complexity across major industries.
      </p>
      <InfiniteMovingCards
        items={testimonials}
        direction='right'
        speed='ultra-slow'
        className='w-full max-w-[1280px] mx-auto'
      />
    </section>
  );
}

const testimonials = [
  {
    quote:
      'Procurement decision mapping and approval workflow redesign for multi-entity operations with strict governance requirements.',
    name: 'Maxwell Enterprise Indonesia',
    title: 'Illustrative Use Case',
  },

  {
    quote:
      'Operational risk triage and escalation logic framework to improve decision consistency across distributed teams.',
    name: 'Freeport Indonesia',
    title: 'Illustrative Use Case',
  },

  {
    quote:
      'Workflow intelligence layer for cross-functional planning, reducing fragmented handoffs and improving execution visibility.',
    name: 'Unilever',
    title: 'Illustrative Use Case',
  },

  {
    quote:
      'Decision-support cockpit for leadership teams that need structured options, tradeoffs, and operational impact signals.',
    name: 'Enterprise Healthcare Group',
    title: 'Illustrative Use Case',
  },

  {
    quote:
      'Automation blueprint for repetitive operational workflows with human-in-the-loop controls and measurable adoption targets.',
    name: 'National Logistics Operator',
    title: 'Illustrative Use Case',
  },

  {
    quote:
      'Procurement intelligence model to prioritize vendor decisions and reduce cycle-time without compromising control quality.',
    name: 'Energy & Resources Enterprise',
    title: 'Illustrative Use Case',
  },

  {
    quote:
      'Structured problem-solving system for strategy-to-execution alignment in high-complexity organizational environments.',
    name: 'Regional Conglomerate',
    title: 'Illustrative Use Case',
  },

  {
    quote:
      'Decision architecture refresh to standardize judgement criteria and improve accountability in multi-layer governance.',
    name: 'Financial Services Group',
    title: 'Illustrative Use Case',
  },

  {
    quote:
      'Operational command model combining cognition frameworks with AI acceleration to drive usable system outcomes.',
    name: 'Industrial Operations Network',
    title: 'Illustrative Use Case',
  },

  {
    quote:
      'From fragmented planning to structured execution systems that can be adopted, measured, and scaled.',
    name: 'Public Sector Transformation Program',
    title: 'Illustrative Use Case',
  },
];
