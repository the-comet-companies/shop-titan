'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

function LogoSlot({ name, file }: { name: string; file: string }) {
  const [imgFailed, setImgFailed] = useState(false);

  if (!imgFailed) {
    return (
      <img
        src={`/logos/integrations/${file}`}
        alt={name}
        onError={() => setImgFailed(true)}
        className="h-6 w-auto object-contain opacity-60 grayscale"
      />
    );
  }

  return (
    <span className="px-3 py-1 rounded-full bg-gray-100 text-secondary-text text-xs font-medium">
      {name}
    </span>
  );
}

function IntegrationLogos({ logos }: { logos: readonly { name: string; file: string }[] }) {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {logos.map((logo) => (
        <img
          key={logo.file}
          src={`/logos/integrations/${logo.file}`}
          alt={logo.name}
          className="h-7 w-auto object-contain opacity-70"
        />
      ))}
    </div>
  );
}

function IntegrationCarousel({ logos }: { logos: readonly { name: string; file: string }[] }) {
  return (
    <div className="w-full relative py-3 flex overflow-hidden mt-1">
      <div className="absolute left-0 inset-y-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <div
        className="carousel-track items-center shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ animationDuration: '25s', willChange: 'transform' }}
      >
        <IntegrationLogos logos={logos} />
        <IntegrationLogos logos={logos} />
      </div>
    </div>
  );
}

const CARDS = [
  {
    id: 'woocommerce',
    title: 'WooCommerce Integration',
    description: 'Connect your WooCommerce store directly to Shop Titan.',
    footnote: '* Additional time may be required for field mapping',
    logos: [{ name: 'WooCommerce', file: 'woocommerce.svg' }],
    carousel: false,
  },
  {
    id: 'shopify',
    title: 'Shopify Integration',
    description: 'Two-way sync between Shopify orders and your Shop Titan workflow.',
    footnote: '* Additional dev time may be required for mapping',
    logos: [{ name: 'Shopify', file: 'shopify.svg' }],
    carousel: false,
  },
  {
    id: 'feed-management',
    title: 'eCommerce Feed Management',
    description: 'Easy XML creation and product pushing across all major platforms.',
    footnote: null,
    logos: [
      { name: 'eBay', file: 'ebay.svg' },
      { name: 'Amazon', file: 'amazon.svg' },
      { name: 'Etsy', file: 'etsy.svg' },
      { name: 'Shopify', file: 'shopify.svg' },
      { name: 'WooCommerce', file: 'woocommerce.svg' },
      { name: 'Merchant Center', file: 'google-merchant-center.svg' },
      { name: 'Faire', file: 'faire.svg' },
      { name: 'Fashion Go', file: 'fashion-go.svg' },
    ],
    carousel: true,
  },
  {
    id: 'design-library',
    title: 'Design Library',
    description: 'Take your designs, sell them and push them to all the marketplaces.',
    footnote: null,
    logos: [],
    carousel: false,
  },
] as const;

export default function ComingSoonSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-background-light py-24 md:py-32 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-3xl" />
        <div className="absolute bottom-0 -left-48 w-[400px] h-[400px] rounded-full bg-indigo-500/[0.04] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-14 md:mb-18"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal leading-[1.1] tracking-tight">
            What&apos;s Coming.
          </h2>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {CARDS.map((card) => (
            <motion.div
              key={card.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="group relative flex flex-col gap-4 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-surface border border-structural-border overflow-hidden hover:border-primary/30 hover:shadow-[0_0_40px_-10px_rgba(0,102,204,0.15)] transition-all duration-300"
            >
              {/* Top-edge highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-t-3xl pointer-events-none" />

              {/* Header row */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-charcoal font-bold text-lg leading-tight">{card.title}</h3>
                </div>
                <span className="flex-shrink-0 px-2.5 py-1 rounded-full bg-gray-100 text-secondary-text text-[10px] font-bold tracking-wider uppercase">
                  Soon
                </span>
              </div>

              {/* Description */}
              <p className="text-secondary-text text-sm leading-relaxed">{card.description}</p>

              {/* Logos — carousel or static pills */}
              {card.carousel ? (
                <IntegrationCarousel logos={card.logos} />
              ) : card.logos.length > 0 ? (
                <div className="flex flex-wrap gap-2 mt-1 items-center">
                  {card.logos.map((logo) => (
                    <LogoSlot key={logo.file} name={logo.name} file={logo.file} />
                  ))}
                </div>
              ) : null}

              {/* Footnote */}
              {card.footnote && (
                <p className="text-gray-400 text-xs mt-auto pt-2 border-t border-structural-border">
                  {card.footnote}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mt-14 md:mt-16"
        >
          <p className="text-lg text-secondary-text max-w-xl mx-auto mb-8">
            Be the first to know when these features ship.
          </p>
          <div className="flex justify-center">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 text-charcoal"
              >
                <span className="material-symbols-outlined text-primary text-2xl">
                  check_circle
                </span>
                <span className="text-base font-medium">You&apos;re on the list.</span>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-3 rounded-full bg-white border border-structural-border text-charcoal placeholder:text-gray-400 text-sm focus:outline-none focus:border-primary/60 transition-colors"
                />
                <button
                  type="submit"
                  className="px-7 py-3 rounded-full text-white text-sm font-semibold relative overflow-hidden group flex-shrink-0"
                >
                  <div className="absolute inset-0 bg-charcoal group-hover:bg-charcoal/80 transition-colors rounded-full" />
                  <div className="absolute inset-0 bg-white/[0.06] rounded-full" />
                  <div className="absolute inset-0 border border-white/10 rounded-full" />
                  <span className="relative z-10">Notify Me</span>
                </button>
              </motion.form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
