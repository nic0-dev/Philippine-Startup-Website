export default function About() {
  return (
    <section id="about" className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Everything you need to launch</h2>
            <p className="mt-3 text-black/70 dark:text-white/70">
              Ship with confidence using a clean tech stack, responsive UI, and built-in best practices. Customize quickly and focus on solving real problems for your customers.
            </p>
          </div>
          <ul className="grid gap-4 text-sm">
            <li className="p-4 rounded-lg border border-black/10 dark:border-white/10">
              <strong className="block">Next.js 15 + TypeScript</strong>
              Production-ready foundation with modern tooling.
            </li>
            <li className="p-4 rounded-lg border border-black/10 dark:border-white/10">
              <strong className="block">Tailwind CSS</strong>
              Fast styling with sensible defaults and theming.
            </li>
            <li className="p-4 rounded-lg border border-black/10 dark:border-white/10">
              <strong className="block">Accessible components</strong>
              Simple, responsive blocks you can extend.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
