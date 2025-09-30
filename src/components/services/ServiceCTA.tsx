import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

interface ServiceCTAProps {
  title: string;
  subtitle?: string;
  primaryCTA: string;
  secondaryCTA?: string;
  locale?: string;
  serviceType?: string;
}

export function ServiceCTA({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  locale = 'en',
  serviceType
}: ServiceCTAProps) {
  const isRTL = locale === 'ar';

  const getTranslations = (locale: string) => {
    const translations = {
      en: {
        callNow: 'Call Now: (647) 860-5500',
        readyToStart: 'Ready to Start Your Project?',
        contactToday: 'Contact us today for a free consultation and quote.',
        freeEstimate: 'Get Free Estimate'
      },
      fr: {
        callNow: 'Appelez maintenant: (647) 860-5500',
        readyToStart: 'Prêt à démarrer votre projet?',
        contactToday: 'Contactez-nous dès aujourd\'hui pour une consultation et un devis gratuits.',
        freeEstimate: 'Obtenir un devis gratuit'
      },
      ar: {
        callNow: 'اتصل الآن: (647) 860-5500',
        readyToStart: 'هل أنت مستعد لبدء مشروعك؟',
        contactToday: 'تواصل معنا اليوم للحصول على استشارة وعرض سعر مجاني.',
        freeEstimate: 'احصل على تقدير مجاني'
      }
    };
    return translations[locale as keyof typeof translations] || translations.en;
  };

  const t = getTranslations(locale);
  const contactHref = `/${locale}#contact`;

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className={`text-3xl font-bold tracking-tighter md:text-4xl ${isRTL ? 'text-right' : 'text-left'}`}>
              {title || t.readyToStart}
            </h2>
            <p className={`mx-auto max-w-[700px] text-muted-foreground md:text-lg ${isRTL ? 'text-right' : 'text-left'}`}>
              {subtitle || t.contactToday}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-1" asChild>
              <a href={contactHref}>
                {primaryCTA}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-1">
              <Phone className="h-4 w-4" />
              {secondaryCTA || t.callNow}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
