"use client";

import { useState, memo } from "react";
import dynamic from "next/dynamic";
import { LineWave } from "react-loader-spinner";

/* ===============================
   🚀 Dynamic Spline (code split)
================================ */
const Spline = dynamic(() => import("@splinetool/react-spline"), {
    ssr: false,
    loading: () => null, // loader handled manually
});

function SplineScene() {
    const [loading, setLoading] = useState(true);

    return (
        <main className="relative w-full min-h-[70vh] sm:min-h-screen flex items-center justify-center overflow-hidden">

            {/* ✅ Loader (centered + smooth) */}
            {loading && (
                <div className="absolute inset-0 pl-2.5 z-10 flex items-center justify-center bg-[#0a0a0a]/40 backdrop-blur-[2px]">
                    <LineWave
                        visible={true}
                        height="90"
                        width="90"
                        color="#26C6DA"
                        ariaLabel="line-wave-loading"
                    />
                </div>
            )}

            {/* ✅ Spline wrapper prevents layout jump */}
            <div className="w-full h-[70vh] sm:h-screen will-change-transform">
                <Spline
                    scene="https://prod.spline.design/17z9SqzJnk-k6kb4/scene.splinecode"
                    onLoad={() => setLoading(false)}
                    onError={(e) => {
                        console.error("Spline loading error:", e);
                        setLoading(false);
                    }}
                />
            </div>
        </main>
    );
}

export default memo(SplineScene);