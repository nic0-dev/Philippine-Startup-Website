export default function CoreMission() {
  return (
    <section id="mission" className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Our Core Mission</h2>
            <p className="mt-3 text-black/70 dark:text-white/70">
              Empower Filipino founders to turn bold ideas into enduring companies through community, mentorship, and access to capital.
            </p>
          </div>
          <ul className="grid gap-4 text-sm">
            <li className="p-4 rounded-lg border border-black/10 dark:border-white/10">
              <strong className="block">Connect</strong>
              We bring founders, operators, and investors together.
            </li>
            <li className="p-4 rounded-lg border border-black/10 dark:border-white/10">
              <strong className="block">Educate</strong>
              Workshops and resources for every stage of the journey.
            </li>
            <li className="p-4 rounded-lg border border-black/10 dark:border-white/10">
              <strong className="block">Accelerate</strong>
              Programs designed to help you ship, grow, and fundraise.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
