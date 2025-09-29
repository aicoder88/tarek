"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, AlertCircle, Phone, Mail, Hammer } from "lucide-react";

// Define the form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  service: z.string().min(1, {
    message: "Please select a service.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  locale?: string;
  services?: Array<{ id: string; name: string }>;
}

const ContactForm: React.FC<ContactFormProps> = ({
  locale = "en",
  services = [
    { id: "kitchen-remodeling", name: "Kitchen Remodeling" },
    { id: "bathroom-renovation", name: "Bathroom Renovation" },
    { id: "flooring", name: "Flooring" },
    { id: "basement-finishing", name: "Basement Finishing" },
    { id: "roofing-siding", name: "Roofing & Siding" },
    { id: "painting-drywall", name: "Painting & Drywall" },
    { id: "outdoor-landscaping", name: "Outdoor & Landscaping" },
    { id: "general-contracting", name: "General Contracting & Additions" },
    { id: "prefab-structures", name: "Prefabricated Structures" },
    { id: "other", name: "Other" },
  ],
}) => {
  const getTranslations = (locale: string) => {
    const translations = {
      en: {
        title: "Contact TrueNorth Construction",
        description: "Fill out the form below and we'll get back to you within 24 hours to discuss your construction or renovation project.",
        nameLabel: "Name",
        namePlaceholder: "Enter your name",
        emailLabel: "Email",
        emailPlaceholder: "Enter your email",
        phoneLabel: "Phone",
        phonePlaceholder: "Enter your phone number",
        serviceLabel: "Service Needed",
        servicePlaceholder: "Select a service",
        messageLabel: "Message",
        messagePlaceholder: "Tell us about your project and service needs",
        submitButton: "Get Free Quote",
        successTitle: "Thank you!",
        successMessage: "Your message has been sent. We'll contact you within 24 hours with a personalized quote.",
        errorTitle: "Error",
        errorMessage: "There was a problem submitting your form. Please try again or call us at (647) 860-5500.",
      },
      fr: {
        title: "Contactez TrueNorth Construction",
        description: "Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24 heures pour discuter de votre projet de construction ou de rénovation.",
        nameLabel: "Nom",
        namePlaceholder: "Entrez votre nom",
        emailLabel: "Email",
        emailPlaceholder: "Entrez votre email",
        phoneLabel: "Téléphone",
        phonePlaceholder: "Entrez votre numéro de téléphone",
        serviceLabel: "Service requis",
        servicePlaceholder: "Sélectionnez un service",
        messageLabel: "Message",
        messagePlaceholder: "Parlez-nous de votre projet et de vos besoins en services",
        submitButton: "Obtenir un devis gratuit",
        successTitle: "Merci!",
        successMessage: "Votre message a été envoyé. Nous vous contacterons dans les 24 heures avec un devis personnalisé.",
        errorTitle: "Erreur",
        errorMessage: "Il y a eu un problème lors de la soumission de votre formulaire. Veuillez réessayer ou nous appeler au (647) 860-5500.",
      },
      ar: {
        title: "اتصل بـ TrueNorth Construction",
        description: "املأ النموذج أدناه وسنعاود الاتصال بك خلال 24 ساعة لمناقشة مشروع البناء أو التجديد الخاص بك.",
        nameLabel: "الاسم",
        namePlaceholder: "أدخل اسمك",
        emailLabel: "البريد الإلكتروني",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        phoneLabel: "الهاتف",
        phonePlaceholder: "أدخل رقم هاتفك",
        serviceLabel: "الخدمة المطلوبة",
        servicePlaceholder: "اختر خدمة",
        messageLabel: "الرسالة",
        messagePlaceholder: "أخبرنا عن مشروعك واحتياجاتك من الخدمات",
        submitButton: "احصل على عرض سعر مجاني",
        successTitle: "شكرًا لك!",
        successMessage: "تم إرسال رسالتك. سنتواصل معك خلال 24 ساعة بعرض سعر مخصص.",
        errorTitle: "خطأ",
        errorMessage: "حدثت مشكلة في إرسال النموذج. يرجى المحاولة مرة أخرى أو الاتصال بنا على (647) 860-5500.",
      }
    };
    return translations[locale as keyof typeof translations] || translations.en;
  };

  const translations = getTranslations(locale);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // Get the selected service name from the services array
      const selectedService = services.find(service => service.id === data.service)?.name || data.service;

      // EmailJS configuration from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      // Prepare email template parameters
      const templateParams = {
        to_email: 'iptmim@gmail.com',
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        service: selectedService,
        message: data.message,
        reply_to: data.email,
        // Additional context for the email
        subject: `New Contact Form Submission from ${data.name}`,
        locale: locale,
        submission_date: new Date().toLocaleString(),
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', result);
      setFormStatus("success");
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isRtl = locale === "ar";
  const formDirection = isRtl ? "rtl" : "ltr";

  return (
    <div className="w-full max-w-2xl mx-auto bg-background" dir={formDirection}>
      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center space-x-2">
            <Hammer className="h-6 w-6 text-amber-600" />
            <span>{translations.title}</span>
          </CardTitle>
          <CardDescription>{translations.description}</CardDescription>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>(647) 860-5500</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>info@truenorthconstruction.com</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {formStatus === "success" && (
            <Alert className="mb-6 bg-green-50 text-green-800 border-green-200">
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>{translations.successTitle}</AlertTitle>
              <AlertDescription>{translations.successMessage}</AlertDescription>
            </Alert>
          )}

          {formStatus === "error" && (
            <Alert className="mb-6 bg-red-50 text-red-800 border-red-200">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>{translations.errorTitle}</AlertTitle>
              <AlertDescription>{translations.errorMessage}</AlertDescription>
            </Alert>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{translations.nameLabel}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={translations.namePlaceholder}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{translations.emailLabel}</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={translations.emailPlaceholder}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{translations.phoneLabel}</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder={translations.phonePlaceholder}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{translations.serviceLabel}</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              placeholder={translations.servicePlaceholder}
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.id} value={service.id}>
                              {service.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{translations.messageLabel}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={translations.messagePlaceholder}
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
              Why Choose TrueNorth Construction?
                </h3>
                <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                  <li>• Licensed & insured professionals</li>
                  <li>• Free estimates and transparent pricing</li>
                  <li>• Quality materials & craftsmanship</li>
                  <li>• Serving Greater Montreal and surrounding areas</li>
                </ul>
              </div>

              <div className="flex justify-end">
                <Button type="submit" disabled={isSubmitting} className="px-8 bg-amber-600 hover:bg-amber-700">
                  {isSubmitting ? "Submitting..." : translations.submitButton}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
