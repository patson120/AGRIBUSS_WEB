import {categoryImages} from '../../../constants/objects'
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

export default function Deals() {

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

	return(
		<div className="w-full p-5 md:p-20 pt-8 md:pt-0">
			
			<div className="flex py-2 justify-between">
				<p className="text-2xl pb-2 font-bold">Exiting deals</p>
				<p className="text-xs text-createText px-2 hover:underline cursor-pointer">Show all</p>
			</div>
			<div className=" ">

				<Slider {...productSettings} >
				{
					categoryImages?.map((item, index) => (
						<div key={index} className="w-64 group bg rounded-xl my-[1px] shadow-lg cursor-pointer ring-[1px] ring-gray-300 cursor-pointer h-64">
							<div className="px-8 pt-8 group-hover:scale-[0.9] duration-500 w-full h-40">
								<img src={item.image} className="h-32 w-full shadow-lg rounded-lg"/>
							</div>
							<div className="absolute text-white text-center pt-3 bg-primary mt-[-9%] md:mt-[-10%] w-16 text-center h-12 rounded-ee-xl">
								<p className="text-xs font-semibold p-2">- 48%</p> 
							</div>
							<p className="text-center font-semibold mt-4">Product Name</p>
							<div className="flex justify-between p-4">
								<p className="text-lg text-primary font-semibold">1230<span className="text-sm"> XAF</span></p>
								<p className="text-xs font-semibold py-2 text-gray-400 line">1500XAF</p>
							</div>
						</div>
					))
				}
				</Slider>
			</div>
		</div>

	)
}