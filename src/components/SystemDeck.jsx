import { useState } from "react";
import {
  Brain,
  GraduationCap,
  Layers3,
  Compass,
  Cpu,
  Code2,
  Database,
  Server,
  Wrench,
  Palette,
  Music,
  Dumbbell,
  Utensils,
  Gamepad2,
  PenTool,
  Trophy,
  Globe2,
  FlaskConical,
  LineChart,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const deckCards = [
  {
    id: "about",
    title: "About",
    subtitle: "AI Systems Builder",
    power: "Reliable AI",
    rarity: "Core",
    icon: Brain,
    color: "teal",
  },
  {
    id: "education",
    title: "Education",
    subtitle: "UMD + SRM + Dubai",
    power: "ML + CSE",
    rarity: "Academic",
    icon: GraduationCap,
    color: "orange",
  },
  {
    id: "skills",
    title: "Tech Stack",
    subtitle: "Full-Stack ML",
    power: "Python + APIs",
    rarity: "Engineering",
    icon: Layers3,
    color: "teal",
  },
  {
    id: "certificates",
    title: "Certificates",
    subtitle: "Credentials + Learning",
    power: "ML + Data + Cloud",
    rarity: "Credential",
    icon: Trophy,
    color: "teal",
  },
  {
    id: "interests",
    title: "Interests",
    subtitle: "Builder + Creative",
    power: "AI + Hobbies",
    rarity: "Personal",
    icon: Compass,
    color: "orange",
  },
];

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    items: ["Python", "C / C++", "JavaScript", "SQL", "HTML", "Bash"],
  },
  {
    title: "ML / AI",
    icon: Cpu,
    items: [
      "PyTorch",
      "HuggingFace",
      "LightGBM",
      "XGBoost",
      "Scikit-learn",
      "Computer Vision",
      "NLP",
      "LLMs",
      "Model Evaluation",
    ],
  },
  {
    title: "Backend / MLOps",
    icon: Server,
    items: [
      "FastAPI",
      "Flask",
      "REST APIs",
      "Docker",
      "Kubernetes",
      "AWS S3",
      "Airflow",
      "CI/CD",
      "DeepSpeed",
      "vLLM",
    ],
  },
  {
    title: "Data / Analytics",
    icon: Database,
    items: [
      "ETL",
      "PySpark",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "AWS Athena",
      "Redshift",
      "OpenSearch",
      "Tableau",
    ],
  },
];

const certificates = [
  {
    title: "Programming for Everybody with Python",
    issuer: "University of Michigan",
    description:
      "Built a foundation in Python programming, control flow, functions, data structures, and problem-solving using code.",
    tags: ["Python", "Programming", "Problem Solving", "Data Structures"],
  },
  {
    title: "Game Theory",
    issuer: "Stanford University",
    description:
      "Studied strategic decision-making, payoff structures, equilibria, incentives, and reasoning in competitive and cooperative environments.",
    tags: ["Game Theory", "Strategy", "Equilibrium", "Decision Making"],
  },
  {
    title: "Big Data Analytics",
    issuer: "AWS",
    description:
      "Covered big-data concepts, cloud-based analytics workflows, scalable data processing, and data-driven architecture patterns.",
    tags: ["AWS", "Big Data", "Analytics", "Cloud"],
  },
  {
    title: "Machine Learning",
    issuer: "DeepLearning.AI",
    description:
      "Strengthened machine learning fundamentals including supervised learning, model evaluation, neural networks, and practical ML workflows.",
    tags: ["Machine Learning", "Neural Networks", "Model Evaluation", "AI"],
  },
  {
    title: "Google Advanced Data Analytics",
    issuer: "Google",
    description:
      "Focused on advanced analytics, statistics, regression, machine learning, data storytelling, and applied business decision-making.",
    tags: ["Data Analytics", "Statistics", "Regression", "ML", "Visualization"],
  },
];

const technicalInterests = [
  "AI Evaluation",
  "LLM Reliability",
  "Robotics",
  "Computer Vision",
  "Risk-Aware AI",
  "AI Agents",
  "MLOps",
  "System Design",
  "Finance AI",
  "Human-Centered AI",
];

const personalInterests = [
  {
    name: "Gundam Building",
    icon: Gamepad2,
    description:
      "Model building, patience, detail work, and turning small pieces into something complete.",
  },
  {
    name: "Drawing",
    icon: PenTool,
    description:
      "Visual creativity, design sense, and exploring ideas through sketches and aesthetics.",
  },
  {
    name: "Guitar",
    icon: Music,
    description:
      "Creative practice, rhythm, consistency, and learning through repetition.",
  },
  {
    name: "Drumming",
    icon: Music,
    description:
      "Timing, coordination, energy, and focus through rhythm-based practice.",
  },
  {
    name: "Basketball",
    icon: Dumbbell,
    description:
      "Movement, competitiveness, teamwork, and staying active outside technical work.",
  },
  {
    name: "Cooking",
    icon: Utensils,
    description:
      "Experimenting with food, improving routines, and learning through small iterations.",
  },
];

