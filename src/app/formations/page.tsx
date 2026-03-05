import { formations, languages } from "@/data/formations";

const order = ["formation", "certification", "habilitation"] as const;

const titles: Record<string, string> = {
  formation: "Formations",
  certification: "Certifications",
  habilitation: "Habilitations",
};

const languageLabels: Record<string, string> = {
  natif: "Natif",
  bilingue: "Bilingue",
  courant: "Courant",
  intermediaire: "Intermédiaire",
  debutant: "Débutant",
};

// mapping simple pour barres (0–5)
const levelScore: Record<string, number> = {
  natif: 5,
  bilingue: 5,
  courant: 4,
  intermediaire: 3,
  debutant: 2,
};

function LevelBars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < value;
        return (
          <span
            key={i}
            className={[
              "h-2 w-6 rounded-full border",
              filled
                ? "bg-white/40 border-white/20"
                : "bg-white/5 border-white/10",
            ].join(" ")}
          />
        );
      })}
    </div>
  );
}

export default function FormationsPage() {
  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="h1">Formations, certifications & habilitations</h1>
        <p className="muted">
          Synthèse de mon parcours académique, de mes certifications et de mes validations terrain.
        </p>
      </div>

      {/* Formations / certifications / habilitations */}
      {order.map((type) => {
        const items = formations.filter((f) => f.type === type);
        if (!items.length) return null;

        return (
          <div key={type} className="space-y-4">
            <h2 className="h2">{titles[type]}</h2>

            <div className="grid gap-4 md:grid-cols-2">
              {items.map((f) => (
                <div key={`${f.type}-${f.title}`} className="card p-5 space-y-2">
                  <h3 className="font-semibold">{f.title}</h3>

                  <p className="text-sm muted">
                    {[f.school, f.location, f.period].filter(Boolean).join(" • ")}
                  </p>

                  {f.details?.length ? (
                    <ul className="list-disc pl-5 text-sm muted space-y-1 mt-2">
                      {f.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Langues (barres de niveau) */}
      <div className="space-y-4">
        <h2 className="h2">Langues</h2>

        <div className="grid gap-4 md:grid-cols-2">
          {languages.map((l) => {
            const score = levelScore[l.level] ?? 3;

            return (
              <div key={l.name} className="card p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="font-semibold">{l.name}</div>
                    <div className="text-sm muted">{languageLabels[l.level]}</div>
                  </div>

                  <LevelBars value={score} />
                </div>

                {l.note ? <p className="mt-3 text-sm muted">{l.note}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}