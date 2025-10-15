import React from "react";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Sparkles, Shield, Droplets, Zap } from "lucide-react";

interface ServicesPageProps {
  locale?: string;
}

const ServicesPage = ({ locale = "en" }: ServicesPageProps) => {
  const isRTL = locale === "ar";

  const services = [
    {
      id: "exterior-wash",
      icon: Droplets,
      title: locale === "en" ? "Exterior Wash & Wax" : locale === "fr" ? "Lavage et cirage extérieur" : "غسيل وشمع خارجي",
      description: locale === "en" 
        ? "Complete exterior cleaning with premium wax protection"
        : locale === "fr"
        ? "Nettoyage extérieur complet avec protection de cire premium"
        : "تنظيف خارجي كامل مع حماية الشمع المتميز",
      price: "$80 - $120",
      duration: "2-3 hours",
      features: [
        locale === "en" ? "Hand wash with premium soap" : locale === "fr" ? "Lavage à la main avec savon premium" : "غسيل يدوي بصابون متميز",
        locale === "en" ? "Clay bar treatment" : locale === "fr" ? "Traitement à la barre d'argile" : "علاج بار الطين",
        locale === "en" ? "Premium wax application" : locale === "fr" ? "Application de cire premium" : "تطبيق الشمع المتميز",
        locale === "en" ? "Tire shine & wheel cleaning" : locale === "fr" ? "Brillance des pneus et nettoyage des roues" : "لمعان الإطارات وتنظيف العجلات"
      ]
    },
    {
      id: "interior-detail",
      icon: Sparkles,
      title: locale === "en" ? "Interior Detailing" : locale === "fr" ? "Détaillage intérieur" : "تفصيل داخلي",
      description: locale === "en" 
        ? "Deep cleaning and protection for your home's interior surfaces"
        : locale === "fr"
        ? "Nettoyage en profondeur et protection pour l'intérieur de votre véhicule"
        : "تنظيف عميق وحماية لداخل سيارتك",
      price: "$100 - $150",
      duration: "3-4 hours",
      features: [
        locale === "en" ? "Vacuum all surfaces" : locale === "fr" ? "Aspirer toutes les surfaces" : "شفط جميع الأسطح",
        locale === "en" ? "Steam clean upholstery" : locale === "fr" ? "Nettoyage à la vapeur des tissus d'ameublement" : "تنظيف المفروشات بالبخار",
        locale === "en" ? "Leather conditioning" : locale === "fr" ? "Conditionnement du cuir" : "تكييف الجلد",
        locale === "en" ? "Dashboard & trim protection" : locale === "fr" ? "Protection du tableau de bord et des garnitures" : "حماية لوحة القيادة والتشطيبات"
      ]
    },
    {
      id: "ceramic-coating",
      icon: Shield,
      title: locale === "en" ? "Ceramic Coating" : locale === "fr" ? "Revêtement céramique" : "طلاء سيراميكي",
      description: locale === "en" 
        ? "Long-lasting protection with hydrophobic properties"
        : locale === "fr"
        ? "Protection durable avec propriétés hydrophobes"
        : "حماية طويلة الأمد مع خصائص مقاومة الماء",
      price: "$500 - $1200",
      duration: "1-2 days",
      features: [
        locale === "en" ? "Paint correction included" : locale === "fr" ? "Correction de peinture incluse" : "تصحيح الطلاء مشمول",
        locale === "en" ? "9H hardness protection" : locale === "fr" ? "Protection de dureté 9H" : "حماية صلابة 9H",
        locale === "en" ? "5-year warranty" : locale === "fr" ? "Garantie de 5 ans" : "ضمان 5 سنوات",
        locale === "en" ? "Hydrophobic water beading" : locale === "fr" ? "Perles d'eau hydrophobes" : "تكوين قطرات الماء المقاومة"
      ]
    },
    {
      id: "paint-correction",
      icon: Zap,
      title: locale === "en" ? "Paint Correction" : locale === "fr" ? "Correction de peinture" : "تصحيح الطلاء",
      description: locale === "en" 
        ? "Remove swirl marks, scratches, and restore paint clarity"
        : locale === "fr"
        ? "Éliminer les marques de tourbillon, les rayures et restaurer la clarté de la peinture"
        : "إزالة علامات الدوامة والخدوش واستعادة وضوح الطلاء",
      price: "$300 - $800",
      duration: "4-8 hours",
      features: [
        locale === "en" ? "Multi-stage polishing" : locale === "fr" ? "Polissage multi-étapes" : "تلميع متعدد المراحل",
        locale === "en" ? "Swirl mark removal" : locale === "fr" ? "Élimination des marques de tourbillon" : "إزالة علامات الدوامة",
        locale === "en" ? "Scratch repair" : locale === "fr" ? "Réparation des rayures" : "إصلاح الخدوش",
        locale === "en" ? "Paint depth measurement" : locale === "fr" ? "Mesure de l'épaisseur de la peinture" : "قياس عمق الطلاء"
      ]
    }
  ];

  const packages = [
    {
      name: locale === "en" ? "Basic Detail" : locale === "fr" ? "Détail de base" : "تفصيل أساسي",
      price: "$150",
      description: locale === "en" ? "Perfect for regular maintenance" : locale === "fr" ? "Parfait pour l'entretien régulier" : "مثالي للصيانة المنتظمة",
      services: [
        locale === "en" ? "Exterior wash & wax" : locale === "fr" ? "Lavage et cirage extérieur" : "غسيل وشمع خارجي",
        locale === "en" ? "Interior vacuum & wipe down" : locale === "fr" ? "Aspirateur intérieur et essuyage" : "شفط داخلي ومسح",
        locale === "en" ? "Tire shine" : locale === "fr" ? "Brillance des pneus" : "لمعان الإطارات",
        locale === "en" ? "Window cleaning" : locale === "fr" ? "Nettoyage des vitres" : "تنظيف النوافذ"
      ]
    },
    {
      name: locale === "en" ? "Premium Detail" : locale === "fr" ? "Détail premium" : "تفصيل متميز",
      price: "$250",
      description: locale === "en" ? "Comprehensive cleaning and protection" : locale === "fr" ? "Nettoyage et protection complets" : "تنظيف وحماية شاملة",
      services: [
        locale === "en" ? "Everything in Basic Detail" : locale === "fr" ? "Tout dans le détail de base" : "كل شيء في التفصيل الأساسي",
        locale === "en" ? "Clay bar treatment" : locale === "fr" ? "Traitement à la barre d'argile" : "علاج بار الطين",
        locale === "en" ? "Interior steam cleaning" : locale === "fr" ? "Nettoyage à la vapeur intérieur" : "تنظيف داخلي بالبخار",
        locale === "en" ? "Leather conditioning" : locale === "fr" ? "Conditionnement du cuir" : "تكييف الجلد",
        locale === "en" ? "Engine bay cleaning" : locale === "fr" ? "Nettoyage du compartiment moteur" : "تنظيف حجرة المحرك"
      ]
    },
    {
      name: locale === "en" ? "Ultimate Detail" : locale === "fr" ? "Détail ultime" : "تفصيل نهائي",
      price: "$400",
      description: locale === "en" ? "Premium finish for a flawless look" : locale === "fr" ? "Finition haut de gamme pour un rendu impeccable" : "تشطيبات فاخرة لمظهر لا تشوبه شائبة",
      services: [
        locale === "en" ? "Everything in Premium Detail" : locale === "fr" ? "Tout dans le détail premium" : "كل شيء في التفصيل المتميز",
        locale === "en" ? "Paint correction (1-step)" : locale === "fr" ? "Correction de peinture (1 étape)" : "تصحيح الطلاء (خطوة واحدة)",
        locale === "en" ? "Ceramic coating application" : locale === "fr" ? "Application de revêtement céramique" : "تطبيق الطلاء السيراميكي",
        locale === "en" ? "Headlight restoration" : locale === "fr" ? "Restauration des phares" : "استعادة المصابيح الأمامية",
        locale === "en" ? "6-month protection warranty" : locale === "fr" ? "Garantie de protection de 6 mois" : "ضمان حماية 6 أشهر"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Badge variant="outline" className="px-3 py-1">
              {locale === "en" ? "Our Services" : locale === "fr" ? "Nos services" : "خدماتنا"}
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              {locale === "en" 
                ? "Professional Construction Services"
                : locale === "fr"
                ? "Services de construction professionnels"
                : "خدمات بناء احترافية"}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {locale === "en"
                ? "From kitchens and baths to roofing, we offer comprehensive renovation services to elevate your home."
                : locale === "fr"
                ? "Des cuisines et salles de bain à la toiture, nous offrons des services de rénovation complets pour valoriser votre maison."
                : "من المطابخ والحمامات إلى الأسقف، نقدم خدمات تجديد شاملة لرفع قيمة منزلك."}
            </p>
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="relative overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                        <Icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <div className="flex items-center space-x-4 mt-1">
                          <Badge variant="secondary">{service.price}</Badge>
                          <span className="text-sm text-muted-foreground">{service.duration}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-base">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6">
                      {locale === "en" ? "Book This Service" : locale === "fr" ? "Réserver ce service" : "احجز هذه الخدمة"}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
              {locale === "en" ? "Service Packages" : locale === "fr" ? "Forfaits de service" : "حزم الخدمة"}
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              {locale === "en"
                ? "Choose from our carefully crafted packages designed to meet different needs and budgets."
                : locale === "fr"
                ? "Choisissez parmi nos forfaits soigneusement conçus pour répondre à différents besoins et budgets."
                : "اختر من حزمنا المصممة بعناية لتلبية الاحتياجات والميزانيات المختلفة."}
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${index === 1 ? 'border-red-500 shadow-lg scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-red-500 text-white">
                      {locale === "en" ? "Most Popular" : locale === "fr" ? "Le plus populaire" : "الأكثر شعبية"}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-red-600">{pkg.price}</div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={index === 1 ? "default" : "outline"}>
                    {locale === "en" ? "Choose Package" : locale === "fr" ? "Choisir le forfait" : "اختر الحزمة"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              {locale === "en" ? "Ready to Book Your Service?" : locale === "fr" ? "Prêt à réserver votre service?" : "هل أنت مستعد لحجز خدمتك؟"}
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              {locale === "en"
                ? "Contact us today to request a free estimate. Let’s bring your vision to life!"
                : locale === "fr"
                ? "Contactez‑nous dès aujourd’hui pour demander une estimation gratuite. Concrétisons votre vision !"
                : "تواصل معنا اليوم لطلب تقدير مجاني. لنجعل رؤيتك واقعاً!"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                {locale === "en" ? "Call +1 438 226 3391" : locale === "fr" ? "Appelez +1 438 226 3391" : "اتصل +1 438 226 3391"}
              </Button>
              <Button size="lg" variant="outline">
                {locale === "en" ? "Get Quote Online" : locale === "fr" ? "Obtenir un devis en ligne" : "احصل على عرض سعر عبر الإنترنت"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
