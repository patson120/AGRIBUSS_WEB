// src/components/ProductList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, selectAllProducts } from '../features/productSlice';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    const productStatus = useSelector((state) => state.product.status);
    const error = useSelector((state) => state.product.error);

    useEffect(() => {
        if (productStatus === 'idle') {
            dispatch(getProduct());
        }
    }, [productStatus, dispatch]);

    let content;

    if (productStatus === 'loading') {
        content = <div>Loading...</div>;
    } else if (productStatus === 'succeeded') {
        content = products.map((product) => (
            <div key={product._id}>{product.name}</div>
        ));
    } else if (productStatus === 'failed') {
        content = <div>{error}</div>;
    }

    return (
        <div>
            <h2>Product List</h2>
            {content}
        </div>
    );
};

export default ProductList;