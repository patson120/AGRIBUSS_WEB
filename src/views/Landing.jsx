
import DealCard from '../components/Card/dealCard.jsx'
import React, { useEffect, useState } from 'react'
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';

import { Outlet, Link } from "react-router-dom";
import AutoCarousel from '../components/carousel/autoCarousel'
import HeaderCarousel from '../components/carousel/HeaderCarousel'
import AfterCarouselCardContainer from '../components/carousel/AfterCarouselCardContainer'
import ProductCarousel from '../components/carousel/BodyCarousel'
import DealCarousel from '../components/carousel/DealCarousel'
import BottomComponent from '../components/carousel/BottomComponent'
import img6 from '../assets/images/boy3.png'
import { dealData, prodCardData} from '../Utils/CardData'
import { Sidebar } from 'primereact/sidebar';
import Footer from '../components/Footer.jsx'
import {productInfo, tool} from '../Utils/tableData.jsx'
import { Rating } from 'primereact/rating';

export default function Landing(){
	var count = 0;
	return(
		<>

                        <HeaderCarousel />
                        <div className=" w-[97.5%] m-4 h-fit p-4 rounded bg-white shadow -mt-60">
                            <div className="flex flex-row justify-between"><p className="font-bold text-lg pb-4">Popular products on cash crops</p><p className="text-xs text-gray-500 hover:underline cursor-pointer"><Link to="/register">see more</Link></p></div>
                            <div className="flex flex-row gap-4">
                                    {
                                        productInfo?.map(item => {
                                            count++;
                                            if(count <= 5){
                                            return(
                                                <div key={item.code}  style={{backgroundImage: `url(${item.image})`}}  className='text-white bg-cover transition transform hover:-translate-y-1 cursor-pointer shadow-lg rounded-md w-72 h-60 bg-center'></div>
                                            )}

                                        })
                                    }
                            </div>
                        </div>
                        <div className=" w-[97.5%] mt-8 m-4 h-fit p-4 rounded bg-white shadow ">
                            <div className="flex flex-row justify-between"><p className="font-bold text-lg pb-4">Exciting deals</p><p className="text-xs text-gray-500 hover:underline cursor-pointer"><Link to="/register">see more</Link></p></div>
                            <div className="flex flex-row gap-4">
                                    {
                                        tool?.map(item => {
                                            count = 1;
                                            count++;
                                            if(count <= 5){
                                            return(
                                                <div key={item.code} className="w-[19%] bg-white shadow-lg h-60 group rounded-md transition transform hover:-translate-y-1 ">
                                                    <div style={{backgroundImage: `url(${item.image})`}}  className='text-white rounded-md bg-cover cursor-pointerrounded-md w-full h-[80%] bg-center'>
                                                        <div className="flex-row flex justify-between ">
                                                            <p className="p-2 bg-primary rounded-tl-md w-fit rounded-br-md">-48%</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex p-2 flex-row justify-between">
                                                        <p className="text-lg font-bold text-green-500">{item.nPrice} FCFA</p>
                                                        <p className="text-lightblack font-semibold line-through">{item.oPrice} FCFA</p>
                                                    </div>
                                                </div>
                                            )}

                                        })
                                    }
                            </div>
                        </div>
                            <div className="flex flex-row p-4 gap-4">
                                <p className="text-lg font-bold">For you </p><p className="text-lightblack">___________________________________________________________________________________________________________________________________________________________________________________________________________</p>
                            </div>
                            <div className="flex flex-wrap p-4 gap-4">
                                {
                                    productInfo?.map(item => {
                                        return(
                                            <>
                                               <div key={item.code} className="w-[19%] bg-white shadow-lg h-[410px] group rounded-md transition transform hover:-translate-y-1 ">
                                                    <div style={{backgroundImage: `url(${item.image})`}}  className=' rounded-md text-white bg-cover cursor-pointerrounded-md w-full h-[60%] bg-center'>
                                                    </div>
                                                    <div className="p-4 flex flex-col">
                                                        <p>{item.name}</p>
                                                        <p className="font-"><span className="text-xl font-bold">{item.oPrice} FCFA</span> a unit</p>
                                                        <Rating value={`${item.rate}`} severity="warning" className="p-rating-yellow-200" readOnly cancel={false} />
                                                        <p>Yaounde, Melen</p>
                                                        <div className="p-2 rounded-md text-center bg-black"><p className="text-white">add to cart</p></div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>

                        <Footer/>

		</>
	)
}