import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Terminal as TerminalIcon, Bot, Database, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const lines = [
  { t: '$ novaschema connect --url postgresql://user:***@db.prod:5432/app', d: 60 },
  { t: '✓ Connected. Introspecting schema…', d: 40 },
  { t: '• Found 24 tables, 78 relations, 132 indexes', d: 30 },
  { t: '$ novaschema visualize --live', d: 60 },
  { t: '🎨 Opening live schema map at https://app.novaschema.dev/project/alpha', d: 40 },
  { t: '$ novaschema ai build "Subscriptions with plans, invoices, seats"', d: 60 },
  { t: '🤖 AI drafted 5 tables with FKs. Ready to apply?', d: 35 },
  { t: '$ yes', d: 25 },
  { t: '⚙️  Applying migrations… done in 1.2s', d: 25 },
  { t: '$ novaschema migrate --to mysql://root:***@10.1.0.5:3306/app', d: 60 },
  { t: '🔁 Type mapping: uuid→char(36), jsonb→json, timestamptz→timestamp', d: 35 },
  { t: '✅ Migration complete. 24/24 tables moved.', d: 30 },
];

const useTypewriter = (items) => {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);
  const [done, setDone] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (index >= items.length) {
      setDone(true);
      return;
    }

    const current = items[index];
    const speed = current.d;

    timerRef.current = setTimeout(() => {
      if (char < current.t.length) {
        setDisplay((prev) => prev + current.t[char]);
        setChar((c) => c + 1);
      } else {
        setDisplay((prev) => prev + '\n');
        setIndex((i) => i + 1);
        setChar(0);
      }
    }, Math.max(10, speed / 2));

    return () => clearTimeout(timerRef.current);
  }, [index, char, items]);

  return { display, done };
};

const Terminal = () => {
  const { display } = useTypewriter(lines);
  const headerGradient = useMemo(() => (
    'bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400'
  ), []);

  return (
    <section id="terminal" className="relative w-full bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
            <TerminalIcon size={18} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Developer-first experience</h2>
            <p className="text-white/70">A friendly terminal for power moves. Everything reflects live in the canvas.</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-2xl backdrop-blur-xl"
        >
          <div className={`flex items-center justify-between border-b border-white/10 px-4 py-3 ${headerGradient}`}>
            <div className="flex items-center gap-2 text-black/90">
              <span className="h-3 w-3 rounded-full bg-red-500/90" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/90" />
              <span className="h-3 w-3 rounded-full bg-green-500/90" />
            </div>
            <div className="flex items-center gap-2 text-black/80">
              <Bot size={16} />
              <span className="text-sm font-medium">NovaSchema Assistant</span>
            </div>
            <div className="text-black/50 text-xs">v1.0</div>
          </div>

          <pre className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 h-[360px] w-full overflow-auto p-4 font-mono text-sm text-white/90">
{display}
          </pre>

          <div className="border-t border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5">
                <Database size={16} className="text-cyan-300" />
                <span>Postgres, MySQL, SQL Server, MongoDB</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5">
                <Bot size={16} className="text-fuchsia-300" />
                <span>AI schema & migrations</span>
              </div>
              <a href="#cta" className="ml-auto inline-flex items-center gap-2 rounded-md bg-cyan-500 px-3 py-1.5 font-medium text-neutral-900 hover:bg-cyan-400">
                Start free <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Terminal;
