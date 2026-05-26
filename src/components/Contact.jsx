import {
  ArrowUpRight,
  Code2,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";

const quickLinks = [
  { label: "Profile", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
];

const connectLinks = [
  {
    label: "Email",
    value: "hatkar18@gmail.com",
    href: "mailto:hatkar18@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/AneeshHatkar",
    href: "https://linkedin.com/in/AneeshHatkar",
    icon: Code2,
  },
  {
    label: "GitHub",
    value: "GitHub profile",
    href: "https://github.com/",
    icon: Code2,
  },
];

export default function Contact() {
  return (
    <footer id="contact" className="relative px-4 pb-8 pt-20 sm:px-6 sm:pb-10 sm:pt-24 lg:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#090A0F]/78 p-8 shadow-2xl shadow-black/35 backdrop-blur-xl md:p-10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/70 to-transparent" />
          <div className="absolute right-[-140px] top-[-140px] h-80 w-80 rounded-full bg-teal-300/10 blur-3xl" />
          <div className="absolute bottom-[-160px] left-[-160px] h-80 w-80 rounded-full bg-orange-300/10 blur-3xl" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.7fr_1fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-teal-200">
                <Send className="h-4 w-4" />
                Contact Console
              </div>

              <h2 className="font-display text-4xl font-black tracking-tight text-stone-100 md:text-5xl">
                Let&apos;s build something reliable.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-stone-400">
                I&apos;m interested in AI/ML engineering, evaluation systems,
                robotics workflows, computer vision pipelines, risk-aware AI,
                and backend-heavy ML products.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="rounded-full border border-orange-300/15 bg-orange-300/5 px-4 py-2 text-sm font-bold text-orange-100">
                  Open to ML / AI roles
                </div>
                <div className="rounded-full border border-teal-300/15 bg-teal-300/5 px-4 py-2 text-sm font-bold text-teal-100">
                  Based in Washington D.C.
                </div>
              </div>
            </div>

            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-stone-500">
                Navigate
              </p>

              <div className="grid gap-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm font-bold text-stone-300 transition hover:border-teal-300/30 hover:text-teal-100"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 text-stone-600 transition group-hover:text-teal-200" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-stone-500">
                Connect
              </p>

              <div className="grid gap-3">
                {connectLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={
                        link.href.startsWith("mailto:") ? undefined : "_blank"
                      }
                      rel={
                        link.href.startsWith("mailto:")
                          ? undefined
                          : "noreferrer"
                      }
                      className="group rounded-2xl border border-white/10 bg-black/25 p-4 transition hover:border-orange-300/30"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-300/20 bg-orange-300/10 text-orange-200">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="min-w-0">
                          <p className="font-bold text-stone-100">
                            {link.label}
                          </p>
                          <p className="mt-1 truncate text-sm text-stone-500 group-hover:text-stone-300">
                            {link.value}
                          </p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-10 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-4 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-teal-300" />
                <span>
                  Built with React, Tailwind, and a lot of late-night polish.
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-orange-300" />
                  <span>© 2026 Aneesh Hatkar</span>
                </div>

                <div className="hidden h-1 w-1 rounded-full bg-stone-700 md:block" />

                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-teal-300" />
                  <span>Washington D.C.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}