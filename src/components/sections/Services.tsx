import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Hammer, 
  Home, 
  Paintbrush, 
  Wrench, 
  TreePine, 
  Building, 
  Roof,
  Bath,
  ChefHat
} from 'lucide-react';

export function Services() {
  const t = useTranslations('services');

  const services = [
    {
      icon: ChefHat,
      title: t('kitchen.title'),
      description: t('kitchen.description'),
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80'
    },
    {
      icon: Bath,
      title: t('bathroom.title'),
      description: t('bathroom.description'),
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&q=80'
    },
    {
      icon: Hammer,
      title: t('flooring.title'),
      description: t('flooring.description'),
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80'
    },
    {
      icon: Home,
      title: t('basement.title'),
      description: t('basement.description'),
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80'
    },
    {
      icon: Roof,
      title: t('roofing.title'),
      description: t('roofing.description'),
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80'
    },
    {
      icon: Paintbrush,
      title: t('painting.title'),
      description: t('painting.description'),
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&q=80'
    },
    {
      icon: TreePine,
      title: t('outdoor.title'),
      description: t('outdoor.description'),
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80'
    },
    {
      icon: Building,
      title: t('general.title'),
      description: t('general.description'),
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80'
    },
    {
      icon: Wrench,
      title: t('prefab.title'),
      description: t('prefab.description'),
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80'
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-amber-100 dark:bg-amber-900 rounded-lg">
                      <Icon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}