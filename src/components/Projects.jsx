import { useMemo, useState } from "react";
import {
  Bot,
  BrainCircuit,
  ChevronRight,
  Code2,
  Filter,
  Gauge,
  Layers3,
  LineChart,
  Network,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Video,
  Zap,
} from "lucide-react";

const projects = [
  {
    id: "evalforge",
    title: "EvalForge",
    category: "AI Evaluation",
    status: "Built",
    systemClass: "RAG / Agent Evaluation",
    icon: ShieldCheck,
    tone: "teal",
    github: "https://github.com/",
    description:
      "Backend evaluation system that generates benchmark cases and runs evaluation checks for RAG systems and AI-agent workflows.",
    metrics: [
      "20 generated eval cases",
      "1.0 validity rate",
      "1.0 citation coverage",
      "0 pipeline errors",
    ],
    stack: ["FastAPI", "Python", "SQLite", "RAG", "Agents", "Evaluation"],
    signal:
      "Turns raw support docs and tool schemas into structured eval datasets, warnings, benchmark cases, and evaluation outputs.",
    details: [
      "Built a FastAPI pipeline for generating and evaluating benchmark cases from uploaded documents.",
      "Designed support for RAG and AI-agent evaluation workflows.",
      "Added structured outputs for validity checks, citation coverage, warnings, and pass/fail evaluation logic.",
      "Positioned as an AI evaluation backend rather than a simple project demo.",
    ],
  },
  {
    id: "risklens",
    title: "RiskLens Alpha",
    category: "Risk AI",
    status: "Built",
    systemClass: "Portfolio Stress Intelligence",
    icon: LineChart,
    tone: "orange",
    github: "https://github.com/",
    description:
      "Portfolio risk dashboard that simulates market scenarios, analyzes concentration, and produces evidence-grounded stress-risk summaries.",
    metrics: [
      "136 tests passed",
      "Live market-data mode",
      "Scenario comparison",
      "PDF/HTML reports",
    ],
    stack: ["Python", "FastAPI", "React", "Market Data", "Risk Modeling"],
    signal:
      "Transforms portfolio holdings into scenario-aware risk scores, top drivers, and market-sensitive vulnerability reports.",
    details: [
      "Built scenario simulation for portfolio stress testing.",
      "Added concentration analysis, market-aware metrics, and risk scoring.",
      "Designed report generation with dashboard-style output.",
      "Structured the project like a deployable risk intelligence product.",
    ],
  },
  {
    id: "adaptive-frame-selection",
    title: "Adaptive Frame Selection",
    category: "Computer Vision",
    status: "Completed",
    systemClass: "Efficient Video Analytics",
    icon: Video,
    tone: "orange",
    github: "https://github.com/jliu3627/cv_adaptive_frame_selection",
    description:
      "Machine learning pipeline that predicts whether video frames should be kept or skipped before expensive object detection.",
    metrics: [
      "94.92% accuracy",
      "98.31% precision",
      "92.06% recall",
      "95.08% F1 score",
    ],
    stack: [
      "Python",
      "OpenCV",
      "Random Forest",
      "MOT17",
      "YOLO",
      "Optical Flow",
    ],
    signal:
      "Uses lightweight motion and visual-change features to reduce redundant detector calls while preserving informative frames.",
    details: [
      "Generated ground-truth-derived keep/skip labels using MOT17.",
      "Engineered frame difference, optical flow, histogram, edge density, and motion-summary features.",
      "Trained Random Forest models across detector variants.",
      "Improved supervision quality by replacing unstable YOLO pseudo-labeling.",
    ],
  },
  {
    id: "robot-exploration",
    title: "Q-Learning Robot Exploration",
    category: "Robotics",
    status: "Completed",
    systemClass: "Autonomous Mapping",
    icon: Bot,
    tone: "teal",
    github: "https://github.com/madhurlak0810/drone_exploration",
    description:
      "Autonomous robot exploration and 2D mapping system using Q-learning inside a ROS2–Gazebo simulation environment.",
    metrics: [
      "94.4–94.5% map coverage",
      "0.86–0.90 IoU",
      "0.23% → 0.19% collision rate",
      "1100 → 2140 reward",
    ],
    stack: ["ROS2", "Gazebo", "Q-Learning", "LiDAR", "SLAM", "Python"],
    signal:
      "Combines LiDAR state discretization, reward shaping, and SLAM-based mapping to learn safer exploration policies.",
    details: [
      "Built custom ROS2 nodes for environment interface, Q-learning, and exploration metrics.",
      "Used LiDAR observations with tabular Q-learning for navigation behavior.",
      "Integrated SLAM-based occupancy grid mapping.",
      "Evaluated across multiple Gazebo environments.",
    ],
  },
  {
    id: "multi-interaction",
    title: "Multi-Interaction System",
    category: "ML Systems",
    status: "Research",
    systemClass: "N-Agent Simulation",
    icon: Network,
    tone: "teal",
    github: "https://github.com/",
    description:
      "Simulation framework for studying interaction dynamics among AI agents in adaptive, multi-agent environments.",
    metrics: [
      "N-agent simulation",
      "10,000+ steps/run",
      "Behavior metrics",
      "Interaction modeling",
    ],
    stack: [
      "TensorFlow",
      "NumPy",
      "SciPy",
      "Multi-Agent Systems",
      "Simulation",
    ],
    signal:
      "Models agent-to-agent coupling, feedback effects, emergent behavior, and interaction patterns across simulated environments.",
    details: [
      "Designed a conceptual framework for derivative N-simulations.",
      "Modeled AI agents coexisting and interacting inside dynamic environments.",
      "Formulated mathematical models for interaction effects.",
      "Created classification metrics to differentiate AI behaviors.",
    ],
  },
  {
    id: "fraud-detection",
    title: "AI Financial Fraud Detection",
    category: "Finance AI",
    status: "Completed",
    systemClass: "Explainable Fraud ML",
    icon: Gauge,
    tone: "orange",
    github: "https://github.com/",
    description:
      "Fraud detection pipeline with gradient-boosted models, explainability, threshold tuning, and analyst-facing dashboard.",
    metrics: [
      "0.95 ROC-AUC",
      "SHAP explanations",
      "LIME explanations",
      "Dashboard workflow",
    ],
    stack: [
      "XGBoost",
      "LightGBM",
      "Scikit-learn",
      "SHAP",
      "LIME",
      "Streamlit",
    ],
    signal:
      "Balances fraud recall with false-positive control and adds interpretability for per-transaction decision support.",
    details: [
      "Built a fraud classification workflow using tree-based ML models.",
      "Added model explainability using SHAP and LIME.",
      "Designed an analyst-facing dashboard for reviewing predictions.",
      "Focused on practical threshold tuning and decision support.",
    ],
  },
  {
    id: "sim2realops",
    title: "Sim2RealOps",
    category: "Robotics",
    status: "Planned",
    systemClass: "Sim-to-Real Robotics MLOps",
    icon: Rocket,
    tone: "teal",
    github: "https://github.com/",
    description:
      "Planned robotics MLOps platform for tracking simulation-to-real transfer gaps, policy performance, failures, and deployment readiness.",
    metrics: [
      "Planned sim-real gap score",
      "Policy regression tracking",
      "Failure replay dashboard",
      "Deployment readiness report",
    ],
    stack: ["ROS2", "Gazebo", "Python", "MLOps", "Policy Evaluation"],
    signal:
      "Designed to make robotics experiments measurable, reproducible, and easier to debug before real-world deployment.",
    details: [
      "Track performance drift between simulation and real-world assumptions.",
      "Log failures, policy regressions, and scenario-specific weaknesses.",
      "Create dashboards for robotics policy readiness.",
      "Extend robotics experimentation into a stronger MLOps-style system.",
    ],
  },
  {
    id: "causalagent-lab",
    title: "CausalAgent Lab",
    category: "AI Agents",
    status: "Planned",
    systemClass: "Agent Failure Analysis",
    icon: BrainCircuit,
    tone: "orange",
    github: "https://github.com/",
    description:
      "Planned lab for evaluating why AI agents fail by connecting tool traces, memory, retrieved evidence, and causal failure patterns.",
    metrics: [
      "Planned trace analysis",
      "Failure taxonomy",
      "Agent eval dashboard",
      "Root-cause reports",
    ],
    stack: ["Python", "LangGraph", "RAG", "Agent Evals", "Causal Analysis"],
    signal:
      "Aimed at moving beyond pass/fail agent evals into explainable failure diagnosis.",
    details: [
      "Analyze whether failures come from retrieval, planning, memory, tools, or reasoning.",
      "Build causal-style summaries of agent behavior.",
      "Create reusable evaluation cases for agent workflows.",
      "Connects strongly with EvalForge and reliable AI systems.",
    ],
  },
  {
    id: "driftgraph",
    title: "DriftGraph",
    category: "ML Systems",
    status: "Planned",
    systemClass: "Model Drift Intelligence",
    icon: Layers3,
    tone: "teal",
    github: "https://github.com/",
    description:
      "Planned drift monitoring system that maps model, data, feature, and behavior drift as a graph instead of isolated metrics.",
    metrics: [
      "Planned drift graph",
      "Feature shift detection",
      "Metric regression alerts",
      "Root-cause mapping",
    ],
    stack: ["Python", "FastAPI", "ML Monitoring", "Graphs", "Dashboards"],
    signal:
      "Turns drift detection into a visual diagnosis system for production ML workflows.",
    details: [
      "Track changes in features, predictions, labels, and downstream metrics.",
      "Represent drift as connected causes instead of independent charts.",
      "Add alerts for model performance degradation.",
      "Useful for ML engineering, monitoring, and production reliability stories.",
    ],
  },
  {
    id: "policompiler",
    title: "PolicyCompiler AI",
    category: "AI Evaluation",
    status: "Planned",
    systemClass: "Policy-to-Test Generator",
    icon: Code2,
    tone: "orange",
    github: "https://github.com/",
    description:
      "Planned system that converts natural-language policies into executable tests, eval cases, and compliance checks for AI applications.",
    metrics: [
      "Planned policy parser",
      "Automated test generation",
      "Compliance check reports",
      "Eval case compiler",
    ],
    stack: ["Python", "LLMs", "FastAPI", "Policy Evals", "Test Generation"],
    signal:
      "Bridges policy, evaluation, and engineering by turning rules into executable checks.",
    details: [
      "Parse policies into structured rules.",
      "Generate test cases for RAG and agent systems.",
      "Run compliance checks against model or system outputs.",
      "Pairs naturally with EvalForge as a future extension.",
    ],
  },
  {
    id: "nexus",
    title: "Nexus Human-AI Assistant",
    category: "AI Agents",
    status: "Planned",
    systemClass: "Human-AI Workflow Assistant",
    icon: Zap,
    tone: "teal",
    github: "https://github.com/",
    description:
      "Planned personal AI assistant focused on memory, workflows, task context, and reliable human-AI interaction.",
    metrics: [
      "Planned memory layer",
      "Tool routing",
      "Workflow tracking",
      "Context-aware assistance",
    ],
    stack: ["Python", "LLMs", "Agents", "Memory", "Tool Use"],
    signal:
      "Designed as a personal productivity and human-AI interaction system with persistent context and workflow support.",
    details: [
      "Use memory and retrieval to preserve long-running project context.",
      "Route tasks across tools, notes, project files, and reminders.",
      "Focus on reliable interaction rather than generic chatbot behavior.",
      "Could connect with EvalForge for assistant evaluation.",
    ],
  },
];

