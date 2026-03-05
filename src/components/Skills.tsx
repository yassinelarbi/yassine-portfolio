export default function Skills() {
  const skills = [
    {
      title: "Maintenance industrielle",
      detail: "Correctif, préventif, amélioration"
    },
    {
      title: "Méthodes & fiabilité",
      detail: "AMDEC, Pareto pannes, MTBF/MTTR, disponibilité"
    },
    {
      title: "Automatisme",
      detail: "Diagnostic, capteurs/actionneurs, bus terrain (AS-i / Profinet / Profibus)"
    },
    {
      title: "Digitalisation",
      detail: "Pipeline data (NiFi), structuration des données, KPI, Power BI"
    },
    {
      title: "GMAO & documentation technique",
      detail: "Gammes de maintenance, plans, standards, gestion documentaire"
    }
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Compétences clés</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div
            key={s.title}
            className="card card-hover p-5"
          >
            <h3 className="font-semibold">{s.title}</h3>

            <p className="mt-2 text-sm muted">
              {s.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}