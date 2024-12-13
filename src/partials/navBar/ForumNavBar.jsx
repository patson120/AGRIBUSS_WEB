import React, { useState } from 'react';
import { BsChevronCompactDown, BsList, BsHouse, BsArrowBarRight } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ForumNavBar = () => {
  
  const [visible, setVisible] = useState(false);
  const username = useSelector((state) => state.user.userInfo.username);  
  const role = useSelector((state) => state.user.role.label); 
  console.log("user name" + username)
  const isLoggedIn = Boolean(username); 

  return (
    
    <header className="bg-white shadow shadow-primary">
      <div className="container mx-auto flex justify-between items-center">
            <Link to="/forum">
                <div className="font-bold my-3 w-1/5 text-xl">Agri<span className="text-primary">BUSS</span></div>

            </Link>
        <nav>
          <ul className="flex space-x-4  text-gray-600">
            <li>
              <Link to={'/forum/questions'}> 
                <p className="hover:underline">Questions</p>
              </Link>
            </li>
            <li>
              <Link to={'/'}> 
                <p className="hover:underline">Latest</p>
              </Link>
            </li>
            <li>
              <Link to={'/'}> 
                <p className="hover:underline">Latest</p>
              </Link>
            </li>
          </ul>
        </nav>   
                <div className="flex justify-between gap-6">
                    <div className="my-3 flex gap-3">
                    <div className='p-3 py-1 text-center text-gray-600 text-xl self-center bg-primary rounded-full'>R</div>
                        <p className="my-2 text-md ">{username || "user"}</p>
                        <div className="text-gray-500 my-3 cursor-pointer">
                          <Link to={'/logout'}> 
                            <BsArrowBarRight/>
                          </Link>
                        </div>
                    </div> 
                    {
                        role === "farmer" &&
                        <Link to={'/farmer'} className="shadow px-2 bg-primary text-white "><BsHouse size={20} className="my-5"/> </Link>
                    }
                </div>
      </div>
    </header>
  );
};

export default ForumNavBar;
