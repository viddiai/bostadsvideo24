// Single source of truth for purchasable products.
// Prices are in öre (Stripe convention: smallest currency unit).
// All prices excl. moms — Stripe Tax handles 25% Swedish VAT.

export type CatalogItem = {
  id: string;
  name: string;
  price: number;            // öre (e.g. 190000 = 1 900 kr)
  displayPrice: string;     // human-readable (Swedish)
  description: string;
  category: "provfilm" | "objekt" | "abonnemang" | "leverantor";
  recurring?: "month";
  features: string[];
};

export const catalog: Record<string, CatalogItem> = {
  // ─────────────────────────────────────────────────────────
  // PROVFILM — low-friction trial
  // ─────────────────────────────────────────────────────────
  provfilm: {
    id: "provfilm",
    name: "Provfilm",
    price: 190000,
    displayPrice: "1 900 kr",
    description: "Vi visar vad ert material kan bli — utan risk, från ett redan sålt objekt.",
    category: "provfilm",
    features: [
      "1 vertikal video (30–45 sek)",
      "Producerad från ert befintliga material",
      "Levereras inom 24 timmar",
      "Ingen risk — använd ett sålt objekt",
    ],
  },

  // ─────────────────────────────────────────────────────────
  // OBJEKTSPAKET — for real estate agents
  // ─────────────────────────────────────────────────────────
  "objekt-start": {
    id: "objekt-start",
    name: "Objektvideo Start",
    price: 350000,
    displayPrice: "3 500 kr",
    description: "En enkel objektvideo för sociala medier.",
    category: "objekt",
    features: [
      "1 vertikal video, 30–45 sek",
      "Format för Reels, TikTok, Facebook, Shorts",
      "Textgrafik + musik + CTA",
      "1 korrekturrunda",
      "Leverans inom 24 timmar",
    ],
  },
  "objekt-kampanj": {
    id: "objekt-kampanj",
    name: "Objektkampanj",
    price: 690000,
    displayPrice: "6 900 kr",
    description: "Komplett objektkampanj — en huvudvideo plus klipp för alla kanaler.",
    category: "objekt",
    features: [
      "1 huvudvideo, 45–60 sek",
      "3 korta sociala klipp/Reels",
      "1 Story-version",
      "Undertexter + CTA",
      "Format för Reels, TikTok, Facebook, LinkedIn, annonser",
      "1–2 korrekturrundor",
      "Leverans inom 24 timmar",
    ],
  },
  "objekt-premium": {
    id: "objekt-premium",
    name: "Premium Objekt",
    price: 1190000,
    displayPrice: "11 900 kr",
    description: "Vår mest omfattande paket med drönare och mäklarprofilering.",
    category: "objekt",
    features: [
      "1 huvudvideo, 60–90 sek",
      "4–6 sociala klipp",
      "Avancerad storytelling + mäklarprofilering",
      "Drönarmaterial integreras om tillgängligt",
      "Versioner för alla kanaler + annonser",
      "2 korrekturrundor",
      "Prioriterad 24h-leverans",
    ],
  },

  // ─────────────────────────────────────────────────────────
  // ABONNEMANG — recurring for agencies
  // ─────────────────────────────────────────────────────────
  "abo-bas": {
    id: "abo-bas",
    name: "Synlighet Bas",
    price: 790000,
    displayPrice: "7 900 kr/mån",
    description: "1 kampanj eller 2 enklare videos per månad.",
    category: "abonnemang",
    recurring: "month",
    features: [
      "1 kampanj eller 2 enklare videos/mån",
      "Format för alla sociala kanaler",
      "3 månaders startperiod",
      "Därefter löpande månadsvis",
    ],
  },
  "abo-pro": {
    id: "abo-pro",
    name: "Synlighet Pro",
    price: 1490000,
    displayPrice: "14 900 kr/mån",
    description: "~3 objektkampanjer per månad — vår mest populära.",
    category: "abonnemang",
    recurring: "month",
    features: [
      "~3 objektkampanjer/mån",
      "Sociala klipp för alla kanaler",
      "Mäklarprofilering ingår",
      "3 månaders startperiod",
    ],
  },
  "abo-team": {
    id: "abo-team",
    name: "Kontor / Team",
    price: 2990000,
    displayPrice: "29 900 kr/mån",
    description: "Hela mäklarkontorets externa videoredaktion.",
    category: "abonnemang",
    recurring: "month",
    features: [
      "~6 objektkampanjer/mån",
      "Kontorsmallar och brandning",
      "Prioriterad leverans",
      "3 månaders startperiod",
    ],
  },

  // ─────────────────────────────────────────────────────────
  // HUSLEVERANTÖRER
  // ─────────────────────────────────────────────────────────
  "lev-husmodell": {
    id: "lev-husmodell",
    name: "Husmodell-video",
    price: 1490000,
    displayPrice: "14 900 kr",
    description: "Säljande video av en husmodell från ert bildmaterial.",
    category: "leverantor",
    features: [
      "1 huvudvideo av husmodell",
      "Klipp för sociala kanaler",
      "Levereras inom 24–48 timmar",
    ],
  },
  "lev-kampanj": {
    id: "lev-kampanj",
    name: "Kampanjpaket",
    price: 1990000,
    displayPrice: "19 900 kr",
    description: "1 huvudvideo plus 5 sociala klipp för en kampanj.",
    category: "leverantor",
    features: [
      "1 huvudvideo",
      "5 korta klipp för sociala kanaler",
      "Versioner för annonser",
    ],
  },
  "lev-bas": {
    id: "lev-bas",
    name: "Husleverantör Bas",
    price: 1990000,
    displayPrice: "19 900 kr/mån",
    description: "Löpande videoinnehåll från ert bildmaterial.",
    category: "leverantor",
    recurring: "month",
    features: [
      "Löpande produktion av video",
      "Versioner för alla kanaler",
      "3 månaders startperiod",
    ],
  },
  "lev-pro": {
    id: "lev-pro",
    name: "Husleverantör Pro",
    price: 3490000,
    displayPrice: "34 900 kr/mån",
    description: "Vår mest omfattande paket för husleverantörer.",
    category: "leverantor",
    recurring: "month",
    features: [
      "Större volym videoproduktion",
      "Mer avancerad storytelling",
      "Prioriterad support",
      "3 månaders startperiod",
    ],
  },
};

export const catalogList = Object.values(catalog);

export function getItem(id: string): CatalogItem | undefined {
  return catalog[id];
}
