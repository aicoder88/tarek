import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import ServiceGrid from '@/components/services/ServiceGrid';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  const isRTL = locale === 'ar';
  const contactHref = `/${locale}#contact`;

  const getTranslations = (locale: string) => {
    const translations = {
      en: {
        badge: 'Our Services',
        title: 'Comprehensive Construction & Renovation Solutions',
        subtitle: 'From small repairs to complete home transformations, we offer a wide range of services to meet your needs.',
        cta: 'Get Free Consultation'
      },
      fr: {
        badge: 'Nos Services',
        title: 'Solutions Complètes de Construction et de Rénovation',
        subtitle: 'Des petites réparations aux transformations complètes de maisons, nous offrons une large gamme de services pour répondre à vos besoins.',
        cta: 'Consultation Gratuite'
      },
      ar: {
        badge: 'خدماتنا',
        title: 'حلول شاملة للبناء والتجديد',
        subtitle: 'من الإصلاحات الصغيرة إلى التحولات الكاملة للمنزل، نقدم مجموعة واسعة من الخدمات لتلبية احتياجاتك.',
        cta: 'استشارة مجانية'
      }
    };
    return translations[locale as keyof typeof translations] || translations.en;
  };

  const t = getTranslations(locale);

  return (
    <div
      className="flex flex-col min-h-screen bg-background"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Header locale={locale} />

      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline" className="px-3 py-1">
                {t.badge}
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                {t.title}
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                {t.subtitle}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href={contactHref}>{t.cta}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <ServiceGrid locale={locale} variant="grid" />
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}
