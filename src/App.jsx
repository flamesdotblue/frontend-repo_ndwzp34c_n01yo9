import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Terminal from './components/Terminal';
import CTA from './components/CTA';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-tr from-cyan-400 via-fuchsia-400 to-violet-400" />
            <span className="font-semibold tracking-tight">NovaSchema</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#terminal" className="hover:text-white">Developers</a>
            <a href="#cta" className="hover:text-white">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="rounded-lg border border-white/15 px-3 py-1.5 text-sm text-white/80 hover:bg-white/5">Sign in</a>
            <a href="#cta" className="rounded-lg bg-cyan-500 px-3 py-1.5 text-sm font-medium text-neutral-900 hover:bg-cyan-400">Get started</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <div id="features"><Features /></div>
        <Terminal />
        <CTA />
      </main>

      <footer className="border-t border-white/10 bg-neutral-950 py-10 text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-cyan-400 via-fuchsia-400 to-violet-400" />
            <span className="text-sm">© {new Date().getFullYear()} NovaSchema</span>
          </div>
          <div className="text-xs">Built for teams who treat data like product.</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
