import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  locale?: string;
}

export function FAQ({ locale = 'en' }: FAQProps) {
  const isRTL = locale === 'ar';

  const getFAQData = (locale: string): FAQItem[] => {
    const faqData = {
      en: [
        {
          question: "How long does a typical renovation project take?",
          answer: "Project timelines vary depending on the scope and complexity. Kitchen renovations typically take 2-4 weeks, bathroom renovations 1-2 weeks, and full home renovations can take 2-6 months. We provide detailed timelines during our initial consultation."
        },
        {
          question: "Do you provide free estimates?",
          answer: "Yes, we provide completely free, no-obligation estimates for all our services. Our team will visit your property, assess your needs, and provide a detailed written estimate within 24-48 hours."
        },
        {
          question: "Are you licensed and insured?",
          answer: "Absolutely. We are fully licensed contractors and carry comprehensive liability insurance and workers' compensation coverage. All our work comes with warranties, and we can provide proof of insurance upon request."
        },
        {
          question: "What areas do you serve?",
          answer: "We primarily serve the Greater Toronto Area (GTA) including Toronto, Mississauga, Brampton, Oakville, Burlington, and surrounding areas. Contact us to confirm service availability in your specific location."
        },
        {
          question: "Do you handle permits and inspections?",
          answer: "Yes, we handle all necessary permits and coordinate inspections as required by local building codes. This is included in our comprehensive project management service to ensure your project meets all regulatory requirements."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept various payment methods including cash, check, credit cards, and bank transfers. Payment schedules are typically structured with a small deposit to start, progress payments during construction, and final payment upon completion."
        },
        {
          question: "Do you offer warranties on your work?",
          answer: "Yes, we stand behind our work with comprehensive warranties. Most of our work comes with a 1-year warranty on workmanship, and materials carry manufacturer warranties. We also provide ongoing support and maintenance services."
        },
        {
          question: "Can you work within my budget?",
          answer: "We work with clients of all budget ranges and can often suggest alternatives or phased approaches to help you achieve your goals within your budget. During our consultation, we'll discuss your priorities and find cost-effective solutions."
        }
      ],
      fr: [
        {
          question: "Combien de temps prend un projet de rénovation typique?",
          answer: "Les délais de projet varient selon l'ampleur et la complexité. Les rénovations de cuisine prennent généralement 2-4 semaines, les rénovations de salle de bain 1-2 semaines, et les rénovations complètes de maison peuvent prendre 2-6 mois. Nous fournissons des délais détaillés lors de notre consultation initiale."
        },
        {
          question: "Fournissez-vous des estimations gratuites?",
          answer: "Oui, nous fournissons des estimations complètement gratuites et sans obligation pour tous nos services. Notre équipe visitera votre propriété, évaluera vos besoins et fournira une estimation écrite détaillée dans les 24-48 heures."
        },
        {
          question: "Êtes-vous agréés et assurés?",
          answer: "Absolument. Nous sommes des entrepreneurs entièrement agréés et portons une assurance responsabilité complète et une couverture d'indemnisation des travailleurs. Tous nos travaux sont garantis, et nous pouvons fournir une preuve d'assurance sur demande."
        },
        {
          question: "Quelles zones desservez-vous?",
          answer: "Nous desservons principalement la région du Grand Toronto (RGT) incluant Toronto, Mississauga, Brampton, Oakville, Burlington et les zones environnantes. Contactez-nous pour confirmer la disponibilité du service dans votre emplacement spécifique."
        },
        {
          question: "Gérez-vous les permis et inspections?",
          answer: "Oui, nous gérons tous les permis nécessaires et coordonnons les inspections tel que requis par les codes de construction locaux. Ceci est inclus dans notre service de gestion de projet complet pour assurer que votre projet respecte toutes les exigences réglementaires."
        },
        {
          question: "Quels modes de paiement acceptez-vous?",
          answer: "Nous acceptons divers modes de paiement incluant espèces, chèque, cartes de crédit et virements bancaires. Les échéanciers de paiement sont généralement structurés avec un petit dépôt pour commencer, des paiements de progression pendant la construction, et le paiement final à l'achèvement."
        },
        {
          question: "Offrez-vous des garanties sur votre travail?",
          answer: "Oui, nous soutenons notre travail avec des garanties complètes. La plupart de nos travaux viennent avec une garantie de 1 an sur la main-d'œuvre, et les matériaux portent des garanties du fabricant. Nous fournissons également des services de support et maintenance continus."
        },
        {
          question: "Pouvez-vous travailler dans mon budget?",
          answer: "Nous travaillons avec des clients de toutes gammes de budget et pouvons souvent suggérer des alternatives ou des approches par phases pour vous aider à atteindre vos objectifs dans votre budget. Lors de notre consultation, nous discuterons de vos priorités et trouverons des solutions rentables."
        }
      ],
      ar: [
        {
          question: "كم من الوقت يستغرق مشروع التجديد النموذجي؟",
          answer: "تختلف الجداول الزمنية للمشاريع حسب النطاق والتعقيد. تستغرق تجديدات المطبخ عادة 2-4 أسابيع، وتجديدات الحمام 1-2 أسبوع، وتجديدات المنزل الكاملة يمكن أن تستغرق 2-6 أشهر. نقدم جداول زمنية مفصلة خلال استشارتنا الأولية."
        },
        {
          question: "هل تقدمون تقديرات مجانية؟",
          answer: "نعم، نقدم تقديرات مجانية تماماً وبدون التزام لجميع خدماتنا. سيزور فريقنا ممتلكاتك، ويقيم احتياجاتك، ويقدم تقديراً مكتوباً مفصلاً خلال 24-48 ساعة."
        },
        {
          question: "هل أنتم مرخصون ومؤمنون؟",
          answer: "بالطبع. نحن مقاولون مرخصون بالكامل ونحمل تأميناً شاملاً للمسؤولية وتغطية تعويض العمال. جميع أعمالنا تأتي مع ضمانات، ويمكننا تقديم إثبات التأمين عند الطلب."
        },
        {
          question: "ما هي المناطق التي تخدمونها؟",
          answer: "نخدم بشكل أساسي منطقة تورونتو الكبرى (GTA) بما في ذلك تورونتو وميسيساغا وبرامبتون وأوكفيل وبرلنغتون والمناطق المحيطة. اتصل بنا لتأكيد توفر الخدمة في موقعك المحدد."
        },
        {
          question: "هل تتعاملون مع التصاريح والتفتيش؟",
          answer: "نعم، نتعامل مع جميع التصاريح الضرورية وننسق عمليات التفتيش كما هو مطلوب بموجب قوانين البناء المحلية. هذا مشمول في خدمة إدارة المشروع الشاملة لضمان أن مشروعك يلبي جميع المتطلبات التنظيمية."
        },
        {
          question: "ما هي طرق الدفع التي تقبلونها؟",
          answer: "نقبل طرق دفع متنوعة بما في ذلك النقد والشيكات وبطاقات الائتمان والتحويلات المصرفية. عادة ما تُهيكل جداول الدفع بإيداع صغير للبدء، ودفعات تقدم أثناء البناء، والدفع النهائي عند الانتهاء."
        },
        {
          question: "هل تقدمون ضمانات على عملكم؟",
          answer: "نعم، ندعم عملنا بضمانات شاملة. معظم أعمالنا تأتي بضمان سنة واحدة على الصنعة، والمواد تحمل ضمانات الشركة المصنعة. نقدم أيضاً خدمات دعم وصيانة مستمرة."
        },
        {
          question: "هل يمكنكم العمل ضمن ميزانيتي؟",
          answer: "نعمل مع عملاء من جميع نطاقات الميزانية ويمكننا غالباً اقتراح بدائل أو نُهج مرحلية لمساعدتك على تحقيق أهدافك ضمن ميزانيتك. خلال استشارتنا، سنناقش أولوياتك ونجد حلولاً فعالة من حيث التكلفة."
        }
      ]
    };

    return faqData[locale as keyof typeof faqData] || faqData.en;
  };

  const getTranslations = (locale: string) => {
    const translations = {
      en: {
        badge: 'FAQ',
        title: 'Frequently Asked Questions',
        subtitle: 'Find answers to common questions about our construction and renovation services.'
      },
      fr: {
        badge: 'FAQ',
        title: 'Questions Fréquemment Posées',
        subtitle: 'Trouvez des réponses aux questions courantes sur nos services de construction et de rénovation.'
      },
      ar: {
        badge: 'الأسئلة الشائعة',
        title: 'الأسئلة المتكررة',
        subtitle: 'اعثر على إجابات للأسئلة الشائعة حول خدمات البناء والتجديد لدينا.'
      }
    };
    return translations[locale as keyof typeof translations] || translations.en;
  };

  const faqItems = getFAQData(locale);
  const t = getTranslations(locale);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              {t.badge}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              {t.title}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              {t.subtitle}
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl mt-10">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-background"
              >
                <AccordionTrigger
                  className={`text-left hover:no-underline py-6 ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  <span className="font-medium text-base">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className={`pb-6 text-muted-foreground leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}