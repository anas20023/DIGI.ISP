import { useState } from "react";
import { motion } from "framer-motion"; // Importing Framer Motion

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-[#000e14]">
            <div className="flex items-center justify-between w-full max-w-7xl p-4 mx-auto">
                <a href="/" className="text-4xl font-bold text-white">DIGI.ISP</a>
                <button
                    className="text-white md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {/* Hamburger Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                {/* Menu for larger screens */}
                <div className="hidden md:flex items-center space-x-4">
                    <a href="/packages" className="text-base text-white hover:text-blue-300 transition-colors">Packages</a>
                    <a href="/newcnn" className="text-base text-white hover:text-blue-300 transition-colors">New Connection</a>
                    <a href="/contact" className="text-base bg-[#00406c] hover:bg-[#00587a] px-4 py-2 rounded text-slate-100 transition-colors">Contact us</a>
                </div>
            </div>

            {/* Mobile menu with animation */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden md:hidden"
            >
                <div className="flex flex-col items-start p-4 space-y-6 bg-[#00406c] text-white">
                    <a href="/packages" className="text-base hover:text-blue-300 transition-colors">Packages</a>
                    <a href="/newcnn" className="text-base hover:text-blue-300 transition-colors">New Connection</a>
                    <a href="/contact" className="text-base bg-[#00587a] hover:bg-[#0078a0] px-4 py-2 rounded transition-colors">Contact us</a>
                </div>
            </motion.div>
        </nav>
    );
}

export default Navbar;
