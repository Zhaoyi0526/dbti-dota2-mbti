"use client";

import type { SyntheticEvent } from "react";

function hideOnImageError(e: SyntheticEvent<HTMLImageElement>) {
  e.currentTarget.style.display = "none";
}

const PARTICLES = [
  { left: "8%", top: "18%", delay: "0s", size: 2 },
  { left: "22%", top: "72%", delay: "1.2s", size: 1.5 },
  { left: "35%", top: "34%", delay: "2.4s", size: 2.5 },
  { left: "48%", top: "88%", delay: "0.6s", size: 1 },
  { left: "61%", top: "22%", delay: "3.1s", size: 2 },
  { left: "74%", top: "58%", delay: "1.8s", size: 1.5 },
  { left: "88%", top: "38%", delay: "2.9s", size: 2 },
  { left: "15%", top: "48%", delay: "3.6s", size: 1 },
  { left: "52%", top: "12%", delay: "1.1s", size: 1.5 },
  { left: "68%", top: "82%", delay: "2.2s", size: 2 },
  { left: "92%", top: "68%", delay: "0.4s", size: 1 },
  { left: "42%", top: "62%", delay: "3.8s", size: 1.5 },
  { left: "28%", top: "14%", delay: "2.6s", size: 1 },
  { left: "78%", top: "28%", delay: "1.5s", size: 2 },
  { left: "6%", top: "84%", delay: "3.3s", size: 1.5 },
];

function AegisGlyph() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-[min(90vw,520px)] w-[min(90vw,520px)] text-purple-400/30"
      aria-hidden
    >
      <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="100" cy="100" r="62" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <path
        d="M100 24 L156 68 L132 156 L68 156 L44 68 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M100 52 L128 76 L118 124 L82 124 L72 76 Z"
        fill="currentColor"
        fillOpacity="0.15"
      />
      <line x1="100" y1="12" x2="100" y2="188" stroke="currentColor" strokeWidth="0.35" />
      <line x1="12" y1="100" x2="188" y2="100" stroke="currentColor" strokeWidth="0.35" />
    </svg>
  );
}

export function LandingCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Deep mesh gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(140% 100% at 0% 0%, #0d1a15 0%, #0b0c10 50%, #1c0a0a 100%)",
        }}
      />

      {/* Ghost archetype premonitions */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/personas/enigma.webp"
        alt=""
        className="landing-ghost absolute -left-[12%] top-[6%] h-[min(55vh,420px)] w-auto max-w-none opacity-[0.07] mix-blend-screen blur-[12px]"
        decoding="async"
        onError={hideOnImageError}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/personas/dazzle.webp"
        alt=""
        className="landing-ghost absolute -right-[10%] bottom-[4%] h-[min(50vh,380px)] w-auto max-w-none opacity-[0.08] mix-blend-lighten blur-[10px]"
        decoding="async"
        onError={hideOnImageError}
      />

      {/* Aegis / map glyph imprint */}
      <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 opacity-[0.05]">
        <AegisGlyph />
      </div>

      {/* Magic dust particles */}
      <div className="absolute inset-0">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="dbti-particle absolute rounded-full bg-purple-300/40"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0b0c10_78%)]" />
    </div>
  );
}
