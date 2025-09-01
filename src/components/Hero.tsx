"use client";
import { LUMA_REGISTRATION_URL } from "@/lib/links";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { GridBeams } from "@/components/magicui/grid-beams";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  // Countdown to Philippine Startup Week start date (Nov 10, 2025, 00:00 GMT+8)
  const START_AT = new Date("2025-11-10T00:00:00+08:00").getTime();
  const [timeLeft, setTimeLeft] = useState(() => ({ days: 0, hours: 0, minutes: 0, seconds: 0 }));

  useEffect(() => {
    const calc = () => {
      const now = Date.now();
      const diff = Math.max(0, START_AT - now);
      const day = 24 * 60 * 60 * 1000;
      const hour = 60 * 60 * 1000;
      const minute = 60 * 1000;
      const days = Math.floor(diff / day);
      const hours = Math.floor((diff % day) / hour);
      const minutes = Math.floor((diff % hour) / minute);
      const seconds = Math.floor((diff % minute) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
        <GridBeams
            className="bg-none"
            gridSize={48}
            gridColor={"color-mix(in oklch, var(--brand-yellow) 5%, transparent)"}
            rayCount={8}
            rayOpacity={0.25}
            raySpeed={1}
            rayLength="80vh"
            gridFadeStart={24}
            gridFadeEnd={88}
            backgroundColor="transparent"
        >
        <div className="pointer-events-none absolute top-32 md:top-12 right-[2vw] md:right-[-6vw] lg:top-12 lg:right-[-2vw] z-[5]">
            <Image
                src="/ph-map-dark.png"
                alt=""
                width={800}
                height={800}
                className="block dark:hidden lg:w-[46vw] max-w-[42rem] h-auto opacity-20 select-none"
                priority
            />
            <Image
                src="/ph-map-light.png"
                alt=""
                width={800}
                height={800}
                className="hidden dark:block w-[75vw] lg:w-[46vw] max-w-[42rem] h-auto opacity-20 select-none"
                priority
            />
        </div>
        {/* Subtle bottom-left radial glow above beams & map, below text */}
        <div
            className="pointer-events-none absolute bottom-0 left-0 z-[8] w-[72vw] max-w-[980px] h-[46vh]"
            aria-hidden
            style={{
                background:
                    "radial-gradient(60% 60% at 0% 100%, color-mix(in oklch, var(--brand-yellow) 65%, var(--brand-red) 35%) 0%, color-mix(in oklch, var(--brand-yellow) 35%, transparent) 44%, transparent 72%)",
                filter: "blur(34px)",
                opacity: 0.22,
                transform: "translate(-6%, 8%)",
            }}
        />
        <div className="relative z-10 mx-auto max-w-screen-xl px-8 lg:px-24 py-12 sm:py-18 mt-16">
            <p className="font-mono uppercase pb-4 text-xs sm:text-sm tracking-widest text-[var(--brand-blue-contrast)] text-center sm:text-left">
                <span className="block sm:inline">7th Philippine Startup Week</span>
                <span className="hidden sm:inline">&nbsp;|&nbsp;</span>
                <span className="block sm:inline">November 10-14, 2025</span>
            </p>
            <div className="relative flex w-full sm:w-auto justify-center sm:justify-start mx-auto sm:mx-0">
                <div className="relative inline-flex w-fit max-w-full flex-row flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 md:gap-4 gap-y-1 items-baseline">
                    <Image
                        src="/ph-logo-dark.png"
                        alt="PHSWP Logo"
                        width={600}
                        height={140}
                        className="block dark:hidden h-10 sm:h-12 md:h-14 lg:h-18 w-auto"
                        sizes="(max-width: 640px) 120px, (max-width: 768px) 144px, (max-width: 1024px) 160px, 192px"
                        priority
                    />
                    <Image
                        src="/ph-logo.png"
                        alt="PHSWP Logo"
                        width={600}
                        height={40}
                        className="hidden dark:block h-10 sm:h-12 md:h-14 lg:h-18 w-auto"
                        sizes="(max-width: 640px) 120px, (max-width: 768px) 144px, (max-width: 1024px) 160px, 192px"
                        priority
                    />
                    <h1 className="mt-2 sm:mt-3 text-3xl sm:text-5xl md:text-6xl leading-[1.1] font-bold tracking-tight relative inline-block text-center sm:text-left">
                        <span className="relative">Startup Week 2025</span>
                    </h1>
                    {/* Underline spans only the logo + title group */}
                    <span
                        aria-hidden
                        className="pointer-events-none absolute left-0 -bottom-1 h-[2px] sm:h-[3px] w-full rounded-full"
                        style={{
                            background:
                                "linear-gradient(90deg, var(--brand-red), var(--brand-yellow), var(--brand-blue))",
                            WebkitMaskImage:
                                "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                            maskImage:
                                "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                        }}
                    />
                </div>
            </div>
            {/* Event date */}
            <p className="mt-4 text-sm sm:text-md text-black/70 dark:text-white/70 max-w-2xl text-center sm:text-left mx-auto ml-[-1rem] sm:ml-0">
            Igniting Filipino innovation. The country’s largest startup conference uniting founders, investors, and partners.
            </p>
            {/* Countdown grid */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg">
            <div className="rounded-xl bg-white/20 dark:bg-black/20 border border-black/10 dark:border-white/10 p-4 text-center">
                <div className="text-3xl sm:text-4xl font-bold tabular-nums">{timeLeft.days}</div>
                <div className="mt-1 text-xs tracking-widest text-black/70 dark:text-white/70">DAYS</div>
            </div>
            <div className="rounded-xl bg-white/20 dark:bg-black/20 border border-black/10 dark:border-white/10 p-4 text-center">
                <div className="text-3xl sm:text-4xl font-bold tabular-nums">{String(timeLeft.hours).padStart(2, "0")}</div>
                <div className="mt-1 text-xs tracking-widest text-black/70 dark:text-white/70">HOURS</div>
            </div>
            <div className="rounded-xl bg-white/20 dark:bg-black/20 border border-black/10 dark:border-white/10 p-4 text-center">
                <div className="text-3xl sm:text-4xl font-bold tabular-nums">{String(timeLeft.minutes).padStart(2, "0")}</div>
                <div className="mt-1 text-xs tracking-widest text-black/70 dark:text-white/70">MINUTES</div>
            </div>
            <div className="rounded-xl bg-white/20 dark:bg-black/20 border border-black/10 dark:border-white/10 p-4 text-center">
                <div className="text-3xl sm:text-4xl font-bold tabular-nums">{String(timeLeft.seconds).padStart(2, "0")}</div>
                <div className="mt-1 text-xs tracking-widest text-black/70 dark:text-white/70">SECONDS</div>
            </div>
            </div>
            <div className="mt-8 flex items-center justify-center sm:justify-start">
            <ShimmerButton
                onClick={() => window.open(LUMA_REGISTRATION_URL, "_blank", "noopener,noreferrer")}
                shimmerColor="var(--hero-shimmer)"
                shimmerSize="0.08em"
                shimmerDuration="3s"
                borderRadius="100px"
                background="var(--hero-btn-bg)"
                className="[--hero-btn-bg:#171717] dark:[--hero-btn-bg:#FFFFFF] [--hero-shimmer:#FFFFFF] dark:[--hero-shimmer:#171717] px-8 py-3"
            >
                Register Now
            </ShimmerButton>
            </div>
        </div>
    </GridBeams>
    </section>
  );
}