const categories = [
  "All",
  "AI Evaluation",
  "Risk AI",
  "Robotics",
  "Computer Vision",
  "AI Agents",
  "Finance AI",
  "ML Systems",
];

function getTone(tone) {
  if (tone === "orange") {
    return {
      border: "border-orange-300/30",
      activeBorder: "border-orange-300/70",
      bg: "bg-orange-300/10",
      text: "text-orange-200",
      glow: "from-orange-300/20 via-transparent to-teal-300/10",
      metric: "border-orange-300/15 bg-orange-300/5 text-orange-100",
      button:
        "border-orange-300/40 bg-orange-300/10 text-orange-100 hover:border-orange-200/70",
    };
  }

  return {
    border: "border-teal-300/30",
    activeBorder: "border-teal-300/70",
    bg: "bg-teal-300/10",
    text: "text-teal-200",
    glow: "from-teal-300/20 via-transparent to-orange-300/10",
    metric: "border-teal-300/15 bg-teal-300/5 text-teal-100",
    button:
      "border-teal-300/40 bg-teal-300/10 text-teal-100 hover:border-teal-200/70",
  };
}

function ProjectListItem({ project, isActive, onClick }) {
  const Icon = project.icon;
  const tone = getTone(project.tone);

  return (
    <button
      onClick={onClick}
      className={`group relative w-full overflow-hidden rounded-2xl border p-4 text-left transition duration-300 ${
        isActive
          ? `${tone.activeBorder} bg-white/[0.055]`
          : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/[0.035]"
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${tone.glow} opacity-0 transition duration-300 ${
          isActive ? "opacity-100" : "group-hover:opacity-70"
        }`}
      />

      <div className="relative z-10 flex items-start gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${tone.border} ${tone.bg} ${tone.text}`}
        >
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center justify-between gap-2">
            <h3 className="truncate font-display text-base font-black text-stone-100">
              {project.title}
            </h3>
            <ChevronRight
              className={`h-4 w-4 shrink-0 transition ${
                isActive
                  ? tone.text
                  : "text-stone-600 group-hover:text-stone-300"
              }`}
            />
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.16em] text-stone-500">
            {project.category}
          </p>

          <p className="mt-2 line-clamp-2 text-sm leading-5 text-stone-400">
            {project.description}
          </p>
        </div>
      </div>
    </button>
  );
}

