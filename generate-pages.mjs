import fs from 'fs';
import path from 'path';

const content = fs.readFileSync('seo-content.md', 'utf-8');
const blocks = content.split('\n---\n');

for (const block of blocks) {
  if (!block.trim()) continue;

  const lines = block.split('\n');
  const headerLine = lines.find(l => l.startsWith('## '));
  if (!headerLine) continue;

  const slugMatch = headerLine.match(/`(\/[^`]*)`/);
  if (!slugMatch) continue;
  let slug = slugMatch[1];
  
  if (slug === '/' || slug === '/portfolio' || slug === '/contact') {
    continue;
  }

  const titleMatch = block.match(/\*\*Title:\*\*\s*(.*)/);
  const descMatch = block.match(/\*\*Meta Description:\*\*\s*(.*)/);
  const h1Match = block.match(/^#\s+(.*)/m);

  if (!titleMatch || !descMatch || !h1Match) continue;

  const title = titleMatch[1].trim();
  const desc = descMatch[1].trim();
  const h1 = h1Match[1].trim();

  // Geo Tags Logic
  let geoTags = [];
  let locationName = '';
  if (slug.includes('mangalore')) {
      locationName = 'Mangalore';
      geoTags = [
          { name: 'geo.region', content: 'IN-KA' },
          { name: 'geo.placename', content: 'Mangalore, Karnataka, India' },
          { name: 'geo.position', content: '12.9141;74.8560' },
          { name: 'ICBM', content: '12.9141, 74.8560' }
      ];
  } else if (slug.includes('bangalore')) {
      locationName = 'Bangalore';
      geoTags = [
          { name: 'geo.region', content: 'IN-KA' },
          { name: 'geo.placename', content: 'Bengaluru, Karnataka, India' },
          { name: 'geo.position', content: '12.9716;77.5946' },
          { name: 'ICBM', content: '12.9716, 77.5946' }
      ];
  } else if (slug.includes('dubai')) {
      locationName = 'Dubai';
      geoTags = [
          { name: 'geo.region', content: 'AE-DU' },
          { name: 'geo.placename', content: 'Dubai, UAE' },
          { name: 'geo.position', content: '25.2048;55.2708' },
          { name: 'ICBM', content: '25.2048, 55.2708' }
      ];
  }

  const h1Index = lines.findIndex(l => l.startsWith('# '));
  const bodyLines = lines.slice(h1Index + 1);

  let jsxBody = '';
  let inList = false;
  let faqs = [];

  for (let i = 0; i < bodyLines.length; i++) {
    const line = bodyLines[i].trim();
    if (!line) continue;

    if (line.startsWith('## ')) {
      if (inList) { jsxBody += '</ul>\n'; inList = false; }
      jsxBody += `<h2 className="font-display text-3xl md:text-4xl font-semibold mt-16 mb-8 text-[#F5F5F4] border-b border-[#F5F5F4]/10 pb-4">${line.replace('## ', '')}</h2>\n`;
    } else if (line.startsWith('- ')) {
      if (!inList) { jsxBody += '<ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">\n'; inList = true; }
      jsxBody += `<li className="flex items-center gap-3 bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 rounded-xl p-4 text-[#F5F5F4]/80 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
        ${line.replace('- ', '')}
      </li>\n`;
    } else if (line.startsWith('**CTA:**')) {
      if (inList) { jsxBody += '</ul>\n'; inList = false; }
      const ctaText = line.replace('**CTA:**', '').trim();
      jsxBody += `<div className="mt-16 text-center">
        <a href="tel:+919480889252" className="inline-flex items-center justify-center rounded-full bg-[#F5F5F4] text-[#030304] px-10 py-5 text-lg font-medium hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          ${ctaText.replace('→', '&rarr;')}
        </a>
      </div>\n`;
    } else if (line.startsWith('**FAQ**')) {
      if (inList) { jsxBody += '</ul>\n'; inList = false; }
      jsxBody += `<h2 className="font-display text-3xl md:text-4xl font-semibold mt-20 mb-8 text-[#F5F5F4]">Frequently Asked Questions</h2>\n`;
    } else {
      let isFaq = false;
      if (line.startsWith('*') && line.includes('?*')) {
          const match = line.match(/^\*(.*?)\*\s*(.*)$/);
          if (match) {
              faqs.push({ question: match[1], answer: match[2] });
              isFaq = true;
          }
      }
      
      if (inList) { jsxBody += '</ul>\n'; inList = false; }
      let formattedLine = line
        .replace(/\*\*(.*?)\*\*/g, '<strong className="text-[#F5F5F4]">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em className="text-[#F5F5F4]/90 not-italic font-medium block mt-6 mb-2">$1</em>');
      
      jsxBody += `<p className="mb-6 text-lg md:text-xl text-[#F5F5F4]/60 leading-relaxed font-light">${formattedLine}</p>\n`;
    }
  }
  if (inList) { jsxBody += '</ul>\n'; }

  // AEO JSON-LD Generation
  const jsonLdScripts = [];
  
  // Service / LocalBusiness Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": locationName ? "LocalBusiness" : "ProfessionalService",
    "name": "Dark Media",
    "description": desc,
    "url": "https://darkmedia.tech" + slug,
    "telephone": "+919480889252",
    "email": "hello@darkmedia.tech",
    "image": "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/97979928-1e7f-4a22-b4cf-e7db2e95207b/id-preview-f1a7a5f9--67fbfdeb-ef3a-43b8-a184-79622d436225.lovable.app-1781074340903.png"
  };
  if (locationName) {
      if (locationName === 'Mangalore') {
          serviceSchema.address = { "@type": "PostalAddress", "addressLocality": "Mangalore", "addressRegion": "Karnataka", "addressCountry": "IN" };
      } else if (locationName === 'Bangalore') {
          serviceSchema.address = { "@type": "PostalAddress", "addressLocality": "Bengaluru", "addressRegion": "Karnataka", "addressCountry": "IN" };
      } else if (locationName === 'Dubai') {
          serviceSchema.address = { "@type": "PostalAddress", "addressLocality": "Dubai", "addressCountry": "AE" };
      }
  }
  jsonLdScripts.push({
      type: "application/ld+json",
      children: JSON.stringify(serviceSchema)
  });

  // FAQ Schema
  if (faqs.length > 0) {
      const faqSchema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.answer
              }
          }))
      };
      jsonLdScripts.push({
          type: "application/ld+json",
          children: JSON.stringify(faqSchema)
      });
  }

  const routeContent = `import { createFileRoute } from '@tanstack/react-router'
