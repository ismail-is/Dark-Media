import { motion } from "motion/react";
import lumetixImg from "@/assets/images/Lumetix.png"; // We use this as an abstract creative banner background

export function HeroBanner({ title }: { title: string }) {
  return (
    <div className="relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden rounded-b-[40px] md:rounded-b-[80px] shadow-2xl">
      {/* Background Image with Parallax & Blur effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={lumetixImg}
          alt="Creative Background"
          className="w-full h-full object-cover opacity-30 grayscale blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030304]/80 via-[#030304]/40 to-[#030304]" />
      </motion.div>

      {/* Title */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 pt-24 pb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-[#F5F5F4] drop-shadow-lg"
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
}
