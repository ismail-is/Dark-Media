import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useScroll, b as useTransform, d as useMotionValue, c as useSpring, m as motion, a as useInView } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const ease = [0.22, 1, 0.36, 1];
function Reveal({
  children,
  delay = 0,
  y = 40,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-60px"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ref, initial: {
    opacity: 0,
    y
  }, animate: inView ? {
    opacity: 1,
    y: 0
  } : {}, transition: {
    duration: 0.9,
    delay,
    ease
  }, className, children });
}
function CountUp({
  to,
  suffix = ""
}) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, {
    once: true
  });
  const [val, setVal] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(to / 60);
    const id = setInterval(() => {
      start += step;
      if (start >= to) {
        setVal(to);
        clearInterval(id);
      } else setVal(start);
    }, 18);
    return () => clearInterval(id);
  }, [inView, to]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    val,
    suffix
  ] });
}
function AnimatedBg({
  dark = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none z-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
      x: [0, 60, -40, 0],
      y: [0, -80, 50, 0],
      scale: [1, 1.3, 0.9, 1]
    }, transition: {
      duration: 22,
      repeat: Infinity,
      ease: "easeInOut"
    }, className: "absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] rounded-full blur-[120px]", style: {
      background: dark ? "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)" : "radial-gradient(circle, rgba(3,3,4,0.06) 0%, transparent 70%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
      x: [0, -50, 80, 0],
      y: [0, 60, -40, 0],
      scale: [1, 0.8, 1.2, 1]
    }, transition: {
      duration: 28,
      repeat: Infinity,
      ease: "easeInOut"
    }, className: "absolute top-1/3 -right-1/4 w-[60vw] h-[60vw] rounded-full blur-[100px]", style: {
      background: dark ? "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)" : "radial-gradient(circle, rgba(3,3,4,0.04) 0%, transparent 70%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
      x: [0, 40, -60, 0],
      y: [0, 40, 80, 0],
      scale: [1, 1.1, 0.85, 1]
    }, transition: {
      duration: 34,
      repeat: Infinity,
      ease: "easeInOut"
    }, className: "absolute -bottom-1/4 left-1/4 w-[50vw] h-[50vw] rounded-full blur-[90px]", style: {
      background: dark ? "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)" : "radial-gradient(circle, rgba(3,3,4,0.05) 0%, transparent 70%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.04] mix-blend-overlay", style: {
      backgroundImage: "radial-gradient(#030304 1px, transparent 1px)",
      backgroundSize: "4px 4px"
    } })
  ] });
}
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.header, { initial: {
    y: -24,
    opacity: 0
  }, animate: {
    y: 0,
    opacity: 1
  }, transition: {
    duration: 0.8,
    delay: 0.2,
    ease
  }, className: "absolute top-0 left-0 right-0 z-30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-10 md:py-7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-[#030304]/15 bg-[#030304]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-y-0 left-0 w-1/2 bg-[#F5F5F4]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl text-[#030304] leading-none group-hover:opacity-70 transition-opacity", children: "Dark Media" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-7 text-[12px] text-[#030304]/70 uppercase tracking-[0.18em]", children: [
      [{
        l: "Work",
        h: "/portfolio"
      }, {
        l: "Services",
        h: "/#services"
      }, {
        l: "Contact",
        h: "/contact"
      }].map((n) => n.h.startsWith("/#") ? /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: n.h, className: "relative group hover:text-[#030304] transition-colors", children: [
        n.l,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 left-0 h-px w-0 bg-[#030304] transition-all duration-400 group-hover:w-full" })
      ] }, n.l) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: n.h, className: "relative group hover:text-[#030304] transition-colors", children: [
        n.l,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 left-0 h-px w-0 bg-[#030304] transition-all duration-400 group-hover:w-full" })
      ] }, n.l)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-[#030304] font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#030304]" }),
        " About"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "group inline-flex items-center gap-2 rounded-full bg-[#030304] text-[#F5F5F4] px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] shadow-soft hover:shadow-lg transition-shadow", children: [
      "Let's Talk",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-5 w-5 items-center justify-center rounded-full bg-[#F5F5F4] text-[#030304] text-[10px] transition-transform group-hover:rotate-45", children: "↗" })
    ] })
  ] }) });
}
function Hero() {
  const ref = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, {
    stiffness: 50,
    damping: 18
  });
  const sy = useSpring(my, {
    stiffness: 50,
    damping: 18
  });
  reactExports.useEffect(() => {
    const on = (e) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 30);
      my.set((e.clientY / window.innerHeight - 0.5) * 30);
    };
    window.addEventListener("mousemove", on);
    return () => window.removeEventListener("mousemove", on);
  }, [mx, my]);
  const words = ["We", "Are", "Dark", "Media."];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref, className: "relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#F5F5F4]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedBg, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 opacity-[0.03] pointer-events-none", style: {
      backgroundImage: "linear-gradient(#030304 1px,transparent 1px),linear-gradient(90deg,#030304 1px,transparent 1px)",
      backgroundSize: "80px 80px"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
      y,
      opacity
    }, className: "relative z-10 mx-auto max-w-[1600px] px-5 md:px-10 pt-32 pb-20 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.5,
        duration: 0.8,
        ease
      }, className: "inline-flex items-center gap-2 rounded-full border border-[#030304]/15 bg-[#030304]/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#030304]/70 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { animate: {
          rotate: 360
        }, transition: {
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }, children: "✦" }),
        "Our Story"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { style: {
        x: sx,
        y: sy
      }, className: "font-display text-[17vw] sm:text-[14vw] lg:text-[11vw] leading-[0.87] tracking-[-0.04em] text-[#030304] mb-12 md:mb-20", children: words.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { className: "block", initial: {
        y: "110%"
      }, animate: {
        y: "0%"
      }, transition: {
        duration: 1.1,
        delay: 0.3 + i * 0.12,
        ease
      }, children: i === 2 || i === 3 ? /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: w }) : w }) }, w)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.9, className: "grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-[#030304]/10 pt-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "md:col-span-5 text-[#030304]/70 text-base md:text-xl leading-relaxed font-light", children: "A creative studio built for the bold. We design, build, and grow brands that refuse to be ignored." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-4 md:col-start-9 flex gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#story", className: "group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-[#030304]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-[#030304] text-[#F5F5F4] transition-transform group-hover:scale-110", children: "↓" }),
          "Discover More"
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, transition: {
      delay: 1.8
    }, className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
      y: [0, 10, 0]
    }, transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }, className: "w-5 h-8 rounded-full border border-[#030304]/25 flex items-start justify-center pt-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1.5 rounded-full bg-[#030304]/50" }) }) })
  ] });
}
function Stats() {
  const stats = [{
    n: 150,
    s: "+",
    l: "Projects Delivered"
  }, {
    n: 5,
    s: "+",
    l: "Years of Excellence"
  }, {
    n: 50,
    s: "+",
    l: "Happy Clients"
  }, {
    n: 98,
    s: "%",
    l: "Client Retention"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-[#030304] text-[#F5F5F4] py-20 md:py-28 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedBg, { dark: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[1600px] px-5 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#F5F5F4]/10", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i * 0.1, className: "bg-[#030304] px-8 py-10 md:py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl md:text-7xl lg:text-8xl leading-none mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { to: s.n, suffix: s.s }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.26em] text-[#F5F5F4]/50", children: s.l })
    ] }, s.l)) })
  ] });
}
function Story() {
  const ref = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const lineH = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
  const timeline = [{
    year: "2019",
    t: "The Beginning",
    d: "Dark Media was founded with a single mission: to build brands that command attention."
  }, {
    year: "2021",
    t: "Scaling Globally",
    d: "We expanded our team and started working with clients across the Middle East, Europe and Asia."
  }, {
    year: "2023",
    t: "Award Winning Work",
    d: "Our campaigns began winning industry recognition and our client portfolio crossed 100+."
  }, {
    year: "2024",
    t: "Full-Service Studio",
    d: "We built an in-house video production unit, completing our full 360° creative offering."
  }, {
    year: "Now",
    t: "Building Tomorrow",
    d: "We continue to push creative boundaries, partnering with the next generation of bold brands."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "story", ref, className: "relative py-28 md:py-40 bg-[#F5F5F4] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedBg, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[1600px] px-5 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mb-20 md:mb-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] uppercase tracking-[0.28em] text-[#030304]/50 mb-5 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-[#030304]/30" }),
          " Our Journey"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight text-[#030304]", children: [
          "Built on craft,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "driven by impact." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid grid-cols-1 md:grid-cols-12 gap-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:block md:col-span-1 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-0 bottom-0 w-px bg-[#030304]/10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: {
            height: lineH
          }, className: "absolute left-1/2 top-0 w-px bg-[#030304]/50 origin-top" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-11 space-y-0", children: timeline.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i * 0.1, className: "grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 border-b border-[#030304]/10 py-10 md:py-12 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl md:text-4xl text-[#030304]/30 group-hover:text-[#030304] transition-colors duration-500", children: item.year }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl md:text-3xl text-[#030304] leading-tight", children: item.t }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#030304]/60 text-base leading-relaxed", children: item.d }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-1 flex items-center justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-full border border-[#030304]/20 text-[#030304]/40 group-hover:border-[#030304] group-hover:text-[#030304] transition-all duration-500", children: "→" }) })
        ] }, item.year)) })
      ] })
    ] })
  ] });
}
function Values() {
  const values = [{
    n: "01",
    t: "Craft First",
    d: "We believe every pixel, every word, every frame should serve a purpose. Quality is non-negotiable.",
    icon: "✦"
  }, {
    n: "02",
    t: "Bold Ideas",
    d: "Playing it safe never built an iconic brand. We push creative boundaries so your brand stands out.",
    icon: "◈"
  }, {
    n: "03",
    t: "Client Success",
    d: "Your growth is our metric. We don't just deliver work — we deliver measurable results.",
    icon: "⬡"
  }, {
    n: "04",
    t: "Full Transparency",
    d: "No surprises. Clear communication, honest timelines, and a process you can trust end to end.",
    icon: "◎"
  }, {
    n: "05",
    t: "Speed & Precision",
    d: "We move fast without cutting corners. Agile processes that deliver premium output on time.",
    icon: "⌘"
  }, {
    n: "06",
    t: "Long Term Vision",
    d: "We build partnerships, not projects. Every engagement is the beginning of something lasting.",
    icon: "△"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-[#030304] text-[#F5F5F4] py-28 md:py-44 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedBg, { dark: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[1600px] px-5 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-12 gap-10 items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] uppercase tracking-[0.28em] text-[#F5F5F4]/40 mb-6 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-[#F5F5F4]/30" }),
            " Our Values"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight", children: [
            "What we",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-[#F5F5F4]/70", children: "believe in." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "md:col-span-4 text-[#F5F5F4]/55 text-base md:text-lg leading-relaxed", children: "Our values aren't framed on a wall — they're embedded in every decision we make." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F5F5F4]/10", children: values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i * 0.07, className: "group bg-[#030304] p-8 md:p-10 hover:bg-[#F5F5F4]/[0.04] transition-colors duration-500 cursor-default", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-[#F5F5F4]/30", children: v.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { whileHover: {
            rotate: 180
          }, transition: {
            duration: 0.4
          }, className: "text-2xl text-[#F5F5F4]/20 group-hover:text-[#F5F5F4]/60 transition-colors duration-500", children: v.icon })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl md:text-3xl text-[#F5F5F4] mb-4 leading-tight", children: v.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#F5F5F4]/50 text-sm leading-relaxed", children: v.d }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 h-px w-0 bg-[#F5F5F4]/20 group-hover:w-full transition-all duration-700" })
      ] }, v.n)) })
    ] })
  ] });
}
function Team() {
  const members = [{
    name: "Ali Hassan",
    role: "Creative Director",
    init: "AH"
  }, {
    name: "Sara Ahmed",
    role: "Brand Strategist",
    init: "SA"
  }, {
    name: "Omar Malik",
    role: "Lead Developer",
    init: "OM"
  }, {
    name: "Zara Khan",
    role: "Motion Designer",
    init: "ZK"
  }];
  const colors = ["#1a1a1c", "#2a2a2e", "#3a3a3e", "#4a4a4e"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-28 md:py-44 bg-[#F5F5F4] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedBg, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[1600px] px-5 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mb-16 md:mb-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] uppercase tracking-[0.28em] text-[#030304]/50 mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-[#030304]/30" }),
          " The Team"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight text-[#030304]", children: [
          "Creatives who",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "give a damn." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6", children: members.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i * 0.1, className: "group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: {
          y: -8
        }, transition: {
          duration: 0.4,
          ease
        }, className: "relative aspect-[3/4] rounded-3xl overflow-hidden mb-5 cursor-pointer", style: {
          background: `linear-gradient(135deg, ${colors[i]}, #080808)`
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-6xl md:text-7xl text-white/10 select-none", children: m.init }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            opacity: 0
          }, whileHover: {
            opacity: 1
          }, className: "absolute inset-0 flex items-end p-6", style: {
            background: "linear-gradient(to top, rgba(3,3,4,0.8) 0%, transparent 60%)"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-white/60 mb-1", children: m.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl text-white", children: m.name })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
            rotate: 360
          }, transition: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }, className: "absolute top-4 right-4 w-6 h-6 rounded-full border border-white/20 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30 text-[8px]", children: "✦" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl md:text-2xl text-[#030304]", children: m.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.22em] text-[#030304]/50 mt-1", children: m.role })
      ] }, m.name)) })
    ] })
  ] });
}
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-[#030304] text-[#F5F5F4] py-28 md:py-44 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedBg, { dark: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[1600px] px-5 md:px-10 flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] uppercase tracking-[0.28em] text-[#F5F5F4]/40 mb-8 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { animate: {
            rotate: 360
          }, transition: {
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }, children: "✦" }),
          "Ready to Create"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl lg:text-9xl leading-[0.92] tracking-tight mb-10", children: [
          "Let's build",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-[#F5F5F4]/70", children: "something great." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.2, className: "flex flex-col sm:flex-row gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "group inline-flex items-center gap-3 rounded-full bg-[#F5F5F4] text-[#030304] px-8 py-4 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-white transition-colors shadow-lg", children: [
          "Start a Project",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-[#030304] text-[#F5F5F4] text-[11px] transition-transform group-hover:rotate-45", children: "↗" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio", className: "group inline-flex items-center gap-3 rounded-full border border-[#F5F5F4]/20 text-[#F5F5F4] px-8 py-4 text-[12px] uppercase tracking-[0.2em] hover:border-[#F5F5F4]/50 transition-colors", children: [
          "View Our Work",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block transition-transform group-hover:translate-x-1", children: "→" })
        ] })
      ] })
    ] })
  ] });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-[#F5F5F4] overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Values, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Team, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {})
  ] });
}
export {
  About as component
};
