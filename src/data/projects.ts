// src/data/projects.ts

export type ProjectCategory =
  | "maintenance-terrain"
  | "fiabilite"
  | "methodes"
  | "digitalisation";

export type Project = {
  title: string;
  slug: string;
  categorie: ProjectCategory;

  year?: number;
  excerpt: string;
  tags?: string[];

  objectif?: string;
  methode?: string[];
  resultats?: string[];
  pointsCles?: string[];

  image?: string; // /images/projects/...
};

export const categoryLabels: Record<ProjectCategory, string> = {
  "maintenance-terrain": "Maintenance terrain",
  fiabilite: "Fiabilité",
  methodes: "Méthodes",
  digitalisation: "Digitalisation",
};

// helper
const img = (file: string) => `/images/projects/${file}`;

export const projects: Project[] = [
  // =========================
  // DIGITALISATION
  // =========================
  {
    title: "Architecture de pipeline de données maintenance (NiFi → Power BI)",
    slug: "architecture-de-pipeline-de-donnees-maintenance",
    categorie: "digitalisation",
    year: 2025,
    excerpt:
      "Centralisation et automatisation des flux de données GMAO pour fiabiliser les KPI et accélérer la prise de décision.",
    tags: ["NiFi", "Power BI", "Data", "KPI", "Maintenance 4.0"],
    objectif:
      "Centraliser et fiabiliser les données maintenance issues de la GMAO (initialement consolidées manuellement sous Excel) afin de piloter des indicateurs de performance fiables et réduire les erreurs de manipulation.",
    methode: [
      "Analyse des flux existants et des besoins décisionnels (KPI, tendances, analyses pannes).",
      "Conception d’une architecture automatisée de traitement et normalisation des données.",
      "Implémentation d’un pipeline sous Apache NiFi (ingestion, transformation, structuration).",
      "Structuration des données pour exploitation Power BI (modèle orienté décision).",
    ],
    resultats: [
      "≈ 70% de réduction du temps de consolidation manuelle.",
      "≈ 30% d’erreurs en moins liées aux manipulations Excel.",
      "Réactivité décisionnelle divisée par 2 sur le périmètre suivi.",
      "Socle technique évolutif vers une maintenance pilotée par la donnée.",
    ],
    pointsCles: [
      "Architecture data industrielle",
      "Automatisation des flux",
      "Structuration orientée décision",
      "Vision maintenance 4.0",
    ],
    image: img("p-dig-01.png"),
  },
  {
    title: "Upgrade IHM Pro-face pour récupération automatique des données",
    slug: "upgrade-ihm-pro-face-pour-recuperation-automatique-des-donnees",
    categorie: "digitalisation",
    year: 2025,
    excerpt:
      "Ajout d’un data logging (export CSV USB) sur une cercleuse pour exploiter les historiques défauts et fiabiliser les indicateurs.",
    tags: ["IHM Pro-face", "GP-Pro EX", "CSV", "Data logging", "MTBF", "KPI"],
    objectif:
      "Mettre en place une récupération automatique des historiques défauts sur une cercleuse équipée d’une IHM Pro-face afin de supprimer le reporting manuel, fiabiliser l’analyse des défaillances et construire des indicateurs (MTBF, disponibilité).",
    methode: [
      "Analyse de l’existant : historiques non exportables / aucune sauvegarde exploitable.",
      "Étude de la documentation Pro-face (GP-Pro EX).",
      "Identification de la fonction Data Sampling + export CSV.",
      "Sauvegarde complète du programme avant modification (sécurisation).",
      "Ajout de l’enregistrement automatique sur support USB.",
      "Tests fonctionnels (intégrité programme machine) et validation en production avec arrêt maîtrisé.",
    ],
    resultats: [
      "Export automatique des défauts en format CSV.",
      "Suppression du carnet de bord / reporting manuel.",
      "Base exploitable pour KPI MTBF / disponibilité et analyses de pannes.",
      "Gain de plusieurs heures mensuelles de consolidation manuelle.",
      "Fiabilisation des données d’analyse.",
    ],
    pointsCles: [
      "Lecture & modification programme IHM",
      "Sécurisation avant intervention (backup)",
      "Data terrain → indicateurs",
      "Approche méthodique et sécurisée",
    ],
    image: img("p-dig-02.png"),
  },

  // =========================
  // METHODES
  // =========================
  {
    title: "Pilotage avancé de la performance maintenance (KPI + Pareto + Power BI)",
    slug: "pilotage-avance-de-la-performance-maintenance",
    categorie: "methodes",
    year: 2024,
    excerpt:
      "Passage d’une maintenance réactive à un pilotage par indicateurs (MTBF, MTTR, disponibilité) et analyses Pareto pour prioriser les actions.",
    tags: ["MTBF", "MTTR", "Disponibilité", "Pareto", "Power BI", "Aide à la décision"],
    objectif:
      "Rendre la performance maintenance mesurable et actionnable : identifier les équipements critiques, comprendre les causes majeures de défaillance et prioriser les actions à fort impact.",
    methode: [
      "Extraction et nettoyage des données issues de la GMAO.",
      "Calcul des indicateurs MTBF, MTTR et disponibilité.",
      "Analyse Pareto des pannes récurrentes (fréquence / impacts).",
      "Construction d’un tableau de bord Power BI et suivi des tendances.",
    ],
    resultats: [
      "+15% d’amélioration de disponibilité sur le périmètre ciblé.",
      "-20% de pannes récurrentes identifiées et traitées.",
      "-15% d’interventions correctives non planifiées.",
      "Décisions techniques orientées sur les causes et priorités.",
    ],
    pointsCles: [
      "Analyse de défaillance",
      "Pilotage par KPI",
      "Approche fiabilité",
      "Aide à la décision",
    ],
    image: img("p-meth-04.png"),
  },
  {
    title: "Optimisation des magasins de pièces de rechange",
    slug: "optimisation-des-magasins-de-pieces-de-rechange",
    categorie: "methodes",
    year: 2024,
    excerpt:
      "Fiabilisation stock/GMAO, normalisation des emplacements et amélioration de la traçabilité pour sécuriser les interventions.",
    tags: ["Magasin", "Stock", "GMAO", "Traçabilité", "Organisation"],
    objectif:
      "Fiabiliser la gestion des pièces de rechange : réduire les erreurs d’inventaire, améliorer la disponibilité des composants critiques et diminuer les temps de recherche, dans un contexte d’emplacements non normalisés et de traçabilité limitée.",
    methode: [
      "Analyse des écarts stock physique vs GMAO.",
      "Création et attribution d’emplacements normalisés en GMAO.",
      "Réorganisation physique des zones de stockage.",
      "Optimisation des flux d’entrée / sortie pièces.",
      "Mise à jour systématique des données articles et suivi des mouvements.",
    ],
    resultats: [
      "-35% de réduction des erreurs d’inventaire.",
      "+20% d’amélioration du taux de disponibilité des pièces critiques.",
      "-30% sur le temps de recherche des pièces.",
      "Amélioration de la fiabilité des données GMAO et sécurisation des interventions.",
    ],
    pointsCles: [
      "Structuration GMAO",
      "Organisation logistique",
      "Fiabilisation des données stock",
      "Vision maintenance & supply chain",
    ],
    image: img("p-meth-02.jpg"),
  },
  {
    title: "Arborescence technique & nomenclature GMAO",
    slug: "arborescence-technique-nomenclature-gmao",
    categorie: "methodes",
    year: 2023,
    excerpt:
      "Création d’un référentiel équipements hiérarchisé et normalisé pour améliorer la traçabilité, la recherche d’actifs et préparer la digitalisation.",
    tags: ["GMAO", "Référentiel", "Nomenclature", "Structuration", "Normalisation"],
    objectif:
      "Transformer une base équipements peu structurée en un référentiel clair et hiérarchisé (maintenance préventive/corrective, traçabilité, recherche rapide d’actifs, préparation à la digitalisation : plans, historiques, criticité).",
    methode: [
      "Analyse de l’existant : incohérences, doublons, structure hétérogène.",
      "Définition de règles : niveaux hiérarchiques fixes + logique fonctionnelle.",
      "Création d’une codification alphanumérique (zone + fonction + séquence).",
      "Normalisation des désignations (terminologie homogène).",
      "Implémentation progressive et contrôles croisés (rattachements, navigation, traçabilité).",
    ],
    resultats: [
      "-30 à -40% (estimé terrain) sur le temps de recherche d’un équipement.",
      "Forte réduction des erreurs d’identification / doublons (base fiabilisée).",
      "Qualité des historiques améliorée (pannes/interventions plus précises).",
      "Base prête pour gammes, criticité, plans et audits.",
    ],
    pointsCles: [
      "Structuration de données techniques complexes",
      "Décomposition fonctionnelle",
      "Normalisation documentaire",
      "Maintenance exploitable",
    ],
    image: img("p-meth-01.png"),
  },
  {
    title: "Structuration du service Méthodes Maintenance",
    slug: "structuration-du-service-methodes-maintenance",
    categorie: "methodes",
    year: 2023,
    excerpt:
      "Clarification des rôles, standardisation des gammes et structuration documentaire pour gagner en préparation et réduire l’urgence.",
    tags: ["Organisation", "Standardisation", "Gammes", "Documentation", "Planification"],
    objectif:
      "Accompagner la montée en maturité du service maintenance face à l’augmentation du parc : réduire les interventions subies, améliorer la préparation et structurer les processus Méthodes.",
    methode: [
      "Clarification des rôles Méthodes vs terrain.",
      "Standardisation des gammes de maintenance.",
      "Structuration documentaire (support interventions, traçabilité).",
      "Coordination terrain / planification et routines de suivi.",
    ],
    resultats: [
      "-25% d’interventions urgentes non planifiées.",
      "+20% de respect du planning préventif.",
      "-15% du temps moyen de préparation d’intervention.",
    ],
    pointsCles: [
      "Standardisation des pratiques",
      "Organisation maintenance",
      "Coordination opérationnelle",
      "Vision système",
    ],
    image: img("p-meth-03.png"),
  },

  // =========================
  // FIABILITE
  // =========================
  {
    title: "Fiabilisation moteur convoyeur (RCA + sécurisation architecture)",
    slug: "fiabilisation-moteur-convoyeur",
    categorie: "fiabilite",
    year: 2024,
    excerpt:
      "Analyse cause racine suite à un arrêt critique (3 jours) et sécurisation des protections pour éviter la récidive.",
    tags: ["RCA", "Diagnostic", "Électrique", "Disponibilité", "Gestion de crise"],
    objectif:
      "Identifier la cause racine d’une défaillance critique sur convoyeur (3 jours d’arrêt, impact opérationnel majeur) et sécuriser la remise en service via une amélioration de l’architecture de protection.",
    methode: [
      "Diagnostic initial (symptômes : fumée/odeur brûlé) et hypothèses (variateur).",
      "Remplacements initiaux (variateur + moteur) non concluants → bascule en approche structurée.",
      "Expertise complète du moteur et conception d’un banc de test interne.",
      "Analyse des protections électriques et cohérence des intensités fusibles.",
      "Identification cause racine : module frein non alimenté + fusibles surdimensionnés → frottement permanent → surchauffe → dégradation bobinage.",
      "Mise en place de recommandations : redimensionnement protections, simplification (suppression variateur inutile), procédure d’escalade défaut.",
    ],
    resultats: [
      "Diagnostic fiable validé et remise en service sécurisée.",
      "Identification d’une faille d’architecture électrique et standard de protection amélioré.",
      "Réduction du risque de récidive (cause racine traitée).",
    ],
    pointsCles: [
      "Diagnostic électrique industriel",
      "RCA (cause racine)",
      "Analyse système global",
      "Sécurisation architecture",
    ],
    image: img("p-fiab-01.jpg"),
  },
  {
    title: "Fiabilité et TRS d’une machine à 9 sous-systèmes",
    slug: "fiabilite-et-trs-dune-machine-a-9-sous-systemes",
    categorie: "fiabilite",
    year: 2024,
    excerpt:
      "Analyse de 4 mois d’historique : Pareto pannes & coûts, MTBF/MTTR par sous-système, TRS global et plan d’actions priorisé.",
    tags: ["TRS", "MTBF", "MTTR", "Pareto", "Coûts", "Priorisation"],
    objectif:
      "Analyser une machine complexe (9 sous-systèmes) afin d’identifier les pertes de productivité, cibler les sous-systèmes critiques et proposer un plan d’amélioration maintenance + qualité basé sur les données.",
    methode: [
      "Analyse Pareto pannes & coûts (MO + pièces + pertes production).",
      "Calcul MTBF / MTTR par sous-système.",
      "Analyse TRS : disponibilité / performance / qualité.",
      "Identification des leviers prioritaires (sous-systèmes les plus pénalisants).",
      "Recommandations : préventif ciblé, réduction des rebuts, ajustements organisationnels.",
    ],
    resultats: [
      "2 sous-systèmes (S1 + S7) = 55% du temps d’arrêt total → priorisation claire.",
      "Disponibilité opérationnelle mesurée : 66% (écart vs cible type 95%).",
      "TRS calculé : 68,24%.",
      "Rebuts : 12% → axe qualité majeur identifié.",
      "Plan d’action proposé : fiabilité + qualité + organisation.",
    ],
    pointsCles: [
      "Analyse Pareto orientée décision",
      "Indicateurs fiabilité (MTBF/MTTR)",
      "Lecture TRS globale (vision système)",
      "Recommandations concrètes et priorisées",
    ],
    image: img("p-fiab-02.png"),
  },
  {
    title: "Maintenance conditionnelle par analyse d’huile (ISO 4406)",
    slug: "mise-en-place-dune-maintenance-conditionnelle-par-analyse-dhuile",
    categorie: "fiabilite",
    year: 2024,
    excerpt:
      "Mise en place d’une démarche conditionnelle sur presse hydraulique : protocole, interprétation ISO 4406, seuils d’alerte et actions ciblées.",
    tags: ["Maintenance conditionnelle", "Analyse d'huile", "ISO 4406", "Hydraulique", "Prédictif"],
    objectif:
      "Mettre en place une maintenance conditionnelle pour anticiper les dégradations hydrauliques, détecter les contaminations et réduire le risque de défaillance critique.",
    methode: [
      "Définition d’un protocole de prélèvement normalisé.",
      "Analyse de propreté selon ISO 4406 (ex : 21/20/19).",
      "Interprétation (usure particulaire, contamination, viscosité).",
      "Définition de seuils d’alerte et d’intervention.",
      "Recommandations d’actions correctives ciblées.",
    ],
    resultats: [
      "Détection précoce d’une contamination anormale.",
      "Seuils d’intervention formalisés (surveillance vs action).",
      "Réduction estimée de 25% du risque de défaillance hydraulique.",
      "Mise en place d’une logique de maintenance prédictive/conditionnelle.",
    ],
    pointsCles: [
      "Maintenance conditionnelle",
      "Interprétation de données techniques",
      "ISO 4406",
      "Analyse fluide & hydraulique",
    ],
    image: img("p-fiab-03.png"),
  },

  // =========================
  // MAINTENANCE TERRAIN
  // =========================
  {
    title: "Remise en conformité et fiabilisation d’un système de convoyage industriel",
    slug: "remise-en-conformite-et-fiabilisation-dun-systeme-de-convoyage-industriel",
    categorie: "maintenance-terrain",
    year: 2024,
    excerpt:
      "Mise en sécurité, diagnostic électrique terrain, correction schémas/câblage et stabilisation d’un convoyage automatisé sujet à pannes récurrentes.",
    tags: ["Diagnostic", "Conformité", "Électrique", "Sécurisation", "Convoyage"],
    objectif:
      "Sécuriser et stabiliser un convoyage automatisé présentant des pannes récurrentes et défauts électriques intermittents, réduire le risque d’échauffement moteur et améliorer la standardisation des interventions.",
    methode: [
      "Mise en sécurité et consignation complète de l’installation.",
      "Analyse des schémas électriques et vérification du câblage réel.",
      "Contrôles : continuité, isolement, protections électriques.",
      "Identification des incohérences schéma ↔ terrain et remise en conformité.",
      "Remplacement composants usés (fusibles, protections, contacteurs).",
      "Tests de redémarrage progressif et mise à jour documentaire (schémas + observations).",
    ],
    resultats: [
      "Remise en service sécurisée de l’installation.",
      "Suppression d’un défaut récurrent critique.",
      "Réduction du risque d’échauffement moteur.",
      "Stabilisation du fonctionnement sur le long terme.",
      "Schémas mis à jour pour interventions futures.",
    ],
    pointsCles: [
      "Diagnostic électrique terrain",
      "Lecture & correction de schémas industriels",
      "Mise en conformité technique",
      "Intervention méthodique sous contrainte",
    ],
    image: img("p-mt-01.jpg"),
  },
  {
    title: "Conception d’un chariot de maintenance DMS (économie -93%)",
    slug: "conception-dun-chariot-de-maintenance-dms",
    categorie: "maintenance-terrain",
    year: 2024,
    excerpt:
      "Conception/fabrication interne d’un chariot de maintenance pour navettes DMS : ergonomie, sécurité et standard duplicable (650€ vs 10 000€).",
    tags: ["Conception", "Ergonomie", "Sécurité", "Optimisation coûts", "DMS"],
    objectif:
      "Concevoir en interne un chariot de maintenance adapté au terrain pour réduire le coût d’investissement, améliorer l’ergonomie, optimiser la maintenance préventive et standardiser une solution duplicable.",
    methode: [
      "Analyse du besoin terrain et contraintes mécaniques/manutention.",
      "Inventaire des matériaux disponibles et conception détaillée.",
      "Découpe aluminium/acier, usinage et assemblage complet.",
      "Tests stabilité/sécurité et itérations d’amélioration.",
      "Ajouts : frein redondant, support fourches chariot élévateur, structure acier 5 mm, poignée ergonomique.",
    ],
    resultats: [
      "Coût constructeur : 10 000€ vs coût interne : 650€ → gain 9 350€ (-93%).",
      "Réduction du temps de manutention.",
      "Amélioration des conditions de travail / diminution du risque TMS.",
      "Standard duplicable (industrialisation possible).",
    ],
    pointsCles: [
      "Analyse besoin terrain",
      "Conception mécanique",
      "Optimisation coûts industriels",
      "Sécurité & ergonomie",
      "Vision industrialisation",
    ],
    image: img("p-mt-02.jpg"),
  },
  {
    title: "Conception d’un système de levage hydraulique pour trémie 1T",
    slug: "conception-dun-systeme-de-levage-hydraulique-pour-tremie-1t",
    categorie: "maintenance-terrain",
    year: 2023,
    excerpt:
      "Dimensionnement d’un levage hydraulique (≈1 tonne) avec contraintes de cycle, stabilité et sécurités (schéma hydraulique + protections).",
    tags: ["Hydraulique", "Dimensionnement", "Sécurité", "Schéma", "Moteur triphasé"],
    objectif:
      "Concevoir un système de levage pour soulever une trémie ≈ 1 022 kg (course 600 mm, temps de montée ≤ 3 min) avec un mouvement stable et une architecture sécurisée exploitable en environnement industriel.",
    methode: [
      "Analyse du besoin : charge, hauteur, temps de cycle, marges de sécurité.",
      "Comparatif pneumatique/hydraulique et choix hydraulique (forte charge).",
      "Dimensionnement : pression de service, débit nécessaire, sélection pompe compatible.",
      "Architecture : schéma hydraulique (pompe, vérin, distributeur, protections), limiteur de pression et limiteur de débit.",
      "Intégration électrique : moteur triphasé, protections, schéma de commande.",
    ],
    resultats: [
      "Système capable de lever et maintenir en sécurité une charge > 1 tonne.",
      "Mouvement stable et maîtrisé (réglage de débit).",
      "Pression de service optimisée avec marge de sécurité intégrée.",
      "Architecture conforme aux standards hydrauliques industriels, transposable à d’autres applications.",
    ],
    pointsCles: [
      "Dimensionnement orienté application réelle",
      "Intégration hydraulique + électrique",
      "Sécurité dès la conception",
      "Schémas normalisés",
      "Vision système",
    ],
    image: img("p-mt-03.png"),
  },
  {
    title: "Conception et câblage de systèmes de sécurité industrielle",
    slug: "conception-et-cablage-de-systemes-de-securite-industrielle",
    categorie: "maintenance-terrain",
    year: 2025,
    excerpt:
      "Conception, intégration et validation d’une chaîne de sécurité : commande bimanuelle, barrières immatérielles et scanner laser sur environnement robotisé.",
    tags: ["Sécurité machine", "Câblage", "Scanner laser", "Barrières immatérielles", "Conformité"],
    objectif:
      "Concevoir et valider une architecture de sécurité industrielle intégrant commande bimanuelle, barrières immatérielles et scanner laser sur environnement robotisé (tests + simulation défaut).",
    methode: [
      "Réalisation des schémas de câblage et intégration des dispositifs.",
      "Mise en œuvre commande bimanuelle (24V / 48V).",
      "Paramétrage du scanner laser de sécurité.",
      "Tests fonctionnels, simulations de défaut et validation des réactions.",
      "Analyse d’anomalies, ajustements et validation finale.",
    ],
    resultats: [
      "Validation complète des circuits de sécurité.",
      "Conformité fonctionnelle des dispositifs de protection.",
      "Montée en compétence : architectures sécuritaires et diagnostic de défaut de chaîne sécurité.",
    ],
    pointsCles: [
      "Sécurité machine",
      "Lecture schémas électriques",
      "Diagnostic industriel",
      "Intégration systèmes automatisés",
      "Conformité réglementaire (fonctionnelle)",
    ],
    image: img("p-mt-04.png"),
  },
  {
    title: "Conception et pilotage d’un système thermique régulé",
    slug: "conception-et-pilotage-dun-systeme-thermique-regule",
    categorie: "maintenance-terrain",
    year: 2023,
    excerpt:
      "Conception d’un prototype régulé : modélisation 3D, capteurs, actionneurs et boucle de régulation (Arduino), stabilité ±2°C.",
    tags: ["Régulation", "Arduino", "Capteurs", "Automatisme", "SolidWorks"],
    objectif:
      "Concevoir et piloter un système thermique régulé intégrant capteurs, actionneurs et boucle de contrôle afin de maintenir une température cible stable, avec une approche projet (planification + validation).",
    methode: [
      "Planification et gestion du projet technique.",
      "Modélisation 3D sous SolidWorks.",
      "Conception d’une boucle de régulation (Arduino) + intégration capteurs température.",
      "Pilotage des actionneurs via relais statiques.",
      "Tests, ajustements et validation de la stabilité.",
    ],
    resultats: [
      "Prototype fonctionnel livré dans les délais.",
      "Stabilité thermique atteinte : ±2°C.",
      "Validation complète du système en phase test.",
      "Coordination efficace d’équipe projet.",
    ],
    pointsCles: [
      "Gestion de projet technique",
      "Automatisme / instrumentation",
      "Régulation & asservissement",
      "CAO SolidWorks",
      "Intégration capteurs / actionneurs",
    ],
    image: img("p-mt-05.png"),
  },
];