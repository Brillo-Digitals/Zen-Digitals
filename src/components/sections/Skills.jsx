import React from 'react';
import { motion } from 'framer-motion';
import { Blocks, LayoutTemplate, TrendingUp, ShieldCheck, Cpu, Smartphone, Search, Mail, LineChart } from 'lucide-react';

const categories = [
  {
    title: 'Blockchain Dev',
    icon: <Blocks size={28} />,
    tag: 'web3',
    gradient: 'from-cyan-500/20 via-transparent to-transparent',
    glow: 'hover:shadow-glow',
    skills: [
      { name: 'Solidity & Smart Contracts', icon: <Cpu size={15} /> },
      { name: 'DApp Architecture',          icon: <Blocks size={15} /> },
      { name: 'Web3 Integrations',          icon: <Smartphone size={15} /> },
      { name: 'Smart Contract Security',    icon: <ShieldCheck size={15} /> },
    ],
  },
  {
    title: 'Web Design & Dev',
    icon: <LayoutTemplate size={28} />,
    tag: 'design',
    gradient: 'from-indigo-500/20 via-transparent to-transparent',
    glow: 'hover:shadow-glow-accent',
    skills: [
      { name: 'React & Next.js',              icon: <LayoutTemplate size={15} /> },
      { name: 'CMS: Wix, Shopify, WordPress', icon: <Blocks size={15} /> },
      { name: 'Responsive Design',            icon: <Smartphone size={15} /> },
      { name: 'Performance Optimization',     icon: <Cpu size={15} /> },
    ],
  },
  {
    title: 'Digital Marketing',
    icon: <TrendingUp size={28} />,
    tag: 'growth',
    gradient: 'from-cyan-500/20 via-transparent to-transparent',
    glow: 'hover:shadow-glow',
    skills: [
      { name: 'SEO Optimization',       icon: <Search size={15} /> },
      { name: 'Social Media Strategy',  icon: <TrendingUp size={15} /> },
      { name: 'Email & Automation',     icon: <Mail size={15} /> },
      { name: 'CRO & Analytics',        icon: <LineChart size={15} /> },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="py-24 bg-background-surface relative overflow-hidden">
    <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block text-primary text-xs font-mono uppercase tracking-[0.3em] mb-4"
        >
          // Skills
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-white mb-4"
        >
          Technical Arsenal
        </motion.h2>
        <p className="text-textMain/50">A blend of code, design, and growth mechanics.</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            className={`group card-blockchain p-7 rounded-2xl relative overflow-hidden border border-primary/10 hover:border-primary/40 transition-all duration-500 ${cat.glow}`}
          >
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10">
              {/* Tag + Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-background-surface border border-primary/20 text-primary group-hover:border-primary/50 transition-colors group-hover:shadow-glow">
                  {cat.icon}
                </div>
                <span className="text-[10px] font-mono text-primary/60 border border-primary/20 px-2 py-0.5 rounded-full">
                  _{cat.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-5">{cat.title}</h3>

              <ul className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center text-textMain/60 group/item">
                    <span className="p-1.5 rounded-md bg-primary/10 text-primary mr-3 group-hover/item:bg-primary/20 transition-colors">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium group-hover/item:text-textMain transition-colors">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
