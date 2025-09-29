'use client';

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { useTranslations } from 'next-intl';

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import ServiceGrid from "./services/ServiceGrid";
import ProjectGallery from "./projects/ProjectGallery";
import ContactForm from "./contact/ContactForm";
import { FAQ } from "./sections/FAQ";

interface HomeProps {
  locale?: string;
}

const Home = ({ locale = "en" }: HomeProps) => {
  const t = useTranslations('home');
  // Determine if RTL layout is needed
  const isRTL = locale === "ar";

  return (
    <div
      className="flex flex-col min-h-screen bg-background"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Header */}
      <Header locale={locale} />

      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-muted/60 via-background to-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="px-4 py-2 text-sm bg-background/50 backdrop-blur-sm border-primary/20">
                {t('hero.badge')}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                {t('hero.title')}
              </h1>
              <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl lg:text-2xl leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Button
                size="lg"
                className="gap-3 px-12 py-7 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90"
              >
                {t('hero.cta')}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
            animate={{
              x: [0, 10, 0],
              y: [0, 15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
            animate={{
              x: [0, -15, 0],
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/5 rounded-full blur-2xl"
            animate={{
              x: [0, 20, 0],
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "easeInOut",
            }}
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                {t('about.badge')}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                {t('about.title')}
              </h2>
              <p className="text-muted-foreground md:text-lg">
                {t('about.description')}
              </p>
              <ul className="grid gap-2">
                {t.raw('about.features').map((item: string, i: number) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline">
                {t('about.cta')}
              </Button>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Construction team working on project"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/20 to-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                {t('services.badge')}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                {t('services.title')}
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                {t('services.description')}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <ServiceGrid locale={locale} />
          </div>
          <div className="mt-8 flex justify-center">
            <Button>
              {t('services.cta')}
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/40 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                {t('why_choose_us.badge')}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                {t('why_choose_us.title')}
              </h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            {t.raw('why_choose_us.items').map((item: {title: string, description: string}, i: number) => (
              <Card key={i} className="bg-background">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                {t('featured_projects.badge')}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                {t('featured_projects.title')}
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                {t('featured_projects.description')}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <ProjectGallery locale={locale} />
          </div>
          <div className="mt-8 flex justify-center">
            <Button>
              {t('featured_projects.cta')}
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                {t('testimonials.badge')}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                {t('testimonials.title')}
              </h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-8">
            {t.raw('testimonials.items').map((testimonial: {name: string, role: string, content: string}, i: number) => (
              <Card key={i} className="bg-background">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                {t('contact_section.badge')}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                {locale === "en"
                  ? "Ready to Start Your Project?"
                  : locale === "fr"
                    ? "Prêt à démarrer votre projet ?"
                    : "جاهز لبدء مشروعك؟"}
              </h2>
              <p className="text-muted-foreground md:text-lg">
                {locale === "en"
                  ? "Contact us today to request a free estimate. Let’s bring your vision to life."
                  : locale === "fr"
                    ? "Contactez‑nous dès aujourd’hui pour demander une estimation gratuite. Concrétisons votre vision."
                    : "تواصل معنا اليوم لطلب تقدير مجاني. لنجعل رؤيتك واقعاً."}
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">
                    {t('contact_section.location_title')}
                  </h3>
                  <p className="text-muted-foreground">
                    Downtown Montreal, Quebec, Canada
                    <br />
                    Nationwide Service Available
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">
                    {t('contact_section.contact_info_title')}
                  </h3>
                  <p className="text-muted-foreground">
                    Email: info@truenorthconstruction.com
                    <br />
                    Phone: (647) 860-5500
                    <br />
                    Website: truenorthconstruction.com
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">
                    {t('contact_section.service_hours_title')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('contact_section.service_hours_text').split('\n')[0]}
                    <br />
                    {t('contact_section.service_hours_text').split('\n')[1]}
                    <br />
                    {t('contact_section.service_hours_text').split('\n')[2]}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                {t('cta.title')}
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                {t('cta.description')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-1">
                {t('cta.primary_cta')}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                {t('cta.secondary_cta')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer locale={locale} />
    </div>
  );
};

export default Home;
