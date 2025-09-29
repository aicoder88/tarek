'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Moon, Sun, Globe, Menu, X, Hammer, Phone, Monitor } from 'lucide-react';

interface HeaderProps {
  locale?: string;
}

export function Header({ locale = 'en' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getTranslations = (locale: string) => {
    const translations = {
      en: {
        home: 'Home',
        services: 'Services',
        projects: 'Projects',
        about: 'About',
        contact: 'Contact',
        callNow: 'Call Now',
        english: 'English',
        french: 'French',
        arabic: 'Arabic'
      },
      fr: {
        home: 'Accueil',
        services: 'Services',
        projects: 'Projets',
        about: 'À propos',
        contact: 'Contact',
        callNow: 'Appeler maintenant',
        english: 'Anglais',
        french: 'Français',
        arabic: 'Arabe'
      },
      ar: {
        home: 'الرئيسية',
        services: 'خدمات',
        projects: 'مشاريع',
        about: 'معلومات عنا',
        contact: 'اتصل',
        callNow: 'اتصل الآن',
        english: 'الإنجليزية',
        french: 'الفرنسية',
        arabic: 'العربية'
      }
    };
    return translations[locale as keyof typeof translations] || translations.en;
  };

  const t = getTranslations(locale);

  const navigation = [
    { name: t.home, href: `/${locale}` },
    { name: t.services, href: `/${locale}/services` },
    { name: t.about, href: `/${locale}/about` },
    { name: t.contact, href: `/${locale}/contact` },
  ];

  const languages = [
    { code: 'en', name: t.english, flag: '🇺🇸', nativeName: 'English' },
    { code: 'fr', name: t.french, flag: '🇫🇷', nativeName: 'Français' },
    { code: 'ar', name: t.arabic, flag: '🇸🇦', nativeName: 'العربية' },
  ];

  const currentLanguage = languages.find(lang => lang.code === locale);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-amber-200/30 dark:border-amber-800/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0 flex items-center space-x-4">
            <div className="relative p-3 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <Hammer className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 dark:from-amber-400 dark:via-amber-300 dark:to-amber-500 bg-clip-text text-transparent">
                TrueNorth Construction
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-medium tracking-wide">
                Construction & Renovation Experts
              </p>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-5 py-2.5 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-all duration-300 rounded-xl hover:bg-amber-50/80 dark:hover:bg-amber-900/20 group overflow-hidden"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-amber-600/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
                <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300 group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Enhanced Right side controls */}
          <div className="flex items-center space-x-3">
            {/* Enhanced Call to Action Button */}
            <Button 
              className="hidden md:flex bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:via-amber-700 hover:to-amber-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 border-0 relative overflow-hidden group"
              size="sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Phone className="h-4 w-4 mr-2 relative z-10" />
              <span className="relative z-10">(647) 860-5500</span>
            </Button>

            {/* Enhanced Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-2 hover:bg-amber-50/80 dark:hover:bg-amber-900/20 transition-all duration-300 rounded-xl border border-transparent hover:border-amber-200/50 dark:hover:border-amber-800/50 backdrop-blur-sm"
                >
                  <span className="text-lg drop-shadow-sm">{currentLanguage?.flag}</span>
                  <span className="hidden sm:inline text-sm font-semibold tracking-wide">
                    {currentLanguage?.code.toUpperCase()}
                  </span>
                  <Globe className="h-4 w-4 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-amber-200/30 dark:border-amber-800/30 shadow-xl">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    asChild
                    className={`flex items-center space-x-3 cursor-pointer transition-all duration-200 rounded-lg mx-1 ${
                      locale === language.code
                        ? 'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
                        : 'hover:bg-amber-50/50 dark:hover:bg-amber-900/20'
                    }`}
                  >
                    <a href={`/${language.code}`}>
                      <span className="text-lg">{language.flag}</span>
                      <div className="flex flex-col flex-1">
                        <span className="font-medium">{language.name}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{language.nativeName}</span>
                      </div>
                      {locale === language.code && (
                        <div className="w-2 h-2 bg-amber-500 rounded-full shadow-sm"></div>
                      )}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>


            {/* Enhanced Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden hover:bg-amber-50/80 dark:hover:bg-amber-900/20 transition-all duration-300 rounded-xl border border-transparent hover:border-amber-200/50 dark:hover:border-amber-800/50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-5 w-5 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-amber-200/30 dark:border-amber-800/30 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl">
            <div className="px-2 pt-4 pb-6 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-all duration-300 rounded-xl hover:bg-amber-50/80 dark:hover:bg-amber-900/20 border border-transparent hover:border-amber-200/30 dark:hover:border-amber-800/30"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-amber-200/30 dark:border-amber-800/30">
                <Button 
                  className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:via-amber-700 hover:to-amber-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  size="lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Phone className="h-4 w-4 mr-2 relative z-10" />
                  <span className="relative z-10">Call Now - (647) 860-5500</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
