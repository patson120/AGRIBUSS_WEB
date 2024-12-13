import { EcommercenavLinks } from "../../constants/objects";
import AppNavbar from "../../partials/navBar/AppNavbar";
import Notification from "../Notifiction/Notification";

export default function ENotification(){
    return(
        <div className="bg-gray-50 h-screen">
            <AppNavbar array={EcommercenavLinks} see={true} />
            <div className="p-8 h-[90%] overflow-y-auto">
                <Notification/>
            </div>
        </div>
    )
}