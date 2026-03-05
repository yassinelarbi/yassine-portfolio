import Link from "next/link";
import { formations } from "@/data/formations";

export default function Formations() {
  const list = formations.slice(0, 4);

  const badge = (type: string) => {
    if (type === "formation") return "Formation";
    if (type === "certification") return "Certification";
    return "Habilitation";
  };

  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <h2 className="h2">Formations & certifications</h2>
        <Link href="/formations" className="text-sm muted underline">
          Voir tout →
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {list.map((f) => (
          <div key={`${f.type}-${f.title}`} className="card card-hover p-5 space-y-2">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-semibold">{f.title}</h3>
              <span className="chip rounded-full px-2 py-0.5 text-xs">
                {badge(f.type)}
              </span>
            </div>

            <p className="text-sm muted">
              {[f.school, f.location, f.period].filter(Boolean).join(" • ")}
            </p>

            {f.details?.length ? (
              <ul className="list-disc pl-5 text-sm muted space-y-1 mt-2">
                {f.details.slice(0, 2).map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}