// src/app/twitter-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "72px",
          color: "white",
          background:
            "radial-gradient(1000px 500px at 20% 10%, rgba(99,102,241,0.35) 0%, rgba(0,0,0,0) 60%), linear-gradient(180deg, #0b0f17 0%, #070a10 100%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 980 }}>
          <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: "-1.2px" }}>
            Yassine Larbi
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, color: "rgba(255,255,255,0.88)" }}>
            Méthodes Maintenance • Fiabilité • Digitalisation (data/KPI)
          </div>
          <div style={{ fontSize: 22, color: "rgba(255,255,255,0.70)" }}>
            Expériences, réalisations et projets (TPM, fiabilité, data maintenance).
          </div>
          <div style={{ marginTop: 10, fontSize: 18, color: "rgba(255,255,255,0.55)" }}>
            yassinelarbi.fr
          </div>
        </div>
      </div>
    ),
    size
  );
}