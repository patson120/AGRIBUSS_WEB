// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../redux/feature/productSlice';

const ProductList = () => {
    const productList = useSelector(state => state.product.products);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    console.log(productList)

    useEffect(() => {
        
    const fetchProducts = async () => {
        const response = await dispatch(getProduct());
        console.log("Product fetch: ",response)
        console.log("Product fetch: ",response.payload.data)
        setProducts(response.payload.data);
    };

        fetchProducts(); 
    }, []);


    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Product List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product._id} className="border rounded p-4">
                        
                        <img src={`http://localhost:4000\\${product.images[0]}`} alt={product.name} className="w-full h-64 object-cover mb-2" />
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;