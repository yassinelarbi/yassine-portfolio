export default function ContactPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="h1">Me contacter</h1>
        <p className="muted">Envoie-moi un message. Je réponds par email.</p>
      </div>

      <form
        action="https://formspree.io/f/xqeyzbdn"
        method="POST"
        className="card p-6 space-y-4 max-w-xl"
      >
        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="name">Nom</label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white outline-none focus:border-white/30"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white outline-none focus:border-white/30"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="subject">Objet</label>
          <input
            id="subject"
            name="subject"
            required
            autoComplete="off"
            className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white outline-none focus:border-white/30"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white outline-none focus:border-white/30"
          />
        </div>

        {/* honeypot anti-spam */}
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

        {/* optionnel : redirection après envoi */}
        <input type="hidden" name="_redirect" value="/contact?sent=1" />

        <button type="submit" className="btn btn-primary w-full">
          Envoyer
        </button>

        <p className="text-xs muted">
          Ou écris directement :{" "}
          <a className="underline" href="mailto:larbiyassine.pro@gmail.com">
            larbiyassine.pro@gmail.com
          </a>
        </p>
      </form>
    </section>
  );
}