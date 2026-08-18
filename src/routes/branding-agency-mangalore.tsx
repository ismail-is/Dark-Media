import { createFileRoute } from "@tanstack/react-router";
import { SharedLayout } from "@/components/SharedLayout";
import { HeroBanner } from "@/components/HeroBanner";
import { motion } from "motion/react";

export const Route = createFileRoute("/branding-agency-mangalore")({
  head: () => ({
    meta: [
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { name: "geo.region", content: "IN-KA" },
      { name: "geo.placename", content: "Mangalore" },
      { name: "geo.position", content: "12.9141;74.8560" },
      { name: "ICBM", content: "12.9141, 74.8560" },
      { title: "Branding Agency in Mangalore | Logo & Identity Design | Dark Media" },
      {
        name: "description",
        content:
          "Complete brand identity design — logos, guidelines & brand strategy for Mangalore businesses.",
      },
      {
        property: "og:title",
        content: "Branding Agency in Mangalore | Logo & Identity Design | Dark Media",
      },
      {
        property: "og:description",
        content:
          "Complete brand identity design — logos, guidelines & brand strategy for Mangalore businesses.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://darkmedia.tech/branding-agency-mangalore" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Branding Agency in Mangalore | Logo & Identity Design | Dark Media",
      },
      {
        name: "twitter:description",
        content:
          "Complete brand identity design — logos, guidelines & brand strategy for Mangalore businesses.",
      },
      { rel: "canonical", href: "https://darkmedia.tech/branding-agency-mangalore" },
      ...[
        { name: "geo.region", content: "IN-KA" },
        { name: "geo.placename", content: "Mangalore, Karnataka, India" },
        { name: "geo.position", content: "12.9141;74.8560" },
        { name: "ICBM", content: "12.9141, 74.8560" },
      ],
    ],
    scripts: [
      {
        type: "application/ld+json",
        children:
          '{"@context":"https://schema.org","@type":"LocalBusiness","name":"Dark Media","description":"Complete brand identity design — logos, guidelines & brand strategy for Mangalore businesses.","url":"https://darkmedia.tech/branding-agency-mangalore","telephone":"+919480889252","email":"hello@darkmedia.tech","image":"https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/97979928-1e7f-4a22-b4cf-e7db2e95207b/id-preview-f1a7a5f9--67fbfdeb-ef3a-43b8-a184-79622d436225.lovable.app-1781074340903.png","address":{"@type":"PostalAddress","addressLocality":"Mangalore","addressRegion":"Karnataka","addressCountry":"IN"}}',
      },
    ],
  }),
  component: PageComponent,
});

function PageComponent() {
  return (
    <SharedLayout>
      <HeroBanner title={"Branding Agency in Mangalore"} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-4xl mx-auto px-5 py-20 md:py-32"
      >
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display">
          <p className="mb-6 text-lg md:text-xl text-[#F5F5F4]/60 leading-relaxed font-light">
            A strong brand isn't just a logo — it's how your business looks, sounds, and feels
            everywhere a customer encounters it. Dark Media builds complete brand identities for
            Mangalore businesses.
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-16 mb-8 text-[#F5F5F4] border-b border-[#F5F5F4]/10 pb-4">
            What's Included
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
              Brand strategy & positioning
            </li>
            <li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
              Logo design
            </li>
            <li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
              Brand guidelines (colors, typography, tone)
            </li>
            <li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
              Business collateral design
            </li>
          </ul>
          <div className="mt-16 text-center">
            <a
              href="tel:+919480889252"
              className="inline-flex items-center justify-center rounded-full bg-[#F5F5F4] text-[#030304] px-10 py-5 text-lg font-medium hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              Get a Free Branding Consultation &rarr;
            </a>
          </div>
        </div>
      </motion.div>
    </SharedLayout>
  );
}
