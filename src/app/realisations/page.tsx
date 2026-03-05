import Link from "next/link";
import { categoryLabels, ProjectCategory, projects } from "@/data/projects";

const categories: ProjectCategory[] = [
  "maintenance-terrain",
  "fiabilite",
  "methodes",
  "digitalisation",
];

const categoryDescriptions: Record<ProjectCategory, string> = {
  "maintenance-terrain":
    "Interventions terrain, diagnostic, remise en service et sécurisation.",
  fiabilite:
    "Analyse pannes, RCA, TRS, MTBF/MTTR et plans d’actions fiabilité.",
  methodes:
    "Structuration GMAO, standards, pièces de rechange et pilotage performance.",
  digitalisation:
    "Automatisation des données maintenance, KPI et exploitation Power BI.",
};

export default function RealisationsHubPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Réalisations</h1>
        <p className="muted max-w-2xl">Mes projets classés par thématique.</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {categories.map((cat) => {
          const items = projects.filter((p) => p.categorie === cat);
          const tags = Array.from(
            new Set(
              items
                .flatMap((p) => p.tags ?? [])
                .map((t) => t.trim())
                .filter(Boolean)
            )
          ).slice(0, 4);

          return (
            <Link
              key={cat}
              href={`/realisations/${cat}`}
              className="card card-hover block p-5"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-lg font-semibold">{categoryLabels[cat]}</h2>
                <span className="text-xs muted">{items.length} projet(s)</span>
              </div>

              <p className="mt-2 text-sm muted">{categoryDescriptions[cat]}</p>

              {tags.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span key={t} className="chip rounded-full px-2 py-0.5 text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-4 text-sm underline">
                Voir les projets →
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}