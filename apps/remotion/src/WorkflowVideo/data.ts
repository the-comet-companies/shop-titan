export type StageData = {
  id: string;
  number: string;
  name: string;
  insight: string;
  icon: string;
};

export const STAGES: StageData[] = [
  {
    id: "lead",
    number: "01",
    name: "LEAD",
    insight: "Every job starts with a name.\nCapture it before it goes cold.",
    icon: "UserPlus",
  },
  {
    id: "quote",
    number: "02",
    name: "QUOTE",
    insight: "Professional quotes in seconds.\nPricing matrices, not guesswork.",
    icon: "FileText",
  },
  {
    id: "follow-ups",
    number: "03",
    name: "QUOTE FOLLOW UPS",
    insight: "Automated follow-ups.\nNo lead dies in silence.",
    icon: "BellRing",
  },
  {
    id: "development",
    number: "04",
    name: "DEVELOPMENT",
    insight: "Custom job specs built once,\nreferenced forever.",
    icon: "Settings",
  },
  {
    id: "creative-proofs",
    number: "05",
    name: "CREATIVE PROOFS",
    insight: "Artwork in, proof out.\nVersion control built in.",
    icon: "Palette",
  },
  {
    id: "approval",
    number: "06",
    name: "APPROVAL SYSTEM",
    insight: "Client sign-off without\nthe email thread.",
    icon: "CheckCircle",
  },
  {
    id: "sampling",
    number: "07",
    name: "SAMPLING",
    insight: "Pre-production samples tracked,\nnot forgotten.",
    icon: "FlaskConical",
  },
  {
    id: "production",
    number: "08",
    name: "PRODUCTION",
    insight: "Machines scheduled. Team assigned.\nStatus live.",
    icon: "Factory",
  },
  {
    id: "payment",
    number: "09",
    name: "PAYMENT LINKS",
    insight: "Payment sent automatically.\nRevenue recorded instantly.",
    icon: "CreditCard",
  },
  {
    id: "shipping",
    number: "10",
    name: "SHIPPING LABELS",
    insight: "Labels printed the moment\nproduction closes.",
    icon: "Truck",
  },
  {
    id: "packing",
    number: "11",
    name: "PACKING DATA",
    insight: "Every item. Every count.\nVerified before it ships.",
    icon: "ClipboardList",
  },
  {
    id: "invoicing",
    number: "12",
    name: "INVOICING",
    insight: "Invoices generated.\nNothing falls through the cracks.",
    icon: "Receipt",
  },
  {
    id: "reporting",
    number: "13",
    name: "REPORTING",
    insight: "Every job, every margin,\nevery machine. In one view.",
    icon: "BarChart3",
  },
];

export const FPS = 30;
export const STAGE_FRAMES = 90; // 3s
export const INTRO_FRAMES = 60; // 2s
export const OUTRO_FRAMES = 60; // 2s
// 60 + (13 × 90) + 60 = 1,290 frames total
export const TOTAL_FRAMES =
  INTRO_FRAMES + STAGES.length * STAGE_FRAMES + OUTRO_FRAMES;
