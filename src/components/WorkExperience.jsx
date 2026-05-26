import {
  AudioWaveform,
  BarChart3,
  Calendar,
  FlaskConical,
} from "lucide-react";

const experiences = [
  {
    role: "Academic Researcher",
    organization: "Under Prof. Jerry Wu",
    date: "Mar 2026 – May 2026",
    type: "Research Experience",
    icon: FlaskConical,
    tone: "orange",
    summary:
      "Worked under Prof. Jerry Wu on applied machine learning and computer vision research, focusing on adaptive frame selection for efficient video analytics.",
    bullets: [
      "Built a supervised keep/skip classification pipeline using MOT17 video sequences.",
      "Engineered lightweight visual-change features including frame difference, optical flow, edge density, histogram similarity, percentile motion summaries, and since-last-kept features.",
      "Replaced unstable YOLO pseudo-labels with MOT17 ground-truth-derived labels for cleaner supervised training.",
      "Trained and evaluated Random Forest models across FRCNN, DPM, and SDP detector variants.",
      "Final improved FRCNN model reached 94.92% accuracy, 98.31% precision, 92.06% recall, and 95.08% F1 score.",
    ],
    stack: [
      "Python",
      "OpenCV",
      "Random Forest",
      "MOT17",
      "YOLO",
      "Computer Vision",
      "Feature Engineering",
    ],
  },
  {
    role: "Academic Research Intern",
    organization: "National University of Singapore",
    date: "Jun 2023 – Jul 2023",
    type: "Research Internship",
    icon: AudioWaveform,
    tone: "teal",
    summary:
      "Researched waveform identification approaches for automatic classification and detection of audio signals.",
    bullets: [
      "Built an audio classification pipeline and trained a model achieving approximately 91% validation accuracy.",
      "Enabled identification across 10,000+ music samples.",
      "Optimized data ingestion and retrieval for low-latency lookups during real-time inference.",
      "Implemented metadata logging and versioning to improve experiment traceability and reproducibility.",
    ],
    stack: [
      "Python",
      "Audio ML",
      "Classification",
      "Signal Processing",
      "Data Pipelines",
      "Experiment Logging",
    ],
  },
  {
    role: "Data Analyst Intern",
    organization: "Covid Yodha",
    date: "Apr 2021 – Oct 2021",
    type: "Data Experience",
    icon: BarChart3,
    tone: "orange",
    summary:
      "Worked on COVID-19 data aggregation, cleaning, geospatial dashboards, hotspot analysis, and hospital bed occupancy forecasting.",
    bullets: [
      "Aggregated COVID-19 data from government portals, social platforms, and community reports.",
      "Cleaned and standardized datasets for analysis.",
      "Developed geospatial dashboards and visualizations to detect hotspots.",
      "Built a forecasting model to estimate hospital bed occupancy from case growth trends, reaching approximately 87% holdout performance.",
    ],
    stack: [
      "Data Cleaning",
      "Forecasting",
      "Dashboards",
      "Geospatial Analysis",
      "Visualization",
    ],
  },
];

function getTone(tone) {
  if (tone === "orange") {
    return {
      border: "border-orange-300/30",
      activeBorder: "border-orange-300/60",
      bg: "bg-orange-300/10",
      text: "text-orange-200",
      glow: "from-orange-300/18 via-transparent to-teal-300/8",
      dot: "bg-orange-300",
    };
  }

  return {
    border: "border-teal-300/30",
    activeBorder: "border-teal-300/60",
    bg: "bg-teal-300/10",
    text: "text-teal-200",
    glow: "from-teal-300/18 via-transparent to-orange-300/8",
    dot: "bg-teal-300",
  };
}

function ExperienceCard({ experience }) {
  const Icon = experience.icon;
  const tone = getTone(experience.tone);

  return (
    <div
      className={`group relative overflow-hidden rounded-[2rem] border bg-[#090A0F]/78 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl transition duration-300 hover:-translate-y-1 ${tone.activeBorder}`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${tone.glow} opacity-70 transition duration-300 group-hover:opacity-100`}
      />

      <div className="absolute left-0 top-0 h-14 w-14 rounded-tl-[2rem] border-l border-t border-white/15" />
      <div className="absolute bottom-0 right-0 h-14 w-14 rounded-br-[2rem] border-b border-r border-white/15" />

      <div className="relative z-10">
        <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${tone.border} ${tone.bg} ${tone.text}`}
            >
              <Icon className="h-7 w-7" />
            </div>

            <div>
              <div className="mb-2 flex flex-wrap gap-2">
                <span
                  className={`rounded-full border ${tone.border} ${tone.bg} px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] ${tone.text}`}
                >
                  {experience.type}
                </span>

                <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-stone-400 lg:hidden">
                  {experience.date}
                </span>
              </div>

              <h3 className="font-display text-3xl font-black text-stone-100">
                {experience.role}
              </h3>

              <p className="mt-1 font-semibold text-stone-400">
                {experience.organization}
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm font-bold text-stone-300 lg:flex">
            <Calendar className="h-4 w-4" />
            {experience.date}
          </div>
        </div>

        <p className="leading-7 text-stone-300">{experience.summary}</p>

        <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-stone-500">
            Impact Notes
          </p>

          <div className="space-y-3">
            {experience.bullets.map((bullet) => (
              <div key={bullet} className="flex gap-3">
                <span
                  className={`mt-2 h-2 w-2 shrink-0 rounded-full ${tone.dot}`}
                />
                <p className="leading-7 text-stone-300">{bullet}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {experience.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-sm font-bold text-stone-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WorkExperience() {
  return (
    <section id="experience" className="relative px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
      <div className="mx-auto mb-12 max-w-7xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-teal-300">
          Experience
        </p>
        <h2 className="mt-3 font-display text-4xl font-black text-stone-100 md:text-5xl">
          Work Experience
        </h2>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8">
          {experiences.map((experience) => (
            <ExperienceCard
              key={`${experience.role}-${experience.organization}`}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
}