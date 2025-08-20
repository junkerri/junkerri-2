import type { APIRoute } from "astro";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    // Validate the email
    const validatedData = newsletterSchema.parse(body);

    // Get configuration from environment variables
    const formspreeFormId = import.meta.env.FORMSPREE_NEWSLETTER_FORM_ID;
    const contactEmail = import.meta.env.CONTACT_EMAIL;

    if (!formspreeFormId) {
      throw new Error("Formspree newsletter form ID not configured");
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
          email: validatedData.email,
          _replyto: validatedData.email,
          _subject: `New Newsletter Subscription: ${validatedData.email}`,
          message: `New newsletter subscription from ${validatedData.email}`,
          type: "newsletter_subscription",
        }),
      }
    );

    if (!formspreeResponse.ok) {
      throw new Error("Failed to subscribe");
    }

    // Check if Formspree returned an error in the response body
    const formspreeResult = await formspreeResponse.json();

    if (!formspreeResult.ok) {
      throw new Error("Formspree rejected the subscription");
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Successfully subscribed to the newsletter!",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);

    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid email address",
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
        message: `Failed to subscribe. Please try again or email directly at ${
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
