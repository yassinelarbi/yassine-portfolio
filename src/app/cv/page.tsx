export default function CVPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">CV</h1>

      <div className="flex gap-3">
        <a
          href="/cv/Yassine-Larbi-CV.pdf"
          download
          className="rounded-md bg-black px-4 py-2 text-sm text-white hover:opacity-90"
        >
          Télécharger le CV
        </a>

        <a
          href="/cv/Yassine-Larbi-CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="rounded-md border px-4 py-2 text-sm hover:bg-neutral-50"
        >
          Ouvrir dans un nouvel onglet
        </a>
      </div>

      <iframe
        src="/cv/Yassine-Larbi-CV.pdf"
        className="h-[80vh] w-full rounded-xl border"
        title="Aperçu CV"
      />
    </section>
  );
}