import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { toast } from 'react-toastify';
import axios from 'axios';
import packages from '../../data/data.ts'; // Adjust the path based on your file structure

interface User {
    _id: string;
    username: string;
    password: string;
    packageName: string; // Adjusted to reflect the package name
    packageSpeed: string; // Added to reflect the package speed
    packagePrice: string; // Changed to string to reflect the package price
    billStatus: boolean; // Indicates the billing status
}

interface UserModalProps {
    isOpen: boolean; // Control modal visibility
    onClose: () => void; // Function to close the modal
    onUserCreated: (newUser: User) => void; // Callback when a new user is created
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onUserCreated }) => {
    const [newUser, setNewUser] = useState<Omit<User, '_id'>>({
        username: '',
        password: '',
        packageName: packages[0].title, // Default package name
        packageSpeed: packages[0].speed, // Default package speed
        packagePrice: String(packages[0].price), // Ensure the price is a string
        billStatus: false, // Initialize bill status here
    });
    const [loading, setLoading] = useState(false);

    const handleCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        // Basic validation
        if (!newUser.username || !newUser.password) {
            toast.error('Username and password are required!'); // Display error for missing fields
            setLoading(false);
            return;
        }

        try {
            // Prepare user object to send to the API
            const userToCreate = {
                ...newUser, // Now includes billStatus: false
            };

            // Log the userToCreate object for debugging
            //console.log('User to create:', userToCreate);

            // API call to create a new user
            const response = await axios.post('https://isp-billing-backend.vercel.app/api/auth/register', userToCreate);
            toast.success('User created successfully!'); // Notify success

            // Callback to inform the parent component about the new user
            onUserCreated({
                ...userToCreate,
                _id: response.data.userId, // Assign the generated user ID from the response
            });

            // Reset form state to default values
            setNewUser({
                username: '',
                password: '',
                packageName: packages[0].title,
                packageSpeed: packages[0].speed,
                packagePrice: String(packages[0].price), // Reset the price as string
                billStatus: false, // Reset bill status
            });
            onClose(); // Close the modal
        } catch (error) {
            toast.error('Error creating user!'); // Notify error
            console.error('Error creating user:', error); // Log the error
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                    <Dialog.Title className="text-2xl font-semibold text-gray-800 mb-4">Create New User</Dialog.Title>
                    <form onSubmit={handleCreateUser}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={newUser.username}
                                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })} // Update username
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="package" className="block text-gray-700">Package</label>
                            <select
                                id="package"
                                value={newUser.packageName} // Bind select value to packageName
                                onChange={(e) => {
                                    const selectedPackage = packages.find(pkg => pkg.title === e.target.value);
                                    if (selectedPackage) {
                                        // Update the user state with selected package details
                                        setNewUser({
                                            ...newUser,
                                            packageName: selectedPackage.title,
                                            packageSpeed: selectedPackage.speed,
                                            packagePrice: String(selectedPackage.price), // Convert price to string
                                        });
                                    }
                                }}
                                className="w-full p-2 border rounded-lg"
                                required
                            >
                                {packages.map((pkg) => (
                                    <option key={pkg.title} value={pkg.title}>
                                        {pkg.speed + " " + pkg.title} {/* Display package speed and name */}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={newUser.password}
                                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} // Update password
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading} // Disable button while loading
                            className={`w-full ${loading ? 'bg-gray-500' : 'bg-blue-500'} text-white p-2 rounded-lg hover:bg-blue-700 transition`}
                        >
                            {loading ? 'Creating...' : 'Create User'} {/* Button text based on loading state */}
                        </button>
                    </form>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};

export default UserModal