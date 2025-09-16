import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Star, Calendar, Car } from "lucide-react";

interface ProjectsPageProps {
  locale?: string;
}

const ProjectsPage = ({ locale = "en" }: ProjectsPageProps) => {
  const isRTL = locale === "ar";
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: locale === "en" ? "BMW M3 Paint Correction" : locale === "fr" ? "Correction de peinture BMW M3" : "تصحيح طلاء BMW M3",
      category: "paint-correction",
      service: locale === "en" ? "Paint Correction" : locale === "fr" ? "Correction de peinture" : "تصحيح الطلاء",
      vehicle: "2020 BMW M3",
      date: "March 2024",
      rating: 5,
      beforeImage: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
      description: locale === "en" 
        ? "Complete paint correction removing swirl marks and minor scratches, followed by ceramic coating application."
        : locale === "fr"
        ? "Correction complète de la peinture éliminant les marques de tourbillon et les rayures mineures, suivie de l'application d'un revêtement céramique."
        : "تصحيح كامل للطلاء لإزالة علامات الدوامة والخدوش الطفيفة، متبوعًا بتطبيق الطلاء السيراميكي.",
      testimonial: locale === "en"
        ? "Amazing work! My BMW looks better than when I first bought it. The attention to detail is incredible."
        : locale === "fr"
        ? "Travail incroyable! Ma BMW a l'air mieux que quand je l'ai achetée pour la première fois. L'attention aux détails est incroyable."
        : "عمل مذهل! تبدو BMW الخاصة بي أفضل من عندما اشتريتها لأول مرة. الاهتمام بالتفاصيل لا يصدق.",
      client: "Michael R."
    },
    {
      id: 2,
      title: locale === "en" ? "Mercedes S-Class Interior Detail" : locale === "fr" ? "Détail intérieur Mercedes Classe S" : "تفصيل داخلي مرسيدس الفئة S",
      category: "interior",
      service: locale === "en" ? "Interior Detailing" : locale === "fr" ? "Détaillage intérieur" : "تفصيل داخلي",
      vehicle: "2019 Mercedes S-Class",
      date: "February 2024",
      rating: 5,
      beforeImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
      description: locale === "en"
        ? "Deep interior cleaning including leather conditioning, steam cleaning, and protection application."
        : locale === "fr"
        ? "Nettoyage intérieur en profondeur incluant le conditionnement du cuir, le nettoyage à la vapeur et l'application de protection."
        : "تنظيف داخلي عميق يشمل تكييف الجلد والتنظيف بالبخار وتطبيق الحماية.",
      testimonial: locale === "en"
        ? "The interior looks and smells like new. Professional service with excellent results."
        : locale === "fr"
        ? "L'intérieur a l'air et sent comme neuf. Service professionnel avec d'excellents résultats."
        : "يبدو الداخل ويشم كأنه جديد. خدمة مهنية بنتائج ممتازة.",
      client: "Sarah L."
    },
    {
      id: 3,
      title: locale === "en" ? "Porsche 911 Ceramic Coating" : locale === "fr" ? "Revêtement céramique Porsche 911" : "طلاء سيراميكي بورش 911",
      category: "ceramic-coating",
      service: locale === "en" ? "Ceramic Coating" : locale === "fr" ? "Revêtement céramique" : "طلاء سيراميكي",
      vehicle: "2021 Porsche 911",
      date: "January 2024",
      rating: 5,
      beforeImage: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
      description: locale === "en"
        ? "Multi-stage paint correction followed by premium ceramic coating application with 5-year warranty."
        : locale === "fr"
        ? "Correction de peinture multi-étapes suivie de l'application d'un revêtement céramique premium avec garantie de 5 ans."
        : "تصحيح طلاء متعدد المراحل متبوعًا بتطبيق طلاء سيراميكي متميز مع ضمان 5 سنوات.",
      testimonial: locale === "en"
        ? "Outstanding work! The ceramic coating makes maintenance so much easier and the shine is incredible."
        : locale === "fr"
        ? "Travail exceptionnel! Le revêtement céramique rend l'entretien beaucoup plus facile et la brillance est incroyable."
        : "عمل متميز! الطلاء السيراميكي يجعل الصيانة أسهل بكثير واللمعان لا يصدق.",
      client: "David K."
    },
    {
      id: 4,
      title: locale === "en" ? "Tesla Model S Full Detail" : locale === "fr" ? "Détail complet Tesla Model S" : "تفصيل كامل تسلا موديل S",
      category: "full-detail",
      service: locale === "en" ? "Full Detail Package" : locale === "fr" ? "Forfait détail complet" : "حزمة التفصيل الكاملة",
      vehicle: "2022 Tesla Model S",
      date: "December 2023",
      rating: 5,
      beforeImage: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      description: locale === "en"
        ? "Complete exterior and interior detailing with paint correction and ceramic coating application."
        : locale === "fr"
        ? "Détaillage complet extérieur et intérieur avec correction de peinture et application de revêtement céramique."
        : "تفصيل كامل خارجي وداخلي مع تصحيح الطلاء وتطبيق الطلاء السيراميكي.",
      testimonial: locale === "en"
        ? "Exceptional service from start to finish. My Tesla has never looked better!"
        : locale === "fr"
        ? "Service exceptionnel du début à la fin. Ma Tesla n'a jamais été aussi belle!"
        : "خدمة استثنائية من البداية إلى النهاية. لم تبدو تسلا الخاصة بي أفضل من ذلك!",
      client: "Jennifer M."
    }
  ];

  const categories = [
    { id: "all", name: locale === "en" ? "All Projects" : locale === "fr" ? "Tous les projets" : "جميع المشاريع" },
    { id: "paint-correction", name: locale === "en" ? "Paint Correction" : locale === "fr" ? "Correction de peinture" : "تصحيح الطلاء" },
    { id: "interior", name: locale === "en" ? "Interior Detailing" : locale === "fr" ? "Détaillage intérieur" : "تفصيل داخلي" },
    { id: "ceramic-coating", name: locale === "en" ? "Ceramic Coating" : locale === "fr" ? "Revêtement céramique" : "طلاء سيراميكي" },
    { id: "full-detail", name: locale === "en" ? "Full Detail" : locale === "fr" ? "Détail complet" : "تفصيل كامل" }
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Badge variant="outline" className="px-3 py-1">
              {locale === "en" ? "Our Work" : locale === "fr" ? "Notre travail" : "أعمالنا"}
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              {locale === "en" 
                ? "Before & After Transformations"
                : locale === "fr"
                ? "Transformations avant et après"
                : "تحولات قبل وبعد"}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {locale === "en"
                ? "See the incredible transformations we've achieved for our clients. From paint correction to full details, every project showcases our commitment to excellence."
                : locale === "fr"
                ? "Découvrez les transformations incroyables que nous avons réalisées pour nos clients. De la correction de peinture aux détails complets, chaque projet montre notre engagement envers l'excellence."
                : "شاهد التحولات المذهلة التي حققناها لعملائنا. من تصحيح الطلاء إلى التفاصيل الكاملة، كل مشروع يظهر التزامنا بالتميز."}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          {/* Category Filter */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-12">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-xs md:text-sm">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative">
                  {/* Before/After Images */}
                  <div className="grid grid-cols-2 gap-0">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.beforeImage}
                        alt={`${project.title} - Before`}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge variant="secondary" className="bg-red-100 text-red-800">
                          {locale === "en" ? "Before" : locale === "fr" ? "Avant" : "قبل"}
                        </Badge>
                      </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.afterImage}
                        alt={`${project.title} - After`}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {locale === "en" ? "After" : locale === "fr" ? "Après" : "بعد"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Car className="h-4 w-4" />
                        <span>{project.vehicle}</span>
                        <Calendar className="h-4 w-4 ml-2" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  
                  <Badge variant="outline" className="mb-3">
                    {project.service}
                  </Badge>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="bg-muted/50 p-3 rounded-lg mb-4">
                    <p className="text-sm italic">"{project.testimonial}"</p>
                    <p className="text-xs text-muted-foreground mt-1">- {project.client}</p>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        {locale === "en" ? "View Details" : locale === "fr" ? "Voir les détails" : "عرض التفاصيل"}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <div className="grid gap-6">
                        <div>
                          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                            <span>{project.vehicle}</span>
                            <span>{project.date}</span>
                            <Badge>{project.service}</Badge>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h3 className="font-semibold mb-2">
                              {locale === "en" ? "Before" : locale === "fr" ? "Avant" : "قبل"}
                            </h3>
                            <img
                              src={project.beforeImage}
                              alt="Before"
                              className="w-full aspect-video object-cover rounded-lg"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">
                              {locale === "en" ? "After" : locale === "fr" ? "Après" : "بعد"}
                            </h3>
                            <img
                              src={project.afterImage}
                              alt="After"
                              className="w-full aspect-video object-cover rounded-lg"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold mb-2">
                            {locale === "en" ? "Project Details" : locale === "fr" ? "Détails du projet" : "تفاصيل المشروع"}
                          </h3>
                          <p className="text-muted-foreground">{project.description}</p>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h3 className="font-semibold mb-2">
                            {locale === "en" ? "Client Testimonial" : locale === "fr" ? "Témoignage client" : "شهادة العميل"}
                          </h3>
                          <p className="italic">"{project.testimonial}"</p>
                          <p className="text-sm text-muted-foreground mt-2">- {project.client}</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
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
              {locale === "en" ? "Ready for Your Transformation?" : locale === "fr" ? "Prêt pour votre transformation?" : "هل أنت مستعد لتحولك؟"}
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              {locale === "en"
                ? "Let us transform your vehicle with the same attention to detail and quality you see in our work."
                : locale === "fr"
                ? "Laissez-nous transformer votre véhicule avec la même attention aux détails et la qualité que vous voyez dans notre travail."
                : "دعنا نحول سيارتك بنفس الاهتمام بالتفاصيل والجودة التي تراها في عملنا."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                {locale === "en" ? "Get Your Quote" : locale === "fr" ? "Obtenez votre devis" : "احصل على عرض السعر"}
              </Button>
              <Button size="lg" variant="outline">
                {locale === "en" ? "Call (647) 860-5500" : locale === "fr" ? "Appelez (647) 860-5500" : "اتصل (647) 860-5500"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;