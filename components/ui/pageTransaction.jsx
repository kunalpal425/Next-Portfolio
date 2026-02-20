"use client"
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";


const PageTransaction = ({ children }) => {
    const pathname = usePathname();
    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div initial={{ opacity: 1 }} animate={{
                    opacity: 0,
                    transition: { delay: 0.4, duration: 1, ease: "easeInOut" },
                }}
                    className="w-screen h-screen fixed top-0 bg-black pointer-events-none"
                />
                {children}
            </div>
        </AnimatePresence>
    )
}

export default PageTransaction;