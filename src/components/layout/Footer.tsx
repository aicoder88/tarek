import { Hammer, Phone, Mail, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  locale?: string;
}

export function Footer({ locale = 'en' }: FooterProps) {
  const getTranslations = (locale: string) => {
    const translations = {
      en: {
        description: "Professional construction and renovation services founded by Tarek with over 20 years of experience. Licensed & insured professionals delivering quality results.",
        quickLinks: "Quick Links",
        contactInfo: "Contact Info",
        rights: "All rights reserved.",
        home: "Home",
        services: "Services",
        projects: "Projects",
        about: "About",
        contact: "Contact",
      },
      fr: {
        description: "Services de construction et de rénovation professionnels fondés par Tarek avec plus de 20 ans d'expérience. Professionnels agréés et assurés livrant des résultats de qualité.",
        quickLinks: "Liens rapides",
        contactInfo: "Informations de contact",
        rights: "Tous droits réservés.",
        home: "Accueil",
        services: "Services",
        projects: "Projets",
        about: "À propos",
        contact: "Contact",
      },
      ar: {
        description: "خدمات بناء وتجديد احترافية أسسها طارق مع أكثر من 20 عامًا من الخبرة. محترفون مرخصون ومؤمنون يقدمون نتائج عالية الجودة.",
        quickLinks: "روابط سريعة",
        contactInfo: "معلومات الاتصال",
        rights: "جميع الحقوق محفوظة.",
        home: "الرئيسية",
        services: "خدمات",
        projects: "مشاريع",
        about: "معلومات عنا",
        contact: "اتصل",
      }
    };
    return translations[locale as keyof typeof translations] || translations.en;
  };

  const t = getTranslations(locale);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-amber-600 rounded-lg">
                <Hammer className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-amber-400">
                TrueNorth Construction
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              {t.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 hover:scale-110">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 hover:scale-110">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 hover:scale-110">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">{t.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <a href={`/${locale}`} className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center space-x-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 transition-all duration-200"></span>
                  <span>{t.home}</span>
                </a>
              </li>
              <li>
                <a href={`/${locale}/services`} className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center space-x-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 transition-all duration-200"></span>
                  <span>{t.services}</span>
                </a>
              </li>
              <li>
                <a href={`/${locale}/projects`} className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center space-x-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 transition-all duration-200"></span>
                  <span>{t.projects}</span>
                </a>
              </li>
              <li>
                <a href={`/${locale}/about`} className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center space-x-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 transition-all duration-200"></span>
                  <span>{t.about}</span>
                </a>
              </li>
              <li>
                <a href={`/${locale}/contact`} className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center space-x-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 transition-all duration-200"></span>
                  <span>{t.contact}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">{t.contactInfo}</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-amber-400" />
                <span>(647) 860-5500</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-amber-400" />
                <span>info@truenorthconstruction.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p>Downtown Montreal, Quebec, Canada</p>
                  <p className="text-sm text-gray-400">Nationwide Service Available</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-amber-400 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 5:00 PM</p>
                  <p>Sun: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TrueNorth Construction. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
