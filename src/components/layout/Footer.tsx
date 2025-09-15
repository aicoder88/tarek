import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('navigation');
  const contact = useTranslations('contact');

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-amber-400 mb-4">
              ContractorPro
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quick_links')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-amber-400 transition-colors">
                  {nav('home')}
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-amber-400 transition-colors">
                  {nav('services')}
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-amber-400 transition-colors">
                  {nav('projects')}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors">
                  {nav('contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact_info')}</h4>
            <div className="space-y-2 text-gray-300">
              <p>{contact('info.phone')}</p>
              <p>{contact('info.email')}</p>
              <p>{contact('info.address')}</p>
              <p>{contact('info.hours')}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ContractorPro. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}