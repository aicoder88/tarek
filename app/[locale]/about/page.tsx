import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Shield, Users, Heart, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations('about');
  const isRTL = locale === 'ar';

  return (
    <div className="flex flex-col min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header locale={locale} />

      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-[#001529] via-[#002140] to-[#001529] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="About TrueNorth Construction"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#001529]/95 via-[#002140]/90 to-[#001529]/95"></div>
        </div>

        <div className="relative z-10 container px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="px-5 py-2.5 text-sm font-semibold bg-red-500/15 backdrop-blur-md border-red-500/40 text-red-400">
              {t('badge')}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  key: 'precision',
                  icon: Target,
                  gradient: 'from-red-500 to-red-600'
                },
                {
                  key: 'passion',
                  icon: Heart,
                  gradient: 'from-blue-500 to-blue-600'
                },
                {
                  key: 'trust',
                  icon: Shield,
                  gradient: 'from-green-500 to-green-600'
                }
              ].map((value, i) => {
                const Icon = value.icon;
                return (
                  <Card key={value.key} className="h-full bg-white dark:bg-gray-800 border-gray-200/60 dark:border-gray-700/60 hover:border-red-300 dark:hover:border-red-700 transition-all duration-500 hover:shadow-2xl group">
                    <CardHeader className="pb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                        {t(`values.${value.key}.title`)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t(`values.${value.key}.description`)}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t('team.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('team.subtitle')}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {['alex', 'maria', 'david'].map((member, i) => (
                <Card key={member} className="overflow-hidden bg-white dark:bg-gray-800 border-gray-200/60 dark:border-gray-700/60 hover:shadow-2xl transition-all duration-300 group">
                  <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member}`}
                      alt={t(`team.members.${member}.name`)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {t(`team.members.${member}.name`)}
                    </h3>
                    <p className="text-red-600 dark:text-red-400 font-medium mb-2">
                      {t(`team.members.${member}.role`)}
                    </p>
                    <Badge variant="outline" className="mb-3">
                      {t(`team.members.${member}.experience`)}
                    </Badge>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {t(`team.members.${member}.description`)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: '15+', label: 'Years Experience' },
                { value: '500+', label: 'Projects Completed' },
                { value: '100%', label: 'Satisfaction Rate' },
                { value: '24/7', label: 'Support Available' }
              ].map((stat, i) => (
                <div key={i} className="text-center space-y-2">
                  <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
                  <div className="text-red-50/90 font-medium text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }, { locale: 'ar' }];
}