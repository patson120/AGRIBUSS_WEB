
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsBell, BsCart4, BsDash, BsPlus, BsChevronCompactDown, BsList, BsBag, BsHouse, BsChat, BsChatDots, BsArrowBarRight } from 'react-icons/bs';
import React, { useState } from 'react';
import {CartItems} from "../../constants/objects"
import { Sidebar } from 'primereact/sidebar';
import user from "../../assets/images/user.jpeg"
import { useSelector } from "react-redux";
import { FaMoneyBill } from "react-icons/fa";
import { FaMoneyBill1, FaRegMoneyBill1 } from "react-icons/fa6";
import { allCart } from "../../redux/feature/cartSlice";

export default function AppNavbar({array, see}){
    const testC = useSelector(allCart);
    const [cart, setCart] = useState(testC?.data?.products)
    console.log('testc', testC)
    console.log('cart', cart)
      const location = useLocation();
      const pathname = location.pathname;
      const navigate = useNavigate();
      const [isHovered, setIsHovered] = useState(false);
      const [increment, setIncrement] = useState(1);
      const [show, setShow] = useState(false);
      let sum = 0;      
      const [cartData, setCardData] = useState(CartItems)

      const handleIncrement = (index) => {
        const found = CartItems.map(obj => {
                if(obj.id === index){
                    console.log(obj.quantity)
                    obj.quantity =  obj.quantity + 1
                    console.log(obj.quantity)
                }
             return obj;
        })
        console.log(found)
      }

      const handleDecrement = (index) => {
        const found = CartItems.map(obj => {
                if(obj.id === index){
                    console.log(obj.quantity)
                    if(obj.quantity >=1)
                        obj.quantity =  obj.quantity - 1
                    console.log(obj.quantity)
                }


             return obj;
        })
        console.log(found)
      } 

      const handleRemove = (index) => {
            const updatedItems = cartData.filter((item) => item.id !== index);
            console.log(updatedItems)
            setCardData(updatedItems);
        }

    const [visible, setVisible] = useState(false);

    // Get user data from Redux state
    const username = useSelector((state) => state.user.userInfo.firstname);  
    const role = useSelector((state) => state.user.role.label); 
    console.log("user role", role)
    console.log("user name" + username)
    const isLoggedIn = Boolean(username); // Check if user data exists
    console.log(isLoggedIn)

	return(
        <div className="flex px-4 md:px-12 flex-wrap w-full flex-row justify-between bg-white shadow">
            <Link to="/market">
                <div className="font-bold my-3 w-1/5 text-xl">Agri<span className="text-primary">BUSS</span></div>

            </Link>
            <div className="flex gap-6 justify-end text-sm text-md text-grey my-auto  w-3/5">
                <div>
                {
                    isLoggedIn ?
                    <Link to={'/market/cart'}>
                        <div 
                            onMouseEnter={ () => setIsHovered(true)} 
                            onMouseLeave={() => setIsHovered(false)}
                            className="flex gap-1 hover:text-black cursor-pointer  "
                        >
                            <div className="py-1">
                                <div className="px-1 text-center ml-3 bg-green-500 text-xs text-white rounded-full">{cart ? cart.length : 0}</div>
                                <BsCart4 size="18" className="mt-[-26%]"/>
                            </div>
                            {/* <p className="hidden md:block py-2">Cart</p> */}
                        </div>
                    </Link>
                    :
                    <Link to={'/login'}>
                        <div 
                            onMouseEnter={ () => setIsHovered(true)} 
                            onMouseLeave={() => setIsHovered(false)}
                            className="flex gap-1 hover:text-black cursor-pointer  "
                        >
                            <div className="py-1">
                                <div className="w-2 ml-4 h-2 bg-green-500 rounded-full"></div>
                                <BsCart4 size="18" className="mt-[-26%]"/>
                            </div>
                            {/* <p className="hidden md:block py-2">Cart</p> */}
                        </div>
                    </Link>
            }
                </div>
                    
            {
                isLoggedIn ?
                <Link to={'/market/orders'}>
                    <div 
                        className="flex gap-1 hover:text-black cursor-pointer  "
                    >
                        <div className="py-1">
                            <div className="w-2 ml-4 h-2 bg-red-500 rounded-full"></div>
                            <BsBag size="18" className="mt-[-28%]"/>
                        </div>
                        {/* <p className="hidden md:block py-2">Orders</p> */}
                    </div>
                
                </Link>
                :
                <Link to={'/login'}>
                    <div 
                        className="flex gap-1 hover:text-black cursor-pointer  "
                    >
                        <div className="py-1">
                            <div className="w-2 ml-4 h-2 bg-red-500 rounded-full"></div>
                            <BsBag size="18" className="mt-[-28%]"/>
                        </div>
                        {/* <p className="hidden md:block py-2">Orders</p> */}
                    </div>
                
                </Link>
            }
                
            {
                isLoggedIn && role==='client' &&
                <Link to={'/market/notifications'}>
                    <div className="flex gap-1 hover:text-black cursor-pointer ">
                        <div className="py-1">
                            <div className="w-2 ml-4 h-2 bg-orange-500 rounded-full"></div>
                            <BsBell size="18" className="mt-[-28%] mr-[-10%]"/>
                        </div>
                        {/* <p className="hidden md:block py-2">Notifications</p> */}
                    </div>
                </Link>
            }    
            {
                isLoggedIn && role==='farmer' &&
                <Link to={'/farmer/notification'}>
                    <div className="flex gap-1 hover:text-black cursor-pointer ">
                        <div className="py-1">
                            <div className="w-2 ml-4 h-2 bg-orange-500 rounded-full"></div>
                            <BsBell size="18" className="mt-[-28%] mr-[-10%]"/>
                        </div>
                        {/* <p className="hidden md:block py-2">Notifications</p> */}
                    </div>
                </Link>
            }    
            {
                isLoggedIn && role==='driver' &&
                <Link to={'/driver/notification'}>
                    <div className="flex gap-1 hover:text-black cursor-pointer ">
                        <div className="py-1">
                            <div className="w-2 ml-4 h-2 bg-orange-500 rounded-full"></div>
                            <BsBell size="18" className="mt-[-28%] mr-[-10%]"/>
                        </div>
                        {/* <p className="hidden md:block py-2">Notifications</p> */}
                    </div>
                </Link>
            }    
            {
                isLoggedIn && role==='admin' &&
                <Link to={'/admin/notification'}>
                    <div className="flex gap-1 hover:text-black cursor-pointer ">
                        <div className="py-1">
                            <div className="w-2 ml-4 h-2 bg-orange-500 rounded-full"></div>
                            <BsBell size="18" className="mt-[-28%] mr-[-10%]"/>
                        </div>
                        {/* <p className="hidden md:block py-2">Notifications</p> */}
                    </div>
                </Link>
            }
            {
            
            !isLoggedIn && 
                <Link to={'/login'}>
                    <div className="flex gap-1 hover:text-black cursor-pointer ">
                        <div className="py-1">
                            <div className="w-2 ml-4 h-2 bg-orange-500 rounded-full"></div>
                            <BsBell size="18" className="mt-[-28%] mr-[-10%]"/>
                        </div>
                        {/* <p className="hidden md:block py-2">Notifications</p> */}
                    </div>
                </Link>
            }  
            {
                isLoggedIn ?
                <Link to={'/market/transactions'}>
                    <div className="flex gap-1 hover:text-black cursor-pointer ">
                        <div className="py-1">
                            <div className="w-2 ml-4 h-2 bg-orange-500 rounded-full"></div>
                            <FaRegMoneyBill1 size="19" className="mt-[-28%] mr-[-10%]"/>
                        </div>
                    </div>
                </Link>
                :
                <Link to={'/login'}>
                    <div className="flex gap-1 hover:text-black cursor-pointer ">
                        <div className="py-1">
                            <div className="w-2 ml-4 h-2 bg-orange-500 rounded-full"></div>
                            <FaRegMoneyBill1 size="19" className="mt-[-28%] mr-[-10%]"/>
                        </div>
                    </div>
                </Link>
            }  
            {
                isLoggedIn ?
                <Link to={'/market/chat'}>
                    <div className="flex gap-1 hover:text-black cursor-pointer ">
                        <div className="py-1">
                            <div className="w-2 ml-4 h-2 bg-orange-500 rounded-full"></div>
                            <BsChatDots size="19" className="mt-[-28%] mr-[-10%]"/>
                        </div>
                    </div>
                </Link>
                :
                <Link to={'/login'}>
                    <div className="flex gap-1 hover:text-black cursor-pointer ">
                        <div className="py-1">
                            <div className="w-2 ml-4 h-2 bg-orange-500 rounded-full"></div>
                            <BsChatDots size="19" className="mt-[-28%] mr-[-10%]"/>
                        </div>
                    </div>
                </Link>
            }
            </div>
            {
                !isLoggedIn ?
                <div className=" w-1/5 flex pl-40 justify-end md:block">
                    <Link to="/login" className="flex justify-end w-full  md:block ">
                        <button className=" text-white my-2 shadow bg-primary font-semibold hover:scale-105 rounded-lg cursor-pointer py-2 px-6">Sign in</button>
                    </Link>
                    <div onClick={() => setVisible(true)}  className="my-4 md:hidden flex justify-end cursor-pointer w-full"><BsList/></div>
                </div>
            :   
                <div className="flex justify-between gap-6">
                    <div className="my-3 flex gap-3">
                    <div className='p-4 py-2 text-center text-gray-600 text-xl self-center bg-gray-200 rounded-full'>{username ? username.charAt(0) : P}</div>
                        <p className="my-2 text-md ">{username || "user"}</p>
                        <div className="text-gray-500 my-3 cursor-pointer">
                          <Link to={'/logout'}> 
                            <BsArrowBarRight/>
                          </Link>
                        </div>
                    </div> 
                    {
                        role &&
                        <Link to={`/${role}`} className="shadow px-2 bg-primary text-white "><BsHouse size={20} className="my-5"/> </Link>
                    }
                </div>
            }           
             <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <p className="font-bold pb-8 text-black">Agri<span className="text-primary">BUSS</span></p>
                {
                    array?.map((item, index) => (
                        <Link to={item.path}>
                        <div className="flex gap-4 cursor-pointer hover:text-gray-600 hover:border-b-2 border-gray-500 group text-black">
                        <p className="pt-3 ">{item.icon}</p>
                        <p className=" py-2">
                            {item.title}
                        </p>
                        </div>
                        </Link>
                    ))
                }
            </Sidebar>
        </div>	

    )
}