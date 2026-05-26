import { useEffect, useState } from "react";

const navItems = [
  { label: "Profile", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => item.href.replace("#", ""))
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 160 && rect.bottom >= 160;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed left-1/2 top-6 z-50 w-[min(1100px,calc(100vw-2rem))] -translate-x-1/2">
      <div className="relative min-h-[86px] overflow-hidden rounded-[1.55rem] border border-white/10 bg-black/70 px-5 pt-3 shadow-2xl shadow-black/35 backdrop-blur-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(45,212,191,0.12),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(251,146,60,0.1),transparent_32%)]" />

        <div className="absolute inset-x-0 top-0 h-[52px] bg-[url('/assets/pixel-night-sky.png')] bg-repeat-x bg-top bg-[length:auto_52px] opacity-90" />

        <div className="relative z-20 flex min-h-[44px] items-center justify-between gap-4">
          <a
            href="#"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-orange-300/20 bg-black/35 font-mono text-sm font-black tracking-[0.22em] text-orange-100 shadow-lg shadow-black/25 transition hover:border-orange-300/50"
          >
            AH
          </a>

          <div className="flex items-center justify-center gap-4">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-black transition ${
                    isActive
                      ? "bg-teal-300/10 text-teal-100 shadow-[0_0_22px_rgba(45,212,191,0.18)]"
                      : "text-stone-300 hover:bg-white/[0.04] hover:text-teal-100"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            className="shrink-0 rounded-full border border-teal-300/25 bg-teal-300/10 px-5 py-2.5 text-sm font-black text-teal-100 transition hover:-translate-y-0.5 hover:border-teal-300/50"
          >
            Let&apos;s Connect
          </a>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[26px] overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 h-full bg-[url('/assets/pixel-grass-continuous.png')] bg-repeat-x bg-bottom bg-[length:auto_26px]" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-teal-300/35" />
        </div>

        <div className="cat-runner pointer-events-none absolute bottom-[-2px] left-0 z-30" />
      </div>
    </nav>
  );
}