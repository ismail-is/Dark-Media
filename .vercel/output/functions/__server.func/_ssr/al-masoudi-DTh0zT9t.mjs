import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { e as img5, i as img4, a as img6, b as img1, c as img2, d as img3 } from "./6-C5IFzURf.mjs";
import { A as ArrowLeft } from "../_libs/lucide-react.mjs";
import { m as motion, u as useScroll, b as useTransform } from "../_libs/framer-motion.mjs";
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
function LocalCursor() {
  const [isTouchDevice, setIsTouchDevice] = reactExports.useState(false);
  const [position, setPosition] = reactExports.useState({
    x: -100,
    y: -100
  });
  const [hovered, setHovered] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
    setIsTouchDevice(isTouch);
    if (isTouch) return;
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    const handleMouseOver = (e) => {
      const target = e.target;
      setHovered(!!target.closest("a, button, [data-cursor]"));
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);
  if (isTouchDevice) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "pointer-events-none fixed top-0 left-0 z-50 mix-blend-difference hidden md:block", animate: {
    x: position.x - 16,
    y: position.y - 16,
    scale: hovered ? 1.8 : 1
  }, transition: {
    type: "spring",
    stiffness: 250,
    damping: 20,
    mass: 0.5
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full border border-white bg-transparent" }) });
}
function StackingSection({
  children,
  index,
  bgColor = "bg-[#F5F5F4]"
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
function AlMasoudiPage() {
  const containerRef = reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { ref: containerRef, className: "relative bg-[#030304] text-[#030304] font-sans selection:bg-[#EC6303] selection:text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LocalCursor, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(StackingSection, { index: 1, bgColor: "bg-[#0a0a0c]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none opacity-40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#EC6303]/15 to-transparent rounded-full blur-[120px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent rounded-full blur-[120px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.02]", style: {
          backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-[85vh] lg:h-full w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 pt-20 md:pt-24 pb-8 md:pb-12 flex flex-col justify-between z-10 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio", className: "group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Back to Work" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono uppercase tracking-[0.2em] text-[#EC6303] bg-[#EC6303]/10 px-3.5 py-1.5 rounded-full border border-[#EC6303]/20", children: "Identity & Branding" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center my-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 flex flex-col justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 md:mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 md:w-8 bg-[#EC6303]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#EC6303] font-semibold", children: "Featured Work" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95] text-white mb-4 md:mb-6", children: [
              "Al Masoudi ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60 font-light italic", children: "Company" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl mb-6 md:mb-8", children: "A premium brand identity designed for AL MASOUDI Contracting and Trading. Combining clean, modern geometry with industrial heritage to reflect strength, precision, and forward-looking growth." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4 border-t border-white/10 pt-4 md:pt-6 max-w-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] md:text-[10px] uppercase tracking-wider text-white/40 mb-1", children: "Client" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs md:text-sm font-medium", children: "Al Masoudi Co." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] md:text-[10px] uppercase tracking-wider text-white/40 mb-1", children: "Services" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs md:text-sm font-medium", children: "Brand Identity" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] md:text-[10px] uppercase tracking-wider text-white/40 mb-1", children: "Year" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs md:text-sm font-medium", children: "2026" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6 relative flex justify-center items-center h-[240px] sm:h-[340px] lg:h-[400px] xl:h-[450px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-white/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img5, alt: "Al Masoudi Stationery Mockup", className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 md:bottom-6 md:left-6 right-4 md:right-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-white/50 block mb-0.5", children: "Primary Showcase" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-xs md:text-sm font-medium", children: "Corporate stationery design & brand application" })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-white/40 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Saudi Arabia / Riyadh" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 animate-bounce", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Scroll to explore" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "↓" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StackingSection, { index: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 sm:px-6 md:px-10 lg:p-[220px] py-10 md:py-16 lg:py-20 relative z-10 bg-[#F5F5F4] w-full rounded-[24px] md:rounded-[32px] lg:rounded-t-[48px] lg:rounded-b-none shadow-2xl border border-black/5 lg:border-t lg:border-x-0 lg:border-b-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1600px] mx-auto w-full", children: [
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 border-t border-[#030304]/10 pt-6 flex justify-between items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio", className: "group inline-flex items-center gap-3 rounded-full bg-[#030304] text-[#F5F5F4] px-8 py-4 text-[12px] uppercase tracking-[0.22em] shadow-soft hover:shadow-deep transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Back to Portfolio" })
      ] }) })
    ] }) }) })
  ] });
}
export {
  AlMasoudiPage as component
};
