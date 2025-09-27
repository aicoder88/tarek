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
  ArrowRight,
  Hammer,
  PaintBucket,
  Home,
  Wrench,
  Warehouse,
  Brush,
  TreePine,
  HardHat,
  Building,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  href = "#",
}: ServiceCardProps) => {
  return (
    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg bg-card">
      <CardHeader>
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
          {icon}
        </div>
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
      icon: <Hammer className="h-6 w-6" />,
      title: "Flooring",
      description:
        "Hardwood, laminate, tile, and vinyl flooring installation with expert craftsmanship.",
      href: `/${locale}/services/flooring`,
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Kitchen Remodeling",
      description:
        "Complete kitchen renovations including cabinets, countertops, and appliance installation.",
      href: `/${locale}/services/kitchen-remodeling`,
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Bathroom Renovation",
      description:
        "Transform your bathroom with new fixtures, tiling, and custom shower installations.",
      href: `/${locale}/services/bathroom-renovation`,
    },
    {
      icon: <Warehouse className="h-6 w-6" />,
      title: "Basement Finishing",
      description:
        "Convert your basement into a functional living space with proper insulation and design.",
      href: `/${locale}/services/basement-finishing`,
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Roofing & Siding",
      description:
        "Quality roofing and siding installation to protect and beautify your home exterior.",
      href: `/${locale}/services/roofing-siding`,
    },
    {
      icon: <PaintBucket className="h-6 w-6" />,
      title: "Painting & Drywall",
      description:
        "Professional interior and exterior painting services with drywall repair and installation.",
      href: `/${locale}/services/painting-drywall`,
    },
    {
      icon: <TreePine className="h-6 w-6" />,
      title: "Outdoor & Landscaping",
      description:
        "Deck building, patio installation, and landscaping to enhance your outdoor living areas.",
      href: `/${locale}/services/outdoor-landscaping`,
    },
    {
      icon: <HardHat className="h-6 w-6" />,
      title: "General Contracting",
      description:
        "Full-service general contracting for additions, renovations, and custom home projects.",
      href: `/${locale}/services/general-contracting`,
    },
    {
      icon: <Brush className="h-6 w-6" />,
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" className="px-8">
            <a href={`/${locale}/services`}>View All Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
