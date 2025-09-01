"use client";

import Image from "next/image";
import { BorderBeam } from "@/components/magicui/border-beam";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

type Logo = { src: string; alt: string };

const LOGOS: Logo[] = [
  { src: "/dost-logo.jpg", alt: "DOST logo" },
  { src: "/dti-logo.png", alt: "DTI logo" },
  { src: "/dict-logo.png", alt: "DICT logo" },
];

export default function FoundingOrganizers() {
  return (
    <section id="organizers" className="relative isolate overflow-hidden border-t border-black/10 dark:border-white/10">
      {/* Background flickering grid */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#0F4D93"
          maxOpacity={0.25}
          flickerChance={0.12}
        />
      </div>
      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-24 py-16 sm:py-20">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Founding Organizers</h2>
          <p className="mt-2 text-black/70 dark:text-white/70">Since 2019, Philippine Startup Week has been the country’s largest startup conference—led by DOST, DTI, and DICT.</p>
        </div>
        {/* Three organizer logos with animated border beams */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 px-24">
          {LOGOS.map((logo, i) => (
            <div key={logo.alt} className="relative">
              {/* Card content */}
              <div className="relative z-10 rounded-2xl border border-black/10 bg-white text-neutral-900 p-6 sm:p-8 flex items-center justify-center h-40 sm:h-44 md:h-48">
                <div
                  className="relative size-28 sm:size-32 md:size-36"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 10rem, (max-width: 768px) 14rem, 16rem"
                  />
                </div>
              </div>
              {/* Outside border beam */}
              <div className="pointer-events-none absolute -inset-1 rounded-2xl -z-10" aria-hidden>
                <BorderBeam
                  size={160}
                  duration={10}
                  colorFrom="var(--brand-blue)"
                  colorTo="var(--brand-red)"
                  borderWidth={2}
                  className="opacity-70"
                  initialOffset={(i * 25) % 100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
