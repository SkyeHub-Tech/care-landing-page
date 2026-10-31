import { z } from "zod";

import { enquirySchema } from "@/schemas/enquiry";

export type EnquiryFormData = z.infer<typeof enquirySchema>;
