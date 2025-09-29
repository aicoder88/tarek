"use client";

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
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
import { CheckCircle, AlertCircle, Phone, Mail, Hammer, Upload, Calendar, DollarSign, MapPin, FileImage, Ruler, Clock, X } from "lucide-react";

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
  // Quote request specific fields
  requestType: z.enum(["consultation", "quote", "emergency"], {
    required_error: "Please select a request type.",
  }),
  projectAddress: z.string().optional(),
  projectType: z.string().optional(),
  budgetRange: z.string().optional(),
  timelinePreference: z.string().optional(),
  roomDimensions: z.string().optional(),
  specialRequirements: z.string().optional(),
  materialsPreference: z.string().optional(),
  hasPermits: z.string().optional(),
  accessDetails: z.string().optional(),
}).superRefine((data, ctx) => {
  // Additional validation for quote requests
  if (data.requestType === "quote") {
    if (!data.projectAddress || data.projectAddress.trim().length < 5) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Project address is required for quote requests",
        path: ["projectAddress"]
      });
    }
    if (!data.budgetRange) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Budget range is required for quote requests",
        path: ["budgetRange"]
      });
    }
    if (!data.projectType) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Project type is required for quote requests",
        path: ["projectType"]
      });
    }
  }

  // Additional validation for emergency requests
  if (data.requestType === "emergency") {
    if (data.message.length < 20) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please provide detailed information about the emergency",
        path: ["message"]
      });
    }
  }
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
        successMessage: "Your request has been sent successfully! We'll contact you within 24 hours.",
        successQuoteMessage: "Your quote request has been sent! We'll review your details and contact you within 24 hours with a detailed estimate.",
        successEmergencyMessage: "Your emergency request has been received! We'll contact you as soon as possible to address your urgent needs.",
        errorTitle: "Submission Error",
        errorMessage: "There was a problem submitting your request. Please try again or call us directly at (647) 860-5500.",
        errorNetworkMessage: "Network error. Please check your internet connection and try again.",
        errorValidationMessage: "Please check the form for errors and try again.",
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
        successMessage: "Votre demande a été envoyée avec succès! Nous vous contacterons dans les 24 heures.",
        successQuoteMessage: "Votre demande de devis a été envoyée! Nous examinerons vos détails et vous contacterons dans les 24 heures avec une estimation détaillée.",
        successEmergencyMessage: "Votre demande d'urgence a été reçue! Nous vous contacterons dès que possible pour répondre à vos besoins urgents.",
        errorTitle: "Erreur de soumission",
        errorMessage: "Il y a eu un problème lors de la soumission de votre demande. Veuillez réessayer ou nous appeler directement au (647) 860-5500.",
        errorNetworkMessage: "Erreur réseau. Veuillez vérifier votre connexion internet et réessayer.",
        errorValidationMessage: "Veuillez vérifier le formulaire pour les erreurs et réessayer.",
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
        successMessage: "تم إرسال طلبك بنجاح! سنتواصل معك خلال 24 ساعة.",
        successQuoteMessage: "تم إرسال طلب عرض السعر! سنراجع تفاصيلك ونتواصل معك خلال 24 ساعة بتقدير مفصل.",
        successEmergencyMessage: "تم استلام طلب الطوارئ! سنتواصل معك في أقرب وقت ممكن لتلبية احتياجاتك العاجلة.",
        errorTitle: "خطأ في الإرسال",
        errorMessage: "حدثت مشكلة في إرسال طلبك. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة على (647) 860-5500.",
        errorNetworkMessage: "خطأ في الشبكة. يرجى التحقق من اتصال الإنترنت والمحاولة مرة أخرى.",
        errorValidationMessage: "يرجى التحقق من النموذج للأخطاء والمحاولة مرة أخرى.",
      }
    };
    return translations[locale as keyof typeof translations] || translations.en;
  };

  const budgetRanges = [
    { value: "under-5k", label: "Under $5,000" },
    { value: "5k-15k", label: "$5,000 - $15,000" },
    { value: "15k-30k", label: "$15,000 - $30,000" },
    { value: "30k-50k", label: "$30,000 - $50,000" },
    { value: "50k-100k", label: "$50,000 - $100,000" },
    { value: "over-100k", label: "Over $100,000" },
    { value: "not-sure", label: "Not sure yet" },
  ];

  const timelineOptions = [
    { value: "asap", label: "As soon as possible" },
    { value: "1-month", label: "Within 1 month" },
    { value: "2-3months", label: "2-3 months" },
    { value: "3-6months", label: "3-6 months" },
    { value: "6-12months", label: "6-12 months" },
    { value: "over-year", label: "More than a year" },
    { value: "flexible", label: "Flexible timeline" },
  ];

  const projectTypes = [
    { value: "new-construction", label: "New Construction" },
    { value: "full-renovation", label: "Full Home Renovation" },
    { value: "room-renovation", label: "Single Room Renovation" },
    { value: "addition", label: "Home Addition" },
    { value: "repair", label: "Repair Work" },
    { value: "maintenance", label: "Maintenance" },
    { value: "consultation", label: "Consultation Only" },
  ];

  const translations = getTranslations(locale);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [errorType, setErrorType] = useState<"general" | "network" | "validation">("general");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const formContainerRef = useRef<HTMLDivElement>(null);

  const scrollFormIntoView = () => {
    formContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files).filter(file => {
        // Limit file size to 10MB
        if (file.size > 10 * 1024 * 1024) {
          alert(`File ${file.name} is too large. Maximum size is 10MB.`);
          return false;
        }
        // Allow common image and document formats
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!allowedTypes.includes(file.type)) {
          alert(`File ${file.name} is not a supported format. Please use images (JPEG, PNG, GIF, WebP) or documents (PDF, DOC, DOCX).`);
          return false;
        }
        return true;
      });

      setUploadedFiles(prev => [...prev, ...newFiles].slice(0, 5)); // Limit to 5 files
    }
    // Reset the input value so the same file can be selected again if needed
    event.target.value = '';
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      requestType: "consultation" as const,
      projectAddress: "",
      projectType: "",
      budgetRange: "",
      timelinePreference: "",
      roomDimensions: "",
      specialRequirements: "",
      materialsPreference: "",
      hasPermits: "",
      accessDetails: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setFormStatus("idle");

    try {
      // Validate uploaded files if any
      if (uploadedFiles.length > 5) {
        throw new Error('Too many files uploaded. Maximum 5 files allowed.');
      }

      // Get the selected service name from the services array
      const selectedService = services.find(service => service.id === data.service)?.name || data.service;
      const selectedBudget = budgetRanges.find(budget => budget.value === data.budgetRange)?.label || data.budgetRange;
      const selectedTimeline = timelineOptions.find(timeline => timeline.value === data.timelinePreference)?.label || data.timelinePreference;
      const selectedProjectType = projectTypes.find(type => type.value === data.projectType)?.label || data.projectType;

      // EmailJS configuration from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        setErrorType("general");
        throw new Error('EmailJS configuration is missing. Please contact support.');
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
        // Quote request specific data
        request_type: data.requestType,
        project_address: data.projectAddress || 'Not specified',
        project_type: selectedProjectType || 'Not specified',
        budget_range: selectedBudget || 'Not specified',
        timeline_preference: selectedTimeline || 'Not specified',
        room_dimensions: data.roomDimensions || 'Not specified',
        special_requirements: data.specialRequirements || 'None',
        materials_preference: data.materialsPreference || 'Not specified',
        has_permits: data.hasPermits || 'Not specified',
        access_details: data.accessDetails || 'Standard access',
        // File upload information
        files_count: uploadedFiles.length,
        files_info: uploadedFiles.length > 0 ? uploadedFiles.map(file => `${file.name} (${formatFileSize(file.size)})`).join(', ') : 'No files uploaded',
        // Additional context for the email
        subject: `New ${data.requestType === 'quote' ? 'Quote Request' : data.requestType === 'emergency' ? 'Emergency Service Request' : 'Consultation Request'} from ${data.name}`,
        locale: locale,
        submission_date: new Date().toLocaleString(),
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        { publicKey }
      );

      console.log('Email sent successfully:', result);
      setFormStatus("success");
      form.reset();
      setUploadedFiles([]);

      // Scroll to top to show success message
      scrollFormIntoView();
    } catch (error: any) {
      console.error("Form submission error:", error);

      // Determine error type for better user feedback
      if (error instanceof EmailJSResponseStatus) {
        console.error('EmailJS error status:', error.status, error.text);
        setErrorType("network");
      } else if (error?.message?.includes('network') || error?.message?.includes('fetch')) {
        setErrorType("network");
      } else if (error?.message?.includes('validation') || error?.message?.includes('required')) {
        setErrorType("validation");
      } else {
        setErrorType("general");
      }

      setFormStatus("error");

      // Scroll to top to show error message
      scrollFormIntoView();
    } finally {
      setIsSubmitting(false);
    }
  };

  const isRtl = locale === "ar";
  const formDirection = isRtl ? "rtl" : "ltr";

  return (
    <div ref={formContainerRef} className="w-full max-w-2xl mx-auto bg-background" dir={formDirection}>
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
              <AlertDescription>
                {form.watch("requestType") === "quote"
                  ? translations.successQuoteMessage
                  : form.watch("requestType") === "emergency"
                  ? translations.successEmergencyMessage
                  : translations.successMessage}
              </AlertDescription>
            </Alert>
          )}

          {formStatus === "error" && (
            <Alert className="mb-6 bg-red-50 text-red-800 border-red-200">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>{translations.errorTitle}</AlertTitle>
              <AlertDescription>
                {errorType === "network"
                  ? translations.errorNetworkMessage
                  : errorType === "validation"
                  ? translations.errorValidationMessage
                  : translations.errorMessage}
              </AlertDescription>
            </Alert>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Request Type Selection */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
                <FormField
                  control={form.control}
                  name="requestType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold flex items-center gap-2">
                        <Hammer className="h-5 w-5 text-amber-600" />
                        What can we help you with?
                      </FormLabel>
                      <FormControl>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                          {[
                            { value: "consultation", label: "Free Consultation", desc: "Discuss your project ideas", icon: Phone },
                            { value: "quote", label: "Detailed Quote", desc: "Get a comprehensive estimate", icon: DollarSign },
                            { value: "emergency", label: "Emergency Service", desc: "Urgent repair needs", icon: AlertCircle }
                          ].map((option) => {
                            const Icon = option.icon;
                            return (
                              <div
                                key={option.value}
                                className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                                  field.value === option.value
                                    ? "border-amber-500 bg-amber-100 dark:bg-amber-900/30"
                                    : "border-gray-200 dark:border-gray-700 hover:border-amber-300"
                                }`}
                                onClick={() => field.onChange(option.value)}
                              >
                                <input
                                  type="radio"
                                  value={option.value}
                                  checked={field.value === option.value}
                                  onChange={field.onChange}
                                  className="sr-only"
                                />
                                <div className="flex items-start space-x-3">
                                  <Icon className={`h-6 w-6 mt-1 ${field.value === option.value ? "text-amber-600" : "text-gray-400"}`} />
                                  <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">{option.label}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{option.desc}</p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Basic Contact Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b pb-2">Contact Information</h3>
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
              </div>

              {/* Project Details - Show for quote and consultation requests */}
              {(form.watch("requestType") === "quote" || form.watch("requestType") === "consultation") && (
                <div className="space-y-6 bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b pb-2 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-amber-600" />
                    Project Details
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="projectAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="123 Main St, Toronto, ON"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Where will the work be performed?
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {projectTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="budgetRange"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4" />
                            Budget Range
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {budgetRanges.map((budget) => (
                                <SelectItem key={budget.value} value={budget.value}>
                                  {budget.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            This helps us provide accurate estimates
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="timelinePreference"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            Preferred Timeline
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="When do you want to start?" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {timelineOptions.map((timeline) => (
                                <SelectItem key={timeline.value} value={timeline.value}>
                                  {timeline.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="roomDimensions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Ruler className="h-4 w-4" />
                            Room Dimensions
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g., 12ft x 10ft or 3.6m x 3m"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Approximate size of the area to be worked on
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="hasPermits"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Permits Required?</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Do you need permits?" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="not-sure">Not sure</SelectItem>
                              <SelectItem value="yes-help-needed">Yes, need help obtaining</SelectItem>
                              <SelectItem value="yes-have-them">Yes, already have them</SelectItem>
                              <SelectItem value="no">No permits required</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}

              {/* Additional Details */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b pb-2">Additional Details</h3>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{translations.messageLabel}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={form.watch("requestType") === "quote" ? "Describe your project in detail, including any specific requirements, materials preferences, or design ideas..." : translations.messagePlaceholder}
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {(form.watch("requestType") === "quote" || form.watch("requestType") === "consultation") && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="materialsPreference"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Materials Preference</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="e.g., hardwood floors, granite countertops, specific brands..."
                              className="min-h-[80px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="accessDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Access & Special Considerations</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="e.g., narrow stairs, apartment building, pets, working hours restrictions..."
                              className="min-h-[80px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
              </div>

              {/* File Upload Section - Show for quote and consultation requests */}
              {(form.watch("requestType") === "quote" || form.watch("requestType") === "consultation") && (
                <div className="space-y-6 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b pb-2 flex items-center gap-2">
                    <FileImage className="h-5 w-5 text-blue-600" />
                    Upload Photos & Documents
                  </h3>

                  <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    <p>Help us understand your project better by uploading:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
                      <li>Current photos of the space</li>
                      <li>Inspiration images or design ideas</li>
                      <li>Floor plans or technical drawings</li>
                      <li>Product specifications or material samples</li>
                    </ul>
                  </div>

                  {/* File Upload Input */}
                  <div className="relative">
                    <input
                      type="file"
                      multiple
                      accept="image/*,.pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="sr-only"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-blue-300 dark:border-blue-600 rounded-lg cursor-pointer bg-blue-50 dark:bg-blue-900/10 hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-colors"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="h-8 w-8 text-blue-500 mb-2" />
                        <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">
                          Click to upload files
                        </p>
                        <p className="text-xs text-blue-600 dark:text-blue-400">
                          Images, PDFs, DOC files (Max 10MB each, up to 5 files)
                        </p>
                      </div>
                    </label>
                  </div>

                  {/* Uploaded Files List */}
                  {uploadedFiles.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">Uploaded Files:</h4>
                      <div className="space-y-2">
                        {uploadedFiles.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                          >
                            <div className="flex items-center space-x-3">
                              <FileImage className="h-5 w-5 text-gray-400" />
                              <div>
                                <p className="text-sm font-medium text-gray-900 dark:text-white truncate max-w-48">
                                  {file.name}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  {formatFileSize(file.size)}
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                            >
                              <X className="h-4 w-4 text-gray-500 hover:text-red-500" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
              Why Choose TrueNorth Construction?
                </h3>
                <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                  <li>• Licensed & insured professionals</li>
                  <li>• Free estimates and transparent pricing</li>
                  <li>• Quality materials & craftsmanship</li>
                  <li>• Serving Greater Toronto Area (GTA) and surrounding areas</li>
                </ul>
              </div>

              <div className="flex justify-end">
                <Button type="submit" disabled={isSubmitting} className="px-8 bg-amber-600 hover:bg-amber-700">
                  {isSubmitting ? "Submitting..." :
                   form.watch("requestType") === "quote" ? "Request Quote" :
                   form.watch("requestType") === "emergency" ? "Submit Emergency Request" :
                   "Schedule Consultation"}
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
