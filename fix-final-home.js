import fs from 'fs';

const homeFilePath = '/Users/macpro/dev/tarek/src/components/home.tsx';
let content = fs.readFileSync(homeFilePath, 'utf8');

// Replace the contact title
content = content.replace(
  `{locale === "en"
                  ? "Ready to Start Your Project?"
                  : locale === "fr"
                    ? "Prêt à démarrer votre projet ?"
                    : "جاهز لبدء مشروعك؟"}`,
  `{t('contact_section.title')}`
);

// Replace the contact description
content = content.replace(
  `{locale === "en"
                  ? "Contact us today to request a free estimate. Let's bring your vision to life."
                  : locale === "fr"
                    ? "Contactez‑nous dès aujourd'hui pour demander une estimation gratuite. Concrétisons votre vision."
                    : "تواصل معنا اليوم لطلب تقدير مجاني. لنجعل رؤيتك واقعاً."}`,
  `{t('contact_section.description')}`
);

fs.writeFileSync(homeFilePath, content, 'utf8');
console.log('✅ Fixed final home.tsx translations');