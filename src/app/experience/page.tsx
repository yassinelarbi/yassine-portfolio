import Link from "next/link";
import { experiences } from "@/data/experiences";

export default function ExperiencePage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="h1">Expérience</h1>
        <p className="muted">Parcours détaillé, avec accès à une page par expérience.</p>
      </div>

      <div className="grid gap-4">
        {experiences.map((e) => (
          <Link
            key={e.slug}
            href={`/experience/${e.slug}`}
            className="card card-hover block p-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="text-lg font-semibold">{e.title}</h2>
              <span className="text-xs muted">{e.period}</span>
            </div>

            <p className="mt-1 text-sm muted">
              {e.company} • {e.location}
            </p>

            <p className="mt-3 text-sm muted">{e.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}