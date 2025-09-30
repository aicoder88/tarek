"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, AlertCircle, Phone, Mail, Hammer, Calendar, DollarSign, MapPin, Ruler, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

type ValidationMessages = {
  nameMin: string;
  email: string;
  phone: string;
  service: string;
  messageMin: string;
  requestType: string;
  projectAddress: string;
  budgetRange: string;
  projectType: string;
  timeline: string;
  emergencyDetails: string;
};

const createFormSchema = (messages: ValidationMessages) =>
  z
    .object({
      name: z.string().min(2, { message: messages.nameMin }),
      email: z.string().email({ message: messages.email }),
      phone: z.string().min(10, { message: messages.phone }),
      service: z.string().min(1, { message: messages.service }),
      message: z.string().min(10, { message: messages.messageMin }),
      requestType: z.enum(["consultation", "quote", "emergency"], {
        required_error: messages.requestType,
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
    })
    .superRefine((data, ctx) => {
      if (data.requestType === "quote") {
        if (!data.projectAddress || data.projectAddress.trim().length < 5) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: messages.projectAddress,
            path: ["projectAddress"],
          });
        }
        if (!data.budgetRange) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: messages.budgetRange,
            path: ["budgetRange"],
          });
        }
        if (!data.projectType) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: messages.projectType,
            path: ["projectType"],
          });
        }
        if (!data.timelinePreference) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: messages.timeline,
            path: ["timelinePreference"],
          });
        }
      }

      if (data.requestType === "emergency") {
        if (data.message.trim().length < 20) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: messages.emergencyDetails,
            path: ["message"],
          });
        }
      }
    });

