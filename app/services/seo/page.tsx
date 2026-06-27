import type { Metadata } from "next";
import { SeoPage } from "@/components/portfolio/seo-page";
import { SERVICES } from "@/lib/services-data";

const service = SERVICES.seo;

export const metadata: Metadata = {
  title: service.meta.title,
  description: service.meta.description,
};

export default function Page() {
  return <SeoPage />;
}