function SelectedProjectPanel({ project }) {
  const Icon = project.icon;
  const tone = getTone(project.tone);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#090A0F]/78 p-5 shadow-2xl shadow-black/35 backdrop-blur-xl sm:p-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/70 to-transparent" />
      <div className="absolute right-[-140px] top-[-140px] h-80 w-80 rounded-full bg-teal-300/10 blur-3xl" />
      <div className="absolute bottom-[-160px] left-[-160px] h-80 w-80 rounded-full bg-orange-300/10 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-5 border-b border-white/10 pb-6">
          <div className="flex items-start gap-4">
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border sm:h-16 sm:w-16 ${tone.border} ${tone.bg} ${tone.text}`}
            >
              <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>

            <div>
              <p
                className={`mb-2 text-xs font-black uppercase tracking-[0.24em] sm:text-sm ${tone.text}`}
              >
                project.file
              </p>

              <h3 className="font-display text-3xl font-black text-stone-100 sm:text-4xl">
                {project.title}
              </h3>

              <p className="mt-2 text-stone-400">{project.systemClass}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span
              className={`rounded-full border px-3 py-1 text-xs font-black uppercase tracking-[0.16em] ${tone.border} ${tone.bg} ${tone.text}`}
            >
              {project.status}
            </span>
            <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-stone-400">
              {project.category}
            </span>
          </div>
        </div>

        <p className="max-w-4xl text-base leading-8 text-stone-300 sm:text-lg">
          {project.description}
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {project.metrics.map((metric) => (
            <div
              key={metric}
              className={`rounded-2xl border px-4 py-3 text-sm font-bold ${tone.metric}`}
            >
              {metric}
            </div>
          ))}
        </div>

        <div className="mt-7 rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
          <div className="mb-3 flex items-center gap-2 text-stone-200">
            <Sparkles className="h-5 w-5 text-teal-200" />
            <p className="font-bold">System Signal</p>
          </div>
          <p className="leading-7 text-stone-400">{project.signal}</p>
        </div>

        <div className="mt-7 rounded-[1.5rem] border border-orange-300/15 bg-orange-300/5 p-5">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-orange-300">
            Build Notes
          </p>

          <div className="space-y-3">
            {project.details.map((detail) => (
              <div key={detail} className="flex gap-3">
                <span
                  className={`mt-2 h-2 w-2 shrink-0 rounded-full ${
                    project.tone === "orange" ? "bg-orange-300" : "bg-teal-300"
                  }`}
                />
                <p className="leading-7 text-stone-300">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-stone-500">
            Tech Stack
          </p>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-sm font-bold text-stone-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className={`mt-7 inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-black transition ${tone.button}`}
        >
          <Code2 className="h-4 w-4" />
          View Project
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      const searchableText = [
        project.title,
        project.category,
        project.systemClass,
        project.description,
        project.stack.join(" "),
        project.metrics.join(" "),
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchableText.includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const activeProject =
    filteredProjects.find((project) => project.id === activeProjectId) ||
    filteredProjects[0] ||
    projects[0];

  function handleCategoryChange(category) {
    setActiveCategory(category);

    const firstProjectInCategory = projects.find(
      (project) => category === "All" || project.category === category,
    );

    if (firstProjectInCategory) {
      setActiveProjectId(firstProjectInCategory.id);
    }
  }

  function handleSearchChange(event) {
    const nextSearchTerm = event.target.value;
    setSearchTerm(nextSearchTerm);

    const firstMatch = projects.find((project) => {
      const categoryMatch =
        activeCategory === "All" || project.category === activeCategory;

      const searchableText = [
        project.title,
        project.category,
        project.systemClass,
        project.description,
        project.stack.join(" "),
        project.metrics.join(" "),
      ]
        .join(" ")
        .toLowerCase();

      return (
        categoryMatch && searchableText.includes(nextSearchTerm.toLowerCase())
      );
    });

    if (firstMatch) {
      setActiveProjectId(firstMatch.id);
    }
  }

  return (
    <section id="projects" className="relative px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
      <div className="mx-auto mb-12 max-w-7xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-teal-300">
          Projects
        </p>
        <h2 className="mt-3 font-display text-4xl font-black text-stone-100 md:text-5xl">
          Build Inventory
        </h2>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[360px_1fr]">
        <aside className="project-index-panel relative h-fit rounded-[1.8rem] border border-white/10 bg-[#090A0F]/78 p-5 shadow-2xl shadow-black/25 backdrop-blur-xl lg:sticky lg:top-28">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/70 to-transparent" />

          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-teal-300/20 bg-teal-300/10 text-teal-200">
              <Filter className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-300">
                Arsenal
              </p>
              <h3 className="font-display text-xl font-black text-stone-100">
                Project Index
              </h3>
            </div>
          </div>

          <div className="relative mb-5">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
            <input
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search builds..."
              className="w-full rounded-2xl border border-white/10 bg-black/30 py-3 pl-11 pr-4 text-sm font-semibold text-stone-200 outline-none transition placeholder:text-stone-600 focus:border-teal-300/40"
            />
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`rounded-full border px-3 py-2 text-xs font-black uppercase tracking-[0.14em] transition ${
                    isActive
                      ? "border-teal-300/40 bg-teal-300/10 text-teal-100"
                      : "border-white/10 bg-black/20 text-stone-500 hover:border-white/20 hover:text-stone-300"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="project-list-scroll max-h-[640px] space-y-3 overflow-y-auto pr-1">
            {filteredProjects.map((project) => (
              <ProjectListItem
                key={project.id}
                project={project}
                isActive={activeProject.id === project.id}
                onClick={() => setActiveProjectId(project.id)}
              />
            ))}
          </div>
        </aside>

        <SelectedProjectPanel project={activeProject} />
      </div>
    </section>
  );
}