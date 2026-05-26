import { useEffect } from "react";

export default function SiteEffects() {
  useEffect(() => {
    const root = document.documentElement;

    const handleMouseMove = (event) => {
      root.style.setProperty("--mouse-x", `${event.clientX}px`);
      root.style.setProperty("--mouse-y", `${event.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const revealTargets = document.querySelectorAll(
      [
        "section",
        ".scroll-reveal",
        ".project-card",
        ".timeline-card",
        ".profile-card",
        ".mission-card",
        ".research-card",
        ".contact-card",
      ].join(", ")
    );

    revealTargets.forEach((target) => {
      target.classList.add("scroll-reveal");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    revealTargets.forEach((target) => observer.observe(target));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="site-mouse-aura pointer-events-none fixed inset-0 z-[1]" />
      <div className="site-cursor-ring pointer-events-none fixed z-[9999]" />
    </>
  );
}