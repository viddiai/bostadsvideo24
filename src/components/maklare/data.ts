// Content for the real-estate-agent landing page (/maklare).
// Kept separate from the shared site data in src/lib/data.ts so this
// conversion-focused page can be edited and A/B-tested independently.

export const CTA_LABEL = "Boka kickoff-möte";

// Cal.com booking opened as a popup directly from the CTA buttons
// (element-click embed) — keeps visitors on the landing page.
export const CAL_LINK = "stefan-vikstrom-peakmarketing/strategimote-bostadsvideo24";
export const CAL_NAMESPACE = "strategimote-bostadsvideo24";
export const CAL_CONFIG = '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}';

// Risk-reversal badges shown directly under every primary CTA.
export const riskBadges = [
  { icon: "ShieldCheck", text: "24h leveransgaranti" },
  { icon: "Layers", text: "Era mallar & varumärke" },
  { icon: "Wallet", text: "Fast månadspris — inga rörliga kostnader" },
  { icon: "Lock", text: "Säker betalning" },
];

export const heroContent = {
  eyebrow: "För mäklare & mäklarkontor",
  headline: {
    lead: "Sälj bostäder snabbare",
    emphasis: "med proffsig video",
    tail: "— levererad inom 24 timmar.",
  },
  subheadline:
    "Vi är ert externa videoteam. Era mäklare filmar inget, redigerar inget och väntar inte — ni får färdiga, varumärkesanpassade videor klara för Hemnet och sociala medier inom ett dygn. Fast pris, era mallar, varje gång.",
  // Social proof row directly under the CTA (kept visible, never in a carousel)
  socialProof: {
    logosLabel: "Används av mäklare på",
    quote:
      "Våra objekt går live på Hemnet med video samma dag — utan att någon på kontoret rör en kamera.",
    quoteAuthor: "Kontorschef · platshållare",
    statValue: 403,
    statSuffix: "%",
    statLabel: "Upp till fler förfrågningar med video.",
  },
};

export const problem = {
  index: "01",
  eyebrow: "Problemet",
  headline:
    "Era mäklare har inte tid — och era objekt lanseras på Hemnet utan video.",
  body: "Över 60 % av mäklare säger att konsekvent marknadsföringsinnehåll är deras största utmaning. Frilansare ger ojämn kvalitet; egen redigering tar tid ni inte har; och moderna objekt kräver färdig media inom 24–48 timmar efter signerat uppdrag. Resultatet: objekt lanseras med bara stillbilder, och varumärket spretar.",
};

export const solution = {
  index: "02",
  eyebrow: "Lösningen — ert externa videoteam",
  headline:
    "Vi blir er interna videoavdelning — utan att ni anställer någon.",
  body: "Inte ett mediaköp, utan en outsourcad marknadsavdelning. Vi tar bort hela flaskhalsen och ger ett förutsägbart, högt flöde av innehåll som håller kontoret top-of-mind i er lokala marknad.",
};

export const videoEffect = {
  index: "03",
  eyebrow: "Effekten av video",
  headline: "Det här gör video mätbart med er försäljning:",
  stats: [
    {
      icon: "TrendingUp",
      value: 403,
      suffix: "%",
      prefix: "Upp till ",
      label:
        "fler förfrågningar på objekt med video jämfört med enbart stillbilder.",
    },
    {
      icon: "Timer",
      value: 31,
      suffix: "%",
      prefix: "20–",
      label:
        "kortare tid på marknaden med videovisningar och virtuella turer.",
    },
    {
      icon: "BarChart3",
      value: 40,
      suffix: "%",
      prefix: "35–",
      label:
        "högre total försäljningsvolym över tid för mäklare som konsekvent använder video.",
    },
    {
      icon: "Users",
      value: 73,
      suffix: "%",
      prefix: "",
      label:
        "av bostadsägare väljer hellre en mäklare som använder video — vinn fler säljuppdrag.",
    },
    {
      icon: "Share2",
      value: 1200,
      suffix: "%",
      prefix: "",
      label:
        "fler delningar för video än text och bild tillsammans — organisk lokal räckvidd.",
    },
    {
      icon: "Eye",
      value: null as number | null,
      suffix: "",
      prefix: "",
      headline: "Bättre kvalificerade visningar",
      label:
        "Video förkvalificerar köpare (känsla för planlösning, ljus och flöde), färre no-shows, mer produktiva fysiska visningar.",
    },
  ],
};

export const howItWorks = {
  index: "04",
  eyebrow: "Så funkar det",
  headline: "Från signerat uppdrag till färdig video på tre steg.",
  steps: [
    {
      icon: "Send",
      title: "Ni skickar objektet",
      description: "Adress och underlag — vi tar hand om resten.",
    },
    {
      icon: "Film",
      title: "Vi filmar och redigerar",
      description: "I era mallar och ert varumärke.",
    },
    {
      icon: "CheckCircle",
      title: "Ni får videon inom 24h",
      description: "Klar för Hemnet, Boneo och sociala medier.",
    },
  ],
};

