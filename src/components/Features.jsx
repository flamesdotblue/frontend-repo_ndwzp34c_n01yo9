import React from 'react';
import { Database, Boxes, Workflow, Zap, Shield, RefreshCw } from 'lucide-react';
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
      </div>
    </section>
  );
};

export default Features;
