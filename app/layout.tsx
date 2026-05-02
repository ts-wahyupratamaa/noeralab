import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { seoDefaults, siteUrl } from '@/lib/seo';
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});
export const metadata: Metadata = {
  title: 'Kognifx - Cognition, Engineered.',
  description:
    'Kognifx helps organizations solve complex operational and decision problems by turning fragmented thinking into structured, working systems accelerated by AI.',
  keywords: [
    'Kognifx',
    'cognitive systems',
    'operational systems',
    'procurement optimization',
    'workflow automation',
    'decision support tools',
    'AI for operations',
    'structured problem solving',
    'B2B AI solutions',
    'cognition engineered',
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
    title: 'Kognifx - Cognition, Engineered.',
    description:
      'Kognifx turns complexity into clarity and clarity into working systems.',
    siteName: seoDefaults.siteName,
    locale: seoDefaults.locale,
    images: [
      {
        url: new URL('/showgoogle.png', siteUrl).toString(),
        width: 512,
        height: 512,
        alt: 'Kognifx brand preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kognifx - Cognition, Engineered.',
    description:
      'Kognifx helps organizations structure complexity into scalable working systems with AI.',
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
          {children}
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
