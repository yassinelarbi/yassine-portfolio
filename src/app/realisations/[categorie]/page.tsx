import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryLabels, ProjectCategory, projects } from "@/data/projects";

const categories: ProjectCategory[] = [
  "maintenance-terrain",
  "fiabilite",
  "methodes",
  "digitalisation",
];

function isCategory(value: string): value is ProjectCategory {
  return categories.includes(value as ProjectCategory);
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categorie: string }>;
}) {
  const { categorie } = await params;

  const cat = (categorie ?? "").trim().toLowerCase();
  if (!isCategory(cat)) return notFound();

  const label = categoryLabels[cat];

  const items = projects
    .filter((p) => p.categorie === cat)
    .sort((a, b) => {
      const ay = a.year ?? 0;
      const by = b.year ?? 0;
      if (by !== ay) return by - ay;
      return a.title.localeCompare(b.title, "fr");
    });

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <Link href="/realisations" className="text-sm underline">
          ← Retour réalisations
        </Link>

        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{label}</h1>
            <p className="muted mt-1">{items.length} projet(s)</p>
          </div>
        </div>
      </header>

      {items.length === 0 ? (
        <p className="muted">Aucun projet pour le moment.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((p) => (
            <Link
              key={`${p.categorie}:${p.slug}`}
              href={`/realisations/${p.categorie}/${p.slug}`}
              className="card card-hover block p-5"
              aria-label={`Voir le projet : ${p.title}`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="font-semibold">{p.title}</h2>
                {p.year ? <span className="text-xs muted">{p.year}</span> : null}
              </div>

              <p className="mt-2 text-sm muted">{p.excerpt}</p>

              {p.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.slice(0, 8).map((t) => (
                    <span
                      key={t}
                      className="chip rounded-full px-2 py-0.5 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}