import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import { Navbar } from "@/components/organisms/Navbar/Navbar";
import { Bubble } from "@/components/organisms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'RD Quality Insurance',
  description: 'Seguros - Protección y tranquilidad para usted y su familia',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider>
          <Navbar />
          {children}
          <Bubble />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
