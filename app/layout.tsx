import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

import { SmoothCursor } from '@/components/ui/smooth-cursor';
import { seoDefaults, siteUrl } from '@/lib/seo';
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});
export const metadata: Metadata = {
  title: 'Noera Labs - Turning Intelligence into Real Solutions',
  description:
    'Noera Labs is a collective that combines human thinking and artificial intelligence to build real solutions, working systems, and tangible products.',
  keywords: [
    'Noera Labs',
    'collective intelligence',
    'human and AI collaboration',
    'AI product development',
    'digital systems',
    'software development',
    'applied artificial intelligence',
    'real solutions',
    'working products',
    'emerging technologies',
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Noera Labs - Turning Intelligence into Real Solutions',
    description:
      'Noera Labs is a collective that combines human thinking and artificial intelligence to build real solutions, working systems, and tangible products.',
    siteName: seoDefaults.siteName,
    locale: seoDefaults.locale,
    images: [
      {
        url: new URL('/showgoogle.png', siteUrl).toString(),
        width: 512,
        height: 512,
        alt: 'Noera Labs brand preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noera Labs - Turning Intelligence into Real Solutions',
    description:
      'Noera Labs is a collective that combines human thinking and artificial intelligence to build real solutions, working systems, and tangible products.',
    images: [new URL('/showgoogle.png', siteUrl).toString()],
    site: seoDefaults.siteName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          disableTransitionOnChange
        >
          <SmoothCursor />
          {children}
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
