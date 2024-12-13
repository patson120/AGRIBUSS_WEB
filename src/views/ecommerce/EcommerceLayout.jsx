import { EcommercenavLinks } from "../../constants/objects";
import LandingFooter from "../../partials/footer/LandingFooter";
import AppNavbar from "../../partials/navBar/AppNavbar";
import EcommerceSideBar from "../../partials/sidebar/EcommerceSideBar";

export default function EcommerceLayout({children}){
    return(
        <>
                        <AppNavbar array={EcommercenavLinks} see={true} />
            <div className="flex">
                <div className="w-20">
                    <EcommerceSideBar/>
                </div>
                <div className="w-full">
                    <div>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <LandingFooter />
        </>
    )
}