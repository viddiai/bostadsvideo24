// src/lib/data.ts — Single source of truth for all site content

export const navLinks = [
  { label: "Tjänster", href: "#tjanster" },
  { label: "Paket", href: "#paket" },
  { label: "Mäklare", href: "#maklare" },
  { label: "Husleverantörer", href: "#husleverantorer" },
  { label: "Kontakt", href: "#kontakt" },
];

export const hero = {
  headline: "Bostadsvideo på 24 timmar",
  subheadline:
    "Vi hjälper mäklare och husleverantörer att skapa professionella videos från materialet ni redan har — redo för Reels, TikTok, Facebook, LinkedIn och annonser.",
  primaryCta: "Beställ provfilm",
  secondaryCta: "Boka strategimöte",
  trustBadges: [
    { icon: "Zap", text: "24h leverans" },
    { icon: "Package", text: "Fasta priser" },
    { icon: "Smartphone", text: "Sociala format ingår" },
    { icon: "Bot", text: "AI-baserad produktion" },
  ],
};

export const problem = {
  headline:
    "Mäklare vill ha mer video — men traditionell produktion är långsam och dyr",
  painPoints: [
    {
      icon: "Clock",
      problem: "Filmteam tar 3–7 dagar att leverera",
      solution: "24 timmar",
    },
    {
      icon: "DollarSign",
      problem: "Krångliga offerter utan tydligt pris",
      solution: "Fasta paket",
    },
    {
      icon: "SmartphoneOff",
      problem: "Sociala klipp är ofta ett dyrt tillval",
      solution: "Ingår alltid",
    },
  ],
};

export const howItWorks = {
  headline: "Skicka material idag. Publicera färdig video imorgon.",
  steps: [
    {
      icon: "Upload",
      title: "Skicka material",
      description: "Bilder, text, eventuella klipp och objektsbeskrivning",
    },
    {
      icon: "Zap",
      title: "Vi producerar",
      description: "AI-baserad produktion med mänsklig kvalitetssäkring",
    },
    {
      icon: "CheckCircle",
      title: "Ni godkänner",
      description: "Korrektur och justeringar ingår",
    },
    {
      icon: "Rocket",
      title: "Publicera",
      description: "Färdiga format för alla kanaler inom 24 timmar",
    },
  ],
};

export type Package = {
  name: string;
  price: string;
  popular?: boolean;
  features: string[];
  cta: string;
};

export const packagesAgents: {
  headline: string;
  packages: Package[];
  promoFilm: { text: string; price: string };
} = {
  headline: "Tydliga paket. Fasta priser. Snabb leverans.",
  packages: [
    {
      name: "Objektvideo Start",
      price: "3 500 kr",
      features: [
        "1 vertikal video, 30–45 sek",
        "Format för Reels, TikTok, Facebook, Shorts",
        "Textgrafik + musik + CTA",
        "1 korrekturrunda",
        "Leverans inom 24 timmar",
      ],
      cta: "Beställ",
    },
    {
      name: "Objektkampanj",
      price: "6 900 kr",
      popular: true,
      features: [
        "1 huvudvideo, 45–60 sek",
        "3 korta sociala klipp/Reels",
        "1 Story-version",
        "Undertexter + CTA",
        "Format för Reels, TikTok, Facebook, LinkedIn, annonser",
        "1–2 korrekturrundor",
        "Leverans inom 24 timmar",
      ],
      cta: "Beställ",
    },
    {
      name: "Premium Objekt",
      price: "11 900 kr",
      features: [
        "1 huvudvideo, 60–90 sek",
        "4–6 sociala klipp",
        "Avancerad storytelling + mäklarprofilering",
        "Drönarmaterial integreras om tillgängligt",
        "Versioner för alla kanaler + annonser",
        "2 korrekturrundor",
        "Prioriterad 24h-leverans",
      ],
      cta: "Beställ",
    },
  ],
  promoFilm: {
    text: "Testa med ett tidigare objekt. Vi visar vad ert material kan bli.",
    price: "Provfilm: 1 900 kr",
  },
};

export type Subscription = {
  name: string;
  price: string;
  description: string;
  recommended?: boolean;
};

