"use client";
import { motion } from "framer-motion";

const stairanimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

const reversesaindex = (index) => {
    return 6 - index - 1;
};

const Stair = () => {
    return (
        <div className="w-full grid grid-cols-6">
            {Array(6).fill(0).map((_, index) => (
                <motion.div
                    key={index}
                    variants={stairanimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: reversesaindex(index) * 0.1,
                    }}
                    className="bg-white w-full h-full relative"
                />
            ))}
        </div>
    );
};

export default Stair;
