import React from 'react';
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate';
import { getAllServiceData } from '@/data/allServiceData';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function FlooringPage({ params }: PageProps) {
  const { locale } = await params;
  const serviceData = getAllServiceData('flooring', locale);

  return <ServicePageTemplate serviceData={serviceData} locale={locale} />;
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }, { locale: 'ar' }];
}