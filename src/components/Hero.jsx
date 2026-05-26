import { ArrowRight, Code2, Mail, Terminal, Zap } from "lucide-react";

const heroLinks = [
  {
    label: "GitHub",
    href: "https://github.com/AneeshHatkar",
    icon: Code2,
    tone: "teal",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/AneeshHatkar",
    icon: Code2,
    tone: "teal",
  },
  {
    label: "Email",
    href: "mailto:hatkar18@gmail.com",
    icon: Mail,
    tone: "orange",
  },
];

function HeroLink({ link }) {
  const Icon = link.icon;

  const tone =
    link.tone === "orange"
      ? "hover:border-orange-300/40 hover:text-orange-100"
      : "hover:border-teal-300/40 hover:text-teal-100";

  return (
    <a
      href={link.href}
      target={link.href.startsWith("mailto:") ? undefined : "_blank"}
      rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
      className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-stone-300 transition hover:-translate-y-0.5 ${tone}`}
    >
      <Icon className="h-4 w-4" />
      {link.label}
    </a>
  );
}

function HeroGlobe() {
  function handleMouseMove(event) {
    const box = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - box.left) / box.width) * 100;
    const y = ((event.clientY - box.top) / box.height) * 100;

    event.currentTarget.style.setProperty("--mx", `${x}%`);
    event.currentTarget.style.setProperty("--my", `${y}%`);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="hero-globe-card relative h-[285px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/35"
    >
      <div className="hero-space-base absolute inset-0" />
      <div className="hero-space-grid absolute inset-0" />
      <div className="hero-space-orbs absolute inset-0" />
      <div className="hero-mouse-aurora absolute inset-0" />

      <div className="absolute left-[12%] top-[18%] h-1.5 w-1.5 rounded-full bg-teal-200/70 shadow-[0_0_16px_rgba(45,212,191,0.7)]" />
      <div className="absolute right-[18%] top-[28%] h-2 w-2 rounded-full bg-orange-200/70 shadow-[0_0_16px_rgba(251,191,36,0.55)]" />
      <div className="absolute bottom-[20%] left-[20%] h-1.5 w-1.5 rounded-full bg-stone-200/55" />
      <div className="absolute right-[12%] top-[15%] h-8 w-8 rounded-full border border-teal-300/10 bg-teal-300/5" />
      <div className="absolute bottom-[15%] right-[23%] h-4 w-4 rounded-full border border-orange-300/10 bg-orange-300/5" />

      <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2">
          <div className="hero-ring-spin-slow h-full w-full rounded-full border border-dashed border-teal-300/15" />
        </div>

        <div className="absolute left-1/2 top-1/2 h-[174px] w-[174px] -translate-x-1/2 -translate-y-1/2">
          <div className="hero-ring-spin-medium h-full w-full rounded-full border border-dashed border-teal-300/20" />
        </div>

        <div className="absolute left-1/2 top-1/2 h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2">
          <div className="hero-ring-spin-fast h-full w-full rounded-full border border-dashed border-orange-300/15" />
        </div>

        <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2">
          <div className="hero-dot-spin-one relative h-full w-full">
            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-teal-300 shadow-[0_0_18px_rgba(45,212,191,0.7)]" />
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 h-[174px] w-[174px] -translate-x-1/2 -translate-y-1/2">
          <div className="hero-dot-spin-two relative h-full w-full">
            <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-orange-200 shadow-[0_0_18px_rgba(251,191,36,0.55)]" />
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2">
          <div className="hero-dot-spin-three relative h-full w-full">
            <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-orange-200/80 shadow-[0_0_14px_rgba(251,191,36,0.45)]" />
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 z-40 h-[212px] w-[212px] -translate-x-1/2 -translate-y-1/2">
          <div className="hero-label-orbit-one relative h-full w-full">
            <div className="hero-label-counter-one absolute left-1/2 top-[-10px] -translate-x-1/2">
              <span className="rounded-full border border-teal-300/30 bg-teal-300/10 px-3 py-1 text-xs font-black text-teal-100 shadow-lg shadow-teal-500/10">
                Agents
              </span>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 z-40 h-[184px] w-[184px] -translate-x-1/2 -translate-y-1/2">
          <div className="hero-label-orbit-two relative h-full w-full">
            <div className="hero-label-counter-two absolute left-[-14px] top-1/2 -translate-y-1/2">
              <span className="rounded-full border border-orange-300/30 bg-orange-300/10 px-3 py-1 text-xs font-black text-orange-100 shadow-lg shadow-orange-500/10">
                Risk AI
              </span>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 z-40 h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2">
          <div className="hero-label-orbit-three relative h-full w-full">
            <div className="hero-label-counter-three absolute bottom-[-8px] left-1/2 -translate-x-1/2">
              <span className="rounded-full border border-teal-300/30 bg-teal-300/10 px-3 py-1 text-xs font-black text-teal-100 shadow-lg shadow-teal-500/10">
                AI Evals
              </span>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 z-30 h-32 w-32 -translate-x-1/2 -translate-y-1/2">
          <div className="hero-earth-depth relative h-full w-full overflow-hidden rounded-full">
            <img
              src="/assets/voxel-earth.png"
              alt="Voxel Earth"
              className="hero-earth-photo h-full w-full object-cover"
            />
            <div className="hero-earth-shade absolute inset-0 rounded-full" />
            <div className="hero-earth-light absolute inset-0 rounded-full" />
            <div className="hero-earth-scan absolute inset-0 rounded-full" />
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 z-50 h-[178px] w-[178px] -translate-x-1/2 -translate-y-1/2">
          <div className="hero-chibi-spin relative h-full w-full">
            <div className="hero-chibi-counter absolute left-1/2 top-[-10px] h-12 w-12 -translate-x-1/2">
              <div className="hero-chibi-sprite" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#090A0F]/78 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/70 to-transparent" />
        <div className="absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full bg-teal-300/10 blur-3xl" />
        <div className="absolute bottom-[-100px] left-[-100px] h-56 w-56 rounded-full bg-orange-300/10 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/90" />
              <span className="h-3 w-3 rounded-full bg-orange-400/90" />
              <span className="h-3 w-3 rounded-full bg-teal-300/90" />
            </div>

            <div className="rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-teal-200">
              Live
            </div>
          </div>

          <HeroGlobe />

          <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-black/35 p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-teal-300/20 bg-teal-300/10 text-teal-200">
                <Terminal className="h-6 w-6" />
              </div>

              <div>
                <p className="text-sm font-semibold text-stone-500">
                  system.profile
                </p>
                <p className="font-mono text-lg font-black text-teal-200">
                  aneesh_hatkar.init()
                </p>

                <div className="mt-4 space-y-2 font-mono text-sm">
                  <p>
                    <span className="text-orange-300">role:</span>{" "}
                    <span className="text-stone-300">ML Engineer</span>
                  </p>
                  <p>
                    <span className="text-orange-300">focus:</span>{" "}
                    <span className="text-teal-200">
                      Reliable AI Systems
                    </span>
                  </p>
                  <p>
                    <span className="text-orange-300">building:</span>{" "}
                    <span className="text-yellow-100">
                      Evals, Agents, Robotics
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              ["Focus", "AI Systems"],
              ["Stack", "ML + Backend"],
              ["Mode", "Build"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-stone-500">
                  {label}
                </p>
                <p className="mt-2 text-sm font-bold text-stone-100">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-[1.5rem] border border-orange-300/15 bg-orange-300/5 p-5">
            <div className="mb-2 flex items-center gap-2 text-orange-200">
              <Zap className="h-5 w-5" />
              <p className="font-bold">Current Focus</p>
            </div>
            <p className="text-sm leading-6 text-stone-400">
              Building reliable AI systems that connect evaluation, backend
              engineering, data pipelines, and real-world deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen px-6 pb-24 pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-teal-300/20 bg-teal-300/10 px-4 py-2 text-sm font-bold text-teal-100 shadow-lg shadow-teal-500/5">
            <span className="h-2.5 w-2.5 rounded-full bg-teal-300 shadow-[0_0_18px_rgba(45,212,191,0.8)]" />
            Portfolio mission control online
          </div>

          <p className="mb-5 text-sm font-black uppercase tracking-[0.5em] text-orange-300">
            AI / ML Engineer
          </p>

          <h1 className="font-display text-6xl font-black leading-[0.95] tracking-tight text-stone-100 md:text-8xl">
            Aneesh
            <span className="block bg-gradient-to-r from-orange-100 via-stone-100 to-teal-100 bg-clip-text text-transparent">
              Hatkar
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl font-semibold leading-8 text-stone-300">
            I build intelligent systems across AI evaluation, machine learning,
            robotics, computer vision, and risk-aware applications.
          </p>

          <p className="mt-5 max-w-2xl leading-8 text-stone-500">
            My work sits at the intersection of model reliability, backend
            systems, data pipelines, and product-grade AI interfaces.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-orange-300 px-6 py-4 text-sm font-black text-black shadow-2xl shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-orange-200"
            >
              Explore Systems
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#research"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-black text-stone-200 transition hover:-translate-y-1 hover:border-teal-300/30 hover:text-teal-100"
            >
              Research Interests
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {heroLinks.map((link) => (
              <HeroLink key={link.label} link={link} />
            ))}
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}