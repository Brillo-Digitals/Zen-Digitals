import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Cpu, Shield, Zap } from 'lucide-react';

const taglines = [
  "Building the Future of Web3 & Digital Presence",
  "From Smart Contracts to Stunning Websites",
  "Where Technology, Design, and Growth Meet"
];

// ─── Particle canvas that draws a blockchain network ───────────────────────
const BlockchainCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const NODES = Math.min(55, Math.floor(window.innerWidth / 25));
    const nodes = Array.from({ length: NODES }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 3 + 1.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width)  n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      }

      // Draw connecting lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const opacity = (1 - dist / 130) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(6,182,212,${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(6,182,212,0.7)';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#06B6D4';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60"
      aria-hidden="true"
    />
  );
};
// ─────────────────────────────────────────────────────────────────────────────

const Hero = () => {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTagline(prev => (prev + 1) % taglines.length);
    }, 3800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background network-grid pt-16">
      {/* Blockchain particle network */}
      <BlockchainCanvas />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-primary/15 rounded-full blur-[120px] animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 md:w-80 h-64 md:h-80 bg-accent/10 rounded-full blur-[100px] animate-blob animation-delay-2000 pointer-events-none" />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background pointer-events-none" />

      {/* ─── Content ─── */}
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center space-x-2 border border-primary/30 bg-primary/10 px-4 py-2 rounded-full mb-6 md:mb-8"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-primary tracking-widest uppercase">
            Blockchain · Web Design · Digital Marketing
          </span>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-4 md:mb-6"
        >
          <span className="text-white">ZEN</span>
          <span className="text-gradient"> DIGITALS</span>
        </motion.h1>

        {/* Static sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-textMain/70 max-w-xl sm:max-w-2xl mx-auto mb-4 leading-relaxed px-2"
        >
          Blockchain Development, Web Design &amp; Digital Marketing that builds
          Powerful Digital Experiences.
        </motion.p>

        {/* Rotating tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="h-8 relative overflow-hidden mb-8 md:mb-10"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTagline}
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -18, opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="absolute w-full text-center text-xs sm:text-sm text-primary font-medium tracking-wide"
            >
              ⬡ {taglines[currentTagline]} ⬡
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        >
          <a
            href="#projects"
            className="btn-neon w-full sm:w-auto group px-8 py-4 text-background font-bold rounded-full text-sm sm:text-base tracking-wide flex items-center justify-center"
          >
            Explore My Work
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 border border-primary/40 text-textMain font-semibold rounded-full text-sm sm:text-base hover:border-primary hover:text-primary hover:shadow-glow transition-all duration-300 text-center"
          >
            Start a Project
          </a>
        </motion.div>

        {/* Floating stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-14 md:mt-20 flex flex-wrap justify-center gap-6 sm:gap-10"
        >
          {[
            { icon: <Cpu size={18} />, label: 'Smart Contracts', value: '20+' },
            { icon: <Shield size={18} />, label: 'Audited Projects', value: '100%' },
            { icon: <Zap size={18} />, label: 'Clients Served', value: '50+' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary border border-primary/20">
                {stat.icon}
              </div>
              <div className="text-left">
                <div className="text-lg sm:text-xl font-black text-white leading-none">{stat.value}</div>
                <div className="text-xs text-textMain/50 leading-none mt-0.5">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
