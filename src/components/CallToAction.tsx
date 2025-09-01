"use client";
import { LUMA_REGISTRATION_URL } from "@/lib/links";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function CallToAction() {
  return (
    <section id="cta" className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to launch?</h3>
        <p className="mt-2 text-black/70 dark:text-white/70 max-w-xl mx-auto">
          Start building today with a clean, fast, and flexible foundation.
        </p>
        <div className="mt-6 flex items-center justify-center">
          <ShimmerButton
            onClick={() => window.open(LUMA_REGISTRATION_URL, "_blank", "noopener,noreferrer")}
            shimmerColor="var(--hero-shimmer)"
            shimmerSize="0.08em"
            shimmerDuration="3s"
            borderRadius="100px"
            background="var(--hero-btn-bg)"
            className="[--hero-btn-bg:#171717] dark:[--hero-btn-bg:#FFFFFF] [--hero-shimmer:#FFFFFF] dark:[--hero-shimmer:#171717] px-8 py-3"
          >
            Get Started
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
}
