export type TrackId = 'website' | 'filemaker' | 'both';
export type DeliveryId = 'dfy' | 'diy';

export interface Track {
    id: TrackId;
    name: string;
    tagline: string;
    badge?: string;
    features: { name: string; desc: string; icon: string }[];
    cardFeatures: { name: string; included: boolean }[];
}

export interface Delivery {
    id: DeliveryId;
    name: string;
    tagline: string;
    includes: string[];
    timeline: { step: string; label: string }[];
}

export interface PricingTier {
    track: TrackId;
    delivery: DeliveryId;
    setup: string;
    monthly: string;
    timeline: string;
    includes: string[];
}

export interface FAQ {
    question: string;
    answer: string;
}

export const hero = {
    headline: 'Simple Pricing. No Surprises.',
    subheadline: 'Choose your product, pick your delivery model, and see exactly what you get. No hidden fees. No long-term contracts.',
    cta: 'Build Your Package',
};

export const steps = [
    { id: 1, label: 'Choose Path' },
    { id: 2, label: 'Features' },
    { id: 3, label: 'Delivery' },
    { id: 4, label: 'Pricing' },
];

export const tracks: Track[] = [
    {
        id: 'website',
        name: 'Website Only',
        tagline: 'An SEO-optimized storefront that brings customers in and converts them.',
        cardFeatures: [
            { name: 'SEO-optimized website', included: true },
            { name: 'Online ordering & payments', included: true },
            { name: 'Product catalog', included: true },
            { name: 'Mobile responsive', included: true },
            { name: 'Analytics dashboard', included: true },
            { name: 'AI integrations', included: true },
            { name: 'Order management', included: false },
            { name: 'Inventory control', included: false },
            { name: 'Production workflow', included: false },
            { name: 'Real-time sync', included: false },
        ],
        features: [
            { name: 'SEO Optimization', desc: 'Built-in search engine optimization so your shop ranks for local and industry keywords.', icon: 'search' },
            { name: 'AI Integrations', desc: 'AI-powered product descriptions, chat support, and smart recommendations.', icon: 'smart_toy' },
            { name: 'Mobile Responsive', desc: 'Looks great on every device - phone, tablet, or desktop.', icon: 'smartphone' },
            { name: 'Product Catalog', desc: 'Showcase your services, products, and portfolio with a professional catalog.', icon: 'inventory_2' },
            { name: 'Online Ordering', desc: 'Customers place orders, upload artwork, and pay - all from your website.', icon: 'shopping_cart' },
            { name: 'Analytics Dashboard', desc: 'Track visitors, conversions, and revenue in real time.', icon: 'analytics' },
            { name: 'Custom Branding', desc: 'Your logo, your colors, your domain - fully branded to your shop.', icon: 'palette' },
            { name: 'Lightning Fast Performance', desc: 'Sub-second load times. 90+ Lighthouse score guaranteed.', icon: 'bolt' },
        ],
    },
    {
        id: 'filemaker',
        name: 'FileMaker Only',
        tagline: 'A back-end operations system that manages orders, inventory, customers, and reporting.',
        cardFeatures: [
            { name: 'Order management', included: true },
            { name: 'Inventory control', included: true },
            { name: 'Production workflow', included: true },
            { name: 'Customer database', included: true },
            { name: 'Financial reporting', included: true },
            { name: 'Custom automations', included: true },
            { name: 'SEO-optimized website', included: false },
            { name: 'Online ordering', included: false },
            { name: 'Customer portal', included: false },
            { name: 'Real-time sync', included: false },
        ],
        features: [
            { name: 'Order Management', desc: 'Track every order from quote to delivery with real-time status updates.', icon: 'receipt_long' },
            { name: 'Inventory Control', desc: 'Track blanks by style, color, and size. Auto-allocate and auto-reorder.', icon: 'inventory_2' },
            { name: 'Customer Database', desc: 'CRM with full order history, contact info, and communication logs.', icon: 'people' },
            { name: 'Financial Reporting', desc: 'Revenue, costs, margins, and profitability - on demand.', icon: 'analytics' },
            { name: 'Production Workflow', desc: 'Job tracking, task assignment, and scheduling across departments.', icon: 'precision_manufacturing' },
            { name: 'Invoicing System', desc: 'Generate invoices from completed orders. Track payments automatically.', icon: 'request_quote' },
            { name: 'Vendor Management', desc: 'Manage suppliers, pricing, lead times, and purchase orders.', icon: 'local_shipping' },
            { name: 'Custom Automations', desc: 'Automate repetitive tasks - email triggers, status updates, PO generation.', icon: 'auto_fix_high' },
        ],
    },
    {
        id: 'both',
        name: 'Website + FileMaker',
        tagline: 'Both products working together as one unified system. The complete package.',
        badge: 'Most Popular',
        cardFeatures: [
            { name: 'SEO-optimized website', included: true },
            { name: 'Online ordering & payments', included: true },
            { name: 'Order management', included: true },
            { name: 'Inventory control', included: true },
            { name: 'Production workflow', included: true },
            { name: 'Real-time sync', included: true },
            { name: 'Customer portal', included: true },
            { name: 'End-to-end automation', included: true },
            { name: 'Advanced analytics', included: true },
            { name: 'Priority support', included: true },
        ],
        features: [
            { name: 'Unified Dashboard', desc: 'One view for website orders, production status, and inventory - all connected.', icon: 'dashboard' },
            { name: 'Real-Time Sync', desc: 'Website and back-office share the same data. No manual updates.', icon: 'sync' },
            { name: 'End-to-End Automation', desc: 'Orders flow from website to production to shipping without manual steps.', icon: 'auto_fix_high' },
            { name: 'Customer Portal', desc: 'Customers check order status, reorder, and manage their account online.', icon: 'person' },
            { name: 'Advanced Analytics', desc: 'Cross-platform reporting - website traffic, order volume, production throughput.', icon: 'analytics' },
            { name: 'AI-Powered Insights', desc: 'Smart recommendations for inventory, pricing, and customer engagement.', icon: 'smart_toy' },
            { name: 'Multi-Location Support', desc: 'Run multiple shops or warehouses from one connected platform.', icon: 'location_on' },
            { name: 'Priority Support', desc: 'Dedicated support team with faster response times and onboarding help.', icon: 'support_agent' },
        ],
    },
];

