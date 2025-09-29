"use client";

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  const t = useTranslations('contact');
  const services = useTranslations('services');

  const contactInfo = [
    {
      icon: Phone,
      title: t('info_titles.phone'),
      value: t('info.phone'),
      href: `tel:${t('info.phone')}`
    },
    {
      icon: Mail,
      title: t('info_titles.email'),
      value: t('info.email'),
      href: `mailto:${t('info.email')}`
    },
    {
      icon: MapPin,
      title: t('info_titles.address'),
      value: t('info.address'),
      href: '#'
    },
    {
      icon: Clock,
      title: t('info_titles.hours'),
      value: t('info.hours'),
      href: '#'
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>{t('form.card_title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">{t('form.name')}</Label>
                    <Input id="name" placeholder={t('form.placeholders.name')} />
                  </div>
                  <div>
                    <Label htmlFor="phone">{t('form.phone')}</Label>
                    <Input id="phone" type="tel" placeholder={t('form.placeholders.phone')} />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">{t('form.email')}</Label>
                  <Input id="email" type="email" placeholder={t('form.placeholders.email')} />
                </div>

                <div>
                  <Label htmlFor="service">{t('form.service')}</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={t('form.select_service_placeholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kitchen">{services('kitchen.title')}</SelectItem>
                      <SelectItem value="bathroom">{services('bathroom.title')}</SelectItem>
                      <SelectItem value="flooring">{services('flooring.title')}</SelectItem>
                      <SelectItem value="basement">{services('basement.title')}</SelectItem>
                      <SelectItem value="roofing">{services('roofing.title')}</SelectItem>
                      <SelectItem value="painting">{services('painting.title')}</SelectItem>
                      <SelectItem value="outdoor">{services('outdoor.title')}</SelectItem>
                      <SelectItem value="general">{services('general.title')}</SelectItem>
                      <SelectItem value="other">{t('form.other_option')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">{t('form.message')}</Label>
                  <Textarea 
                    id="message" 
                    placeholder={t('form.placeholders.message')}
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                  {t('form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg">
                        <Icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Map placeholder */}
            <Card className="p-6">
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 dark:text-gray-400">{t('map.title')}</p>
                  <p className="text-sm text-gray-400 dark:text-gray-500">{t('map.description')}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
