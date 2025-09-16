import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Star } from "lucide-react";

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

import { Header } from "./layout/Header";
import ServiceGrid from "./services/ServiceGrid";
import ProjectGallery from "./projects/ProjectGallery";
import ContactForm from "./contact/ContactForm";

interface HomeProps {
  locale?: string;
}

const Home = ({ locale = "en" }: HomeProps) => {
  // Determine if RTL layout is needed
  const isRTL = locale === "ar";

  return (
    <div
      className="flex flex-col min-h-screen bg-background"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline" className="px-3 py-1">
                {locale === "en"
                  ? "Professional Auto Detailing Services"
                  : locale === "fr"
                    ? "Services de détaillage automobile professionnel"
                    : "خدمات تفصيل السيارات المحترفة"}
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                {locale === "en"
                  ? "Transform Your Vehicle With Expert Auto Detailing"
                  : locale === "fr"
                    ? "Transformez votre véhicule avec un détaillage automobile expert"
                    : "حوّل سيارتك بتفصيل السيارات الخبير"}
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                {locale === "en"
                  ? "From paint correction to ceramic coating, we deliver exceptional auto detailing services that protect and enhance your vehicle's appearance."
                  : locale === "fr"
                    ? "De la correction de peinture au revêtement céramique, nous fournissons des services exceptionnels de détaillage automobile qui protègent et améliorent l'apparence de votre véhicule."
                    : "من تصحيح الطلاء إلى الطلاء السيراميكي، نقدم خدمات تفصيل السيارات الاستثنائية التي تحمي وتعزز مظهر سيارتك."}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-1">
                {locale === "en"
                  ? "Book Your Service"
                  : locale === "fr"
                    ? "Réservez votre service"
                    : "احجز خدمتك"}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                {locale === "en"
                  ? "View Our Work"
                  : locale === "fr"
                    ? "Voir notre travail"
                    : "عرض أعمالنا"}
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
            animate={{
              x: [0, 10, 0],
              y: [0, 15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
            animate={{
              x: [0, -15, 0],
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            }}
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                {locale === "en"
                  ? "About Us"
                  : locale === "fr"
                    ? "À propos de nous"
                    : "من نحن"}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                {locale === "en"
                  ? "Over 20 Years of Excellence in Construction"
                  : locale === "fr"
                    ? "Plus de 20 ans d'excellence dans la construction"
                    : "أكثر من 20 عامًا من التميز في البناء"}
              </h2>
              <p className="text-muted-foreground md:text-lg">
                {locale === "en"
                  ? "We are a family-owned business dedicated to delivering high-quality construction and renovation services. Our team of skilled professionals brings expertise, precision, and passion to every project."
                  : locale === "fr"
                    ? "Nous sommes une entreprise familiale dédiée à fournir des services de construction et de rénovation de haute qualité. Notre équipe de professionnels qualifiés apporte expertise, précision et passion à chaque projet."
                    : "نحن شركة عائلية مكرسة لتقديم خدمات بناء وتجديد عالية الجودة. يجلب فريقنا من المحترفين المهرة الخبرة والدقة والشغف لكل مشروع."}
              </p>
              <ul className="grid gap-2">
                {[
                  locale === "en"
                    ? "Licensed & Insured Professionals"
                    : locale === "fr"
                      ? "Professionnels agréés et assurés"
                      : "محترفون مرخصون ومؤمنون",
                  locale === "en"
                    ? "On-Time & On-Budget Delivery"
                    : locale === "fr"
                      ? "Livraison dans les délais et dans le budget"
                      : "التسليم في الوقت المحدد وضمن الميزانية",
                  locale === "en"
                    ? "Premium Materials & Craftsmanship"
                    : locale === "fr"
                      ? "Matériaux et savoir-faire de qualité supérieure"
                      : "مواد وحرفية ممتازة",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline">
                {locale === "en"
                  ? "Learn More About Us"
                  : locale === "fr"
                    ? "En savoir plus sur nous"
                    : "تعرف على المزيد عنا"}
              </Button>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt={
                  locale === "en"
                    ? "Construction team at work"
                    : locale === "fr"
                      ? "Équipe de construction au travail"
                      : "فريق البناء في العمل"
                }
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                {locale === "en"
                  ? "Our Services"
                  : locale === "fr"
                    ? "Nos Services"
                    : "خدماتنا"}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                {locale === "en"
                  ? "Comprehensive Construction & Renovation Solutions"
                  : locale === "fr"
                    ? "Solutions complètes de construction et de rénovation"
                    : "حلول شاملة للبناء والتجديد"}
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                {locale === "en"
                  ? "From small repairs to complete home transformations, we offer a wide range of services to meet your needs."
                  : locale === "fr"
                    ? "Des petites réparations aux transformations complètes de maisons, nous offrons une large gamme de services pour répondre à vos besoins."
                    : "من الإصلاحات الصغيرة إلى التحولات الكاملة للمنزل، نقدم مجموعة واسعة من الخدمات لتلبية احتياجاتك."}
              </p>
            </div>
          </div>
          <div className="mt-10">
            <ServiceGrid locale={locale} />
          </div>
          <div className="mt-10 flex justify-center">
            <Button>
              {locale === "en"
                ? "View All Services"
                : locale === "fr"
                  ? "Voir tous les services"
                  : "عرض جميع الخدمات"}
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                {locale === "en"
                  ? "Why Choose Us"
                  : locale === "fr"
                    ? "Pourquoi nous choisir"
                    : "لماذا تختارنا"}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                {locale === "en"
                  ? "The Preferred Choice for Quality Construction"
                  : locale === "fr"
                    ? "Le choix préféré pour une construction de qualité"
                    : "الخيار المفضل للبناء الجيد"}
              </h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-10">
            {[
              {
                title:
                  locale === "en"
                    ? "Expert Craftsmanship"
                    : locale === "fr"
                      ? "Savoir-faire expert"
                      : "حرفية خبيرة",
                description:
                  locale === "en"
                    ? "Our team consists of skilled professionals with years of experience in the industry."
                    : locale === "fr"
                      ? "Notre équipe est composée de professionnels qualifiés avec des années d'expérience dans l'industrie."
                      : "يتكون فريقنا من محترفين مهرة ذوي سنوات من الخبرة في الصناعة.",
              },
              {
                title:
                  locale === "en"
                    ? "Quality Materials"
                    : locale === "fr"
                      ? "Matériaux de qualité"
                      : "مواد عالية الجودة",
                description:
                  locale === "en"
                    ? "We use only the highest quality materials to ensure durability and longevity."
                    : locale === "fr"
                      ? "Nous utilisons uniquement des matériaux de la plus haute qualité pour assurer durabilité et longévité."
                      : "نستخدم فقط مواد عالية الجودة لضمان المتانة وطول العمر.",
              },
              {
                title:
                  locale === "en"
                    ? "Transparent Pricing"
                    : locale === "fr"
                      ? "Prix transparents"
                      : "أسعار شفافة",
                description:
                  locale === "en"
                    ? "No hidden fees or surprises. We provide detailed quotes before starting any work."
                    : locale === "fr"
                      ? "Pas de frais cachés ou de surprises. Nous fournissons des devis détaillés avant de commencer tout travail."
                      : "لا رسوم خفية أو مفاجآت. نقدم عروض أسعار مفصلة قبل بدء أي عمل.",
              },
              {
                title:
                  locale === "en"
                    ? "Timely Completion"
                    : locale === "fr"
                      ? "Achèvement dans les délais"
                      : "إنجاز في الوقت المحدد",
                description:
                  locale === "en"
                    ? "We value your time and strive to complete projects on schedule without compromising quality."
                    : locale === "fr"
                      ? "Nous valorisons votre temps et nous efforçons de terminer les projets dans les délais sans compromettre la qualité."
                      : "نحن نقدر وقتك ونسعى جاهدين لإكمال المشاريع في الموعد المحدد دون المساس بالجودة.",
              },
              {
                title:
                  locale === "en"
                    ? "Customer Satisfaction"
                    : locale === "fr"
                      ? "Satisfaction du client"
                      : "رضا العملاء",
                description:
                  locale === "en"
                    ? "Your satisfaction is our priority. We work closely with you to ensure your vision becomes reality."
                    : locale === "fr"
                      ? "Votre satisfaction est notre priorité. Nous travaillons en étroite collaboration avec vous pour que votre vision devienne réalité."
                      : "رضاك هو أولويتنا. نعمل معك عن كثب لضمان تحقيق رؤيتك.",
              },
              {
                title:
                  locale === "en"
                    ? "Warranty & Support"
                    : locale === "fr"
                      ? "Garantie et support"
                      : "الضمان والدعم",
                description:
                  locale === "en"
                    ? "We stand behind our work with comprehensive warranties and ongoing support."
                    : locale === "fr"
                      ? "Nous soutenons notre travail avec des garanties complètes et un support continu."
                      : "نحن ندعم عملنا بضمانات شاملة ودعم مستمر.",
              },
            ].map((item, i) => (
              <Card key={i} className="bg-background">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                {locale === "en"
                  ? "Featured Projects"
                  : locale === "fr"
                    ? "Projets en vedette"
                    : "المشاريع المميزة"}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                {locale === "en"
                  ? "See Our Transformations"
                  : locale === "fr"
                    ? "Découvrez nos transformations"
                    : "شاهد تحولاتنا"}
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                {locale === "en"
                  ? "Browse our portfolio of completed projects and see the dramatic before and after transformations."
                  : locale === "fr"
                    ? "Parcourez notre portfolio de projets terminés et découvrez les transformations spectaculaires avant et après."
                    : "تصفح محفظتنا من المشاريع المكتملة وشاهد التحولات المذهلة قبل وبعد."}
              </p>
            </div>
          </div>
          <div className="mt-10">
            <ProjectGallery locale={locale} />
          </div>
          <div className="mt-10 flex justify-center">
            <Button>
              {locale === "en"
                ? "View All Projects"
                : locale === "fr"
                  ? "Voir tous les projets"
                  : "عرض جميع المشاريع"}
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                {locale === "en"
                  ? "Testimonials"
                  : locale === "fr"
                    ? "Témoignages"
                    : "شهادات"}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                {locale === "en"
                  ? "What Our Clients Say"
                  : locale === "fr"
                    ? "Ce que disent nos clients"
                    : "ما يقوله عملاؤنا"}
              </h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-10">
            {[
              {
                name:
                  locale === "en"
                    ? "Sarah Johnson"
                    : locale === "fr"
                      ? "Sarah Johnson"
                      : "سارة جونسون",
                role:
                  locale === "en"
                    ? "Homeowner"
                    : locale === "fr"
                      ? "Propriétaire"
                      : "مالك منزل",
                content:
                  locale === "en"
                    ? "The team transformed our outdated kitchen into a modern, functional space that we love. Their attention to detail and craftsmanship exceeded our expectations."
                    : locale === "fr"
                      ? "L'équipe a transformé notre cuisine démodée en un espace moderne et fonctionnel que nous adorons. Leur attention aux détails et leur savoir-faire ont dépassé nos attentes."
                      : "قام الفريق بتحويل مطبخنا القديم إلى مساحة حديثة وعملية نحبها. لقد تجاوز اهتمامهم بالتفاصيل وحرفيتهم توقعاتنا.",
              },
              {
                name:
                  locale === "en"
                    ? "Michael Thompson"
                    : locale === "fr"
                      ? "Michael Thompson"
                      : "مايكل طومسون",
                role:
                  locale === "en"
                    ? "Business Owner"
                    : locale === "fr"
                      ? "Propriétaire d'entreprise"
                      : "صاحب عمل",
                content:
                  locale === "en"
                    ? "We hired them for our office renovation and couldn't be happier with the results. Professional, punctual, and the quality of work is outstanding."
                    : locale === "fr"
                      ? "Nous les avons engagés pour la rénovation de notre bureau et ne pourrions pas être plus satisfaits des résultats. Professionnels, ponctuels, et la qualité du travail est exceptionnelle."
                      : "قمنا بتوظيفهم لتجديد مكتبنا ولا يمكننا أن نكون أكثر سعادة بالنتائج. محترفون، ملتزمون بالمواعيد، وجودة العمل ممتازة.",
              },
              {
                name:
                  locale === "en"
                    ? "Emily Rodriguez"
                    : locale === "fr"
                      ? "Emily Rodriguez"
                      : "إميلي رودريغيز",
                role:
                  locale === "en"
                    ? "Homeowner"
                    : locale === "fr"
                      ? "Propriétaire"
                      : "مالك منزل",
                content:
                  locale === "en"
                    ? "The bathroom renovation was completed on time and on budget. The team was courteous, clean, and their workmanship was excellent."
                    : locale === "fr"
                      ? "La rénovation de la salle de bain a été terminée dans les délais et dans le budget. L'équipe était courtoise, propre, et leur travail était excellent."
                      : "تم الانتهاء من تجديد الحمام في الوقت المحدد وضمن الميزانية. كان الفريق مهذبًا ونظيفًا، وكانت حرفيتهم ممتازة.",
              },
              {
                name:
                  locale === "en"
                    ? "David Chen"
                    : locale === "fr"
                      ? "David Chen"
                      : "ديفيد تشن",
                role:
                  locale === "en"
                    ? "Property Developer"
                    : locale === "fr"
                      ? "Promoteur immobilier"
                      : "مطور عقارات",
                content:
                  locale === "en"
                    ? "We've worked with this contractor on multiple projects and they consistently deliver high-quality results. Highly recommended for any construction needs."
                    : locale === "fr"
                      ? "Nous avons travaillé avec cet entrepreneur sur plusieurs projets et ils fournissent constamment des résultats de haute qualité. Fortement recommandé pour tous les besoins de construction."
                      : "لقد عملنا مع هذا المقاول في مشاريع متعددة وهم يقدمون باستمرار نتائج عالية الجودة. موصى به بشدة لأي احتياجات بناء.",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="bg-background">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                {locale === "en"
                  ? "Contact Us"
                  : locale === "fr"
                    ? "Contactez-nous"
                    : "اتصل بنا"}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                {locale === "en"
                  ? "Ready to Detail Your Vehicle?"
                  : locale === "fr"
                    ? "Prêt à détailler votre véhicule?"
                    : "هل أنت مستعد لتفصيل سيارتك؟"}
              </h2>
              <p className="text-muted-foreground md:text-lg">
                {locale === "en"
                  ? "Contact us today to schedule your auto detailing service. We'll make your vehicle look like new again."
                  : locale === "fr"
                    ? "Contactez-nous aujourd'hui pour planifier votre service de détaillage automobile. Nous ferons en sorte que votre véhicule ait l'air neuf à nouveau."
                    : "اتصل بنا اليوم لجدولة خدمة تفصيل السيارات الخاصة بك. سنجعل سيارتك تبدو جديدة مرة أخرى."}
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">
                    {locale === "en"
                      ? "Our Location"
                      : locale === "fr"
                        ? "Notre emplacement"
                        : "موقعنا"}
                  </h3>
                  <p className="text-muted-foreground">
                    Toronto, Ontario, Canada
                    <br />
                    Mobile Service Available
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">
                    {locale === "en"
                      ? "Contact Information"
                      : locale === "fr"
                        ? "Informations de contact"
                        : "معلومات الاتصال"}
                  </h3>
                  <p className="text-muted-foreground">
                    Email: info@instacarspa.com
                    <br />
                    Phone: (647) 860-5500
                    <br />
                    Website: instacarspa.com
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">
                    {locale === "en"
                      ? "Service Hours"
                      : locale === "fr"
                        ? "Heures de service"
                        : "ساعات الخدمة"}
                  </h3>
                  <p className="text-muted-foreground">
                    {locale === "en"
                      ? "Monday - Friday: 8:00 AM - 6:00 PM"
                      : locale === "fr"
                        ? "Lundi - Vendredi: 8h00 - 18h00"
                        : "الاثنين - الجمعة: 8:00 صباحًا - 6:00 مساءً"}
                    <br />
                    {locale === "en"
                      ? "Saturday: 9:00 AM - 5:00 PM"
                      : locale === "fr"
                        ? "Samedi: 9h00 - 17h00"
                        : "السبت: 9:00 صباحًا - 5:00 مساءً"}
                    <br />
                    {locale === "en"
                      ? "Sunday: 10:00 AM - 4:00 PM"
                      : locale === "fr"
                        ? "Dimanche: 10h00 - 16h00"
                        : "الأحد: 10:00 صباحًا - 4:00 مساءً"}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                {locale === "en"
                  ? "Ready to Transform Your Space?"
                  : locale === "fr"
                    ? "Prêt à transformer votre espace?"
                    : "هل أنت مستعد لتحويل مساحتك؟"}
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                {locale === "en"
                  ? "Contact us today for a free consultation and quote. Let's bring your vision to life."
                  : locale === "fr"
                    ? "Contactez-nous aujourd'hui pour une consultation et un devis gratuits. Donnons vie à votre vision."
                    : "اتصل بنا اليوم للحصول على استشارة وعرض سعر مجاني. دعنا نحول رؤيتك إلى حقيقة."}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-1">
                {locale === "en"
                  ? "Get a Free Quote"
                  : locale === "fr"
                    ? "Obtenir un devis gratuit"
                    : "احصل على عرض سعر مجاني"}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                {locale === "en"
                  ? "Learn More"
                  : locale === "fr"
                    ? "En savoir plus"
                    : "معرفة المزيد"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;