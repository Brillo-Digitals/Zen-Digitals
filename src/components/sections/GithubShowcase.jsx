import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, BookOpen, Code, Activity, Terminal, ExternalLink } from 'lucide-react';

const mockRepos = [
  {
    id: 1,
    name: 'zen-defi-protocol',
    description: 'Core smart contracts for a next-gen decentralized exchange with concentrated liquidity.',
    language: 'Solidity',
    stargazers_count: 342,
    forks_count: 56,
    html_url: '#',
  },
  {
    id: 2,
    name: 'modern-ecommerce-template',
    description: 'A blazing fast headless Shopify template built with Next.js 14, Tailwind, and Framer Motion.',
    language: 'TypeScript',
    stargazers_count: 215,
    forks_count: 34,
    html_url: '#',
  },
  {
    id: 3,
    name: 'seo-automation-scripts',
    description: 'Python scripts for automated technical SEO auditing and report generation.',
    language: 'Python',
    stargazers_count: 189,
    forks_count: 22,
    html_url: '#',
  },
  {
    id: 4,
    name: 'web3-auth-hook',
    description: 'React hook for seamless Web3 wallet connections supporting multiple providers.',
    language: 'TypeScript',
    stargazers_count: 145,
    forks_count: 18,
    html_url: '#',
  },
];

const langColor = {
  Solidity:   'bg-cyan-400',
  TypeScript: 'bg-indigo-400',
  Python:     'bg-blue-400',
  JavaScript: 'bg-yellow-400',
};

const GithubShowcase = () => (
  <section id="github" className="py-24 bg-background relative overflow-hidden">
    {/* Scrolling code bg */}
    <div className="absolute inset-0 opacity-[0.025] pointer-events-none overflow-hidden select-none font-mono text-[11px] leading-5 text-primary whitespace-nowrap flex flex-col gap-2">
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} className="animate-marquee" style={{ animationDuration: `${20 + (i % 6) * 5}s`, animationDelay: `${i * 0.3}s` }}>
          {'function deployContract() { const tx = await factory.deploy(); return tx.address; } // Zen Digitals – Solidity · Next.js · SEO · Web3 · React'}
        </div>
      ))}
    </div>

    <div className="container mx-auto px-6 relative z-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
        <div className="flex items-center gap-5">
          <div className="p-4 card-blockchain rounded-2xl border border-primary/20">
            <Github size={36} className="text-primary" />
          </div>
          <div>
            <span className="block text-primary text-xs font-mono uppercase tracking-[0.3em] mb-1">// Developer</span>
            <h2 className="text-3xl md:text-4xl font-black text-white flex items-center gap-2 font-mono">
              git.showcase
              <span className="animate-pulse text-primary">_</span>
            </h2>
            <p className="text-textMain/40 font-mono text-xs mt-1">~/zen-digitals/repositories</p>
          </div>
        </div>
        <a
          href="https://github.com" target="_blank" rel="noreferrer"
          className="flex items-center gap-3 px-5 py-3 card-blockchain border border-primary/15 hover:border-primary/50 text-textMain/70 hover:text-primary rounded-xl transition-all text-sm font-mono group"
        >
          <Terminal size={16} className="group-hover:text-primary transition-colors" />
          View Full Profile
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-blockchain rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all group relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-background-surface border-2 border-primary/20 flex items-center justify-center relative overflow-hidden">
              <Github size={28} className="text-primary" />
              <div className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-background-card" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">zen-digitals</h3>
              <span className="text-xs text-textMain/40 font-mono">@lukmanadesiyan</span>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { icon: <BookOpen size={15} />, label: 'Repositories', value: '42' },
              { icon: <Code size={15} />, label: 'Contributions (yr)', value: '2,419' },
              { icon: <Activity size={15} />, label: 'Active Status', value: <span className="text-green-400 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />Online</span> },
            ].map(({ icon, label, value }, i) => (
              <div key={i} className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-0">
                <span className="flex items-center gap-2 text-xs text-textMain/40">{icon} {label}</span>
                <span className="text-xs font-mono text-white">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Repo cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {mockRepos.map((repo, i) => (
            <motion.a
              key={repo.id}
              href={repo.html_url} target="_blank" rel="noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-blockchain rounded-2xl p-5 border border-primary/10 hover:border-primary/40 hover:shadow-glow group transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-sm font-bold text-textMain/80 group-hover:text-primary transition-colors break-all leading-snug pr-2">
                  {repo.name}
                </h4>
                <ExternalLink size={14} className="text-textMain/20 group-hover:text-primary shrink-0 mt-0.5 transition-colors" />
              </div>
              <p className="text-xs text-textMain/40 flex-grow leading-relaxed mb-4 line-clamp-2">{repo.description}</p>
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <div className="flex items-center gap-1.5 text-xs text-textMain/40">
                  <span className={`w-2.5 h-2.5 rounded-full ${langColor[repo.language] || 'bg-gray-400'}`} />
                  {repo.language}
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-xs text-textMain/40 hover:text-yellow-400 transition-colors cursor-pointer">
                    <Star size={13} /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-textMain/40 hover:text-primary transition-colors cursor-pointer">
                    <GitFork size={13} /> {repo.forks_count}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default GithubShowcase;
