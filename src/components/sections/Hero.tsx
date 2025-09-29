import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const t = useTranslations('hero');
  const tStats = useTranslations('stats');

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black/50">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
          alt="Construction site"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            {t('subtitle')}
          </p>

          <div>
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-6 text-xl font-semibold"
            >
              {t('cta')}
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative bg-amber-600/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-amber-100">{tStats('years_experience')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-amber-100">{tStats('projects_completed')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-amber-100">{tStats('satisfaction_rate')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-amber-100">{tStats('support_available')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}