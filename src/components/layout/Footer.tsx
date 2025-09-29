"use client";

import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Hammer, Phone, Mail, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  locale?: string;
}

export function Footer({ locale = 'en' }: FooterProps) {
  const tFooter = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const tContact = useTranslations('contact');
  const tHeader = useTranslations('header');
  const serviceHoursLines = useMemo(() => tContact('info.hours').split('\n'), [tContact]);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-red-600 rounded-lg">
                <Hammer className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-red-400">
                TrueNorth Construction
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              {tFooter('description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">{tFooter('quick_links')}</h4>
            <ul className="space-y-2">
              <li>
                <a href={`/${locale}`} className="text-gray-300 hover:text-red-400 transition-colors duration-200 flex items-center space-x-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-red-400 transition-all duration-200"></span>
                  <span>{tNav('home')}</span>
                </a>
              </li>
              <li>
                <a href={`/${locale}/services`} className="text-gray-300 hover:text-red-400 transition-colors duration-200 flex items-center space-x-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-red-400 transition-all duration-200"></span>
                  <span>{tNav('services')}</span>
                </a>
              </li>
              <li>
                <a href={`/${locale}/about`} className="text-gray-300 hover:text-red-400 transition-colors duration-200 flex items-center space-x-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-red-400 transition-all duration-200"></span>
                  <span>{tNav('about')}</span>
                </a>
              </li>
              <li>
                <a href={`/${locale}/contact`} className="text-gray-300 hover:text-red-400 transition-colors duration-200 flex items-center space-x-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-red-400 transition-all duration-200"></span>
                  <span>{tNav('contact')}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">{tFooter('contact_info')}</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-red-400" />
                <span>{tContact('info.phone')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-red-400" />
                <span>{tContact('info.email')}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <p>{tContact('info.address')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  {serviceHoursLines.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TrueNorth Construction. {tFooter('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
