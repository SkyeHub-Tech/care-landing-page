import { z } from "zod";

import { careersSchema } from "@/schemas/careers";

export type CareersFormData = z.infer<typeof careersSchema>;
