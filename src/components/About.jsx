import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <SectionHeader
        eyebrow="About"
        title="About Me"
        description="A machine learning graduate student focused on building practical AI systems that are reliable, useful, and deployable."
      />
    </section>
  );
}