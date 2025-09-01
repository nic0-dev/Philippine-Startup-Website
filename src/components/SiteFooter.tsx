export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-sm">
        <p className="text-black/60 dark:text-white/60">© {new Date().getFullYear()} Startup. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a className="hover:underline underline-offset-4" href="#">Docs</a>
          <a className="hover:underline underline-offset-4" href="#">Privacy</a>
          <a className="hover:underline underline-offset-4" href="#">Terms</a>
        </nav>
      </div>
    </footer>
  );
}
