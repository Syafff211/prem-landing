// components/Hero.tsx
'use client';
import { motion } from 'framer-motion';
import { fadeUp, staggerChar } from '@/lib/motion';

const title = ['ZYNEX', 'STUDIO'];

export default function Hero() {
  return (
    <section className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Label */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={1}
        className="mb-8 text-[11px] tracking-luxe text-accent"
      >
        DIGITAL CREATIVE AGENCY
      </motion.p>

      {/* Title with stagger */}
      <h1 className="font-display font-bold leading-[0.9] tracking-tight">
        {title.map((word, wi) => (
          <span key={word} className="block overflow-hidden">
            <span className="flex justify-center">
              {word.split('').map((ch, ci) => (
                <motion.span
                  key={ci}
                  variants={staggerChar}
                  initial="hidden"
                  animate="show"
                  custom={wi * 5 + ci}
                  className="inline-block text-[19vw] leading-[0.85] md:text-[13vw] lg:text-[11rem]"
                >
                  {ch}
                </motion.span>
              ))}
            </span>
          </span>
        ))}
      </h1>

      {/* Subtitle */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={9}
        className="mt-8 text-sm tracking-wide2 text-ivory/90 md:text-base"
      >
        Modern Website <span className="text-accent">•</span> Branding{' '}
        <span className="text-accent">•</span> Automation Solutions
      </motion.p>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={10}
        className="mt-6 max-w-xl text-sm leading-relaxed text-white/55"
      >
        Building premium websites, modern business platforms, high-converting
        landing pages, and digital experiences for startups, creators, and
        growing businesses.
      </motion.p>
    </section>
  );
}