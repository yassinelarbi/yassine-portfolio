import Link from "next/link";
import { projects } from "@/data/projects";

export default function RecentProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="space-y-6">

      <div className="flex items-end justify-between gap-4">
        <h2 className="h2">Projets récents</h2>

        <Link href="/realisations" className="text-sm muted underline">
          Voir tous →
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {featured.map((p) => (
          <Link
            key={p.slug}
            href={`/realisations/${p.categorie}/${p.slug}`}
            className="card card-hover block p-5"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-semibold">{p.title}</h3>
              {p.year && (
                <span className="text-xs muted">{p.year}</span>
              )}
            </div>

            {p.excerpt && (
              <p className="mt-2 text-sm muted">{p.excerpt}</p>
            )}

            {p.tags?.length && (
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="chip rounded-full px-2 py-0.5 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}