import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Projects() {
  const t = useTranslations('projects');

  const projects = [
    {
      title: 'Modern Kitchen Renovation',
      category: 'Kitchen Remodeling',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
      beforeImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&q=80',
      description: 'Complete kitchen transformation with custom cabinetry and modern appliances.',
      testimonial: 'Amazing work! Our kitchen is now the heart of our home.'
    },
    {
      title: 'Luxury Bathroom Remodel',
      category: 'Bathroom Renovation',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&q=80',
      beforeImage: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=300&q=80',
      description: 'Spa-like bathroom with premium fixtures and elegant tile work.',
      testimonial: 'Professional service from start to finish. Highly recommended!'
    },
    {
      title: 'Basement Finishing Project',
      category: 'Basement Finishing',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
      beforeImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&q=80',
      description: 'Transformed unfinished basement into a beautiful family entertainment space.',
      testimonial: 'They turned our unused basement into our favorite room!'
    },
    {
      title: 'Outdoor Deck Construction',
      category: 'Outdoor & Landscaping',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
      beforeImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&q=80',
      description: 'Custom deck with integrated lighting and outdoor kitchen area.',
      testimonial: 'Perfect for entertaining! The craftsmanship is outstanding.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-600 text-white">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <blockquote className="border-l-4 border-red-600 pl-4 italic text-gray-700 dark:text-gray-300 mb-4">
                  &ldquo;{project.testimonial}&rdquo;
                </blockquote>
                <Button variant="outline" className="w-full">
                  View Project Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            {t('view_all')}
          </Button>
        </div>
      </div>
    </section>
  );
}