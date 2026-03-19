"use client";
import React, { useEffect, useState } from "react";

const EyeAnimation = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const deg = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setAngle(deg-180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* outer eye */}
      <div className="w-[14vw] h-[14vw] rounded-full bg-zinc-100 flex items-center justify-center">
        
        {/* inner eye */}
        <div className="relative w-1/2 h-1/2 rounded-full bg-black flex items-center justify-center">
          
          {/* pupil */}
          <div
            style={{
              transform: `rotate(${angle}deg) translate(10px)`,
            }}
            className="absolute w-full h-1/2"
          >
            <div className="w-5 h-5 rounded-full bg-white"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EyeAnimation;