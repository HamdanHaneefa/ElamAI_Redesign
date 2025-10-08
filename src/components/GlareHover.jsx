import React, { useRef, useState } from "react";

const GlareHover = ({
  children,
  glareColor = "#ffffff",
  glareOpacity = 0.3,
  glareAngle = -30,
  glareSize = 300,
  transitionDuration = 800,
  playOnce = false,
  className = "",
  style = {},
}) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [played, setPlayed] = useState(false);

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    if (playOnce && !played) setPlayed(true);
  };

  return (
    <span
      ref={ref}
      className={`relative inline-block ${className}`}
      style={{ display: "inline-block", ...style }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}

      {/* glare element — constrained to this container */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ overflow: "hidden" }}
      >
        <span
          style={{
            position: "absolute",
            left: pos.x,
            top: pos.y,
            width: glareSize,
            height: glareSize,
            transform: `translate(-50%, -50%) rotate(${glareAngle}deg)`,
            background: `radial-gradient(circle at center, ${glareColor} ${Math.round(
              glareOpacity * 60
            )}%, rgba(255,255,255,0) 60%)`,
            opacity: hovered || (playOnce && played) ? 1 : 0,
            transition: `opacity ${transitionDuration}ms ease, transform ${transitionDuration}ms ease`,
            pointerEvents: "none",
            mixBlendMode: "screen",
          }}
        />
      </span>
    </span>
  );
};

export default GlareHover;
