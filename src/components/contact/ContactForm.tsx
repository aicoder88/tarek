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
  Form,
  FormControl,
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
import { CheckCircle, AlertCircle, Phone, Mail, Hammer } from "lucide-react";
import { useTranslations } from "next-intl";

type ValidationMessages = {
  nameMin: string;
  email: string;
  messageMin: string;
};

const createFormSchema = (messages: ValidationMessages) =>
  z.object({
    name: z.string().min(2, { message: messages.nameMin }),
    email: z.string().email({ message: messages.email }),
    message: z.string().min(10, { message: messages.messageMin }),
  });

type ContactFormSchema = ReturnType<typeof createFormSchema>;
type FormValues = z.infer<ContactFormSchema>;

interface ContactFormProps {
  locale?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ locale = "en" }) => {
  const t = useTranslations("contact_form");

  const validationMessages = useMemo(
    () => ({
      nameMin: t("validation.name_min"),
      email: t("validation.email"),
      messageMin: t("validation.message_min"),
    }),
    [t]
  );

  const schema = useMemo(() => createFormSchema(validationMessages), [validationMessages]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [errorType, setErrorType] = useState<"general" | "network" | "validation">("general");
  const formContainerRef = useRef<HTMLDivElement>(null);

  // Initialize EmailJS with public key
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    console.log('Public key from env:', publicKey ? `${publicKey.substring(0, 5)}...` : 'MISSING');
    if (publicKey) {
      emailjs.init(publicKey);
      console.log('EmailJS initialized successfully');
    } else {
      console.error('EmailJS public key is missing!');
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
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setFormStatus("idle");

    try {
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

      // Format message for email
      const formattedMessage = `
=== CONTACT REQUEST ===

Name: ${data.name}
Email: ${data.email}

=== MESSAGE ===
${data.message}

---
Locale: ${locale}
Submitted: ${new Date().toLocaleString()}
      `.trim();

      // Prepare email template parameters
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
    } catch (error: unknown) {
      console.error("Form submission error:", error);

      // Determine error type for better user feedback
      if (error instanceof EmailJSResponseStatus) {
        console.error('EmailJS error status:', error.status, error.text);
        setErrorType("network");
      } else if (error instanceof Error) {
        if (error.message.includes('network') || error.message.includes('fetch')) {
          setErrorType("network");
        } else if (error.message.includes('validation') || error.message.includes('required')) {
          setErrorType("validation");
        } else {
          setErrorType("general");
        }
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
  const submitLabel = isSubmitting ? t("buttons.submit.loading") : "Send Message";
  const successMessage = t("success.general");
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("fields.message.label")}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t("fields.message.placeholder")}
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
