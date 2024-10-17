// UserTable.tsx
import React from 'react';
import { FaUserEdit, FaTrash } from 'react-icons/fa';

interface User {
    _id: string;
    username: string;
    package: string;
    billStatus: boolean;
}

interface UserTableProps {
    users: User[];
    onEditUser: (userId: string) => void;
    onDeleteUser: (userId: string) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onEditUser, onDeleteUser }) => {
    //console.log(users);
    return (
        <table className="w-full text-left table-auto">
            <thead>
                <tr>
                    <th className="py-2 px-4 border-b">Username</th>
                    <th className="py-2 px-4 border-b">Package</th>
                    <th className="py-2 px-4 border-b">Billing Status</th>
                    <th className="py-2 px-4 border-b">Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user._id}>
                        <td className="py-2 px-4 border-b">{user.username}</td>
                        <td className="py-2 px-4 border-b">{user.package}</td>
                        <td className="py-2 px-4 border-b">{user.billStatus ? 'Paid' : 'Pending'}</td>
                        <td className="py-2 px-4 border-b flex gap-4">
                            <button onClick={() => onEditUser(user._id)} className="text-blue-600 hover:text-blue-900">
                                <FaUserEdit />
                            </button>
                            <button onClick={() => onDeleteUser(user._id)} className="text-red-600 hover:text-red-900">
                                <FaTrash />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;
