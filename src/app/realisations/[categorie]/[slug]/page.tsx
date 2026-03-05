import { notFound } from "next/navigation";
import Link from "next/link";
import ProjectImage from "@/components/ProjectImage";
import { projects, categoryLabels } from "@/data/projects";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ categorie: string; slug: string }>;
}) {
  const { categorie, slug } = await params;

  const cat = (categorie || "").trim().toLowerCase();
  const s = (slug || "").trim().toLowerCase();

  const p = projects.find(
    (x) => x.categorie.toLowerCase() === cat && x.slug.toLowerCase() === s
  );

  if (!p) return notFound();

  const hasDetails =
    Boolean(p.objectif) ||
    Boolean(p.methode?.length) ||
    Boolean(p.resultats?.length) ||
    Boolean(p.pointsCles?.length);

  return (
    <article className="space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <Link className="text-sm underline" href={`/realisations/${p.categorie}`}>
          ← Retour {categoryLabels[p.categorie]}
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold">{p.title}</h1>
        <p className="muted max-w-3xl">{p.excerpt}</p>

        <div className="flex flex-wrap items-center gap-2">
          {p.year ? <span className="text-xs muted">{p.year}</span> : null}

          {p.tags?.map((t) => (
            <span key={t} className="chip rounded-full px-2 py-0.5 text-xs">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Image (zoom propre + plein écran) */}
      {p.image ? <ProjectImage src={p.image} alt={p.title} /> : null}

      {/* Contenu projet */}
      {!hasDetails ? (
        <section className="card p-5 space-y-2">
          <h2 className="text-lg font-semibold">Détails</h2>
          <p className="muted">
            Détails du projet en cours d’ajout (objectif, méthode, résultats).
          </p>
        </section>
      ) : (
        <div className="space-y-8">
          {p.objectif ? (
            <section className="space-y-2">
              <h2 className="text-lg font-semibold">Objectif</h2>
              <p className="muted">{p.objectif}</p>
            </section>
          ) : null}

          {p.methode?.length ? (
            <section className="space-y-2">
              <h2 className="text-lg font-semibold">Méthode</h2>
              <ul className="list-disc space-y-1 pl-5 muted">
                {p.methode.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {p.resultats?.length ? (
            <section className="space-y-2">
              <h2 className="text-lg font-semibold">Résultats</h2>
              <ul className="list-disc space-y-1 pl-5 muted">
                {p.resultats.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {p.pointsCles?.length ? (
            <section className="space-y-2">
              <h2 className="text-lg font-semibold">Points clés</h2>
              <ul className="list-disc space-y-1 pl-5 muted">
                {p.pointsCles.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      )}
    </article>
  );
}