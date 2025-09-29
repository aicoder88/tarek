import React from "react";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/contact/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, Hammer, Calculator } from "lucide-react";

interface ContactPageProps {
  locale?: string;
}

const ContactPage = ({ locale = "en" }: ContactPageProps) => {
  const isRTL = locale === "ar";

  const contactMethods = [
    {
      icon: Phone,
      title: locale === "en" ? "Phone" : locale === "fr" ? "Téléphone" : "هاتف",
      value: "(647) 860-5500",
      description: locale === "en" ? "Call us for immediate assistance" : locale === "fr" ? "Appelez-nous pour une assistance immédiate" : "اتصل بنا للحصول على المساعدة الفورية",
      href: "tel:+16478605500",
      available: locale === "en" ? "Available 7 days a week" : locale === "fr" ? "Disponible 7 jours sur 7" : "متاح 7 أيام في الأسبوع"
    },
    {
      icon: Mail,
      title: locale === "en" ? "Email" : locale === "fr" ? "Email" : "بريد إلكتروني",
      value: "info@truenorthconstruction.com",
      description: locale === "en" ? "Send us your questions anytime" : locale === "fr" ? "Envoyez-nous vos questions à tout moment" : "أرسل لنا أسئلتك في أي وقت",
      href: "mailto:info@truenorthconstruction.com",
      available: locale === "en" ? "Response within 24 hours" : locale === "fr" ? "Réponse dans les 24 heures" : "الرد خلال 24 ساعة"
    },
    {
      icon: MessageCircle,
      title: locale === "en" ? "Website" : locale === "fr" ? "Site web" : "موقع إلكتروني",
      value: "truenorthconstruction.com",
      description: locale === "en" ? "Visit our website for more info" : locale === "fr" ? "Visitez notre site web pour plus d'informations" : "قم بزيارة موقعنا للحصول على مزيد من المعلومات",
      href: "https://truenorthconstruction.com",
      available: locale === "en" ? "Online booking available" : locale === "fr" ? "Réservation en ligne disponible" : "الحجز عبر الإنترنت متاح"
    },
    {
      icon: MapPin,
      title: locale === "en" ? "Service Area" : locale === "fr" ? "Zone de service" : "منطقة الخدمة",
      value: "Toronto, Ontario",
      description: locale === "en" ? "Mobile service throughout GTA" : locale === "fr" ? "Service mobile dans tout le GTA" : "خدمة متنقلة في جميع أنحاء GTA",
      href: "#",
      available: locale === "en" ? "We come to you!" : locale === "fr" ? "Nous venons à vous!" : "نحن نأتي إليك!"
    }
  ];

  const serviceHours = [
    {
      day: locale === "en" ? "Monday - Friday" : locale === "fr" ? "Lundi - Vendredi" : "الاثنين - الجمعة",
      hours: "8:00 AM - 6:00 PM"
    },
    {
      day: locale === "en" ? "Saturday" : locale === "fr" ? "Samedi" : "السبت",
      hours: "9:00 AM - 5:00 PM"
    },
    {
      day: locale === "en" ? "Sunday" : locale === "fr" ? "Dimanche" : "الأحد",
      hours: "10:00 AM - 4:00 PM"
    }
  ];

  const faqs = [
    {
      question: locale === "en" ? "Do you provide free estimates?" : locale === "fr" ? "Offrez-vous des estimations gratuites?" : "هل تقدّمون تقديرات مجانية؟",
      answer: locale === "en" 
        ? "Yes, we offer free, no‑obligation estimates for all projects."
        : locale === "fr"
        ? "Oui, nous offrons des estimations gratuites et sans obligation pour tous les projets."
        : "نعم، نقدم تقديرات مجانية وبدون التزام لجميع المشاريع."
    },
    {
      question: locale === "en" ? "How long does a typical detail take?" : locale === "fr" ? "Combien de temps prend un détail typique?" : "كم من الوقت يستغرق التفصيل النموذجي؟",
      answer: locale === "en"
        ? "Service times vary: Basic Detail (2-3 hours), Premium Detail (4-5 hours), Ultimate Detail (6-8 hours)."
        : locale === "fr"
        ? "Les temps de service varient : Détail de base (2-3 heures), Détail premium (4-5 heures), Détail ultime (6-8 heures)."
        : "أوقات الخدمة تختلف: التفصيل الأساسي (2-3 ساعات)، التفصيل المتميز (4-5 ساعات)، التفصيل النهائي (6-8 ساعات)."
    },
    {
      question: locale === "en" ? "What payment methods do you accept?" : locale === "fr" ? "Quels modes de paiement acceptez-vous?" : "ما هي طرق الدفع التي تقبلونها؟",
      answer: locale === "en"
        ? "We accept cash, credit cards (Visa, MasterCard, Amex), debit cards, and e-transfer."
        : locale === "fr"
        ? "Nous acceptons l'argent comptant, les cartes de crédit (Visa, MasterCard, Amex), les cartes de débit et le virement électronique."
        : "نحن نقبل النقد وبطاقات الائتمان (فيزا، ماستركارد، أمكس) وبطاقات الخصم والتحويل الإلكتروني."
    },
    {
      question: locale === "en" ? "Do you provide a warranty?" : locale === "fr" ? "Fournissez‑vous une garantie ?" : "هل تقدمون ضمانًا؟",
      answer: locale === "en"
        ? "Yes! We offer satisfaction guarantees on all services, with product warranties where applicable."
        : locale === "fr"
        ? "Oui ! Nous offrons des garanties de satisfaction sur tous les services, avec garanties de produits lorsque applicable."
        : "نعم! نقدم ضمانات رضا على جميع الخدمات، مع ضمانات للمواد عند الاقتضاء."
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
              {locale === "en" ? "Contact Us" : locale === "fr" ? "Contactez-nous" : "اتصل بنا"}
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              {locale === "en" 
                ? "Get In Touch With TrueNorth Construction"
                : locale === "fr"
                ? "Contactez TrueNorth Construction"
                : "تواصل مع TrueNorth Construction"}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {locale === "en"
                ? "Ready to start your renovation or build? Contact us today to discuss your project or get a free estimate."
                : locale === "fr"
                ? "Prêt à démarrer votre rénovation ou construction ? Contactez‑nous aujourd’hui pour discuter de votre projet ou obtenir une estimation gratuite."
                : "هل أنت مستعد لبدء مشروع التجديد أو البناء؟ تواصل معنا اليوم لمناقشة مشروعك أو للحصول على تقدير مجاني."}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                        <Icon className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="font-semibold text-amber-600">{method.value}</p>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                    <p className="text-xs text-green-600">{method.available}</p>
                    {method.href !== "#" && (
                      <Button variant="outline" size="sm" className="mt-4" asChild>
                        <a href={method.href}>
                          {locale === "en" ? "Contact Now" : locale === "fr" ? "Contactez maintenant" : "اتصل الآن"}
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <ContactForm locale={locale} />
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Service Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-amber-600" />
                    <span>{locale === "en" ? "Service Hours" : locale === "fr" ? "Heures de service" : "ساعات الخدمة"}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {serviceHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-muted last:border-0">
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-amber-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="text-sm text-green-700 dark:text-green-300">
                      {locale === "en" 
                        ? "Emergency services available by appointment"
                        : locale === "fr"
                        ? "Services d'urgence disponibles sur rendez-vous"
                        : "خدمات الطوارئ متاحة بموعد"}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>
                    {locale === "en" ? "Quick Actions" : locale === "fr" ? "Actions rapides" : "إجراءات سريعة"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    {locale === "en" ? "Schedule Appointment" : locale === "fr" ? "Planifier un rendez-vous" : "جدولة موعد"}
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Calculator className="h-4 w-4 mr-2" />
                    {locale === "en" ? "Get Free Quote" : locale === "fr" ? "Obtenir un devis gratuit" : "احصل على عرض سعر مجاني"}
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {locale === "en" ? "Live Chat Support" : locale === "fr" ? "Support de chat en direct" : "دعم الدردشة المباشرة"}
                  </Button>
                </CardContent>
              </Card>

              {/* Service Area Map */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-amber-600" />
                    <span>{locale === "en" ? "Service Area" : locale === "fr" ? "Zone de service" : "منطقة الخدمة"}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500 dark:text-gray-400">
                        {locale === "en" ? "Greater Montreal Area" : locale === "fr" ? "Grand Montréal" : "منطقة مونتريال الكبرى"}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {locale === "en"
                      ? "We serve Montreal, Laval, Longueuil, and surrounding areas. On‑site walk‑throughs available."
                      : locale === "fr"
                      ? "Nous desservons Montréal, Laval, Longueuil et les environs. Visites sur place disponibles."
                      : "نخدم مونتريال ولافال ولونغوي والمناطق المجاورة. زيارات ميدانية متاحة."}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
              {locale === "en" ? "Frequently Asked Questions" : locale === "fr" ? "Questions fréquemment posées" : "الأسئلة المتداولة"}
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              {locale === "en"
                ? "Find answers to common questions about our construction and renovation services."
                : locale === "fr"
                ? "Trouvez des réponses aux questions fréquentes sur nos services de construction et de rénovation."
                : "اعثر على إجابات للأسئلة الشائعة حول خدمات البناء والتجديد لدينا."}
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              {locale === "en" ? "Ready to Book Your Service?" : locale === "fr" ? "Prêt à réserver votre service?" : "هل أنت مستعد لحجز خدمتك؟"}
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              {locale === "en"
                ? "Don’t wait—let’s bring your vision to life. Contact TrueNorth Construction today!"
                : locale === "fr"
                ? "N’attendez pas — concrétisons votre projet. Contactez TrueNorth Construction dès aujourd’hui !"
                : "لا تنتظر — فلنحوّل رؤيتك إلى واقع. تواصل مع TrueNorth Construction اليوم!"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:+16478605500">
                  <Phone className="h-4 w-4 mr-2" />
                  {locale === "en" ? "Call (647) 860-5500" : locale === "fr" ? "Appelez (647) 860-5500" : "اتصل (647) 860-5500"}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:info@truenorthconstruction.com">
                  <Mail className="h-4 w-4 mr-2" />
                  {locale === "en" ? "Email Us" : locale === "fr" ? "Envoyez-nous un email" : "راسلنا"}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
