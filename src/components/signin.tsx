import { motion } from "framer-motion";
import Navbar from "./navbar.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useRef, useState, useEffect } from "react";

const Signin = () => {
    const formRef = useRef<HTMLDivElement>(null);
    const [formHeight, setFormHeight] = useState(0);

    // Update the height of the slider based on the form height
    useEffect(() => {
        if (formRef.current) {
            setFormHeight(formRef.current.offsetHeight);
        }
    }, []);

    return (
        <section>
            <Navbar />
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center w-full min-h-screen h-full bg-[#00141f] py-6 px-4 lg:py-0 lg:gap-6">
                {/* Form container with white background */}
                <motion.div
                    ref={formRef}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-2/5 max-w-md bg-white rounded-lg shadow-lg p-6 lg:p-8 lg:mr-8 z-40"
                >
                    <h1 className="text-2xl font-bold text-left text-gray-900 mb-6">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="uid" className="block mb-2 text-sm font-medium text-gray-900">
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
                                    <label htmlFor="remember" className="text-gray-900">Remember me</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium text-[#00406c] hover:underline">
                                Forgot password?
                            </a>
                        </div>
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full text-white bg-[#00406c] hover:bg-[#002945] focus:ring-4 focus:outline-none focus:ring-[#002945] font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-transform duration-300"
                        >
                            Sign in
                        </motion.button>
                        {/* Contact Number */}
                        <div className="flex items-center justify-center">
                            <p className="text-sm text-gray-900">Contact us at <span className="font-semibold">123-456-7890</span></p>
                        </div>
                    </form>
                </motion.div>

                {/* Slider container with white background */}
                <div className="w-full lg:w-3/5 mt-8 lg:mt-0 h-full mx-4 lg:mx-0">
                    <div className="rounded-lg shadow-lg">
                        <Swiper
                            spaceBetween={30}
                            autoplay={{ delay: 3000 }}
                            loop={true}
                            modules={[Autoplay]}
                            style={{ height: `${formHeight}px` }} // Set slider height to match form height
                            className="w-full rounded-lg"
                        >
                            <SwiperSlide>
                                <img
                                    src="https://kinsta.com/wp-content/uploads/2022/02/what-is-isp.jpg"
                                    alt="Slider 1"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://runa.io/hs-fs/hubfs/1%20-%20ppl.png?width=1440&name=1%20-%20ppl.png"
                                    alt="Slider 2"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://www.axigen.com/usr/files/articles/x103.png.pagespeed.ic.ejL4eChxeO.png"
                                    alt="Slider 3"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* CopyRight Text */}
            <div className="flex items-center justify-center bg-[#00141f] py-4">
                <p className="text-sm text-gray-100">© 2024 DIGI.ISP. All rights reserved.</p>
            </div>
        </section>
    );
};

export default Signin;
