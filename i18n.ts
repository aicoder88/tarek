import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const l = (locale === 'en' || locale === 'fr' || locale === 'ar') ? locale : 'en';
  const messages = (await import(`./messages/${l}.json`)).default;
  return { locale: l, messages };
});