export const deliveries: Delivery[] = [
    {
        id: 'dfy',
        name: 'Done For You',
        tagline: 'Our team builds everything. You focus on running your shop.',
        includes: [
            'Custom design & development',
            'Full data migration',
            'Staff training',
            'Dedicated project manager',
            '3 rounds of revisions',
            'Launch support',
        ],
        timeline: [
            { step: '01', label: 'Discovery Call' },
            { step: '02', label: 'Strategy & Design' },
            { step: '03', label: 'Build & Configure' },
            { step: '04', label: 'Review & Refine' },
            { step: '05', label: 'Launch & Train' },
            { step: '06', label: 'Ongoing Support' },
        ],
    },
    {
        id: 'diy',
        name: 'DIY Platform',
        tagline: 'Get the tech to customize yourself. No timeline pressure.',
        includes: [
            'Instant platform access',
            'Pre-built templates',
            'Step-by-step tutorials',
            'Drag-and-drop tools',
            'Community support',
            'No timeline pressure',
        ],
        timeline: [
            { step: '01', label: 'Get Access' },
            { step: '02', label: 'Follow the Guide' },
            { step: '03', label: 'Customize' },
            { step: '04', label: 'Go Live' },
        ],
    },
];

export const pricing: PricingTier[] = [
    {
        track: 'website', delivery: 'dfy',
        setup: '$5,000', monthly: '$500/mo', timeline: '4-6 weeks',
        includes: ['Custom website design', 'SEO optimization', 'Product catalog setup', 'Online ordering integration', 'Analytics dashboard', 'Staff training', 'Data migration', '3 rounds of revisions', 'Launch support', '90+ Lighthouse score'],
    },
    {
        track: 'website', delivery: 'diy',
        setup: '$1,500', monthly: '$200/mo', timeline: 'Self-paced',
        includes: ['Website platform access', 'Pre-built templates', 'SEO tools', 'Product catalog', 'Online ordering', 'Analytics dashboard', 'Step-by-step tutorials', 'Community support', 'Drag-and-drop editor'],
    },
    {
        track: 'filemaker', delivery: 'dfy',
        setup: '$8,000', monthly: '$750/mo', timeline: '6-8 weeks',
        includes: ['Full system configuration', 'Order management setup', 'Inventory configuration', 'Production workflow mapping', 'Customer database import', 'Financial reporting', 'Invoicing setup', 'Staff training', 'Data migration', 'Dedicated project manager'],
    },
    {
        track: 'filemaker', delivery: 'diy',
        setup: '$3,000', monthly: '$350/mo', timeline: 'Self-paced',
        includes: ['FileMaker platform access', 'Pre-built modules', 'Order management', 'Inventory tracking', 'Customer database', 'Reporting templates', 'Step-by-step tutorials', 'Community support'],
    },
    {
        track: 'both', delivery: 'dfy',
        setup: '$10,000', monthly: '$1,000/mo', timeline: '8-12 weeks',
        includes: ['Everything in Website + FileMaker', 'Unified system configuration', 'Real-time sync setup', 'End-to-end automation', 'Customer portal', 'Advanced analytics', 'Multi-location setup', 'Priority support', 'Dedicated project manager', 'Full data migration', 'Staff training'],
    },
    {
        track: 'both', delivery: 'diy',
        setup: '$4,000', monthly: '$450/mo', timeline: 'Self-paced',
        includes: ['Full platform access', 'Website + FileMaker tools', 'Pre-built templates', 'Sync configuration guide', 'Customer portal', 'Analytics dashboard', 'Step-by-step tutorials', 'Community support'],
    },
];

