// New pricing model (two launch models + revenue share). Single source of
// truth ported from the approved Red & Blue calculator (public/red-blue-pricing.html).

export type ModelId = 'diy' | 'dfy';

export interface PricingModel {
    name: string;
    tag: string;
    headline: string;
    setupTotal: number;
    fmDiscount: number;
    deposit: number;
    balance: number;
    sub: string;
    disc: string;
}

export const PRICING = {
    models: {
        diy: {
            name: 'Model 1 · Do-It-Yourself',
            tag: 'Model 1 · DIY',
            headline: 'You Build. We Power It.',
            setupTotal: 10000,
            fmDiscount: 0,
            deposit: 5000,
            balance: 5000,
            sub: 'Setup · you build & load',
            disc: 'Built-in 3-month trial to iron out the creases. You only pay the balance if you continue.',
        },
        dfy: {
            name: 'Model 2 · Done-For-You',
            tag: 'Model 2 · DFY',
            headline: 'We Build It All. You Sell.',
            setupTotal: 20000,
            fmDiscount: 5000,
            deposit: 10000,
            balance: 10000,
            sub: 'FileMaker clients get $5,000 off',
            disc: '$20,000 standard. FileMaker clients get $5,000 off, so $15,000 net. Same 3-month trial; balance only after Day 90.',
        },
    } satisfies Record<ModelId, PricingModel>,
    monthly: {
        baseFee: 500,
        baseTrigger: 10000, // base fee waived until monthly gross crosses this
        bands: [
            { upTo: 20000, rate: 0.05, label: 'First $20,000' },
            { upTo: 50000, rate: 0.04, label: 'Next $30,000' },
            { upTo: 100000, rate: 0.03, label: 'Next $50,000' },
            { upTo: Infinity, rate: 0.025, label: 'Above $100,000' },
        ],
    },
    addons: {
        seo: { name: 'SEO Growth Engine', desc: 'Keyword targeting, on-page, content, monthly reporting', price: 750, type: 'monthly' as const },
        ads: { name: 'Ad Management', desc: 'Meta + Google campaigns (or 15% of ad spend)', price: 1000, type: 'monthly' as const },
        email: { name: 'Email Marketing', desc: 'Klaviyo/Mailchimp flows, monthly campaigns, segmentation, reporting', price: 600, type: 'monthly' as const },
        brand: { name: 'Brand & Visuals', desc: 'Custom design, logo refresh, product photography (one-time, from)', price: 1500, type: 'oneTime' as const },
    },
    comparison: [
        { deliverable: 'Platform, hosting & security', diy: '✓ Included', dfy: '✓ Included', diyWe: true, dfyWe: true },
        { deliverable: 'Page building', diy: 'You build (tool + templates)', dfy: 'We build every page', diyWe: false, dfyWe: true },
        { deliverable: 'Product loading / catalog', diy: 'You import & add', dfy: 'We load your full catalog', diyWe: false, dfyWe: true },
        { deliverable: 'SEO optimization', diy: 'Tool + guidance (you apply)', dfy: 'Fully done for you', diyWe: false, dfyWe: true },
        { deliverable: 'Stripe & shipping setup', diy: 'Guided setup', dfy: 'We wire it up', diyWe: false, dfyWe: true },
        { deliverable: 'Training + SOP videos', diy: '✓ Included', dfy: '✓ Included', diyWe: true, dfyWe: true },
        { deliverable: 'Ongoing platform upgrades', diy: '✓ Automatic', dfy: '✓ Automatic', diyWe: true, dfyWe: true },
        { deliverable: 'Support', diy: 'Portal + email', dfy: 'Priority, hands-on', diyWe: false, dfyWe: true },
        { deliverable: 'Launch timeline', diy: 'Your pace', dfy: 'Our launch window', diyWe: false, dfyWe: true },
    ],
    dfyBuild: [
        {
            group: 'Pages & Site Structure', note: 'we design & build every page', items: [
                'Homepage, custom design & build',
                'All service pages',
                'All collection / category pages',
                'About Us',
                'Contact page + working inquiry form',
                'Terms & Conditions, Privacy, Returns & Shipping policies',
                'FAQ page',
                'Header + footer navigation menus',
            ],
        },
        {
            group: 'Product Catalog', note: 'we load it for you', items: [
                'Up to 500 products of your choosing, fully loaded',
                'Variants configured (size, color, options)',
                'Collections & categories organized',
                'Product images optimized & hosted',
                'Per-product SEO data (title, meta, alt), sent for your review',
            ],
        },
        {
            group: 'SEO & Discoverability', note: 'fully done for you', items: [
                'Google Business Profile (GMB) connected',
                'Google Search Console + XML sitemap submitted',
                'SEO monitoring + site-health dashboard',
                'Structured data / schema (Product, Organization, LocalBusiness)',
                'Open Graph / social share tags',
                'Core Web Vitals / speed baseline',
            ],
        },
        {
            group: 'Analytics & Tracking', note: 'wired at launch', items: [
                'GA4 property + integration',
                'Google Tag Manager container',
                'E-commerce conversion & event tracking',
                'Meta Pixel (ad-ready)',
            ],
        },
        {
            group: 'Infrastructure & Setup', note: 'we configure', items: [
                'AWS S3 bucket (media hosting)',
                'Domain, DNS & SSL configuration',
                'Transactional email (order + shipping notices)',
                'CDN / caching',
            ],
        },
        {
            group: 'Payments & Checkout', note: 'we wire it up', items: [
                'Stripe gateway integration',
                'Sales-tax rules configured',
                'Shipping rates / zones',
                'Full checkout QA',
            ],
        },
        {
            group: 'Launch & Handoff', note: 'we take you live', items: [
                'Cross-browser + mobile QA',
                'Pre-launch checklist',
                'Admin training + SOP videos',
                'Go-live launch support',
            ],
        },
    ],
    finePrint: {
        includedMonthly: [
            'All conversion + feature updates from our flagship, pushed automatically',
            'Maintenance, uptime monitoring & security patches',
            'Bug fixes & regression testing',
            'Unlimited admin users + training & SOP videos',
        ],
        youProvide: [
            'Domain, email/DNS, ShipStation & Stripe API keys',
            'CDN, bandwidth, storage, SSL & Stripe fees',
            'AWS EC2 hosting, reimbursed at cost with no markup',
            'Custom dev / design changes after launch, quoted on scope',
        ],
        ownership: 'You own your domain, data, customer list & brand assets. Source code & platform IP remain with Shop Titan. NET 15 from invoice. Revenue share reconciled monthly from your storefront + Stripe.',
    },
};

