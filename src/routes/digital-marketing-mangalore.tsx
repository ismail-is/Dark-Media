import { createFileRoute } from '@tanstack/react-router'
import { SharedLayout } from '@/components/SharedLayout'
import { HeroBanner } from '@/components/HeroBanner'
import { motion } from 'motion/react'

export const Route = createFileRoute('/digital-marketing-mangalore')({
  head: () => ({
    meta: [
      { title: "Best Digital Marketing Agency in Mangalore | Dark Media" },
      { name: 'description', content: "SEO, social media & PPC experts helping Mangalore businesses grow online. Free consultation — call Dark Media today." },
      { property: 'og:title', content: "Best Digital Marketing Agency in Mangalore | Dark Media" },
      { property: 'og:description', content: "SEO, social media & PPC experts helping Mangalore businesses grow online. Free consultation — call Dark Media today." },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://darkmedia.tech/digital-marketing-mangalore' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: "Best Digital Marketing Agency in Mangalore | Dark Media" },
      { name: 'twitter:description', content: "SEO, social media & PPC experts helping Mangalore businesses grow online. Free consultation — call Dark Media today." },
      { rel: 'canonical', href: 'https://darkmedia.tech/digital-marketing-mangalore' },
      ...[{"name":"geo.region","content":"IN-KA"},{"name":"geo.placename","content":"Mangalore, Karnataka, India"},{"name":"geo.position","content":"12.9141;74.8560"},{"name":"ICBM","content":"12.9141, 74.8560"}]
    ],
    scripts: [
  {
    "type": "application/ld+json",
    "children": "{\"@context\":\"https://schema.org\",\"@type\":\"LocalBusiness\",\"name\":\"Dark Media\",\"description\":\"SEO, social media & PPC experts helping Mangalore businesses grow online. Free consultation — call Dark Media today.\",\"url\":\"https://darkmedia.tech/digital-marketing-mangalore\",\"telephone\":\"+919480889252\",\"email\":\"hello@darkmedia.tech\",\"image\":\"https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/97979928-1e7f-4a22-b4cf-e7db2e95207b/id-preview-f1a7a5f9--67fbfdeb-ef3a-43b8-a184-79622d436225.lovable.app-1781074340903.png\",\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"Mangalore\",\"addressRegion\":\"Karnataka\",\"addressCountry\":\"IN\"}}"
  },
  {
    "type": "application/ld+json",
    "children": "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How much does digital marketing cost in Mangalore?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Packages typically start based on scope — contact us for a free quote tailored to your goals.\"}},{\"@type\":\"Question\",\"name\":\"How long until I see results?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"SEO takes 3-6 months for meaningful ranking movement; paid ads can drive traffic within days.\"}},{\"@type\":\"Question\",\"name\":\"Do you work with small businesses?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes — we work with startups, local shops, and larger companies alike.\"}}]}"
  }
]
  }),
  component: PageComponent,
})

function PageComponent() {
  return (
    <SharedLayout>
      <HeroBanner title={"Best Digital Marketing Agency in Mangalore"} />
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-4xl mx-auto px-5 py-20 md:py-32"
      >
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display">
          <p className="mb-6 text-lg md:text-xl text-[#F5F5F4]/60 leading-relaxed font-light">Growing a business in Mangalore means standing out in a market where more customers now start with a Google or Instagram search than a walk-in. Dark Media builds digital marketing strategies — SEO, social media, and paid ads — specifically for Mangalore's local market.</p>
<h2 className="font-display text-3xl md:text-4xl font-semibold mt-16 mb-8 text-[#F5F5F4] border-b border-[#F5F5F4]/10 pb-4">Our Digital Marketing Services in Mangalore</h2>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
<li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
        Local SEO (rank for "near me" searches)
      </li>
<li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
        Social media marketing & content
      </li>
<li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
        Google Ads & Meta Ads management
      </li>
<li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
        Website audits & conversion optimisation
      </li>
</ul>
<h2 className="font-display text-3xl md:text-4xl font-semibold mt-16 mb-8 text-[#F5F5F4] border-b border-[#F5F5F4]/10 pb-4">Why Local Matters</h2>
<p className="mb-6 text-lg md:text-xl text-[#F5F5F4]/60 leading-relaxed font-light">A Mangalore-based bakery, clinic, or retail store competes differently than a national brand. We tailor keyword targeting, ad locations, and content to local search behaviour, not generic templates.</p>
<h2 className="font-display text-3xl md:text-4xl font-semibold mt-20 mb-8 text-[#F5F5F4]">Frequently Asked Questions</h2>
<p className="mb-6 text-lg md:text-xl text-[#F5F5F4]/60 leading-relaxed font-light"><em className="text-[#F5F5F4]/90 not-italic font-medium block mt-6 mb-2">How much does digital marketing cost in Mangalore?</em> Packages typically start based on scope — contact us for a free quote tailored to your goals.</p>
<p className="mb-6 text-lg md:text-xl text-[#F5F5F4]/60 leading-relaxed font-light"><em className="text-[#F5F5F4]/90 not-italic font-medium block mt-6 mb-2">How long until I see results?</em> SEO takes 3-6 months for meaningful ranking movement; paid ads can drive traffic within days.</p>
<p className="mb-6 text-lg md:text-xl text-[#F5F5F4]/60 leading-relaxed font-light"><em className="text-[#F5F5F4]/90 not-italic font-medium block mt-6 mb-2">Do you work with small businesses?</em> Yes — we work with startups, local shops, and larger companies alike.</p>
<div className="mt-16 text-center">
        <a href="tel:+919480889252" className="inline-flex items-center justify-center rounded-full bg-[#F5F5F4] text-[#030304] px-10 py-5 text-lg font-medium hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          Get a Free Digital Marketing Audit for Your Mangalore Business &rarr;
        </a>
      </div>

        </div>
      </motion.div>
    </SharedLayout>
  )
}
