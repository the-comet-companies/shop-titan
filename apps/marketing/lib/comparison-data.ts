export type CellState = 'yes' | 'no' | 'partial';

export type ComparisonRow = {
    feature: string;
    shopTitan: CellState;
    printavo: CellState;
    shopworx: CellState;
    note?: string;
};

export type ComparisonTable = {
    heading: string;
    intro: string;
    rows: ComparisonRow[];
    footnote: string;
};

export const comparisonByPage: Record<string, ComparisonTable> = {
    'complete-system': {
        heading: 'Shop Titan vs. Printavo vs. ShopWorx',
        intro: "If you are comparing all-in-one print shop management systems, here is how Shop Titan lines up against the two most-asked-about alternatives. Printavo is a SaaS CRM for quotes and orders. ShopWorx (ShopWorks OnSite) is a traditional desktop system focused on accounting and production. Shop Titan connects storefront, operations, inventory, and production in one platform.",
        rows: [
            { feature: 'Integrated ecommerce storefront', shopTitan: 'yes', printavo: 'no', shopworx: 'no' },
            { feature: 'Real-time inventory by style, color, size', shopTitan: 'yes', printavo: 'no', shopworx: 'partial' },
            { feature: 'Orders auto-flow from website to production', shopTitan: 'yes', printavo: 'no', shopworx: 'no' },
            { feature: 'Purchase order automation', shopTitan: 'yes', printavo: 'no', shopworx: 'partial' },
            { feature: 'Contractor work orders', shopTitan: 'yes', printavo: 'no', shopworx: 'yes' },
            { feature: 'Customer portal with reorder', shopTitan: 'yes', printavo: 'no', shopworx: 'no' },
            { feature: 'Customizable pricing matrices', shopTitan: 'yes', printavo: 'partial', shopworx: 'yes' },
            { feature: 'Configurable production task types', shopTitan: 'yes', printavo: 'partial', shopworx: 'yes' },
            { feature: 'Flat monthly fee (no per-seat)', shopTitan: 'yes', printavo: 'no', shopworx: 'no' },
            { feature: 'Cloud-hosted with daily backups', shopTitan: 'yes', printavo: 'yes', shopworx: 'partial' },
            { feature: 'You own the database file', shopTitan: 'yes', printavo: 'no', shopworx: 'yes' },
        ],
        footnote: 'Printavo is strong at quoting and order management but stops there. ShopWorx is deep on accounting and production but dated, per-seat, and without a storefront. Shop Titan covers both ends and connects them.',
    },
    'inventory-management': {
        heading: 'Inventory Tracking: Shop Titan vs. Printavo vs. ShopWorx',
        intro: "Most print shop management tools treat inventory as an afterthought. Printavo does not track blank apparel stock at all. ShopWorx has inventory but requires heavy setup. Shop Titan was built around live, order-linked inventory from day one.",
        rows: [
            { feature: 'Live stock by style, color, size', shopTitan: 'yes', printavo: 'no', shopworx: 'yes' },
            { feature: 'Auto-generate POs at reorder points', shopTitan: 'yes', printavo: 'no', shopworx: 'partial' },
            { feature: 'Reserve stock to open orders', shopTitan: 'yes', printavo: 'no', shopworx: 'partial' },
            { feature: 'Inventory synced to website stock', shopTitan: 'yes', printavo: 'no', shopworx: 'no' },
            { feature: 'Multi-location inventory', shopTitan: 'yes', printavo: 'no', shopworx: 'yes' },
            { feature: 'Barcode receiving into PO', shopTitan: 'yes', printavo: 'no', shopworx: 'yes' },
            { feature: 'Vendor CRM linked to POs', shopTitan: 'yes', printavo: 'no', shopworx: 'partial' },
            { feature: 'On-demand stock valuation report', shopTitan: 'yes', printavo: 'no', shopworx: 'yes' },
        ],
        footnote: 'If you chose Printavo, you are still tracking inventory in a spreadsheet. If you chose ShopWorx, your inventory works but is not connected to your website. Shop Titan connects both.',
    },
    'production-automation': {
        heading: 'Production Automation: Shop Titan vs. Printavo vs. ShopWorx',
        intro: "Printavo handles order status, not production. ShopWorx has production scheduling but in a desktop UI from the last decade. Shop Titan runs production as configurable, rule-based tasks that anyone on the floor can see.",
        rows: [
            { feature: 'Configurable task types per decoration method', shopTitan: 'yes', printavo: 'partial', shopworx: 'yes' },
            { feature: 'Auto-assign tasks by rule', shopTitan: 'yes', printavo: 'no', shopworx: 'partial' },
            { feature: 'Real-time production dashboard', shopTitan: 'yes', printavo: 'partial', shopworx: 'yes' },
            { feature: 'Contractor work orders', shopTitan: 'yes', printavo: 'no', shopworx: 'yes' },
            { feature: 'Drag-and-drop scheduling calendar', shopTitan: 'yes', printavo: 'yes', shopworx: 'yes' },
            { feature: 'Automated branded status emails', shopTitan: 'yes', printavo: 'yes', shopworx: 'partial' },
            { feature: 'Artwork and specs visible at every task', shopTitan: 'yes', printavo: 'yes', shopworx: 'yes' },
            { feature: 'Capacity and load planning', shopTitan: 'yes', printavo: 'no', shopworx: 'partial' },
            { feature: 'Modern web interface, any device', shopTitan: 'yes', printavo: 'yes', shopworx: 'no' },
        ],
        footnote: 'Printavo is a calendar with order cards. ShopWorx is a production engine in a desktop shell. Shop Titan gives you production automation with a modern interface your team actually uses.',
    },
    'ecommerce-storefront': {
        heading: 'Ecommerce for Print Shops: Shop Titan vs. Printavo vs. ShopWorx',
        intro: "Neither Printavo nor ShopWorx ships an ecommerce storefront. If you use either, you are buying Shopify or WooCommerce and hand-stitching it to your operations with Zapier. Shop Titan includes a purpose-built decorator storefront connected to the backend.",
        rows: [
            { feature: 'Storefront included with platform', shopTitan: 'yes', printavo: 'no', shopworx: 'no' },
            { feature: 'Artwork upload with placement selection', shopTitan: 'yes', printavo: 'no', shopworx: 'no' },
            { feature: 'Size and color quantity grid', shopTitan: 'yes', printavo: 'no', shopworx: 'no' },
            { feature: 'Volume-based pricing tiers', shopTitan: 'yes', printavo: 'partial', shopworx: 'no' },
            { feature: 'Brand pages and catalog by vendor', shopTitan: 'yes', printavo: 'no', shopworx: 'no' },
            { feature: 'Customer portal with reorder', shopTitan: 'yes', printavo: 'no', shopworx: 'no' },
            { feature: 'SEO-optimized product and brand pages', shopTitan: 'yes', printavo: 'no', shopworx: 'no' },
            { feature: 'Orders flow directly into operations', shopTitan: 'yes', printavo: 'no', shopworx: 'no' },
        ],
        footnote: 'To match Shop Titan with Printavo or ShopWorx, you would need Shopify plus a decorator app plus Zapier plus ongoing integration work. Shop Titan bundles it.',
    },
    'filemaker-system': {
        heading: 'Operations Backend: Shop Titan FileMaker vs. Printavo vs. ShopWorx',
        intro: "Printavo is a SaaS app you rent. ShopWorx is a desktop system you license per seat. Shop Titan is a FileMaker platform you own, customized to your workflow and hosted for you.",
        rows: [
            { feature: 'You own the database file', shopTitan: 'yes', printavo: 'no', shopworx: 'yes' },
            { feature: 'Fully customizable to your workflow', shopTitan: 'yes', printavo: 'no', shopworx: 'partial' },
            { feature: 'Customizable pricing matrices', shopTitan: 'yes', printavo: 'partial', shopworx: 'yes' },
            { feature: 'Quote-to-order-to-invoice workflow', shopTitan: 'yes', printavo: 'yes', shopworx: 'yes' },
            { feature: 'Customer CRM with full history', shopTitan: 'yes', printavo: 'yes', shopworx: 'yes' },
            { feature: 'Purchase order system', shopTitan: 'yes', printavo: 'no', shopworx: 'yes' },
            { feature: 'Contractor work orders', shopTitan: 'yes', printavo: 'no', shopworx: 'yes' },
            { feature: 'Branded email automation', shopTitan: 'yes', printavo: 'yes', shopworx: 'partial' },
            { feature: 'Reporting across orders, production, revenue', shopTitan: 'yes', printavo: 'partial', shopworx: 'yes' },
            { feature: 'Cloud hosting with daily backups', shopTitan: 'yes', printavo: 'yes', shopworx: 'partial' },
            { feature: 'Flat monthly fee, no per-user charges', shopTitan: 'yes', printavo: 'no', shopworx: 'no' },
        ],
        footnote: 'Printavo locks you into their data and pricing model. ShopWorx gives you ownership but in a desktop paradigm. Shop Titan gives you both: ownership plus a modern cloud-hosted platform.',
    },
};
