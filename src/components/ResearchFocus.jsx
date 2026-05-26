import { useState } from "react";
import {
  Bot,
  FlaskConical,
  Network,
  Sparkles,
  Video,
} from "lucide-react";

const researchItems = [
  {
    id: "frame",
    title: "Adaptive Frame Selection",
    category: "Efficient Computer Vision",
    status: "Completed",
    icon: Video,
    tone: "orange",
    summary:
      "A computer vision and machine learning pipeline that learns when to keep or skip video frames before expensive object detection.",
    objective:
      "Reduce redundant video analytics computation while preserving frames with meaningful motion, object-level change, or scene variation.",
    highlights: [
      "Used MOT17 surveillance-style video sequences.",
      "Generated ground-truth-derived keep/skip labels instead of relying on unstable YOLO pseudo-labels.",
      "Engineered frame difference, optical flow, edge density, histogram similarity, percentile motion summaries, and since-last-kept features.",
      "Trained a Random Forest classifier for frame-level keep/skip prediction.",
      "Final improved FRCNN model reached 94.92% accuracy, 98.31% precision, 92.06% recall, and 95.08% F1 score.",
    ],
    stack: [
      "Python",
      "OpenCV",
      "Random Forest",
      "MOT17",
      "YOLO",
      "Optical Flow",
    ],
  },
  {
    id: "robotics",
    title: "Q-Learning Robot Exploration",
    category: "Robotics + Reinforcement Learning",
    status: "Completed",
    icon: Bot,
    tone: "teal",
    summary:
      "An autonomous robot exploration and 2D mapping system using Q-learning inside a ROS2–Gazebo simulation environment.",
    objective:
      "Train a robot to explore unknown environments, avoid obstacles, and construct occupancy maps using LiDAR observations and discrete actions.",
    highlights: [
      "Integrated tabular Q-learning with LiDAR perception and SLAM-based 2D mapping.",
      "Used custom state discretization, reward shaping, and ROS2 node integration.",
      "Evaluated across maze, scattered obstacle, and room-based Gazebo environments.",
      "Improved exploration coverage to roughly 94.4–94.5% in later-stage results.",
      "Generated coherent occupancy-grid maps with IoU scores around 0.86–0.90 depending on environment complexity.",
    ],
    stack: ["ROS2", "Gazebo", "Q-Learning", "LiDAR", "SLAM", "Python"],
  },
  {
    id: "multi",
    title: "Multi-Interaction System for N Simulations",
    category: "Multi-Agent Simulation",
    status: "Completed",
    icon: Network,
    tone: "orange",
    summary:
      "A conceptual and computational framework for derivative N-simulations where AI agents coexist and interact in dynamic environments.",
    objective:
      "Model AI-agent interaction dynamics for prediction, adaptive growth, behavior classification, and emotional system modeling.",
    highlights: [
      "Developed a conceptual framework for derivative N-simulations.",
      "Enabled AI agents to coexist and interact within dynamic environments.",
      "Formulated mathematical models to analyze interaction effects on multi-agent systems.",
      "Created classification metrics to differentiate AI behaviors.",
      "Explored foundations for human-like adaptive interaction environments.",
    ],
    stack: [
      "TensorFlow",
      "NumPy",
      "SciPy",
      "Multi-Agent Systems",
      "Simulation",
      "Behavior Metrics",
    ],
  },
  {
    id: "current",
    title: "Current Research Direction",
    category: "Reliable AI Systems",
    status: "Active",
    icon: FlaskConical,
    tone: "teal",
    summary:
      "My current research focus is around building AI systems that are measurable, explainable, reliable, and useful in real-world workflows.",
    objective:
      "Move beyond experiments by designing evaluation layers, backend systems, dashboards, and deployment-ready AI workflows.",
    highlights: [
      "AI evaluation and LLM reliability for RAG and agent systems.",
      "Risk-aware AI for finance, portfolio stress testing, and decision support.",
      "Computer vision systems that reduce redundant computation.",
      "Robotics exploration, mapping, and reinforcement learning.",
      "Deployable ML systems with APIs, dashboards, and data pipelines.",
    ],
    stack: [
      "AI Evaluation",
      "LLM Reliability",
      "Risk-Aware AI",
      "Robotics",
      "Computer Vision",
      "MLOps",
    ],
  },
];

