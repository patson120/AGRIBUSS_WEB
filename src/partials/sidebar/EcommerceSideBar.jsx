import { BsBag, BsCart } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function EcommerceSideBar(){
    return(
        <div className="bg-green-800 text-center text-xs pt-10 h-screen ">
			<NavLink to={`/market/cart`}>
                <p className="p-4 py-6 hover:bg-primary flex gap-2 text-white">
                    Cart
                </p>
            </NavLink>
			<NavLink to={`/market/orders`}>
                <p className="p-4 py-6 hover:bg-primary flex gap-2 text-white">
                    Orders
                </p>
            </NavLink>
			<NavLink to={`/market/transaction`}>
                <p className="p-4 py-6 hover:bg-primary flex gap-2 text-white">
                    Transactions
                </p>
            </NavLink>
        </div>
    )
}