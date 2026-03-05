import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  const title = "Yassine Larbi";
  const subtitle = "Méthodes Maintenance • Fiabilité • Digitalisation";
  const tagline =
    "Portfolio : projets TPM, fiabilité industrielle et digitalisation de la maintenance.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "white",
          background:
            "radial-gradient(900px 500px at 20% 0%, rgba(99,102,241,0.35), transparent 60%), radial-gradient(900px 500px at 90% 20%, rgba(34,197,94,0.22), transparent 55%), linear-gradient(180deg, #0b0f17 0%, #070a10 100%)",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              padding: "10px 16px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.06)",
              fontSize: 20,
            }}
          >
            Portfolio • Industrie 4.0
          </div>

          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.12)",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02))",
            }}
          />
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: "-1px",
            }}
          >
            {title}
          </div>

          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: "rgba(255,255,255,0.88)",
            }}
          >
            {subtitle}
          </div>

          <div
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.70)",
              maxWidth: 950,
            }}
          >
            {tagline}
          </div>

          {/* Tags */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {["MTBF", "MTTR", "TRS", "AMDEC", "NiFi", "Power BI"].map((t) => (
              <div
                key={t}
                style={{
                  padding: "8px 14px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.16)",
                  background: "rgba(255,255,255,0.06)",
                  fontSize: 18,
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <div>yassinelarbi.fr</div>
          <div>Maintenance • Fiabilité • Data</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}