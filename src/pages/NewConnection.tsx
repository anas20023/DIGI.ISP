import { useState } from "react";
import Navbar from "../components/navbar";
import packagesData from "../data/data.ts";

// Sample data for divisions, districts, and thanas
const divisions = [
    { id: 1, name: "Division 1" },
    { id: 2, name: "Division 2" },
];
const districts = {
    1: [{ id: 101, name: "District 1-1" }, { id: 102, name: "District 1-2" }],
    2: [{ id: 201, name: "District 2-1" }, { id: 202, name: "District 2-2" }],
};
const thanas = {
    101: [{ id: 1001, name: "Thana 1-1-1" }, { id: 1002, name: "Thana 1-1-2" }],
    102: [{ id: 1003, name: "Thana 1-2-1" }, { id: 1004, name: "Thana 1-2-2" }],
    201: [{ id: 2001, name: "Thana 2-1-1" }, { id: 2002, name: "Thana 2-1-2" }],
    202: [{ id: 2003, name: "Thana 2-2-1" }, { id: 2004, name: "Thana 2-2-2" }],
};

const Connection = () => {
    const [selectedDivision, setSelectedDivision] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedThana, setSelectedThana] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        selectedPackage: "",
    });

    const handleDivisionChange = (e) => {
        setSelectedDivision(e.target.value);
        setSelectedDistrict("");
        setSelectedThana("");
    };

    const handleDistrictChange = (e) => {
        setSelectedDistrict(e.target.value);
        setSelectedThana("");
    };

    const handleThanaChange = (e) => {
        setSelectedThana(e.target.value);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", { ...formData, selectedDivision, selectedDistrict, selectedThana });
    };

    return (
        <section>
            <Navbar />
            <div className="bg-[#00141f] w-full min-h-screen p-4 lg:p-8">
                <h1 className="text-white text-4xl mb-8 text-center">Explore our Fastest Connection</h1>
                <div className="flex flex-col w-full max-w-4xl mx-auto h-auto bg-white my-6 lg:my-10 rounded-lg shadow-lg p-6 lg:p-10">
                    <h1 className="text-center text-lg lg:text-2xl text-[#00141f] mb-6 font-semibold">
                        Choose Your Location & Package
                    </h1>

                    <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                        {/* Left Column */}
                        <div className="flex flex-col space-y-6">
                            {/* Name Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            {/* Phone Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>

                            {/* Package Selection */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Package</label>
                                <select
                                    name="selectedPackage"
                                    value={formData.selectedPackage}
                                    onChange={handleChange}
                                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                                >
                                    <option value="">Select Package</option>
                                    {packagesData.map((pkg, index) => (
                                        <option key={index} value={pkg.title}>
                                            {pkg.title} - {pkg.price} ({pkg.speed})
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col space-y-6">
                            {/* Division Dropdown */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Division</label>
                                <select
                                    value={selectedDivision}
                                    onChange={handleDivisionChange}
                                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                                >
                                    <option value="">Select Division</option>
                                    {divisions.map((division) => (
                                        <option key={division.id} value={division.id}>
                                            {division.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* District Dropdown */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">District</label>
                                <select
                                    value={selectedDistrict}
                                    onChange={handleDistrictChange}
                                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                                    disabled={!selectedDivision}
                                >
                                    <option value="">Select District</option>
                                    {selectedDivision &&
                                        districts[selectedDivision]?.map((district) => (
                                            <option key={district.id} value={district.id}>
                                                {district.name}
                                            </option>
                                        ))}
                                </select>
                            </div>

                            {/* Thana Dropdown */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Thana</label>
                                <select
                                    value={selectedThana}
                                    onChange={handleThanaChange}
                                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                                    disabled={!selectedDistrict}
                                >
                                    <option value="">Select Thana</option>
                                    {selectedDistrict &&
                                        thanas[selectedDistrict]?.map((thana) => (
                                            <option key={thana.id} value={thana.id}>
                                                {thana.name}
                                            </option>
                                        ))}
                                </select>
                            </div>
                        </div>

                        {/* Submit Button - Full Width */}
                        <div className="col-span-1 md:col-span-2">
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Connection;
