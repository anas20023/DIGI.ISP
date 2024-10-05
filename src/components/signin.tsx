import { motion } from "framer-motion"; // Import Framer Motion
import Navbar from "./navbar.tsx";

const Signin = () => {
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center w-full h-screen bg-[#00141f]">
                {/* Animated form container */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-md bg-white rounded-lg shadow-lg p-8"
                >
                    <h1 className="text-2xl font-bold text-left text-gray-900 mb-6">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                User ID
                            </label>
                            <input
                                type="text"
                                name="uid"
                                id="uid"
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#00406c] focus:border-[#00406c] block w-full p-3 transition-shadow duration-300"
                                placeholder="123456"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#00406c] focus:border-[#00406c] block w-full p-3 transition-shadow duration-300"
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="remember"
                                        aria-describedby="remember"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#00406c]"
                                        required
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="text-gray-500">Remember me</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium text-[#002945] hover:underline">
                                Forgot password?
                            </a>
                        </div>
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full text-white bg-[#002945] hover:bg-[#00406c] focus:ring-4 focus:outline-none focus:ring-[#00406c] font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-transform duration-300"
                        >
                            Sign in
                        </motion.button>
                        {/*Contact Number will show below this in center*/}
                        <div className="flex items-center justify-center">
                            <p className="text-sm text-gray-500">Contact us at 123-456-7890</p>
                        </div>
                    </form>
                </motion.div>
            </div>
        </>
    );
}

export default Signin;
