import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] grid place-items-center px-6 py-24 text-center">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-2 text-black/70 dark:text-white/70">The page you’re looking for doesn’t exist.</p>
        <div className="mt-6">
          <Link href="/" className="rounded-full border border-black/10 dark:border-white/20 px-5 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10">
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
