import type { Metadata } from "next";
import { ServicePage } from "@/components/portfolio/service-page";
import { SERVICES } from "@/lib/services-data";

const service = SERVICES["speed-optimization"];

export const metadata: Metadata = {
  title: service.meta.title,
  description: service.meta.description,
};

export default function Page() {
  return <ServicePage service={service} />;
}
