import type { APIRoute } from "astro";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    // Validate the form data
    const validatedData = contactSchema.parse(body);

    // Get configuration from environment variables
    const formspreeFormId = import.meta.env.FORMSPREE_CONTACT_FORM_ID;
    const contactEmail = import.meta.env.CONTACT_EMAIL;

    if (!formspreeFormId) {
      throw new Error("Formspree contact form ID not configured");
    }

    if (!contactEmail) {
      throw new Error("Contact email not configured");
    }

    // Send email using Formspree
    const formspreeResponse = await fetch(
      `https://formspree.io/f/${formspreeFormId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${validatedData.firstName} ${validatedData.lastName}`,
          email: validatedData.email,
          subject: validatedData.subject,
          message: validatedData.message,
          _replyto: validatedData.email,
          _subject: `New Contact Form: ${validatedData.subject}`,
        }),
      }
    );

    if (!formspreeResponse.ok) {
      throw new Error("Failed to send email");
    }

    // Check if Formspree returned an error in the response body
    const formspreeResult = await formspreeResponse.json();

    if (!formspreeResult.ok) {
      throw new Error("Formspree rejected the submission");
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Message sent successfully!",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Validation error",
          errors: error.errors,
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: false,
        message: `Failed to send message. Please try again or email directly at ${
          import.meta.env.CONTACT_EMAIL || "contact@junkerri.com"
        }`,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
