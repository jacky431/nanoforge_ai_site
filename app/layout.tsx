import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'NanoForge AI - Autonomous Materials R&D',
  description: 'We forge the future of matter. AI, automation, and data converge to accelerate material innovation.',
  keywords: 'AI, materials science, robotics, automation, research, nanotechnology, autonomous laboratory',
  openGraph: {
    title: 'NanoForge AI - Autonomous Materials R&D',
    description: 'We forge the future of matter. AI, automation, and data converge to accelerate material innovation.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ko_KR',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'NanoForge AI - Autonomous Materials R&D',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NanoForge AI - Autonomous Materials R&D',
    description: 'We forge the future of matter. AI, automation, and data converge to accelerate material innovation.',
    images: ['/og.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}