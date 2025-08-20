import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export default function NewsletterForm() {
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
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/newsletter", {
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
        throw new Error(result.message || "Failed to subscribe");
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
    <div className="space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email address"
            {...register("email")}
            className={`flex-1 ${errors.email ? "border-destructive" : ""}`}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="outline"
            className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>

        {errors.email && (
          <p className="text-sm text-destructive text-center">
            {errors.email.message}
          </p>
        )}
      </form>

      {submitStatus === "success" && (
        <div className="p-4 bg-green-950/50 border border-green-500/30 rounded-md max-w-md mx-auto">
          <p className="text-green-400 text-center">{submitMessage}</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-950/50 border border-red-500/30 rounded-md max-w-md mx-auto">
          <p className="text-red-400 text-center">{submitMessage}</p>
        </div>
      )}

      <p className="text-sm text-muted-foreground text-center">
        No spam, just updates about new music and creative projects. Unsubscribe
        anytime.
      </p>
    </div>
  );
}
