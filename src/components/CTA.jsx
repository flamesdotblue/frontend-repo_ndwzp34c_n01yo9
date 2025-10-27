import React from 'react';
import { ArrowRight, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="cta" className="relative w-full overflow-hidden bg-neutral-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80rem_40rem_at_50%_0%,rgba(168,85,247,0.12),transparent)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-8 text-center shadow-2xl backdrop-blur-xl sm:p-12"
        >
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Sparkles size={14} className="text-fuchsia-300" />
            Pricing starts free — scale as you grow
          </div>
          <h3 className="mx-auto max-w-2xl text-3xl font-semibold sm:text-4xl">Meet NovaSchema — your database command center</h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">Unlimited visualizations in dev. Team seats, SSO, and audit logs on Pro. SOC 2 on Enterprise.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-medium text-neutral-900 transition hover:bg-cyan-400">
              Launch the studio <ArrowRight size={18} />
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white/90 transition hover:bg-white/10">
              View pricing
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-white/60">
            <div className="inline-flex items-center gap-1.5"><Shield size={14} className="text-emerald-300" /> SOC 2 ready</div>
            <div>14-day Pro trial · No credit card</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
