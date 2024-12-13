
import { Crown, CrownIcon } from "lucide-react";
import Button from "../../../components/Button/button";
import image from "../../../constants/images";
import {carousel} from "../../../constants/CarouselImages.js";
import style from "./style.module.css";
import { BsCarFront, BsChat, BsChatDotsFill, BsPeopleFill } from "react-icons/bs";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Hero(){


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    return(


            <div id="hero" className={`w-full mt-12 flex flex-col md:flex-row overflow-x-hidden md:h-[660px] bg-gradient-to-r from-green-300 `}>
        
                     <div className="md:w-1/2 flex flex-col pt-20 p-8 md:p-20 text-left  gap-4">
                        <p className="text-md w-fit px-2 rounded font-semibold bg-green-50">Cheap and good quality products</p>
                        <h1 className="text-5xl md:text-6xl font-bold">Fast Delivery,<span className=" gap-0 flex"> The Client is the King<CrownIcon size={70} className="text-yellow-500 mr-[15%]"/> </span></h1>
                        <p className="font-semibold text-gray-600">We provide high quality farm product at reasonable prices all over Africa</p>
                        <div className="pt-6">
                            <button className="bg-btngrade py-2 rounded-lg hover:scale-105 text-white font-bold cursor-pointer shadow px-6">Buy Now</button>
                        </div>
                    </div>
                        <div className={`md:w-1/2 mt-1  from-grade  justify-center ${style.hero_background} flex rounded-t-full lg:rounded-es-full`}>
                            <img src={image.HERO_Ecommerce} alt="Hero image" className="w-5/6 self-end h-hull"/>
                        </div>
                {/*<div>
                     <div className={`w-1/2 mt-1  from-grade  justify-end ${style.hero_background1} flex rounded-e-full`}>
                        <img src={image.HERO_Forum} alt="Hero image" className="w-5/6  rounded-es-3xl self-end h-hull"/>
                    </div>
                    <div className="w-1/2 flex flex-col p-20 text-right  gap-4">
                        <p className="text-md w-fit px-2 self-end rounded font-semibold bg-orange-100">Facing agricultural problems?</p>
                        <h1 className="text-6xl font-bold">Seek for help,<span className=" gap-0 flex"> <BsChatDotsFill size={70} className="text-yellow-500 ml-[30%]"/> Discuss with farmers</span></h1>
                        <p className="font-semibold text-gray-600">Share problems and seek help from other farmers</p>
                        <div className="pt-6"><Button text="Start Now"/></div>
                    </div>                    
                </div>
                <div>
                    <div className="w-1/2 flex flex-col p-20 text-right  gap-4">
                        <p className="text-md w-fit px-2 self-end rounded font-semibold bg-gray-50">Are you new to farming?</p>
                        <h1 className="text-6xl font-bold">Get consultation,<span className=" gap-0 flex"> <BsPeopleFill size={70} className="text-gray-200 ml-[30%]"/> Improve you experience</span></h1>
                        <p className="font-semibold text-gray-600">Learn more agricultural experiences from our experts all over Africa</p>
                        <div className="pt-6"><Button text="Start Now"/></div>
                    </div>
                    <div className={`w-1/2 mt-1  from-grade  justify-end ${style.hero_background1} flex rounded-es-full`}>
                        <img src={image.HERO_Consultation} alt="Hero image" className="w-5/6  rounded-es-3xl self-end h-hull"/>
                    </div> 
                </div>
            </Slider>*/}
            </div>
    )
}