import { createFileRoute } from '@tanstack/react-router'
import { SharedLayout } from '@/components/SharedLayout'
import { HeroBanner } from '@/components/HeroBanner'
import { motion } from 'motion/react'

export const Route = createFileRoute('/google-ads-ppc-management')({
  head: () => ({
    meta: [
      { title: "Google Ads & PPC Management Services | Dark Media" },
      { name: 'description', content: "Certified PPC experts running high-ROI Google Ads campaigns for businesses in India & UAE." },
      { property: 'og:title', content: "Google Ads & PPC Management Services | Dark Media" },
      { property: 'og:description', content: "Certified PPC experts running high-ROI Google Ads campaigns for businesses in India & UAE." },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://darkmedia.tech/google-ads-ppc-management' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: "Google Ads & PPC Management Services | Dark Media" },
      { name: 'twitter:description', content: "Certified PPC experts running high-ROI Google Ads campaigns for businesses in India & UAE." },
      { rel: 'canonical', href: 'https://darkmedia.tech/google-ads-ppc-management' },
      ...[]
    ],
    scripts: [
  {
    "type": "application/ld+json",
    "children": "{\"@context\":\"https://schema.org\",\"@type\":\"ProfessionalService\",\"name\":\"Dark Media\",\"description\":\"Certified PPC experts running high-ROI Google Ads campaigns for businesses in India & UAE.\",\"url\":\"https://darkmedia.tech/google-ads-ppc-management\",\"telephone\":\"+919480889252\",\"email\":\"hello@darkmedia.tech\",\"image\":\"https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/97979928-1e7f-4a22-b4cf-e7db2e95207b/id-preview-f1a7a5f9--67fbfdeb-ef3a-43b8-a184-79622d436225.lovable.app-1781074340903.png\"}"
  }
]
  }),
  component: PageComponent,
})

function PageComponent() {
  return (
    <SharedLayout>
      <HeroBanner title={"Google Ads & PPC Management Services"} />
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-4xl mx-auto px-5 py-20 md:py-32"
      >
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display">
          <p className="mb-6 text-lg md:text-xl text-[#F5F5F4]/60 leading-relaxed font-light">Paid ads can bring immediate traffic — but only when set up correctly. Dark Media manages Google Ads and Meta Ads campaigns focused on return on ad spend, not just clicks.</p>
<h2 className="font-display text-3xl md:text-4xl font-semibold mt-16 mb-8 text-[#F5F5F4] border-b border-[#F5F5F4]/10 pb-4">Services</h2>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
<li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
        Google Search & Display Ads
      </li>
<li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
        Meta (Facebook/Instagram) Ads
      </li>
<li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
        Campaign strategy & budget planning
      </li>
<li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
        Monthly performance reporting
      </li>
</ul>
<div className="mt-16 text-center">
        <a href="tel:+919480889252" className="inline-flex items-center justify-center rounded-full bg-[#F5F5F4] text-[#030304] px-10 py-5 text-lg font-medium hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          Get a Free Ads Audit &rarr;
        </a>
      </div>

        </div>
      </motion.div>
    </SharedLayout>
  )
}
