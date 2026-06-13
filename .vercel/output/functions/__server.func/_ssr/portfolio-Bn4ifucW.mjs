import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { w as whiteLogo } from "./Dark Media Logo - White-QbckA3oL.mjs";
import { i as img4, a as img6, b as img1, c as img2, d as img3, e as img5 } from "./6-C5IFzURf.mjs";
import { m as motion, u as useScroll, a as useInView, b as useTransform, c as useSpring } from "../_libs/framer-motion.mjs";
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
const img8 = "/assets/1-BD_ANLIa.webp";
const img9 = "/assets/3-C6Qh9llH.webp";
const img10 = "/assets/4-Bt5-Zj6D.webp";
const img11 = "/assets/5-CQ9W4k7k.webp";
const img12 = "/assets/6-DHMkQnLX.webp";
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
    margin: "-80px"
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
function SplitWord({
  text,
  delay = 0,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, {
    once: true
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref, className: `inline-block overflow-hidden align-bottom ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { className: "inline-block", initial: {
    y: "110%"
  }, animate: inView ? {
    y: "0%"
  } : {}, transition: {
    duration: 1.1,
    delay,
    ease
  }, children: text }) });
}
function Magnetic({
  children,
  strength = 0.3
}) {
  const ref = reactExports.useRef(null);
  const x = useSpring(0, {
    stiffness: 200,
    damping: 18
  });
  const y = useSpring(0, {
    stiffness: 200,
    damping: 18
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ref, style: {
    x,
    y
  }, onMouseMove: (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength);
  }, onMouseLeave: () => {
    x.set(0);
    y.set(0);
  }, className: "inline-block", children });
}
function StackingSection({
  children,
  index,
  bgColor = "bg-[#030304]"
}) {
  const sectionRef = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const [isMobile, setIsMobile] = reactExports.useState(false);
  reactExports.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: sectionRef, className: `${isMobile ? "relative h-auto py-6 md:py-8 px-4 md:px-8" : "sticky top-0 h-screen overflow-hidden"} w-full ${bgColor}`, style: {
    zIndex: isMobile ? void 0 : index
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: isMobile ? {} : {
    scale,
    opacity,
    y
  }, className: "w-full h-full relative", children }) });
}
function Nav() {
  const {
    scrollY
  } = useScroll();
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 60);
    });
  }, [scrollY]);
  reactExports.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  const navLinks = [{
    label: "Home",
    href: "/"
  }, {
    label: "Work",
    href: "/portfolio"
  }, {
    label: "Services",
    href: "/#services"
  }, {
    label: "Contact",
    href: "/#contact"
  }];
  const socials = [{
    label: "Instagram",
    abbr: "IG",
    href: "#"
  }, {
    label: "Behance",
    abbr: "Be",
    href: "#"
  }, {
    label: "LinkedIn",
    abbr: "Li",
    href: "#"
  }, {
    label: "Twitter",
    abbr: "X",
    href: "#"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.header, { initial: {
      y: -50,
      opacity: 0
    }, animate: {
      y: 0,
      opacity: 1
    }, transition: {
      duration: 0.9,
      delay: 0.4,
      ease
    }, className: "fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-6 pt-4 md:pt-6 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { animate: {
      width: "100%",
      maxWidth: scrolled ? "900px" : "1600px",
      backgroundColor: scrolled ? "rgba(3, 3, 4, 0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
      boxShadow: scrolled ? "0 10px 40px -10px rgba(0,0,0,0.5)" : "none",
      borderColor: scrolled ? "rgba(255,255,255,0.05)" : "transparent",
      paddingTop: scrolled ? "0.75rem" : "1.25rem",
      paddingBottom: scrolled ? "0.75rem" : "1.25rem"
    }, transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }, className: "pointer-events-auto flex items-center justify-between px-6 md:px-8 rounded-full border transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: whiteLogo, alt: "Dark Media", className: "h-6 md:h-8 w-auto opacity-90 transition-transform hover:scale-105 origin-left" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 md:gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:inline-block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { strength: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/#contact", className: "group relative overflow-hidden inline-flex items-center gap-2 rounded-full bg-[#F5F5F4] text-[#030304] px-6 py-3 text-[11px] uppercase tracking-[0.2em] shadow-soft transition-all hover:shadow-deep", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative z-10 flex items-center gap-2", children: [
            "Let’s talk",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5", children: "↗" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 bg-black/10 translate-y-[101%] transition-transform duration-300 ease-out group-hover:translate-y-0 rounded-full" })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { strength: 0.25, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMenuOpen(!menuOpen), className: "relative flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-transparent hover:bg-white/10 group transition-colors duration-300", "aria-label": menuOpen ? "Close menu" : "Open menu", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-5 h-3.5 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { animate: menuOpen ? {
            rotate: 45,
            y: 5,
            width: "100%"
          } : {
            rotate: 0,
            y: 0,
            width: "100%"
          }, transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }, className: "block h-[1.5px] bg-white rounded-full origin-center transition-colors duration-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { animate: menuOpen ? {
            opacity: 0,
            x: -10
          } : {
            opacity: 1,
            x: 0
          }, transition: {
            duration: 0.3
          }, className: "block h-[1.5px] w-3/4 bg-white rounded-full transition-colors duration-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { animate: menuOpen ? {
            rotate: -45,
            y: -5,
            width: "100%"
          } : {
            rotate: 0,
            y: 0,
            width: "60%"
          }, transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }, className: "block h-[1.5px] bg-white rounded-full origin-center transition-colors duration-300" })
        ] }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.nav, { initial: false, animate: {
      clipPath: menuOpen ? "circle(150% at 95% 5%)" : "circle(0% at 95% 5%)"
    }, transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1]
    }, className: "fixed inset-0 z-[60] bg-[#030304] text-[#F5F5F4] overflow-hidden", style: {
      pointerEvents: menuOpen ? "auto" : "none"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
          x: ["-10%", "30%", "-10%"],
          y: ["-15%", "25%", "-15%"],
          scale: [1, 1.4, 1]
        }, transition: {
          duration: 16,
          repeat: Infinity,
          ease: "linear"
        }, className: "absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-[140px] opacity-[0.12]", style: {
          background: "radial-gradient(circle, rgba(120,100,255,0.5), rgba(255,120,200,0.3), transparent 70%)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
          x: ["20%", "-25%", "20%"],
          y: ["20%", "-15%", "20%"],
          scale: [1.2, 1, 1.2]
        }, transition: {
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }, className: "absolute -bottom-[15%] -right-[15%] w-[70vw] h-[70vw] rounded-full blur-[160px] opacity-[0.1]", style: {
          background: "radial-gradient(circle, rgba(60,180,255,0.4), rgba(100,255,200,0.2), transparent 70%)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.03]", style: {
          backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { initial: false, animate: menuOpen ? {
        opacity: 1,
        scale: 1,
        rotate: 0
      } : {
        opacity: 0,
        scale: 0.5,
        rotate: -90
      }, transition: {
        delay: menuOpen ? 0.4 : 0,
        duration: 0.5,
        ease
      }, onClick: () => setMenuOpen(false), className: "absolute top-6 right-6 md:top-10 md:right-10 z-20 flex items-center justify-center w-14 h-14 rounded-full border border-white/15 hover:border-white/40 hover:bg-white/10 transition-all duration-300 group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative w-5 h-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-1/2 left-0 w-full h-[1.5px] bg-white/80 -translate-y-1/2 rotate-45 group-hover:bg-white" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-1/2 left-0 w-full h-[1.5px] bg-white/80 -translate-y-1/2 -rotate-45 group-hover:bg-white" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col items-center justify-center h-full px-8 md:px-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: false, animate: menuOpen ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: -20
        }, transition: {
          delay: menuOpen ? 0.35 : 0,
          duration: 0.6,
          ease
        }, className: "absolute top-8 left-8 md:top-10 md:left-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", onClick: () => setMenuOpen(false), className: "inline-block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: whiteLogo, alt: "Dark Media", className: "h-7 md:h-9 w-auto opacity-80 hover:opacity-100 transition-opacity" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center gap-2 md:gap-3", children: navLinks.map((link, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: false, animate: menuOpen ? {
          opacity: 1,
          y: 0,
          filter: "blur(0px)"
        } : {
          opacity: 0,
          y: 50,
          filter: "blur(8px)"
        }, transition: {
          delay: menuOpen ? 0.35 + i * 0.1 : 0,
          duration: 0.7,
          ease
        }, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: link.href, onClick: () => setMenuOpen(false), className: "group relative flex items-center gap-4 md:gap-6 py-3 md:py-4 transition-all duration-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-mono text-white/25 tracking-wider self-start pt-2 md:pt-4", children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] leading-[0.9] tracking-[-0.04em] text-white/90 group-hover:text-white transition-colors duration-300", children: link.label })
        ] }) }, link.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row items-center justify-between gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: false, animate: menuOpen ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 30
        }, transition: {
          delay: menuOpen ? 0.65 : 0,
          duration: 0.6,
          ease
        }, className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.3em] text-white/25 mr-4 hidden md:inline", children: "Follow" }),
          socials.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.a, { href: s.href, initial: false, animate: menuOpen ? {
            opacity: 1,
            scale: 1
          } : {
            opacity: 0,
            scale: 0.5
          }, transition: {
            delay: menuOpen ? 0.7 + i * 0.07 : 0,
            duration: 0.5,
            ease
          }, className: "group relative flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/10 hover:border-white/40 hover:bg-white/10 transition-all duration-300", title: s.label, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium tracking-wider text-white/60 group-hover:text-white transition-colors duration-300", children: s.abbr }) }, s.label))
        ] }) })
      ] })
    ] })
  ] });
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative bg-[#030304] text-[#F5F5F4] overflow-hidden rounded-t-[2.5rem] md:rounded-t-[4rem] z-10 shadow-[0_-20px_60px_rgba(0,0,0,0.6)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none opacity-30 mix-blend-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
        x: ["-10%", "60%", "-20%", "-10%"],
        y: ["-10%", "40%", "80%", "-10%"],
        scale: [1, 1.2, 1]
      }, transition: {
        duration: 25,
        repeat: Infinity,
        ease: "linear"
      }, className: "absolute top-0 left-0 w-[60vw] h-[60vw] bg-white/10 rounded-full blur-[100px] md:blur-[160px]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
        x: ["100%", "-20%", "100%"],
        y: ["100%", "-10%", "100%"],
        scale: [1, 1.4, 1]
      }, transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }, className: "absolute bottom-0 right-0 w-[70vw] h-[70vw] bg-white/10 rounded-full blur-[100px] md:blur-[160px]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-[1600px] px-5 md:px-10 pt-32 md:pt-48 pb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-12 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-3 rounded-full border border-[#F5F5F4]/20 bg-[#F5F5F4]/5 backdrop-blur-md px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-[#F5F5F4]/80 mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F5F5F4] opacity-60" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-[#F5F5F4]" })
            ] }),
            "Ready to create?"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-[15vw] md:text-[10vw] leading-[0.85] tracking-[-0.04em]", children: [
            "Let's make some",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-block mt-2 md:mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40", children: "magic." }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-4 flex justify-start md:justify-end md:pt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { strength: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:hello@darkmedia.studio", className: "group relative flex items-center justify-center w-36 h-36 md:w-48 md:h-48 rounded-full bg-[#F5F5F4] text-[#030304] overflow-hidden transition-transform duration-500 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative z-10 font-display text-2xl md:text-3xl text-center leading-none group-hover:text-white transition-colors duration-500", children: [
            "Get in",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Touch"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 bg-[#030304] rounded-full scale-0 origin-center transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:scale-110" })
        ] }) }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-12 gap-10 pt-12 border-t border-[#F5F5F4]/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.15, className: "md:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.24em] opacity-40 mb-5", children: "office" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "opacity-80 leading-relaxed text-sm md:text-base", children: "Mangalore" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.2, className: "md:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.24em] opacity-40 mb-5", children: "Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "opacity-80 leading-relaxed text-sm md:text-base", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@darkmedia.studio", className: "hover:text-white transition-colors inline-block mb-1", children: "hello@darkmedia.studio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+4512345678", className: "hover:text-white transition-colors inline-block", children: "+45 12 34 56 78" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.25, className: "md:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.24em] opacity-40 mb-5", children: "Socials" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-wrap gap-4 md:gap-6", children: ["Behance", "Instagram", "LinkedIn", "Twitter"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-sm md:text-base opacity-80 hover:opacity-100 hover:-translate-y-1 inline-block transition-transform duration-300", children: s }) }, s)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 md:mt-28 flex justify-center pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: whiteLogo, alt: "Dark Media", className: "w-[85vw] md:w-[65vw] max-w-5xl opacity-90 drop-shadow-2xl" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] uppercase tracking-[0.22em] opacity-40 pt-8 border-t border-[#F5F5F4]/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "© 2026 Dark Media · All rights reserved" }) })
    ] })
  ] });
}
function PortfolioPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative bg-[#030304] text-[#F5F5F4] min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[50vh] md:min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none opacity-40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
          x: ["-10%", "30%", "-10%"],
          y: ["-15%", "25%", "-15%"],
          scale: [1, 1.4, 1]
        }, transition: {
          duration: 16,
          repeat: Infinity,
          ease: "linear"
        }, className: "absolute top-0 -left-[10%] w-[50vw] h-[50vw] rounded-full blur-[140px] opacity-20", style: {
          background: "radial-gradient(circle, rgba(255,255,255,0.5), transparent 70%)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
          x: ["20%", "-25%", "20%"],
          y: ["20%", "-15%", "20%"],
          scale: [1.2, 1, 1.2]
        }, transition: {
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }, className: "absolute bottom-0 -right-[10%] w-[60vw] h-[60vw] rounded-full blur-[160px] opacity-10", style: {
          background: "radial-gradient(circle, rgba(200,200,200,0.4), transparent 70%)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.03]", style: {
          backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] md:text-xs uppercase tracking-[0.25em] text-white/50 font-semibold mb-4 block", children: "Selected Projects" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.95] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SplitWord, { text: "Our Works", delay: 0.4 }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StackingSection, { index: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 sm:px-6 md:px-10 lg:p-[220px] py-10 md:py-16 lg:py-20 relative z-10 bg-[#F5F5F4] w-full rounded-[24px] md:rounded-[32px] lg:rounded-t-[48px] lg:rounded-b-none shadow-2xl border border-black/5 lg:border-t lg:border-x-0 lg:border-b-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1600px] mx-auto w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-[#030304]/10 pb-4 mb-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6 -mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono uppercase tracking-[0.25em] text-[#EC6303]", children: "Logofolio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-[#030304] mt-1 font-semibold", children: "Al Masoudi Company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#030304]/50 text-xs uppercase tracking-widest mt-1", children: "Contracting and trading" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-end gap-6 lg:gap-10 lg:max-w-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#030304]/70 text-sm md:text-base leading-relaxed", children: "AL MASOUDI Contracting and Trading is a Saudi-owned company providing comprehensive solutions. Crafted with precise geometries representing heritage, reliability, and growth." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-6xl md:text-8xl font-bold leading-none tracking-tighter text-[#EC6304]/15 self-end lg:self-auto", children: "01" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[180px] lg:h-[260px] sm:col-span-2 bg-white rounded-[16px] md:rounded-[20px] flex items-center justify-center border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 relative overflow-hidden group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img4, alt: "Al Masoudi Logo", className: "w-auto object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[180px] lg:h-[260px] lg:min-h-0 sm:col-span-1 bg-white rounded-[16px] md:rounded-[20px] overflow-hidden border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 relative group h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img6, alt: "Mockup Presentation", className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-[10px] uppercase tracking-widest font-mono", children: "Brand Merchandising" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-1 flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-[16px] md:rounded-[20px] overflow-hidden border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 flex-1 relative group min-h-[72px] h-[80px] lg:h-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img1, alt: "Corporate Stationery", className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-[16px] md:rounded-[20px] p-4 border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col justify-between gap-3 min-h-[72px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] uppercase tracking-widest text-[#030304]/50 font-mono flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Brand Palette" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#EC6303] animate-pulse" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-1.5 h-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#EC6303] rounded-md group relative cursor-pointer hover:scale-110 transition-transform shadow-inner", title: "#EC6303", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-7 left-1/2 -translate-x-1/2 bg-[#030304] text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono", children: "#EC6303" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#000000] rounded-md group relative cursor-pointer hover:scale-110 transition-transform shadow-inner", title: "#000000", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-7 left-1/2 -translate-x-1/2 bg-[#030304] text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono", children: "#000000" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#58585B] rounded-md group relative cursor-pointer hover:scale-110 transition-transform shadow-inner", title: "#58585B", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-7 left-1/2 -translate-x-1/2 bg-[#030304] text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono", children: "#58585B" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#D0D0D0] rounded-md border border-black/5 group relative cursor-pointer hover:scale-110 transition-transform shadow-inner", title: "#D0D0D0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-7 left-1/2 -translate-x-1/2 bg-[#030304] text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono", children: "#D0D0D0" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[160px] sm:col-span-2 rounded-[16px] md:rounded-[20px] p-4 md:p-6 flex items-center justify-center border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 relative overflow-hidden group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img2, alt: "Logo Geometry breakdown", className: "w-auto object-contain mix-blend-multiply" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-[16px] md:rounded-[20px] overflow-hidden border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 flex-1 relative group h-[140px] sm:h-auto min-h-[140px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img3, alt: "Brand Typography Details", className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[16px] md:rounded-[20px]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-[16px] md:rounded-[20px] overflow-hidden border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 flex-1 relative group h-[140px] sm:h-auto min-h-[140px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img5, alt: "Brand Typography Mockup", className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[16px] md:rounded-[20px]" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 border-t border-[#030304]/10 pt-6 flex justify-between items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/work/al-masoudi", className: "group inline-flex items-center gap-3 rounded-full bg-[#030304] text-[#F5F5F4] px-8 py-4 text-[12px] uppercase tracking-[0.22em] shadow-soft hover:shadow-deep transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "View Full Case Study" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1", children: "↗" })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StackingSection, { index: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 sm:px-6 md:px-10 lg:p-[220px] py-10 md:py-16 lg:py-20 relative z-10 bg-[#F5F5F4] w-full rounded-[24px] md:rounded-[32px] lg:rounded-t-[48px] lg:rounded-b-none shadow-2xl border border-black/5 lg:border-t lg:border-x-0 lg:border-b-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1600px] mx-auto w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-[#030304]/10 pb-4 mb-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6 -mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono uppercase tracking-[0.25em] text-[#D4141C]", children: "Logofolio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-[#030304] mt-1 font-semibold", children: "Haneefz Briyani" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#030304]/50 text-xs uppercase tracking-widest mt-1", children: "Caterers" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-end gap-6 lg:gap-10 lg:max-w-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#030304]/70 text-sm md:text-base leading-relaxed", children: "Haneefz Briyani is a Kerala-based caterers company providing comprehensive solutions. Crafted with precise geometries representing heritage, reliability, and growth." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-6xl md:text-8xl font-bold leading-none tracking-tighter text-[#D4141C]/15 self-end lg:self-auto", children: "02" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[180px] lg:h-[260px] sm:col-span-2 bg-white rounded-[16px] md:rounded-[20px] flex items-center justify-center border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 relative overflow-hidden group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img8, alt: "Haneefz Logo", className: "w-auto object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[180px] lg:h-[260px] lg:min-h-0 sm:col-span-1 bg-white rounded-[16px] md:rounded-[20px] overflow-hidden border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 relative group h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img9, alt: "Mockup Presentation", className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-[10px] uppercase tracking-widest font-mono", children: "Brand Merchandising" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-1 flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-[16px] md:rounded-[20px] overflow-hidden border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 flex-1 relative group min-h-[72px] h-[80px] lg:h-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img10, alt: "Corporate Stationery", className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-[16px] md:rounded-[20px] p-4 border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col justify-between gap-3 min-h-[72px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] uppercase tracking-widest text-[#030304]/50 font-mono flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Brand Palette" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#D5161B] animate-pulse" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-1.5 h-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#D5161B] rounded-md group relative cursor-pointer hover:scale-110 transition-transform shadow-inner", title: "#D5161B", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-7 left-1/2 -translate-x-1/2 bg-[#030304] text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono", children: "#D5161B" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#D7AE43] rounded-md group relative cursor-pointer hover:scale-110 transition-transform shadow-inner", title: "#D7AE43", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-7 left-1/2 -translate-x-1/2 bg-[#030304] text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono", children: "#D7AE43" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#000000] rounded-md group relative cursor-pointer hover:scale-110 transition-transform shadow-inner", title: "#000000", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-7 left-1/2 -translate-x-1/2 bg-[#030304] text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono", children: "#000000" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#D0D0D0] rounded-md border border-black/5 group relative cursor-pointer hover:scale-110 transition-transform shadow-inner", title: "#D0D0D0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-7 left-1/2 -translate-x-1/2 bg-[#030304] text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono", children: "#D0D0D0" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[160px] sm:col-span-2 rounded-[16px] md:rounded-[20px] p-4 md:p-6 flex items-center justify-center border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 relative overflow-hidden group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img11, alt: "Logo Geometry breakdown", className: "w-auto object-contain mix-blend-multiply" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-[16px] md:rounded-[20px] overflow-hidden border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 flex-1 relative group h-[140px] sm:h-auto min-h-[140px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img12, alt: "Brand Typography Details", className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[16px] md:rounded-[20px]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-[16px] md:rounded-[20px] overflow-hidden border border-[#030304]/5 shadow-md hover:shadow-xl transition-all duration-500 flex-1 relative group h-[140px] sm:h-auto min-h-[140px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img5, alt: "Brand Typography Mockup", className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[16px] md:rounded-[20px]" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
  ] });
}
export {
  PortfolioPage as component
};
