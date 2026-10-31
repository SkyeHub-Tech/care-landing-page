import { z } from "zod";

export const postcodeSchema = z.object({
  postcode: z
    .string()
    .trim()
    .min(2, "Please enter your postcode")
    .max(10, "Please enter a valid UK postcode"),
});

export type PostcodeFormData = z.infer<typeof postcodeSchema>;
