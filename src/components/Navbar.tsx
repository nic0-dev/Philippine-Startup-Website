import Image from "next/image";
import Link from "next/link";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { LUMA_REGISTRATION_URL } from "@/lib/links";
import { RainbowButton } from "./magicui/rainbow-button";
export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/10 dark:border-white/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Startup home">
          {/* Mobile (smaller): PHSWP logo variants */}
          <span className="sm:hidden">
            <Image
              src="/ph-logo-dark.png"
              alt="PHSWP logo"
              width={600}
              height={140}
              className="block dark:hidden h-6 w-auto"
              priority
            />
            <Image
              src="/ph-logo.png"
              alt="PHSWP logo"
              width={600}
              height={140}
              className="hidden dark:block h-6 w-auto"
              priority
            />
          </span>
          {/* ≥ sm: Startup logo variants */}
          <span className="hidden sm:inline">
            <Image
              src="/startup-logo-dark.png"
              alt="Startup logo"
              width={600}
              height={140}
              className="block dark:hidden h-7 w-auto"
              priority
            />
            <Image
              src="/startup-logo.png"
              alt="Startup logo"
              width={600}
              height={140}
              className="hidden dark:block h-7 w-auto"
              priority
            />
          </span>
        </Link>
        <div className="flex items-center gap-3">
            <ul className="hidden md:flex items-center gap-6 text-sm">
                <li><a className="hover:underline underline-offset-4" href="#about">About</a></li>
                <li><a className="hover:underline underline-offset-4" href="#speakers">Speakers</a></li>
                <li><a className="hover:underline underline-offset-4" href="#mission">Mission</a></li>
                <li><a className="hover:underline underline-offset-4" href="#organizers">Organizers</a></li>
            </ul>
          <AnimatedThemeToggler className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer" />
          <RainbowButton asChild className="rounded-full">
            <a
              href={LUMA_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register
            </a>
          </RainbowButton>
        </div>
      </nav>
    </header>
  );
}
