import Link from "next/link";
import Button from "@/components/ui/button";

const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Kunal_resume.pdf";
    link.download = "resume.pdf";
    link.click();
};

export default function Navbar() {
    return (
        <nav className="fixed w-full mt-3 top-0 z-50 flex sm:pt-1.5 items-center justify-between  px-8 py-4 bg-transparent backdrop-blur-sm">
            <h2 className="text-xl font-bold">
                <span className="text-cyan-400">KUNAL</span> | MERN Stack Developer
            </h2>
            <div className="hidden md:flex gap-8 text-lg">
                <Link href="/" className="hover:text-gray-300 transition">Home</Link>
                <Link href="/about" className="hover:text-gray-300 transition">About</Link>
                <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
                <Link href="/blog" className="hover:text-gray-300 transition">Blog</Link>
            </div>
            <div className="hidden md:block">
                <Button text="Hire Me" onClick={downloadResume} />
            </div>
        </nav>
    );
}
