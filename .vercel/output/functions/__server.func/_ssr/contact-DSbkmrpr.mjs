import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.header, { initial: {
    y: -20,
    opacity: 0
  }, animate: {
    y: 0,
    opacity: 1
  }, transition: {
    duration: 0.8,
    delay: 0.2
  }, className: "absolute top-0 left-0 right-0 z-30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-10 md:py-7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-[#F5F5F4]/15 bg-[#F5F5F4]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-y-0 left-0 w-1/2 bg-[#030304]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl md:text-2xl text-[#F5F5F4] leading-none", children: "Dark Media" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "group inline-flex items-center gap-2 rounded-full bg-[#F5F5F4] text-[#030304] px-5 py-2 text-[13px] font-medium shadow-soft hover:scale-105 transition-transform", children: "Back to Home" })
  ] }) });
}
function BgAnimation() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden bg-[#030304] z-0 pointer-events-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
      scale: [1, 1.25, 1],
      rotate: [0, 90, 0],
      opacity: [0.2, 0.4, 0.2]
    }, transition: {
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut"
    }, className: "absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full blur-[120px]", style: {
      background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
      scale: [1, 1.4, 1],
      rotate: [0, -90, 0],
      opacity: [0.15, 0.35, 0.15]
    }, transition: {
      duration: 25,
      repeat: Infinity,
      ease: "easeInOut"
    }, className: "absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] rounded-full blur-[100px]", style: {
      background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
      y: [0, -50, 0],
      opacity: [0.1, 0.25, 0.1]
    }, transition: {
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut"
    }, className: "absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full blur-[90px]", style: {
      background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.04] mix-blend-overlay", style: {
      backgroundImage: "radial-gradient(#F5F5F4 1px, transparent 1px)",
      backgroundSize: "4px 4px"
    } })
  ] });
}
function Contact() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen bg-[#030304] text-[#F5F5F4] flex flex-col items-center justify-center overflow-hidden font-sans", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BgAnimation, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full max-w-4xl px-5 pt-28 pb-12 flex flex-col items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8
      }, className: "text-center mb-10 md:mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-6", children: [
          "Let's ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-[#F5F5F4]/70", children: "Talk" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#F5F5F4]/60 text-base md:text-lg max-w-md mx-auto leading-relaxed", children: "We're ready to bring your ideas to life. Drop us a line and we'll get back to you within 24 hours." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8,
        delay: 0.2
      }, className: "w-full max-w-md", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.95
      }, animate: {
        opacity: 1,
        scale: 1
      }, className: "rounded-3xl bg-[#F5F5F4]/5 border border-[#F5F5F4]/10 p-10 text-center backdrop-blur-md shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-4", children: "✨" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl mb-2", children: "Message received!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#F5F5F4]/60", children: "We'll be in touch shortly." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSubmitted(true);
      }, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Your Name", required: true, className: "w-full rounded-2xl bg-[#F5F5F4]/[0.03] border border-[#F5F5F4]/10 px-6 py-4 text-[#F5F5F4] placeholder:text-[#F5F5F4]/40 outline-none focus:border-[#F5F5F4]/40 focus:bg-[#F5F5F4]/[0.06] transition-all backdrop-blur-md" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", placeholder: "Your Email", required: true, className: "w-full rounded-2xl bg-[#F5F5F4]/[0.03] border border-[#F5F5F4]/10 px-6 py-4 text-[#F5F5F4] placeholder:text-[#F5F5F4]/40 outline-none focus:border-[#F5F5F4]/40 focus:bg-[#F5F5F4]/[0.06] transition-all backdrop-blur-md" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { placeholder: "Your Message", rows: 4, required: true, className: "w-full rounded-2xl bg-[#F5F5F4]/[0.03] border border-[#F5F5F4]/10 px-6 py-4 text-[#F5F5F4] placeholder:text-[#F5F5F4]/40 outline-none focus:border-[#F5F5F4]/40 focus:bg-[#F5F5F4]/[0.06] transition-all resize-none backdrop-blur-md" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full rounded-2xl bg-[#F5F5F4] text-[#030304] px-6 py-4 text-base font-medium hover:bg-[#E5E5E4] active:scale-[0.98] transition-all shadow-lg", children: "Send Message" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        duration: 1,
        delay: 0.5
      }, className: "mt-16 md:mt-24 flex flex-wrap justify-center gap-8 md:gap-16 text-center text-sm text-[#F5F5F4]/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "uppercase tracking-widest text-[10px] mb-1.5 opacity-50 font-medium", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@darkmedia.com", className: "hover:text-[#F5F5F4] transition-colors", children: "hello@darkmedia.com" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "uppercase tracking-widest text-[10px] mb-1.5 opacity-50 font-medium", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+923001234567", className: "hover:text-[#F5F5F4] transition-colors", children: "+92 300 1234567" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "uppercase tracking-widest text-[10px] mb-1.5 opacity-50 font-medium", children: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Lahore, Pakistan" })
        ] })
      ] })
    ] })
  ] });
}
export {
  Contact as component
};
