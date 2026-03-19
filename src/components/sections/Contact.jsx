import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, Linkedin, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden network-grid">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto card-blockchain rounded-3xl overflow-hidden flex flex-col lg:flex-row border border-primary/15 shadow-glow-lg">

          {/* ── Info side ── */}
          <div className="lg:w-2/5 bg-background-surface p-10 md:p-12 relative overflow-hidden flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-primary/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/15 rounded-full blur-[80px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-block text-primary text-xs font-mono uppercase tracking-[0.3em] mb-6">// Contact</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                Let's build something<br />
                <span className="text-gradient">extraordinary.</span>
              </h2>
              <p className="text-textMain/50 mb-10 text-sm leading-relaxed">
                Have a project in mind, need a blockchain solution, or just want to say hi?
                I'm always open to new opportunities.
              </p>

              <div className="space-y-5">
                {[
                  { href: 'mailto:hello@zendigitals.com', icon: <Mail size={19} />, label: 'Email', value: 'lukmanadesiyan112@gmail.com' },
                  { href: 'https://wa.me/2348132791783', icon: <MessageSquare size={19} />, label: 'WhatsApp', value: 'Start a chat' },
                  { href: 'https://linkedin.com', icon: <Linkedin size={19} />, label: 'LinkedIn', value: 'Lukman Adesiyan' },
                ].map((item, i) => (
                  <a key={i} href={item.href} target="_blank" rel="noreferrer"
                    className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-background-card border border-primary/15 flex items-center justify-center text-primary/60 group-hover:text-primary group-hover:border-primary/50 group-hover:shadow-glow transition-all duration-300 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block text-xs text-textMain/30 font-medium mb-0.5">{item.label}</span>
                      <span className="text-textMain/80 font-medium text-sm group-hover:text-primary transition-colors">{item.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-10 pt-6 border-t border-white/5">
              <p className="text-textMain/30 text-xs font-mono">
                _ Based in Nigeria · Remote worldwide
              </p>
            </div>
          </div>

          {/* ── Form side ── */}
          <div className="lg:w-3/5 p-10 md:p-12">
            <h3 className="text-xl font-bold text-white mb-7">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                ].map(f => (
                  <div key={f.id} className="space-y-1.5">
                    <label htmlFor={f.id} className="text-xs font-medium text-textMain/50 uppercase tracking-wide">{f.label}</label>
                    <input
                      type={f.type} id={f.id} required
                      placeholder={f.placeholder}
                      className="w-full px-4 py-3 rounded-xl bg-background-surface border border-primary/10 text-textMain focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/40 transition-colors placeholder:text-textMain/20 text-sm"
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-medium text-textMain/50 uppercase tracking-wide">Subject</label>
                <input
                  type="text" id="subject" required placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-background-surface border border-primary/10 text-textMain focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/40 transition-colors placeholder:text-textMain/20 text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-medium text-textMain/50 uppercase tracking-wide">Message</label>
                <textarea
                  id="message" rows={5} required placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-background-surface border border-primary/10 text-textMain focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/40 transition-colors resize-none placeholder:text-textMain/20 text-sm"
                />
              </div>

              <button
                type="submit" disabled={formStatus !== 'idle'}
                className="w-full py-4 btn-neon text-background font-bold rounded-xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center text-sm"
              >
                <AnimatePresence mode="wait">
                  {formStatus === 'idle' && (
                    <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center">
                      Send Message <Send size={16} className="ml-2" />
                    </motion.span>
                  )}
                  {formStatus === 'submitting' && (
                    <motion.span key="sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center">
                      <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin mr-2" />
                      Sending...
                    </motion.span>
                  )}
                  {formStatus === 'success' && (
                    <motion.span key="ok" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center text-green-400">
                      <CheckCircle2 size={16} className="mr-2" /> Message Sent!
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
