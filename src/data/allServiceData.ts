import { ServicePageData } from '@/components/services/ServicePageTemplate';

export const getAllServiceData = (serviceType: string, locale: string = 'en'): ServicePageData => {
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
            description: 'Durable and stylish tiles for floors, kitchens, and bathrooms. Perfect for easy maintenance and a modern look.'
          },
          {
            title: 'Hardwood Flooring',
            description: 'Classic, elegant wood floors that add warmth and long-lasting beauty to any home.'
          },
          {
            title: 'Laminate & Vinyl Flooring',
            description: 'Affordable, scratch-resistant flooring options that mimic wood or stone finishes.'
          },
          {
            title: 'Epoxy Coatings',
            description: 'High-performance, glossy floors ideal for garages, basements, and commercial spaces.'
          },
          {
            title: 'Carpet Installation',
            description: 'Soft, comfortable carpets for bedrooms, living areas, and cozy spaces.'
          }
        ],
        ctaTitle: 'Ready for New Flooring?',
        ctaSubtitle: 'Contact us today for a free flooring consultation and quote.',
        primaryCTA: 'Book Your Flooring Estimate Today',
        secondaryCTA: 'Call Now: (647) 860-5500'
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
            description: 'Custom-built cabinets and premium countertops to transform your kitchen\'s look and function.'
          },
          {
            title: 'Backsplashes & Tiling',
            description: 'Add style and protection with decorative, easy-to-clean backsplash options.'
          },
          {
            title: 'Flooring & Lighting Upgrades',
            description: 'Modern lighting and flooring to brighten and refresh your cooking space.'
          },
          {
            title: 'Plumbing & Appliance Installation',
            description: 'Seamless installation of sinks, faucets, and modern kitchen appliances.'
          }
        ],
        ctaTitle: 'Ready for Your Dream Kitchen?',
        ctaSubtitle: 'Contact us today for a free kitchen renovation consultation.',
        primaryCTA: 'Get a Kitchen Renovation Quote',
        secondaryCTA: 'Call Now: (647) 860-5500'
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
            description: 'Elegant showers and tubs designed for comfort and luxury in your bathroom.'
          },
          {
            title: 'Vanity & Countertops',
            description: 'Functional, stylish vanities and counters for a polished and organized bathroom.'
          },
          {
            title: 'Tiling & Waterproofing',
            description: 'Expert waterproofing and tiling for long-lasting, mold-free bathroom surfaces.'
          },
          {
            title: 'Plumbing & Fixtures',
            description: 'Professional installation of sinks, toilets, and high-end bathroom fixtures.'
          }
        ],
        ctaTitle: 'Ready for Your Spa-Like Bathroom?',
        ctaSubtitle: 'Contact us today for a free bathroom renovation consultation.',
        primaryCTA: 'Schedule a Bathroom Makeover Estimate',
        secondaryCTA: 'Call Now: (647) 860-5500'
      }
    },
    'basement-finishing': {
      en: {
        title: 'Basement Finishing Experts',
        subtitle: 'Turn your basement into a functional, beautiful living space with our expert finishing services.',
        intro: 'Turn your basement into a functional, beautiful living space with our expert finishing services. We transform unfinished basements into comfortable, inviting areas that add value and space to your home.',
        badge: 'Basement Specialists',
        subServices: [
          {
            title: 'Framing & Drywall',
            description: 'Professional framing and drywall services to turn your basement into a finished living area.',
          },
          {
            title: 'Flooring & Lighting',
            description: 'Add bright lighting and durable flooring to create a cozy, inviting basement space.',
          },
          {
            title: 'Bathroom/Kitchenette Additions',
            description: 'Full-service installation for functional basement bathrooms or mini kitchens.',
          },
          {
            title: 'Insulation & Waterproofing',
            description: 'Proper insulation and waterproofing for a comfortable, moisture-free basement.',
          }
        ],
        ctaTitle: 'Ready to Transform Your Basement?',
        ctaSubtitle: 'Contact us today for a free basement finishing consultation.',
        primaryCTA: 'Transform Your Basement Today',
        secondaryCTA: 'Call Now: (647) 860-5500'
      }
    },
    'roofing-siding': {
      en: {
        title: 'Roofing & Siding Professionals',
        subtitle: 'Protect your home with durable roofing and siding solutions built to last.',
        intro: 'Protect your home with durable roofing and siding solutions built to last. Our experienced team provides comprehensive exterior services that enhance both protection and curb appeal.',
        badge: 'Exterior Specialists',
        subServices: [
          {
            title: 'Roof Installation & Repairs',
            description: 'Quality roofing solutions to protect your home from leaks and weather damage.',
          },
          {
            title: 'Asphalt Shingles, Metal Roofs',
            description: 'Choose from classic shingles or durable metal roofing options for long-term value.',
          },
          {
            title: 'Siding Installation',
            description: 'Enhance curb appeal and energy efficiency with vinyl, wood, or fiber cement siding.',
          },
          {
            title: 'Gutter Installation',
            description: 'Effective gutter systems to prevent water damage and foundation issues.',
          }
        ],
        ctaTitle: 'Ready to Protect Your Home?',
        ctaSubtitle: 'Contact us today for a free roofing and siding inspection.',
        primaryCTA: 'Request a Roofing Inspection',
        secondaryCTA: 'Call Now: (647) 860-5500'
      }
    },
    'painting-drywall': {
      en: {
        title: 'Painting & Drywall Specialists',
        subtitle: 'Give your home a fresh new look with our professional painting and drywall services.',
        intro: 'Give your home a fresh new look with our professional painting and drywall services. We provide expert interior and exterior painting solutions that transform and protect your space.',
        badge: 'Painting Experts',
        subServices: [
          {
            title: 'Interior Painting',
            description: 'Fresh, vibrant paint colors to give your home\'s interior a new and inviting look.',
          },
          {
            title: 'Exterior Painting',
            description: 'Weather-resistant exterior painting to protect and beautify your home\'s facade.',
          },
          {
            title: 'Drywall Installation & Repairs',
            description: 'Smooth, flawless drywall services for new builds and renovations.',
          },
          {
            title: 'Textured & Decorative Finishes',
            description: 'Unique wall textures and finishes for a custom, high-end appearance.',
          }
        ],
        ctaTitle: 'Ready for a Fresh New Look?',
        ctaSubtitle: 'Contact us today for a free painting and drywall consultation.',
        primaryCTA: 'Book a Painting Estimate',
        secondaryCTA: 'Call Now: (647) 860-5500'
      }
    },
    'outdoor-landscaping': {
      en: {
        title: 'Outdoor & Landscaping Services',
        subtitle: 'Enhance your outdoor spaces with custom landscaping and construction services.',
        intro: 'Enhance your outdoor spaces with custom landscaping and construction services. We create beautiful, functional outdoor environments that extend your living space and add value to your property.',
        badge: 'Outdoor Specialists',
        subServices: [
          {
            title: 'Deck & Patio Construction',
            description: 'Custom decks and patios to create the perfect outdoor entertainment space.',
          },
          {
            title: 'Fences & Pergolas',
            description: 'Stylish fences and pergolas for privacy, shade, and an enhanced backyard look.',
          },
          {
            title: 'Concrete Driveways & Walkways',
            description: 'Durable, low-maintenance concrete surfaces for driveways and paths.',
          },
          {
            title: 'Garden & Lighting Installations',
            description: 'Outdoor lighting and landscaping features to brighten and beautify your yard.',
          }
        ],
        ctaTitle: 'Ready to Design Your Outdoor Oasis?',
        ctaSubtitle: 'Contact us today for a free outdoor design consultation.',
        primaryCTA: 'Design Your Outdoor Oasis',
        secondaryCTA: 'Call Now: (647) 860-5500'
      }
    },
    'general-contracting': {
      en: {
        title: 'General Contracting & Additions',
        subtitle: 'Comprehensive contracting services for all your construction and remodeling needs.',
        intro: 'Comprehensive contracting services for all your construction and remodeling needs. We manage every aspect of your project from planning to completion, ensuring quality results on time and within budget.',
        badge: 'General Contractors',
        subServices: [
          {
            title: 'Home Extensions',
            description: 'Expand your living space with expertly designed and constructed home additions.',
          },
          {
            title: 'Garage Builds',
            description: 'Functional and durable garages built to suit your storage and parking needs.',
          },
          {
            title: 'Structural Modifications',
            description: 'Safe, professional modifications to improve layout and functionality.',
          },
          {
            title: 'Project Management',
            description: 'Complete oversight of your construction project from start to finish.',
          }
        ],
        ctaTitle: 'Ready for Your Next Project?',
        ctaSubtitle: 'Contact us today for a free general contracting consultation.',
        primaryCTA: 'Consult with Our Experts',
        secondaryCTA: 'Call Now: (647) 860-5500'
      }
    },
    'prefabricated-structures': {
      en: {
        title: 'Prefabricated Structures',
        subtitle: 'Modern, energy-efficient, and customizable prefabricated building solutions for residential, commercial, and recreational use.',
        intro: 'Modern, energy-efficient, and customizable prefabricated building solutions for residential, commercial, and recreational use. We deliver high-quality prefab structures that combine speed, efficiency, and excellent design.',
        badge: 'Prefab Specialists',
        subServices: [
          {
            title: 'Modular Homes',
            description: 'Fully customizable modular homes built quickly with quality materials and precision engineering.',
          },
          {
            title: 'Prefab Offices & Commercial Units',
            description: 'Cost-effective prefab office spaces and retail units tailored to your business needs.',
          },
          {
            title: 'Recreational Cabins & Chalets',
            description: 'Durable and stylish prefab cabins perfect for vacation properties or backyard retreats.',
          },
          {
            title: 'Custom Design & Fabrication',
            description: 'Personalized prefab structures designed to match your style, size, and functional requirements.',
          }
        ],
        ctaTitle: 'Ready for Prefab Innovation?',
        ctaSubtitle: 'Contact us today for a free prefabricated structure consultation.',
        primaryCTA: 'Request a Prefabricated Structure Consultation',
        secondaryCTA: 'Call Now: (647) 860-5500'
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