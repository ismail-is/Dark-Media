import { createFileRoute } from "@tanstack/react-router";
import { SharedLayout } from "@/components/SharedLayout";
import { HeroBanner } from "@/components/HeroBanner";
import { motion } from "motion/react";

export const Route = createFileRoute("/ecommerce-website-development")({
  head: () => ({
    meta: [
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { name: "geo.region", content: "IN-KA" },
      { name: "geo.placename", content: "Mangalore" },
      { name: "geo.position", content: "12.9141;74.8560" },
      { name: "ICBM", content: "12.9141, 74.8560" },
      { title: "Ecommerce Website Development Company | Shopify & WooCommerce | Dark Media" },
      {
        name: "description",
        content:
          "Build a high-converting online store — Shopify, WooCommerce & custom ecommerce development for Mangalore, Bangalore & Dubai.",
      },
      {
        property: "og:title",
        content: "Ecommerce Website Development Company | Shopify & WooCommerce | Dark Media",
      },
      {
        property: "og:description",
        content:
          "Build a high-converting online store — Shopify, WooCommerce & custom ecommerce development for Mangalore, Bangalore & Dubai.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://darkmedia.tech/ecommerce-website-development" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Ecommerce Website Development Company | Shopify & WooCommerce | Dark Media",
      },
      {
        name: "twitter:description",
        content:
          "Build a high-converting online store — Shopify, WooCommerce & custom ecommerce development for Mangalore, Bangalore & Dubai.",
      },
      { rel: "canonical", href: "https://darkmedia.tech/ecommerce-website-development" },
      ...[],
    ],
    scripts: [
      {
        type: "application/ld+json",
        children:
          '{"@context":"https://schema.org","@type":"ProfessionalService","name":"Dark Media","description":"Build a high-converting online store — Shopify, WooCommerce & custom ecommerce development for Mangalore, Bangalore & Dubai.","url":"https://darkmedia.tech/ecommerce-website-development","telephone":"+919480889252","email":"hello@darkmedia.tech","image":"https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/97979928-1e7f-4a22-b4cf-e7db2e95207b/id-preview-f1a7a5f9--67fbfdeb-ef3a-43b8-a184-79622d436225.lovable.app-1781074340903.png"}',
      },
      {
        type: "application/ld+json",
        children:
          '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Shopify or WooCommerce — which is better?","acceptedAnswer":{"@type":"Answer","text":"Depends on your budget, product range, and long-term plans — we\'ll recommend the right fit on a call."}},{"@type":"Question","name":"Can you migrate my existing store?","acceptedAnswer":{"@type":"Answer","text":"Yes, we handle migrations with minimal downtime."}}]}',
      },
    ],
  }),
  component: PageComponent,
});

function PageComponent() {
  return (
    <SharedLayout>
      <HeroBanner title={"Ecommerce Website Development Company"} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-4xl mx-auto px-5 py-20 md:py-32"
      >
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display">
          <p className="mb-6 text-lg md:text-xl text-[#F5F5F4]/60 leading-relaxed font-light">
            An online store needs more than good design — it needs secure checkout, fast load times,
            and a layout built to convert browsers into buyers. Dark Media builds ecommerce sites on
            Shopify, WooCommerce, or custom platforms depending on your needs.
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-16 mb-8 text-[#F5F5F4] border-b border-[#F5F5F4]/10 pb-4">
            What's Included
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
              Product catalog setup
            </li>
            <li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
              Secure payment gateway integration
            </li>
            <li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
              Mobile-optimised checkout flow
            </li>
            <li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
              Ecommerce SEO from day one
            </li>
          </ul>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-20 mb-8 text-[#F5F5F4]">
            Frequently Asked Questions
          </h2>
          <p className="mb-6 text-lg md:text-xl text-[#F5F5F4]/60 leading-relaxed font-light">
            <em className="text-[#F5F5F4]/90 not-italic font-medium block mt-6 mb-2">
              Shopify or WooCommerce — which is better?
            </em>{" "}
            Depends on your budget, product range, and long-term plans — we'll recommend the right
            fit on a call.
          </p>
          <p className="mb-6 text-lg md:text-xl text-[#F5F5F4]/60 leading-relaxed font-light">
            <em className="text-[#F5F5F4]/90 not-italic font-medium block mt-6 mb-2">
              Can you migrate my existing store?
            </em>{" "}
            Yes, we handle migrations with minimal downtime.
          </p>
          <div className="mt-16 text-center">
            <a
              href="tel:+919480889252"
              className="inline-flex items-center justify-center rounded-full bg-[#F5F5F4] text-[#030304] px-10 py-5 text-lg font-medium hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              Get a Free Ecommerce Quote &rarr;
            </a>
          </div>
        </div>
      </motion.div>
    </SharedLayout>
  );
}
