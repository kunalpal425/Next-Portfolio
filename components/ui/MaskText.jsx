"use client";

export default function MaskedText({
  text = "WEB DEVELOPER",
  className = "",
}) {
  return (
    <div className={`relative w-full flex justify-center ${className}`}>
      <div
        className="masked-text"
        style={{
          WebkitMaskImage: `url("data:image/svg+xml;utf8,
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 250'>
              <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
                font-size='120' font-weight='900' font-family='Poppins, sans-serif'>
                ${text}
              </text>
            </svg>")`,
          maskImage: `url("data:image/svg+xml;utf8,
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 250'>
              <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
                font-size='120' font-weight='900' font-family='Poppins, sans-serif'>
                ${text}
              </text>
            </svg>")`,
        }}
      />
    </div>
  );
}