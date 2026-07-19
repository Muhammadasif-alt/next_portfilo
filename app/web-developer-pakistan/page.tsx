import type { Metadata } from "next";
import { LocationPage } from "@/components/portfolio/location-page";
import { getLocation } from "@/lib/locations-data";

const DATA = getLocation("web-developer-pakistan")!;

export const metadata: Metadata = {
  title: DATA.meta.title,
  description: DATA.meta.description,
  keywords: DATA.keywords,
  alternates: { canonical: `/${DATA.slug}` },
  openGraph: {
    title: DATA.meta.title,
    description: DATA.meta.description,
    images: ["/og.jpg"],
  },
};

export default function Page() {
  return <LocationPage data={DATA} />;
}
