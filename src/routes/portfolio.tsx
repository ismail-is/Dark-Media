import { createFileRoute, Link } from "@tanstack/react-router";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  useMotionValue,
} from "motion/react";
import { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { Nav, Footer } from "@/components/SharedLayout";

import whiteLogo from "@/assets/Dark Media Logo - White.png";

// Al Masoudi Assets
import img1 from "@/assets/images/ourworks/AlMasoudi/1.webp";
import img2 from "@/assets/images/ourworks/AlMasoudi/2.webp";
import img3 from "@/assets/images/ourworks/AlMasoudi/3.webp";
import img4 from "@/assets/images/ourworks/AlMasoudi/4.webp";
import img5 from "@/assets/images/ourworks/AlMasoudi/5.webp";
import img6 from "@/assets/images/ourworks/AlMasoudi/6.webp";
import img7 from "@/assets/images/ourworks/AlMasoudi/7.png";

// Haneefz Assets
import img8 from "@/assets/images/ourworks/haneefz/1.webp";
import img9 from "@/assets/images/ourworks/haneefz/3.webp";
import img10 from "@/assets/images/ourworks/haneefz/4.webp";
import img11 from "@/assets/images/ourworks/haneefz/5.webp";
import img12 from "@/assets/images/ourworks/haneefz/6.webp";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { name: "geo.region", content: "IN-KA" },
      { name: "geo.placename", content: "Mangalore" },
      { name: "geo.position", content: "12.9141;74.8560" },
      { name: "ICBM", content: "12.9141, 74.8560" },
      { title: "Our Works — Dark Media" },
      {
        name: "description",
        content:
          "Explore our premium portfolio of branding, web development, and digital experiences.",
      },
    ],
  }),
  component: PortfolioPage,
});

const ease = [0.22, 1, 0.36, 1] as const;

