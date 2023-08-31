import { NavBar } from '@/components/navbar';
import { ThemeProvider } from '@/components/providers/theme';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LocalBusiness, WithContext } from 'schema-dts';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// Structured Data
const jsonLd: WithContext<LocalBusiness> = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Orbitgrowth Webdesign Agentur',
  legalName: 'Kosche und Langer GbR, Webdesign Agentur',
  url: siteConfig.baseUrl,
  description:
    'Webdesign Agentur aus Ratingen, die sich auf die Entwicklung von Webseiten für lokale Unternehmen spezialisiert hat.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Friedrich-List-Straße 4',
    addressLocality: 'Ratingen',
    postalCode: '40882',
    addressCountry: 'DE',
    addressRegion: 'NRW',
    areaServed: 'DE',
  },
  telephone: '+4917657600680',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.3035628566591,
    longitude: 6.873863514371016,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '00:00',
      closes: '00:00',
    },
  ],
};

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: 'OrbitGrowth Webdesign Agentur aus Ratingen.',
    template: '%s | OrbitGrowth Webdesign Agentur',
  },
  description:
    'Webdesign Agentur aus Ratingen, die sich auf die Entwicklung von Webseiten für lokale Unternehmen spezialisiert hat.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: {
      default: 'OrbitGrowth Webdesign Agentur',
      template: '%s | OrbitGrowth Webdesign Agentur',
    },
    description: 'Webdesign Agentur aus Ratingen, NRW',
    url: siteConfig.baseUrl,
    type: 'website',
    countryName: 'Germany',
    locale: 'DE',
  },
  twitter: {
    title: 'OrbitGrowth Webdesign Agentur',
    description: 'Webdesign Agentur aus Ratingen, NRW',
    card: 'summary_large_image',
  },
};

// Route Segment Configuration
export const dynamic = 'auto'; // cache as much as possible
export const dynamicParams = true; // dynamic segments not included in generateStaticParams are generated on demand
export const revalidate = 10800; // revalidate pages every 10800 seconds (3 hours)
export const runtime = 'nodejs'; // use default runtime (nodejs)
export const preferredRegion = 'all'; // set preferred region to all

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body
          className={cn(
            inter.className,
            'w-full h-full bg-white dark:bg-primary-900'
          )}
        >
          {/* Bind Structured data to page */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <div className="mx-auto max-w-screen-xl w-full px-6 py-12 min-h-screen flex flex-col">
            <NavBar />

            {children}
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
