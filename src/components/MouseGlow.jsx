import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[2] overflow-hidden">
      <div
        className="mouse-soft-glow absolute"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      <div
        className="mouse-soft-ring absolute"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </div>
  );
}