/* ---------- helpers ---------- */
function Reveal({
  children,
  delay = 0,
  y = 40,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SplitWord({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <span ref={ref} className={`inline-block overflow-hidden align-bottom ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: "110%" }}
        animate={inView ? { y: "0%" } : {}}
        transition={{ duration: 1.1, delay, ease }}
      >
        {text}
      </motion.span>
    </span>
  );
}

function Magnetic({ children, strength = 0.3 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 200, damping: 18 });
  const y = useSpring(0, { stiffness: 200, damping: 18 });
  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * strength);
        y.set((e.clientY - r.top - r.height / 2) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

/* ---------- Stacking Wrapper ---------- */
function StackingSection({
  children,
  index,
  bgColor = "bg-[#030304]",
}: {
  children: React.ReactNode;
  index: number;
  bgColor?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <div
      ref={sectionRef}
      className={`${
        isMobile ? "relative h-auto py-4 md:py-8" : "sticky top-0 h-screen overflow-hidden"
      } w-full ${bgColor}`}
      style={{ zIndex: isMobile ? undefined : index }}
    >
      <motion.div style={isMobile ? {} : { scale, opacity, y }} className="w-full h-full relative">
        {children}
      </motion.div>
    </div>
  );
}

function PortfolioPage() {
  return (
    <main className="relative bg-[#030304] text-[#F5F5F4] min-h-screen">
      <Nav />

      {/* ── HERO / HEADING SECTION ── */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden">
        {/* Background Animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <motion.div
            animate={{ x: ["-10%", "30%", "-10%"], y: ["-15%", "25%", "-15%"], scale: [1, 1.4, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 -left-[10%] w-[50vw] h-[50vw] rounded-full blur-[140px] opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.5), transparent 70%)",
            }}
          />
          <motion.div
            animate={{ x: ["20%", "-25%", "20%"], y: ["20%", "-15%", "20%"], scale: [1.2, 1, 1.2] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 -right-[10%] w-[60vw] h-[60vw] rounded-full blur-[160px] opacity-10"
            style={{
              background: "radial-gradient(circle, rgba(200,200,200,0.4), transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6">
          <Reveal delay={0.2}>
            <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-white/50 font-semibold mb-4 block">
              Selected Projects
            </span>
          </Reveal>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.95] text-white">
            <SplitWord text="Our Works" delay={0.4} />
          </h1>
        </div>
      </section>

      {/* ── PROJECT 1: AL MASOUDI ── */}
      <StackingSection index={1}>
        <section className="px-4 sm:px-6 md:px-10 lg:p-[220px] py-10 md:py-16 lg:py-20 relative z-10 bg-[#F5F5F4] w-full rounded-[24px] md:rounded-[32px] lg:rounded-t-[48px] lg:rounded-b-none shadow-2xl border border-black/5 lg:border-t lg:border-x-0 lg:border-b-0 ">
          <div className="max-w-[1600px] mx-auto w-full">
            {/* Grid Header */}
            <div className="border-b border-[#030304]/10 pb-4 mb-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6  md:-mt-16">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#EC6303]">
                  Logofolio
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#030304] mt-1 font-semibold">
                  Al Masoudi Company
                </h2>
                <p className="text-[#030304]/50 text-xs uppercase tracking-widest mt-1">
                  Contracting and trading
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 lg:gap-10 lg:max-w-xl">
                <p className="text-[#030304]/70 text-sm md:text-base leading-relaxed">
                  AL MASOUDI Contracting and Trading is a Saudi-owned company providing
                  comprehensive solutions. Crafted with precise geometries representing heritage,
                  reliability, and growth.
                </p>
                <span className="font-display text-6xl md:text-8xl font-bold leading-none tracking-tighter text-[#EC6304]/15 self-end lg:self-auto">
                  01
                </span>
              </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-3">
              {/* Card 1: Large Logo Container */}
              <div className="min-h-[180px] lg:h-[260px] sm:col-span-2 bg-white rounded-[16px] md:rounded-[20px] flex items-center justify-center border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={img4}
                  alt="Al Masoudi Logo"
                  className="w-auto object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-sm"
                />
              </div>

              {/* Card 2: Vertical Mockup */}
              <div className="sm:col-span-1 bg-white rounded-[16px] md:rounded-[20px] overflow-hidden border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 relative group h-auto flex flex-col">
                <img
                  src={img6}
                  alt="Mockup Presentation"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 flex-grow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  {/* <span className="text-white text-[10px] uppercase tracking-widest font-mono">Brand Merchandising</span> */}
                </div>
              </div>

              {/* Column 3: Stacked Mockup & Colors */}
              <div className="sm:col-span-1 flex flex-col gap-3">
                {/* Business cards style mockup */}
                <div className="bg-white rounded-[16px] md:rounded-[20px] overflow-hidden border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 relative group h-auto">
                  <img
                    src={img1}
                    alt="Corporate Stationery"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Color swatches box */}
                <div className="bg-white rounded-[16px] md:rounded-[20px] p-4 border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col justify-between gap-3 min-h-[72px]">
                  <div className="text-[9px] uppercase tracking-widest text-[#030304]/50 font-mono flex items-center justify-between">
                    <span>Brand Palette</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EC6303] animate-pulse" />
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 h-8">
                    <div
                      className="bg-[#EC6303] rounded-md group relative cursor-pointer hover:scale-110 transition-transform shadow-inner"
                      title="#EC6303"
                    >
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#030304] text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono">
                        #EC6303
                      </span>
                    </div>
                    <div
                      className="bg-[#000000] rounded-md group relative cursor-pointer hover:scale-110 transition-transform shadow-inner"
                      title="#000000"
                    >
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#030304] text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono">
                        #000000
                      </span>
                    </div>
                    <div
                      className="bg-[#58585B] rounded-md group relative cursor-pointer hover:scale-110 transition-transform shadow-inner"
                      title="#58585B"
                    >
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#030304] text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono">
                        #58585B
                      </span>
                    </div>
                    <div
                      className="bg-[#D0D0D0] rounded-md border border-black/5 group relative cursor-pointer hover:scale-110 transition-transform shadow-inner"
                      title="#D0D0D0"
                    >
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#030304] text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono">
                        #D0D0D0
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2 - Card 5: Logo Construct breakdown */}
              <div className="min-h-[160px] sm:col-span-2 rounded-[16px] md:rounded-[20px] p-4 md:p-6 flex items-center justify-center border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={img2}
                  alt="Logo Geometry breakdown"
                  className="w-full sm:w-auto h-auto max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Card 6: Primary Typeface */}
              <div className="bg-white rounded-[16px] md:rounded-[20px] overflow-hidden border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 relative group h-auto">
                <img
                  src={img3}
                  alt="Brand Typography Details"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[16px] md:rounded-[20px]" />
              </div>

              {/* Card 7: Secondary Typeface */}
              <div className="bg-white rounded-[16px] md:rounded-[20px] overflow-hidden border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 relative group h-auto">
                <img
                  src={img5}
                  alt="Brand Typography Mockup"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[16px] md:rounded-[20px]" />
              </div>
            </div>
          </div>
        </section>
      </StackingSection>

      {/* ── PROJECT 2: HANEEFZ BRIYANI ── */}
      <StackingSection index={2}>
        <section className=" px-4 sm:px-6 md:px-10 lg:p-[220px] py-10 md:py-16 lg:py-20 relative z-10 bg-[#F5F5F4] w-full rounded-[24px] md:rounded-[32px] lg:rounded-t-[48px] lg:rounded-b-none shadow-2xl border border-black/5 lg:border-t lg:border-x-0 lg:border-b-0">
          <div className="max-w-[1600px] mx-auto w-full">
            {/* Grid Header */}
            <div className="border-b border-[#030304]/10 pb-4 mb-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:-mt-16">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#D4141C] ">
                  Logofolio
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#030304] mt-1 font-semibold">
                  Haneefz Briyani
                </h2>
                <p className="text-[#030304]/50 text-xs uppercase tracking-widest mt-1">Caterers</p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 lg:gap-10 lg:max-w-xl">
                <p className="text-[#030304]/70 text-sm md:text-base leading-relaxed">
                  Haneefz Briyani is a Kerala-based caterers company providing comprehensive
                  solutions. Crafted with precise geometries representing heritage, reliability, and
                  growth.
                </p>
                <span className="font-display text-6xl md:text-8xl font-bold leading-none tracking-tighter text-[#D4141C]/15 self-end lg:self-auto">
                  02
                </span>
              </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-4 gap-4">
              {/* 1 - Logo */}
              <div className="md:col-span-5 md:row-span-2 bg-[#1A1A1A] rounded-[20px] flex items-center justify-center border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group ">
                <img
                  src={img8}
                  alt="Al Masoudi Logo"
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* 2 - Vertical Mockup */}
              <div className="md:col-span-3 md:row-span-2 md:col-start-6 bg-white rounded-[20px] overflow-hidden border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 group">
                <img
                  src={img9}
                  alt="Mockup Presentation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
      <span className="text-white text-[10px] uppercase tracking-widest font-mono">
        Brand Merchandising
      </span>
    </div> */}
              </div>

              {/* 3 - Business Card Mockup */}
              <div className="md:col-span-4 md:row-span-2 md:col-start-9 bg-white rounded-[20px] overflow-hidden border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 group">
                <img
                  src={img10}
                  alt="Corporate Stationery"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* 8 - Logo Construction */}
              <div className="md:col-span-6 md:row-span-2 md:row-start-3 bg-white rounded-[20px] flex items-center justify-center border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group ">
                <img
                  src={img11}
                  alt="Logo Geometry Breakdown"
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* 9 - Typography */}
              <div className="md:col-span-4 md:row-span-2 md:col-start-7 md:row-start-3 bg-white rounded-[20px] overflow-hidden border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 group">
                <img
                  src={img12}
                  alt="Brand Typography"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* 7 - Brand Palette */}
              <div className="md:col-span-2 md:row-span-2 md:col-start-11 md:row-start-3 bg-white rounded-[20px] p-4 border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-[#030304]/50 font-mono">
                    Brand Palette
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#D5161B] animate-pulse"></span>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  {["#D5161B", "#D7AE43", "#000000", "#D0D0D0"].map((color) => (
                    <div key={color} className="flex flex-col items-center gap-1">
                      <div
                        className="w-full h-14 rounded-lg border border-black/5 shadow-inner hover:scale-105 transition-transform"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-[9px] font-mono text-[#030304]/70 text-center break-all">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </StackingSection>
      <br />

      <Footer />
    </main>
  );
}
