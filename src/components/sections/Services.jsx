import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, LayoutGrid, Rocket, MessageSquareQuote } from 'lucide-react';

const services = [
  {
    title: 'Blockchain Solutions',
    tag: '_web3',
    description: 'Smart contract development, DApp architecture, and Web3 integrations for secure, decentralized applications.',
    icon: <LayoutGrid size={30} />,
    gradient: 'from-cyan-500/15 to-transparent',
  },
  {
    title: 'Web Design & CMS',
    tag: '_design',
    description: 'Stunning, high-performance websites built on modern frameworks and CMS platforms like Shopify and WordPress.',
    icon: <MonitorSmartphone size={30} />,
    gradient: 'from-indigo-500/15 to-transparent',
  },
  {
    title: 'Digital Marketing & Growth',
    tag: '_growth',
    description: 'Data-driven SEO, email marketing, and automation to scale your brand and convert visitors into customers.',
    icon: <Rocket size={30} />,
    gradient: 'from-cyan-500/15 to-transparent',
  },
];

const testimonials = [
  {
    client: 'Sarah Jenkins',
    role: 'Founder, TechFlow Startup',
    project: 'Web3 Platform Redesign',
    content: 'Zen Digitals transformed our clunky interface into a seamless Web3 experience. Conversion rate jumped 40% in one month.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    client: 'Marcus Riel',
    role: 'Marketing Director',
    project: 'SEO & Growth Campaign',
    content: "Lukman's understanding of both technical SEO and marketing strategy is rare. Delivered results far beyond expectations.",
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const ServicesAndTestimonials = () => (
  <section id="services" className="py-24 bg-background-surface relative overflow-hidden">
    <div className="absolute left-0 top-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      {/* ── Services ── */}
      <div className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-primary text-xs font-mono uppercase tracking-[0.3em] mb-4">// Services</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">What We Build</h2>
          <p className="text-textMain/50">End-to-end digital solutions tailored to elevate your brand.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group card-blockchain p-8 rounded-2xl border border-primary/10 hover:border-primary/40 hover:shadow-glow transition-all duration-500 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-background-surface border border-primary/20 text-primary group-hover:border-primary/60 group-hover:shadow-glow transition-all duration-300">
                    {s.icon}
                  </div>
                  <span className="text-[10px] font-mono text-primary/60 border border-primary/20 px-2 py-0.5 rounded-full">{s.tag}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-textMain/50 text-sm leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Testimonials ── */}
      <div className="relative border border-primary/10 rounded-3xl p-8 md:p-14 overflow-hidden bg-background-card">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-10">
          <div className="md:w-1/3">
            <MessageSquareQuote size={44} className="text-primary mb-5 opacity-60" />
            <h2 className="text-3xl font-black text-white mb-3">Client Feedback</h2>
            <p className="text-textMain/50 text-sm">What partners say about working with Zen Digitals.</p>
          </div>

          <div className="md:w-2/3 flex gap-5 overflow-x-auto pb-2 hide-scrollbar snap-x snap-mandatory">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex-shrink-0 w-full sm:w-80 md:w-72 snap-center card-blockchain p-7 rounded-2xl border border-primary/10"
              >
                <p className="text-textMain/70 text-sm italic mb-6 leading-relaxed">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.client} className="w-10 h-10 rounded-full border border-primary/30" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">{t.client}</h4>
                    <p className="text-textMain/40 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesAndTestimonials;
