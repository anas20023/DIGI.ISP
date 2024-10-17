import { useState, useEffect } from 'react';
import { FiUsers } from 'react-icons/fi';
import { toast } from 'react-toastify';
import axios from 'axios';
import UserTable from './Dashboard/UserTable';
import UserModal from './Dashboard/UserModal';
import DeleteConfirmationDialog from './Dashboard/DeleteConfirmationDialog';
import 'react-toastify/dist/ReactToastify.css';

interface User {
    _id: string;
    username: string;
    billStatus: boolean;
    packageSpeed: string;
    package: string;
    packagePrice: string;
}

const AdminDashboard = () => {
    const [isOpen, setIsOpen] = useState(false); // Modal state for creating users
    const [users, setUsers] = useState<User[]>([]); // Specify users state type
    const [deletingId, setDeletingId] = useState<string | null>(null); // ID of user to delete

    // Fetch users from the backend when the component mounts
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://isp-billing-backend.vercel.app/api/auth/users');
                setUsers(response.data); // Assuming the response is an array of user objects
            } catch (error) {
                toast.error('Failed to fetch users!');
                console.error(error);
            }
        };
        fetchUsers();
    }, []);

    // Handle new user creation
    const handleCreateUser = async (newUser: Omit<User, '_id' | 'billStatus'>) => {
        try {
            const response = await axios.post('https://isp-billing-backend.vercel.app/api/auth/register', newUser);
            const createdUser = response.data;

            setUsers((prevUsers) => [
                ...prevUsers,
                { ...createdUser, billStatus: false }, // Add user with response ID and default billStatus
            ]);
            toast.success('User created successfully!');
        } catch (error) {
            toast.error('Error creating user!');
            console.error(error);
        }
    };

    // Handle user deletion
    const handleDeleteUser = async () => {
        if (!deletingId) return;

        try {
            await axios.delete(`https://isp-billing-backend.vercel.app/api/auth/users/${deletingId}`);
            setUsers((prevUsers) => prevUsers.filter((user) => user._id !== deletingId)); // Remove user from state
            toast.success('User deleted successfully!');
        } catch (error) {
            toast.error('Error deleting user!');
            console.error(error);
        } finally {
            setDeletingId(null); // Reset deleting state
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 flex items-center">
                <FiUsers className="mr-2" />
                Admin Dashboard
            </h1>

            <button
                onClick={() => setIsOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mb-4"
            >
                Create User
            </button>

            <UserTable
                users={users}
                onEditUser={() => { }} // Placeholder for now
                onDeleteUser={(userId) => setDeletingId(userId)} // Set user ID for deletion
            />

            {/* Modal for creating users */}
            <UserModal isOpen={isOpen} onClose={() => setIsOpen(false)} onUserCreated={handleCreateUser} />

            {/* Delete confirmation dialog */}
            <DeleteConfirmationDialog
                isOpen={!!deletingId}
                onClose={() => setDeletingId(null)}
                onDelete={handleDeleteUser}
            />
        </div>
    );
};

export default AdminDashboard;