export const wallOfLove = {
  index: "05",
  eyebrow: "Wall of love",
  headline: "Kontorschefer som redan gjort video till sitt försprång.",
  note: "Platshållare tills riktiga omdömen finns — eskalerande styrka: text < skärmdump < före/efter < video.",
  items: [
    {
      type: "Textomdöme",
      icon: "Quote",
      body: "Vi slutade pussla med frilansare. Nu kommer varje objekt ut med samma proffsiga känsla — och vi behöver aldrig vänta på redigering.",
      author: "Kontorschef · platshållare",
    },
    {
      type: "Skärmdump · flöde",
      icon: "Instagram",
      body: "Platshållare för skärmdump av Instagram-/Hemnet-flöde med kontorets videor i ett enhetligt rutnät.",
      author: "Byt mot riktig skärmdump",
    },
    {
      type: "Videocitat",
      icon: "Play",
      body: "Platshållare för kort videocitat från en kontorschef. Starkaste beviset — visa ansiktet och rösten.",
      author: "Byt mot riktig video",
    },
  ],
};

export type MaklarePackage = {
  name: string;
  price: string;
  unit: string;
  tag?: string;
  highlight?: boolean;
  intro: string;
  features: string[];
};

export const packages = {
  index: "06",
  eyebrow: "Paket & priser",
  headline: "Välj nivå efter hur mycket marknad ni vill ta.",
  // Display order places the Office tier in the middle and highlighted,
  // as requested (anchor the high-value plan).
  items: [
    {
      name: "Flaggskepp",
      price: "7 900 kr",
      unit: "/mån · 1×30s eller 2×15s",
      intro:
        "För enskilda mäklare som vill testa video på sina viktigaste objekt med låg risk.",
      features: [
        "Få era viktigaste objekt att sticka ut i fyllda Hemnet-/Boneo-flöden och på sociala medier.",
        "Bättre kvalificerade visningar, sparad tid och större chans att nå utgångspriset — utan långa prissänkningar.",
      ],
    },
    {
      name: "Office / Team",
      price: "29 900 kr",
      unit: "/mån · Ert externa videoteam",
      tag: "Mest populärt · Bäst för kontor",
      highlight: true,
      intro:
        "För kontorschefer, franchisetagare och högvolymsteam som vill dominera sin lokala marknadsandel och bygga ett enhetligt premiumvarumärke.",
      features: [
        "Ert externa videoteam: vi tar bort kontorets största flaskhals och levererar ett förutsägbart flöde av innehåll.",
        "Varumärke & mallar: egna kontorsmallar — varje video ser enhetlig och proffsig ut (81 % säger att konsekvent varumärke skapar förtroende).",
        "24h leveransgaranti: skjut aldrig upp en Hemnet-lansering i väntan på redigering.",
        "Rekryterings- & retentionverktyg: visar toppmäklare att kontoret investerar i deras framgång.",
        "Social dominans: ~6 högkvalitativa 30s-videor (eller 12×15s) per månad för Instagram, Facebook och TikTok.",
        "Förutsägbar budget: fast pris och säker betalning ersätter styckkostnader.",
      ],
    },
    {
      name: "Topp-producent",
      price: "14 900 kr",
      unit: "/mån · 3×30s eller 6×15s",
      tag: "Populärt bland team",
      intro:
        "För toppmäklare och team som vill göra video till sitt signum.",
      features: [
        "Volym skapar portföljeffekter. Med video på en stor del av beståndet, projicerat över ett år:",
        "2–4× fler kvalificerade förfrågningar per objekt.",
        "~20 % kortare tid på marknaden.",
        "~35–40 % högre total försäljningsvolym jämfört med enbart foto.",
      ],
    },
  ] as MaklarePackage[],
};

export const salesPitch = {
  index: "07",
  eyebrow: "Vinn säljpitchen",
  headline:
    "Gå in i nästa intag och säg: ”Jag använder professionell videomarknadsföring för att förkvalificera köpare och sälja snabbare.”",
  body: "Svenska säljare är känsliga för upplevd professionalism — den meningen vinner uppdraget mot konkurrerande mäklare. Påminn också om distansköpare (vanliga i Stockholm, Göteborg, Malmö och fritidshusmarknaden) som förlitar sig på video för att fatta trygga beslut med färre fysiska besök.",
};

export const riskReversal = {
  index: "08",
  eyebrow: "Risk reversal",
  headline: "Noll risk att komma igång.",
  points: [
    "24h leveransgaranti",
    "Era mallar & varumärke",
    "Fast månadspris",
    "Säker betalning",
    "Differentieringen Hemnet/Boneo redan kräver — video, inte fler stillbilder.",
  ],
};

export const finalCta = {
  index: "09",
  eyebrow: "Boka kickoff-möte",
  headline: "Boka ett kickoff-möte — se er första video i ert varumärke.",
};
