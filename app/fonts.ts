import { Inter } from 'next/font/google';

// Primary display font (headings)
export const interDisplay = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  adjustFontFallback: false, // For more precise rendering
});

// Body text font
export const interText = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-text',
  adjustFontFallback: false, // For more precise rendering
});

// UI font for interface elements
export const interUI = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ui',
  adjustFontFallback: false, // For more precise rendering
});
