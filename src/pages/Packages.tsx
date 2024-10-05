import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import Pkg from './pkg.tsx';
import data from '../data/data.ts'

const Packages = () => {
    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <Navbar />
            <div className="bg-[#00141f] w-full min-h-screen flex flex-col items-center justify-start  py-12">
                <h1 className="text-white text-4xl mb-8 text-center">Our Packages</h1>
                <div className="flex flex-col justify-center items-start gap-4 w-full max-w-6xl px-4">
                    {data.map((pkg, index) => (
                        <motion.div
                            key={index}
                            className="w-full"
                            initial="hidden"
                            animate="visible"
                            variants={cardVariants}
                            transition={{ duration: 0.5, delay: pkg.animationDelay }}
                        >
                            <Pkg
                                title={pkg.title}
                                price={pkg.price}
                                features={pkg.features}
                                buttonText={pkg.buttonText} animationDelay={pkg.animationDelay} speed={pkg.speed} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Packages;
