"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { LineWave } from "react-loader-spinner";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
    ssr: false,
});

export default function Home() {
    const [loading, setLoading] = useState(true);

    return (
        <main className="relative w-full h-screen flex items-center justify-center">

            {/* Loader */}
            {loading && (
                <div className="absolute z-10">
                    <LineWave
                        visible={true}
                        height="100"
                        width="100"
                        color="#26C6DA"
                        ariaLabel="line-wave-loading"
                    />
                </div>
            )}

            {/* Spline */}
            <Spline
                scene="https://prod.spline.design/17z9SqzJnk-k6kb4/scene.splinecode"
                onLoad={() => setLoading(false)}
            />
        </main>
    );
}
