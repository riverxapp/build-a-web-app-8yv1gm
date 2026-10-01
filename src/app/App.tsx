import { ArrowRight, Check, Quote, Zap } from "lucide-react";
import "../styles/globals.css";

const features = [
  {
    icon: Zap,
    title: "Lightning fast",
    body: "Optimized from the ground up so your pages load in milliseconds, not seconds.",
  },
  {
    icon: Check,
    title: "Zero config",
    body: "Sensible defaults out of the box. No endless setup, no guesswork.",
  },
  {
    icon: Quote,
    title: "Made for you",
    body: "Every detail is yours to tweak — the design adapts to your brand, not the reverse.",
  },
];

export function App() {
  return (
    <div className="min-h-screen bg-white font-serif text-neutral-900">
      {/* Announcement bar */}
      <div className="bg-neutral-900 px-4 py-2 text-center text-xs tracking-widest text-neutral-200 uppercase">
        New — Spring release is live
      </div>

      {/* Nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-xl font-bold tracking-tight">Atelier</span>
        <nav className="hidden items-center gap-8 text-sm text-neutral-600 sm:flex">
          <a href="#work" className="transition-colors hover:text-neutral-900">Work</a>
          <a href="#about" className="transition-colors hover:text-neutral-900">About</a>
          <a href="#contact" className="transition-colors hover:text-neutral-900">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-none border border-neutral-900 px-5 py-2 text-sm font-medium transition-colors hover:bg-neutral-900 hover:text-white"
        >
          Book a call
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-28 pt-20 sm:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-xs tracking-[0.3em] text-neutral-500 uppercase">
              Studio & Design Consultancy
            </p>
            <h1 className="text-5xl leading-[1.05] font-medium tracking-tight sm:text-7xl">
              Design that speaks before you do.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-neutral-600">
              We craft websites and identities for ambitious teams who care
              about the details as much as we do.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-neutral-900 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
              >
                Start a project <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#work" className="text-sm text-neutral-600 underline underline-offset-4 hover:text-neutral-900">
                See our work
              </a>
            </div>
          </div>

          {/* Hero visual */}
          <div className="hidden aspect-[4/5] items-center justify-center bg-gradient-to-br from-amber-100 via-orange-50 to-neutral-100 lg:flex">
            <div className="text-center">
              <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-neutral-900" />
              <p className="text-sm tracking-widest text-neutral-500 uppercase">Est. 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-neutral-200 px-6 py-12 text-center">
          {[
            ["120+", "Projects delivered"],
            ["14", "Design awards"],
            ["98%", "Client retention"],
          ].map(([n, label]) => (
            <div key={label}>
              <p className="text-3xl font-medium sm:text-4xl">{n}</p>
              <p className="mt-1 text-xs tracking-widest text-neutral-500 uppercase">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
          What we do best
        </h2>
        <div className="mt-12 grid gap-px border border-neutral-200 bg-neutral-200 sm:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <div key={title} className="group bg-white p-8 transition-colors hover:bg-neutral-50">
              <Icon className="h-6 w-6 text-amber-600" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-medium">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section id="about" className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <blockquote className="text-2xl leading-relaxed font-light italic sm:text-3xl">
          “Working with Atelier changed how our whole company thinks about
          design. The site pays for itself every single week.”
        </blockquote>
        <p className="mt-8 text-sm tracking-widest text-neutral-500 uppercase">
          Jamie Lee — Founder, Northwind
        </p>
      </section>

      {/* CTA */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="flex flex-col items-center gap-6 bg-neutral-900 px-6 py-16 text-center text-white sm:px-16">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="max-w-md text-neutral-400">
            Tell us what you're building. We'll reply within one
            business day.
          </p>
          <a
            href="mailto:hello@atelier.example"
            className="mt-2 bg-white px-8 py-3.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-amber-100"
          >
            hello@atelier.example
          </a>
        </div>
      </section>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-xs text-neutral-500">
          <span>&copy; {new Date().getFullYear()} Atelier Studio</span>
          <span>Made with care</span>
        </div>
      </footer>
    </div>
  );
}
