import AppNavbar from '../../partials/navBar/AppNavbar';
import { CartItems, EcommercenavLinks } from '../../constants/objects';
import { BsArrowLeftCircle, BsCart2 } from 'react-icons/bs';
import { FaTimesCircle } from 'react-icons/fa';
import LandingFooter from '../../partials/footer/LandingFooter';
import { Link } from 'react-router-dom';
import image from '../../constants/images';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decrementQuantity, incrementQuantity, initializeCart, removeFromCart } from '../../redux/feature/cartSlice';
import { createOrder } from '../../redux/feature/orderSlice';
import { NODE_APP_BASE_URL } from '../../Utils';

export default function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const [sortOption, setSortOption] = useState();
    const [quantity, setQuantity] = useState('Price');
    const [selectOM, setSelectOM] = useState(false);
    const [selectMOMO, setSelectMOMO] = useState(false);
    const [selectedMeasurementUnit, setSelectedMeasurementUnit] = useState({});

    useEffect(() => {
        dispatch(initializeCart()); // Fetch cart items when the app loads
    }, [dispatch]);

    const calculateTotals = () => {
        if (!cartItems?.data?.products) return [];
        return cartItems.data.products.map(item => {
            const selectedBundle = selectedMeasurementUnit.id === item._id 
                ? selectedMeasurementUnit 
                : item.productId?.priceBundles[0] || { price: 0 };

            const itemTotal = selectedBundle.price * item.quantity; // Total for this item
            return {
                id: item._id,
                total: itemTotal,
            };
        });
    };

    const itemTotals = calculateTotals();
    const overallTotal = itemTotals.reduce((sum, item) => sum + item.total, 0);

    const sortedProducts = () => {
        if (!cartItems?.data?.products) return [];
        const products = [...cartItems.data.products];

        if (sortOption === 'Price') {
            return products.sort((a, b) => {
                const priceA = a.productId.priceBundles[0]?.price || 0;
                const priceB = b.productId.priceBundles[0]?.price || 0;
                return priceA - priceB;
            });
        } else if (sortOption === 'Name') {
            return products.sort((a, b) => a.productId.name.localeCompare(b.productId.name));
        }
        return products; // Return unsorted if no valid option
    };

    const handleCheckout = () => {  
        const newOrder = {
            id: Math.random().toString(36).substr(2, 9), // Generate a random ID for the order
            items: cartItems,
            orderDate: new Date().toISOString(),
            status: 'Pending',
            shippingAddress: 'Yaounde, Mokolo', // You can make this dynamic
        };

        dispatch(createOrder(newOrder)); // Create the order
        dispatch(clearCart()); // Clear the cart after checkout
        alert('Checkout successful!'); // Notify the user
    };

    const handleMeasurementChange = (itemId, measurementUnit) => {
        const item = cartItems.data.products.find(product => product._id === itemId);
        const selectedBundle = item.productId.priceBundles.find(bundle => bundle.measurementUnit === measurementUnit);
        setSelectedMeasurementUnit({
            id: itemId,
            price: selectedBundle ? selectedBundle.price : 0,
            measurement: measurementUnit,
        });
    };
    const handleIncrement = async (id) => {
        console.log("increment", id)
    };
    
    const handleDecrement = async (id) => {
       console.log("decrement", id)
    };

    const handleDelete = (id) => {
        dispatch(removeFromCart({ id }));
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const shippingCost = 1000; // Example shipping cost

    return (
        <div className="bg-white">
            <AppNavbar array={EcommercenavLinks} see={true} />
            <div className='flex flex-col md:flex-row h-screen'>
                {cartItems?.data?.products?.length > 0 ? (
                    <div className='w-full md:w-4/6 pt-4 px-4 md:px-8'>
                        <p className='text-2xl font-bold py-4'>Shopping Cart</p>
                        <div className='flex text-sm justify-between items-center'>
                            <p className='text-gray-500'>You have {cartItems.data.products.length} products in your cart</p>
                            <div className='flex rounded-full px-2 bg-gray-100 p-1'>
                                <p className='text-gray-500'>Sort by: </p>
                                <select value={sortOption} onChange={handleSortChange} className='px-2 bg-transparent outline-none'>
                                    <option value="Price">Price</option>
                                    <option value="Name">Name</option>
                                </select>
                            </div>
                        </div>
                        <div className='w-full h-[450px] overflow-x-auto py-4'>
                            <table className='w-full border-b border-gray-700 bg-white'>
                                <thead>
                                    <tr>
                                        <th className='text-left p-4 font-medium w-2/5 text-gray-600'>Product Detail</th>
                                        <th className='text-left font-medium text-gray-600'>Quantity</th>
                                        <th className='text-left font-medium text-gray-600'>Price</th>
                                        <th className='text-left font-medium text-gray-600'>Unit</th>
                                        <th className='text-left font-medium text-gray-600'>Total</th>
                                        <th className='text-left font-medium text-gray-600'></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedProducts().map(item => (
                                        <tr key={item._id} className='border-b border-gray-100 text-sm hover:bg-gray-50'>
                                            <td className='flex gap-4 p-4'>
                                                <img src={`${NODE_APP_BASE_URL}/${item?.productId?.images[0]}`} alt="Product" className='h-12 w-12 rounded-full' />
                                                <div className='flex flex-col gap-1'>
                                                    <p className='font-bold'>{item?.productId?.name}</p>
                                                    <p>Melen</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='flex p-1 w-24 justify-between'>
                                                    <button onClick={() => handleDecrement(item.productId._id)} className='px-2 border rounded-lg'>-</button>
                                                    <p className='px-2 border text-center'>{item.quantity}</p>
                                                    <button onClick={() => handleIncrement(item.productId._id)} className='px-2 border rounded-lg'>+</button>
                                                </div>
                                            </td>
                                            <td>
                                                <span>{selectedMeasurementUnit?.id === item?._id ? selectedMeasurementUnit?.price : item?.productId?.priceBundles[0]?.price} XAF</span>
                                            </td>
                                            <td>
                                                <select 
                                                    onChange={(e) => handleMeasurementChange(item._id, e.target.value)} 
                                                    className='bg-transparent outline-none'
                                                >
                                                    {item?.productId?.priceBundles.map((bundle) => (
                                                        <option key={bundle._id} value={bundle.measurementUnit}>
                                                            {bundle.measurementUnit}
                                                        </option>   
                                                    ))}
                                                </select>
                                            </td>
                                            <td>
                                                {itemTotals.find(total => total.id === item._id)?.total.toFixed(2)} XAF
                                            </td>
                                            <td className='text-red-500'>
                                                <FaTimesCircle className='cursor-pointer' onClick={() => handleDelete(item._id)} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='flex justify-end py-4'>
                            <table className='w-1/5'>
                                <tbody className='text-md'>
                                    <tr>
                                        <td>Subtotal:</td>
                                        <td className='font-semibold'>{overallTotal.toFixed(2)} XAF</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping:</td>
                                        <td className='font-semibold'>{shippingCost} XAF</td>
                                    </tr>
                                    <tr className='font-semibold'>
                                        <td>Total:</td>
                                        <td>{(overallTotal + shippingCost).toFixed(2)} XAF</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='flex gap-4 p-2 text-green-600 text-sm'>
                            <Link to="/market/product" className='flex gap-2'>
                                <BsArrowLeftCircle className='cursor-pointer' />
                                <p>Continue Shopping</p>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className='p-12 w-full h-full'>
                        <p className='text-xl font-bold'>Shopping Cart</p>
                        <div className='text-center my-32'>
                            <p><BsCart2 size={80} className='m-auto text-primary' /></p>
                            <p className='font-bold'>Your shopping cart is empty.</p>
                            <p className='py-2'>Add products to your cart and order on AgriBUSS.com to stay protected.</p>
                            <Link to={'/market/product'}>
                                <button className='bg-primary text-white text-sm px-8 p-2 rounded-full'>Start Sourcing</button>
                            </Link>
                        </div>
                    </div>
                )}
                {cartItems?.data?.products?.length > 0 && (
                    <div className='w-full md:w-2/6 p-4'>
                        <div className='w-full rounded-3xl h-[700px] p-12 text-white bg-primary'>
                            <p className='text-xl font-bold'>Payment Details</p>
                            <p className='text-white py-4'>Type</p>
                            <div className='flex gap-4'>
                                <img
                                    src={image.OM}
                                    onClick={() => { setSelectMOMO(false); setSelectOM(true); }}
                                    className={`w-32 h-20 cursor-pointer ${selectOM ? 'ring-[1px] ring-white' : ''} rounded-lg`}
                                />
                                <img
                                    src={image.MOMO}
                                    onClick={() => { setSelectMOMO(true); setSelectOM(false); }}
                                    className={`w-32 h-20 cursor-pointer ${selectMOMO ? 'ring-[1px] ring-white' : ''} rounded-lg`}
                                />
                            </div>
                            <div className='mt-12'>
                                <input
                                    type='tel'
                                    placeholder='Enter your phone number'
                                    className='bg-transparent outline-none border-b w-full placeholder:font-medium placeholder:text-white py-4'
                                />
                            </div>
                            <div className='mt-8'>
                                <Link to={`/market/buyproduct/`}>
                                    <button className='w-full hover:shadow hover:shadow-gray-500 font-semibold bg-white text-primary p-2 rounded-xl'>CHECKOUT</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <LandingFooter />
        </div>
    );
}