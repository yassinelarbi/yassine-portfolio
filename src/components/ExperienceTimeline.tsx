import Link from "next/link";
import { experiences } from "@/data/experiences";

export default function ExperienceTimeline() {
  const featured = experiences.slice(0, 3);

  return (
    <section className="space-y-6">

      <div className="flex items-end justify-between gap-4">
        <h2 className="h2">Expériences</h2>

        <Link href="/experience" className="text-sm muted underline">
          Voir toutes →
        </Link>
      </div>

      <ol className="space-y-6 border-l border-white/10 pl-6">
        {featured.map((e) => (
          <li key={e.slug} className="relative">

            {/* point timeline */}
            <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border border-white/20 bg-white/10"></span>

            <Link
              href={`/experience/${e.slug}`}
              className="card card-hover block p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-semibold">{e.title}</h3>
                <span className="text-xs muted">{e.period}</span>
              </div>

              <p className="mt-1 text-sm muted">
                {e.company} • {e.location}
              </p>

              <p className="mt-3 text-sm muted">
                {e.excerpt}
              </p>
            </Link>

          </li>
        ))}
      </ol>

    </section>
  );
}