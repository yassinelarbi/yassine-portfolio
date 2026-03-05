"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProjectImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      {/* Thumbnail (taille réduite) */}
      <div className="card overflow-hidden">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl border border-white/10 bg-black/30 p-4">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="block w-full overflow-hidden rounded-lg"
            aria-label="Ouvrir l’image en plein écran"
          >
            {/* ✅ Conteneur qui limite la hauteur visible */}
            <div
              className="relative w-full overflow-hidden rounded-lg"
              style={{ maxHeight: 360 }}
            >
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={675}
                sizes="(max-width: 768px) 100vw, 1000px"
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                quality={85}
                priority
              />
            </div>
          </button>

          <p className="mt-3 text-xs muted">
            Astuce : clique sur l’image pour l’ouvrir en plein écran (ESC pour fermer).
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {open ? (
        <div
          className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div
              className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="btn btn-outline absolute right-4 top-4"
              >
                Fermer (ESC)
              </button>

              <div className="max-h-[85vh] overflow-auto">
                <Image
                  src={src}
                  alt={alt}
                  width={2200}
                  height={1400}
                  className="h-auto w-full object-contain"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}