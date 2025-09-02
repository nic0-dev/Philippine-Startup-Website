"use client";

import { useState } from "react";

type Track = {
  key: string;
  title: string;
  tagline: string;
  summary: string;
  colorVar: string;
};

const TRACKS: Track[] = [
  {
    key: "develop",
    title: "Develop",
    tagline: "the next Filipino tech giants",
    summary:
      "Get support, mentorship, and expert advice on developing and growing your ventures for idea- and early-stage startups.",
  colorVar: "var(--color-1)",
  },
  {
    key: "collaborate",
    title: "Collaborate",
    tagline: "with stakeholders across industries",
    summary:
      "Explore synergies with startups, corporates, government, enablers, and ecosystem stakeholders for early-stage ventures.",
  colorVar: "var(--color-2)",
  },
  {
    key: "invest",
    title: "Invest",
    tagline: "in the future of tech & innovation",
    summary:
      "Secure capital, explore synergies, and engage with prospective partners to increase potential deal flow for growth-stage startups.",
  colorVar: "var(--color-3)",
  },
  {
    key: "discover",
    title: "Discover",
    tagline: "the exciting world of tech startups",
    summary:
      "Learn about technopreneurship, the local startup ecosystem, and the ins and outs of launching your first venture for startup newbies.",
  colorVar: "var(--color-4)",
  },
  {
    key: "showcase",
    title: "Showcase",
    tagline: "your tech startup at PHSW25",
    summary:
      "Pitch to thousands of attendees, enablers, VCs, and accelerators across the country for early- and growth-stage startups.",
  colorVar: "var(--color-5)",
  },
];

export default function CoreMission() {
  const [active, setActive] = useState<Track>(TRACKS[0]);

  return (
    <section id="mission" className="border-top border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-24 py-16 sm:py-20">
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Five Dynamic Tracks</h2>
          <p className="mt-2 text-black/70 dark:text-white/70">
            PHSW is organized around five dynamic tracks, curated to help attendees discover sessions and activities tailored to their specific interests.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-4 md:gap-5">
          {TRACKS.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t)}
              aria-pressed={active.key === t.key}
              className="group relative overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-background/60 backdrop-blur p-4 text-left transition-transform focus-visible:ring-2 hover:-translate-y-0.5 focus:outline-none"
              style={{
                boxShadow:
                  active.key === t.key
                    ? `0 0 0 1px oklch(0.8 0.1 240 / 0.15), 0 6px 24px -8px oklch(0.6 0.1 240 / 0.2)`
                    : undefined,
              }}
            >
              <span
                className="absolute inset-x-0 -bottom-12 h-24 opacity-20 blur-2xl"
                style={{ background: `radial-gradient(50% 60% at 50% 100%, ${t.colorVar}, transparent)` }}
              />
              <div className="relative z-10">
                <div className="text-xs font-mono tracking-widest" style={{ color: t.colorVar }}>{t.title}</div>
                <div className="mt-1 font-semibold">{t.tagline}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-black/10 dark:border-white/10 bg-background/70 backdrop-blur p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div
              className="h-10 w-10 rounded-none md:rounded-md flex items-center justify-center border"
              style={{ borderColor: active.colorVar }}
              aria-hidden
            >
              {active.key === "develop" && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: active.colorVar }}
                >
                  <path d="M8 8L4 12L8 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 8L20 12L16 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 6L12 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              )}
              {active.key === "collaborate" && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: active.colorVar }}
                >
                  <path d="M8.5 13.5c-1.4 1.4-3.6 1.4-5 0s-1.4-3.6 0-5l3-3c1.4-1.4 3.6-1.4 5 0 1.1 1.1 1.3 2.7.7 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15.5 10.5c1.4-1.4 3.6-1.4 5 0s1.4 3.6 0 5l-3 3c-1.4 1.4-3.6 1.4-5 0-1.1-1.1-1.3-2.7-.7-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 12h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              )}
              {active.key === "invest" && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: active.colorVar }}
                >
                  <path d="M3 17l6-6 4 4 8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 7h3v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {active.key === "discover" && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: active.colorVar }}
                >
                  <circle cx="11" cy="11" r="5" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              )}
              {active.key === "showcase" && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: active.colorVar }}
                >
                  <path d="M4 12l10-4v8L4 12z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M14 12h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M6 14v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                {active.title} <span className="text-black/60 dark:text-white/60">— {active.tagline}</span>
              </h3>
              <p className="mt-2 text-black/70 dark:text-white/70">{active.summary}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
