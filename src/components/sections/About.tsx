import { useTranslations } from 'next-intl';
import { Shield, Award, Users, Clock } from 'lucide-react';

export function About() {
  const t = useTranslations('about');

  const features = [
    {
      icon: Clock,
      title: t('experience'),
      description: 'Proven track record in construction and renovation'
    },
    {
      icon: Award,
      title: t('projects'),
      description: 'Successfully completed residential and commercial projects'
    },
    {
      icon: Users,
      title: t('satisfaction'),
      description: 'Happy customers who recommend our services'
    },
    {
      icon: Shield,
      title: t('licensed'),
      description: 'Fully licensed, bonded, and insured for your protection'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80"
              alt="Construction team"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Quality Craftsmanship You Can Trust
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our experienced team of contractors brings decades of combined experience to every project. 
              We use only the highest quality materials and proven construction techniques to ensure your 
              project stands the test of time.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <Shield className="h-5 w-5 text-red-600 mr-2" />
                Licensed and insured professionals
              </li>
              <li className="flex items-center">
                <Award className="h-5 w-5 text-red-600 mr-2" />
                Award-winning construction quality
              </li>
              <li className="flex items-center">
                <Users className="h-5 w-5 text-red-600 mr-2" />
                Dedicated project management
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}