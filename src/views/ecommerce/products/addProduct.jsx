import React, { useRef, useState , useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toast } from 'primereact/toast';
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import { createProd } from '../../../Utils/api/productApi';
import { BsTrash, BsPlus } from 'react-icons/bs';
import { createProduct, getProduct } from '../../../redux/feature/productSlice';
import { getCategory } from '../../../redux/feature/categorySlice';
import { FaTimes } from 'react-icons/fa';
import Popup from '../../loader/popup';

const AddProductModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toast = useRef(null);
    const isLoggedIn = useSelector(state => !!state.user.token);
    const [categories, setCategories] = useState([]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');


    const [priceBundles, setPriceBundles] = useState([{ price: 0, measurementUnit: '', quantity: 0 }]);
 

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await dispatch(getCategory());
            console.log("Category fetch: ",response.payload.data)
            setCategories(response.payload.data)
        };
        // Populate products initially (you can replace this with an API call)
        fetchProducts() 
    }, [dispatch]);

    const initialValues = {
        name: "",
        description: "",
        category: "",
        productImages: [],
        videos: [],
        stockQuantity: 20,
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Field is required")
            .matches(/^[A-Za-z ]*$/, 'Please enter alphabetic characters'),
        description: Yup.string().required('Field is required'),
        category: Yup.string().required('Field is required'),
        stockQuantity: Yup.number().required("Field is required").min(0, "Cannot be negative"),
        productImages: Yup.array().of(
            Yup.mixed()
                .test("fileType", "Unsupported File Format", value => {
                    return value && ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(value.type);
                })
        ).required("Field is required"),
        videos: Yup.array().of(
            Yup.mixed()
                .test("fileType", "Unsupported Video Format", value => {
                    return value && ['video/mp4', 'video/mov', 'video/avi', 'video/mkv'].includes(value.type);
                })
        ).required("Field is required"),
    });

    const onSubmit = async (values) => {
    console.log("Form submitted with values:", values); 
        const finalValues = { ...values, priceBundles };
        console.log(values)	

        // Prepare the FormData object
        const formData = new FormData();
        formData.append("name", finalValues.name);
        formData.append("description", finalValues.description);
        formData.append("category", finalValues.category);
        formData.append("price", finalValues.price);
        formData.append("stockQuantity", finalValues.stockQuantity);

        // Append files for productImages
        finalValues.productImages.forEach((file, index) => {
            formData.append("productImages", file);
        });

        // Append files for videos (if necessary)
        finalValues.videos.forEach((file, index) => {
            formData.append(`videos`, file);
        });
		
		// Append price bundles
		finalValues.priceBundles.forEach((bundle, index) => {
			formData.append(`priceBundles[${index}][price]`, bundle.price);
			formData.append(`priceBundles[${index}][measurementUnit]`, bundle.measurementUnit);
			formData.append(`priceBundles[${index}][quantity]`, bundle.quantity);
		});
        try {
            const response = await dispatch(createProduct(formData));
            
            console.log(response)
            const message = response.data.message; // Adjust based on your actual response structure
            setPopupMessage(message); // Set the message
       
            setPopupVisible(true); // Show the popup
            
            // Hide the popup after 3 seconds
            setTimeout(() => {
                setPopupVisible(false);
            }, 3000);

            if(response){
                toast.current.show({ severity: "success", summary: "Product Created", detail: response, life: 3000 });
            }
            onClose()
        } catch (error) {
            
            // const message = error.message; // Adjust based on your actual response structure
            // setPopupMessage(message); // Set the message
       
            // setPopupVisible(true); // Show the popup
            
            // Hide the popup after 3 seconds
            setTimeout(() => {
                setPopupVisible(false);
            }, 3000);
            toast.current.show({ severity: "error", summary: "Error", detail: error.message, life: 3000 });
        }
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });

    if (!isOpen) return null;

    const handleOnBackGropClick = (e) => {
        if (e.target.id === "backdrop") onClose && onClose();
    };

    const addPriceBundle = () => {
        setPriceBundles([...priceBundles, { price: 0, measurementUnit: '', quantity: 0 }]);
    };

    const removePriceBundle = (index) => {
        const updatedBundles = priceBundles.filter((_, i) => i !== index);
        setPriceBundles(updatedBundles);
    };

    const handlePriceBundleChange = (index, field, value) => {
        const updatedBundles = priceBundles.map((bundle, i) => {
            if (i === index) {
                return { ...bundle, [field]: value };
            }
            return bundle;
        });
        setPriceBundles(updatedBundles);
    };
    
    const closePopup = () => {
        setPopupVisible(false);
     };

    const measurementUnits = ['kg', 'bottle', 'bag', 'net', 'piece', 'basket'];

    return (
        <div id="backdrop" onClick={handleOnBackGropClick} className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <Toast ref={toast} />
            <div className="bg-white rounded-lg p-6 w-[70%] h-[700px] overflow-y-auto shadow-lg">
                <div className='flex justify-end'>
                    <p onClick={onClose} className='cursor-pointer'>
                        <FaTimes/>
                    </p>
                </div>
                <h2 className="text-xl font-bold mb-4">Create Product</h2>
                <form className="w-full h-full flex-auto" onSubmit={formik.handleSubmit}>
                    {/* Name Field */}
                    <div className='py-2'>
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            className="mt-1 block w-full p-2 border outline-none focus:border-gray-400 border-gray-300 rounded-md shadow-sm"
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="text-red-500 text-sm">{formik.errors.name}</div>
                        ) : null}
                    </div>

                    {/* Description Field */}
                    <div className='py-2'>
                        <label className="block text-gray-700">Description</label>
                        <textarea
                            name="description"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.description}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                        ></textarea>
                        {formik.touched.description && formik.errors.description ? (
                            <div className="text-red-500 text-sm">{formik.errors.description}</div>
                        ) : null}
                    </div>

                    <div className='flex gap-4 py-2'>

                        {/* Category Field */}
                        <div className='w-1/2'>
                            <label className="block text-gray-700">Category</label>
                            <select
                                name="category"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.category}
                                className="mt-1 block w-full p-2 h-10 border border-gray-300 rounded-md shadow-sm"
                            >
                                <option value="" label="Select category" />
                                {categories.map((cat, index) => (
                                    <option key={index} value={cat.name}>{cat.name}</option>
                                ))}
                            </select>
                            {formik.touched.category && formik.errors.category ? (
                                <div className="text-red-500 text-sm">{formik.errors.category}</div>
                            ) : null}
                        </div>
                        
                        {/* Stock Quantity Field */}
                        <div className='w-1/2'>
                            <label className="block text-gray-700">Stock Quantity</label>
                            <input
                                type="number"
                                name="stockQuantity"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.stockQuantity}
                                className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-md shadow-sm"
                            />
                            {formik.touched.stockQuantity && formik.errors.stockQuantity ? (
                                <div className="text-red-500 text-sm">{formik.errors.stockQuantity}</div>
                            ) : null}
                        </div>

                    </div>


                    <div className='flex gap-4 py-2'>
                        {/* Product Images Field */}
                        <div>
                            <label className="block text-gray-700">Product Images</label>
                            <input
                                type="file"
                                name="productImages"
                                placeholder= 'Upload'
                                onChange={(event) => {
                                    const files = Array.from(event.currentTarget.files);
                                    formik.setFieldValue("productImages", files);
                                }}
                                onBlur={formik.handleBlur}
                                multiple
                                className="mt-1 block w-full file:border-none file:h-11 file:bg-primary file:text-white h-11 border border-gray-300 rounded-md shadow-sm"
                            />
                            {formik.touched.productImages && formik.errors.productImages ? (
                                <div className="text-red-500 text-sm">{formik.errors.productImages}</div>
                            ) : null}
                        </div>

                        {/* Videos Field */}
                        <div>
                            <label className="block text-gray-700">Videos</label>
                            <input
                                type="file"
                                name="videos"
                                onChange={(event) => formik.setFieldValue("videos", event.target.files)}
                                onBlur={formik.handleBlur}
                                multiple
                                className="mt-1 block w-full file:border-none file:h-11 file:bg-primary file:text-white h-11 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                    </div>


                    {/* Price Bundles */}
                    <div className="flex justify-between">
                        <h3 className=" text-gray-700 mt-4">Price Bundles</h3>
                        <button
                            type="button"
                            onClick={addPriceBundle}
                            className="mt-2  bg-green-500 text-white p-2 rounded-md"
                        >
                            <BsPlus size={20}/>
                        </button>
                        
                    </div>
                    <div className="flex text-sm  justify-between w-[80%] text-gray-500">
                        <p>Unit</p>
                        <p>Price</p>
                        <p>Quantity</p>
                    </div>
                    {priceBundles.map((bundle, index) => (
                        <div key={index} className="flex space-x-2 mt-2">
                            <input
                                type="number"
                                placeholder="Price"
                                value={bundle.price}
                                onChange={(e) => handlePriceBundleChange(index, 'price', e.target.value)}
                                className="p-2 w-16 border border-gray-300 rounded-md shadow-sm flex-1"
                            />
                            <select
                                value={bundle.measurementUnit}
                                onChange={(e) => handlePriceBundleChange(index, 'measurementUnit', e.target.value)}
                                className="p-2 border border-gray-300 rounded-md shadow-sm flex-1"
                            >
                                <option value="" label="Select unit" />
                                {measurementUnits.map((unit, idx) => (
                                    <option key={idx} value={unit}>{unit}</option>
                                ))}
                            </select>
                            <input
                                type="number"
                                placeholder="Quantity"
                                value={bundle.quantity}
                                onChange={(e) => handlePriceBundleChange(index, 'quantity', e.target.value)}
                                className="p-2 w-16 border border-gray-300 rounded-md shadow-sm flex-1"
                            />
                            <button
                                type="button"
                                onClick={() => removePriceBundle(index)}
                                className="p-2 bg-red-500 text-white rounded-md"
                            >
                                <BsTrash size={20}/>
                            </button>
                        </div>
                    ))}

                    <button type="submit" className=" font-bold mt-6 px-6 py-2 w-full bg-primary text-white rounded-md">
                        CREATE
                    </button>
                </form>
            </div>
               <Popup
                message={popupMessage} 
                isVisible={popupVisible} 
                onClose={closePopup} 
            />
        </div>
    );
};

export default AddProductModal;