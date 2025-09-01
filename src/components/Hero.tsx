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
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#cta" className="rounded-full bg-foreground text-background px-6 py-3 text-sm sm:text-base font-medium hover:opacity-90">
            Get started free
          </a>
          <a href="#about" className="rounded-full border border-black/10 dark:border-white/20 px-6 py-3 text-sm sm:text-base hover:bg-black/5 dark:hover:bg-white/10">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
