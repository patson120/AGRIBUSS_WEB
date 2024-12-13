// src/App.js
import React from 'react';
import ProductUpload from './productCreate.jsx';
import ProductList from './productGet.jsx';

function ProductTest() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center">Product Upload Example</h1>
            <ProductUpload />
            <ProductList />
        </div>
    );
}

export default ProductTest;