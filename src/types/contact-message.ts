import { z } from "zod";

import { contactMessageSchema } from "@/schemas/contact-message";

export type ContactMessageFormData = z.infer<typeof contactMessageSchema>;
