import Navbar from "../components/navbar";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <>
            <Navbar />
            <div className="bg-[#00141f] w-full min-h-screen flex flex-col items-center justify-center p-8">
                <h1 className="text-white text-4xl mb-8 text-center">Contact Us</h1>
                <div className="flex flex-col md:flex-row justify-center items-start gap-8 w-full max-w-6xl relative">

                    {/* Form and Inquiry Section */}
                    <motion.div
                        className="relative w-full md:w-1/3 order-1 md:order-1"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <form className="bg-white rounded-lg shadow-lg p-6 mb-4 z-10 relative">
                            <h2 className="text-lg font-bold text-center mb-4">Send Us a Message</h2>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-400"
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-400"
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-400"
                                    id="message"
                                    placeholder="Your Message"
                                    rows={4}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-sky-500 text-white font-bold py-2 px-4 rounded hover:bg-sky-600 transition duration-300 shadow-md w-full"
                            >
                                Send Message
                            </button>
                        </form>
                        <div className="bg-white rounded-lg shadow-lg p-6 z-10">
                            <h2 className="text-lg font-bold">General Inquiries</h2>
                            <p className="text-sm">example@gmail.com</p>
                            <p className="text-sm">1-600-890-4567</p>
                            <h2 className="text-lg font-bold mt-4">Location</h2>
                            <p className="text-sm">123 Main St, City, State, ZIP</p>
                        </div>
                    </motion.div>

                    {/* Map Section */}
                    <motion.div
                        className="relative w-full md:w-2/3 order-2 md:order-1"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <iframe
                            title="Google Map"
                            width="100%"
                            height="400"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096315!2d144.9537353153169!3d-37.8162799797519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f7c5c03%3A0x5045675218ceed30!2s123%20Main%20St%2C%20City%2C%20State%2C%20ZIP!5e0!3m2!1sen!2sus!4v1614359399928!5m2!1sen!2sus"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="rounded-lg shadow-lg"
                        ></iframe>

                        {/* Follow Us Section */}
                        <div className="bg-white rounded-lg shadow-lg p-6 mt-8 w-full">
                            <h2 className="text-lg font-bold text-center">Follow Us</h2>
                            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-4">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 transition duration-300 flex items-center justify-center"
                                >
                                    <FaFacebook size={30} />
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-600 transition duration-300 flex items-center justify-center"
                                >
                                    <FaTwitter size={30} />
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-pink-600 hover:text-pink-800 transition duration-300 flex items-center justify-center"
                                >
                                    <FaInstagram size={30} />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 hover:text-blue-900 transition duration-300 flex items-center justify-center"
                                >
                                    <FaLinkedin size={30} />
                                </a>
                                <a
                                    href="https://youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-red-600 hover:text-red-800 transition duration-300 flex items-center justify-center"
                                >
                                    <FaYoutube size={30} />
                                </a>
                                <a
                                    href="https://tiktok.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black hover:text-gray-800 transition duration-300 flex items-center justify-center"
                                >
                                    <FaTiktok size={30} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Contact;
