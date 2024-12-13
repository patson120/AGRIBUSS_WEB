
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { food, spices } from '../../Utils/Spices';
import { carousel } from '../../constants/CarouselImages'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'

export default function AutoCarousel() {
    const [products, setProducts] = useState(carousel);
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
            <div className="w-full h-[70vh] group">

                <div  style={{backgroundImage: `url(${product.src})`}} className="w-full h-full bg-cover bg-center">
               </div>
                <div>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon={<BsChevronLeft/>} className="p-button p-button-rounded" />
                        <Button icon={<BsChevronRight/>} className="p-button-success p-button-rounded" />
                    </div>
                </div>
            </div>
        );
    };

    return (
            <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
            autoplayInterval={5000} itemTemplate={productTemplate} />
       
    )
}
        