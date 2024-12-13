import React from 'react';

const Popup = ({ message, isVisible, onClose }) => {
    if (!isVisible) return null; // Render nothing if not visible

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <p className="text-lg font-semibold">{message}</p>
                <button 
                    onClick={onClose} 
                    className="mt-4 px-4 py-2 bg-primary text-white rounded hover:scale-105 transition"
                >
                    Close
                </button>
            </div>
        </div>
    );
};  

export default Popup;