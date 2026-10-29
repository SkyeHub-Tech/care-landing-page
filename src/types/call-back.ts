import { z } from "zod";

import { callBackSchema } from "@/schemas/call-back";

export type CallBackFormData = z.infer<typeof callBackSchema>;
