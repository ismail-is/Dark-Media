import { createFileRoute, Link } from "@tanstack/react-router";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useRef, useEffect, useState } from "react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dark Media" },
      {
        name: "description",
        content:
          "We are Dark Media — a creative studio obsessed with craft, storytelling, and building brands that endure.",
      },
    ],
  }),
  component: About,
});

const ease = [0.22, 1, 0.36, 1] as const;

/* ─── Reveal helper ─── */
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
  const inView = useInView(ref, { once: true, margin: "-60px" });
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

/* ─── Animated counting number ─── */
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(to / 60);
    const id = setInterval(() => {
      start += step;
      if (start >= to) { setVal(to); clearInterval(id); }
      else setVal(start);
    }, 18);
    return () => clearInterval(id);
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─── Looping animated background ─── */
function AnimatedBg({ dark = false }: { dark?: boolean }) {
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{ backgroundImage: "radial-gradient(#030304 1px, transparent 1px)", backgroundSize: "4px 4px" }}
        />
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Single static glow circle on mobile, no heavy animation or blur filters */}
        <div
          className="absolute -top-1/4 -left-1/4 w-[80vw] h-[80vw] rounded-full opacity-60"
          style={{ background: dark ? "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 75%)" : "radial-gradient(circle, rgba(3,3,4,0.04) 0%, transparent 75%)" }}
        />
        {/* grain */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{ backgroundImage: "radial-gradient(#030304 1px, transparent 1px)", backgroundSize: "4px 4px" }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* orb 1 */}
      <motion.div
        animate={{ x: [0, 60, -40, 0], y: [0, -80, 50, 0], scale: [1, 1.3, 0.9, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] rounded-full blur-[120px]"
        style={{ background: dark ? "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)" : "radial-gradient(circle, rgba(3,3,4,0.06) 0%, transparent 70%)" }}
      />
      {/* orb 2 */}
      <motion.div
        animate={{ x: [0, -50, 80, 0], y: [0, 60, -40, 0], scale: [1, 0.8, 1.2, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -right-1/4 w-[60vw] h-[60vw] rounded-full blur-[100px]"
        style={{ background: dark ? "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)" : "radial-gradient(circle, rgba(3,3,4,0.04) 0%, transparent 70%)" }}
      />
      {/* orb 3 */}
      <motion.div
        animate={{ x: [0, 40, -60, 0], y: [0, 40, 80, 0], scale: [1, 1.1, 0.85, 1] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-1/4 left-1/4 w-[50vw] h-[50vw] rounded-full blur-[90px]"
        style={{ background: dark ? "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)" : "radial-gradient(circle, rgba(3,3,4,0.05) 0%, transparent 70%)" }}
      />
      {/* grain */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{ backgroundImage: "radial-gradient(#030304 1px, transparent 1px)", backgroundSize: "4px 4px" }}
      />
    </div>
  );
}

/* ─── Nav ─── */
function Nav() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease }}
      className="absolute top-0 left-0 right-0 z-30"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-10 md:py-7">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-[#030304]/15 bg-[#030304]">
            <span className="absolute inset-y-0 left-0 w-1/2 bg-[#F5F5F4]" />
          </span>
          <span className="font-display text-xl text-[#030304] leading-none group-hover:opacity-70 transition-opacity">Dark Media</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-[12px] text-[#030304]/70 uppercase tracking-[0.18em]">
          {[{ l: "Work", h: "/portfolio" }, { l: "Services", h: "/#services" }, { l: "Contact", h: "/contact" }].map(n => 
            n.h.startsWith("/#") ? (
              <a key={n.l} href={n.h} className="relative group hover:text-[#030304] transition-colors">
                {n.l}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#030304] transition-all duration-400 group-hover:w-full" />
              </a>
            ) : (
              <Link key={n.l} to={n.h} className="relative group hover:text-[#030304] transition-colors">
                {n.l}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#030304] transition-all duration-400 group-hover:w-full" />
              </Link>
            )
          )}
          <span className="flex items-center gap-1.5 text-[#030304] font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-[#030304]" /> About
          </span>
        </nav>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-[#030304] text-[#F5F5F4] px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] shadow-soft hover:shadow-lg transition-shadow"
        >
          Let's Talk
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F5F5F4] text-[#030304] text-[10px] transition-transform group-hover:rotate-45">↗</span>
        </Link>
      </div>
    </motion.header>
  );
}

/* ─── Hero ─── */
function MobileHero() {
  const words = ["We", "Are", "Dark", "Media."];
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#F5F5F4]">
      <AnimatedBg />

      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(#030304 1px,transparent 1px),linear-gradient(90deg,#030304 1px,transparent 1px)", backgroundSize: "80px 80px" }}
      />

      <Nav />

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10 pt-32 pb-20 w-full">
        {/* label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-[#030304]/15 bg-[#030304]/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#030304]/70 mb-12"
        >
          <motion.span animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>✦</motion.span>
          Our Story
        </motion.div>

        {/* Giant heading */}
        <h1 className="font-display text-[17vw] sm:text-[14vw] lg:text-[11vw] leading-[0.87] tracking-[-0.04em] text-[#030304] mb-12 md:mb-20">
          {words.map((w, i) => (
            <span key={w} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, delay: 0.3 + i * 0.12, ease }}
              >
                {i === 2 || i === 3 ? <em className="italic">{w}</em> : w}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Bottom row */}
        <Reveal delay={0.9} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-[#030304]/10 pt-10">
          <p className="md:col-span-5 text-[#030304]/70 text-base md:text-xl leading-relaxed font-light">
            A creative studio built for the bold. We design, build, and grow brands that refuse to be ignored.
          </p>
          <div className="md:col-span-4 md:col-start-9 flex gap-6">
            <a href="#story" className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-[#030304]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#030304] text-[#F5F5F4] transition-transform group-hover:scale-110">↓</span>
              Discover More
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DesktopHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // mouse-parallax letters
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 18 });
  const sy = useSpring(my, { stiffness: 50, damping: 18 });
  useEffect(() => {
    const on = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 30);
      my.set((e.clientY / window.innerHeight - 0.5) * 30);
    };
    window.addEventListener("mousemove", on);
    return () => window.removeEventListener("mousemove", on);
  }, [mx, my]);

  const words = ["We", "Are", "Dark", "Media."];

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#F5F5F4]">
      <AnimatedBg />

      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(#030304 1px,transparent 1px),linear-gradient(90deg,#030304 1px,transparent 1px)", backgroundSize: "80px 80px" }}
      />

      <Nav />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10 pt-32 pb-20 w-full">
        {/* label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-[#030304]/15 bg-[#030304]/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#030304]/70 mb-12"
        >
          <motion.span animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>✦</motion.span>
          Our Story
        </motion.div>

        {/* Giant heading */}
        <motion.h1 style={{ x: sx, y: sy }} className="font-display text-[17vw] sm:text-[14vw] lg:text-[11vw] leading-[0.87] tracking-[-0.04em] text-[#030304] mb-12 md:mb-20">
          {words.map((w, i) => (
            <span key={w} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, delay: 0.3 + i * 0.12, ease }}
              >
                {i === 2 || i === 3 ? <em className="italic">{w}</em> : w}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Bottom row */}
        <Reveal delay={0.9} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-[#030304]/10 pt-10">
          <p className="md:col-span-5 text-[#030304]/70 text-base md:text-xl leading-relaxed font-light">
            A creative studio built for the bold. We design, build, and grow brands that refuse to be ignored.
          </p>
          <div className="md:col-span-4 md:col-start-9 flex gap-6">
            <a href="#story" className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-[#030304]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#030304] text-[#F5F5F4] transition-transform group-hover:scale-110">↓</span>
              Discover More
            </a>
          </div>
        </Reveal>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="w-5 h-8 rounded-full border border-[#030304]/25 flex items-start justify-center pt-1.5">
          <div className="w-1 h-1.5 rounded-full bg-[#030304]/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function Hero() {
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
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#F5F5F4]">
        <div aria-hidden className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{ backgroundImage: "linear-gradient(#030304 1px,transparent 1px),linear-gradient(90deg,#030304 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
      </section>
    );
  }

  return isMobile ? <MobileHero /> : <DesktopHero />;
}

/* ─── Stats ─── */
function Stats() {
  const stats = [
    { n: 150, s: "+", l: "Projects Delivered" },
    { n: 5, s: "+", l: "Years of Excellence" },
    { n: 50, s: "+", l: "Happy Clients" },
    { n: 98, s: "%", l: "Client Retention" },
  ];
  return (
    <section className="bg-[#030304] text-[#F5F5F4] py-20 md:py-28 relative overflow-hidden">
      <AnimatedBg dark />
      <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#F5F5F4]/10">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 0.1} className="bg-[#030304] px-8 py-10 md:py-14">
            <div className="font-display text-5xl md:text-7xl lg:text-8xl leading-none mb-3">
              <CountUp to={s.n} suffix={s.s} />
            </div>
            <div className="text-[11px] uppercase tracking-[0.26em] text-[#F5F5F4]/50">{s.l}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ─── Story ─── */
function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  const timeline = [
    { year: "2019", t: "The Beginning", d: "Dark Media was founded with a single mission: to build brands that command attention." },
    { year: "2021", t: "Scaling Globally", d: "We expanded our team and started working with clients across the Middle East, Europe and Asia." },
    { year: "2023", t: "Award Winning Work", d: "Our campaigns began winning industry recognition and our client portfolio crossed 100+." },
    { year: "2024", t: "Full-Service Studio", d: "We built an in-house video production unit, completing our full 360° creative offering." },
    { year: "Now", t: "Building Tomorrow", d: "We continue to push creative boundaries, partnering with the next generation of bold brands." },
  ];

  return (
    <section id="story" ref={ref} className="relative py-28 md:py-40 bg-[#F5F5F4] overflow-hidden">
      <AnimatedBg />
      <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal className="mb-20 md:mb-28">
          <div className="text-[11px] uppercase tracking-[0.28em] text-[#030304]/50 mb-5 flex items-center gap-2">
            <span className="h-px w-8 bg-[#030304]/30" /> Our Journey
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight text-[#030304]">
            Built on craft,<br /><em className="italic">driven by impact.</em>
          </h2>
        </Reveal>

        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Vertical progress line */}
          <div className="hidden md:block md:col-span-1 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#030304]/10" />
            <motion.div style={{ height: lineH }} className="absolute left-1/2 top-0 w-px bg-[#030304]/50 origin-top" />
          </div>

          {/* Timeline items */}
          <div className="md:col-span-11 space-y-0">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.1} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 border-b border-[#030304]/10 py-10 md:py-12 group">
                <div className="md:col-span-2">
                  <span className="font-display text-3xl md:text-4xl text-[#030304]/30 group-hover:text-[#030304] transition-colors duration-500">{item.year}</span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl md:text-3xl text-[#030304] leading-tight">{item.t}</h3>
                </div>
                <div className="md:col-span-5">
                  <p className="text-[#030304]/60 text-base leading-relaxed">{item.d}</p>
                </div>
                <div className="md:col-span-1 flex items-center justify-end">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#030304]/20 text-[#030304]/40 group-hover:border-[#030304] group-hover:text-[#030304] transition-all duration-500">→</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Values ─── */
function Values() {
  const values = [
    { n: "01", t: "Craft First", d: "We believe every pixel, every word, every frame should serve a purpose. Quality is non-negotiable.", icon: "✦" },
    { n: "02", t: "Bold Ideas", d: "Playing it safe never built an iconic brand. We push creative boundaries so your brand stands out.", icon: "◈" },
    { n: "03", t: "Client Success", d: "Your growth is our metric. We don't just deliver work — we deliver measurable results.", icon: "⬡" },
    { n: "04", t: "Full Transparency", d: "No surprises. Clear communication, honest timelines, and a process you can trust end to end.", icon: "◎" },
    { n: "05", t: "Speed & Precision", d: "We move fast without cutting corners. Agile processes that deliver premium output on time.", icon: "⌘" },
    { n: "06", t: "Long Term Vision", d: "We build partnerships, not projects. Every engagement is the beginning of something lasting.", icon: "△" },
  ];
  return (
    <section className="relative bg-[#030304] text-[#F5F5F4] py-28 md:py-44 overflow-hidden">
      <AnimatedBg dark />
      <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal className="mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#F5F5F4]/40 mb-6 flex items-center gap-2">
              <span className="h-px w-8 bg-[#F5F5F4]/30" /> Our Values
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight">
              What we<br /><em className="italic text-[#F5F5F4]/70">believe in.</em>
            </h2>
          </div>
          <p className="md:col-span-4 text-[#F5F5F4]/55 text-base md:text-lg leading-relaxed">
            Our values aren't framed on a wall — they're embedded in every decision we make.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F5F5F4]/10">
          {values.map((v, i) => (
            <Reveal key={v.n} delay={i * 0.07} className="group bg-[#030304] p-8 md:p-10 hover:bg-[#F5F5F4]/[0.04] transition-colors duration-500 cursor-default">
              <div className="flex items-start justify-between mb-8">
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#F5F5F4]/30">{v.n}</span>
                <motion.span whileHover={{ rotate: 180 }} transition={{ duration: 0.4 }} className="text-2xl text-[#F5F5F4]/20 group-hover:text-[#F5F5F4]/60 transition-colors duration-500">{v.icon}</motion.span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-[#F5F5F4] mb-4 leading-tight">{v.t}</h3>
              <p className="text-[#F5F5F4]/50 text-sm leading-relaxed">{v.d}</p>
              <div className="mt-8 h-px w-0 bg-[#F5F5F4]/20 group-hover:w-full transition-all duration-700" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Team ─── */
function Team() {
  const members = [
    { name: "Ali Hassan", role: "Creative Director", init: "AH" },
    { name: "Sara Ahmed", role: "Brand Strategist", init: "SA" },
    { name: "Omar Malik", role: "Lead Developer", init: "OM" },
    { name: "Zara Khan", role: "Motion Designer", init: "ZK" },
  ];
  const colors = ["#1a1a1c", "#2a2a2e", "#3a3a3e", "#4a4a4e"];

  return (
    <section className="relative py-28 md:py-44 bg-[#F5F5F4] overflow-hidden">
      <AnimatedBg />
      <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal className="mb-16 md:mb-24">
          <div className="text-[11px] uppercase tracking-[0.28em] text-[#030304]/50 mb-6 flex items-center gap-2">
            <span className="h-px w-8 bg-[#030304]/30" /> The Team
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight text-[#030304]">
            Creatives who<br /><em className="italic">give a damn.</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {members.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1} className="group">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-5 cursor-pointer"
                style={{ background: `linear-gradient(135deg, ${colors[i]}, #080808)` }}
              >
                {/* Avatar initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-6xl md:text-7xl text-white/10 select-none">{m.init}</span>
                </div>
                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-end p-6"
                  style={{ background: "linear-gradient(to top, rgba(3,3,4,0.8) 0%, transparent 60%)" }}
                >
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/60 mb-1">{m.role}</div>
                    <div className="font-display text-xl text-white">{m.name}</div>
                  </div>
                </motion.div>
                {/* Corner decoration */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-4 right-4 w-6 h-6 rounded-full border border-white/20 grid place-items-center"
                >
                  <span className="text-white/30 text-[8px]">✦</span>
                </motion.div>
              </motion.div>
              <div className="font-display text-xl md:text-2xl text-[#030304]">{m.name}</div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#030304]/50 mt-1">{m.role}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTA() {
  return (
    <section className="relative bg-[#030304] text-[#F5F5F4] py-28 md:py-44 overflow-hidden">
      <AnimatedBg dark />
      <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10 flex flex-col items-center text-center">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.28em] text-[#F5F5F4]/40 mb-8 flex items-center gap-2">
            <motion.span animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>✦</motion.span>
            Ready to Create
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-9xl leading-[0.92] tracking-tight mb-10">
            Let's build<br /><em className="italic text-[#F5F5F4]/70">something great.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2} className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#F5F5F4] text-[#030304] px-8 py-4 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-white transition-colors shadow-lg"
          >
            Start a Project
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#030304] text-[#F5F5F4] text-[11px] transition-transform group-hover:rotate-45">↗</span>
          </Link>
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-3 rounded-full border border-[#F5F5F4]/20 text-[#F5F5F4] px-8 py-4 text-[12px] uppercase tracking-[0.2em] hover:border-[#F5F5F4]/50 transition-colors"
          >
            View Our Work
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Page ─── */
function About() {
  return (
    <main className="bg-[#F5F5F4] overflow-x-hidden">
      <Hero />
      <Stats />
      <Story />
      <Values />
      <Team />
      <CTA />
    </main>
  );
}
