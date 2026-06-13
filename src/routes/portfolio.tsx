import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useInView, useSpring, useMotionValue } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowUp } from "lucide-react";

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
      { title: "Our Works — Dark Media" },
      { name: "description", content: "Explore our premium portfolio of branding, web development, and digital experiences." },
    ],
  }),
  component: PortfolioPage,
});

const ease = [0.22, 1, 0.36, 1] as const;

/* ---------- helpers ---------- */
function Reveal({ children, delay = 0, y = 40, className = "" }: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay, ease }} className={className}>
      {children}
    </motion.div>
  );
}

function SplitWord({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <span ref={ref} className={`inline-block overflow-hidden align-bottom ${className}`}>
      <motion.span className="inline-block" initial={{ y: "110%" }} animate={inView ? { y: "0%" } : {}} transition={{ duration: 1.1, delay, ease }}>
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
      onMouseLeave={() => { x.set(0); y.set(0); }}
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
        isMobile ? "relative h-auto py-6 md:py-8 px-4 md:px-8" : "sticky top-0 h-screen overflow-hidden"
      } w-full ${bgColor}`}
      style={{ zIndex: isMobile ? undefined : index }}
    >
      <motion.div style={isMobile ? {} : { scale, opacity, y }} className="w-full h-full relative">
        {children}
      </motion.div>
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 60);
    });
  }, [scrollY]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/portfolio" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/#contact" },
  ];

  const socials = [
    { label: "Instagram", abbr: "IG", href: "#" },
    { label: "Behance", abbr: "Be", href: "#" },
    { label: "LinkedIn", abbr: "Li", href: "#" },
    { label: "Twitter", abbr: "X", href: "#" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.9, delay: 0.4, ease }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-6 pt-4 md:pt-6 pointer-events-none"
      >
        <div 
          className={`pointer-events-auto flex items-center justify-between px-6 md:px-8 rounded-full border w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled 
              ? "max-w-[900px] bg-[#030304]/85 backdrop-blur-md shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border-white/5 py-3" 
              : "max-w-[1600px] bg-transparent backdrop-blur-none shadow-none border-transparent py-5"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5">
            <img src={whiteLogo} alt="Dark Media" className="h-6 md:h-8 w-auto opacity-90 transition-transform hover:scale-105 origin-left" />
          </Link>

          <div className="flex items-center gap-3 md:gap-5">
            <div className="hidden sm:inline-block">
              <Magnetic strength={0.2}>
                <Link to="/" hash="contact" className="group relative overflow-hidden inline-flex items-center gap-2 rounded-full bg-[#F5F5F4] text-[#030304] px-6 py-3 text-[11px] uppercase tracking-[0.2em] shadow-soft transition-all hover:shadow-deep">
                  <span className="relative z-10 flex items-center gap-2">
                    Let&rsquo;s talk
                    <span className="inline-block transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </span>
                  <span className="absolute inset-0 bg-black/10 translate-y-[101%] transition-transform duration-300 ease-out group-hover:translate-y-0 rounded-full" />
                </Link>
              </Magnetic>
            </div>

            <Magnetic strength={0.25}>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-transparent hover:bg-white/10 group transition-colors duration-300"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                <div className="relative w-5 h-3.5 flex flex-col justify-between">
                  <motion.span
                    animate={menuOpen ? { rotate: 45, y: 5, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="block h-[1.5px] bg-white rounded-full origin-center transition-colors duration-300"
                  />
                  <motion.span
                    animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="block h-[1.5px] w-3/4 bg-white rounded-full transition-colors duration-300"
                  />
                  <motion.span
                    animate={menuOpen ? { rotate: -45, y: -5, width: "100%" } : { rotate: 0, y: 0, width: "60%" }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="block h-[1.5px] bg-white rounded-full origin-center transition-colors duration-300"
                  />
                </div>
              </button>
            </Magnetic>
          </div>
        </div>
      </motion.header>

      <motion.nav
        initial={false}
        animate={{ clipPath: menuOpen ? "circle(150% at 95% 5%)" : "circle(0% at 95% 5%)" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[60] bg-[#030304] text-[#F5F5F4] overflow-hidden"
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div animate={{ x: ["-10%", "30%", "-10%"], y: ["-15%", "25%", "-15%"], scale: [1, 1.4, 1] }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }} className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-[140px] opacity-[0.12]" style={{ background: "radial-gradient(circle, rgba(120,100,255,0.5), rgba(255,120,200,0.3), transparent 70%)" }} />
          <motion.div animate={{ x: ["20%", "-25%", "20%"], y: ["20%", "-15%", "20%"], scale: [1.2, 1, 1.2] }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} className="absolute -bottom-[15%] -right-[15%] w-[70vw] h-[70vw] rounded-full blur-[160px] opacity-[0.1]" style={{ background: "radial-gradient(circle, rgba(60,180,255,0.4), rgba(100,255,200,0.2), transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        </div>

        <motion.button initial={false} animate={menuOpen ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -90 }} transition={{ delay: menuOpen ? 0.4 : 0, duration: 0.5, ease }} onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 md:top-10 md:right-10 z-20 flex items-center justify-center w-14 h-14 rounded-full border border-white/15 hover:border-white/40 hover:bg-white/10 transition-all duration-300 group">
          <span className="relative w-5 h-5">
            <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-white/80 -translate-y-1/2 rotate-45 group-hover:bg-white" />
            <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-white/80 -translate-y-1/2 -rotate-45 group-hover:bg-white" />
          </span>
        </motion.button>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 md:px-16">
          <motion.div initial={false} animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }} transition={{ delay: menuOpen ? 0.35 : 0, duration: 0.6, ease }} className="absolute top-8 left-8 md:top-10 md:left-10">
            <Link to="/" onClick={() => setMenuOpen(false)} className="inline-block"><img src={whiteLogo} alt="Dark Media" className="h-7 md:h-9 w-auto opacity-80 hover:opacity-100 transition-opacity" /></Link>
          </motion.div>

          <div className="flex flex-col items-center gap-2 md:gap-3">
            {navLinks.map((link, i) => (
              <motion.div key={link.label} initial={false} animate={menuOpen ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 50, filter: "blur(8px)" }} transition={{ delay: menuOpen ? 0.35 + i * 0.1 : 0, duration: 0.7, ease }} className="overflow-hidden">
                <Link to={link.href} onClick={() => setMenuOpen(false)} className="group relative flex items-center gap-4 md:gap-6 py-3 md:py-4 transition-all duration-500">
                  <span className="text-[11px] font-mono text-white/25 tracking-wider self-start pt-2 md:pt-4">0{i + 1}</span>
                  <span className="font-display text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] leading-[0.9] tracking-[-0.04em] text-white/90 group-hover:text-white transition-colors duration-300">{link.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div initial={false} animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ delay: menuOpen ? 0.65 : 0, duration: 0.6, ease }} className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/25 mr-4 hidden md:inline">Follow</span>
              {socials.map((s, i) => (
                <motion.a key={s.label} href={s.href} initial={false} animate={menuOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }} transition={{ delay: menuOpen ? 0.7 + i * 0.07 : 0, duration: 0.5, ease }} className="group relative flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/10 hover:border-white/40 hover:bg-white/10 transition-all duration-300" title={s.label}>
                  <span className="text-[11px] font-medium tracking-wider text-white/60 group-hover:text-white transition-colors duration-300">{s.abbr}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

/* ---------- Contact/Footer ---------- */
function Contact() {
  return (
    <section id="contact" className="relative bg-[#030304] text-[#F5F5F4] overflow-hidden rounded-t-[2.5rem] md:rounded-t-[4rem] z-10 shadow-[0_-20px_60px_rgba(0,0,0,0.6)]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 mix-blend-screen">
        <motion.div animate={{ x: ["-10%", "60%", "-20%", "-10%"], y: ["-10%", "40%", "80%", "-10%"], scale: [1, 1.2, 1] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-white/10 rounded-full blur-[100px] md:blur-[160px]" />
        <motion.div animate={{ x: ["100%", "-20%", "100%"], y: ["100%", "-10%", "100%"], scale: [1, 1.4, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute bottom-0 right-0 w-[70vw] h-[70vw] bg-white/10 rounded-full blur-[100px] md:blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 pt-32 md:pt-48 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-8">
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#F5F5F4]/20 bg-[#F5F5F4]/5 backdrop-blur-md px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-[#F5F5F4]/80 mb-8">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F5F5F4] opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#F5F5F4]" />
                </span>
                Ready to create?
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-[15vw] md:text-[10vw] leading-[0.85] tracking-[-0.04em]">
                Let's make some
                <br />
                <span className="relative inline-block mt-2 md:mt-0">
                  <em className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">magic.</em>
                </span>
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-4 flex justify-start md:justify-end md:pt-8">
            <Reveal delay={0.2}>
              <Magnetic strength={0.3}>
                <a href="mailto:hello@darkmedia.studio" className="group relative flex items-center justify-center w-36 h-36 md:w-48 md:h-48 rounded-full bg-[#F5F5F4] text-[#030304] overflow-hidden transition-transform duration-500 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                  <span className="relative z-10 font-display text-2xl md:text-3xl text-center leading-none group-hover:text-white transition-colors duration-500">Get in<br/>Touch</span>
                  <span className="absolute inset-0 bg-[#030304] rounded-full scale-0 origin-center transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:scale-110" />
                </a>
              </Magnetic>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-12 gap-10 pt-12 border-t border-[#F5F5F4]/10">
          <Reveal delay={0.15} className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.24em] opacity-40 mb-5">office</div>
            <p className="opacity-80 leading-relaxed text-sm md:text-base">Mangalore</p>
          </Reveal>
          <Reveal delay={0.2} className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.24em] opacity-40 mb-5">Contact</div>
            <p className="opacity-80 leading-relaxed text-sm md:text-base">
              <a href="mailto:hello@darkmedia.studio" className="hover:text-white transition-colors inline-block mb-1">hello@darkmedia.studio</a><br/>
              <a href="tel:+4512345678" className="hover:text-white transition-colors inline-block">+45 12 34 56 78</a>
            </p>
          </Reveal>
          <Reveal delay={0.25} className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.24em] opacity-40 mb-5">Socials</div>
            <ul className="flex flex-wrap gap-4 md:gap-6">
              {["Behance","Instagram","LinkedIn","Twitter"].map(s => (
                <li key={s}><a href="#" className="text-sm md:text-base opacity-80 hover:opacity-100 hover:-translate-y-1 inline-block transition-transform duration-300">{s}</a></li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-20 md:mt-28 flex justify-center pb-4">
          <Reveal delay={0.3}>
            <img src={whiteLogo} alt="Dark Media" className="w-[85vw] md:w-[65vw] max-w-5xl opacity-90 drop-shadow-2xl" />
          </Reveal>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] uppercase tracking-[0.22em] opacity-40 pt-8 border-t border-[#F5F5F4]/10">
          <div>© 2026 Dark Media · All rights reserved</div>
        </div>
      </div>
    </section>
  );
}

function PortfolioPage() {

  return (
    <main className="relative bg-[#030304] text-[#F5F5F4] min-h-screen">
      <Nav />
      
      {/* ── HERO / HEADING SECTION ── */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden">
        {/* Background Animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <motion.div animate={{ x: ["-10%", "30%", "-10%"], y: ["-15%", "25%", "-15%"], scale: [1, 1.4, 1] }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }} className="absolute top-0 -left-[10%] w-[50vw] h-[50vw] rounded-full blur-[140px] opacity-20" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.5), transparent 70%)" }} />
          <motion.div animate={{ x: ["20%", "-25%", "20%"], y: ["20%", "-15%", "20%"], scale: [1.2, 1, 1.2] }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} className="absolute bottom-0 -right-[10%] w-[60vw] h-[60vw] rounded-full blur-[160px] opacity-10" style={{ background: "radial-gradient(circle, rgba(200,200,200,0.4), transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        </div>

        <div className="relative z-10 text-center px-6">
          <Reveal delay={0.2}>
            <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-white/50 font-semibold mb-4 block">Selected Projects</span>
          </Reveal>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.95] text-white">
            <SplitWord text="Our Works" delay={0.4} />
          </h1>
        </div>
      </section>

      {/* ── PROJECT 1: AL MASOUDI ── */}
      <StackingSection index={1}>
        <section className="px-4 sm:px-6 md:px-10 lg:p-[220px] py-10 md:py-16 lg:py-20 relative z-10 bg-[#F5F5F4] w-full rounded-[24px] md:rounded-[32px] lg:rounded-t-[48px] lg:rounded-b-none shadow-2xl border border-black/5 lg:border-t lg:border-x-0 lg:border-b-0">
          <div className="max-w-[1600px] mx-auto w-full">
            
            {/* Grid Header */}
            <div className="border-b border-[#030304]/10 pb-4 mb-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6 -mt-16">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#EC6303]">Logofolio</span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#030304] mt-1 font-semibold">Al Masoudi Company</h2>
                <p className="text-[#030304]/50 text-xs uppercase tracking-widest mt-1">Contracting and trading</p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 lg:gap-10 lg:max-w-xl">
                <p className="text-[#030304]/70 text-sm md:text-base leading-relaxed">
                  AL MASOUDI Contracting and Trading is a Saudi-owned company providing comprehensive solutions. Crafted with precise geometries representing heritage, reliability, and growth.
                </p>
                <span className="font-display text-6xl md:text-8xl font-bold leading-none tracking-tighter text-[#EC6304]/15 self-end lg:self-auto">01</span>
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
              <div className="min-h-[180px] lg:h-[260px] lg:min-h-0 sm:col-span-1 bg-white rounded-[16px] md:rounded-[20px] overflow-hidden border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 relative group h-full">
                <img
                  src={img6}
                  alt="Mockup Presentation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-[10px] uppercase tracking-widest font-mono">Brand Merchandising</span>
                </div>
              </div>

              {/* Column 3: Stacked Mockup & Colors */}
              <div className="sm:col-span-1 flex flex-col gap-3">
                {/* Business cards style mockup */}
                <div className="bg-white rounded-[16px] md:rounded-[20px] overflow-hidden border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 flex-1 relative group min-h-[72px] h-[80px] lg:h-auto">
                  <img
                    src={img1}
                    alt="Corporate Stationery"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Color swatches box */}
                <div className="bg-white rounded-[16px] md:rounded-[20px] p-4 border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col justify-between gap-3 min-h-[72px]">
                  <div className="text-[9px] uppercase tracking-widest text-[#030304]/50 font-mono flex items-center justify-between">
                    <span>Brand Palette</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EC6303] animate-pulse" />
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 h-8">
                    <div className="bg-[#EC6303] rounded-md group relative cursor-pointer hover:scale-110 transition-transform shadow-inner" title="#EC6303">
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#030304] text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono">#EC6303</span>
                    </div>
                    <div className="bg-[#000000] rounded-md group relative cursor-pointer hover:scale-110 transition-transform shadow-inner" title="#000000">
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#030304] text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono">#000000</span>
                    </div>
                    <div className="bg-[#58585B] rounded-md group relative cursor-pointer hover:scale-110 transition-transform shadow-inner" title="#58585B">
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#030304] text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono">#58585B</span>
                    </div>
                    <div className="bg-[#D0D0D0] rounded-md border border-black/5 group relative cursor-pointer hover:scale-110 transition-transform shadow-inner" title="#D0D0D0">
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#030304] text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono">#D0D0D0</span>
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
                  className="w-auto object-contain mix-blend-multiply"
                />
              </div>

              {/* Card 6: Primary Typeface */}
              <div className="bg-white rounded-[16px] md:rounded-[20px] overflow-hidden border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 flex-1 relative group h-[140px] sm:h-auto min-h-[140px]">
                <img
                  src={img3}
                  alt="Brand Typography Details"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[16px] md:rounded-[20px]" />
              </div>

              {/* Card 7: Secondary Typeface */}
              <div className="bg-white rounded-[16px] md:rounded-[20px] overflow-hidden border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 flex-1 relative group h-[140px] sm:h-auto min-h-[140px]">
                <img
                  src={img5}
                  alt="Brand Typography Mockup"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[16px] md:rounded-[20px]" />
              </div>

            </div>

            <div className="mt-12 border-t border-[#030304]/10 pt-6 flex justify-between items-center">
              <Link to="/work/al-masoudi" className="group inline-flex items-center gap-3 rounded-full bg-[#030304] text-[#F5F5F4] px-8 py-4 text-[12px] uppercase tracking-[0.22em] shadow-soft hover:shadow-deep transition-all duration-300">
                <span>View Full Case Study</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </Link>
            </div>
          </div>
        </section>
      </StackingSection>

      {/* ── PROJECT 2: HANEEFZ BRIYANI ── */}
      <StackingSection index={2}>
        <section className="px-4 sm:px-6 md:px-10 lg:p-[220px] py-10 md:py-16 lg:py-20 relative z-10 bg-[#F5F5F4] w-full rounded-[24px] md:rounded-[32px] lg:rounded-t-[48px] lg:rounded-b-none shadow-2xl border border-black/5 lg:border-t lg:border-x-0 lg:border-b-0">
          <div className="max-w-[1600px] mx-auto w-full">
            
            {/* Grid Header */}
            <div className="border-b border-[#030304]/10 pb-4 mb-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6 -mt-16">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#D4141C]">Logofolio</span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#030304] mt-1 font-semibold">Haneefz Briyani</h2>
                <p className="text-[#030304]/50 text-xs uppercase tracking-widest mt-1">Caterers</p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 lg:gap-10 lg:max-w-xl">
                <p className="text-[#030304]/70 text-sm md:text-base leading-relaxed">
                  Haneefz Briyani is a Kerala-based caterers company providing comprehensive solutions. Crafted with precise geometries representing heritage, reliability, and growth.
                </p>
                <span className="font-display text-6xl md:text-8xl font-bold leading-none tracking-tighter text-[#D4141C]/15 self-end lg:self-auto">02</span>
              </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-3">
              
              {/* Card 1: Large Logo Container */}
              <div className="min-h-[180px] lg:h-[260px] sm:col-span-2 bg-white rounded-[16px] md:rounded-[20px] flex items-center justify-center border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={img8}
                  alt="Haneefz Logo"
                  className="w-auto object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-sm"
                />
              </div>

              {/* Card 2: Vertical Mockup */}
              <div className="min-h-[180px] lg:h-[260px] lg:min-h-0 sm:col-span-1 bg-white rounded-[16px] md:rounded-[20px] overflow-hidden border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 relative group h-full">
                <img
                  src={img9}
                  alt="Mockup Presentation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-[10px] uppercase tracking-widest font-mono">Brand Merchandising</span>
                </div>
              </div>

              {/* Column 3: Stacked Mockup & Colors */}
              <div className="sm:col-span-1 flex flex-col gap-3">
                {/* Business cards style mockup */}
                <div className="bg-white rounded-[16px] md:rounded-[20px] overflow-hidden border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 flex-1 relative group min-h-[72px] h-[80px] lg:h-auto">
                  <img
                    src={img10}
                    alt="Corporate Stationery"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Color swatches box */}
                <div className="bg-white rounded-[16px] md:rounded-[20px] p-4 border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col justify-between gap-3 min-h-[72px]">
                  <div className="text-[9px] uppercase tracking-widest text-[#030304]/50 font-mono flex items-center justify-between">
                    <span>Brand Palette</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D5161B] animate-pulse" />
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 h-8">
                    <div className="bg-[#D5161B] rounded-md group relative cursor-pointer hover:scale-110 transition-transform shadow-inner" title="#D5161B">
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#030304] text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono">#D5161B</span>
                    </div>
                    <div className="bg-[#D7AE43] rounded-md group relative cursor-pointer hover:scale-110 transition-transform shadow-inner" title="#D7AE43">
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#030304] text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono">#D7AE43</span>
                    </div>
                    <div className="bg-[#000000] rounded-md group relative cursor-pointer hover:scale-110 transition-transform shadow-inner" title="#000000">
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#030304] text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono">#000000</span>
                    </div>
                    <div className="bg-[#D0D0D0] rounded-md border border-black/5 group relative cursor-pointer hover:scale-110 transition-transform shadow-inner" title="#D0D0D0">
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#030304] text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono">#D0D0D0</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2 - Card 5: Logo Construct breakdown */}
              <div className="min-h-[160px] sm:col-span-2 rounded-[16px] md:rounded-[20px] p-4 md:p-6 flex items-center justify-center border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={img11}
                  alt="Logo Geometry breakdown"
                  className="w-auto object-contain mix-blend-multiply"
                />
              </div>

              {/* Card 6: Primary Typeface */}
              <div className="bg-white rounded-[16px] md:rounded-[20px] overflow-hidden border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 flex-1 relative group h-[140px] sm:h-auto min-h-[140px]">
                <img
                  src={img12}
                  alt="Brand Typography Details"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[16px] md:rounded-[20px]" />
              </div>

              {/* Card 7: Secondary Typeface */}
              <div className="bg-white rounded-[16px] md:rounded-[20px] overflow-hidden border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 flex-1 relative group h-[140px] sm:h-auto min-h-[140px]">
                <img
                  src={img5}
                  alt="Brand Typography Mockup"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[16px] md:rounded-[20px]" />
              </div>

            </div>
          </div>
        </section>
      </StackingSection>

      <Contact />
    </main>
  );
}
