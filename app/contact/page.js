"use client";
import React from 'react'
import ContactForm from '@/components/ui/Form'


export default function OrbitSection() {
  return (
    <section className="min-h-screen pt-10 bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        <ContactForm />
        <div className="flex items-center justify-center">
          <div className="w-64 h-64 relative">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full animate-[spin_12s_linear_infinite]"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* rings */}
              <circle
                cx="50"
                cy="50"
                r="49"
                stroke="#ffffff"
                strokeWidth="0.25"
                fill="none"
                className="[stroke-dasharray:6_6] animate-[dash_6s_linear_infinite]"
              />

              <circle
                cx="50"
                cy="50"
                r="49"
                stroke="#ffffff"
                strokeWidth="0.25"
                fill="none"
                className="[stroke-dasharray:6_6] animate-[dash_6s_linear_infinite] [animation-delay:3s]"
              />

              {/* orbit dot */}
              <g>
                <circle cx="50" cy="1" r="1.6" fill="#ffffff" />
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from="0 50 50"
                  to="360 50 50"
                  dur="2.8s"
                  repeatCount="indefinite"
                />
              </g>
            </svg>

          </div>
        </div>

      </div>

      {/* Tailwind keyframes */}
      <style jsx global>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 100;
          }
        }
      `}</style>
    </section>
  );
}

