export type StageData = {
  id: string;
  number: string;
  name: string;
  insight: string;
};

export const STAGES: StageData[] = [
  {
    id: "lead",
    number: "01",
    name: "LEAD",
    insight: "Every job starts with a name.\nCapture it before it goes cold.",
  },
  {
    id: "quote",
    number: "02",
    name: "QUOTE",
    insight: "Professional quotes in seconds.\nPricing matrices, not guesswork.",
  },
  {
    id: "follow-ups",
    number: "03",
    name: "QUOTE FOLLOW UPS",
    insight: "Automated follow-ups.\nNo lead dies in silence.",
  },
  {
    id: "development",
    number: "04",
    name: "DEVELOPMENT",
    insight: "Custom job specs built once,\nreferenced forever.",
  },
  {
    id: "creative-proofs",
    number: "05",
    name: "CREATIVE PROOFS",
    insight: "Artwork in, proof out.\nVersion control built in.",
  },
  {
    id: "approval",
    number: "06",
    name: "APPROVAL SYSTEM",
    insight: "Client sign-off without\nthe email thread.",
  },
  {
    id: "sampling",
    number: "07",
    name: "SAMPLING",
    insight: "Pre-production samples tracked,\nnot forgotten.",
  },
  {
    id: "production",
    number: "08",
    name: "PRODUCTION",
    insight: "Machines scheduled. Team assigned.\nStatus live.",
  },
  {
    id: "payment",
    number: "09",
    name: "PAYMENT LINKS",
    insight: "Payment sent automatically.\nRevenue recorded instantly.",
  },
  {
    id: "shipping",
    number: "10",
    name: "SHIPPING LABELS",
    insight: "Labels printed the moment\nproduction closes.",
  },
  {
    id: "packing",
    number: "11",
    name: "PACKING DATA",
    insight: "Every item. Every count.\nVerified before it ships.",
  },
  {
    id: "invoicing",
    number: "12",
    name: "INVOICING",
    insight: "Invoices generated.\nNothing falls through the cracks.",
  },
  {
    id: "reporting",
    number: "13",
    name: "REPORTING",
    insight: "Every job, every margin,\nevery machine. In one view.",
  },
];

export const FPS = 30;
export const STAGE_FRAMES = 90; // 3s
export const INTRO_FRAMES = 60; // 2s
export const OUTRO_FRAMES = 60; // 2s
// 60 + (13 × 90) + 60 = 1,290 frames total
export const TOTAL_FRAMES =
  INTRO_FRAMES + STAGES.length * STAGE_FRAMES + OUTRO_FRAMES;