function DeckCard({ card, isActive, onClick }) {
  const Icon = card.icon;

  const tone =
    card.color === "teal"
      ? {
          border: "border-teal-300/35",
          activeBorder: "border-teal-300/75",
          bg: "bg-teal-300/10",
          text: "text-teal-200",
          shadow: "shadow-teal-500/20",
          glow: "from-teal-300/20 via-transparent to-orange-300/10",
        }
      : {
          border: "border-orange-300/35",
          activeBorder: "border-orange-300/75",
          bg: "bg-orange-300/10",
          text: "text-orange-200",
          shadow: "shadow-orange-500/20",
          glow: "from-orange-300/20 via-transparent to-teal-300/10",
        };

  return (
    <button
      onClick={onClick}
      className={`group relative min-h-[178px] w-full overflow-hidden rounded-[1.45rem] border bg-[#090A0F]/78 p-5 text-left shadow-2xl shadow-black/25 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 ${
        isActive ? `${tone.activeBorder} ${tone.shadow}` : "border-white/10"
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${tone.glow} opacity-0 transition duration-300 group-hover:opacity-100 ${
          isActive ? "opacity-100" : ""
        }`}
      />

      <div className="absolute left-0 top-0 h-10 w-10 rounded-tl-[1.45rem] border-l border-t border-white/15" />
      <div className="absolute bottom-0 right-0 h-10 w-10 rounded-br-[1.45rem] border-b border-r border-white/15" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${tone.border} ${tone.bg} ${tone.text}`}
          >
            <Icon className="h-6 w-6" />
          </div>

          <span
            className={`rounded-full border ${tone.border} ${tone.bg} px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] ${tone.text}`}
          >
            {card.rarity}
          </span>
        </div>

        <h3 className="font-display text-2xl font-black text-stone-100">
          {card.title}
        </h3>

        <p className="mt-1 text-sm font-semibold text-stone-400">
          {card.subtitle}
        </p>

        <div className="mt-auto pt-5">
          <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">
              Focus
            </p>
            <p className="mt-1 font-bold text-stone-200">{card.power}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function SkillGroup({ group }) {
  const Icon = group.icon;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-300/20 bg-teal-300/10 text-teal-200">
          <Icon className="h-5 w-5" />
        </div>
        <h4 className="font-bold text-stone-100">{group.title}</h4>
      </div>

      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-sm font-semibold text-stone-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function CertificateCard({ certificate }) {
  return (
    <div className="rounded-[1.5rem] border border-teal-300/15 bg-teal-300/5 p-5">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-teal-300/20 bg-teal-300/10 text-teal-200">
          <Trophy className="h-5 w-5" />
        </div>

        <div>
          <p className="font-bold text-stone-100">{certificate.title}</p>
          <p className="mt-1 text-sm text-stone-500">{certificate.issuer}</p>
        </div>
      </div>

      <p className="text-sm leading-6 text-stone-400">
        {certificate.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {certificate.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-teal-300/15 bg-black/25 px-3 py-1.5 text-xs font-bold text-teal-100"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function PersonalInterestCard({ interest }) {
  const Icon = interest.icon;

  return (
    <div className="rounded-2xl border border-orange-300/15 bg-orange-300/5 p-4">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-300/20 bg-orange-300/10 text-orange-200">
          <Icon className="h-5 w-5" />
        </div>
        <p className="font-bold text-stone-100">{interest.name}</p>
      </div>
      <p className="text-sm leading-6 text-stone-400">{interest.description}</p>
    </div>
  );
}

function PanelContent({ active }) {
  if (active === "about") {
    return (
      <div>
        <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-teal-300">
          about.system
        </p>

        <h3 className="font-display text-4xl font-black text-stone-100">
          Building reliable AI systems with a product mindset.
        </h3>

        <div className="mt-6 space-y-5 text-base leading-8 text-stone-400">
          <p>
            I am a machine learning graduate student focused on building
            practical AI systems that go beyond notebooks and experiments. I
            enjoy working on systems that connect models, data pipelines,
            evaluation logic, backend APIs, dashboards, and user-facing product
            experiences.
          </p>

          <p>
            My background combines applied machine learning, data analysis,
            software engineering, and research-oriented experimentation. At NUS,
            I worked on audio signal classification and built a model pipeline
            for identifying audio samples. I also worked as a Data Analyst
            Intern at Covid Yodha, where I handled data cleaning, dashboards,
            forecasting, and hotspot analysis.
          </p>

          <p>
            My current project focus includes EvalForge, an evaluation framework
            for RAG and AI-agent workflows, and RiskLens Alpha, a portfolio
            stress-risk intelligence platform. These projects reflect the type
            of work I enjoy most: applied ML, backend engineering, evaluation,
            product thinking, and polished frontend presentation.
          </p>

          <p>
            I am especially interested in roles where I can work across the
            stack: model evaluation, data processing, API design,
            experimentation, deployment, debugging, and building tools that make
            AI systems more trustworthy and usable.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            ["Role", "ML Engineer"],
            ["Style", "System Builder"],
            ["Goal", "Reliable AI"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-teal-300/15 bg-teal-300/5 p-4"
            >
              <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-300">
                {label}
              </p>
              <p className="mt-2 font-bold text-stone-100">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-[1.5rem] border border-orange-300/15 bg-orange-300/5 p-5">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-300">
              Research Experience
            </p>
            <p className="mt-3 leading-7 text-stone-400">
              Academic Research Intern at National University of Singapore,
              working on waveform identification and audio classification
              pipelines.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-teal-300/15 bg-teal-300/5 p-5">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-300">
              Leadership
            </p>
            <p className="mt-3 leading-7 text-stone-400">
              AI/ML Head at Coding Ninjas Club SRM, with experience leading
              technical learning and AI/ML-focused club initiatives.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (active === "education") {
    return (
      <div>
        <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-orange-300">
          education.log
        </p>

        <h3 className="font-display text-4xl font-black text-stone-100">
          Academic Background
        </h3>

        <div className="mt-6 grid gap-5">
          <div className="rounded-[1.5rem] border border-orange-300/15 bg-orange-300/5 p-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-300">
              University of Maryland, College Park
            </p>
            <p className="mt-3 text-2xl font-black text-stone-100">
              M.S. in Machine Learning and Artificial Intelligence
            </p>
            <p className="mt-4 leading-7 text-stone-400">
              Graduate focus across machine learning, probability and
              statistics, optimization, computing systems, algorithms, AI
              evaluation, and applied AI engineering.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Machine Learning",
                "Probability & Statistics",
                "Optimization",
                "Computing Systems",
                "Algorithms",
                "AI Evaluation",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-orange-300/15 bg-black/20 px-3 py-1.5 text-sm font-bold text-orange-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-teal-300/15 bg-teal-300/5 p-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-300">
              S.R.M. University, Chennai
            </p>
            <p className="mt-3 text-2xl font-black text-stone-100">
              B.Tech in Computer Science and Engineering
            </p>
            <p className="mt-4 leading-7 text-stone-400">
              Built my foundation in computer science, programming, software
              development, databases, algorithms, and core engineering concepts
              before moving deeper into machine learning and AI systems.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Computer Science",
                "Software Engineering",
                "Databases",
                "Algorithms",
                "Web Development",
                "Engineering Fundamentals",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-teal-300/15 bg-black/20 px-3 py-1.5 text-sm font-bold text-teal-100"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-teal-300/15 bg-black/20 p-4">
              <div className="mb-2 flex items-center gap-2 text-teal-200">
                <Trophy className="h-5 w-5" />
                <p className="font-bold">Leadership</p>
              </div>
              <p className="leading-7 text-stone-400">
                Served as AI/ML Head at Coding Ninjas Club SRM, contributing to
                technical learning, AI/ML discussions, and student-led
                technology initiatives.
              </p>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-stone-300">
              Springdales School Dubai
            </p>
            <p className="mt-3 text-2xl font-black text-stone-100">
              Senior Secondary Education
            </p>
            <p className="mt-4 leading-7 text-stone-400">
              Completed 11th and 12th grade in Dubai, building an early
              academic foundation in analytical thinking, problem-solving, and
              STEM-focused learning before pursuing computer science and
              engineering.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Senior Secondary",
                "STEM Foundation",
                "Analytical Thinking",
                "Problem Solving",
                "Academic Foundation",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm font-bold text-stone-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-orange-300/15 bg-orange-300/5 p-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-300">
              Additional Academic Contribution
            </p>
            <div className="mt-3 flex items-center gap-3">
              <Globe2 className="h-6 w-6 text-orange-200" />
              <p className="text-xl font-black text-stone-100">
                Research Contributor — DST Geospatial India
              </p>
            </div>
            <p className="mt-4 leading-7 text-stone-400">
              Contributed to a geospatial research initiative, strengthening my
              exposure to data-driven analysis, mapping, and applied research
              workflows.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (active === "skills") {
    return (
      <div>
        <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-teal-300">
          skills.inventory
        </p>
        <h3 className="font-display text-4xl font-black text-stone-100">
          Technical Stack
        </h3>

        <p className="mt-5 max-w-3xl leading-7 text-stone-400">
          A practical toolkit for building AI systems end to end — from
          experimentation and evaluation to APIs, dashboards, data pipelines, and
          deployment workflows.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-[1.5rem] border border-orange-300/15 bg-orange-300/5 p-5">
            <div className="mb-3 flex items-center gap-2 text-orange-200">
              <FlaskConical className="h-5 w-5" />
              <p className="font-bold">Research & Experimentation</p>
            </div>
            <p className="leading-7 text-stone-400">
              Experience with model experimentation, metadata logging,
              validation metrics, reproducibility, and analysis workflows.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-teal-300/15 bg-teal-300/5 p-5">
            <div className="mb-3 flex items-center gap-2 text-teal-200">
              <LineChart className="h-5 w-5" />
              <p className="font-bold">Analytics & Dashboards</p>
            </div>
            <p className="leading-7 text-stone-400">
              Experience with dashboards, visualizations, forecasting, hotspot
              analysis, and data storytelling for decision support.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (active === "certificates") {
    return (
      <div>
        <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-teal-300">
          certificates.archive
        </p>

        <h3 className="font-display text-4xl font-black text-stone-100">
          Certifications
        </h3>

        <p className="mt-5 max-w-3xl leading-7 text-stone-400">
          Certifications that strengthen my foundation across programming,
          machine learning, data analytics, cloud-based big-data workflows, and
          strategic decision-making.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.title}
              certificate={certificate}
            />
          ))}
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-orange-300/15 bg-orange-300/5 p-6">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-300">
            Learning Direction
          </p>
          <p className="mt-3 leading-7 text-stone-400">
            These certifications support the areas I build in: AI systems,
            Python engineering, data analytics, machine learning, cloud
            analytics, and decision-focused modeling.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-orange-300">
        interests.map
      </p>

      <h3 className="font-display text-4xl font-black text-stone-100">
        Research, Builder & Personal Interests
      </h3>

      <p className="mt-5 max-w-3xl leading-7 text-stone-400">
        I am interested in AI systems that are reliable, measurable,
        explainable, and useful in real-world workflows. Outside of technical
        work, I like hobbies that keep me creative, patient, disciplined, and
        consistent.
      </p>

      <div className="mt-8 rounded-[1.5rem] border border-teal-300/15 bg-teal-300/5 p-5">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-300">
          Technical Interests
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technicalInterests.map((interest) => (
            <span
              key={interest}
              className="rounded-full border border-teal-300/15 bg-black/25 px-3 py-1.5 text-sm font-bold text-teal-100"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-[1.5rem] border border-orange-300/15 bg-orange-300/5 p-5">
        <div className="mb-4 flex items-center gap-2 text-orange-200">
          <Palette className="h-5 w-5" />
          <p className="font-bold">Personal Interests & Hobbies</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {personalInterests.map((interest) => (
            <PersonalInterestCard key={interest.name} interest={interest} />
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-[1.5rem] border border-teal-300/15 bg-teal-300/5 p-6">
        <div className="mb-3 flex items-center gap-2 text-teal-200">
          <Wrench className="h-5 w-5" />
          <p className="font-bold">Current build direction</p>
        </div>
        <p className="leading-7 text-stone-400">
          Building projects that combine AI reliability, backend engineering,
          polished frontend design, and real-world system thinking.
        </p>
      </div>
    </div>
  );
}

export default function SystemDeck() {
  const [active, setActive] = useState("about");

  return (
    <section id="about" className="relative px-6 py-28">
      <SectionHeader
        eyebrow="System Profile"
        title="Profile Deck"
        description="A collectible-card view of my background, education, technical stack, certifications, and interests."
      />

      <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {deckCards.map((card) => (
            <DeckCard
              key={card.id}
              card={card}
              isActive={active === card.id}
              onClick={() => setActive(card.id)}
            />
          ))}
        </div>

        <div className="relative min-h-[620px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#090A0F]/78 p-8 shadow-2xl shadow-black/35 backdrop-blur-xl">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/70 to-transparent" />
          <div className="absolute right-[-120px] top-[-120px] h-72 w-72 rounded-full bg-teal-300/10 blur-3xl" />
          <div className="absolute bottom-[-140px] left-[-140px] h-72 w-72 rounded-full bg-orange-300/10 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-orange-400/80" />
                <span className="h-3 w-3 rounded-full bg-teal-300/80" />
              </div>

              <div className="rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-teal-200">
                active tab
              </div>
            </div>

            <PanelContent active={active} />
          </div>
        </div>
      </div>
    </section>
  );
}