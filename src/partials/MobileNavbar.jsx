
import { FaTimes } from "react-icons/fa";
import { Link} from "react-router-dom";
import Button from "../components/Button/button";

const MobileNavbar = (
    {navLinks, location, handleDisplayMenu}
) => {
    return(
        
        <div className="md:hidden w-screen fixed h-screen top-0 flex justify-end z-100">
            {/* <Slide direction="left" duration={1500}> */}
            <div className="fixed top-0 right-0">
                
                <div className="w-screen h-screen mb-2 border-2 border-gray-200 rounded-br-none p-4 z-10 shadow-md bg-white">
                    <div className="pb-1 px-2 flex flex-row mb-6 p-1 " >
                        <div className="w-[15px] h-full text-primary rounded-r-xl bg-primary"> .</div>
                        <div className="flex w-full justify-end ">
                            <FaTimes
                            size={34} 
                            className="text-black p-1 float-end cursor-pointer"
                            onClick={() => handleDisplayMenu(false)}
                            />
                        </div>

                    </div>
                    <div className="flex flex-col">

                        <ul className="flex px-3 flex-col mb-5 pb-5">
                            {navLinks.map((item, key) => (
                            <Link
                                to={item.path}
                                className={`my-4 hover:cursor-pointer text-center hover:border-b-2 duration-300 ${
                                item.path === location.pathname
                                    ? " text-primary font-bold"
                                    : ""
                                } hover:border-b-primary hover:pb-1 hover:text-primary hover:font-300`}
                                key={key}
                                onClick={() => handleDisplayMenu(false)}
                            >
                                {item?.title}
                            </Link>
                            ))}
                        </ul>
                        
                        <div className="w-full h-full flex flex-col justify-between">
                            <div className="flex flex-col p-2 gap-6">
                            <Link to="/login">
                                <button className=" text-primary shadow font-semibold hover:scale-105 rounded-lg cursor-pointer py-2 px-6">Sign in</button>
                            </Link>
                            <Link to="/market">
                                <Button text="Explore"/>
                            </Link>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
            {/* </Slide> */}
        </div>
    );
};

export default MobileNavbar;
