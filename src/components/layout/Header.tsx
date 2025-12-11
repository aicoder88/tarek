'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Globe, Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';

interface HeaderProps {
  locale?: string;
}

export function Header({ locale = 'en' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tNav = useTranslations('navigation');
  const tLanguage = useTranslations('language');
  const tHeader = useTranslations('header');

  const navigation = [
    { name: tNav('home'), href: `/${locale}` },
    { name: tNav('services'), href: `/${locale}/services` },
    { name: tNav('about'), href: `/${locale}/about` },
    { name: tNav('faq'), href: `/${locale}#faq` },
    { name: tNav('contact'), href: `/${locale}#contact` },
  ];

  const languages = [
    { code: 'en', name: tLanguage('english'), flag: '🇺🇸', nativeName: 'English' },
    { code: 'fr', name: tLanguage('french'), flag: '🇫🇷', nativeName: 'Français' },
    { code: 'ar', name: tLanguage('arabic'), flag: '🇸🇦', nativeName: 'العربية' },
  ];

  const currentLanguage = languages.find(lang => lang.code === locale);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-red-200/30 dark:border-red-800/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2 sm:space-x-4">
            <div className="relative h-12 w-12 sm:h-16 sm:w-16 hover:scale-105 transition-all duration-300 p-1.5 sm:p-2 bg-white dark:bg-gray-800 rounded-xl shadow-md border-2 border-gray-200 dark:border-gray-700">
              <Image
                src="/logo.png"
                alt="TrueNorth Construction Logo"
                width={64}
                height={64}
                className="object-contain dark:brightness-110"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#112b4a] dark:text-white leading-tight">
                TrueNorth Construction
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-medium tracking-wide">
                {tHeader('tagline')}
              </p>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-5 py-2.5 text-gray-700 dark:text-gray-300 hover:text-[#DC143C] dark:hover:text-red-400 font-medium transition-all duration-300 rounded-xl hover:bg-red-50/80 dark:hover:bg-red-900/20 group overflow-hidden"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
                <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#DC143C] to-[#001F3F] transition-all duration-300 group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Enhanced Right side controls */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Enhanced Call to Action Button */}
            {/* <Button
              className="hidden md:flex bg-gradient-to-r from-[#DC143C] via-[#B01030] to-[#001F3F] hover:from-[#B01030] hover:via-[#DC143C] hover:to-[#003A70] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 border-0 relative overflow-hidden group text-xs sm:text-sm"
              size="sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 relative z-10" />
              <span className="relative z-10">+1 438 226 3391</span>
            </Button> */}

            {/* Enhanced Language Selector - Hidden for now */}
            <div className="hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center space-x-1 sm:space-x-2 hover:bg-red-50/80 dark:hover:bg-red-900/20 transition-all duration-300 rounded-xl border border-transparent hover:border-red-200/50 dark:hover:border-red-800/50 backdrop-blur-sm px-2 sm:px-3"
                  >
                    <span className="text-base sm:text-lg drop-shadow-sm">{currentLanguage?.flag}</span>
                    <span className="hidden sm:inline text-xs sm:text-sm font-semibold tracking-wide">
                      {currentLanguage?.code.toUpperCase()}
                    </span>
                    <Globe className="h-3 w-3 sm:h-4 sm:w-4 opacity-70" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-red-200/30 dark:border-red-800/30 shadow-xl">
                  {languages.map((language) => (
                    <DropdownMenuItem
                      key={language.code}
                      asChild
                      className={`flex items-center space-x-3 cursor-pointer transition-all duration-200 rounded-lg mx-1 ${
                        locale === language.code
                          ? 'bg-red-50 dark:bg-red-900/30 text-[#DC143C] dark:text-red-300'
                          : 'hover:bg-red-50/50 dark:hover:bg-red-900/20'
                      }`}
                    >
                      <a href={`/${language.code}`}>
                        <span className="text-lg">{language.flag}</span>
                        <div className="flex flex-col flex-1">
                          <span className="font-medium">{language.name}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{language.nativeName}</span>
                        </div>
                        {locale === language.code && (
                          <div className="w-2 h-2 bg-[#DC143C] rounded-full shadow-sm"></div>
                        )}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>


            {/* Enhanced Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden hover:bg-red-50/80 dark:hover:bg-red-900/20 transition-all duration-300 rounded-xl border border-transparent hover:border-red-200/50 dark:hover:border-red-800/50 px-2 sm:px-3"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-red-200/30 dark:border-red-800/30 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl">
            <div className="px-2 pt-3 pb-5 space-y-1.5 sm:space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-[#DC143C] dark:hover:text-red-400 font-medium transition-all duration-300 rounded-xl hover:bg-red-50/80 dark:hover:bg-red-900/20 border border-transparent hover:border-red-200/30 dark:hover:border-red-800/30 active:scale-95"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 sm:pt-4 border-t border-red-200/30 dark:border-red-800/30">
                <Button
                  className="w-full bg-gradient-to-r from-[#DC143C] via-[#B01030] to-[#001F3F] hover:from-[#B01030] hover:via-[#DC143C] hover:to-[#003A70] text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group py-5 sm:py-6 text-sm sm:text-base active:scale-95"
                  size="lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 relative z-10" />
                  <span className="relative z-10">Call Now - +1 438 226 3391</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
