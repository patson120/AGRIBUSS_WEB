
import {BsChevronCompactRight,BsPlusLg, BsActivity, BsCart4, BsBag, BsPersonFill,BsBoxes, BsSignTurnRight, BsChevronCompactLeft, BsStarFill, BsCircleFill} from 'react-icons/bs'
import NumCard from '../components/Card/NumCard.jsx'
import GraphCard1 from '../components/Card/GraphCard1.jsx'
import ListCard from '../components/Card/ListCard.jsx'
import ListApp from '../components/Card/listApp.jsx'
import AddProduct from '../components/pages/addProduct.jsx'
import Table from '../components/table/ListTable.jsx'
import {useState} from 'react'
import {cardData} from '../Utils/CardData.jsx'
import { Timeline } from 'primereact/timeline'

	
const events = [
	{ name: 'Dzeufack', info: 'created a new forum', concern: 'Gardening', time: '14 min', color: '#673AB7'},
	{ name: 'Sandra Norvelle', info: 'made an ', concern: 'order', time: '10 min', color: '#FF9800' },
	{ name: 'Kameni', info: 'is currently', concern: 'driving', time: '8 min', color: '#607D8B'},
	{ name: 'Mbah royce', info: 'modified his', concern: 'profile', time: 'just now', color: '#9C27B0'}
];

export default function FarmerStats(){

	const [showModal, setShowModal] = useState(false)

	function addProduct(){
		const modal = showModal;
		if(!modal)
			setShowModal(true)
		setShowModal(false)
	}

	
	const customizedContent = (item) => {
        return (
                <div className="flex flex-row p-2 w-full hover:cursor-pointer -mt-2 hover:bg-gray-100 rounded-md gap-x-8" >
	                		<div className=" w-32">
	                			<p className="text-sm text-black font-semibold">{item.name} <span className="text-xs font-medium text-lightblack">{item.info}.</span> <span className="text-xs font-medium text-black">{item.concern}</span></p>
	                		</div>
	                		<div className="flex flex-col text-center ">
	                			<p className="text-xs">{item.time}</p>
	                		</div>
	            </div>
        );
    };

	
    const customizedMarker = (item) => {
        return (
            <span className="flex w-2rem rounded-full h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" style={{ backgroundColor: item.color }}>
            	<div className="text-white rounded-full p-1"><BsCircleFill size={5}/></div>
            </span>
         )
    }


	return(
		<>
			<div className=" h-full w-full bg-bg_dash md:w-120 lg:w-120 scrollbar-thin hover:scrollbar-thumb-gray-200 scrollbar-track-transparent md:scrollbar-track-gray-300 md:h-[699px] overflow-y-auto mt-1 ">
				
				<div className="flex flex-col md:flex-row gap-4 my-6">
					<div className="flex flex-col w-[80%]">
						<p className=" text-md font-medium text-createText">Welcome </p>
						<p className=" text-sm font-regular text-createText">Here is what is happening in your site</p>
					</div>
					<div onClick={() => setShowModal(true)} className="flex flex-row  bg-orange-100 group hover:cursor-pointer w-fit h-fit p-2 gap-2 rounded-md">
						<div className="my-1 text-orange-500"><BsPlusLg/></div>
						<p className="mr-2 text-sm text-orange-500">Add product</p>
					</div>
					{/* <div className="p-1 group hover:cursor-pointer rounded-md w-fit h-fit px-4 bg-green-100">
						<div className="my-2 text-green-400"><BsActivity/></div>
					</div> */}
				</div>
				<div className="flex flex-col md:flex-row gap-4	">
					{
						cardData?.map((info) => {
							return(
								<NumCard
								key={info?.title}
									title={info?.title}
									icon={info?.icon}
									sum={info?.sum}
									icon2={info?.icon2}
									text={info?.text}
									view={info?.view}
									color={info?.color}
									link={info?.link}
									parent={info?.parent}
		 						/>
							)
						})
					}
					
				</div>
				<div className="flex md:flex-row flex-col gap-4 w-full">
					<div className="w-full md:w-[50%]">
						<GraphCard1/>
					</div>
					<div  className="w-full md:w-[25%]">
						<ListCard
						parent = "farmer"
						role = "sales"
						link="/farmer/rides"
						name="On going rides" />
					</div>
						
					<div className="bg-white  mt-3 rounded-md w-[22%]">
						<div className=" bg-white rounded-md w-full">
							<div className="flex  border-b border-borderflex-row justify-between bg-white rounded-t-md py-2 px-4  w-full">
								<p className="w-[72%] font-bold text-lightBlack  text-md py-2">Recent Activities</p>
								{/* <p className="text-xs py-3 ml-2 text-primary hover:underline cursor-pointer">View all</p> */}
							</div>
						</div>
						<div className="-ml-4 mt-4 h-[290px] w-full">
							<div><Timeline value={events} className="customized-timeline" marker={customizedMarker} content={customizedContent} /></div>
						</div>
					</div>
				</div>
				<div className="flex flex-row gap-4 w-full">
					<div  className="w-full">
						<Table name="Top Products"/>
					</div>
						{/*<DriveChart
							name= "Drives"
						/>*/}
				</div>
				<AddProduct
						visible={showModal}
						onClose={() => setShowModal(false)}
					/>
			</div>
		</>
	)
}