"use client";
import { LUMA_REGISTRATION_URL } from "@/lib/links";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Build your next big thing, faster
        </h1>
        <p className="mt-4 text-base sm:text-lg text-black/70 dark:text-white/70 max-w-2xl mx-auto">
          A modern starter to get your product off the ground with speed and style.
        </p>
        <div className="mt-8 flex items-center justify-center">
          <ShimmerButton
            onClick={() => window.open(LUMA_REGISTRATION_URL, "_blank", "noopener,noreferrer")}
            shimmerColor="var(--hero-shimmer)"
            shimmerSize="0.08em"
            shimmerDuration="3s"
            borderRadius="100px"
            background="var(--hero-btn-bg)"
            className="[--hero-btn-bg:#171717] dark:[--hero-btn-bg:#FFFFFF] [--hero-shimmer:#FFFFFF] dark:[--hero-shimmer:#171717] px-8 py-3"
          >
            Register
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
}
