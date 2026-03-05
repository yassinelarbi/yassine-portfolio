export default function Stats() {
  const stats = [
    { value: "4+ ans", label: "Expérience en maintenance & méthodes" },
    { value: "20+ projets", label: "Fiabilité, méthodes, digitalisation" },
    { value: "4 axes", label: "Terrain • Fiabilité • Méthodes • Data" },
    { value: "KPI", label: "MTBF • MTTR • Dispo • TRS • Pareto pannes" },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Chiffres clés</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="card card-hover p-5"
          >
            <div className="text-3xl font-bold">{s.value}</div>
            <div className="mt-2 text-sm muted">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}