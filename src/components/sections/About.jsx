import React from 'react';
import { motion } from 'framer-motion';
import { Code2, GraduationCap, PenTool, ChevronRight } from 'lucide-react';

const experiences = [
  {
    year: '2024 – Now',
    title: 'Founder & CEO',
    company: 'Zen Digitals',
    description: 'Building powerful blockchain and digital solutions. Leading a growing portfolio of Web3 DApps, premium web designs, and data-driven marketing campaigns.',
    icon: <Code2 size={18} className="text-primary" />,
    color: 'from-cyan-500/20 to-transparent',
  },
  {
    year: '2023 – 2027',
    title: 'B.Sc. Student',
    company: 'University of Ibadan',
    description: 'Pursuing academic excellence while building real-world technical expertise in software development, system design, and digital product creation.',
    icon: <GraduationCap size={18} className="text-accent" />,
    color: 'from-indigo-500/20 to-transparent',
  },
  {
    year: 'Ongoing',
    title: 'Blockchain & Digital Creator',
    company: 'Freelance',
    description: 'Developing smart contracts in Solidity, designing CMS-powered websites, and building SEO and automation strategies for clients across multiple industries.',
    icon: <PenTool size={18} className="text-primary" />,
    color: 'from-cyan-500/20 to-transparent',
  },
];

const About = () => (
  <section id="about" className="py-24 bg-background relative overflow-hidden network-grid">
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block text-primary text-xs font-mono uppercase tracking-[0.3em] mb-4"
        >
          // About
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-white mb-6"
        >
          Behind the Brand
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-textMain/60 leading-relaxed"
        >
          I'm <span className="text-primary font-semibold">Lukman Adesiyan</span>, founder of Zen Digitals.
          Passionate about the intersection of blockchain technology, compelling design, and performance marketing.
          I create solutions that don't just look great — they drive measurable impact.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative card-blockchain rounded-2xl p-6 border-glow-hover border border-primary/10 transition-all duration-300 hover:border-primary/40 hover:shadow-glow"
          >
            {/* Top gradient accent */}
            <div className={`absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="flex items-start gap-5">
              <div className="shrink-0 mt-1 p-2.5 rounded-xl bg-background-surface border border-primary/10 group-hover:border-primary/40 transition-colors">
                {exp.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                  <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.year}
                  </span>
                </div>
                <div className="flex items-center text-primary/80 text-sm font-medium mb-3">
                  <ChevronRight size={14} className="mr-1" />
                  {exp.company}
                </div>
                <p className="text-textMain/55 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
