'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
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

export function FAQSection({ items = defaultFAQs }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className='space-y-2 pb-16 md:pb-64'>
      {items.map((item) => (
        <div key={item.id} className='border-b border-border'>
          <button
            onClick={() => toggleOpen(item.id)}
            className='w-full py-4 px-0 flex items-center justify-between text-left '
            aria-expanded={openId === item.id}
          >
            <span className='font-medium text-foreground'>{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                openId === item.id ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openId === item.id && (
            <div className='pb-4 px-0 text-muted-foreground'>{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
