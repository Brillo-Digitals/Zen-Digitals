import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, LayoutGrid, TrendingUp, Code2 } from 'lucide-react';
import { projectsData } from '../data/projects';

const categoryColors = {
  Blockchain:          'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  'Web Design':        'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
  'Digital Marketing': 'bg-violet-500/10 text-violet-400 border-violet-500/30',
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-black text-white">Project Not Found</h1>
        <Link to="/" className="text-primary hover:underline flex items-center gap-2 font-mono text-sm">
          <ArrowLeft size={16} /> _ back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* ── Hero Header ── */}
      <div className="relative h-[55vh] min-h-[380px] w-full overflow-hidden pt-20">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20 z-10" />
        {/* Neon tint */}
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105"
        />

        {/* Glow blobs */}
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-primary/20 rounded-full blur-[120px] z-0 pointer-events-none" />

        <div className="relative z-20 h-full container mx-auto px-6 flex flex-col justify-end pb-14">
          <Link to="/" className="text-textMain/50 hover:text-primary flex items-center gap-2 mb-8 w-max transition-colors text-sm font-mono group">
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            _ back_to_portfolio
          </Link>

          <div className="flex flex-wrap gap-3 mb-4">
            <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${categoryColors[project.category] ?? ''}`}>
              {project.category}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4 max-w-4xl leading-tight"
          >
            {project.title}
          </motion.h1>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="container mx-auto px-6 -mt-8 relative z-30">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Main Content */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="card-blockchain rounded-3xl p-8 md:p-12 border border-primary/10"
            >
              {/* Section: Overview */}
              <span className="inline-block text-primary text-xs font-mono uppercase tracking-[0.3em] mb-4">// Overview</span>
              <h2 className="text-2xl font-black text-white mb-5">Project Summary</h2>
              <p className="text-textMain/60 leading-relaxed mb-12">
                {project.description} This case study walks through the process of bringing this ambitious digital experience to life — from initial strategy and architecture to deployment and scaling.
              </p>

              {/* Section: Challenge */}
              <div className="border-t border-white/5 pt-10 mb-10">
                <span className="inline-block text-primary text-xs font-mono uppercase tracking-[0.3em] mb-4">// Problem</span>
                <h3 className="text-xl font-bold text-white mb-4">The Challenge</h3>
                <p className="text-textMain/60 leading-relaxed">
                  In today's competitive digital ecosystem, creating a product that stands out requires balancing performance, user experience, and technical innovation. The core challenge was delivering a highly interactive interface without compromising load times or accessibility.
                </p>
              </div>

              {/* Blockchain-specific */}
              {project.category === 'Blockchain' && (
                <div className="border-t border-white/5 pt-10 mb-10">
                  <span className="inline-block text-primary text-xs font-mono uppercase tracking-[0.3em] mb-4">// Architecture</span>
                  <h3 className="text-xl font-bold text-white mb-4">Web3 Architecture</h3>
                  <p className="text-textMain/60 leading-relaxed">
                    The application leverages advanced smart contract patterns focusing on gas optimization and security. Interactions are handled via Ethers.js, providing users with a Web2-like experience while interacting with decentralized protocols.
                  </p>
                </div>
              )}

              {/* Section: Result */}
              <div className="border-t border-white/5 pt-10">
                <span className="inline-block text-primary text-xs font-mono uppercase tracking-[0.3em] mb-4">// Results</span>
                <h3 className="text-xl font-bold text-white mb-4">The Outcome</h3>
                <p className="text-textMain/60 leading-relaxed mb-6">
                  The final product exceeded primary KPIs, with significant improvements in user engagement, retention, and overall system reliability.
                </p>

                {project.metrics && (
                  <div className="flex items-center gap-5 p-5 bg-primary/5 border border-primary/20 rounded-2xl">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0">
                      <TrendingUp size={22} />
                    </div>
                    <div>
                      <span className="block text-xs font-mono text-textMain/40 uppercase tracking-widest mb-1">Key Impact</span>
                      <span className="text-2xl font-black text-primary">{project.metrics}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="card-blockchain rounded-3xl p-8 border border-primary/10 sticky top-24"
            >
              <h3 className="text-base font-bold text-white mb-6 flex items-center gap-3">
                <LayoutGrid size={18} className="text-primary" />
                Project Info
              </h3>

              <div className="space-y-6">
                <div>
                  <span className="block text-xs font-mono text-textMain/30 uppercase tracking-widest mb-2">Category</span>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${categoryColors[project.category] ?? ''}`}>
                    {project.category}
                  </span>
                </div>

                <div className="border-t border-white/5 pt-5">
                  <span className="block text-xs font-mono text-textMain/30 uppercase tracking-widest mb-3">Stack</span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs font-mono px-2.5 py-1 bg-background-surface text-primary/70 rounded-lg border border-primary/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/5 pt-5">
                  <span className="block text-xs font-mono text-textMain/30 uppercase tracking-widest mb-3">Role</span>
                  <div className="flex items-center gap-2 text-sm text-textMain/60">
                    <Code2 size={15} className="text-primary" />
                    Lead Developer & Designer
                  </div>
                </div>

                <div className="border-t border-white/5 pt-5">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-neon w-full py-4 rounded-xl flex items-center justify-center gap-2 text-background font-bold text-sm group"
                  >
                    View Live Project
                    <ExternalLink size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
