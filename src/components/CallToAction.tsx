export default function CallToAction() {
  return (
    <section id="cta" className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to launch?</h3>
        <p className="mt-2 text-black/70 dark:text-white/70 max-w-xl mx-auto">
          Start building today with a clean, fast, and flexible foundation.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#" className="rounded-full bg-foreground text-background px-6 py-3 text-sm sm:text-base font-medium hover:opacity-90">
            Create account
          </a>
          <a href="#" className="rounded-full border border-black/10 dark:border-white/20 px-6 py-3 text-sm sm:text-base hover:bg-black/5 dark:hover:bg-white/10">
            Contact sales
          </a>
        </div>
      </div>
    </section>
  );
}
