
import HeroSlider, {Slide} from 'hero-slider'

import {imageData} from '../../Utils/carouselData.js'
import {useState} from 'react'
import {BsChevronCompactLeft} from 'react-icons/bs'
import {BsChevronCompactRight} from 'react-icons/bs'
import {Carousel} from 'react-responsive-carousel'

export default function MainCarousel(){

	const [currentIndex, setCurrentIndex] = useState(0)

	const prevSlide = () =>
	{
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? imageData.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	const nextSlide = () =>
	{
		const isLastSlide = currentIndex === imageData.length-1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	return(
		<>
			{/*<HeroSlider
				slidingAnimation="left_to_right"
				orientation="horizontal"
				initialSlide={1}
				onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide)}
				onChange={nextSlide => console.log("onChange", nextSlide)}
			>
				{
					imageData.map((img) => {
						return(
							<Slide
								background={{
									backgroundImage: {img.src},
									backgroundAttachment: "fixed"
								}}
							/>
						)
					})
				}
			</HeroSlider>*/}

			<div 
				style={{backgroundImage: `url(${imageData[currentIndex].src})`}}  
				className="w-full group h-[450px] bg-center bg-black bg-cover duration-500">
				<div className="flex flex-row p-7 items-baseline gap-2">
					<div className="hidden group-hover:block cursor-pointer w-12 top-[30%] -translate-x-0 translate-y-[-50%] left-5 text-2xl bg-black/20 rounded-md p-2 text-white cursor-pointer ">
						<BsChevronCompactLeft onClick={() => prevSlide()} size={30}/>
					</div>
					<div className="hidden group-hover:block w-12 top-[30%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-md bg-black/20 p-2 text-white cursor-pointer ">
						<BsChevronCompactRight onClick={() => nextSlide()} size={30}/>
					</div>
				</div>	
				

			</div>
			

		</>
	)
}