import React, { createContext, useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

type Locale = 'en' | 'fr' | 'ar';

type LocaleProviderProps = {
  children: React.ReactNode;
  defaultLocale?: Locale;
};

type LocaleProviderState = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

// Mock translations for the Vite app
const translations = {
  en: {
    'navigation.home': 'Home',
    'navigation.services': 'Services',
    'navigation.projects': 'Projects',
    'navigation.about': 'About',
    'navigation.contact': 'Contact',
    'language.english': 'English',
    'language.french': 'French',
    'language.arabic': 'Arabic',
    'theme.toggle': 'Toggle theme',
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'theme.system': 'System',
  },
  fr: {
    'navigation.home': 'Accueil',
    'navigation.services': 'Services',
    'navigation.projects': 'Projets',
    'navigation.about': 'À propos',
    'navigation.contact': 'Contact',
    'language.english': 'Anglais',
    'language.french': 'Français',
    'language.arabic': 'Arabe',
    'theme.toggle': 'Basculer le thème',
    'theme.light': 'Clair',
    'theme.dark': 'Sombre',
    'theme.system': 'Système',
  },
  ar: {
    'navigation.home': 'الرئيسية',
    'navigation.services': 'الخدمات',
    'navigation.projects': 'المشاريع',
    'navigation.about': 'حولنا',
    'navigation.contact': 'اتصل بنا',
    'language.english': 'الإنجليزية',
    'language.french': 'الفرنسية',
    'language.arabic': 'العربية',
    'theme.toggle': 'تبديل المظهر',
    'theme.light': 'فاتح',
    'theme.dark': 'داكن',
    'theme.system': 'النظام',
  },
};

const initialState: LocaleProviderState = {
  locale: 'en',
  setLocale: () => null,
  t: () => '',
};

const LocaleProviderContext = createContext<LocaleProviderState>(initialState);

export function LocaleProvider({
  children,
  defaultLocale = 'en',
}: LocaleProviderProps) {
  const [locale, setLocale] = useState<Locale>(
    () => (localStorage.getItem('locale') as Locale) || defaultLocale
  );

  const t = (key: string): string => {
    return translations[locale][key as keyof typeof translations[typeof locale]] || key;
  };

  const handleSetLocale = (newLocale: Locale) => {
    localStorage.setItem('locale', newLocale);
    setLocale(newLocale);
    
    // Update document direction for RTL
    document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLocale;
  };

  const value = {
    locale,
    setLocale: handleSetLocale,
    t,
  };

  return (
    <LocaleProviderContext.Provider value={value}>
      {children}
    </LocaleProviderContext.Provider>
  );
}

export const useLocale = () => {
  const context = useContext(LocaleProviderContext);

  if (context === undefined)
    throw new Error('useLocale must be used within a LocaleProvider');

  return context;
};