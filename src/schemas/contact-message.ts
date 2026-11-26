import { z } from "zod";

export const contactMessageSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  phone: z
    .string()
    .trim()
    .min(10, "Please enter a valid phone number")
    .regex(/^[0-9+\s()-]+$/, "Please enter a valid phone number format"),
  email: z.string().trim().email("Please enter a valid email address"),
  postcode: z.string().trim().min(3, "Please enter your postcode"),
  careFor: z.string().min(1, "Please select who the care is for"),
  message: z.string().trim().min(5, "Please enter your message"),
  consent: z.boolean().refine((val) => val === true, {
    message:
      "Please agree to Lighter House Care contacting you about your enquiry",
  }),
});
