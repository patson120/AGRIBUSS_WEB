import { BsList, BsMenuButton } from "react-icons/bs";
import Button from "../components/Button/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import { useState } from "react";

function LandingNavbar(){

      const navLinks = [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "About Us",
          path: "/about",
        },
        {
          title: "Features",
          path: "/feature",
        },
        {
          title: "Contact Us",
          path: "/contact",
        },
        {
          title: "Pricing",
          path: "/pricing",
        },
      ];
      const [displayMenu, setDisplayMenu] = useState(false);
      const location = useLocation();
      const pathname = location.pathname;
      const navigate = useNavigate();

      const handleDisplayMenu = (value) => {
        setDisplayMenu(value)
      }

    return(
        <div className="flex md:px-12 fixed bg-white w-full flex-row justify-between p-6 shadow">
            <div className="font-bold text-xl">Agri<span className="text-primary">BUSS</span></div>
            <div className="hidden md:flex gap-12 justify-end text-sm text-md text-grey my-auto  w-2/3">
            {
                navLinks?.map((nav, index) => (
                    <div key={index} className={`${nav.path === pathname ? "text-primary": "hover:text-black cursor-pointer"}`}>
                        <Link to={nav.path}><p>{nav.title}</p></Link>
                    </div>
                ))
            }
            </div>
            <div className="hidden md:flex justify-between gap-6 ">
                <Link to="/login">
                    <button className=" text-primary shadow font-semibold hover:scale-105 rounded-lg cursor-pointer py-2 px-6">Sign in</button>
                </Link>
                <Link to="/market">
                    <Button text="Explore"/>
                </Link>
            </div>
            <div className="md:hidden block cursor-pointer mb-1" onClick={() => handleDisplayMenu(true)}>
              <BsList
                size={34}
              />
            </div>
            
          {displayMenu && (
            <MobileNavbar
              navLinks={navLinks}
              location={location}
              handleDisplayMenu={handleDisplayMenu}
            />
          )}

        </div>
    )
}

export default LandingNavbar;