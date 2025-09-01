type Speaker = {
  name: string;
  title: string;
  bio?: string;
  initials: string;
};

// Last year's visionaries — using 6 speakers from the reference image
const SPEAKERS: Speaker[] = [
  { name: "Rajiv Ayyangar", title: "CEO of Product Hunt", initials: "RA" },
  { name: "Jay Fajardo", title: "ED of Ideaspace | QBO", initials: "JF" },
  { name: "Gina Romero", title: "Founder of Connected Women", initials: "GR" },
  { name: "Rhea See", title: "Co-founder & CEO of SLT", initials: "RS" },
  { name: "Dominic “Doc” Ligot", title: "Founder, CEO & CTO of Cirrolytix", initials: "DL" },
  { name: "Rene \"Butch\" Meily", title: "President of Ideaspace | QBO", initials: "RM" },
];

export default function Speakers() {
  return (
    <section id="speakers" className="border-t border-black/10 dark:border-white/10">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-24 py-16 sm:py-20">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Featured Speakers</h2>
          <p className="mt-2 text-black/70 dark:text-white/70">Meet last year’s visionaries.</p>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPEAKERS.map((s) => (
            <li key={s.name} className="rounded-xl border border-black/10 dark:border-white/10 p-5">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-sm font-medium">
                  {s.initials}
                </div>
                <div>
                  <p className="font-medium leading-none">{s.name}</p>
                  <p className="text-sm text-black/60 dark:text-white/60 mt-1">{s.title}</p>
                </div>
              </div>
              {s.bio && <p className="mt-4 text-sm text-black/70 dark:text-white/70">{s.bio}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
