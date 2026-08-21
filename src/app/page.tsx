import { Logo } from "@/components/Logo";
import { legalLinks, links, site } from "@/lib/site";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
      <section className="surface w-full max-w-2xl rounded-3xl px-6 py-10 shadow-2xl shadow-black/10 sm:px-12 sm:py-12">
        <div className="flex flex-col items-center text-center">
          <Logo className="h-20 w-20 sm:h-28 sm:w-28" />

          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:mt-7 sm:text-5xl">
            {site.name}
          </h1>

          <p className="mt-3 text-base text-muted text-balance sm:text-xl">{site.tagline}</p>

          <p className="mt-7 max-w-lg text-balance text-[0.95rem] leading-relaxed text-muted sm:mt-8 sm:text-base">
            Skye Powered is the independent software studio of{" "}
            <span className="font-medium text-foreground">Kevin Barnes</span>,
            covering app development and consulting work.
          </p>

          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-[0.95rem] font-medium text-on-accent sm:px-7 sm:text-base transition-opacity hover:opacity-85"
          >
            {site.email}
          </a>
        </div>

        <nav
          aria-label="Elsewhere"
          className="mt-9 grid gap-3 border-t border-black/10 pt-7 dark:border-white/15 sm:mt-10 sm:pt-8 sm:grid-cols-3"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-tile surface rounded-2xl px-4 py-4 text-center"
            >
              <span className="block font-medium">{link.label}</span>
              <span className="mt-0.5 block text-sm text-muted">
                {link.blurb}
              </span>
            </a>
          ))}
        </nav>
      </section>

      <footer className="mt-8 flex flex-col items-center gap-2 text-sm text-muted">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        {legalLinks.length > 0 && (
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <a className="underline underline-offset-4" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </footer>
    </main>
  );
}
