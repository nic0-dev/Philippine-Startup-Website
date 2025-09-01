import Image from "next/image";
import Link from "next/link";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { LUMA_REGISTRATION_URL } from "@/lib/links";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 dark:border-white/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Startup home">
          {/* Light mode: use the dark logo; Dark mode: use the light logo */}
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
        </Link>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li><a className="hover:underline underline-offset-4" href="#about">About</a></li>
          <li><a className="hover:underline underline-offset-4" href="#speakers">Speakers</a></li>
          <li><a className="hover:underline underline-offset-4" href="#mission">Mission</a></li>
          <li><a className="hover:underline underline-offset-4" href="#organizers">Organizers</a></li>
          <li><a className="hover:underline underline-offset-4" href="#cta">Join</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <AnimatedThemeToggler className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer" />
          <a
            href={LUMA_REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            Register
          </a>
        </div>
      </nav>
    </header>
  );
}
