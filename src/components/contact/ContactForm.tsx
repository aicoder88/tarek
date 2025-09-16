import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { CheckCircle, AlertCircle, Phone, Mail, Car } from "lucide-react";

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
  language?: "en" | "fr" | "ar";
  services?: Array<{ id: string; name: string }>;
  translations?: {
    title: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    servicePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    successTitle: string;
    successMessage: string;
    errorTitle: string;
    errorMessage: string;
  };
}

const ContactForm: React.FC<ContactFormProps> = ({
  language = "en",
  services = [
    { id: "exterior-wash", name: "Exterior Wash & Wax" },
    { id: "interior-detail", name: "Interior Detailing" },
    { id: "ceramic-coating", name: "Ceramic Coating" },
    { id: "paint-correction", name: "Paint Correction" },
    { id: "full-detail", name: "Full Detail Package" },
    { id: "headlight-restoration", name: "Headlight Restoration" },
    { id: "engine-cleaning", name: "Engine Bay Cleaning" },
    { id: "mobile-service", name: "Mobile Service" },
    { id: "other", name: "Other" },
  ],
  translations = {
    title: "Contact InstaCar Spa",
    description:
      "Fill out the form below and we'll get back to you within 24 hours to discuss your auto detailing needs.",
    nameLabel: "Name",
    namePlaceholder: "Enter your name",
    emailLabel: "Email",
    emailPlaceholder: "Enter your email",
    phoneLabel: "Phone",
    phonePlaceholder: "Enter your phone number",
    serviceLabel: "Service Needed",
    servicePlaceholder: "Select a service",
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your vehicle and detailing needs",
    submitButton: "Get Free Quote",
    successTitle: "Thank you!",
    successMessage:
      "Your message has been sent. We'll contact you within 24 hours with a personalized quote.",
    errorTitle: "Error",
    errorMessage: "There was a problem submitting your form. Please try again or call us at (647) 860-5500.",
  },
}) => {
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
      // Simulate API call with a timeout
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real implementation, you would send the data to your backend
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      //
      // if (!response.ok) throw new Error('Failed to submit');

      setFormStatus("success");
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isRtl = language === "ar";
  const formDirection = isRtl ? "rtl" : "ltr";

  return (
    <div className="w-full max-w-2xl mx-auto bg-background" dir={formDirection}>
      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center space-x-2">
            <Car className="h-6 w-6 text-amber-600" />
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
              <span>info@instacarspa.com</span>
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
                  Why Choose InstaCar Spa?
                </h3>
                <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                  <li>• Mobile service - we come to you!</li>
                  <li>• Eco-friendly products & methods</li>
                  <li>• Fully insured & satisfaction guaranteed</li>
                  <li>• Serving Greater Toronto Area</li>
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