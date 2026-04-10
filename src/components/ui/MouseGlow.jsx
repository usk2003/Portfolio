import React, { useState } from "react";

const MouseGlow = () => {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });

  const handleMove = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseMove={handleMove}
      className="fixed inset-0 pointer-events-none z-50"
    >
      <div
        className="
          absolute
          w-[10000px] h-[10000px]
          bg-[radial-gradient(circle,rgba(255,255,255,1),rgba(168,85,247,0.3),transparent_70%)]
          blur-[95px]
          -translate-x-1/2 -translate-y-1/2
        "
        style={{
          left: pos.x,
          top: pos.y,
          transition: "all 0.07s ease-out",
        }}
      ></div>
    </div>
  );
};

export default MouseGlow;
