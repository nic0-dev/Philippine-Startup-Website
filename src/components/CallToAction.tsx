"use client";
import { LUMA_REGISTRATION_URL } from "@/lib/links";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Facebook, Linkedin, Youtube } from "lucide-react";

export default function CallToAction() {
  return (
  <section id="cta" className="relative isolate overflow-hidden [contain:paint] border-t border-black/10 dark:border-white/10">
      {/* Subtle bottom-right blue glow behind content */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 z-[1] w-[70vw] max-w-[1100px] h-[32svh] sm:h-[46svh] will-change-transform [transform:translate(4%,6%)] sm:[transform:translate(10%,12%)]"
        aria-hidden
        style={{
          background:
            "radial-gradient(60% 60% at 100% 100%, color-mix(in oklch, var(--brand-blue) 75%, white 25%) 0%, color-mix(in oklch, var(--brand-blue) 40%, transparent) 50%, transparent 78%)",
          filter: "blur(32px)",
          opacity: 0.26,
        }}
      />
  <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-24 py-20 sm:py-28 text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Join Philippine Startup Week</h3>
        <p className="mt-2 text-black/70 dark:text-white/70 max-w-2xl mx-auto">
          Be part of the country’s biggest startup gathering. Learn, connect, and showcase your work with founders, enablers, investors, and innovators.
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
            Register Now
          </ShimmerButton>
        </div>
        <p className="mt-6 text-sm text-black/60 dark:text-white/60">
          For partnership or support email us at <a href="mailto:partner@phstartupweek.com" className="underline underline-offset-4">partner@phstartupweek.com</a>
        </p>
        {/* Social media links */}
    <div className="mt-6 flex items-center justify-center gap-5 text-black/70 dark:text-white/70">
          <a
            href="https://www.facebook.com/PhilippineStartupWeek/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Philippine Startup Week on Facebook"
            className="transition-colors hover:text-black dark:hover:text-white"
            title="Facebook"
          >
      <Facebook className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
          </a>
          <a
            href="https://www.linkedin.com/company/philippine-startup-week/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Philippine Startup Week on LinkedIn"
            className="transition-colors hover:text-black dark:hover:text-white"
            title="LinkedIn"
          >
      <Linkedin className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
          </a>
          <a
            href="https://www.youtube.com/c/PhilippineStartupWeek"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Philippine Startup Week on YouTube"
            className="transition-colors hover:text-black dark:hover:text-white"
            title="YouTube"
          >
      <Youtube className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