type ContactFormSchema = ReturnType<typeof createFormSchema>;
type FormValues = z.infer<ContactFormSchema>;

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
  const t = useTranslations("contact_form");
  const tServices = useTranslations("services");

  const validationMessages = useMemo(
    () => ({
      nameMin: t("validation.name_min"),
      email: t("validation.email"),
      phone: t("validation.phone"),
      service: t("validation.service"),
      messageMin: t("validation.message_min"),
      requestType: t("validation.request_type"),
      projectAddress: t("validation.project_address"),
      budgetRange: t("validation.budget_range"),
      projectType: t("validation.project_type"),
      timeline: t("validation.timeline"),
      emergencyDetails: t("validation.emergency_details"),
    }),
    [t]
  );

  const schema = useMemo(() => createFormSchema(validationMessages), [validationMessages]);

  const serviceOptions = useMemo(
    () => {
      const serviceLabels: Record<string, string> = {
        "kitchen-remodeling": tServices("kitchen.title"),
        "bathroom-renovation": tServices("bathroom.title"),
        flooring: tServices("flooring.title"),
        "basement-finishing": tServices("basement.title"),
        "roofing-siding": tServices("roofing.title"),
        "painting-drywall": tServices("painting.title"),
        "outdoor-landscaping": tServices("outdoor.title"),
        "general-contracting": tServices("general.title"),
        "prefab-structures": tServices("prefab.title"),
      };

      return services.map((service) => ({
        id: service.id,
        label: serviceLabels[service.id] ?? t("services.other"),
      }));
    },
    [services, t, tServices]
  );

  const projectTypes = useMemo(
    () => [
      { value: "new-construction", label: t("project_types.new-construction") },
      { value: "full-renovation", label: t("project_types.full-renovation") },
      { value: "room-renovation", label: t("project_types.room-renovation") },
      { value: "addition", label: t("project_types.addition") },
      { value: "repair", label: t("project_types.repair") },
      { value: "maintenance", label: t("project_types.maintenance") },
      { value: "consultation", label: t("project_types.consultation") },
    ],
    [t]
  );

  const budgetRanges = useMemo(
    () => [
      { value: "under-5k", label: t("budget_ranges.under-5k") },
      { value: "5k-15k", label: t("budget_ranges.5k-15k") },
      { value: "15k-30k", label: t("budget_ranges.15k-30k") },
      { value: "30k-50k", label: t("budget_ranges.30k-50k") },
      { value: "50k-100k", label: t("budget_ranges.50k-100k") },
      { value: "over-100k", label: t("budget_ranges.over-100k") },
      { value: "not-sure", label: t("budget_ranges.not-sure") },
    ],
    [t]
  );

  const timelineOptions = useMemo(
    () => [
      { value: "asap", label: t("timeline_options.asap") },
      { value: "1-month", label: t("timeline_options.1-month") },
      { value: "2-3months", label: t("timeline_options.2-3months") },
      { value: "3-6months", label: t("timeline_options.3-6months") },
      { value: "6-12months", label: t("timeline_options.6-12months") },
      { value: "over-year", label: t("timeline_options.over-year") },
      { value: "flexible", label: t("timeline_options.flexible") },
    ],
    [t]
  );

  const permitOptions = useMemo(
    () => [
      { value: "not-sure", label: t("permit_options.not-sure") },
      { value: "yes-help-needed", label: t("permit_options.yes-help-needed") },
      { value: "yes-have-them", label: t("permit_options.yes-have-them") },
      { value: "no", label: t("permit_options.no") },
    ],
    [t]
  );

  type RequestOption = {
    value: "consultation" | "quote" | "emergency";
    label: string;
    description: string;
    icon: LucideIcon;
  };

  const requestOptions = useMemo<RequestOption[]>(
    () => [
      {
        value: "consultation",
        label: t("request.options.consultation.label"),
        description: t("request.options.consultation.description"),
        icon: Phone,
      },
      {
        value: "quote",
        label: t("request.options.quote.label"),
        description: t("request.options.quote.description"),
        icon: DollarSign,
      },
      {
        value: "emergency",
        label: t("request.options.emergency.label"),
        description: t("request.options.emergency.description"),
        icon: AlertCircle,
      },
    ],
    [t]
  );

  const trustItems = useMemo(() => t.raw("trust.items") as string[], [t]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [errorType, setErrorType] = useState<"general" | "network" | "validation">("general");
  const formContainerRef = useRef<HTMLDivElement>(null);

  // Initialize EmailJS with public key
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
      console.log('EmailJS initialized with public key');
    }
  }, []);

  const scrollFormIntoView = () => {
    formContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
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
      // Get the selected labels for email context
      const selectedService = serviceOptions.find(service => service.id === data.service)?.label || data.service;
      const selectedBudget = budgetRanges.find(budget => budget.value === data.budgetRange)?.label || data.budgetRange;
      const selectedTimeline = timelineOptions.find(timeline => timeline.value === data.timelinePreference)?.label || data.timelinePreference;
      const selectedProjectType = projectTypes.find(type => type.value === data.projectType)?.label || data.projectType;
      const selectedPermits = permitOptions.find(option => option.value === data.hasPermits)?.label || data.hasPermits;

      // EmailJS configuration from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      console.log('EmailJS Config:', {
        serviceId: serviceId ? 'present' : 'missing',
        templateId: templateId ? 'present' : 'missing',
        publicKey: publicKey ? 'present' : 'missing'
      });

      if (!serviceId || !templateId || !publicKey) {
        setErrorType("general");
        throw new Error('EmailJS configuration is missing. Please contact support.');
      }

      // Format all form data into a single message
      const requestTypeLabel = data.requestType === 'quote' ? 'Quote Request' :
                               data.requestType === 'emergency' ? 'Emergency Service Request' :
                               'Consultation Request';

      let formattedMessage = `REQUEST TYPE: ${requestTypeLabel}\n\n`;
      formattedMessage += `=== CONTACT INFORMATION ===\n`;
      formattedMessage += `Name: ${data.name}\n`;
      formattedMessage += `Email: ${data.email}\n`;
      formattedMessage += `Phone: ${data.phone}\n`;
      formattedMessage += `Service: ${selectedService}\n\n`;

      if (data.requestType === 'quote' || data.requestType === 'consultation') {
        formattedMessage += `=== PROJECT DETAILS ===\n`;
        if (data.projectAddress) formattedMessage += `Project Address: ${data.projectAddress}\n`;
        if (data.projectType) formattedMessage += `Project Type: ${selectedProjectType}\n`;
        if (data.budgetRange) formattedMessage += `Budget Range: ${selectedBudget}\n`;
        if (data.timelinePreference) formattedMessage += `Timeline: ${selectedTimeline}\n`;
        if (data.roomDimensions) formattedMessage += `Room Dimensions: ${data.roomDimensions}\n`;
        if (data.hasPermits) formattedMessage += `Permits: ${selectedPermits}\n`;
        formattedMessage += `\n`;
      }

      if (data.materialsPreference || data.accessDetails || data.specialRequirements) {
        formattedMessage += `=== ADDITIONAL DETAILS ===\n`;
        if (data.materialsPreference) formattedMessage += `Materials Preference: ${data.materialsPreference}\n`;
        if (data.accessDetails) formattedMessage += `Access Details: ${data.accessDetails}\n`;
        if (data.specialRequirements) formattedMessage += `Special Requirements: ${data.specialRequirements}\n`;
        formattedMessage += `\n`;
      }

      formattedMessage += `=== MESSAGE ===\n${data.message}\n\n`;
      formattedMessage += `---\n`;
      formattedMessage += `Locale: ${locale}\n`;
      formattedMessage += `Submitted: ${new Date().toLocaleString()}\n`;

      // Prepare email template parameters (simplified for EmailJS template)
      const templateParams = {
        name: data.name,
        time: new Date().toLocaleString(),
        message: formattedMessage,
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      console.log('Email sent successfully:', result);
      setFormStatus("success");
      form.reset();

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
  const requestType = form.watch("requestType");
  const submitLabel = isSubmitting
    ? t("buttons.submit.loading")
    : requestType === "quote"
      ? t("buttons.submit.quote")
      : requestType === "emergency"
        ? t("buttons.submit.emergency")
        : t("buttons.submit.consultation");
  const successMessage = requestType === "quote"
    ? t("success.quote")
    : requestType === "emergency"
      ? t("success.emergency")
      : t("success.general");
  const errorMessage = errorType === "network"
    ? t("error.network")
    : errorType === "validation"
      ? t("error.validation")
      : t("error.general");
  const contactPhone = t("contact_phone");
  const contactEmail = t("contact_email");

  return (
    <div ref={formContainerRef} className="w-full max-w-2xl mx-auto bg-background" dir={formDirection}>
      <Card className="border shadow-sm">
        <CardHeader className="space-y-3 sm:space-y-4">
          <CardTitle className="text-xl sm:text-2xl font-bold flex items-center space-x-2">
            <Hammer className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
            <span>{t("title")}</span>
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">{t("description")}</CardDescription>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>{contactPhone}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>{contactEmail}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {formStatus === "success" && (
            <Alert className="mb-6 bg-green-50 text-green-800 border-green-200">
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>{t("success.title")}</AlertTitle>
              <AlertDescription>{successMessage}</AlertDescription>
            </Alert>
          )}

          {formStatus === "error" && (
            <Alert className="mb-6 bg-red-50 text-red-800 border-red-200">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>{t("error.title")}</AlertTitle>
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Request Type Selection */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-4 sm:p-6 rounded-xl border border-red-200 dark:border-red-800">
                <FormField
                  control={form.control}
                  name="requestType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base sm:text-lg font-semibold flex items-center gap-2">
                        <Hammer className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                        {t("request.heading")}
                      </FormLabel>
                      <FormControl>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-3">
                          {requestOptions.map((option) => {
                            const Icon = option.icon;
                            return (
                              <div
                                key={option.value}
                                className={`relative border-2 rounded-lg p-3 sm:p-4 cursor-pointer transition-all hover:shadow-md active:scale-95 ${
                                  field.value === option.value
                                    ? "border-red-500 bg-red-100 dark:bg-red-900/30"
                                    : "border-gray-200 dark:border-gray-700 hover:border-red-300"
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
                                <div className="flex items-start gap-2 sm:gap-3">
                                  <Icon className={`h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 mt-0.5 ${field.value === option.value ? "text-red-600" : "text-gray-400"}`} />
                                  <div className="flex-1 min-w-0 overflow-hidden">
                                    <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white leading-tight mb-1 break-words">{option.label}</h3>
                                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-snug break-words">{option.description}</p>
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
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white border-b pb-2">{t("sections.contact")}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("fields.name.label")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("fields.name.placeholder")}
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
                        <FormLabel>{t("fields.email.label")}</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder={t("fields.email.placeholder")}
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
                        <FormLabel>{t("fields.phone.label")}</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder={t("fields.phone.placeholder")}
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
                        <FormLabel>{t("fields.service.label")}</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={t("fields.service.placeholder")} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {serviceOptions.map((service) => (
                              <SelectItem key={service.id} value={service.id}>
                                {service.label}
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
              {(requestType === "quote" || requestType === "consultation") && (
                <div className="space-y-4 sm:space-y-6 bg-gray-50 dark:bg-gray-800/50 p-4 sm:p-6 rounded-xl border">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white border-b pb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                    {t("sections.project")}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <FormField
                      control={form.control}
                      name="projectAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("fields.project_address.label")}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t("fields.project_address.placeholder")}
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            {t("fields.project_address.description")}
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
                          <FormLabel>{t("fields.project_type.label")}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={t("fields.project_type.placeholder")} />
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
                            {t("fields.budget_range.label")}
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={t("fields.budget_range.placeholder")} />
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
                          <FormDescription>{t("fields.budget_range.description")}</FormDescription>
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
                            {t("fields.timeline.label")}
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={t("fields.timeline.placeholder")} />
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
                            {t("fields.room_dimensions.label")}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t("fields.room_dimensions.placeholder")}
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>{t("fields.room_dimensions.description")}</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="hasPermits"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("fields.permits.label")}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={t("fields.permits.placeholder")} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {permitOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.label}
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
              )}

              {/* Additional Details */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white border-b pb-2">{t("sections.additional")}</h3>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("fields.message.label")}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={requestType === "quote" ? t("fields.message.quote_placeholder") : t("fields.message.placeholder")}
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {(requestType === "quote" || requestType === "consultation") && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="materialsPreference"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("fields.materials.label")}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t("fields.materials.placeholder")}
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
                          <FormLabel>{t("fields.access.label")}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t("fields.access.placeholder")}
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

              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                  {t("trust.title")}
                </h3>
                <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc pl-4">
                  {trustItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold bg-red-600 hover:bg-red-700 active:scale-95 transition-all"
                >
                  {submitLabel}
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
