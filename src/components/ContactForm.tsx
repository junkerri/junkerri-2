import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setSubmitMessage(result.message);
        reset();
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label htmlFor="firstName" className="text-base font-medium">
            First Name
          </Label>
          <Input
            id="firstName"
            {...register("firstName")}
            className={`transition-colors duration-200 hover:border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 ${
              errors.firstName ? "border-destructive" : ""
            }`}
          />
          {errors.firstName && (
            <p className="text-sm text-destructive mt-2">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="space-y-3">
          <Label htmlFor="lastName" className="text-base font-medium">
            Last Name
          </Label>
          <Input
            id="lastName"
            {...register("lastName")}
            className={`transition-colors duration-200 hover:border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 ${
              errors.lastName ? "border-destructive" : ""
            }`}
          />
          {errors.lastName && (
            <p className="text-sm text-destructive mt-2">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <Label htmlFor="email" className="text-base font-medium">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          className={`transition-colors duration-200 hover:border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 ${
            errors.email ? "border-destructive" : ""
          }`}
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-2">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-3">
        <Label htmlFor="subject" className="text-base font-medium">
          Subject
        </Label>
        <select
          id="subject"
          {...register("subject")}
          className={`w-full px-3 py-2 border rounded-md bg-background text-foreground transition-colors duration-200 hover:border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus-visible:outline-none ${
            errors.subject ? "border-destructive" : "border-input"
          }`}
        >
          <option value="">Select a subject</option>
          <option value="collaboration">Collaboration</option>
          <option value="commission">Art Commission</option>
          <option value="web-project">Web Project</option>
          <option value="music">Music</option>
          <option value="general">General Inquiry</option>
        </select>
        {errors.subject && (
          <p className="text-sm text-destructive mt-2">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div className="space-y-3">
        <Label htmlFor="message" className="text-base font-medium">
          Message
        </Label>
        <Textarea
          id="message"
          rows={6}
          placeholder="Tell me about your project or inquiry..."
          {...register("message")}
          className={`transition-colors duration-200 hover:border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 ${
            errors.message ? "border-destructive" : ""
          }`}
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-2">
            {errors.message.message}
          </p>
        )}
      </div>

      {submitStatus === "success" && (
        <div className="p-4 bg-green-950/50 border border-green-500/30 rounded-md">
          <p className="text-green-400">{submitMessage}</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-950/50 border border-red-500/30 rounded-md">
          <p className="text-red-400">{submitMessage}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full text-primary transition-colors duration-200 hover:bg-green-600 hover:border-green-600 hover:text-white"
        variant="outline"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
