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
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

const ServiceCard = ({
  image,
  title,
  description,
  href = "#",
}: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 h-full cursor-pointer transform hover:scale-[1.02] overflow-hidden">
      <a href={href} className="block h-full">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <CardHeader className="pb-3">
          <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow pb-4">
          <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
        </CardContent>
        <CardFooter className="pt-0">
          <div className="flex items-center text-primary font-medium text-sm group-hover:text-primary/80 transition-colors duration-300">
            Learn More
            <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
          </div>
        </CardFooter>
      </a>
    </Card>
  );
};

interface ServiceGridProps {
  services?: ServiceCardProps[];
  locale?: string;
}

const ServiceGrid = ({ services, locale = 'en' }: ServiceGridProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const defaultServices: ServiceCardProps[] = [
    {
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&q=80',
      title: "Flooring",
      description:
        "Hardwood, laminate, tile, and vinyl flooring installation with expert craftsmanship.",
      href: `/${locale}/services/flooring`,
    },
    {
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&q=80',
      title: "Kitchen Remodeling",
      description:
        "Complete kitchen renovations including cabinets, countertops, and appliance installation.",
      href: `/${locale}/services/kitchen-remodeling`,
    },
    {
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=500&h=300&q=80',
      title: "Bathroom Renovation",
      description:
        "Transform your bathroom with new fixtures, tiling, and custom shower installations.",
      href: `/${locale}/services/bathroom-renovation`,
    },
    {
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&q=80',
      title: "Basement Finishing",
      description:
        "Convert your basement into a functional living space with proper insulation and design.",
      href: `/${locale}/services/basement-finishing`,
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&q=80',
      title: "Roofing & Siding",
      description:
        "Quality roofing and siding installation to protect and beautify your home exterior.",
      href: `/${locale}/services/roofing-siding`,
    },
    {
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500&h=300&q=80',
      title: "Painting & Drywall",
      description:
        "Professional interior and exterior painting services with drywall repair and installation.",
      href: `/${locale}/services/painting-drywall`,
    },
    {
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&q=80',
      title: "Outdoor & Landscaping",
      description:
        "Deck building, patio installation, and landscaping to enhance your outdoor living areas.",
      href: `/${locale}/services/outdoor-landscaping`,
    },
    {
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=300&q=80',
      title: "General Contracting",
      description:
        "Full-service general contracting for additions, renovations, and custom home projects.",
      href: `/${locale}/services/general-contracting`,
    },
    {
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&q=80',
      title: "Prefabricated Structures",
      description:
        "Quick and efficient installation of prefabricated structures for various purposes.",
      href: `/${locale}/services/prefabricated-structures`,
    },
  ];

  const displayServices = services || defaultServices;

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
        {/* Desktop/Tablet: Carousel view */}
        <div className="hidden lg:block">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="h-12 w-12 rounded-full shadow-md hover:shadow-lg transition-shadow"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex-1 overflow-hidden">
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
                    />
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="h-12 w-12 rounded-full shadow-md hover:shadow-lg transition-shadow"
              disabled={currentIndex >= maxIndex}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Tablet: 2-column grid */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
          {displayServices.slice(0, 6).map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>

        {/* Mobile: Single column with horizontal scroll for featured services */}
        <div className="md:hidden">
          {/* Featured services horizontal scroll */}
          <div className="overflow-x-auto pb-4 mb-6">
            <div className="flex gap-4 w-max">
              {displayServices.slice(0, 4).map((service, index) => (
                <div key={index} className="w-72 flex-shrink-0">
                  <ServiceCard
                    image={service.image}
                    title={service.title}
                    description={service.description}
                    href={service.href}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Additional services grid */}
          <div className="grid grid-cols-1 gap-4">
            {displayServices.slice(4, 8).map((service, index) => (
              <ServiceCard
                key={index + 4}
                image={service.image}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceGrid;
