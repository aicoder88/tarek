'use client';

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles } from "lucide-react";
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
      <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#001529] via-[#002140] to-[#001529] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Construction Excellence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#001529]/95 via-[#002140]/90 to-[#001529]/95"></div>
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 container px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-8 text-center max-w-6xl mx-auto">
            <motion.div
              className="space-y-7"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge variant="outline" className="px-7 py-3.5 text-sm font-semibold tracking-wide bg-gradient-to-r from-red-500/15 to-red-600/15 backdrop-blur-md border-red-500/40 text-red-400 hover:bg-red-500/25 transition-all duration-500 shadow-lg shadow-red-500/10">
                <span className="inline-block mr-2 animate-pulse">✦</span>
                {t('hero.badge')}
              </Badge>
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] text-white leading-[1.08] px-4 drop-shadow-[0_6px_28px_rgba(0,0,0,0.45)]">
                {t('hero.title')}
              </h1>
              <p className="mx-auto max-w-[850px] text-gray-300/90 text-xl md:text-2xl lg:text-[1.75rem] leading-relaxed font-light tracking-wide px-4">
                {t('hero.subtitle')}
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 pt-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button
                size="lg"
                className="group relative gap-3 px-12 py-6 text-xl font-bold bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-500 hover:via-red-600 hover:to-red-500 text-white border-0 shadow-2xl hover:shadow-red-500/40 transition-all duration-700 transform hover:scale-[1.03] hover:-translate-y-1 rounded-xl overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span className="relative">{t('hero.cta')}</span>
                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1 duration-300" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Animated Light Effects - More Subtle and Professional */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-500/15 rounded-full blur-[120px]"
            animate={{
              x: [0, 40, 0],
              y: [0, 30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]"
            animate={{
              x: [0, -30, 0],
              y: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Floating Particles - Reduced for elegance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-red-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-30, -120, -30],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 4 + 5,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </section>

      {/* Enhanced Stats Bar */}
      <section className="relative bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white py-10 md:py-14">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative container px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-3 text-center group"
            >
              <div className="text-5xl md:text-6xl font-bold text-white tracking-tight transition-transform duration-300 group-hover:scale-110">15+</div>
              <div className="text-red-50/90 font-semibold text-sm md:text-base tracking-wide">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-3 text-center group"
            >
              <div className="text-5xl md:text-6xl font-bold text-white tracking-tight transition-transform duration-300 group-hover:scale-110">500+</div>
              <div className="text-red-50/90 font-semibold text-sm md:text-base tracking-wide">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-3 text-center group"
            >
              <div className="text-5xl md:text-6xl font-bold text-white tracking-tight transition-transform duration-300 group-hover:scale-110">100%</div>
              <div className="text-red-50/90 font-semibold text-sm md:text-base tracking-wide">Satisfaction Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="space-y-3 text-center group"
            >
              <div className="text-5xl md:text-6xl font-bold text-white tracking-tight transition-transform duration-300 group-hover:scale-110">24/7</div>
              <div className="text-red-50/90 font-semibold text-sm md:text-base tracking-wide">Support Available</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-40 w-96 h-96 bg-red-500/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="container px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <Badge variant="outline" className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400">
                  {t('about.badge')}
                </Badge>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white">
                  {t('about.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                  {t('about.description')}
                </p>
              </div>
              <ul className="grid gap-4">
                {t.raw('about.features').map((item: string, i: number) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-500 group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-200 text-base md:text-lg font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl group"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
                alt="Construction team working on project"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              {/* Decorative border */}
              <div className="absolute inset-0 border-4 border-white/10 rounded-2xl pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 md:py-14 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="flex flex-col items-center justify-center space-y-3 text-center mb-8"
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
              {t('services.title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {t('services.description')}
            </p>
          </motion.div>
          <ServiceGrid locale={locale} />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-900/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="container px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            className="flex flex-col items-center justify-center space-y-6 text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400">
              {t('why_choose_us.badge')}
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl text-gray-900 dark:text-white">
              {t('why_choose_us.title')}
            </h2>
          </motion.div>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
            {t.raw('why_choose_us.items').map((item: {title: string, description: string}, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Card className="h-full bg-white dark:bg-gray-800 border-gray-200/60 dark:border-gray-700/60 hover:border-red-300 dark:hover:border-red-700 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 group overflow-hidden relative">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-600/0 group-hover:from-red-500/5 group-hover:to-red-600/5 transition-all duration-500 pointer-events-none"></div>

                  <CardHeader className="pb-4 relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
                      <div className="w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm"></div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-14 md:py-20 bg-gradient-to-b from-background to-muted/30">
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
          <div className="mt-6">
            <ProjectGallery locale={locale} />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="container px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            className="flex flex-col items-center justify-center space-y-6 text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400">
              {t('testimonials.badge')}
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl text-gray-900 dark:text-white">
              {t('testimonials.title')}
            </h2>
          </motion.div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
            {t.raw('testimonials.items').map((testimonial: {name: string, role: string, content: string}, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Card className="h-full bg-white dark:bg-gray-800 border-gray-200/60 dark:border-gray-700/60 hover:border-red-300 dark:hover:border-red-700 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 group relative overflow-hidden">
                  {/* Quote icon background */}
                  <div className="absolute top-6 right-6 text-red-500/10 dark:text-red-400/10 text-[120px] font-serif leading-none pointer-events-none group-hover:text-red-500/20 dark:group-hover:text-red-400/20 transition-colors duration-500">"</div>

                  <CardContent className="p-8 relative">
                    <div className="flex items-center space-x-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-red-500 text-red-500 transition-transform duration-300 hover:scale-125"
                        />
                      ))}
                    </div>
                    <p className="mb-8 text-gray-700 dark:text-gray-200 text-lg leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center pt-4 border-t border-gray-200/60 dark:border-gray-700/60">
                      <div className="h-14 w-14 rounded-full overflow-hidden mr-4 ring-2 ring-red-500/20 group-hover:ring-red-500/40 transition-all duration-300">
                        <img
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-gray-900 dark:text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 -left-40 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 -right-40 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="container px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <Badge variant="outline" className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400">
                  {t('contact_section.badge')}
                </Badge>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white">
                  {t('contact_section.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                  {t('contact_section.description')}
                </p>
              </div>
              <div className="space-y-6">
                <motion.div
                  className="space-y-3 p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 hover:border-red-300 dark:hover:border-red-700 transition-all duration-300 hover:shadow-lg group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                    {t('contact_section.location_title')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {locationLines.map((line, index) => (
                      <span key={index} className={index > 0 ? 'block' : undefined}>{line}</span>
                    ))}
                  </p>
                </motion.div>
                <motion.div
                  className="space-y-3 p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 hover:border-red-300 dark:hover:border-red-700 transition-all duration-300 hover:shadow-lg group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                    {t('contact_section.contact_info_title')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {contactInfoLines.map((line, index) => (
                      <span key={index} className={index > 0 ? 'block' : undefined}>{line}</span>
                    ))}
                  </p>
                </motion.div>
                <motion.div
                  className="space-y-3 p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 hover:border-red-300 dark:hover:border-red-700 transition-all duration-300 hover:shadow-lg group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                    {t('contact_section.service_hours_title')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {serviceHourLines.map((line, index) => (
                      <span key={index} className={index > 0 ? 'block' : undefined}>{line}</span>
                    ))}
                  </p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="rounded-2xl border border-gray-200/60 dark:border-gray-700/60 bg-white dark:bg-gray-800 p-8 md:p-10 shadow-2xl"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm locale={locale} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#001529] via-[#002140] to-[#001529] relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
            alt="Construction Excellence"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#001529]/95 via-[#002140]/90 to-[#001529]/95"></div>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-red-500/20 rounded-full blur-[100px]"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]"
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            className="flex flex-col items-center justify-center space-y-8 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                {t('cta.title')}
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-300/90 text-lg md:text-xl leading-relaxed font-light">
                {t('cta.description')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Button
                size="lg"
                className="group relative gap-3 px-12 py-7 text-lg font-bold bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-500 hover:via-red-600 hover:to-red-500 text-white border-0 shadow-2xl hover:shadow-red-500/40 transition-all duration-700 transform hover:scale-[1.03] hover:-translate-y-1 rounded-xl overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span className="relative">{t('cta.primary_cta')}</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 duration-300" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer locale={locale} />
    </div>
  );
};

export default Home;