function getTone(tone) {
  if (tone === "orange") {
    return {
      border: "border-orange-300/30",
      activeBorder: "border-orange-300/70",
      bg: "bg-orange-300/10",
      text: "text-orange-200",
      glow: "from-orange-300/20 via-transparent to-teal-300/10",
      dot: "bg-orange-300",
    };
  }

  return {
    border: "border-teal-300/30",
    activeBorder: "border-teal-300/70",
    bg: "bg-teal-300/10",
    text: "text-teal-200",
    glow: "from-teal-300/20 via-transparent to-orange-300/10",
    dot: "bg-teal-300",
  };
}

function ResearchNode({ item, isActive, onClick }) {
  const Icon = item.icon;
  const tone = getTone(item.tone);

  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-[1.5rem] border bg-[#090A0F]/78 p-5 text-left shadow-xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 ${
        isActive ? tone.activeBorder : "border-white/10 hover:border-white/20"
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${tone.glow} opacity-0 transition duration-300 group-hover:opacity-100 ${
          isActive ? "opacity-100" : ""
        }`}
      />

      <div className="relative z-10">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${tone.border} ${tone.bg} ${tone.text}`}
          >
            <Icon className="h-6 w-6" />
          </div>

          <span
            className={`rounded-full border ${tone.border} ${tone.bg} px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] ${tone.text}`}
          >
            {item.status}
          </span>
        </div>

        <p className="text-xs font-black uppercase tracking-[0.2em] text-stone-500">
          {item.category}
        </p>

        <h3 className="mt-2 font-display text-2xl font-black text-stone-100">
          {item.title}
        </h3>

        <p className="mt-4 line-clamp-3 text-sm leading-6 text-stone-400">
          {item.summary}
        </p>
      </div>
    </button>
  );
}

function ResearchPanel({ item }) {
  const Icon = item.icon;
  const tone = getTone(item.tone);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#090A0F]/78 p-8 shadow-2xl shadow-black/35 backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/70 to-transparent" />
      <div className="absolute right-[-140px] top-[-140px] h-80 w-80 rounded-full bg-teal-300/10 blur-3xl" />
      <div className="absolute bottom-[-160px] left-[-160px] h-80 w-80 rounded-full bg-orange-300/10 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div className="flex items-start gap-4">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${tone.border} ${tone.bg} ${tone.text}`}
            >
              <Icon className="h-7 w-7" />
            </div>

            <div>
              <p
                className={`mb-2 text-sm font-black uppercase tracking-[0.24em] ${tone.text}`}
              >
                research.focus
              </p>
              <h3 className="font-display text-4xl font-black text-stone-100">
                {item.title}
              </h3>
              <p className="mt-2 text-stone-400">{item.category}</p>
            </div>
          </div>

          <div className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm font-black text-stone-300">
            {item.status}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-stone-500">
              Summary
            </p>
            <p className="leading-7 text-stone-300">{item.summary}</p>
          </div>

          <div className="rounded-[1.5rem] border border-teal-300/15 bg-teal-300/5 p-5">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-teal-300">
              Research Objective
            </p>
            <p className="leading-7 text-stone-300">{item.objective}</p>
          </div>

          <div className="rounded-[1.5rem] border border-orange-300/15 bg-orange-300/5 p-5">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-orange-300">
              Highlights
            </p>

            <div className="space-y-3">
              {item.highlights.map((highlight) => (
                <div key={highlight} className="flex gap-3">
                  <span
                    className={`mt-2 h-2 w-2 shrink-0 rounded-full ${tone.dot}`}
                  />
                  <p className="leading-7 text-stone-300">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
            <div className="mb-4 flex items-center gap-2 text-stone-200">
              <Sparkles className="h-5 w-5 text-teal-200" />
              <p className="font-bold">Tools / Themes</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {item.stack.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-sm font-bold text-stone-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResearchFocus() {
  const [activeId, setActiveId] = useState("frame");
  const activeItem = researchItems.find((item) => item.id === activeId);

  return (
    <section id="research" className="relative px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
      <div className="mx-auto mb-12 max-w-7xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-orange-300">
          Research
        </p>
        <h2 className="mt-3 font-display text-4xl font-black text-stone-100 md:text-5xl">
          Research Focus
        </h2>
      </div>

      <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {researchItems.map((item) => (
            <ResearchNode
              key={item.id}
              item={item}
              isActive={activeId === item.id}
              onClick={() => setActiveId(item.id)}
            />
          ))}
        </div>

        <ResearchPanel item={activeItem} />
      </div>
    </section>
  );
}