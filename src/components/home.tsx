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
  const locationLines = t('contact_section.location_text').split('\n');
  const contactInfoLines = t('contact_section.contact_info_text').split('\n');
  const serviceHourLines = t('contact_section.service_hours_text').split('\n');

  return (
    <div
      className="flex flex-col min-h-screen bg-background"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Header */}
      <Header locale={locale} />

      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Construction Excellence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-800/90"></div>
        </div>

        <div className="relative z-10 container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Badge variant="outline" className="px-6 py-3 text-sm font-medium bg-red-500/10 backdrop-blur-sm border-red-500/30 text-red-400 hover:bg-red-500/20 transition-all duration-300">
                ✨ {t('hero.badge')}
              </Badge>
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.9]">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  {t('hero.title')}
                </span>
              </h1>
              <p className="mx-auto max-w-[900px] text-gray-200 text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                {t('hero.subtitle')}
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              <Button
                size="lg"
                className="gap-3 px-12 py-8 text-xl font-semibold bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 shadow-2xl hover:shadow-red-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
              >
                {t('hero.cta')}
                <ArrowRight className="h-6 w-6" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Animated Light Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-3xl"
            animate={{
              x: [0, -20, 0],
              y: [0, 15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 25, 0],
              y: [0, -15, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-red-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100, -20],
                opacity: [0, 1, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 3 + 4,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </section>

      {/* Enhanced Stats Bar */}
      <section className="relative bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white py-8">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold text-white">15+</div>
              <div className="text-red-100 font-medium">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold text-white">500+</div>
              <div className="text-red-100 font-medium">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold text-white">100%</div>
              <div className="text-red-100 font-medium">Satisfaction Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold text-white">24/7</div>
              <div className="text-red-100 font-medium">Support Available</div>
            </motion.div>
          </div>
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
      <section className="py-12 md:py-16 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="flex flex-col items-center justify-center space-y-3 text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="px-4 py-2 text-sm font-medium bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              {t('services.badge')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-900 bg-clip-text text-transparent">
                {t('services.title')}
              </span>
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {t('services.description')}
            </p>
          </motion.div>
          <ServiceGrid locale={locale} />
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
                {t('contact_section.title')}
              </h2>
              <p className="text-muted-foreground md:text-lg">
                {t('contact_section.description')}
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">
                    {t('contact_section.location_title')}
                  </h3>
                  <p className="text-muted-foreground">
                    {locationLines.map((line, index) => (
                      <span key={index} className={index > 0 ? 'block' : undefined}>{line}</span>
                    ))}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">
                    {t('contact_section.contact_info_title')}
                  </h3>
                  <p className="text-muted-foreground">
                    {contactInfoLines.map((line, index) => (
                      <span key={index} className={index > 0 ? 'block' : undefined}>{line}</span>
                    ))}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">
                    {t('contact_section.service_hours_title')}
                  </h3>
                  <p className="text-muted-foreground">
                    {serviceHourLines.map((line, index) => (
                      <span key={index} className={index > 0 ? 'block' : undefined}>{line}</span>
                    ))}
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
