import { Link } from "@tanstack/react-router";
import { motion, useInView, useSpring, useScroll } from "motion/react";
import { useState, useEffect, useRef } from "react";
import whiteLogo from "@/assets/Dark Media Logo - White.png";

const ease = [0.22, 1, 0.36, 1] as const;

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

export function Nav({ theme = "dark" }: { theme?: "light" | "dark" }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest: number) => {
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
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    // { label: "Work", href: "/portfolio" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/#contact" },
  ];

  const socials = [
    { label: "Instagram", abbr: "IG", href: "https://www.instagram.com/darkmedia.tech" },
    { label: "Behance", abbr: "Be", href: "#" },
    { label: "LinkedIn", abbr: "Li", href: "#" },
    { label: "Twitter", abbr: "X", href: "#" },
  ];

  const isLight = theme === "light" || scrolled;

  return (
    <>
      {/* ── Top Bar ── */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.4, ease }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-6 pt-4 md:pt-6 pointer-events-none"
      >
        <div
          className={`pointer-events-auto flex items-center justify-between px-6 md:px-8 rounded-full border w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled
              ? "max-w-225 bg-white/85 backdrop-blur-md shadow-soft border-black/5 py-3"
              : "max-w-400 bg-transparent backdrop-blur-none shadow-none border-transparent py-5"
          }`}
        >
          {/* Left — Logo */}
          <a href="/" className="flex items-center gap-2.5">
            <img
              src={whiteLogo}
              alt="Dark Media"
              className={`h-6 md:h-8 w-auto opacity-90 transition-transform hover:scale-105 origin-left ${isLight ? "invert" : ""}`}
            />
          </a>

          {/* Right — Let's Talk + Menu Icon */}
          <div className="flex items-center gap-3 md:gap-5">
            <div className="hidden sm:inline-block">
              <Magnetic strength={0.2}>
                <a
                  href="/#contact"
                  className={`group relative overflow-hidden inline-flex items-center gap-2 rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.2em] shadow-soft transition-all hover:shadow-deep ${isLight ? "bg-[#030304] text-[#F5F5F4]" : "bg-[#F5F5F4] text-[#030304]"}`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Let&rsquo;s talk
                    <span className="inline-block transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </span>
                  <span
                    className={`absolute inset-0 translate-y-[101%] transition-transform duration-300 ease-out group-hover:translate-y-0 rounded-full ${isLight ? "bg-white/20" : "bg-black/10"}`}
                  />
                </a>
              </Magnetic>
            </div>

            {/* Hamburger / Close icon */}
            <Magnetic strength={0.25}>
              <button
                id="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                className={`relative flex items-center justify-center w-12 h-12 rounded-full border group transition-colors duration-300 ${isLight ? "border-[#030304]/20 bg-transparent hover:bg-[#030304]" : "border-[#F5F5F4]/20 bg-transparent hover:bg-[#F5F5F4]"}`}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                <div className="relative w-5 h-3.5 flex flex-col justify-between">
                  <motion.span
                    animate={
                      menuOpen
                        ? { rotate: 45, y: 5, width: "100%" }
                        : { rotate: 0, y: 0, width: "100%" }
                    }
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={`block h-[1.5px] rounded-full origin-center transition-colors duration-300 ${isLight ? "bg-[#030304] group-hover:bg-[#F5F5F4]" : "bg-[#F5F5F4] group-hover:bg-[#030304]"}`}
                  />
                  <motion.span
                    animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`block h-[1.5px] w-3/4 rounded-full transition-colors duration-300 ${isLight ? "bg-[#030304] group-hover:bg-[#F5F5F4]" : "bg-[#F5F5F4] group-hover:bg-[#030304]"}`}
                  />
                  <motion.span
                    animate={
                      menuOpen
                        ? { rotate: -45, y: -5, width: "100%" }
                        : { rotate: 0, y: 0, width: "60%" }
                    }
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={`block h-[1.5px] rounded-full origin-center transition-colors duration-300 ${isLight ? "bg-[#030304] group-hover:bg-[#F5F5F4]" : "bg-[#F5F5F4] group-hover:bg-[#030304]"}`}
                  />
                </div>
              </button>
            </Magnetic>
          </div>
        </div>
      </motion.header>

      {/* ── Full-screen Navigation Overlay ── */}
      <motion.nav
        initial={false}
        animate={{
          clipPath: menuOpen ? "circle(150% at 95% 5%)" : "circle(0% at 95% 5%)",
        }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-60 bg-[#030304] text-[#F5F5F4] overflow-hidden"
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
            className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full blur-[140px] opacity-[0.12]"
            style={{
              background:
                "radial-gradient(circle, rgba(120,100,255,0.5), rgba(255,120,200,0.3), transparent 70%)",
            }}
          />

          {/* Aurora orb 2 — bottom-right, cool */}
          <motion.div
            animate={{
              x: ["20%", "-25%", "20%"],
              y: ["20%", "-15%", "20%"],
              scale: [1.2, 1, 1.2],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-15%] right-[-15%] w-[70vw] h-[70vw] rounded-full blur-[160px] opacity-[0.1]"
            style={{
              background:
                "radial-gradient(circle, rgba(60,180,255,0.4), rgba(100,255,200,0.2), transparent 70%)",
            }}
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
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          {/* Rotating orbital ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vmin] h-[70vmin] rounded-full border border-white/4"
          >
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/10" />
          </motion.div>

          {/* Second orbital — slower, larger */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vmin] h-[90vmin] rounded-full border border-white/2.5"
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
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
            }}
          />
        </div>

        {/* ── Close button inside fullscreen nav ── */}
        <motion.button
          initial={false}
          animate={
            menuOpen ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -90 }
          }
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
            <a href="/" onClick={() => setMenuOpen(false)} className="inline-block">
              <img
                src={whiteLogo}
                alt="Dark Media"
                className="h-7 md:h-9 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </a>
          </motion.div>

          {/* Navigation Links — centered */}
          <div className="flex flex-col items-center gap-2 md:gap-3">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={false}
                animate={
                  menuOpen
                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                    : { opacity: 0, y: 50, filter: "blur(8px)" }
                }
                transition={{ delay: menuOpen ? 0.35 + i * 0.1 : 0, duration: 0.7, ease }}
                className="overflow-hidden"
              >
                {link.href.startsWith("/") && !link.href.includes("#") ? (
                  <Link
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="group relative flex items-center gap-4 md:gap-6 py-3 md:py-4 transition-all duration-500"
                  >
                    <span className="text-[11px] font-mono text-white/25 tracking-wider self-start pt-2 md:pt-4">
                      0{i + 1}
                    </span>
                    <span className="font-display text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] leading-[0.9] tracking-[-0.04em] text-white/90 group-hover:text-white transition-colors duration-300">
                      {link.label}
                    </span>
                    <motion.span className="text-2xl md:text-3xl text-white/0 group-hover:text-white/60 transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                      ↗
                    </motion.span>
                    {/* Hover underline effect */}
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[0.22,1,0.36,1] origin-left" />
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="group relative flex items-center gap-4 md:gap-6 py-3 md:py-4 transition-all duration-500"
                  >
                    <span className="text-[11px] font-mono text-white/25 tracking-wider self-start pt-2 md:pt-4">
                      0{i + 1}
                    </span>
                    <span className="font-display text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] leading-[0.9] tracking-[-0.04em] text-white/90 group-hover:text-white transition-colors duration-300">
                      {link.label}
                    </span>
                    <motion.span className="text-2xl md:text-3xl text-white/0 group-hover:text-white/60 transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                      ↗
                    </motion.span>
                    {/* Hover underline effect */}
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[0.22,1,0.36,1] origin-left" />
                  </a>
                )}
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
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/25 mr-4 hidden md:inline">
                Follow
              </span>
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
              {/* <a
                href="mailto:hello@darkmedia.studio"
                className="text-sm text-white/40 hover:text-white/90 transition-colors duration-300"
              >
                hello@darkmedia.studio
              </a> */}
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

export function Footer() {
  return (
    <section
      id="contact"
      className="relative bg-[#030304] text-[#F5F5F4] overflow-hidden rounded-t-[2.5rem] md:rounded-t-[4rem] mt-10 md:mt-16 z-10 shadow-[0_-20px_60px_rgba(0,0,0,0.6)] w-full"
    >
      {/* Animated Aurora/Glow Background for Desktop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 mix-blend-screen hidden lg:block">
        <motion.div
          animate={{
            x: ["-10%", "60%", "-20%", "-10%"],
            y: ["-10%", "40%", "80%", "-10%"],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-white/10 rounded-full blur-[100px] md:blur-[160px]"
        />
        <motion.div
          animate={{ x: ["100%", "-20%", "100%"], y: ["100%", "-10%", "100%"], scale: [1, 1.4, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[70vw] h-[70vw] bg-white/10 rounded-full blur-[100px] md:blur-[160px]"
        />
      </div>

      {/* Static Glow Background for Mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15 mix-blend-screen lg:hidden">
        <div
          className="absolute top-0 left-0 w-[90vw] h-[90vw] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-10 pt-32 md:pt-48 pb-10">
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
              <h2 className="font-display text-[15vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] tracking-[-0.04em]">
                Let's make some
                <br />
                <span className="relative inline-block mt-2 md:mt-0">
                  <em className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                    magic.
                  </em>
                </span>
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-4 flex justify-start md:justify-end md:pt-8">
            <Reveal delay={0.2}>
              <Magnetic strength={0.3}>
                <a
                  href="https://wa.me/919480889252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-36 h-36 md:w-48 md:h-48 rounded-full bg-[#F5F5F4] text-[#030304] overflow-hidden transition-transform duration-500 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                >
                  <span className="relative z-10 font-display text-2xl md:text-3xl text-center leading-none group-hover:text-white transition-colors duration-500">
                    Get in
                    <br />
                    Touch
                  </span>
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
            <p className="opacity-80 leading-relaxed text-sm md:text-base flex flex-col gap-2">
              <a
                href="https://wa.me/919480889252"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-2"
              >
                +91 94808 89252
              </a>
              <a
                href="https://wa.me/917483156464"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-2"
              >
                +91 74831 56464
              </a>
            </p>
          </Reveal>
          <Reveal delay={0.25} className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.24em] opacity-40 mb-5">Socials</div>
            <ul className="flex flex-wrap gap-4 md:gap-6">
              {[
                { name: "Behance", href: "#" },
                { name: "Instagram", href: "https://www.instagram.com/darkmedia.tech" },
                { name: "LinkedIn", href: "#" },
                { name: "Twitter", href: "#" },
              ].map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target={s.href !== "#" ? "_blank" : undefined}
                    rel={s.href !== "#" ? "noopener noreferrer" : undefined}
                    className="text-sm md:text-base opacity-80 hover:opacity-100 hover:-translate-y-1 inline-block transition-transform duration-300"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* giant wordmark logo */}
        <div className="mt-20 md:mt-28 flex justify-center pb-4">
          <Reveal delay={0.3}>
            <img
              src={whiteLogo}
              alt="Dark Media"
              className="w-[85vw] md:w-[65vw] max-w-5xl opacity-90 drop-shadow-2xl"
            />
          </Reveal>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] uppercase tracking-[0.22em] opacity-40 pt-8 border-t border-[#F5F5F4]/10">
          <div>© {new Date().getFullYear()} Dark Media · All rights reserved</div>
        </div>
      </div>
    </section>
  );
}

export function BgAnimation() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || window.matchMedia("(pointer: coarse)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile === null) {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[#030304] z-0 pointer-events-none fixed">
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: "radial-gradient(#F5F5F4 1px, transparent 1px)",
            backgroundSize: "4px 4px",
          }}
        />
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[#030304] z-0 pointer-events-none fixed">
        <div
          className="absolute -top-[10%] -left-[10%] w-[90vw] h-[90vw] rounded-full opacity-[0.2]"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 75%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: "radial-gradient(#F5F5F4 1px, transparent 1px)",
            backgroundSize: "4px 4px",
          }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#030304] z-0 pointer-events-none fixed">
      <motion.div
        animate={{ scale: [1, 1.25, 1], rotate: [0, 90, 0], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.4, 1], rotate: [0, -90, 0], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] rounded-full blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: "radial-gradient(#F5F5F4 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />
    </div>
  );
}

export function SharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen bg-[#030304] text-[#F5F5F4] flex flex-col overflow-hidden font-sans">
      <BgAnimation />
      <Nav />
      <div className="relative z-10 flex-grow flex flex-col items-center w-full">{children}</div>
      <Footer />
    </main>
  );
}
