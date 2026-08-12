import { createFileRoute } from '@tanstack/react-router'
import { SharedLayout } from '@/components/SharedLayout'
import { HeroBanner } from '@/components/HeroBanner'
import { motion } from 'motion/react'

export const Route = createFileRoute('/digital-marketing-dubai')({
  head: () => ({
    meta: [
      { title: "Digital Marketing Agency in Dubai | Dark Media" },
      { name: 'description', content: "Dubai-based digital marketing services — SEO, paid ads & branding for UAE businesses. Book a free strategy call." },
      { property: 'og:title', content: "Digital Marketing Agency in Dubai | Dark Media" },
      { property: 'og:description', content: "Dubai-based digital marketing services — SEO, paid ads & branding for UAE businesses. Book a free strategy call." },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://darkmedia.tech' + slug },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: "Digital Marketing Agency in Dubai | Dark Media" },
      { name: 'twitter:description', content: "Dubai-based digital marketing services — SEO, paid ads & branding for UAE businesses. Book a free strategy call." },
      { rel: 'canonical', href: 'https://darkmedia.tech' + slug },
      ...[{"name":"geo.region","content":"AE-DU"},{"name":"geo.placename","content":"Dubai, UAE"},{"name":"geo.position","content":"25.2048;55.2708"},{"name":"ICBM","content":"25.2048, 55.2708"}]
    ],
    scripts: [
  {
    "type": "application/ld+json",
    "children": "{\"@context\":\"https://schema.org\",\"@type\":\"LocalBusiness\",\"name\":\"Dark Media\",\"description\":\"Dubai-based digital marketing services — SEO, paid ads & branding for UAE businesses. Book a free strategy call.\",\"url\":\"https://darkmedia.tech/digital-marketing-dubai\",\"telephone\":\"+919480889252\",\"email\":\"hello@darkmedia.tech\",\"image\":\"https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/97979928-1e7f-4a22-b4cf-e7db2e95207b/id-preview-f1a7a5f9--67fbfdeb-ef3a-43b8-a184-79622d436225.lovable.app-1781074340903.png\",\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"Dubai\",\"addressCountry\":\"AE\"}}"
  },
  {
    "type": "application/ld+json",
    "children": "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Do you offer Arabic content?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, available on request depending on project scope.\"}},{\"@type\":\"Question\",\"name\":\"Can you manage ad campaigns targeting the whole GCC?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, campaigns can be scoped beyond Dubai on request.\"}}]}"
  }
]
  }),
  component: PageComponent,
})

function PageComponent() {
  return (
    <SharedLayout>
      <HeroBanner title={"Digital Marketing Agency in Dubai"} />
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-4xl mx-auto px-5 py-20 md:py-32"
      >
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display">
          <p className="mb-6 text-lg md:text-xl text-[#F5F5F4]/60 leading-relaxed font-light">The UAE market moves fast, and Dubai customers expect polished, mobile-first digital experiences. Dark Media helps Dubai businesses build a strong digital presence with SEO, paid advertising, and content that fits the local market.</p>
<h2 className="font-display text-3xl md:text-4xl font-semibold mt-16 mb-8 text-[#F5F5F4] border-b border-[#F5F5F4]/10 pb-4">Services for UAE Businesses</h2>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
<li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
        Local & international SEO
      </li>
<li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
        Google & Meta Ads management for the UAE market
      </li>
<li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
        Bilingual content strategy (English/Arabic on request)
      </li>
<li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
        Brand-aligned social media management
      </li>
</ul>
<h2 className="font-display text-3xl md:text-4xl font-semibold mt-16 mb-8 text-[#F5F5F4] border-b border-[#F5F5F4]/10 pb-4">Why Work With Us in Dubai</h2>
<p className="mb-6 text-lg md:text-xl text-[#F5F5F4]/60 leading-relaxed font-light">We understand that Dubai audiences span both residents and a large international customer base — your marketing needs to speak to both without feeling generic.</p>
<h2 className="font-display text-3xl md:text-4xl font-semibold mt-20 mb-8 text-[#F5F5F4]">Frequently Asked Questions</h2>
<p className="mb-6 text-lg md:text-xl text-[#F5F5F4]/60 leading-relaxed font-light"><em className="text-[#F5F5F4]/90 not-italic font-medium block mt-6 mb-2">Do you offer Arabic content?</em> Yes, available on request depending on project scope.</p>
<p className="mb-6 text-lg md:text-xl text-[#F5F5F4]/60 leading-relaxed font-light"><em className="text-[#F5F5F4]/90 not-italic font-medium block mt-6 mb-2">Can you manage ad campaigns targeting the whole GCC?</em> Yes, campaigns can be scoped beyond Dubai on request.</p>
<div className="mt-16 text-center">
        <a href="tel:+919480889252" className="inline-flex items-center justify-center rounded-full bg-[#F5F5F4] text-[#030304] px-10 py-5 text-lg font-medium hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          Book a Free Strategy Call &rarr;
        </a>
      </div>

        </div>
      </motion.div>
    </SharedLayout>
  )
}
