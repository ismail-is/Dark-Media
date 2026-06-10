import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useInView, useSpring, useMotionValue } from "motion/react";
import { useRef, useEffect, useState } from "react";
import logoMark from "@/assets/dark-media-mark.jpeg.asset.json";
import whiteLogo from "@/assets/Dark Media Logo - White.png";
import lumetixImg from "@/assets/images/Lumetix.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dark Media — Build. Brand. Impact." },
      { name: "description", content: "Digital creative agency crafting premium websites, branding systems, graphic design, videography and digital experiences since 2016." },
      { property: "og:title", content: "Dark Media — Digital Creative Agency" },
      { property: "og:description", content: "Premium websites, branding systems, graphic design, and videography for ambitious brands." },
    ],
  }),
  component: Index,
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

/* ---------- cursor ---------- */
function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  
  // Smooth jelly-like trailing animation
  const sx = useSpring(x, { stiffness: 120, damping: 14, mass: 0.2 });
  const sy = useSpring(y, { stiffness: 120, damping: 14, mass: 0.2 });
  
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, [x, y]);

  return (
    <>
      {/* Snappy inner dot */}
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed top-0 left-0 z-[110] hidden md:block mix-blend-difference"
      >
        <motion.div 
          animate={{ scale: hover ? 0 : 1, opacity: hover ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="-translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white"
        />
      </motion.div>
      
      {/* Smooth trailing outer ring */}
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block mix-blend-difference"
      >
        <motion.div
          animate={{ 
            scale: hover ? 1.8 : 1,
            backgroundColor: hover ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
            borderWidth: hover ? "0px" : "1.5px",
            borderColor: "rgba(255, 255, 255, 1)",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-solid"
        />
      </motion.div>
    </>
  );
}

function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 60);
    });
  }, [scrollY]);

  // Lock body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { label: "Home", href: "#top" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    { label: "Instagram", abbr: "IG", href: "#" },
    { label: "Behance", abbr: "Be", href: "#" },
    { label: "LinkedIn", abbr: "Li", href: "#" },
    { label: "Twitter", abbr: "X", href: "#" },
  ];

  return (
    <>
      {/* ── Top Bar ── */}
      <motion.header
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.9, delay: 0.4, ease }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-6 pt-4 md:pt-6 pointer-events-none"
      >
        <motion.div 
          animate={{ 
            width: "100%",
            maxWidth: scrolled ? "900px" : "1600px",
            backgroundColor: scrolled ? "rgba(255, 255, 255, 0.85)" : "transparent",
            backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
            boxShadow: scrolled ? "0 10px 40px -10px rgba(0,0,0,0.08)" : "none",
            borderColor: scrolled ? "rgba(0,0,0,0.05)" : "transparent",
            paddingTop: scrolled ? "0.75rem" : "1.25rem",
            paddingBottom: scrolled ? "0.75rem" : "1.25rem",
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto flex items-center justify-between px-6 md:px-8 rounded-full border transition-colors"
        >
          {/* Left — Logo */}
          <a href="#top" className="flex items-center gap-2.5">
            <img src={whiteLogo} alt="Dark Media" className="h-6 md:h-8 w-auto invert opacity-90 transition-transform hover:scale-105 origin-left" />
          </a>

          {/* Right — Let's Talk + Menu Icon */}
          <div className="flex items-center gap-3 md:gap-5">
            <div className="hidden sm:inline-block">
              <Magnetic strength={0.2}>
                <a href="#contact" className="group relative overflow-hidden inline-flex items-center gap-2 rounded-full bg-[#030304] text-[#F5F5F4] px-6 py-3 text-[11px] uppercase tracking-[0.2em] shadow-soft transition-all hover:shadow-deep">
                  <span className="relative z-10 flex items-center gap-2">
                    Let&rsquo;s talk
                    <span className="inline-block transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </span>
                  <span className="absolute inset-0 bg-white/20 translate-y-[101%] transition-transform duration-300 ease-out group-hover:translate-y-0 rounded-full" />
                </a>
              </Magnetic>
            </div>

            {/* Hamburger / Close icon */}
            <Magnetic strength={0.25}>
              <button
                id="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative flex items-center justify-center w-12 h-12 rounded-full border border-[#030304]/20 bg-transparent hover:bg-[#030304] group transition-colors duration-300"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                <div className="relative w-5 h-3.5 flex flex-col justify-between">
                  <motion.span
                    animate={menuOpen ? { rotate: 45, y: 5, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="block h-[1.5px] bg-[#030304] group-hover:bg-[#F5F5F4] rounded-full origin-center transition-colors duration-300"
                  />
                  <motion.span
                    animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="block h-[1.5px] w-3/4 bg-[#030304] group-hover:bg-[#F5F5F4] rounded-full transition-colors duration-300"
                  />
                  <motion.span
                    animate={menuOpen ? { rotate: -45, y: -5, width: "100%" } : { rotate: 0, y: 0, width: "60%" }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="block h-[1.5px] bg-[#030304] group-hover:bg-[#F5F5F4] rounded-full origin-center transition-colors duration-300"
                  />
                </div>
              </button>
            </Magnetic>
          </div>
        </motion.div>
      </motion.header>

      {/* ── Full-screen Navigation Overlay ── */}
      <motion.nav
        initial={false}
        animate={{ 
          clipPath: menuOpen 
            ? "circle(150% at 95% 5%)" 
            : "circle(0% at 95% 5%)",
        }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[60] bg-[#030304] text-[#F5F5F4] overflow-hidden"
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      >
        {/* ── Animated Background Layers ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          
          {/* Aurora orb 1 — top-left, warm */}
          <motion.div
            animate={{
              x: ["-10%", "30%", "-10%"],
              y: ["-15%", "25%", "-15%"],
              scale: [1, 1.4, 1],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-[140px] opacity-[0.12]"
            style={{ background: "radial-gradient(circle, rgba(120,100,255,0.5), rgba(255,120,200,0.3), transparent 70%)" }}
          />

          {/* Aurora orb 2 — bottom-right, cool */}
          <motion.div
            animate={{
              x: ["20%", "-25%", "20%"],
              y: ["20%", "-15%", "20%"],
              scale: [1.2, 1, 1.2],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[15%] -right-[15%] w-[70vw] h-[70vw] rounded-full blur-[160px] opacity-[0.1]"
            style={{ background: "radial-gradient(circle, rgba(60,180,255,0.4), rgba(100,255,200,0.2), transparent 70%)" }}
          />

          {/* Aurora orb 3 — center, subtle white */}
          <motion.div
            animate={{
              x: ["-5%", "15%", "-5%"],
              y: ["10%", "-10%", "10%"],
              scale: [1, 1.25, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/3 left-1/3 w-[45vw] h-[45vw] rounded-full blur-[120px] opacity-[0.06]"
            style={{ background: "radial-gradient(circle, #ffffff, transparent 60%)" }}
          />

          {/* Grid lines */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{ 
              backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", 
              backgroundSize: "80px 80px" 
            }}
          />

          {/* Rotating orbital ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vmin] h-[70vmin] rounded-full border border-white/[0.04]"
          >
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/10" />
          </motion.div>

          {/* Second orbital — slower, larger */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vmin] h-[90vmin] rounded-full border border-white/[0.025]"
          >
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-1 h-1 rounded-full bg-white/15" />
          </motion.div>

          {/* Floating particle dots */}
          {[
            { top: "12%", left: "18%", size: 3, delay: 0, dur: 6 },
            { top: "75%", left: "80%", size: 2, delay: 1, dur: 8 },
            { top: "30%", left: "85%", size: 2.5, delay: 2, dur: 7 },
            { top: "60%", left: "10%", size: 2, delay: 0.5, dur: 9 },
            { top: "88%", left: "45%", size: 1.5, delay: 3, dur: 6 },
            { top: "20%", left: "55%", size: 2, delay: 1.5, dur: 10 },
          ].map((p, idx) => (
            <motion.span
              key={idx}
              animate={{ 
                y: [0, -20, 0], 
                opacity: [0.15, 0.4, 0.15],
                scale: [1, 1.3, 1],
              }}
              transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
              className="absolute rounded-full bg-white"
              style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
            />
          ))}

          {/* Noise / grain texture overlay */}
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />
        </div>

        {/* ── Close button inside fullscreen nav ── */}
        <motion.button
          initial={false}
          animate={menuOpen ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -90 }}
          transition={{ delay: menuOpen ? 0.4 : 0, duration: 0.5, ease }}
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 md:top-10 md:right-10 z-20 flex items-center justify-center w-14 h-14 rounded-full border border-white/15 hover:border-white/40 hover:bg-white/10 transition-all duration-300 group"
          aria-label="Close menu"
        >
          <span className="relative w-5 h-5">
            <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-white/80 -translate-y-1/2 rotate-45 group-hover:bg-white transition-colors" />
            <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-white/80 -translate-y-1/2 -rotate-45 group-hover:bg-white transition-colors" />
          </span>
        </motion.button>

        {/* ── Centered Content ── */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 md:px-16">
          
          {/* Top label */}
          <motion.div
            initial={false}
            animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ delay: menuOpen ? 0.35 : 0, duration: 0.6, ease }}
            className="absolute top-8 left-8 md:top-10 md:left-10"
          >
            <a href="#top" onClick={() => setMenuOpen(false)} className="inline-block">
              <img src={whiteLogo} alt="Dark Media" className="h-7 md:h-9 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>

          {/* Navigation Links — centered */}
          <div className="flex flex-col items-center gap-2 md:gap-3">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={false}
                animate={menuOpen ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 50, filter: "blur(8px)" }}
                transition={{ delay: menuOpen ? 0.35 + i * 0.1 : 0, duration: 0.7, ease }}
                className="overflow-hidden"
              >
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="group relative flex items-center gap-4 md:gap-6 py-3 md:py-4 transition-all duration-500"
                >
                  <span className="text-[11px] font-mono text-white/25 tracking-wider self-start pt-2 md:pt-4">0{i + 1}</span>
                  <span className="font-display text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] leading-[0.9] tracking-[-0.04em] text-white/90 group-hover:text-white transition-colors duration-300">
                    {link.label}
                  </span>
                  <motion.span
                    className="text-2xl md:text-3xl text-white/0 group-hover:text-white/60 transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"
                  >
                    ↗
                  </motion.span>
                  {/* Hover underline effect */}
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[0.22,1,0.36,1] origin-left" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Bottom bar — Social Icons + Info */}
          <div className="absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Social Media Icons */}
            <motion.div
              initial={false}
              animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: menuOpen ? 0.65 : 0, duration: 0.6, ease }}
              className="flex items-center gap-2"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/25 mr-4 hidden md:inline">Follow</span>
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  initial={false}
                  animate={menuOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ delay: menuOpen ? 0.7 + i * 0.07 : 0, duration: 0.5, ease }}
                  className="group relative flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/10 hover:border-white/40 hover:bg-white/10 transition-all duration-300"
                  title={s.label}
                >
                  <span className="text-[11px] font-medium tracking-wider text-white/60 group-hover:text-white transition-colors duration-300">
                    {s.abbr}
                  </span>
                  <span className="absolute inset-0 rounded-full bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-500" />
                </motion.a>
              ))}
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={false}
              animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: menuOpen ? 0.8 : 0, duration: 0.5, ease }}
              className="flex items-center gap-6 text-center md:text-right"
            >
              <a
                href="mailto:hello@darkmedia.studio"
                className="text-sm text-white/40 hover:text-white/90 transition-colors duration-300"
              >
                hello@darkmedia.studio
              </a>
              <span className="hidden md:inline text-white/10">|</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/20">
                © 2026 Dark Media
              </span>
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

/* ---------- hero ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const sphereY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const sphereRot = useTransform(scrollYProgress, [0, 1], [0, 180]);

  // mouse parallax on sphere
  const mx = useMotionValue(0); const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });
  useEffect(() => {
    const on = (e: MouseEvent) => {
      const cx = window.innerWidth / 2; const cy = window.innerHeight / 2;
      mx.set((e.clientX - cx) / cx * 30);
      my.set((e.clientY - cy) / cy * 30);
    };
    window.addEventListener("mousemove", on);
    return () => window.removeEventListener("mousemove", on);
  }, [mx, my]);

  const orbit = ["Web Development", "Videography", "Graphic Design", "Branding"];

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden pt-28 md:pt-36 pb-10">
      {/* faint grid */}
      <div aria-hidden className="absolute inset-0 opacity-[0.04] pointer-events-none"
           style={{ backgroundImage: "linear-gradient(#030304 1px,transparent 1px),linear-gradient(90deg,#030304 1px,transparent 1px)", backgroundSize: "80px 80px" }} />

      <motion.div style={{ y: yText, opacity }} className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        {/* tag */}
        {/* <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
          className="inline-flex items-center gap-3 rounded-full border border-[#030304]/15 bg-[#F5F5F4]/60 backdrop-blur px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-[#030304]/70 mb-10 md:mb-14">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#030304] opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#030304]" />
          </span>
          Digital Creative Agency
        </motion.div> */}

        {/* heading grid: text + sphere */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          <div className="lg:col-span-7 relative z-10">
            <h1 className="font-display text-[18vw] sm:text-[16vw] lg:text-[12.5vw] leading-[0.86] tracking-[-0.045em] text-[#030304]">
              <span className="block"><SplitWord text="Build." delay={0.3} /></span>
              <span className="block"><SplitWord text="Brand." delay={0.45} /></span>
              <span className="block italic font-display"><SplitWord text="Impact." delay={0.6} /></span>
            </h1>
            <Reveal delay={1} className="mt-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-[#030304]/60">
              <span className="h-px w-10 bg-[#030304]/40" /> 
            </Reveal>
          </div>

          {/* sphere */}
          <div className="lg:col-span-5 relative h-[60vw] sm:h-[50vw] lg:h-[42vw] max-h-[640px] flex items-center justify-center">
            {/* orbit rings */}
            {[1, 1.25, 1.55].map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: s }} transition={{ delay: 0.8 + i * 0.15, duration: 1.4, ease }}
                className="absolute aspect-square w-[70%] rounded-full border border-[#030304]/12" />
            ))}
            {/* dot drifting on outer orbit */}
            <motion.div
              animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute aspect-square w-[108%] rounded-full">
              <span className="absolute -top-1 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-[#030304]" />
            </motion.div>

            {/* sphere */}
            <motion.div style={{ x: smx, y: useTransform(smy, (v) => v + (sphereY.get())), rotate: sphereRot }}
              initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1.4, ease }}
              className="relative aspect-square w-[58%] rounded-full shadow-deep">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 32% 30%, #ffffff 0%, #e8e7e3 35%, #b8b6b0 60%, #030304 95%)" }} />
                <div className="absolute inset-y-0 right-0 w-1/2 bg-[#030304]" />
                <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 28%, rgba(255,255,255,0.6), transparent 35%)" }} />
              </div>
              <div className="absolute -inset-6 rounded-full" style={{ background: "radial-gradient(circle, rgba(3,3,4,0.18), transparent 65%)", zIndex: -1 }} />
            </motion.div>

            {/* orbit labels */}
            {orbit.map((label, i) => {
              const angle = (i / orbit.length) * Math.PI * 2 - Math.PI / 2;
              const r = 48; // % of container
              const top = 50 + Math.sin(angle) * r;
              const left = 50 + Math.cos(angle) * r;
              return (
                <motion.div key={label}
                  initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1 + i * 0.12, duration: 0.7, ease }}
                  style={{ top: `${top}%`, left: `${left}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5F5F4] shadow-soft border border-[#030304]/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] whitespace-nowrap text-[#030304]">
                  {label}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* bottom row */}
        <Reveal delay={1.1} className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-end">
          <p className="md:col-span-5 text-[#030304]/70 text-base md:text-lg leading-relaxed max-w-md">
            We craft premium websites, branding systems, graphic design, videography, and digital experiences that help ambitious businesses stand out.
          </p>
          <div className="md:col-span-4 md:col-start-7 flex items-center gap-4">
            <Magnetic>
              <a href="#work" className="group inline-flex items-center gap-3 rounded-full bg-[#030304] text-[#F5F5F4] px-6 py-4 text-[12px] uppercase tracking-[0.22em] shadow-soft">
                Explore Our Work
                <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </a>
            </Magnetic>
            <a href="#" className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-[#030304]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#030304]/30 group-hover:bg-[#030304] group-hover:text-[#F5F5F4] transition-colors">▶</span>
              Watch Showreel
            </a>
          </div>
          <div className="md:col-span-3 text-[11px] uppercase tracking-[0.24em] text-[#030304]/60 md:text-right">
            Follow —
            <span className="ml-3 inline-flex gap-2">
              {["Be","IG","Li"].map(s => <span key={s} className="rounded-full border border-[#030304]/25 px-2 py-1">{s}</span>)}
            </span>
          </div>
        </Reveal>
      </motion.div>

      {/* scroll cue */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
        className="absolute bottom-6 right-6 md:right-10 hidden md:flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#030304]/60 [writing-mode:vertical-rl] rotate-180">
        Scroll to Explore
      </motion.div>
    </section>
  );
}

/* ---------- stats strip ---------- */
function StatsStrip() {
  const stats = [
    { n: "150+", l: "Projects" }, { n: "5+", l: "Years" }, { n: "50+", l: "Clients" }, { n: "12", l: "Awards" },
  ];
  return (
    <section className="border-y border-[#030304]/10 bg-[#F5F5F4]">
      <div className="mx-auto max-w-[1600px] grid grid-cols-2 md:grid-cols-5">
        {stats.map((s, i) => (
          <motion.div key={s.l}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.08, ease }}
            className="px-6 md:px-10 py-8 md:py-10 border-r border-[#030304]/10 last:border-r-0 flex items-baseline gap-3">
            <div className="font-display text-4xl md:text-6xl text-[#030304]">{s.n}</div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#030304]/60">{s.l}</div>
          </motion.div>
        ))}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="px-6 md:px-10 py-8 md:py-10 flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-[#030304] bg-[#030304] text-[#F5F5F4]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F5F5F4] opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F5F5F4]" />
          </span>
          Available for Projects
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- clients marquee ---------- */
function Clients() {
  const logoModules = import.meta.glob('../assets/images/Clientslogos/*', { eager: true });
  const logos = Object.values(logoModules).map((mod: any) => mod.default as string);

  return (
    <section className="relative py-24 md:py-36 overflow-hidden bg-[#030304] text-[#F5F5F4] rounded-[40px] md:rounded-[60px] mx-4 md:mx-10 my-20 shadow-2xl">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[40px] md:rounded-[60px] z-0">
        <motion.div animate={{ rotate: 360, scale: [1, 1.2, 1] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute -top-[50%] -left-[10%] w-[80vw] h-[80vw] rounded-full blur-[100px] opacity-[0.15]" style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 60%)" }} />
        <motion.div animate={{ rotate: -360, scale: [1, 1.5, 1] }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute -bottom-[40%] -right-[20%] w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-[0.1]" style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 60%)" }} />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(#F5F5F4 1px, transparent 1px)", backgroundSize: "6px 6px" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10 mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
        <Reveal className="md:col-span-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F5F5F4]/15 bg-[#F5F5F4]/5 backdrop-blur px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-[#F5F5F4]/70 mb-8 shadow-soft">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F5F5F4] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#F5F5F4]" />
            </span>
            Our Partners
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-[#F5F5F4] tracking-tight">
            Trusted by the <br/><em className="italic text-[#F5F5F4]/70">industry leaders.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-4 text-[#F5F5F4]/60 text-base md:text-lg leading-relaxed">
          We partner with forward-thinking companies across industries to create digital experiences that matter and drive real growth.
        </Reveal>
      </div>

      {/* Marquee Grids */}
      <div className="relative z-10 space-y-6 md:space-y-8 mt-10">
        {[0, 1].map(row => {
          // Split logos into two roughly equal chunks for the two rows
          const half = Math.ceil(logos.length / 2);
          const rowLogos = row === 0 ? logos.slice(0, half) : logos.slice(half);

          return (
            <div key={row} className="overflow-hidden py-2 flex">
              <motion.div 
                animate={{ x: row === 0 ? [0, -3000] : [-3000, 0] }}
                transition={{ duration: row === 0 ? 50 : 60, repeat: Infinity, ease: "linear" }}
                className="flex gap-6 md:gap-8 pr-6 md:pr-8 w-max"
              >
                {[...rowLogos, ...rowLogos, ...rowLogos, ...rowLogos].map((logo, i) => (
                  <div key={`${row}-${i}`} className="group relative flex items-center justify-center h-24 md:h-32 min-w-[200px] md:min-w-[260px] px-8 md:px-10 rounded-3xl bg-[#F5F5F4]/[0.03] border border-[#F5F5F4]/10 backdrop-blur-md hover:bg-[#F5F5F4]/10 hover:border-[#F5F5F4]/30 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden">
                    <img src={logo} alt="Client Logo" className="relative z-10 max-h-12 md:max-h-16 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-500 filter grayscale brightness-200 group-hover:filter-none" />
                  </div>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- services ---------- */
function Services() {
  const items = [
    { n: "01", t: "Brand Strategy", d: "We build digital strategies that align with your goals and create measurable business impact.", span: "col-span-1 md:col-span-2 md:row-span-2 flex-col", art: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08), transparent 50%)" },
    { n: "02", t: "Web Design", d: "High-performing websites that are fast, responsive, and future-ready.", span: "col-span-1 md:col-span-1 md:row-span-1 flex-col", art: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05), transparent 70%)" },
    { n: "03", t: "Video Production", d: "Engaging videos that tell your brand story and connect emotionally.", span: "col-span-1 md:col-span-1 md:row-span-1 flex-col", art: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06), transparent 60%)" },
    { n: "04", t: "Digital Marketing", d: "Data-driven marketing strategies that increase visibility and generate real results.", span: "col-span-1 md:col-span-3 md:row-span-1 flex-col md:flex-row md:items-center", art: "linear-gradient(90deg, rgba(255,255,255,0.03), transparent)" },
  ];

  return (
    <section id="services" className="relative py-28 md:py-44 bg-[#030304] text-[#F5F5F4] overflow-hidden rounded-[2.5rem] md:rounded-[4rem] mx-2 md:mx-4 my-10 shadow-2xl">
      {/* Animated Ambient Background & Scrolling Text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          animate={{ x: ["-10%", "30%", "-10%"], y: ["0%", "20%", "0%"], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-[-10%] w-[50vw] h-[50vw] bg-gradient-to-r from-gray-500 to-gray-700 rounded-full blur-[140px] mix-blend-screen"
        />
        <motion.div
          animate={{ x: ["20%", "-20%", "20%"], y: ["20%", "0%", "20%"], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-gradient-to-r from-gray-600 to-gray-400 rounded-full blur-[160px] mix-blend-screen"
        />
      </div>

      {/* Giant Scrolling Text Background */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 overflow-hidden pointer-events-none opacity-[0.03] flex whitespace-nowrap z-0">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="font-display text-[25vw] leading-none tracking-tight flex shrink-0"
        >
          WHAT WE DO — WHAT WE DO — WHAT WE DO — WHAT WE DO — 
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16 md:mb-24">
          <Reveal className="md:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.24em] opacity-60 mb-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F5F5F4]" /> What We Do
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              Digital Solutions <em className="italic block opacity-90">that drive results.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-4 md:col-start-9 opacity-70 leading-relaxed">
            We blend creativity, strategy, and technology to build digital experiences that help brands grow, engage, and lead.
          </Reveal>
        </div>

        {/* Bento Grid Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(250px,auto)] gap-4 md:gap-6">
          {items.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease }}
              className={`group relative overflow-hidden rounded-[2rem] bg-[#0a0a0b] border border-white/5 p-8 md:p-12 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex justify-between ${s.span}`}
            >
              {/* Card internal gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: s.art }} />
              
              <div className="relative z-10">
                <div className="text-[11px] uppercase tracking-[0.22em] opacity-50 mb-8 inline-block border border-white/10 rounded-full px-4 py-1">{s.n}</div>
                <h3 className="font-display text-4xl md:text-5xl leading-tight mb-4">{s.t}</h3>
              </div>
              
              <div className={`relative z-10 flex items-end justify-between gap-6 mt-10 md:mt-auto ${s.span.includes("md:flex-row") ? "md:w-1/2 md:mt-0" : ""}`}>
                <p className="text-[#F5F5F4]/60 leading-relaxed max-w-sm">{s.d}</p>
                <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500 transform group-hover:-rotate-45 shadow-lg">
                  <span className="text-xl leading-none">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- work ---------- */
function Work() {
  const projects = [
    { t: "Lumetix", c: "Fintech Website", y: "2025", big: true, art: "linear-gradient(140deg,#0a0a0b 0%,#2a2a2c 100%)", img: lumetixImg },
    { t: "Clarity", c: "Brand Identity", y: "2025", big: false, art: "linear-gradient(140deg,#e8e7e3 0%,#c9c7c1 100%)", dark: true },
    { t: "Pulse Analytics", c: "Dashboard Design", y: "2024", big: false, art: "linear-gradient(140deg,#1a1a1c 0%,#3a3a3c 100%)" },
    { t: "Nexonom", c: "Mobile App Design", y: "2024", big: true, art: "linear-gradient(140deg,#d8d6d0 0%,#b8b6b0 100%)", dark: true },
  ];
  return (
    <section id="work" className="py-28 md:py-44">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16 md:mb-24">
          <Reveal className="md:col-span-8">
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#030304]/60 mb-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#030304]" /> Our Work
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-[#030304]">
              Work that <em className="italic">speaks for itself.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-3 md:col-start-10 text-[#030304]/70 leading-relaxed">
            We take pride in delivering digital experiences that make a difference.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((p, i) => (
            <motion.a key={p.t} href="#" data-cursor
              initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: (i % 2) * 0.1, ease }}
              className={`group relative overflow-hidden rounded-3xl shadow-soft aspect-[5/4] ${p.big ? "md:col-span-7" : "md:col-span-5"} ${p.dark ? "text-[#030304]" : "text-[#F5F5F4]"}`}
              style={{ background: p.art }}>
              {p.img && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img src={p.img} alt={p.t} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.22,1,0.36,1]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
              )}
              {!p.img && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.3 }} whileHover={{ scale: 1.1, opacity: 0.5 }} transition={{ duration: 1.2, ease }}
                  className="absolute -right-20 -bottom-20 w-[55%] aspect-square rounded-full pointer-events-none"
                  style={{ background: p.dark ? "radial-gradient(circle at 30% 30%, #ffffff, #b8b6b0 70%)" : "radial-gradient(circle at 30% 30%, #4a4a4c, #030304 70%)" }} />
              )}
              <div className="relative h-full flex flex-col justify-between p-6 md:p-10 z-10">
                <div className="flex items-start justify-between">
                  <div className="text-[11px] uppercase tracking-[0.22em] opacity-60">{p.c}</div>
                  <div className="text-[11px] uppercase tracking-[0.22em] opacity-60">{p.y}</div>
                </div>
                <div className="flex items-end justify-between">
                  <h3 className="font-display text-4xl md:text-6xl leading-none">{p.t}</h3>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-current/30 backdrop-blur opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-45 text-lg">↗</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16 md:mt-20 flex justify-center" >
          <Magnetic>
            <a href="#" className="group inline-flex items-center gap-3 rounded-full border border-[#030304]/30 px-7 py-4 text-[12px] uppercase tracking-[0.22em] text-[#030304] hover:bg-[#030304] hover:text-[#F5F5F4] transition-colors">
              View All Projects
              <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- mission & vision ---------- */
function MissionVision() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Track hover state for cards and center circle
  const [impactHovered, setImpactHovered] = useState(false);
  const [visionHovered, setVisionHovered] = useState(false);

  const missionTags = ["Research", "Strategy", "Innovation"];
  const visionTags = ["Design", "Develop", "Deliver"];

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="relative py-28 md:py-44 overflow-hidden"
    >
      {/* ── Split Background ── */}
      <div className="absolute inset-0 flex flex-col md:flex-row pointer-events-none z-0">
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[#F5F5F4]" />
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[#030304]" />
      </div>

      {/* ── Background Watermark Text ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none z-0">
        <motion.div
          animate={{ x: ["-2%", "2%", "-2%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="font-display text-[22vw] font-black leading-none text-[#030304]/[0.015] md:text-white/[0.01] whitespace-nowrap tracking-[-0.06em]"
        >
          DARK MEDIA
        </motion.div>
      </div>

      {/* ── Looping Animated Line Grid (Background) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="splitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#030304" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#888888" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#F5F5F4" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Horizontal lines */}
          {[120, 250, 380, 490, 590].map((y, i) => (
            <motion.line
              key={`h-${i}`}
              x1="0" y1={y} x2="1200" y2={y}
              stroke="url(#splitGradient)" strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1.8, delay: 0.3 + i * 0.15, ease }}
            />
          ))}

          {/* Vertical lines */}
          {[200, 420, 600, 780, 1000].map((x, i) => (
            <motion.line
              key={`v-${i}`}
              x1={x} y1="0" x2={x} y2="700"
              stroke="url(#splitGradient)" strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1.8, delay: 0.6 + i * 0.12, ease }}
            />
          ))}

          {/* Infinity Loop Line Animation */}
          <motion.path
            d="M 150 350 C 150 180, 450 180, 600 350 C 750 520, 1050 520, 1050 350 C 1050 180, 750 180, 600 350 C 450 520, 150 520, 150 350 Z"
            stroke="url(#splitGradient)"
            strokeWidth="2"
            strokeDasharray="8 16"
            fill="none"
            animate={{ strokeDashoffset: [0, -100] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />

          <motion.path
            d="M 150 350 C 150 180, 450 180, 600 350 C 750 520, 1050 520, 1050 350 C 1050 180, 750 180, 600 350 C 450 520, 150 520, 150 350 Z"
            stroke="url(#splitGradient)"
            strokeWidth="1"
            strokeDasharray="30 80"
            fill="none"
            animate={{ strokeDashoffset: [0, 150] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          {/* Concentric orbital rings around the center */}
          <motion.circle
            cx="600" cy="350" r="110"
            stroke="url(#splitGradient)" strokeWidth="1.5" strokeDasharray="6 12"
            fill="none"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            style={{ originX: "600px", originY: "350px" }}
          />
          <motion.circle
            cx="600" cy="350" r="160"
            stroke="url(#splitGradient)" strokeWidth="1" strokeDasharray="10 20"
            fill="none"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ originX: "600px", originY: "350px" }}
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10">
        {/* ── Section Header ── */}
        <Reveal className="text-center mb-16 md:mb-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#030304]/15 md:border-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-[#030304]/60 md:text-[#F5F5F4]/60 mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-[#030304] md:bg-[#F5F5F4]" />
            Our Core
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-[-0.03em] flex flex-col md:flex-row justify-center items-center gap-x-6 gap-y-2">
            <span className="text-[#030304]">Impact</span>
            <span className="text-[#030304]/40 md:text-white/20">&amp;</span>
            <span className="text-[#030304] md:text-[#F5F5F4]">Vision</span>
          </h2>
          <p className="mt-6 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            <span className="text-[#030304]/60">We create, build, and tell stories </span>
            <span className="text-[#030304]/60 md:text-[#F5F5F4]/60">that make a difference.</span>
          </p>
        </Reveal>

        {/* ── Main 3-column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 items-center">

          {/* ── LEFT — IMPACT (MISSION) ── */}
          <div className="flex flex-col gap-6">
            {/* Impact label pill */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease }}
              className="self-start flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-[#030304] block" />
              <span className="px-5 py-2.5 rounded-full bg-[#030304] text-[#F5F5F4] text-[11px] uppercase tracking-[0.2em] font-medium">Mission</span>
              <span className="h-px w-16 bg-[#030304]/20" />
            </motion.div>

            {/* Stacked hover card — Impact slides back, Contact revealed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.55, ease }}
              className="relative"
              style={{ perspective: 1200 }}
              onMouseEnter={() => setImpactHovered(true)}
              onMouseLeave={() => setImpactHovered(false)}
            >
              {/* BEHIND card — Contact CTA (revealed on hover) */}
              <div
                className="absolute inset-0 rounded-3xl bg-[#030304] text-[#F5F5F4] flex flex-col items-center justify-center gap-4 p-8 z-0 overflow-hidden"
              >
                <motion.div
                  animate={{ opacity: impactHovered ? 1 : 0, scale: impactHovered ? 1 : 0.8, y: impactHovered ? 0 : 20 }}
                  transition={{ duration: 0.5, ease }}
                  className="flex flex-col items-center gap-4 text-center"
                >
                  <span className="text-[11px] uppercase tracking-[0.25em] text-white/50">Ready to build?</span>
                  <p className="font-display text-3xl leading-tight">Let's create
                    <em className="italic block opacity-70">something great.</em>
                  </p>
                  <a
                    href="#contact"
                    className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/20 hover:border-white/60 px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white/10"
                  >
                    Contact us <span>↗</span>
                  </a>
                </motion.div>
                {/* animated bg glow */}
                <motion.div
                  animate={{ scale: impactHovered ? [1, 1.3, 1] : 1, opacity: impactHovered ? 0.15 : 0 }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-3xl"
                  style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3), transparent 70%)" }}
                />
              </div>

              {/* FRONT card — Impact (slides backward on hover) */}
              <motion.div
                animate={{
                  z: impactHovered ? -60 : 0,
                  y: impactHovered ? 18 : 0,
                  scale: impactHovered ? 0.93 : 1,
                  rotateX: impactHovered ? 4 : 0,
                  boxShadow: impactHovered
                    ? "0 40px 80px -20px rgba(3,3,4,0.35)"
                    : "0 8px 30px -10px rgba(3,3,4,0.12)",
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 rounded-3xl bg-white border border-[#030304]/10 p-8 md:p-10 cursor-pointer overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="mb-8">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-[#030304]/40 mb-3">01 / Focus &amp; Learn</div>
                  <h3 className="font-display text-[10vw] sm:text-[7vw] md:text-[3.8vw] leading-[0.85] tracking-[-0.04em] text-[#030304]">
                    Impact
                    <em className="italic block text-[#030304]/50">Mission.</em>
                  </h3>
                </div>
                <p className="text-[#030304]/60 leading-relaxed text-sm md:text-base mb-6">
                  We identify real problems, learn deeply, and craft smart solutions that create meaningful impact for every brand we work with.
                </p>
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#030304]/40">
                  <span className="h-px w-6 bg-[#030304]/30" />
                  Hover to connect
                </div>
                {/* Corner arrow */}
                <motion.div
                  animate={{ rotate: impactHovered ? 45 : 0, opacity: impactHovered ? 0.2 : 0.6 }}
                  className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full border border-[#030304]/20 text-sm"
                >
                  ↗
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Impact tags */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9, ease }}
              className="flex items-center gap-2 flex-wrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#030304]/30 block" />
              {missionTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                  className="px-3 py-1.5 rounded-full border border-[#030304]/15 text-[11px] uppercase tracking-[0.18em] text-[#030304]/60 hover:border-[#030304]/40 hover:text-[#030304] transition-colors cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
              <span className="h-px flex-1 bg-[#030304]/10 min-w-[20px]" />
            </motion.div>
          </div>

          {/* ── CENTER — SPLIT CIRCLE ── */}
          <div className="flex flex-col items-center justify-center gap-10 py-8 relative">
            <Reveal delay={0.3}>
              <div className="relative flex items-center justify-center">
                {/* Pulsing rings */}
                {[1, 1.4, 1.9].map((scale, i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [scale, scale * 1.05, scale], opacity: [0.08, 0.03, 0.08] }}
                    transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
                    className="absolute w-36 h-36 md:w-48 md:h-48 rounded-full border border-[#030304]/20 md:border-white/10"
                  />
                ))}

                {/* Split circle: Left half white, right half black */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 180 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden shadow-2xl border border-[#030304]/10 cursor-pointer flex items-center justify-center bg-transparent"
                >
                  {/* Left half (Light) */}
                  <div className="absolute top-0 left-0 w-1/2 h-full bg-[#F5F5F4] overflow-hidden" />
                  
                  {/* Right half (Dark) */}
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-[#030304] overflow-hidden" />

                  {/* Inner element that inverts automatically */}
                  <div className="absolute inset-0 flex items-center justify-center mix-blend-difference pointer-events-none">
                    <span className="w-5 h-0.5 bg-white rounded-full" />
                    <span className="h-5 w-0.5 bg-white rounded-full absolute" />
                  </div>

                  {/* Inner dashed ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-2 rounded-full border border-dashed border-[#888]/20"
                  />
                </motion.div>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <p className="text-center text-sm leading-relaxed max-w-[220px]">
                <span className="text-[#030304]/60">Driven by purpose. </span>
                <span className="text-[#030304]/60 md:text-[#F5F5F4]/60">Shaped by vision.</span>
              </p>
            </Reveal>

            <Reveal delay={0.65}>
              <Magnetic>
                <a
                  href="#work"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#030304] text-[#F5F5F4] md:bg-[#F5F5F4] md:text-[#030304] px-7 py-4 text-[12px] uppercase tracking-[0.2em] shadow-soft hover:shadow-deep transition-all"
                >
                  <span className="inline-block transition-transform duration-300 group-hover:rotate-45 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                  See Our Work
                </a>
              </Magnetic>
            </Reveal>
          </div>

          {/* ── RIGHT — VISION ── */}
          <div className="flex flex-col gap-6">
            {/* Vision label pill — right-aligned */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease }}
              className="self-end flex items-center gap-3"
            >
              <span className="h-px w-16 bg-[#030304]/20 md:bg-white/10" />
              <span className="px-5 py-2.5 rounded-full bg-[#030304] text-[#F5F5F4] md:bg-[#F5F5F4] md:text-[#030304] text-[11px] uppercase tracking-[0.2em] font-medium">Vision</span>
              <span className="w-2 h-2 rounded-full bg-[#030304] md:bg-[#F5F5F4] block" />
            </motion.div>

            {/* Stacked hover card — Vision slides back, Contact revealed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.55, ease }}
              className="relative"
              style={{ perspective: 1200 }}
              onMouseEnter={() => setVisionHovered(true)}
              onMouseLeave={() => setVisionHovered(false)}
            >
              {/* BEHIND card — Contact CTA (revealed on hover) */}
              <div
                className="absolute inset-0 rounded-3xl bg-[#F5F5F4] text-[#030304] flex flex-col items-center justify-center gap-4 p-8 z-0 overflow-hidden"
              >
                <motion.div
                  animate={{ opacity: visionHovered ? 1 : 0, scale: visionHovered ? 1 : 0.8, y: visionHovered ? 0 : 20 }}
                  transition={{ duration: 0.5, ease }}
                  className="flex flex-col items-center gap-4 text-center"
                >
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#030304]/50">Ready to build?</span>
                  <p className="font-display text-3xl leading-tight">Let's create
                    <em className="italic block opacity-70">something great.</em>
                  </p>
                  <a
                    href="#contact"
                    className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#030304]/20 hover:border-[#030304]/60 px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#030304]/10"
                  >
                    Contact us <span>↗</span>
                  </a>
                </motion.div>
                {/* animated bg glow */}
                <motion.div
                  animate={{ scale: visionHovered ? [1, 1.3, 1] : 1, opacity: visionHovered ? 0.15 : 0 }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-3xl"
                  style={{ background: "radial-gradient(circle at 50% 50%, rgba(3,3,4,0.15), transparent 70%)" }}
                />
              </div>

              {/* FRONT card — Vision (slides backward on hover) */}
              <motion.div
                animate={{
                  z: visionHovered ? -60 : 0,
                  y: visionHovered ? 18 : 0,
                  scale: visionHovered ? 0.93 : 1,
                  rotateX: visionHovered ? 4 : 0,
                  boxShadow: visionHovered
                    ? "0 40px 80px -20px rgba(0,0,0,0.4)"
                    : "0 8px 30px -10px rgba(0,0,0,0.2)",
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 rounded-3xl bg-[#030304] text-[#F5F5F4] p-8 md:p-10 cursor-pointer overflow-hidden border border-white/5"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="mb-8">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-white/30 mb-3">02 / Prevent &amp; Scale</div>
                  <h3 className="font-display text-[10vw] sm:text-[7vw] md:text-[3.8vw] leading-[0.85] tracking-[-0.04em] text-white">
                    Vision
                    <em className="italic block text-white/50">Future.</em>
                  </h3>
                </div>
                <p className="text-white/60 leading-relaxed text-sm md:text-base mb-6">
                  We build systems, brands, and experiences that prevent problems before they happen and drive long-term lasting value.
                </p>
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/30">
                  <span className="h-px w-6 bg-white/20" />
                  Hover to connect
                </div>
                {/* Corner arrow */}
                <motion.div
                  animate={{ rotate: visionHovered ? 45 : 0, opacity: visionHovered ? 0.2 : 0.6 }}
                  className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full border border-white/15 text-sm"
                >
                  ↗
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Vision tags */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9, ease }}
              className="flex items-center gap-2 flex-wrap justify-end"
            >
              <span className="h-px flex-1 bg-[#030304]/10 md:bg-white/10 min-w-[20px]" />
              {visionTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                  className="px-3 py-1.5 rounded-full border border-[#030304]/15 md:border-white/10 text-[11px] uppercase tracking-[0.18em] text-[#030304]/60 md:text-[#F5F5F4]/60 hover:border-[#030304]/40 md:hover:border-white/30 hover:text-[#030304] md:hover:text-[#F5F5F4] transition-colors cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
              <span className="w-1.5 h-1.5 rounded-full bg-[#030304]/30 md:bg-white/20 block" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- contact / footer ---------- */
function Contact() {
  return (
    <section id="contact" className="relative bg-[#030304] text-[#F5F5F4] overflow-hidden rounded-t-[2.5rem] md:rounded-t-[4rem] mt-[-2.5rem] md:mt-[-4rem] z-10 shadow-[0_-20px_60px_rgba(0,0,0,0.6)]">
      {/* Animated Aurora/Glow Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 mix-blend-screen">
        <motion.div
          animate={{ x: ["-10%", "60%", "-20%", "-10%"], y: ["-10%", "40%", "80%", "-10%"], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-white/10 rounded-full blur-[100px] md:blur-[160px]"
        />
        <motion.div
          animate={{ x: ["100%", "-20%", "100%"], y: ["100%", "-10%", "100%"], scale: [1, 1.4, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[70vw] h-[70vw] bg-white/10 rounded-full blur-[100px] md:blur-[160px]"
        />
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
                <li key={s}>
                  <a href="#" className="text-sm md:text-base opacity-80 hover:opacity-100 hover:-translate-y-1 inline-block transition-transform duration-300">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* giant wordmark logo */}
        <div className="mt-20 md:mt-28 flex justify-center pb-4">
          <Reveal delay={0.3}>
            <img src={whiteLogo} alt="Dark Media" className="w-[85vw] md:w-[65vw] max-w-5xl opacity-90 drop-shadow-2xl" />
          </Reveal>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] uppercase tracking-[0.22em] opacity-40 pt-8 border-t border-[#F5F5F4]/10">
          <div>© 2026 Dark Media · All rights reserved</div>
          <div className="flex items-center gap-3">
            <img src={logoMark.url} alt="" className="w-5 h-5 rounded-full grayscale opacity-70" />
            Designed in Copenhagen
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- root ---------- */
function Index() {
  return (
    <main className="relative">
      <Cursor />
      <Nav />
      <Hero />
      <StatsStrip />
      <Clients />
      <Services />
      <MissionVision />
      {/* <Work /> */}
      <Contact />
    </main>
  );
}
