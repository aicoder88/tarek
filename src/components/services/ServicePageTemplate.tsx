'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SubServiceCard, SubService } from './SubServiceCard';
import { ServiceCTA } from './ServiceCTA';
import { CheckCircle, Star, Users, Clock } from 'lucide-react';

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
  const contactHref = `/${locale}#contact`;

  return (
    <div
      className="flex flex-col min-h-screen bg-background"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Header locale={locale} />

      {/* Enhanced Hero Section with Image */}
      <section className="relative w-full py-24 md:py-40 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
        {/* Background Image */}
        {serviceData.heroImage && (
          <div className="absolute inset-0 z-0">
            <img
              src={serviceData.heroImage}
              alt={serviceData.title}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
          </div>
        )}

        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{
              x: [0, 20, 0],
              y: [0, 30, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
            animate={{
              x: [0, -25, 0],
              y: [0, 15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-8 text-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {serviceData.badge && (
                <Badge variant="outline" className="px-4 py-2 text-sm bg-background/80 backdrop-blur-sm border-primary/20">
                  {serviceData.badge}
                </Badge>
              )}
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
                {serviceData.title}
              </h1>
              <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl lg:text-2xl leading-relaxed">
                {serviceData.subtitle}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Button
                asChild
                size="lg"
                className="gap-2 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href={contactHref}>
                  Get Free Estimate
                  <CheckCircle className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4 text-primary" />
                <span className="font-medium">500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span className="font-medium">15+ Years Experience</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Service Introduction with Image */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                About This Service
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Expert Craftsmanship You Can Trust
              </h2>
              <p className={`text-lg text-muted-foreground leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                {serviceData.intro}
              </p>

              {/* Service highlights */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Licensed & Insured</h4>
                    <p className="text-sm text-muted-foreground">Fully licensed contractors with comprehensive insurance coverage</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Quality Guarantee</h4>
                    <p className="text-sm text-muted-foreground">We stand behind our work with comprehensive warranties</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">On-Time Delivery</h4>
                    <p className="text-sm text-muted-foreground">Projects completed on schedule and within budget</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={serviceData.heroImage || "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"}
                alt="Service showcase"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Sub-Services Grid */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/20 to-muted/40">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Our Specialties
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Comprehensive Service Solutions
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                From planning to completion, we offer expert services tailored to your specific needs.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceData.subServices.map((subService, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SubServiceCard
                  subService={subService}
                  locale={locale}
                />
              </motion.div>
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
