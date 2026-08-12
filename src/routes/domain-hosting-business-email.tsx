import { createFileRoute } from '@tanstack/react-router'
import { SharedLayout } from '@/components/SharedLayout'
import { HeroBanner } from '@/components/HeroBanner'
import { motion } from 'motion/react'

export const Route = createFileRoute('/domain-hosting-business-email')({
  head: () => ({
    meta: [
      { title: "Domain Registration, Business Email & Hosting Setup | Dark Media" },
      { name: 'description', content: "Get your domain, professional business email (@yourcompany.com) & fast hosting set up — done for you." },
      { property: 'og:title', content: "Domain Registration, Business Email & Hosting Setup | Dark Media" },
      { property: 'og:description', content: "Get your domain, professional business email (@yourcompany.com) & fast hosting set up — done for you." },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://darkmedia.tech' + slug },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: "Domain Registration, Business Email & Hosting Setup | Dark Media" },
      { name: 'twitter:description', content: "Get your domain, professional business email (@yourcompany.com) & fast hosting set up — done for you." },
      { rel: 'canonical', href: 'https://darkmedia.tech' + slug },
      ...[]
    ],
    scripts: [
  {
    "type": "application/ld+json",
    "children": "{\"@context\":\"https://schema.org\",\"@type\":\"ProfessionalService\",\"name\":\"Dark Media\",\"description\":\"Get your domain, professional business email (@yourcompany.com) & fast hosting set up — done for you.\",\"url\":\"https://darkmedia.tech/domain-hosting-business-email\",\"telephone\":\"+919480889252\",\"email\":\"hello@darkmedia.tech\",\"image\":\"https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/97979928-1e7f-4a22-b4cf-e7db2e95207b/id-preview-f1a7a5f9--67fbfdeb-ef3a-43b8-a184-79622d436225.lovable.app-1781074340903.png\"}"
  },
  {
    "type": "application/ld+json",
    "children": "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Can I keep my existing domain?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, we can transfer or connect an existing domain.\"}},{\"@type\":\"Question\",\"name\":\"Is business email really necessary?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes — it builds trust and looks more professional than a free Gmail address for business use.\"}}]}"
  }
]
  }),
  component: PageComponent,
})

function PageComponent() {
  return (
    <SharedLayout>
      <HeroBanner title={"Domain, Business Email & Hosting Setup"} />
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-4xl mx-auto px-5 py-20 md:py-32"
      >
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display">
          <p className="mb-6 text-lg md:text-xl text-[#F5F5F4]/60 leading-relaxed font-light">Every business needs a professional foundation online — a domain, business email that matches it (like you@yourcompany.com), and reliable hosting. We handle the technical setup so you don't have to.</p>
<h2 className="font-display text-3xl md:text-4xl font-semibold mt-16 mb-8 text-[#F5F5F4] border-b border-[#F5F5F4]/10 pb-4">Services</h2>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
<li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
        Domain name registration & transfer
      </li>
<li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
        Business email setup (Google Workspace / Zoho Mail)
      </li>
<li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
        Website hosting setup & migration
      </li>
<li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
        SSL & security configuration
      </li>
</ul>
<h2 className="font-display text-3xl md:text-4xl font-semibold mt-20 mb-8 text-[#F5F5F4]">Frequently Asked Questions</h2>
<p className="mb-6 text-lg md:text-xl text-[#F5F5F4]/60 leading-relaxed font-light"><em className="text-[#F5F5F4]/90 not-italic font-medium block mt-6 mb-2">Can I keep my existing domain?</em> Yes, we can transfer or connect an existing domain.</p>
<p className="mb-6 text-lg md:text-xl text-[#F5F5F4]/60 leading-relaxed font-light"><em className="text-[#F5F5F4]/90 not-italic font-medium block mt-6 mb-2">Is business email really necessary?</em> Yes — it builds trust and looks more professional than a free Gmail address for business use.</p>
<div className="mt-16 text-center">
        <a href="tel:+919480889252" className="inline-flex items-center justify-center rounded-full bg-[#F5F5F4] text-[#030304] px-10 py-5 text-lg font-medium hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          Get Your Domain & Email Set Up &rarr;
        </a>
      </div>

        </div>
      </motion.div>
    </SharedLayout>
  )
}
