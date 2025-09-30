import React from 'react';
import { ServicePageData } from '@/components/services/ServicePageTemplate';
import {
  Hammer,
  Wrench,
  Paintbrush,
  Zap,
  Droplets,
  Home,
  Building,
  TreePine,
  HardHat,
  Warehouse
} from 'lucide-react';

export const getServiceData = (serviceType: string, locale: string = 'en'): ServicePageData => {
  const serviceDataMap: Record<string, Record<string, ServicePageData>> = {
    flooring: {
      en: {
        title: 'Professional Flooring Services',
        subtitle: 'Transform your floors with durable, stylish, and professional solutions tailored to your home or business.',
        intro: 'Transform your floors with durable, stylish, and professional solutions tailored to your home or business. Our expert team delivers quality flooring installations that enhance both the beauty and functionality of your space.',
        badge: 'Flooring Experts',
        subServices: [
          {
            title: 'Tiling',
            description: 'Durable and stylish tiles for floors, kitchens, and bathrooms. Perfect for easy maintenance and a modern look.',
            icon: React.createElement(Hammer, { className: "h-6 w-6" })
          },
          {
            title: 'Hardwood Flooring',
            description: 'Classic, elegant wood floors that add warmth and long-lasting beauty to any home.',
            icon: React.createElement(TreePine, { className: "h-6 w-6" })
          },
          {
            title: 'Laminate & Vinyl Flooring',
            description: 'Affordable, scratch-resistant flooring options that mimic wood or stone finishes.',
            icon: React.createElement(Building, { className: "h-6 w-6" })
          },
          {
            title: 'Epoxy Coatings',
            description: 'High-performance, glossy floors ideal for garages, basements, and commercial spaces.',
            icon: React.createElement(Paintbrush, { className: "h-6 w-6" })
          },
          {
            title: 'Carpet Installation',
            description: 'Soft, comfortable carpets for bedrooms, living areas, and cozy spaces.',
            icon: React.createElement(Home, { className: "h-6 w-6" })
          }
        ],
        ctaTitle: 'Ready for New Flooring?',
        ctaSubtitle: 'Contact us today for a free flooring consultation and quote.',
        primaryCTA: 'Book Your Flooring Estimate Today',
        secondaryCTA: 'Call Now: (647) 860-5500'
      },
      fr: {
        title: 'Services de Revêtement de Sol Professionnels',
        subtitle: 'Transformez vos sols avec des solutions durables, élégantes et professionnelles adaptées à votre maison ou entreprise.',
        intro: 'Transformez vos sols avec des solutions durables, élégantes et professionnelles adaptées à votre maison ou entreprise. Notre équipe d\'experts offre des installations de revêtements de sol de qualité qui améliorent à la fois la beauté et la fonctionnalité de votre espace.',
        badge: 'Experts en Revêtement de Sol',
        subServices: [
          {
            title: 'Carrelage',
            description: 'Carreaux durables et élégants pour sols, cuisines et salles de bains. Parfait pour un entretien facile et un look moderne.',
            icon: React.createElement(Hammer, { className: "h-6 w-6" })
          },
          {
            title: 'Parquet en Bois Dur',
            description: 'Sols en bois classiques et élégants qui ajoutent chaleur et beauté durable à toute maison.',
            icon: React.createElement(TreePine, { className: "h-6 w-6" })
          },
          {
            title: 'Revêtement Stratifié et Vinyle',
            description: 'Options de revêtement abordables et résistantes aux rayures qui imitent les finitions bois ou pierre.',
            icon: React.createElement(Building, { className: "h-6 w-6" })
          },
          {
            title: 'Revêtements Époxy',
            description: 'Sols haute performance et brillants idéaux pour garages, sous-sols et espaces commerciaux.',
            icon: React.createElement(Paintbrush, { className: "h-6 w-6" })
          },
          {
            title: 'Installation de Moquette',
            description: 'Moquettes douces et confortables pour chambres, espaces de vie et zones cosy.',
            icon: React.createElement(Home, { className: "h-6 w-6" })
          }
        ],
        ctaTitle: 'Prêt pour un Nouveau Revêtement de Sol?',
        ctaSubtitle: 'Contactez-nous aujourd\'hui pour une consultation et un devis gratuits.',
        primaryCTA: 'Réservez Votre Estimation de Revêtement Aujourd\'hui',
        secondaryCTA: 'Appelez Maintenant: (647) 860-5500'
      },
      ar: {
        title: 'خدمات الأرضيات المهنية',
        subtitle: 'حوّل أرضياتك بحلول متينة وأنيقة ومهنية مصممة خصيصاً لمنزلك أو عملك.',
        intro: 'حوّل أرضياتك بحلول متينة وأنيقة ومهنية مصممة خصيصاً لمنزلك أو عملك. يقدم فريقنا الخبير تركيبات أرضيات عالية الجودة تعزز من جمال ووظائف مساحتك.',
        badge: 'خبراء الأرضيات',
        subServices: [
          {
            title: 'البلاط',
            description: 'بلاط متين وأنيق للأرضيات والمطابخ والحمامات. مثالي للصيانة السهلة والمظهر العصري.',
            icon: React.createElement(Hammer, { className: "h-6 w-6" })
          },
          {
            title: 'الأرضيات الخشبية الصلبة',
            description: 'أرضيات خشبية كلاسيكية وأنيقة تضيف الدفء والجمال الدائم لأي منزل.',
            icon: React.createElement(TreePine, { className: "h-6 w-6" })
          },
          {
            title: 'الأرضيات المصفحة والفينيل',
            description: 'خيارات أرضيات ميسورة التكلفة ومقاومة للخدش تحاكي تشطيبات الخشب أو الحجر.',
            icon: React.createElement(Building, { className: "h-6 w-6" })
          },
          {
            title: 'طلاءات الإيبوكسي',
            description: 'أرضيات عالية الأداء ولامعة مثالية للمرائب والأقبية والمساحات التجارية.',
            icon: React.createElement(Paintbrush, { className: "h-6 w-6" })
          },
          {
            title: 'تركيب السجاد',
            description: 'سجاد ناعم ومريح لغرف النوم ومناطق المعيشة والمساحات المريحة.',
            icon: React.createElement(Home, { className: "h-6 w-6" })
          }
        ],
        ctaTitle: 'جاهز لأرضيات جديدة؟',
        ctaSubtitle: 'تواصل معنا اليوم للحصول على استشارة وعرض سعر مجاني للأرضيات.',
        primaryCTA: 'احجز تقدير الأرضيات اليوم',
        secondaryCTA: 'اتصل الآن: (647) 860-5500'
      }
    },
    'kitchen-remodeling': {
      en: {
        title: 'Kitchen Remodeling Excellence',
        subtitle: 'Upgrade your kitchen with modern designs, quality materials, and professional installation.',
        intro: 'Upgrade your kitchen with modern designs, quality materials, and professional installation. We transform outdated kitchens into beautiful, functional spaces that become the heart of your home.',
        badge: 'Kitchen Specialists',
        subServices: [
          {
            title: 'Cabinetry & Countertops',
            description: 'Custom-built cabinets and premium countertops to transform your kitchen\'s look and function.',
            icon: React.createElement(Building, { className: "h-6 w-6" })
          },
          {
            title: 'Backsplashes & Tiling',
            description: 'Add style and protection with decorative, easy-to-clean backsplash options.',
            icon: React.createElement(Hammer, { className: "h-6 w-6" })
          },
          {
            title: 'Flooring & Lighting Upgrades',
            description: 'Modern lighting and flooring to brighten and refresh your cooking space.',
            icon: React.createElement(Zap, { className: "h-6 w-6" })
          },
          {
            title: 'Plumbing & Appliance Installation',
            description: 'Seamless installation of sinks, faucets, and modern kitchen appliances.',
            icon: React.createElement(Wrench, { className: "h-6 w-6" })
          }
        ],
        ctaTitle: 'Ready for Your Dream Kitchen?',
        ctaSubtitle: 'Contact us today for a free kitchen renovation consultation.',
        primaryCTA: 'Get a Kitchen Renovation Quote',
        secondaryCTA: 'Call Now: (647) 860-5500'
      },
      fr: {
        title: 'Excellence en Rénovation de Cuisine',
        subtitle: 'Améliorez votre cuisine avec des designs modernes, des matériaux de qualité et une installation professionnelle.',
        intro: 'Améliorez votre cuisine avec des designs modernes, des matériaux de qualité et une installation professionnelle. Nous transformons les cuisines désuètes en espaces beaux et fonctionnels qui deviennent le cœur de votre maison.',
        badge: 'Spécialistes de Cuisine',
        subServices: [
          {
            title: 'Armoires et Comptoirs',
            description: 'Armoires sur mesure et comptoirs haut de gamme pour transformer l\'apparence et la fonction de votre cuisine.',
            icon: React.createElement(Building, { className: "h-6 w-6" })
          },
          {
            title: 'Dosserets et Carrelage',
            description: 'Ajoutez du style et de la protection avec des options de dosseret décoratives et faciles à nettoyer.',
            icon: React.createElement(Hammer, { className: "h-6 w-6" })
          },
          {
            title: 'Améliorations d\'Éclairage et de Sol',
            description: 'Éclairage moderne et revêtement de sol pour illuminer et rafraîchir votre espace de cuisson.',
            icon: React.createElement(Zap, { className: "h-6 w-6" })
          },
          {
            title: 'Installation de Plomberie et d\'Appareils',
            description: 'Installation transparente d\'éviers, robinets et appareils de cuisine modernes.',
            icon: React.createElement(Wrench, { className: "h-6 w-6" })
          }
        ],
        ctaTitle: 'Prêt pour Votre Cuisine de Rêve?',
        ctaSubtitle: 'Contactez-nous aujourd\'hui pour une consultation gratuite de rénovation de cuisine.',
        primaryCTA: 'Obtenez un Devis de Rénovation de Cuisine',
        secondaryCTA: 'Appelez Maintenant: (647) 860-5500'
      },
      ar: {
        title: 'تميز في تجديد المطابخ',
        subtitle: 'طوّر مطبخك بتصاميم عصرية ومواد عالية الجودة وتركيب مهني.',
        intro: 'طوّر مطبخك بتصاميم عصرية ومواد عالية الجودة وتركيب مهني. نحن نحوّل المطابخ القديمة إلى مساحات جميلة وعملية تصبح قلب منزلك.',
        badge: 'متخصصو المطابخ',
        subServices: [
          {
            title: 'الخزائن وأسطح العمل',
            description: 'خزائن مصنوعة حسب الطلب وأسطح عمل ممتازة لتحويل مظهر ووظيفة مطبخك.',
            icon: React.createElement(Building, { className: "h-6 w-6" })
          },
          {
            title: 'الجدران الخلفية والبلاط',
            description: 'أضف الأناقة والحماية مع خيارات الجدران الخلفية الزخرفية وسهلة التنظيف.',
            icon: React.createElement(Hammer, { className: "h-6 w-6" })
          },
          {
            title: 'ترقيات الأرضيات والإضاءة',
            description: 'إضاءة عصرية وأرضيات لإنارة وتجديد مساحة الطبخ.',
            icon: React.createElement(Zap, { className: "h-6 w-6" })
          },
          {
            title: 'تركيب السباكة والأجهزة',
            description: 'تركيب سلس للأحواض والصنابير وأجهزة المطبخ العصرية.',
            icon: React.createElement(Wrench, { className: "h-6 w-6" })
          }
        ],
        ctaTitle: 'جاهز لمطبخ أحلامك؟',
        ctaSubtitle: 'تواصل معنا اليوم للحصول على استشارة مجانية لتجديد المطبخ.',
        primaryCTA: 'احصل على عرض سعر تجديد المطبخ',
        secondaryCTA: 'اتصل الآن: (647) 860-5500'
      }
    },
    'bathroom-renovation': {
      en: {
        title: 'Bathroom Renovation Specialists',
        subtitle: 'Create a spa-like experience with elegant, functional bathroom renovations.',
        intro: 'Create a spa-like experience with elegant, functional bathroom renovations. Our expert team transforms ordinary bathrooms into luxurious retreats that combine style, comfort, and functionality.',
        badge: 'Bathroom Experts',
        subServices: [
          {
            title: 'Shower & Tub Installation',
            description: 'Elegant showers and tubs designed for comfort and luxury in your bathroom.',
            icon: React.createElement(Droplets, { className: "h-6 w-6" })
          },
          {
            title: 'Vanity & Countertops',
            description: 'Functional, stylish vanities and counters for a polished and organized bathroom.',
            icon: React.createElement(Building, { className: "h-6 w-6" })
          },
          {
            title: 'Tiling & Waterproofing',
            description: 'Expert waterproofing and tiling for long-lasting, mold-free bathroom surfaces.',
            icon: React.createElement(Hammer, { className: "h-6 w-6" })
          },
          {
            title: 'Plumbing & Fixtures',
            description: 'Professional installation of sinks, toilets, and high-end bathroom fixtures.',
            icon: React.createElement(Wrench, { className: "h-6 w-6" })
          }
        ],
        ctaTitle: 'Ready for Your Spa-Like Bathroom?',
        ctaSubtitle: 'Contact us today for a free bathroom renovation consultation.',
        primaryCTA: 'Schedule a Bathroom Makeover Estimate',
        secondaryCTA: 'Call Now: (647) 860-5500'
      },
      fr: {
        title: 'Spécialistes en Rénovation de Salle de Bain',
        subtitle: 'Créez une expérience de spa avec des rénovations de salle de bain élégantes et fonctionnelles.',
        intro: 'Créez une expérience de spa avec des rénovations de salle de bain élégantes et fonctionnelles. Notre équipe d\'experts transforme les salles de bain ordinaires en retraites luxueuses qui combinent style, confort et fonctionnalité.',
        badge: 'Experts en Salle de Bain',
        subServices: [
          {
            title: 'Installation de Douche et Baignoire',
            description: 'Douches et baignoires élégantes conçues pour le confort et le luxe dans votre salle de bain.',
            icon: React.createElement(Droplets, { className: "h-6 w-6" })
          },
          {
            title: 'Vanité et Comptoirs',
            description: 'Vanités fonctionnelles et élégantes et comptoirs pour une salle de bain soignée et organisée.',
            icon: React.createElement(Building, { className: "h-6 w-6" })
          },
          {
            title: 'Carrelage et Étanchéité',
            description: 'Étanchéité et carrelage experts pour des surfaces de salle de bain durables et sans moisissure.',
            icon: React.createElement(Hammer, { className: "h-6 w-6" })
          },
          {
            title: 'Plomberie et Accessoires',
            description: 'Installation professionnelle d\'éviers, toilettes et accessoires de salle de bain haut de gamme.',
            icon: React.createElement(Wrench, { className: "h-6 w-6" })
          }
        ],
        ctaTitle: 'Prêt pour Votre Salle de Bain Type Spa?',
        ctaSubtitle: 'Contactez-nous aujourd\'hui pour une consultation gratuite de rénovation de salle de bain.',
        primaryCTA: 'Planifiez une Estimation de Relooking de Salle de Bain',
        secondaryCTA: 'Appelez Maintenant: (647) 860-5500'
      },
      ar: {
        title: 'متخصصو تجديد الحمامات',
        subtitle: 'اصنع تجربة تشبه السبا مع تجديدات حمامات أنيقة وعملية.',
        intro: 'اصنع تجربة تشبه السبا مع تجديدات حمامات أنيقة وعملية. يحوّل فريقنا الخبير الحمامات العادية إلى ملاذات فاخرة تجمع بين الأناقة والراحة والوظائف.',
        badge: 'خبراء الحمامات',
        subServices: [
          {
            title: 'تركيب الدش وحوض الاستحمام',
            description: 'دشات وأحواض استحمام أنيقة مصممة للراحة والفخامة في حمامك.',
            icon: React.createElement(Droplets, { className: "h-6 w-6" })
          },
          {
            title: 'خزانة الحمام وأسطح العمل',
            description: 'خزائن حمام عملية وأنيقة وأسطح عمل لحمام مصقول ومنظم.',
            icon: React.createElement(Building, { className: "h-6 w-6" })
          },
          {
            title: 'البلاط والعزل المائي',
            description: 'عزل مائي وبلاط خبير لأسطح حمام دائمة وخالية من العفن.',
            icon: React.createElement(Hammer, { className: "h-6 w-6" })
          },
          {
            title: 'السباكة والتركيبات',
            description: 'تركيب مهني للأحواض والمراحيض وتركيبات الحمام عالية الجودة.',
            icon: React.createElement(Wrench, { className: "h-6 w-6" })
          }
        ],
        ctaTitle: 'جاهز لحمامك الذي يشبه السبا؟',
        ctaSubtitle: 'تواصل معنا اليوم للحصول على استشارة مجانية لتجديد الحمام.',
        primaryCTA: 'جدولة تقدير تجديد الحمام',
        secondaryCTA: 'اتصل الآن: (647) 860-5500'
      }
    }
  };

  return serviceDataMap[serviceType]?.[locale] || serviceDataMap[serviceType]?.['en'] || {
    title: 'Service Not Found',
    subtitle: 'The requested service could not be found.',
    intro: '',
    subServices: [],
    ctaTitle: 'Contact Us',
    primaryCTA: 'Get Quote',
    badge: 'Service'
  };
};