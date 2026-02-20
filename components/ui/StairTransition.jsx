"use client"
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import Stair from "./Stair";

const StartTransition = () => {
    const pathname = usePathname();
    return (
        <AnimatePresence mode="wait">
            <div key={pathname}>
                <div className="w-screen h-screen fixed top-0 right-0 left-0 z-40 pointer-events-none flex">
                    <Stair />
                </div>
            </div>
        </AnimatePresence>
    )
}

export default StartTransition