import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ArrowRight } from "lucide-react";

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
    <Card className="group hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="aspect-video overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          variant="ghost"
          className="group w-full justify-between"
          asChild
        >
          <a href={href}>
            Learn More
            <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

interface ServiceGridProps {
  services?: ServiceCardProps[];
  locale?: string;
}

const ServiceGrid = ({ services, locale = 'en' }: ServiceGridProps) => {
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

  return (
    <section className="w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of construction and renovation
            services to meet all your home improvement needs.
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {displayServices.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <ServiceCard
                    image={service.image}
                    title={service.title}
                    description={service.description}
                    href={service.href}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="px-8">
            <a href={`/${locale}/services`}>View All Services</a>
          </Button>
        </div>
      </div>
    </section>
  );}
};

export default ServiceGrid;
