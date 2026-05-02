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
    question: 'What is Kognifx?',
    answer:
      'Kognifx is a cognitive build collective focused on turning complex thinking into structured, working systems.',
  },
  {
    id: '2',
    question: 'What problems does Kognifx solve?',
    answer:
      'We solve unclear problem structures, inconsistent decisions, and execution bottlenecks that block scalable implementation.',
  },
  {
    id: '3',
    question: 'How does Kognifx work?',
    answer:
      'We clarify, structure, then build, using AI to accelerate delivery of usable and scalable systems.',
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
