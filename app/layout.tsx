import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'GHATAK VISION — Cinematic Videography & Production House in Mumbai',
  description: 'GHATAK VISION creates cinematic car delivery films, celebration films, event coverage and premium visual content in Mumbai, India.',
  metadataBase: new URL('https://ghatakvision.com'),
  openGraph: { title: 'GHATAK VISION — Cinematic Storytelling', description: siteConfig.hero.description, type: 'website', locale: 'en_IN' },
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}