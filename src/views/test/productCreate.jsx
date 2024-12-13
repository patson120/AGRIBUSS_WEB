// src/components/ProductUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const ProductUpload = () => {
    const [name, setName] = useState('');
    const [images, setImages] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        images.forEach(image => {
            formData.append('productImages', image);
        });

        try {
            const response = await axios.post('http://localhost:4000/api/test/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setSuccessMessage(`Product ${response.data.name} uploaded successfully!`);
            setErrorMessage('');
            setName('');
            setImages([]);
        } catch (error) {
            console.error('Error uploading product:', error);
            setErrorMessage('Failed to upload product. Please try again.');
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Upload Product</h2>
            {successMessage && <p className="text-green-500">{successMessage}</p>}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2"
                    required
                />
                <input
                    type="file"
                    onChange={(e) => setImages([...e.target.files])}
                    multiple
                    className="border p-2"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2">Upload</button>
            </form>
        </div>
    );
};

export default ProductUpload;