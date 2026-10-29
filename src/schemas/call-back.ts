import { z } from "zod";

export const callBackSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name"),
  phoneNumber: z
    .string()
    .trim()
    .min(10, "Please enter a valid phone number")
    .regex(/^[0-9+\s()-]+$/, "Please enter a valid phone number format"),
  postcode: z
    .string()
    .trim()
    .min(3, "Please enter your postcode"),
  consent: z.boolean().refine((val) => val === true, {
    message: "Please agree to be contacted to submit your request",
  }),
});
