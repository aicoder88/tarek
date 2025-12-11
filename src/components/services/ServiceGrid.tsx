"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronLeft, ChevronRight, Home, Droplet, Grid3x3, Building2, Tent, PaintBucket, Trees, Hammer, Warehouse } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  gradient?: string;
}

const ServiceCard = ({
  image,
  title,
  description,
  href = "#",
  icon,
  gradient = "from-red-500 to-pink-600",
}: ServiceCardProps) => {
  const IconComponent = icon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="group relative overflow-hidden border-2 hover:border-red-200 dark:hover:border-red-800 transition-all duration-300 h-full hover:shadow-2xl">
        <a href={href} className="block h-full flex flex-col">
          {/* Image with overlay */}
          <div className="relative aspect-video overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300`}></div>

            {/* Icon that appears on hover */}
            {IconComponent && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
              </div>
            )}
          </div>

          {/* Card Content */}
          <CardHeader className="pb-3 flex-shrink-0">
            <div className="flex items-start justify-between">
              <CardTitle className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-tight flex-1">
                {title}
              </CardTitle>
              {IconComponent && (
                <div className={`p-2 rounded-lg bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-100 transition-opacity flex-shrink-0`}>
                  <IconComponent className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          </CardHeader>

          <CardContent className="flex-grow pb-3">
            <CardDescription className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
              {description}
            </CardDescription>
          </CardContent>

          {/* Call to action that appears on hover */}
          <CardFooter className="pt-0 flex-shrink-0">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-full">
              <Button
                variant="ghost"
                className="w-full justify-between text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/20 p-0 h-auto"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </CardFooter>

          {/* Animated border effect */}
          <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${gradient} opacity-20 blur-xl`}></div>
          </div>
        </a>
      </Card>
    </motion.div>
  );
};

interface ServiceGridProps {
  services?: ServiceCardProps[];
  locale?: string;
  variant?: 'carousel' | 'grid';
}

const ServiceGrid = ({ services, locale = 'en', variant = 'carousel' }: ServiceGridProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const defaultServices: ServiceCardProps[] = [
    {
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&q=80',
      title: "Kitchen Remodeling",
      description:
        "Complete kitchen renovations including cabinets, countertops, and appliance installation.",
      href: `/${locale}/services/kitchen-remodeling`,
      icon: Home,
      gradient: 'from-red-500 to-pink-600'
    },
    {
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=500&h=300&q=80',
      title: "Bathroom Renovation",
      description:
        "Transform your bathroom with new fixtures, tiling, and custom shower installations.",
      href: `/${locale}/services/bathroom-renovation`,
      icon: Droplet,
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&q=80',
      title: "Flooring",
      description:
        "Hardwood, laminate, tile, and vinyl flooring installation with expert craftsmanship.",
      href: `/${locale}/services/flooring`,
      icon: Grid3x3,
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&q=80',
      title: "Basement Finishing",
      description:
        "Convert your basement into a functional living space with proper insulation and design.",
      href: `/${locale}/services/basement-finishing`,
      icon: Building2,
      gradient: 'from-slate-500 to-gray-700'
    },
    {
      image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=500&h=300&q=80',
      title: "Roofing & Siding",
      description:
        "Quality roofing and siding installation to protect and beautify your home exterior.",
      href: `/${locale}/services/roofing-siding`,
      icon: Tent,
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&h=300&q=80',
      title: "Painting & Drywall",
      description:
        "Professional interior and exterior painting services with drywall repair and installation.",
      href: `/${locale}/services/painting-drywall`,
      icon: PaintBucket,
      gradient: 'from-violet-500 to-fuchsia-600'
    },
    {
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&q=80',
      title: "Outdoor & Landscaping",
      description:
        "Deck building, patio installation, and landscaping to enhance your outdoor living areas.",
      href: `/${locale}/services/outdoor-landscaping`,
      icon: Trees,
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=300&q=80',
      title: "General Contracting",
      description:
        "Full-service general contracting for additions, renovations, and custom home projects.",
      href: `/${locale}/services/general-contracting`,
      icon: Hammer,
      gradient: 'from-red-600 to-rose-700'
    },
    {
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&q=80',
      title: "Prefab Structures",
      description:
        "Custom sheds, garages, and prefabricated buildings with professional installation and quality materials.",
      href: `/${locale}/services/prefabricated-structures`,
      icon: Warehouse,
      gradient: 'from-teal-500 to-cyan-600'
    },
  ];

  const displayServices = services || defaultServices;

  if (variant === 'grid') {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayServices.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
            href={service.href}
            icon={service.icon}
            gradient={service.gradient}
          />
        ))}
      </div>
    );
  }

  const itemsPerView = 3; // Desktop: 3, Tablet: 2, Mobile: 1
  const maxIndex = Math.max(0, displayServices.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="w-full">
      <div className="relative">
        {/* Desktop/Tablet: Enhanced Carousel view */}
        <div className="hidden lg:block">
          {/* Carousel Header with Prominent Navigation Hint */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Browse our services
            </h2>
            <div className="text-base text-muted-foreground bg-muted/30 px-4 py-2 rounded-full inline-block">
              Showing {currentIndex + 1} - {Math.min(currentIndex + itemsPerView, displayServices.length)} of {displayServices.length} services
            </div>
          </div>

          <div className="flex items-center gap-6 relative">
            {/* Left Arrow - Extra Large and Very Prominent */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="h-20 w-20 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 border-4 border-primary/30 hover:border-primary/70 bg-background/90 backdrop-blur-sm z-20 hover:scale-125 relative group"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-12 w-12 text-primary group-hover:text-primary/80" />
              <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary/20 rounded-full animate-ping" />
            </Button>

            {/* Carousel Container with enhanced styling */}
            <div className="flex-1 overflow-hidden rounded-xl bg-gradient-to-r from-muted/20 via-transparent to-muted/20 p-2">
              <div
                className="flex transition-transform duration-500 ease-out gap-6"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
              >
                {displayServices.map((service, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0">
                    <ServiceCard
                      image={service.image}
                      title={service.title}
                      description={service.description}
                      href={service.href}
                      icon={service.icon}
                      gradient={service.gradient}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow - Extra Large and Very Prominent */}
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="h-20 w-20 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 border-4 border-primary/30 hover:border-primary/70 bg-background/90 backdrop-blur-sm z-20 hover:scale-125 relative group"
              disabled={currentIndex >= maxIndex}
            >
              <ChevronRight className="h-12 w-12 text-primary group-hover:text-primary/80" />
              <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              <div className="absolute -top-1 -left-1 w-6 h-6 bg-primary/20 rounded-full animate-ping" />
            </Button>

            {/* Gradient overlays to indicate more content */}
            {currentIndex > 0 && (
              <div className="absolute left-20 top-0 bottom-0 w-12 bg-gradient-to-r from-background/60 to-transparent pointer-events-none z-5" />
            )}
            {currentIndex < maxIndex && (
              <div className="absolute right-20 top-0 bottom-0 w-12 bg-gradient-to-l from-background/60 to-transparent pointer-events-none z-5" />
            )}
          </div>

          {/* Enhanced Carousel indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative group transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 h-3 bg-primary rounded-full'
                    : 'w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50 rounded-full'
                }`}
                title={`View services ${index * itemsPerView + 1}-${Math.min((index + 1) * itemsPerView, displayServices.length)}`}
              >
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-primary/20 rounded-full scale-150 animate-ping" />
                )}
              </button>
            ))}
          </div>

          {/* Enhanced Call-to-action with visual cues */}
          <div className="text-center mt-6 space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border-2 border-primary/20">
                <ChevronLeft className="h-5 w-5 text-primary animate-bounce" />
                <span className="text-base font-medium text-primary">Click arrows to browse</span>
                <ChevronRight className="h-5 w-5 text-primary animate-bounce" />
              </div>
            </div>
            <p className="text-muted-foreground">
              Click on any service card to learn more about our professional construction services
            </p>
          </div>
        </div>

        {/* Tablet: 2-column grid */}
        <div className="hidden md:block lg:hidden">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-foreground mb-4 tracking-tight">
              Browse our services
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our professional construction and renovation services
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {displayServices.slice(0, 6).map((service, index) => (
              <ServiceCard
                key={index}
                image={service.image}
                title={service.title}
                description={service.description}
                href={service.href}
                icon={service.icon}
                gradient={service.gradient}
              />
            ))}
          </div>
        </div>

        {/* Mobile: Enhanced horizontal scroll with clear indicators */}
        <div className="md:hidden">
          {/* Mobile prominent title and scroll hint */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-foreground mb-4 tracking-tight">
              Browse our services
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border-2 border-primary/20">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <span className="text-base font-medium text-primary">Swipe to explore</span>
                <div className="flex items-center gap-1">
                  <ChevronLeft className="h-4 w-4 text-primary animate-bounce" />
                  <ChevronRight className="h-4 w-4 text-primary animate-bounce" />
                </div>
              </div>
            </div>
          </div>

          {/* Featured services horizontal scroll with enhanced styling */}
          {/* <div className="relative">
            <div className="overflow-x-auto pb-6 mb-6 scrollbar-hide">
              <div className="flex gap-4 w-max pl-2 pr-2">
                {displayServices.map((service, index) => (
                  <div key={index} className="w-72 flex-shrink-0">
                    <ServiceCard
                      image={service.image}
                      title={service.title}
                      description={service.description}
                      href={service.href}
                      icon={service.icon}
                      gradient={service.gradient}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute left-0 top-0 bottom-6 w-4 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-6 w-4 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default ServiceGrid;