export const comparisonFeatures = [
    { label: 'SEO-Optimized Website', website: true, filemaker: false, both: true },
    { label: 'Online Ordering', website: true, filemaker: false, both: true },
    { label: 'Product Catalog', website: true, filemaker: false, both: true },
    { label: 'Order Management', website: false, filemaker: true, both: true },
    { label: 'Inventory Control', website: false, filemaker: true, both: true },
    { label: 'Production Workflow', website: false, filemaker: true, both: true },
    { label: 'Customer Database', website: false, filemaker: true, both: true },
    { label: 'Financial Reporting', website: false, filemaker: true, both: true },
    { label: 'Real-Time Sync', website: false, filemaker: false, both: true },
    { label: 'Customer Portal', website: false, filemaker: false, both: true },
    { label: 'End-to-End Automation', website: false, filemaker: false, both: true },
    { label: 'Priority Support', website: false, filemaker: false, both: true },
];

export const comparisonPricing = [
    { label: 'DFY Setup', website: '$5,000', filemaker: '$8,000', both: '$10,000' },
    { label: 'DFY Monthly', website: '$500/mo', filemaker: '$750/mo', both: '$1,000/mo' },
    { label: 'DIY Setup', website: '$1,500', filemaker: '$3,000', both: '$4,000' },
    { label: 'DIY Monthly', website: '$200/mo', filemaker: '$350/mo', both: '$450/mo' },
    { label: 'DFY Timeline', website: '4-6 weeks', filemaker: '6-8 weeks', both: '8-12 weeks' },
];

export const faqs: FAQ[] = [
    {
        question: 'What is FileMaker and why do I need it?',
        answer: 'FileMaker is a database platform that lets you manage orders, inventory, customers, and production in one system. Unlike generic tools, it is built to handle the complexity of print shop operations - size/color matrices, multi-method production, vendor management, and custom pricing.',
    },
    {
        question: 'Can I start with one package and upgrade later?',
        answer: 'Yes. You can start with Website Only or FileMaker Only and upgrade to the combined package later. Your initial setup investment is credited toward the upgrade - you only pay the difference.',
    },
    {
        question: "What is the difference between Done-For-You and DIY?",
        answer: 'Done-For-You means our team handles everything - design, configuration, data migration, training, and launch. DIY means you get the platform and tools to set it up yourself at your own pace with tutorials and community support.',
    },
    {
        question: 'Do I need technical skills for DIY?',
        answer: 'No. The DIY platform includes drag-and-drop tools, pre-built templates, and step-by-step tutorials. If you can use a web browser, you can set up the platform.',
    },
    {
        question: 'How long does Done-For-You setup take?',
        answer: 'Website Only takes 4-6 weeks. FileMaker Only takes 6-8 weeks. The combined Website + FileMaker package takes 8-12 weeks. Timelines depend on complexity and how quickly you provide content and feedback.',
    },
    {
        question: 'Can you migrate my existing data?',
        answer: 'Yes. Data migration is included in every Done-For-You package. We import your customers, products, pricing, inventory, and order history from spreadsheets or existing systems.',
    },
    {
        question: 'What if I want to cancel?',
        answer: 'No long-term contracts. You can cancel with 30 days notice. Your data is always yours - we provide a full export if you leave.',
    },
    {
        question: 'Is the website really SEO optimized?',
        answer: 'Yes. Every website ships with a 90+ Google Lighthouse performance score guaranteed. We handle technical SEO, meta tags, structured data, sitemaps, and page speed optimization.',
    },
];
