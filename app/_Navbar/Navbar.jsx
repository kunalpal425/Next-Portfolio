import Link from "next/link";
import Button from "@/components/ui/button";
export default function Navbar() {
    return (
        <nav className="fixed w-full top-0 z-50 flex items-center justify-between px-8 py-4 bg-transparent backdrop-blur-sm">
            <h2 className="text-xl font-bold">
                KUNAL <span className="text-gray-300">| MERN Stack Developer</span>
            </h2>
            <div className="hidden md:flex gap-8 text-lg">
                <Link href="/" className="hover:text-gray-300 transition">Home</Link>
                <Link href="/about" className="hover:text-gray-300 transition">About</Link>
                <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
                <Link href="/blog" className="hover:text-gray-300 transition">Blog</Link>
            </div>
            <div className="hidden md:block">
                <Link href="#contact">
                    <Button text="Hire Me"/>
                </Link>
            </div>
        </nav>
    );
}