export const usd = (n: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(Math.round(n));

export interface BandPart {
    label: string;
    rate: number;
    amt: number;
    fee: number;
    active: boolean;
}

export function calcRevShare(gross: number): { total: number; parts: BandPart[] } {
    let prev = 0;
    let total = 0;
    const parts: BandPart[] = [];
    for (const b of PRICING.monthly.bands) {
        const width = b.upTo - prev;
        const amt = Math.max(0, Math.min(gross - prev, width));
        const active = amt > 0;
        const fee = active ? amt * b.rate : 0;
        parts.push({ label: b.label, rate: b.rate, amt, fee, active });
        total += fee;
        prev = b.upTo;
        if (gross <= b.upTo) break;
    }
    return { total, parts };
}

export interface CalcState {
    model: ModelId;
    gross: number;
    seo: boolean;
    ads: boolean;
    email: boolean;
    brand: boolean;
}

export interface SummaryLine {
    label: string;
    amt: number;
}

export function computeTotals(state: CalcState) {
    const model = PRICING.models[state.model];

    let oneTime = model.setupTotal;
    const oneTimeLines: SummaryLine[] = [{ label: `Setup (${state.model === 'dfy' ? 'DFY' : 'DIY'}, standard)`, amt: model.setupTotal }];
    if (model.fmDiscount > 0) {
        oneTime -= model.fmDiscount;
        oneTimeLines.push({ label: 'FileMaker client discount', amt: -model.fmDiscount });
    }
    if (state.brand) {
        oneTime += PRICING.addons.brand.price;
        oneTimeLines.push({ label: 'Brand & Visuals (from)', amt: PRICING.addons.brand.price });
    }

    const base = state.gross >= PRICING.monthly.baseTrigger ? PRICING.monthly.baseFee : 0;
    const rev = calcRevShare(state.gross);
    const monthlyLines: SummaryLine[] = [];
    if (base > 0) monthlyLines.push({ label: 'Monthly base', amt: base });
    else monthlyLines.push({ label: 'Monthly base (waived < $10K)', amt: 0 });
    if (state.seo) monthlyLines.push({ label: PRICING.addons.seo.name, amt: PRICING.addons.seo.price });
    if (state.ads) monthlyLines.push({ label: PRICING.addons.ads.name, amt: PRICING.addons.ads.price });
    if (state.email) monthlyLines.push({ label: PRICING.addons.email.name, amt: PRICING.addons.email.price });
    monthlyLines.push({ label: 'Revenue share (5 to 2.5% of gross)', amt: rev.total });

    const addons =
        (state.seo ? PRICING.addons.seo.price : 0) +
        (state.ads ? PRICING.addons.ads.price : 0) +
        (state.email ? PRICING.addons.email.price : 0);
    const monthlyTotal = base + addons + rev.total;

    return { model, oneTime, oneTimeLines, base, rev, monthlyLines, monthlyTotal };
}
