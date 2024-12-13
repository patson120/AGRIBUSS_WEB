import NavBar from '../components/Bars/DashboardNavbar.jsx'
import NavMenu from '../components/Bars/NavMenu.jsx'
import MainCarousel from '../components/carousel/MainCarousel.jsx'
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

export default function UserPage(){

	const [products, setProducts] = useState([prodCardData]);
    const [selectedProduct, setSelectedProduct] = useState(null)
    var count = 0;
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    // useEffect(() => {
    //     ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    // }, []);

    const productTemplate = (product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
            	<div style={{backgroundImage: `url(${product.image})`}} className='w-full h-full'>
            	</div>
               {/* <div className="mb-3">
                    <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" rounded />
                        <Button icon="pi pi-star-fill" rounded severity="success" />
                    </div>
                </div>*/}
            </div>
        );
    };

	return (	
		<>	
			<div className="bg-bg_dash w-full ">
                <NavBar/>
                <NavMenu/>
                <div className="overflow-auto h-[685px]">

                        <Outlet/>
                        
                </div>
                
            </div>
		</>
	)
}