export const subscriptions: {
  headline: string;
  items: Subscription[];
  note: string;
} = {
  headline: "Er externa videoredaktion för bostadsmarknaden",
  items: [
    {
      name: "Synlighet Bas",
      price: "7 900 kr/mån",
      description: "1 kampanj eller 2 enklare videos/mån",
    },
    {
      name: "Synlighet Pro",
      price: "14 900 kr/mån",
      description: "~3 objektkampanjer/mån",
      recommended: true,
    },
    {
      name: "Kontor / Team",
      price: "29 900 kr/mån",
      description: "~6 objektkampanjer + kontorsmallar",
    },
  ],
  note: "3 månaders startperiod — därefter löpande månadsvis",
};

export const forAgents = {
  headline: "Allt mäklaren behöver för starkare synlighet",
  description:
    "Varje objekt är en chans att sälja bostaden — och bygga ditt personliga varumärke. Vi levererar video som fungerar på alla kanaler där spekulanter finns: Instagram, TikTok, Facebook, LinkedIn och annonser.",
  features: [
    "Inga nya filmteam — använd materialet ni har",
    "Sociala format ingår som standard",
    "Personlig mäklarprofilering",
    "Stärker varumärket inför nästa uppdrag",
    "Fasta priser utan konstiga tillägg",
  ],
};

export type SupplierPackage = {
  name: string;
  price: string;
  isSubscription?: boolean;
};

export const forSuppliers: {
  headline: string;
  description: string;
  packages: SupplierPackage[];
} = {
  headline: "Från bildbank till säljande videoinnehåll",
  description:
    "Ni sitter på material från byggprojekt, kundcase, modellhus och fotograferingar. Vi omvandlar det till löpande videoinnehåll för sociala medier, annonser och säljteamet.",
  packages: [
    { name: "Husmodell-video", price: "14 900 kr" },
    { name: "Kampanjpaket (1 video + 5 klipp)", price: "19 900 kr" },
    {
      name: "Husleverantör Bas",
      price: "19 900 kr/mån",
      isSubscription: true,
    },
    {
      name: "Husleverantör Pro",
      price: "34 900 kr/mån",
      isSubscription: true,
    },
  ],
};

export const trust = {
  headline: "Varför Bostadsvideo24?",
  stats: [
    { value: 24, suffix: "h", label: "Leveranstid" },
    { value: 100, suffix: "%", label: "Fasta paket utan dolda kostnader" },
    { value: 5, suffix: "+", label: "Format per produktion" },
    { value: 0, suffix: "", label: "Extra filmteam som behövs" },
  ],
  launchNote:
    "Lanserar i Göteborg — med kapacitet för hela Sverige och Norge",
};

export const promoFilmCta = {
  headline: "Testa med ett tidigare objekt",
  description:
    "Skicka material från ett redan sålt objekt — vi visar hur det hade kunnat se ut som video. Utan risk. Utan aktiva objekt.",
  price: "Provfilm: 1 900 kr",
  cta: "Beställ provfilm nu",
};

export const faq: { question: string; answer: string }[] = [
  {
    question: "Vad behöver vi skicka in?",
    answer:
      "Bilder, objektsbeskrivning, eventuella filmklipp, mäklarens kontaktuppgifter och önskad CTA. Vi gör resten.",
  },
  {
    question: "Hur fungerar 24-timmarsleveransen?",
    answer:
      "Material inskickat före kl. 12.00 levereras nästkommande arbetsdag. Gäller från att vi mottagit komplett underlag.",
  },
  {
    question: "Kan ni integrera drönarfilm?",
    answer:
      "Ja. Om ni tillhandahåller drönarmaterial integrerar vi det i produktionen. Vi kan också hjälpa till att ordna drönarflygning som tillägg via vårt nätverk.",
  },
  {
    question: "Ingår sociala medier-format i alla paket?",
    answer:
      "Ja. Alla paket inkluderar format för Instagram Reels, TikTok, Facebook och YouTube Shorts som standard — inte som tillval.",
  },
  {
    question: "Hur skiljer ni er från traditionella videoproduktionsbolag?",
    answer:
      "Vi producerar från befintligt material utan nytt filmteam, levererar inom 24 timmar och inkluderar sociala format som standard — till fasta priser utan offertprocesser.",
  },
];

export const footer = {
  tagline: "Från material till säljande video på 24 timmar.",
  links: [
    { label: "Tjänster", href: "#tjanster" },
    { label: "Om oss", href: "#om-oss" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  location: "Göteborg, Sverige",
  email: "info@bostadsvideo24.se",
  copyright: "© 2024 Bostadsvideo24. Alla priser exkl. moms.",
};
