'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Sparkles,
  ArrowRight,
  Home,
  Droplet,
  Grid3x3,
  Building2,
  Tent,
  PaintBucket,
  Trees,
  Hammer,
  Warehouse
} from 'lucide-react';
import { motion } from 'framer-motion';

export function Services() {
  const t = useTranslations('services');

  const services = [
    {
      title: t('kitchen.title'),
      description: t('kitchen.description'),
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&q=80',
      icon: Home,
      gradient: 'from-red-500 to-pink-600'
    },
    {
      title: t('bathroom.title'),
      description: t('bathroom.description'),
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=500&h=300&q=80',
      icon: Droplet,
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      title: t('flooring.title'),
      description: t('flooring.description'),
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&q=80',
      icon: Grid3x3,
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      title: t('basement.title'),
      description: t('basement.description'),
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&q=80',
      icon: Building2,
      gradient: 'from-slate-500 to-gray-700'
    },
    {
      title: t('roofing.title'),
      description: t('roofing.description'),
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&q=80',
      icon: Tent,
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      title: t('painting.title'),
      description: t('painting.description'),
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500&h=300&q=80',
      icon: PaintBucket,
      gradient: 'from-violet-500 to-fuchsia-600'
    },
    {
      title: t('outdoor.title'),
      description: t('outdoor.description'),
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&q=80',
      icon: Trees,
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      title: t('general.title'),
      description: t('general.description'),
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=300&q=80',
      icon: Hammer,
      gradient: 'from-red-600 to-rose-700'
    },
    {
      title: t('prefab.title'),
      description: t('prefab.description'),
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&q=80',
      icon: Warehouse,
      gradient: 'from-teal-500 to-cyan-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-sm font-medium bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            {t('title')}
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {t('title')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Enhanced Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="h-full"
                    >
                      <Card className="group relative overflow-hidden border-2 hover:border-red-200 dark:hover:border-red-800 transition-all duration-300 h-full hover:shadow-2xl hover:-translate-y-2">
                        {/* Image with overlay */}
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          {/* Gradient overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300`}></div>

                          {/* Icon that appears on hover */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                              <IconComponent className="w-12 h-12 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Card Content */}
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                              {service.title}
                            </CardTitle>
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-100 transition-opacity`}>
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                            {service.description}
                          </CardDescription>

                          {/* Call to action that appears on hover */}
                          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <Button
                              variant="ghost"
                              className="w-full justify-between text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/20"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </CardContent>

                        {/* Animated border effect */}
                        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${service.gradient} opacity-20 blur-xl`}></div>
                        </div>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {/* Enhanced Navigation Buttons */}
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 h-12 w-12 border-2 border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-400 dark:hover:border-red-600 transition-all" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-12 h-12 w-12 border-2 border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-400 dark:hover:border-red-600 transition-all" />
          </Carousel>
        </div>

        {/* Enhanced CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            size="lg"
            className="group bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-700 hover:via-red-600 hover:to-red-700 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            <span className="relative flex items-center">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
