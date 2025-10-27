import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-neutral-950/65 to-neutral-950"></div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-md"
        >
          <Sparkles size={14} className="text-cyan-300" />
          Introducing NovaSchema
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="max-w-5xl bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl"
        >
          The AI-native studio to visualize, build, and migrate databases — instantly.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-2xl text-base text-white/70 sm:text-lg"
        >
          Plug in any engine and watch your schema come alive. Drag-and-drop modeling, prompt-to-schema, and one-click cross-DB migrations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-cyan-400"
          >
            Get started free
            <ArrowRight className="transition group-hover:translate-x-0.5" size={18} />
          </a>
          <a
            href="#terminal"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            See it in action
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
