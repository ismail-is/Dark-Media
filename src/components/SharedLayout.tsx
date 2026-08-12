import { Link } from "@tanstack/react-router";
import { motion, useInView, useSpring } from "motion/react";
import { useState, useEffect, useRef } from "react";
import whiteLogo from "@/assets/Dark Media Logo - White.png";

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({ children, delay = 0, y = 40, className = "" }: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay, ease }} className={className}>
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
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute top-0 left-0 right-0 z-30"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-10 md:py-7">
        <Link to="/" className="flex items-center gap-3">
          <span className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-[#F5F5F4]/15 bg-[#F5F5F4]">
            <span className="absolute inset-y-0 left-0 w-1/2 bg-[#030304]" />
          </span>
          <span className="font-display text-xl md:text-2xl text-[#F5F5F4] leading-none">Dark Media</span>
        </Link>
        <Link to="/" className="group inline-flex items-center gap-2 rounded-full bg-[#F5F5F4] text-[#030304] px-5 py-2 text-[13px] font-medium shadow-soft hover:scale-105 transition-transform">
          Back to Home
        </Link>
      </div>
    </motion.header>
  );
}

export function Footer() {
  return (
    <section id="contact" className="relative bg-[#030304] text-[#F5F5F4] overflow-hidden rounded-t-[2.5rem] md:rounded-t-[4rem] mt-10 md:mt-16 z-10 shadow-[0_-20px_60px_rgba(0,0,0,0.6)] w-full">
      {/* Animated Aurora/Glow Background for Desktop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 mix-blend-screen hidden lg:block">
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

      {/* Static Glow Background for Mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15 mix-blend-screen lg:hidden">
        <div
          className="absolute top-0 left-0 w-[90vw] h-[90vw] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 65%)" }}
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
                  <em className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">magic.</em>
                </span>
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-4 flex justify-start md:justify-end md:pt-8">
            <Reveal delay={0.2}>
              <Magnetic strength={0.3}>
                <a href="https://wa.me/919480889252" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center w-36 h-36 md:w-48 md:h-48 rounded-full bg-[#F5F5F4] text-[#030304] overflow-hidden transition-transform duration-500 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                  <span className="relative z-10 font-display text-2xl md:text-3xl text-center leading-none group-hover:text-white transition-colors duration-500">Get in<br />Touch</span>
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
              <a href="https://wa.me/919480889252" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-2">
                +91 94808 89252
              </a>
              <a href="https://wa.me/917483156464" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-2">
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
                { name: "Twitter", href: "#" }
              ].map(s => (
                <li key={s.name}>
                  <a href={s.href} target={s.href !== "#" ? "_blank" : undefined} rel={s.href !== "#" ? "noopener noreferrer" : undefined} className="text-sm md:text-base opacity-80 hover:opacity-100 hover:-translate-y-1 inline-block transition-transform duration-300">
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
            <img src={whiteLogo} alt="Dark Media" className="w-[85vw] md:w-[65vw] max-w-5xl opacity-90 drop-shadow-2xl" />
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
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: "radial-gradient(#F5F5F4 1px, transparent 1px)", backgroundSize: "4px 4px" }} />
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[#030304] z-0 pointer-events-none fixed">
        <div
          className="absolute -top-[10%] -left-[10%] w-[90vw] h-[90vw] rounded-full opacity-[0.2]"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 75%)" }}
        />
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: "radial-gradient(#F5F5F4 1px, transparent 1px)", backgroundSize: "4px 4px" }} />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#030304] z-0 pointer-events-none fixed">
      <motion.div
        animate={{ scale: [1, 1.25, 1], rotate: [0, 90, 0], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.4, 1], rotate: [0, -90, 0], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] rounded-full blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)" }}
      />
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: "radial-gradient(#F5F5F4 1px, transparent 1px)", backgroundSize: "4px 4px" }} />
    </div>
  );
}

export function SharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen bg-[#030304] text-[#F5F5F4] flex flex-col overflow-hidden font-sans">
      <BgAnimation />
      <Nav />
      <div className="relative z-10 flex-grow flex flex-col items-center w-full">
        {children}
      </div>
      <Footer />
    </main>
  );
}
