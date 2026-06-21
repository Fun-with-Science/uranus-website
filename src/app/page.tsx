import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Uranus Stone Products Limited — Graded Aggregate & Manufactured Sand",
  description: "Uranus Stone Products Limited manufactures calibrated aggregate, manufactured sand, GSB and stone dust for India's concrete and infrastructure work.",
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Uranus Stone Products Limited — Graded Aggregate & Manufactured Sand",
    "description": "Premium aggregate, M-Sand, and GSB manufacturing powering regional and national highway infrastructure projects in Northeast India.",
    "publisher": {
      "@type": "Organization",
      "name": "Uranus Stone Products Limited",
      "logo": {
        "@type": "ImageObject",
        "url": "https://github.com/Fun-with-Science/uranus-website/raw/main/public/uranus%20website%20assets/Uranus%20Logo.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
