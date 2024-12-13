import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import {imageData} from '../../Utils/carouselData.js'
import img1 from '../../assets/images/watch.png'
import img2 from '../../assets/images/afri.png'
import img3 from '../../assets/images/food.png'
import {useState, useRef, useEffect } from 'react'
// import img4 from '../../assets/images/h13oney1.png'
// import img5 from '../assets/images/honey3.png'

export default function Carousel2(){

	const responsive = {
		desktop: {
			breakpoiny: { max: 3000, min: 1024},
			items:4,
		},
		tablet: {
			breakpoiny: { max: 1024, min: 464},
			items:3,
		},
		mobile: {
			breakpoiny: { max: 464, min: 0},
			items:2,
		},
	}

	return(
		<Carousel
			swipeable={false}
			draggable={false}
			showDots={false}
			responsive={responsive}
			infinite={true}
			autoPlay={true}
			autoPlaySpeed={1000}
			keyBoardControl={true}
			customTransition="all.5"
			transitionDuration={500}
			containerClass="carousel-container"
			itemClass="carousel-item-padding-40-px"
		>

			<div>13{/*<img src={imageData[0].src}/>*/}</div>
			<div>13{/*<img src={imageData[1].src}/>*/}</div>
			<div>13{/*<img src={imageData[2].src}/>*/}</div>
			<div>13{/*<img src={imageData[3].src}/>*/}</div>

		</Carousel>
	)
}