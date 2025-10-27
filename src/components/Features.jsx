import React from 'react';
import { Database, Boxes, Workflow, Zap, Shield, RefreshCw, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Database,
    title: 'Instant Schema Visuals',
    desc: 'Connect Postgres, MySQL, MongoDB, or SQL Server — your tables and relations render in real-time.'
  },
  {
    icon: Boxes,
    title: 'AI Schema Builder',
    desc: 'Describe your domain, drag-and-drop entities, and let AI wire keys, constraints, and indexes.'
  },
  {
    icon: Workflow,
    title: 'One-click Migrations',
    desc: 'Generate safe migration plans, preview diffs, and execute with rollback confidence.'
  },
  {
    icon: Zap,
    title: 'Blazing Collaboration',
    desc: 'Share live links, comment on entities, track changes with versioned blueprints.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    desc: 'Row-level access, SSO/SAML, audit logs, and field masking — security by default.'
  },
  {
    icon: RefreshCw,
    title: 'Cross-DB Migrate',
    desc: 'Move from one engine to another in a click with format-aware mapping and type safety.'
  }
];

const Chip = ({ label, color }) => (
  <div className={`inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-medium ring-1 ${color}`}>
    <span className="h-2 w-2 rounded-full bg-current opacity-80" />
    {label}
  </div>
);

const ChipsGraph = () => {
  return (
    <div className="relative mx-auto mt-14 grid h-[420px] w-full max-w-5xl place-items-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 backdrop-blur">
      {/* pulse aura */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(30rem_30rem_at_50%_50%,rgba(99,102,241,0.12),transparent_60%)]"
      />

      {/* central node */}
      <div className="relative z-10 flex flex-col items-center gap-2">
        <div className="rounded-2xl bg-gradient-to-r from-cyan-400/20 via-fuchsia-400/20 to-violet-400/20 px-6 py-3 ring-1 ring-white/15">
          <div className="text-sm font-semibold tracking-tight text-white">NovaSchema</div>
        </div>
        <div className="text-xs text-white/60">Live canvas • AI builder • Migrations</div>
      </div>

      {/* orbit chips */}
      <div className="pointer-events-none absolute inset-0">
        {/* connectors */}
        {[
          { label: 'Postgres', pos: 'left-[8%] top-[18%]', rot: '-12deg', color: 'text-cyan-300 ring-cyan-400/30 bg-cyan-400/10' },
          { label: 'MySQL', pos: 'left-[12%] bottom-[20%]', rot: '12deg', color: 'text-emerald-300 ring-emerald-400/30 bg-emerald-400/10' },
          { label: 'MongoDB', pos: 'right-[10%] top-[16%]', rot: '10deg', color: 'text-green-300 ring-green-400/30 bg-green-400/10' },
          { label: 'SQL Server', pos: 'right-[12%] bottom-[18%]', rot: '-10deg', color: 'text-rose-300 ring-rose-400/30 bg-rose-400/10' },
          { label: 'Snowflake', pos: 'left-1/2 top-[6%] -translate-x-1/2', rot: '0deg', color: 'text-sky-300 ring-sky-400/30 bg-sky-400/10' },
        ].map((c, i) => (
          <React.Fragment key={c.label}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`absolute ${c.pos}`}
            >
              <Chip label={c.label} color={c.color} />
            </motion.div>

            {/* line to center */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.05 }}
              className={`absolute left-1/2 top-1/2 h-[2px] origin-left -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-white/10 to-white/40`} 
              style={{ width: '38%', rotate: c.rot }}
            />
          </React.Fragment>
        ))}
      </div>

      {/* bottom bar explainers */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-wrap items-center justify-center gap-2 border-t border-white/10 bg-black/30 p-3 text-xs text-white/70">
        <div className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
          <RefreshCw size={14} className="text-cyan-300" />
          Cross-DB migrate in one click
        </div>
        <div className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
          <Sparkles size={14} className="text-fuchsia-300" />
          AI type-mapping & index hints
        </div>
        <a href="#terminal" className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-3 py-1.5 font-medium text-neutral-900 hover:bg-cyan-400">
          See workflow <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="relative w-full bg-neutral-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_30rem_at_50%_-10%,rgba(34,211,238,0.15),transparent)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold sm:text-4xl"
          >
            Everything you need to master your data
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-3 text-white/70"
          >
            NovaSchema turns complex database work into a visual, collaborative flow — powered by AI.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 backdrop-blur-md"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-400/30">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        {/* Chip-style graph representing migrations & AI */}
        <ChipsGraph />

        {/* AI mini-cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Prompt → Schema',
              desc: 'Describe your domain in natural language. Get tables, keys, and constraints — editable on canvas.',
              glow: 'from-fuchsia-400/20',
            },
            {
              title: 'Auto Indexer',
              desc: 'Query-aware suggestions with projected impact, cardinality hints, and rollback plans.',
              glow: 'from-cyan-400/20',
            },
            {
              title: 'Typed Migrations',
              desc: 'Safer cross-engine moves with automatic type mapping and validation.',
              glow: 'from-violet-400/20',
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${c.glow} to-transparent`} />
              <div className="relative z-10">
                <div className="mb-2 text-sm font-semibold text-white/90">{c.title}</div>
                <p className="text-sm text-white/65">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
