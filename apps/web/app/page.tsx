import { redirect } from "next/navigation";

import { defaultLocale } from "@bemara/i18n";

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
