'use client';

import { Button } from '@/components/ui/button';
import { FAQSection } from '@/components/faq-session';
import { Mail } from 'lucide-react';

export default function FAQPage() {
  const faqItems = [
    {
      id: '1',
      question: 'What is Noera Labs?',
      answer:
        'Noera Labs is a collective that combines human thinking and artificial intelligence to build real solutions, systems, and products.',
    },
    {
      id: '2',
      question: 'How is Noera Labs different from a community?',
      answer:
        'Most communities focus on discussion and learning. Noera Labs focuses on execution, contribution, and tangible output.',
    },
    {
      id: '3',
      question: 'How does Noera Labs work?',
      answer:
        'The workflow is structured around identifying real problems, exploring solutions with AI, building prototypes, and delivering working results.',
    },
  ];

  return (
    <main className='mx-auto w-full max-w-screen-xl bg-background'>
      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
          <div className='flex flex-col justify-start'>
            <h1 className='bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-5xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]'>
              Still exploring the idea? Here is the core model.
            </h1>
            <p className='text-lg text-muted-foreground mb-8'>
              Noera Labs exists to turn intelligence into execution through a
              system of collaborative building.
            </p>
          </div>
          <div>
            <FAQSection items={faqItems} />
          </div>
        </div>
      </div>
    </main>
  );
}
