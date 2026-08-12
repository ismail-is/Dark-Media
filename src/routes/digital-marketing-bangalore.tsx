import { createFileRoute } from '@tanstack/react-router'
import { SharedLayout } from '@/components/SharedLayout'
import { HeroBanner } from '@/components/HeroBanner'
import { motion } from 'motion/react'

export const Route = createFileRoute('/digital-marketing-bangalore')({
  head: () => ({
    meta: [
      { title: "Digital Marketing Company in Bangalore | Dark Media" },
      { name: 'description', content: "Result-driven digital marketing agency in Bangalore — SEO, ads, content & social media that convert. Get a free audit." },
      { property: 'og:title', content: "Digital Marketing Company in Bangalore | Dark Media" },
      { property: 'og:description', content: "Result-driven digital marketing agency in Bangalore — SEO, ads, content & social media that convert. Get a free audit." },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://darkmedia.tech/digital-marketing-bangalore' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: "Digital Marketing Company in Bangalore | Dark Media" },
      { name: 'twitter:description', content: "Result-driven digital marketing agency in Bangalore — SEO, ads, content & social media that convert. Get a free audit." },
      { rel: 'canonical', href: 'https://darkmedia.tech/digital-marketing-bangalore' },
      ...[{"name":"geo.region","content":"IN-KA"},{"name":"geo.placename","content":"Bengaluru, Karnataka, India"},{"name":"geo.position","content":"12.9716;77.5946"},{"name":"ICBM","content":"12.9716, 77.5946"}]
    ],
    scripts: [
  {
    "type": "application/ld+json",
    "children": "{\"@context\":\"https://schema.org\",\"@type\":\"LocalBusiness\",\"name\":\"Dark Media\",\"description\":\"Result-driven digital marketing agency in Bangalore — SEO, ads, content & social media that convert. Get a free audit.\",\"url\":\"https://darkmedia.tech/digital-marketing-bangalore\",\"telephone\":\"+919480889252\",\"email\":\"hello@darkmedia.tech\",\"image\":\"https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/97979928-1e7f-4a22-b4cf-e7db2e95207b/id-preview-f1a7a5f9--67fbfdeb-ef3a-43b8-a184-79622d436225.lovable.app-1781074340903.png\",\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"Bengaluru\",\"addressRegion\":\"Karnataka\",\"addressCountry\":\"IN\"}}"
  },
  {
    "type": "application/ld+json",
    "children": "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Do you specialise in any industry?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"We've worked across tech, retail, F&B, and services — happy to share relevant case studies on a call.\"}},{\"@type\":\"Question\",\"name\":\"Can you manage both SEO and paid ads together?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, and we recommend it — the two channels perform better combined.\"}}]}"
  }
]
  }),
  component: PageComponent,
})

function PageComponent() {
  return (
    <SharedLayout>
      <HeroBanner title={"Digital Marketing Company in Bangalore"} />
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-4xl mx-auto px-5 py-20 md:py-32"
      >
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display">
          <p className="mb-6 text-lg md:text-xl text-[#F5F5F4]/60 leading-relaxed font-light">Bangalore's market is competitive and fast-moving — startups, D2C brands, and established companies are all fighting for the same search results and ad space. Dark Media builds performance-focused digital marketing campaigns designed for that competition.</p>
<h2 className="font-display text-3xl md:text-4xl font-semibold mt-16 mb-8 text-[#F5F5F4] border-b border-[#F5F5F4]/10 pb-4">Services</h2>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
<li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
        SEO strategy & execution
      </li>
<li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
        Performance marketing (Google & Meta Ads)
      </li>
<li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
        Content & social media management
      </li>
<li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
        Marketing analytics & reporting
      </li>
</ul>
<h2 className="font-display text-3xl md:text-4xl font-semibold mt-16 mb-8 text-[#F5F5F4] border-b border-[#F5F5F4]/10 pb-4">Our Approach</h2>
<p className="mb-6 text-lg md:text-xl text-[#F5F5F4]/60 leading-relaxed font-light">We don't sell one-size-fits-all packages. Every Bangalore client gets a custom strategy based on their industry, competitors, and growth stage — whether that's a SaaS startup or a retail chain.</p>
<h2 className="font-display text-3xl md:text-4xl font-semibold mt-20 mb-8 text-[#F5F5F4]">Frequently Asked Questions</h2>
<p className="mb-6 text-lg md:text-xl text-[#F5F5F4]/60 leading-relaxed font-light"><em className="text-[#F5F5F4]/90 not-italic font-medium block mt-6 mb-2">Do you specialise in any industry?</em> We've worked across tech, retail, F&B, and services — happy to share relevant case studies on a call.</p>
<p className="mb-6 text-lg md:text-xl text-[#F5F5F4]/60 leading-relaxed font-light"><em className="text-[#F5F5F4]/90 not-italic font-medium block mt-6 mb-2">Can you manage both SEO and paid ads together?</em> Yes, and we recommend it — the two channels perform better combined.</p>
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
