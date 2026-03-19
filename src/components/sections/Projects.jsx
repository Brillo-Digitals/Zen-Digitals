import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData, projectCategories } from '../../data/projects';

const categoryColors = {
  Blockchain:         'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'Web Design':       'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  'Digital Marketing':'bg-violet-500/10 text-violet-400 border-violet-500/20',
};

const Projects = () => {
  const [active, setActive] = useState('All');
  const filtered = projectsData.filter(p => active === 'All' ? true : p.category === active);

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <span className="inline-block text-primary text-xs font-mono uppercase tracking-[0.3em] mb-4">// Selected Work</span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Digital Products<br />
              <span className="text-gradient">&amp; Solutions</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {projectCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  active === cat
                    ? 'bg-primary text-background border-primary shadow-glow'
                    : 'bg-transparent text-textMain/50 border-white/10 hover:border-primary/40 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                className="group card-blockchain rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/40 transition-all duration-500 hover:shadow-glow flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-background-surface">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out brightness-75 group-hover:brightness-90"
                    loading="lazy"
                  />
                  {/* Category tag */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold border ${categoryColors[project.category]}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-textMain/50 text-sm mb-5 flex-grow leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-background-surface text-primary/70 border border-primary/10">
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-background-surface text-textMain/40 border border-white/5">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                    <Link
                      to={project.caseStudy}
                      className="text-sm font-semibold text-textMain/60 hover:text-primary transition-colors flex items-center group/link"
                    >
                      Case Study
                      <ArrowRight size={15} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <a
                      href={project.liveLink}
                      target="_blank" rel="noreferrer"
                      className="p-2 bg-background-surface hover:bg-primary/10 text-textMain/40 hover:text-primary rounded-lg transition-all border border-white/5 hover:border-primary/30"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
