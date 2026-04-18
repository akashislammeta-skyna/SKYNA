import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContactForm } from "@/hooks/useContactApi";
import type { ContactInput } from "@/types";
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

const SERVICE_OPTIONS = [
  "Mobile App Development",
  "Web Development",
  "Enterprise Software",
  "Custom Software",
  "API & Integrations",
  "Maintenance & Support",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const mutation = useSubmitContactForm();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      service_interest: "",
    },
  });

  const onSubmit = async (data: ContactInput) => {
    try {
      await mutation.mutateAsync(data);
      setSubmitted(true);
      reset();
      toast.success("Message sent! We'll get back to you soon.");
    } catch {
      toast.error(
        "Failed to send message. Please try again or call us directly.",
      );
    }
  };

  return (
    <div data-ocid="contact.page" className="py-16 bg-background min-h-screen">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-4 bg-accent/12 text-accent border-accent/25">
            Contact Us
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Let's Build Something Together
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Have a project in mind? Reach out and our team will get back to you
            within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Info Cards */}
            {[
              {
                icon: Phone,
                label: "Phone",
                value: "01728065402",
                href: "tel:01728065402",
                sub: "Available Mon–Sat, 9am–6pm",
              },
              {
                icon: Mail,
                label: "Email",
                value: "akashislammeta@gmail.com",
                href: "mailto:akashislammeta@gmail.com",
                sub: "We reply within 24 hours",
              },
              {
                icon: MapPin,
                label: "Address",
                value:
                  "Baher Madi Bazar, Daulatpur Thana, Kushtia District, Bangladesh",
                href: undefined,
                sub: "Visit by appointment",
              },
            ].map(({ icon: Icon, label, value, href, sub }, i) => (
              <motion.div
                key={label}
                data-ocid={`contact.info.${i + 1}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:shadow-card transition-smooth"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/12 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-medium text-foreground hover:text-primary transition-smooth break-all"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground">
                      {value}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">{sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Response Promise */}
            <div className="p-5 rounded-xl bg-primary/6 border border-primary/15">
              <div className="flex items-center gap-2.5 mb-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-semibold text-sm text-foreground">
                  Fast Response
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We typically respond to all inquiries within 24 business hours.
                For urgent matters, please call directly.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {submitted ? (
              <div
                data-ocid="contact.success_state"
                className="h-full flex flex-col items-center justify-center text-center p-10 rounded-2xl bg-card border border-border"
              >
                <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground mb-6 max-w-sm">
                  Thank you for reaching out. We'll review your message and get
                  back to you within 24 hours.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  data-ocid="contact.send_another_button"
                  variant="outline"
                  className="font-semibold"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                data-ocid="contact.form"
                className="p-8 rounded-2xl bg-card border border-border space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      data-ocid="contact.name_input"
                      {...register("name", { required: "Name is required" })}
                      className="bg-background border-input"
                    />
                    {errors.name && (
                      <p
                        data-ocid="contact.name_field_error"
                        className="text-xs text-destructive mt-1"
                      >
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      data-ocid="contact.email_input"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email address",
                        },
                      })}
                      className="bg-background border-input"
                    />
                    {errors.email && (
                      <p
                        data-ocid="contact.email_field_error"
                        className="text-xs text-destructive mt-1"
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="01XXXXXXXXX"
                      data-ocid="contact.phone_input"
                      {...register("phone")}
                      className="bg-background border-input"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-sm font-medium">
                      Service Interest{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Controller
                      name="service_interest"
                      control={control}
                      rules={{ required: "Please select a service" }}
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger
                            data-ocid="contact.service_select"
                            className="bg-background border-input"
                          >
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {SERVICE_OPTIONS.map((opt) => (
                              <SelectItem key={opt} value={opt}>
                                {opt}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.service_interest && (
                      <p
                        data-ocid="contact.service_field_error"
                        className="text-xs text-destructive mt-1"
                      >
                        {errors.service_interest.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Project Details <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project — what you need, your timeline, and any specific requirements..."
                    rows={5}
                    data-ocid="contact.message_textarea"
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 20,
                        message:
                          "Please provide more details (min 20 characters)",
                      },
                    })}
                    className="bg-background border-input resize-none"
                  />
                  {errors.message && (
                    <p
                      data-ocid="contact.message_field_error"
                      className="text-xs text-destructive mt-1"
                    >
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || mutation.isPending}
                  data-ocid="contact.submit_button"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-card transition-smooth gap-2"
                >
                  {isSubmitting || mutation.isPending ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-accent-foreground/30 border-t-accent-foreground animate-spin" />
                      <span data-ocid="contact.loading_state">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>

                {mutation.isError && (
                  <p
                    data-ocid="contact.error_state"
                    className="text-xs text-destructive text-center"
                  >
                    Something went wrong. Please try again or call us at
                    01728065402.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
