import type { Metadata } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './context/ThemeContext';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bipin Namburu  Full Stack Developer',
  description:
    'Full Stack Developer with 5 years of experience crafting performant, elegant web experiences with React, Next.js, Node.js, and Python. Currently at AB InBev.',
  keywords: [
    'Bipin Namburu',
    'Full Stack Developer',
    'React Developer',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Frontend Engineer',
    'Bengaluru',
  ],
  authors: [{ name: 'Bipin Namburu' }],
  openGraph: {
    title: 'Bipin Namburu  Full Stack Developer',
    description:
      'Full Stack Developer crafting performant, elegant web experiences.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bipin Namburu  Full Stack Developer',
    description:
      'Full Stack Developer crafting performant, elegant web experiences.',
  },
  robots: { index: true, follow: true },
};

// Runs before React hydrates — prevents flash of wrong theme
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t);}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
