import React from "react";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Clock, Shield, Star, Heart, Target } from "lucide-react";

interface AboutPageProps {
  locale?: string;
}

const AboutPage = ({ locale = "en" }: AboutPageProps) => {
  const isRTL = locale === "ar";

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: locale === "en" ? "Happy Clients" : locale === "fr" ? "Clients satisfaits" : "عملاء سعداء"
    },
    {
      icon: Award,
      number: "5+",
      label: locale === "en" ? "Years Experience" : locale === "fr" ? "Années d'expérience" : "سنوات من الخبرة"
    },
    {
      icon: Star,
      number: "4.9",
      label: locale === "en" ? "Average Rating" : locale === "fr" ? "Note moyenne" : "التقييم المتوسط"
    },
    {
      icon: Clock,
      number: "24/7",
      label: locale === "en" ? "Support Available" : locale === "fr" ? "Support disponible" : "الدعم متاح"
    }
  ];

  const values = [
    {
      icon: Target,
      title: locale === "en" ? "Precision" : locale === "fr" ? "Précision" : "دقة",
      description: locale === "en" 
        ? "Every detail matters. We approach each project with meticulous attention to achieve perfection."
        : locale === "fr"
        ? "Chaque détail compte. Nous abordons chaque véhicule avec une attention méticuleuse pour atteindre la perfection."
        : "كل التفاصيل مهمة. نتعامل مع كل سيارة بعناية دقيقة لتحقيق الكمال."
    },
    {
      icon: Heart,
      title: locale === "en" ? "Passion" : locale === "fr" ? "Passion" : "شغف",
      description: locale === "en"
        ? "We love what we do. Our passion for automotive excellence drives us to deliver exceptional results."
        : locale === "fr"
        ? "Nous aimons ce que nous faisons. Notre passion pour l'excellence automobile nous pousse à livrer des résultats exceptionnels."
        : "نحن نحب ما نفعله. شغفنا بالتميز في السيارات يدفعنا لتقديم نتائج استثنائية."
    },
    {
      icon: Shield,
      title: locale === "en" ? "Trust" : locale === "fr" ? "Confiance" : "ثقة",
      description: locale === "en"
        ? "Your home is in good hands. We treat every property as if it were our own, with care and respect."
        : locale === "fr"
        ? "Votre véhicule est en sécurité avec nous. Nous traitons chaque voiture comme si c'était la nôtre, avec soin et respect."
        : "سيارتك آمنة معنا. نتعامل مع كل سيارة كما لو كانت ملكنا، بعناية واحترام."
    }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: locale === "en" ? "Founder & Master Detailer" : locale === "fr" ? "Fondateur et maître détailleur" : "المؤسس والمفصل الرئيسي",
      experience: locale === "en" ? "8+ years experience" : locale === "fr" ? "8+ années d'expérience" : "8+ سنوات من الخبرة",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      description: locale === "en"
        ? "Certified in residential construction and renovation best practices. Passionate about craftsmanship."
        : locale === "fr"
        ? "Certifié en correction de peinture avancée et application de revêtement céramique. Passionné par la perfection automobile."
        : "معتمد في تصحيح الطلاء المتقدم وتطبيق الطلاء السيراميكي. شغوف بالكمال في السيارات."
    },
    {
      name: "Maria Rodriguez",
      role: locale === "en" ? "Interior Specialist" : locale === "fr" ? "Spécialiste intérieur" : "أخصائي داخلي",
      experience: locale === "en" ? "5+ years experience" : locale === "fr" ? "5+ années d'expérience" : "5+ سنوات من الخبرة",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      description: locale === "en"
        ? "Expert in leather care, fabric protection, and interior restoration. Attention to detail is her specialty."
        : locale === "fr"
        ? "Experte en soins du cuir, protection des tissus et restauration intérieure. L'attention aux détails est sa spécialité."
        : "خبيرة في العناية بالجلد وحماية الأقمشة واستعادة الداخل. الاهتمام بالتفاصيل هو تخصصها."
    },
    {
      name: "David Chen",
      role: locale === "en" ? "Paint Correction Expert" : locale === "fr" ? "Expert en correction de peinture" : "خبير تصحيح الطلاء",
      experience: locale === "en" ? "6+ years experience" : locale === "fr" ? "6+ années d'expérience" : "6+ سنوات من الخبرة",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      description: locale === "en"
        ? "Specialized in multi-stage paint correction and swirl mark removal. Perfectionist by nature."
        : locale === "fr"
        ? "Spécialisé dans la correction de peinture multi-étapes et l'élimination des marques de tourbillon. Perfectionniste par nature."
        : "متخصص في تصحيح الطلاء متعدد المراحل وإزالة علامات الدوامة. مثالي بطبيعته."
    }
  ];

  const certifications = [
    locale === "en" ? "IDA Certified Detailer" : locale === "fr" ? "Détailleur certifié IDA" : "مفصل معتمد IDA",
    locale === "en" ? "Ceramic Pro Certified" : locale === "fr" ? "Certifié Ceramic Pro" : "معتمد Ceramic Pro",
    locale === "en" ? "Paint Correction Specialist" : locale === "fr" ? "Spécialiste en correction de peinture" : "أخصائي تصحيح الطلاء",
    locale === "en" ? "Interior Care Expert" : locale === "fr" ? "Expert en soins intérieurs" : "خبير العناية الداخلية"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Badge variant="outline" className="px-3 py-1">
              {locale === "en" ? "About Us" : locale === "fr" ? "À propos de nous" : "من نحن"}
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              {locale === "en" 
                ? "Passionate About Automotive Excellence"
                : locale === "fr"
                ? "Passionnés par l'excellence automobile"
                : "شغوفون بالتميز في السيارات"}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {locale === "en"
                ? "TrueNorth Construction was founded with a simple mission: to provide the highest quality construction services while treating every home with the care it deserves."
                : locale === "fr"
                ? "TrueNorth Construction a été fondée avec une mission simple : offrir des services de construction de la plus haute qualité tout en traitant chaque maison avec le soin qu’elle mérite."
                : "تأسست TrueNorth Construction بمهمة بسيطة: تقديم خدمات بناء عالية الجودة مع معاملة كل منزل بالعناية التي يستحقها."}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full">
                      <Icon className="h-8 w-8 text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
                  {locale === "en" ? "Our Story" : locale === "fr" ? "Notre histoire" : "قصتنا"}
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  {locale === "en"
                    ? "Founded in 2019 in Montreal, TrueNorth Construction began as a small remodeling team with a vision to bring professional craftsmanship directly to our clients. What started as a one‑person operation has grown into a trusted team of construction specialists."
                    : locale === "fr"
                    ? "Fondée en 2019 à Montréal, TrueNorth Construction a commencé comme une petite équipe de rénovation avec la vision d’apporter un savoir‑faire professionnel directement à nos clients. Ce qui a commencé comme une opération individuelle est devenu une équipe de spécialistes de la construction de confiance."
                    : "تأسست في عام 2019 في مونتريال، بدأت TrueNorth Construction كفريق تجديد صغير برؤية تقديم حرفية احترافية مباشرة لعملائنا. ما بدأ كعملٍ فردي أصبح فريقًا موثوقًا من مختصي البناء."}
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
                  {locale === "en" ? "Why Choose TrueNorth Construction?" : locale === "fr" ? "Pourquoi choisir TrueNorth Construction ?" : "لماذا تختار TrueNorth Construction؟"}
                </h3>
                <ul className="space-y-3">
                  {[
                    locale === "en" ? "Mobile service - we come to you" : locale === "fr" ? "Service mobile - nous venons à vous" : "خدمة متنقلة - نأتي إليك",
                    locale === "en" ? "Eco-friendly products and methods" : locale === "fr" ? "Produits et méthodes écologiques" : "منتجات وطرق صديقة للبيئة",
                    locale === "en" ? "Fully insured and bonded" : locale === "fr" ? "Entièrement assuré et cautionné" : "مؤمن ومضمون بالكامل",
                    locale === "en" ? "Satisfaction guarantee on all services" : locale === "fr" ? "Garantie de satisfaction sur tous les services" : "ضمان الرضا على جميع الخدمات",
                    locale === "en" ? "Competitive pricing with transparent quotes" : locale === "fr" ? "Prix compétitifs avec devis transparents" : "أسعار تنافسية مع عروض أسعار شفافة"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt={locale === "en" ? "Construction process" : locale === "fr" ? "Processus de construction" : "عملية البناء"}
                className="rounded-xl shadow-lg w-full aspect-video object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
              {locale === "en" ? "Our Values" : locale === "fr" ? "Nos valeurs" : "قيمنا"}
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              {locale === "en"
                ? "These core values guide everything we do and ensure we deliver exceptional service every time."
                : locale === "fr"
                ? "Ces valeurs fondamentales guident tout ce que nous faisons et garantissent que nous fournissons un service exceptionnel à chaque fois."
                : "هذه القيم الأساسية توجه كل ما نفعله وتضمن أننا نقدم خدمة استثنائية في كل مرة."}
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-full">
                        <Icon className="h-8 w-8 text-red-600 dark:text-red-400" />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
              {locale === "en" ? "Meet Our Team" : locale === "fr" ? "Rencontrez notre équipe" : "تعرف على فريقنا"}
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              {locale === "en"
                ? "Our skilled professionals are passionate about automotive care and dedicated to delivering exceptional results."
                : locale === "fr"
                ? "Nos professionnels qualifiés sont passionnés par les soins automobiles et dédiés à fournir des résultats exceptionnels."
                : "محترفونا المهرة شغوفون برعاية السيارات ومكرسون لتقديم نتائج استثنائية."}
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-red-600 font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
              {locale === "en" ? "Certifications & Training" : locale === "fr" ? "Certifications et formation" : "الشهادات والتدريب"}
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              {locale === "en"
                ? "Our team maintains the highest industry standards through continuous training and certification."
                : locale === "fr"
                ? "Notre équipe maintient les plus hauts standards de l'industrie grâce à une formation et une certification continues."
                : "يحافظ فريقنا على أعلى معايير الصناعة من خلال التدريب والشهادات المستمرة."}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-4 border rounded-lg">
                <Award className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <p className="text-sm font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              {locale === "en" ? "Ready to Experience the Difference?" : locale === "fr" ? "Prêt à découvrir la différence?" : "هل أنت مستعد لتجربة الفرق؟"}
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              {locale === "en"
                ? "Join hundreds of satisfied customers who trust TrueNorth Construction with their renovation needs."
                : locale === "fr"
                ? "Rejoignez des centaines de clients satisfaits qui font confiance à TrueNorth Construction pour leurs besoins de rénovation."
                : "انضم إلى مئات العملاء الراضين الذين يثقون بـ TrueNorth Construction لاحتياجات التجديد لديهم."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                {locale === "en" ? "Book Your Service" : locale === "fr" ? "Réservez votre service" : "احجز خدمتك"}
              </Button>
              <Button size="lg" variant="outline">
                {locale === "en" ? "Call +1 438 226 3391" : locale === "fr" ? "Appelez +1 438 226 3391" : "اتصل +1 438 226 3391"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
