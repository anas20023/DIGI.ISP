import { motion } from "framer-motion";

const PackageCard = ({ title, price, speed, features, buttonText, animationDelay }) => {
    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    // Split features into two columns of three features each
    const firstColumnFeatures = features.slice(0, 3);
    const secondColumnFeatures = features.slice(3, 6); // Adjust for up to 6 features total

    return (
        <motion.div
            className="flex flex-col sm:flex-row w-full bg-white rounded-lg shadow-lg justify-between items-center p-6 mb-8 border border-gray-200"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: animationDelay }}
        >
            {/* Header */}
            <div className="flex flex-col justify-center items-center lg:items-start mb-4 sm:mb-0 sm:w-1/3 text-center"> {/* Changed items-start to items-center and added text-center */}
                <div className="flex items-center mb-2 justify-center">
                    <span className="text-red-500 text-4xl mr-2">🔥</span>
                    <h2 className="text-2xl font-bold">{title}</h2>
                </div>
                <p className="text-sm text-gray-600 mb-4">Choose a package and start your internet journey</p>

                {/* Speed Display */}
                <div className="text-center mb-4">
                    <p className="text-3xl font-bold bg-slate-900 rounded-lg px-4 py-2 text-white">{speed}</p>
                </div>
            </div>

            {/* Features List - Two Columns */}
            <div className="flex flex-col sm:flex-row mb-4 w-full sm:w-2/3">
                {/* First Column */}
                <div className="flex flex-col w-full sm:w-1/2 pr-0 sm:pr-4 mb-4 sm:mb-0">
                    {firstColumnFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center mb-3">
                            <span className="text-green-500 text-lg mr-2">✔️</span>
                            <p className="text-sm">{feature}</p>
                        </div>
                    ))}
                </div>

                {/* Second Column */}
                <div className="flex flex-col w-full sm:w-1/2 pl-0 sm:pl-4">
                    {secondColumnFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center mb-3">
                            <span className="text-green-500 text-lg mr-2">✔️</span>
                            <p className="text-sm">{feature}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Price and Button */}
            <div className="flex flex-col justify-center items-center mt-4 w-full sm:w-1/3">
                <p className="text-2xl font-bold mb-4">{price}</p>
                <button className="bg-sky-500 text-white font-bold py-3 px-6 rounded hover:bg-sky-600 transition duration-300 w-full">
                    {buttonText}
                </button>
            </div>
        </motion.div>
    );
};

export default PackageCard;
