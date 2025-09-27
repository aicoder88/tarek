import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SubServiceCard, SubService } from './SubServiceCard';
import { ServiceCTA } from './ServiceCTA';

export interface ServicePageData {
  title: string;
  subtitle: string;
  intro: string;
  subServices: SubService[];
  ctaTitle: string;
  ctaSubtitle?: string;
  primaryCTA: string;
  secondaryCTA?: string;
  heroImage?: string;
  badge?: string;
}

interface ServicePageTemplateProps {
  serviceData: ServicePageData;
  locale?: string;
}

export function ServicePageTemplate({
  serviceData,
  locale = 'en'
}: ServicePageTemplateProps) {
  const isRTL = locale === 'ar';

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
              {serviceData.badge && (
                <Badge variant="outline" className="px-3 py-1">
                  {serviceData.badge}
                </Badge>
              )}
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                {serviceData.title}
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                {serviceData.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className={`text-lg text-muted-foreground leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
              {serviceData.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Sub-Services Grid */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
            {serviceData.subServices.map((subService, index) => (
              <SubServiceCard
                key={index}
                subService={subService}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ServiceCTA
        title={serviceData.ctaTitle}
        subtitle={serviceData.ctaSubtitle}
        primaryCTA={serviceData.primaryCTA}
        secondaryCTA={serviceData.secondaryCTA}
        locale={locale}
      />

      <Footer locale={locale} />
    </div>
  );
}