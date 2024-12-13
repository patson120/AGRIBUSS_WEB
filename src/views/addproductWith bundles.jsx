// // src/components/CreateProductForm.js
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { createProduct } from '../features/productSlice';

// const CreateProductForm = () => {
//     const dispatch = useDispatch();
//     const { loading, error } = useSelector((state) => state.product);

//     const [formData, setFormData] = useState({
//         name: '',
//         description: '',
//         SKU: '',
//         category: '',
//         stockQuantity: 0,
//         price: 0,
//         priceBundles: [],
//         productImages: null,
//         videos: null,
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handlePriceBundleChange = (index, e) => {
//         const { name, value } = e.target;
//         const updatedBundles = [...formData.priceBundles];
//         updatedBundles[index] = { ...updatedBundles[index], [name]: value };
//         setFormData({ ...formData, priceBundles: updatedBundles });
//     };

//     const addPriceBundle = () => {
//         setFormData({ ...formData, priceBundles: [...formData.priceBundles, { price: '', measurementUnit: '', quantity: '' }] });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formDataToSend = new FormData();
//         for (const key in formData) {
//             if (Array.isArray(formData[key])) {
//                 formData[key].forEach((item) => {
//                     for (const bundleKey in item) {
//                         formDataToSend.append(`priceBundles[]`, JSON.stringify(item));
//                     }
//                 });
//             } else {
//                 formDataToSend.append(key, formData[key]);
//             }
//         }
//         dispatch(createProduct(formDataToSend));
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" name="name" placeholder="Product Name" onChange={handleChange} required />
//             <input type="text" name="description" placeholder="Description" onChange={handleChange} required />
//             <input type="text" name="SKU" placeholder="SKU" onChange={handleChange} required />
//             <input type="text" name="category" placeholder="Category" onChange={handleChange} required />
//             <input type="number" name="stockQuantity" placeholder="Stock Quantity" onChange={handleChange} required />
//             <input type="number" name="price" placeholder="Price" onChange={handleChange} required />

//             <h3>Price Bundles</h3>
//             {formData.priceBundles.map((bundle, index) => (
//                 <div key={index}>
//                     <input type="number" name="price" placeholder="Price" onChange={(e) => handlePriceBundleChange(index, e)} required />
//                     <select name="measurementUnit" onChange={(e) => handlePriceBundleChange(index, e)} required>
//                         <option value="">Select Unit</option>
//                         <option value="bunch">Bunch</option>
//                         <option value="kg">Kg</option>
//                         <option value="bag">Bag</option>
//                         <option value="basket">Basket</option>
//                         <option value="dozen">Dozen</option>
//                     </select>
//                     <input type="number" name="quantity" placeholder="Quantity" onChange={(e) => handlePriceBundleChange(index, e)} required />
//                 </div>
//             ))}
//             <button type="button" onClick={addPriceBundle}>Add Price Bundle</button>

//             <input type="file" name="productImages" multiple onChange={(e) => setFormData({ ...formData, productImages: e.target.files })} />
//             <input type="file" name="videos" multiple onChange={(e) => setFormData({ ...formData, videos: e.target.files })} />

//             <button type="submit" disabled={loading}>Create Product</button>
//             {error && <p>{error}</p>}
//         </form>
//     );
// };

// export default CreateProductForm;