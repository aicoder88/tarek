import fs from 'fs';
import path from 'path';

// Read the home.tsx file
const homeFilePath = '/Users/macpro/dev/tarek/src/components/home.tsx';
let content = fs.readFileSync(homeFilePath, 'utf8');

// Array of replacements to make
const replacements = [
  // Featured Projects section
  {
    from: `locale === "en"
                  ? "Featured Projects"
                  : locale === "fr"
                    ? "Projets en vedette"
                    : "المشاريع المميزة"`,
    to: `t('featured_projects.badge')`
  },
  {
    from: `locale === "en"
                  ? "See Our Transformations"
                  : locale === "fr"
                    ? "Découvrez nos transformations"
                    : "شاهد تحولاتنا"`,
    to: `t('featured_projects.title')`
  },
  {
    from: `locale === "en"
                  ? "Browse our portfolio of completed projects and see the dramatic before and after transformations."
                  : locale === "fr"
                    ? "Parcourez notre portfolio de projets terminés et découvrez les transformations spectaculaires avant et après."
                    : "تصفح محفظتنا من المشاريع المكتملة وشاهد التحولات المذهلة قبل وبعد."`,
    to: `t('featured_projects.description')`
  },
  {
    from: `locale === "en"
                ? "View All Projects"
                : locale === "fr"
                  ? "Voir tous les projets"
                  : "عرض جميع المشاريع"`,
    to: `t('featured_projects.cta')`
  },
  // Testimonials section
  {
    from: `locale === "en"
                  ? "Testimonials"
                  : locale === "fr"
                    ? "Témoignages"
                    : "شهادات"`,
    to: `t('testimonials.badge')`
  },
  {
    from: `locale === "en"
                  ? "What Our Clients Say"
                  : locale === "fr"
                    ? "Ce que disent nos clients"
                    : "ما يقوله عملاؤنا"`,
    to: `t('testimonials.title')`
  },
  // Contact section
  {
    from: `locale === "en"
                  ? "Contact Us"
                  : locale === "fr"
                    ? "Contactez-nous"
                    : "اتصل بنا"`,
    to: `t('contact_section.badge')`
  },
  {
    from: `locale === "en"
                  ? "Ready to Start Your Project?"
                  : locale === "fr"
                    ? "Prêt à démarrer votre projet ?"
                    : "جاهز لبدء مشروعك؟"`,
    to: `t('contact_section.title')`
  },
  {
    from: `locale === "en"
                  ? "Contact us today to request a free estimate. Let's bring your vision to life."
                  : locale === "fr"
                    ? "Contactez‑nous dès aujourd'hui pour demander une estimation gratuite. Concrétisons votre vision."
                    : "تواصل معنا اليوم لطلب تقدير مجاني. لنجعل رؤيتك واقعاً."`,
    to: `t('contact_section.description')`
  },
  {
    from: `locale === "en"
                      ? "Our Location"
                      : locale === "fr"
                        ? "Notre emplacement"
                        : "موقعنا"`,
    to: `t('contact_section.location_title')`
  },
  {
    from: `locale === "en"
                      ? "Contact Information"
                      : locale === "fr"
                        ? "Informations de contact"
                        : "معلومات الاتصال"`,
    to: `t('contact_section.contact_info_title')`
  },
  {
    from: `locale === "en"
                      ? "Service Hours"
                      : locale === "fr"
                        ? "Heures de service"
                        : "ساعات الخدمة"`,
    to: `t('contact_section.service_hours_title')`
  },
  {
    from: `locale === "en"
                      ? "Monday - Friday: 8:00 AM - 6:00 PM"
                      : locale === "fr"
                        ? "Lundi - Vendredi: 8h00 - 18h00"
                        : "الاثنين - الجمعة: 8:00 صباحًا - 6:00 مساءً"`,
    to: `t('contact_section.service_hours_text').split('\\n')[0]`
  },
  {
    from: `locale === "en"
                      ? "Saturday: 9:00 AM - 5:00 PM"
                      : locale === "fr"
                        ? "Samedi: 9h00 - 17h00"
                        : "السبت: 9:00 صباحًا - 5:00 مساءً"`,
    to: `t('contact_section.service_hours_text').split('\\n')[1]`
  },
  {
    from: `locale === "en"
                      ? "Sunday: 10:00 AM - 4:00 PM"
                      : locale === "fr"
                        ? "Dimanche: 10h00 - 16h00"
                        : "الأحد: 10:00 صباحًا - 4:00 مساءً"`,
    to: `t('contact_section.service_hours_text').split('\\n')[2]`
  },
  // CTA Section
  {
    from: `locale === "en"
                  ? "Ready to Transform Your Space?"
                  : locale === "fr"
                    ? "Prêt à transformer votre espace?"
                    : "هل أنت مستعد لتحويل مساحتك؟"`,
    to: `t('cta.title')`
  },
  {
    from: `locale === "en"
                  ? "Contact us today for a free consultation and quote. Let's bring your vision to life."
                  : locale === "fr"
                    ? "Contactez-nous aujourd'hui pour une consultation et un devis gratuits. Donnons vie à votre vision."
                    : "اتصل بنا اليوم للحصول على استشارة وعرض سعر مجاني. دعنا نحول رؤيتك إلى حقيقة."`,
    to: `t('cta.description')`
  },
  {
    from: `locale === "en"
                  ? "Get a Free Quote"
                  : locale === "fr"
                    ? "Obtenir un devis gratuit"
                    : "احصل على عرض سعر مجاني"`,
    to: `t('cta.primary_cta')`
  },
  {
    from: `locale === "en"
                  ? "Learn More"
                  : locale === "fr"
                    ? "En savoir plus"
                    : "معرفة المزيد"`,
    to: `t('cta.secondary_cta')`
  }
];

// Apply replacements
replacements.forEach(({ from, to }) => {
  if (content.includes(from)) {
    content = content.replace(from, to);
    console.log(`✓ Replaced: ${from.slice(0, 50)}...`);
  } else {
    console.log(`✗ Not found: ${from.slice(0, 50)}...`);
  }
});

// Replace the testimonials array
const testimonialArrayPattern = /{\s*[\s\S]*?name:\s*locale === "en"\s*\?\s*"Sarah Johnson"[\s\S]*?\],[\s]*}\s*\.map\(\(testimonial, i\)\s*=>/;
const testimonialReplacement = `{t.raw('testimonials.items').map((testimonial: {name: string, role: string, content: string}, i: number) =>`;

if (testimonialArrayPattern.test(content)) {
  content = content.replace(testimonialArrayPattern, testimonialReplacement);
  console.log(`✓ Replaced testimonials array`);
} else {
  console.log(`✗ Testimonials array pattern not found`);
}

// Write the modified content back to the file
fs.writeFileSync(homeFilePath, content, 'utf8');
console.log(`\n✅ Successfully updated ${homeFilePath}`);