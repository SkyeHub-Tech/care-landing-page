import { redirect } from "next/navigation";

import { ROUTES } from "@/lib/constants";

const FaqsRedirectPage = (): never => {
  redirect(ROUTES.CONTACT_FAQS);
};

export default FaqsRedirectPage;
