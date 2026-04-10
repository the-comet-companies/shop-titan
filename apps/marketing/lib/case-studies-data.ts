export interface CaseStudy {
    slug: string;
    title: string;
    description: string;
    category: string;
    shop: {
        name: string;
        location: string;
        employees: string;
        methods: string[];
    };
    before: string;
    problem: {
        headline: string;
        description: string;
        painPoints: string[];
    };
    solution: {
        package: string;
        timeline: string;
        modules: string[];
        description: string;
    };
    results: {
        headline: string;
        metrics: { label: string; before: string; after: string }[];
        description: string;
    };
    quote: {
        text: string;
        author: string;
        role: string;
    };
    linksTo: string[];
}

export const caseStudies: CaseStudy[] = [
    {
        slug: 'spreadsheets-to-system',
        title: 'From Spreadsheets to a Connected System - How a 12-Person Print Shop Eliminated Order Errors',
        description: 'A screen printing shop replaced spreadsheets with Shop Titan and reduced order errors from 8-10 per month to zero in 6 weeks.',
        category: 'Operations',
        shop: {
            name: 'DTLA Print',
            location: 'Los Angeles, CA',
            employees: '12',
            methods: ['Screen Printing', 'DTG', 'Embroidery'],
        },
        before: 'Spreadsheets for everything - orders, inventory, production tracking, customer info. 4 different Google Sheets, none connected.',
        problem: {
            headline: 'Spreadsheets Were Costing Real Money',
            description: 'The shop was running on spreadsheets for 3 years. As order volume grew past 150 orders/month, the cracks became impossible to ignore.',
            painPoints: [
                '8-10 order errors per month - wrong sizes, wrong colors, missing items',
                '2 employees spending 6+ hours/week just updating spreadsheets',
                'Inventory counts wrong by the time anyone checked them',
                'Customer calls about order status took 10-15 minutes to answer',
                'New hires took 3+ weeks to learn the spreadsheet system',
            ],
        },
        solution: {
            package: 'Website + FileMaker',
            timeline: '6 weeks from kickoff to go-live',
            modules: ['Order Management', 'Inventory Tracking', 'Production Workflow', 'Customer Database', 'Ecommerce Storefront'],
            description: 'We deployed the complete system - FileMaker for back-office operations and a connected ecommerce storefront. Existing customer data, product catalog, and pricing were imported from their spreadsheets during week 1.',
        },
        results: {
            headline: 'Zero Order Errors. 6 Hours Saved Per Week.',
            metrics: [
                { label: 'Order errors/month', before: '8-10', after: '0' },
                { label: 'Time on manual tracking', before: '6+ hrs/week', after: '0 hrs/week' },
                { label: 'Order status lookup', before: '10-15 min', after: '< 30 sec' },
                { label: 'New hire onboarding', before: '3+ weeks', after: '3 days' },
            ],
            description: 'Within the first month, order errors dropped to zero. The two employees who spent hours updating spreadsheets now focus on production. Customer calls about order status are answered in seconds because the system tracks everything in real time.',
        },
        quote: {
            text: 'We did not realize how much time we were wasting until we stopped wasting it. The system paid for itself in the first month just from the errors we stopped making.',
            author: 'Shop Owner',
            role: 'DTLA Print',
        },
        linksTo: ['/platform/complete-system', '/get-started/replace-spreadsheets', '/platform/inventory-management'],
    },
    {
        slug: 'scaling-from-5-to-20',
        title: 'Scaling From 5 to 20 Employees Without Adding Admin Staff',
        description: 'A growing embroidery shop quadrupled their team size without hiring a single admin person - because the system handled the operational complexity.',
        category: 'Growth',
        shop: {
            name: 'DTLA Print',
            location: 'Los Angeles, CA',
            employees: '20 (started at 5)',
            methods: ['Embroidery', 'Screen Printing', 'Heat Transfer'],
        },
        before: 'Owner managed everything personally. Verbal instructions, whiteboards, and a single shared spreadsheet.',
        problem: {
            headline: 'The Owner Was the System',
            description: 'At 5 employees, the owner could walk the floor and manage everything. At 8 employees, things started slipping. At 12, it was chaos.',
            painPoints: [
                'Owner working 70+ hour weeks just to keep up with operational decisions',
                'Production delays because nobody knew what job was next',
                'Jobs falling through the cracks between departments',
                'No SOPs - everything lived in the owner\'s head',
                'Could not take a day off without the shop grinding to a halt',
            ],
        },
        solution: {
            package: 'FileMaker Only',
            timeline: '4 weeks from kickoff to go-live',
            modules: ['Order Management', 'Production Workflow', 'Task Assignment', 'Customer Database', 'Reporting'],
            description: 'We deployed the FileMaker system with a focus on production workflow and task assignment. Each department got their own queue. Every job had a defined path from order intake through shipping.',
        },
        results: {
            headline: '4x Team Size. Same Admin Overhead.',
            metrics: [
                { label: 'Team size', before: '5', after: '20' },
                { label: 'Admin staff needed', before: '1 (owner)', after: '1 (owner)' },
                { label: 'Owner hours/week', before: '70+', after: '45' },
                { label: 'Jobs falling through cracks', before: '3-5/week', after: '0' },
            ],
            description: 'The shop grew from 5 to 20 employees over 18 months. The owner did not hire a single admin person. The system enforces the workflow - every employee knows exactly what to do next without asking the owner.',
        },
        quote: {
            text: 'I went from being the bottleneck to being the business owner. My team runs the system, and the system runs the shop. I actually took a vacation last month.',
            author: 'Shop Owner',
            role: 'DTLA Print',
        },
        linksTo: ['/platform/filemaker-system', '/platform/production-automation', '/blog/scaling-beyond-10-employees'],
    },
    {
        slug: 'real-time-inventory',
        title: 'How Real-Time Inventory Eliminated Stockouts During a 500-Unit Product Launch',
        description: 'A print shop launched a 500-unit product drop with zero oversells and zero stockouts - because inventory, orders, and production were connected.',
        category: 'Inventory',
        shop: {
            name: 'DTLA Print',
            location: 'Los Angeles, CA',
            employees: '15',
            methods: ['Screen Printing', 'DTG'],
        },
        before: 'Inventory tracked in a spreadsheet updated once a day. Last product launch oversold 47 units.',
        problem: {
            headline: 'Every Product Launch Was a Gamble',
            description: 'The shop ran monthly product drops for their brand clients. Every launch was stressful because inventory was never accurate.',
            painPoints: [
                'Previous launch oversold 47 units - refunds, apologies, lost trust',
                'Inventory spreadsheet updated once daily - stock was wrong within hours',
                'No allocation - same blanks promised to multiple orders',
                'Emergency vendor orders at rush pricing eating margins',
                'Staff spending 2+ hours before each launch manually counting stock',
            ],
        },
        solution: {
            package: 'Website + FileMaker',
            timeline: '8 weeks from kickoff to go-live',
            modules: ['Inventory Management', 'Ecommerce Storefront', 'Order Management', 'Vendor Management', 'Auto-PO Generation'],
            description: 'We deployed the complete system with a focus on inventory. Stock tracks by style, color, and size in real time. When a customer orders on the storefront, blanks are allocated instantly. Out-of-stock items hide automatically.',
        },
        results: {
            headline: 'Zero Oversells. Zero Stockouts. 500-Unit Launch.',
            metrics: [
                { label: 'Oversells per launch', before: '30-50 units', after: '0' },
                { label: 'Pre-launch prep time', before: '2+ hours', after: '0 (automated)' },
                { label: 'Emergency vendor orders', before: '2-3/month', after: '0' },
                { label: 'Inventory accuracy', before: '~80%', after: '99.8%' },
            ],
            description: 'The first product launch on the new system moved 500 units in 4 hours with zero oversells. Inventory updated in real time as orders came in. When a size sold out, it disappeared from the website automatically. Purchase orders for restocking were generated before the launch was even over.',
        },
        quote: {
            text: 'Our last launch before the system cost us $3,200 in refunds. Our first launch on the system was flawless. That is not an exaggeration - zero oversells, zero angry emails.',
            author: 'Operations Manager',
            role: 'DTLA Print',
        },
        linksTo: ['/platform/inventory-management', '/platform/ecommerce-storefront', '/platform/complete-system'],
    },
    {
        slug: 'website-plus-operations',
        title: 'Connecting Ecommerce to Operations - How Orders Stopped Getting Lost',
        description: 'A print shop connected their website to their back-office system. Orders that used to take 20 minutes to process now flow automatically from customer to production.',
        category: 'Automation',
        shop: {
            name: 'DTLA Print',
            location: 'Los Angeles, CA',
            employees: '10',
            methods: ['Screen Printing', 'DTG', 'Sublimation'],
        },
        before: 'Shopify website with manual order re-entry into spreadsheets. 2-3 orders lost per week.',
        problem: {
            headline: 'Orders Were Entered Twice - and Still Got Lost',
            description: 'The shop had a Shopify store that generated 40+ orders per week. Every order was manually re-entered into their spreadsheet system. Errors were constant.',
            painPoints: [
                '2-3 orders lost or duplicated every week',
                'Each order took 15-20 minutes to manually re-enter',
                'Customer received no status updates after purchase',
                'Art files disconnected from orders - wrong designs printed',
                'No connection between website stock and actual inventory',
            ],
        },
        solution: {
            package: 'Website + FileMaker',
            timeline: '10 weeks from kickoff to go-live',
            modules: ['Ecommerce Storefront', 'Order Management', 'Production Workflow', 'Customer Portal', 'Real-Time Sync'],
            description: 'We replaced Shopify with a connected Shop Titan storefront and deployed the FileMaker system. Orders flow from website to production automatically. Customers see real-time status. Art files attach to orders.',
        },
        results: {
            headline: 'Zero Lost Orders. 20 Minutes Saved Per Order.',
            metrics: [
                { label: 'Lost/duplicate orders', before: '2-3/week', after: '0' },
                { label: 'Order processing time', before: '15-20 min', after: 'Automatic' },
                { label: 'Customer status inquiries', before: '15+/week', after: '2-3/week' },
                { label: 'Wrong design printed', before: '1-2/month', after: '0' },
            ],
            description: 'Orders now flow from the website directly into the FileMaker system with all specs, quantities, art files, and customer info attached. No re-entry. No lost orders. Customers check their own status through the portal instead of calling.',
        },
        quote: {
            text: 'We used to joke that re-entering orders was a full-time job. Now it is zero minutes of anyone\'s day. The system just handles it.',
            author: 'Shop Owner',
            role: 'DTLA Print',
        },
        linksTo: ['/platform/complete-system', '/platform/ecommerce-storefront', '/platform/production-automation'],
    },
];
