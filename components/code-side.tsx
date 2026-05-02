import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from '@/components/ui/terminal';

export function TerminalDemo() {
  const stepColor = 'text-green-500';

  const steps = [
    '✔ Fetching project details...',
    '✔ Analyzing requirements & scope.',
    '✔ Initiating execution phase.',
    '✔ Processing logic & structure.',
    '✔ Optimizing output quality.',
    '✔ Running validation checks.',
    '✔ Finalizing result.',
  ];

  return (
    <Terminal>
      <TypingAnimation>
        &gt; noeralab build --target=&quot;real-solution&quot;
      </TypingAnimation>
      {steps.map((step, index) => (
        <AnimatedSpan key={index} className={stepColor}>
          {step}
        </AnimatedSpan>
      ))}
      <AnimatedSpan className='text-blue-500'>
        <span>ℹ Status:</span>
        <span className='pl-2'>Prototype validated.</span>
      </AnimatedSpan>
      <TypingAnimation className='text-muted-foreground'>
        Intelligence transformed into execution.
      </TypingAnimation>
    </Terminal>
  );
}
