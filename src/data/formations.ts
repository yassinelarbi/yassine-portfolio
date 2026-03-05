// src/data/formations.ts

export type FormationItem = {
  title: string;
  school?: string;
  location?: string;
  period?: string;
  details?: string[];
  type: "formation" | "certification" | "habilitation";
};

export const formations: FormationItem[] = [
  // =========================
  // FORMATIONS
  // =========================
  {
    type: "formation",
    title: "BUT Génie Industriel et Maintenance (GIM) — parcours 3MI",
    school: "UPHF (IUT de Valenciennes)",
    location: "Valenciennes",
    period: "2022 — 2025",
    details: [
      "Formation pluridisciplinaire en génie industriel à dominante maintenance.",
      "Fondamentaux : mécanique, électricité, fluides, automatisme, régulation.",
      "Approche terrain : mise en pratique sur équipements industriels et projets appliqués.",
    ],
  },
  {
    type: "formation",
    title: "Diplôme d’accès aux études universitaires (DAEU)",
    school: "UPHF",
    location: "Valenciennes",
    period: "2021 — 2022",
    details: [
      "Remise à niveau académique après une période d’arrêt d’études.",
      "Consolidation des bases pour reprise d’un cursus universitaire.",
    ],
  },
  {
    type: "formation",
    title: "Diplôme Professionnel Militaire de Premier Degré (DPM1)",
    school: "CIC",
    location: "Boughar",
    period: "2014 — 2015",
    details: [
      "Développement de la rigueur, discipline et travail en équipe.",
      "Renforcement du sens des responsabilités et gestion de situations à risque.",
    ],
  },

  // =========================
  // CERTIFICATIONS
  // =========================
  {
    type: "certification",
    title: "Manager la TPM",
    school: "AFNOR Compétences",
    period: "—",
    details: [
      "Fondamentaux TPM : réduction des pertes, implication terrain, routines et standards.",
      "Approche structurée : pilotage, indicateurs et plan d’actions.",
    ],
  },

  // =========================
  // HABILITATIONS
  // =========================
  {
    type: "habilitation",
    title: "Habilitations électriques",
    period: "—",
    details: ["B1V", "B2V", "BR", "BC", "H0"],
  },
  {
    type: "habilitation",
    title: "Travail en hauteur",
    period: "—",
    details: ["Habilitation travail en hauteur"],
  },
  {
    type: "habilitation",
    title: "CACES PEMP R486",
    period: "—",
    details: ["Nacelles / PEMP — R486"],
  },
];

// =========================
// LANGUES
// =========================
export type LanguageLevel =
  | "natif"
  | "bilingue"
  | "courant"
  | "intermediaire"
  | "debutant";

export type LanguageItem = {
  name: string;
  level: LanguageLevel;
  note?: string; // optionnel
};

export const languages: LanguageItem[] = [
  { name: "Français", level: "bilingue" },
  { name: "Kabyle", level: "natif" },
  { name: "Arabe", level: "bilingue" },
  { name: "Anglais", level: "intermediaire" },
];