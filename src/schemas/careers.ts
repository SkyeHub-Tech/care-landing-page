import { z } from "zod";

export const careersSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name"),
  phone: z
    .string()
    .trim()
    .min(10, "Please enter a valid phone number")
    .regex(/^[0-9+\s()-]+$/, "Please enter a valid phone number format"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),
  postcode: z
    .string()
    .trim()
    .min(3, "Please enter your postcode"),
  experience: z.enum(
    ["None", "Under 1 year", "1 to 3 years", "More than 3 years"],
    {
      message: "Please select your care experience",
    }
  ),
  cv: z.any().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "Please agree to Lighter House storing your details for this application",
  }),
});
