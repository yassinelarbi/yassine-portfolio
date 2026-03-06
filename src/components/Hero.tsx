import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const about = [
    { label: "Localisation", value: "Hauts-de-France" },
    { label: "Mobilité", value: "Nationale" },
    { label: "Recherche", value: "Méthodes / Fiabilité / Data maintenance" },
  ];

  const chips = ["MTBF", "MTTR", "Disponibilité", "TRS", "Pareto"];

  return (
    <section className="relative grid items-start gap-10 md:grid-cols-[200px,1fr]">

      {/* Photo */}
      <div className="flex justify-center md:justify-start">
        <Image
          src="/images/profile.jpg"
          alt="Photo de profil"
          width={200}
          height={200}
          className="rounded-full border border-white/10 object-cover"
          priority
        />
      </div>

      {/* Colonne texte */}
      <div className="space-y-5 max-w-3xl lg:pr-[420px] min-w-0">

        <h1 className="text-4xl font-bold">
          Yassine Larbi
        </h1>

        {/* Ligne horizontale */}
        <p className="text-base md:text-lg muted md:whitespace-nowrap">
          Fiabilité industrielle • Méthodes maintenance • Data maintenance
        </p>

        {/* Description */}
        <p className="max-w-2xl muted">
          Spécialisé dans la fiabilisation des équipements industriels,
          la structuration des méthodes de maintenance et l’exploitation
          des données (MTBF, MTTR, disponibilité) afin de réduire les
          arrêts et améliorer la performance des installations.
        </p>

        {/* Boutons */}
        <div className="flex flex-wrap gap-3 pt-2">

          <a
            href="/cv/Yassine-Larbi-CV.pdf"
            download
            className="btn btn-primary"
          >
            Télécharger mon CV
          </a>

          <Link
            href="/cv"
            target="_blank"
            className="btn btn-secondary"
          >
            Aperçu CV
          </Link>

          <Link
            href="/realisations"
            className="btn btn-outline"
          >
            Voir mes réalisations
          </Link>

        </div>

        {/* Version mobile */}
        <div className="lg:hidden">
          <AboutCard about={about} chips={chips} />
        </div>

      </div>

      {/* Version desktop */}
      <div className="hidden lg:block">
        <div className="absolute right-0 top-0 w-[400px]">
          <AboutCard about={about} chips={chips} />
        </div>
      </div>

    </section>
  );
}

function AboutCard({
  about,
  chips,
}: {
  about: { label: string; value: string }[];
  chips: string[];
}) {
  return (
    <aside className="card p-6 space-y-4">

      <h2 className="font-semibold">
        À propos
      </h2>

      <div className="space-y-3">

        {about.map((item) => (
          <div
            key={item.label}
            className="grid grid-cols-[120px,1fr] items-baseline gap-3"
          >
            <span className="text-sm muted">
              {item.label} :
            </span>

            <span className="text-sm text-right">
              {item.value}
            </span>

          </div>
        ))}

      </div>

      <div className="pt-1 flex flex-wrap gap-2">

        {chips.map((t) => (
          <span
            key={t}
            className="chip rounded-full px-2 py-0.5 text-xs"
          >
            {t}
          </span>
        ))}

      </div>

    </aside>
  );
}