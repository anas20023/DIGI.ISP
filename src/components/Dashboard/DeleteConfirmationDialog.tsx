// DeleteConfirmationDialog.tsx
import React from 'react';
import { Dialog } from '@headlessui/react';

interface DeleteConfirmationDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void;
}

const DeleteConfirmationDialog: React.FC<DeleteConfirmationDialogProps> = ({ isOpen, onClose, onDelete }) => {
    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                    <Dialog.Title className="text-xl font-semibold text-gray-800 mb-4">Confirm Deletion</Dialog.Title>
                    <p>Are you sure you want to delete this user?</p>
                    <div className="flex justify-end mt-4">
                        <button onClick={onClose} className="text-gray-600 hover:text-gray-900 mr-4">Cancel</button>
                        <button onClick={onDelete} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">Delete</button>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};

export default DeleteConfirmationDialog;