import { SharedLayout } from '@/components/SharedLayout'
import { HeroBanner } from '@/components/HeroBanner'
import { motion } from 'motion/react'

export const Route = createFileRoute('${slug}')({
  head: () => ({
    meta: [
      { title: ${JSON.stringify(title)} },
      { name: 'description', content: ${JSON.stringify(desc)} },
      { property: 'og:title', content: ${JSON.stringify(title)} },
      { property: 'og:description', content: ${JSON.stringify(desc)} },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://darkmedia.tech' + slug },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: ${JSON.stringify(title)} },
      { name: 'twitter:description', content: ${JSON.stringify(desc)} },
      { rel: 'canonical', href: 'https://darkmedia.tech' + slug },
      ...${JSON.stringify(geoTags)}
    ],
    scripts: ${JSON.stringify(jsonLdScripts, null, 2)}
  }),
  component: PageComponent,
})

function PageComponent() {
  return (
    <SharedLayout>
      <HeroBanner title={${JSON.stringify(h1)}} />
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-4xl mx-auto px-5 py-20 md:py-32"
      >
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display">
          ${jsxBody}
        </div>
      </motion.div>
    </SharedLayout>
  )
}
`;

  const filename = slug.replace('/', '') + '.tsx';
  const filepath = path.join('src', 'routes', filename);
  fs.writeFileSync(filepath, routeContent);
  console.log('Generated advanced SEO layout for: ' + filepath);
}
