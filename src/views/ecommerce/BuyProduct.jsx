import { BsCalendar2Check, BsCalendar2CheckFill, BsCardChecklist, BsCardList, BsCarFront, BsCarFrontFill, BsCash, BsCashStack, BsChevronLeft, BsChevronRight, BsCode, BsFillGeoAltFill, BsFillGeoFill, BsFlagFill, BsGeo, BsPerson, BsSignDeadEndFill } from "react-icons/bs";
import { EcommercenavLinks } from "../../constants/objects";
import AppNavbar from "../../partials/navBar/AppNavbar";
import image from "../../constants/images";
import img from '../../assets/images/watch.png'
import { useState } from "react";
import axios from 'axios';
import { useSelector } from "react-redux";
import { allProducts } from "../../redux/feature/productSlice";
import { allCart } from "../../redux/feature/cartSlice";
import { useParams } from "react-router-dom";
import axiosInstance from "../../Utils/axiosInstance";


export default function BuyProduct(){

    const [productDetail, setProductDetail] =  useState(true)
    const [shippingDetail, setShippingDetail] =  useState(false)
    const [checkout, setCheckout] =  useState(false)
    const [showProductDetail, setShowProductDetail] =  useState(true)
    const [showShippingDetail, setShowShippingDetail] =  useState(false)
    const [showCheckout, setShowCheckout] =  useState(false)
    const testC = useSelector(allCart);
    const [cart, setCart] = useState(testC?.data?.products)
    console.log('testc', testC)
    console.log('cart', cart)


    const handleShipping = () => {
        setShippingDetail(true)
        setShowProductDetail(false)
        setShowShippingDetail(true)
    }
    const handleBackProduct = () => {
        setShippingDetail(false)
        setShowProductDetail(true)
        setShowShippingDetail(false)
    }

    const handleBackShipping = () => {
        setShippingDetail(true)
        setCheckout(false)
        setShowCheckout(false)
        setShowShippingDetail(true)
    }

    const handleCheckout = () => {
        setCheckout(true)
        setShowCheckout(true)
        setShowShippingDetail(false)
    }

    const [place, setPlace] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');
    const [method, setMethod] = useState("Orange")
    const [phoneNumber, setPhoneNumber] = useState(655889591)
    const [shippingCost, setShippingCost] = useState(1)

    const handleSearch = async () => {
        setError(''); // Reset error message
        try {
            const response = await axios.get('https://overpass-api.de/api/interpreter', {
                params: {
                    data: `
                        [out:json];
                        node["name"~"${place}"]["place"](around:50000, 3.848, 12.978);  // Latitude and Longitude for Mokolo
                        out;
                    `
                }
            });
    
            const places = response.data.elements;
            console.log(places)
            if (places.length === 0) {
                setError('No results found.');
            } else {
                setResults(places);
            }
        } catch (error) {
            setError('Error fetching data. Please try again.');
            console.error("Error fetching data: ", error);
        }
    };

    const handleCheckoutProduct = async (values) => {
        console.log("checkout", values)
        const response = await axiosInstance.post('/checkout', values)
        console.log(response)
    }

    return(
        <div>
			<AppNavbar array={EcommercenavLinks} see={false}/>
            <div className=" h-[729px] p-20 ">
                <div className="  rounded-lg w-full h-full">
                    <div className="flex gap-6 bg-gray-100 p-2 rounded-lg font-semibold text-gray-500">
                        <div className={`flex ${productDetail ?  'text-primary' : ''} gap-4`}>
                            <p>Shipping Details</p>
                            <div><BsChevronRight className="my-1"/></div>
                        </div>
                        <div className={`flex ${shippingDetail ?  'text-primary' : ''} gap-4`}>
                            <p>Payment Details</p>
                            <div><BsChevronRight className="my-1"/></div>
                        </div>
                        {/* <div className={`flex ${checkout ?  'text-primary' : ''} gap-4`}>
                            <p>Summary & Checkout</p>
                            <div><BsChevronRight className="my-1"/></div>
                        </div> */}
                    </div>
                    {
                        showProductDetail && 
                        <div className="flex p-4 my-4 rounded border-[1px] bg-white shadow border-gray-200 h-[500px]">
                            
                            <div className="w-1/2 flex-col flex gap-4 md:px-10 xl:px-20 py-10">
                                {/* <div className="flex text-gray-600 gap-3 border-b-2 w-96 p-2 ">
                                    <BsGeo className="my-1 text-gray-600" />
                                    <input 
                                        type="text" 
                                        placeholder="Enter the delivery Address" 
                                        className="outline-none  px-2 w-full"
                                        value={place}
                                        onChange={(e) => {
                                            setPlace(e.target.value)
                                            handleSearch()}}
                                    />
                                </div> */}
                                {/* {
                                    results.length > 0 &&
                                    <div className="h-[200px] hidden absolute bg-white w-96 rounded-lg shadow mt-12 p-4 overflow-auto">
                                        <h2>Results for {place}:</h2>
                                        {results.length > 0 ? (
                                            results.map((result, index) => (
                                                <div key={index} className="p-2 border-b-[1px] text-xs  border-gray-200">
                                                    <h3>{result.tags.name}</h3>
                                                </div>
                                            ))
                                        ) : (
                                            <p>No results found.</p>
                                        )}
                                    </div>
                                } */}
                                {/* <label className="text-gray-800">Shipping Cost</label> */}
                                {/* <div className="flex text-gray-600 gap-3 border-b-2 w-96 p-2 my-2">
                                    <BsPerson className="my-1 text-gray-600" />
                                    <input type="text" placeholder="Enter the recievers name" className="outline-none  px-2 w-full"/>
                                </div> */}
                                <label className="text-gray-800">Shipping Cost</label>
                                <div className="flex text-gray-600 gap-3 border-b-2 w-96 p-2 ">
                                    <BsCarFront className="my-1 text-gray-600" />
                                    <input type="text" onChange={(e)=>setShippingCost(e.target.value)} value={2} placeholder="Enter the delivery Address" className="outline-none  px-2 w-full"/>
                                </div>
                                <label className="text-gray-800">Estimated date</label>
                                <div className="flex text-gray-600 gap-3 border-b-2 w-96 p-2 ">
                                    <BsCalendar2Check className="my-1 text-gray-600" />
                                    <input type="text" value="Today" placeholder="Enter the delivery Address" className="outline-none  px-2 w-full"/>
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col justify-between">
                                <div className="p-4 rounded-lg bg-gray-100">
                                    <p className="py-2 text-xl font-semibold">Summary</p>
                                    <div className="flex pt-2 text-sm gap-8">
                                        <p>Shipping: </p>
                                        <p className=" text-left">
                                            <span className="font-semibold">1000XAF National Economy: tracked-signature.</span> 
                                            <span className="underline cursor-pointer">See details</span><br></br>
                                            <span className=" text-gray-500">
                                                National shiping of items may be subject to custom processing and additional charges.
                                                Located in: Yaounde, Messasi
                                            </span>
                                        </p>
                                    </div>
                                    <div className="flex pt-2 text-sm gap-8">
                                        <p>Delivery: </p>
                                        <p className="text-left">
                                            <span className="flex gap-1 font-semibold"><BsFlagFill size={20} className="text-orange-500 "/>
                                            Estimated between Thu, Oct 3 and Thu, Oct 24 to 0 <BsSignDeadEndFill size={18} className=""/> </span>
                                            <span className="text-gray-500">Please note the delivery estimate is</span>
                                            <span className="font-semibold"> greater that 25 business days.</span><br></br>
                                            <span className="text-gray-500">
                                                Please allow additional time if international delivery is subject to suctoms processing.
                                            </span>
                                        </p>
                                    </div>
                                    <div className="flex pt-2  text-sm gap-8">
                                        <p>Returns: </p>
                                        <p className="text-left">
                                            30 days returns. Buyer pays for return shipping.
                                            <span className="underline cursor-pointer">See details</span>
                                        </p>
                                    </div>
                                </div> 
                                    <div className="flex justify-end gap-8 py-2">    
                                        <button onClick={() => handleShipping()} className="bg-primary shadow-lg hover:scale-105 text-white p-1 px-5 rounded-md">Next</button>    
                                    </div>
                            </div>
                        </div> 
                    }
                    {
                        showShippingDetail &&
                        <div className="flex flex-col justify-between p-4 my-4 rounded border-[1px] bg-white shadow border-gray-200 h-[500px]">
                            <div className="p-8 flex justify-between gap-8">
                                <div className="w-1/2">
                                    <label>Payment Method</label>
                                    <div className="flex ring-1 text-gray-600 gap-3 ring-gray-300 w-full pr-2 rounded-lg my-4">
                                        <div className="bg-primary px-4 text-white rounded-l-lg"><BsCash size={20} className="my-3" /></div>
                                        <select className="w-full outline-none" placeholder="Choose payment method" onChange={(e) => setMethod(e.target.value)}>
                                            <option value="MOMO">Mobile Money</option>
                                            <option value="Orange">Orange Money</option>
                                        </select>
                                    </div>
                                    <label className="block ">Orange Money Number</label>
                                    <div className="mb-4 flex w-full text-gray-600 mt-2 px-2 border-gray-300  border-b-[1px]">
                                        <BsCashStack size={20} className="my-2 text-gray-500"/>
                                        <input type="text" name="orangeMoneyNumber" placeholder="Enter your orange money number" className="outline-none w-full p-2 px-4" required />
                                    </div>
                                    <label className="block ">Promo Code</label>
                                    <div className="mb-4 flex w-full px-2  mt-2 border-gray-300  border-b-[1px] text-gray-600">
                                        <BsCode size={20} className="my-2 text-gray-500"/>
                                        <input type="text" name="promoCode" placeholder="Provide your promoCode (optional)" className="outline-none p-2 px-4 w-full" />
                                    </div>
                                </div>
                                <div className="w-1/3 h-[350px] rounded-lg bg-primary">
                                    <img src={img} />
                                </div>
                            </div>
                                <div className="flex justify-end gap-8 py-2">
                                    <button onClick={() => handleBackProduct()} className="bg-black shadow-lg hover:scale-105 text-white p-1 px-5 rounded-md">Back</button>    
                                    <button onClick={() => handleCheckoutProduct({shippingCost, method, phoneNumber})} className="bg-primary shadow-lg hover:scale-105 text-white p-1 px-5 rounded-md">Checkout</button>    
   
                                </div>
                                    
                        </div> 
                    }
                    {/* {
                        showCheckout &&  
                        <div className="flex p-4 my-4 rounded border-[1px] bg-white shadow border-gray-200 h-[500px]">
                           <div className="w-2/3 h-full">
                                <div className="flex gap-8 h-full">
                                    <img src={image.HERO_Ecommerce} className="w-100 h-full rounded bg-gray-200" />
                                    
                                    <div className="flex flex-col">
                                        <p className="text-xl py-4 font-semibold">Monkey Banana</p>
                                        <div className="flex gap-4">
                                            <p className="text-sm py-1 text-gray-500">Category : </p>
                                            <p className="text-lg ">Vegetables</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <p className="text-sm py-1 text-gray-500">Quantity : </p>
                                            <p className="text-md ">5</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <p className="text-sm py-1 text-gray-500">Price per unit : </p>
                                            <p className="text-lg ">500XAF</p>
                                        </div>
                                        <div className="flex gap-4 py-2 ring ring-gray-300 my-2 px-8 bg-black text-white">
                                            <p className="text-md py-1 text-gray-400">Total Price = </p>
                                            <p className="text-xl ">2500XAF</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3 h-full flex flex-col justify-between">
                                    <div className="flex bg-green-200 rounded-lg p-4 flex-col">
                                        <p className="text-xl pb-2 font-semibold">Farmer Info</p>
                                        <div className="flex py-2 gap-2 ">
                                            <img src={image.HERO_Consultation} className="w-16 h-16 rounded-full" />
                                            <div className="py-2">
                                                <p className="text-gray-700 font-medium">Matejeu Carl Sapin</p>
                                                <p className="text-gray-400 pt-2 text-sm">Mixed Farming</p>
                                            </div>  
                                        </div>
                                        <div className="flex gap-4">
                                            <p>Location :</p>
                                            <p>Valley Amadou</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-8 py-2">
                                        <button onClick={() => handleBackShipping()} className="bg-black shadow-lg hover:scale-105 text-white p-1 px-5 rounded-md">Back</button>    
                                    </div>
                            </div>
                        </div> 
                    } */}
                </div>
            </div>
        </div>
    )
}