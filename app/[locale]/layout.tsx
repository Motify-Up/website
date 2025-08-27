import { locales } from '../../i18n/request';
import "../globals.css";

export const metadata = {
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ]
  }
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body>
        {children}
      </body>
    </html>
  );
} 