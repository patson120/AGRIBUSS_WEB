import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import {vegetables} from '../../../constants/images';
import {bestFarmers} from '../../../constants/objects';
import { Slide } from "react-awesome-reveal";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { BsStarFill, BsCart, BsBag } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray", borderRadius: "12px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray", borderRadius: "12px"  }}
      onClick={onClick}
    />
  );
}

export default function Crops(){	

	const productSettings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll:1,
   		nextArrow: <SampleNextArrow />,
    	prevArrow: <SamplePrevArrow />,
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
	const farmerSettings = {
		
    dots: true,
    infinite: true,
    slidesToShow: 2,
    pauseOnHover: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
	};

	return(
		<div className="w-full p-5 md:p-20 pt-14">
			<div className="flex gap-12"> 
				<div className="w-full md:w-2/3 h-full md:py-4">
					<div className=" h-[300px] ">
					<div className="flex justify-between p-2 md:pt-4">

						<p className="font-bold px-2 text-2xl">Most popular products</p>
						<Link to="/market/product"><p className="text-xs text-createText px-2 mt-3 md:my-0 hover:underline self-end cursor-pointer">See More</p></Link>
					</div>
						<Slider {...productSettings} className=" py-2">
						{
							vegetables?.map((item, index) => (
								<div className=" shadow-md group h-80 group-hover:scale-105 duration-500 rounded-lg " styl={`background: ${item.image}`}>
									<div style={{backgroundImage: `url(${item.image})`}} className="w-full bg-cover bg-center rounded-lg h-full"></div>
									<div className="bg-white  group-hover:scale-105  h-24 px-4 to-blue-100 w-[355px] md:w-52 absolute flex flex-col gap-2 mt-[-4%] md:mt-[-7%] rounded-b-lg p-2 text-sm">
											<p className="font-medium"><Link to={`/market/product/${item.id}`}>{item.caption}</Link></p>
											<div>
											<div className="flex gap-2">
												<BsStarFill className="text-gray-400"/>
												<p className="text-xs text-createText">2.5k</p>
											</div>
											</div>
											<div className="flex gap-2 justify-between">
												<img src={item.image} className="w-6 rounded-full h-6"/>
												<p className="text-xs py-1">Ngoula Stephane</p>
												<div className="p-2 mt-[-3px] hover:bg-green-200 hover:text-green-600 rounded-full cursor-pointer">
													<BsBag size={16} className=""/>
												</div>
											</div>
									</div>
								</div>
							))
						}
						</Slider>
					</div>
				</div>
				<div className="w-full md:w-[400px] h-full  py-4">
					<div className="flex justify-between px-6 pt-24 md:pt-0">
						<p className="font-bold  self-end text-center text-2xl md:text-4xl">Popular Farmers</p>
						<p className="text-xs self-end pr-2 text-gray-500 cursor-pointer hover:underline "><Link to="/farmers">View all</Link></p>
					</div>
					<div className=" h-[300px] px-7 mt-2 md:mt-4">
						<Slider {...farmerSettings} className="shadow-xl bg-gradient-to-b pt-4 rounded-lg from-green-200">
						{
							bestFarmers?.map((item, index) => (
								<div className=" shadow-xl flex flex-col bg-white h-72 w-24 rounded-lg mb-2">
									<img src={item.image} className="w-32 mt-4 m-auto rounded-full h-32"/>
									<div className="flex text-sm flex-col align-center justify-center gap-1">
										<div className="px-4 pt-2 flex justify-center gap-2">
											<BsStarFill className="text-yellow-500"/>
											<BsStarFill className="text-yellow-500"/>
											<BsStarFill className="text-yellow-500"/>
											<BsStarFill className="text-yellow-500"/>
										</div>
										<p className="self-center font-medium text-md">{item.name}</p>
										<p className="self-center font-medium text-sm text-createText">{item.category}</p>
										<p className="self-center font-medium text-xs py-0 text-createText "> Comments</p>
										
											<div className="bg-primary cursor-pointer hover:scale-105 rounded-lg text-white w-fit px-6 py-2 self-center">
												<Link to={`/market/seller/${item.id}`}>View</Link>
											</div>
									</div>
								</div>
							))
						}
						</Slider>
					</div>				</div>
			</div>
			<div></div>
		</div>
	)
}
