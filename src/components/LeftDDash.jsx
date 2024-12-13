
import {BsChevronCompactRight,BsPlusLg, BsActivity, BsCart4, BsBag,BsCircleFill, BsPersonFill,BsBoxes, BsSignTurnRight,BsCalendar4Week, BsChevronCompactLeft, BsStarFill} from 'react-icons/bs'
import NumCard from './Card/NumCard.jsx'
import GraphCard1 from './Card/GraphCard1.jsx'
import ListCard from './Card/ListCard.jsx'
import DriveChart from './Card/driveChart.jsx'
import ListApp from './Card/listApp.jsx'
import AddProduct from './pages/addProduct.jsx'
import Table from '../components/table/ListTable.jsx'
import ProductBtn from './Button/productBtn.jsx'
import { Outlet, Link } from "react-router-dom";
import { InvoiceListData} from '../Utils/carouselData.js'
import InvoiceList from './List/List1.jsx'
import GradientBtn from './Button/GradientBtn.jsx'
import {cardDData} from '../Utils/CardData.jsx'
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Timeline } from 'primereact/timeline';

/* images import*/
import pers9 from '../assets/images/pers10.png'
import pers10 from '../assets/images/pers11.png'
import pers11 from '../assets/images/pers12.png'
import pers12 from '../assets/images/pers13.png'
import pers13 from '../assets/images/pers14.png'
import pers14 from '../assets/images/pers15.png'
import pers15 from '../assets/images/pers16.png'


export default function LeftDDash(){

	const [showModal, setShowModal] = useState(false)

	function addProduct(){
		const modal = showModal;
		if(!modal)
			setShowModal(true)
		setShowModal(false)
	}

	
	const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Clients',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [50, 25, 12, 48, 90, 76, 42]
                },
                {
                    type: 'bar',
                    label: 'Farmers',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    data: [21, 84, 24, 75, 37, 65, 34]
                },
                {
                    type: 'bar',
                    label: 'Customers',
                    backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
                    data: [41, 52, 24, 74, 23, 21, 32]
                }
            ]
        };

        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    const events = [
        { name: 'Dzeufack', info: 'created a new forum', concern: 'Gardening', time: '14 min', color: '#673AB7'},
        { name: 'Sandra Norvelle', info: 'made an ', concern: 'order', time: '10 min', color: '#FF9800' },
        { name: 'Kameni', info: 'is currently', concern: 'driving', time: '8 min', color: '#607D8B'},
        { name: 'Mbah royce', info: 'modified his', concern: 'profile', time: 'just now', color: '#9C27B0'}
    ];

    const appt = [
        { name: 'Dzeufack Theresa', img: pers9, category: 'Gardening'},
        { name: 'Sandra Norvelle', img: pers10, category: 'Poultry'},
        { name: 'Kameni Ange', img: pers11, category: 'Ranching'},
        { name: 'Mbah royce', img: pers12, category: 'Fidhing'}
    ];

     const customizedContent = (item) => {
        return (
                <div className="flex flex-row p-2 w-full hover:cursor-pointer -mt-2 hover:bg-gray-100 rounded-md gap-x-8" >
	                		<div className=" w-40">
	                			<p className="text-sm text-black font-semibold">{item.name} <span className="text-xs font-medium text-lightblack">{item.info}.</span> <span className="text-xs font-medium text-black">{item.concern}</span></p>
	                		</div>
	                		<div className="flex flex-col text-center ">
	                			<p className="text-xs">{item.time}</p>
	                		</div>
	            </div>
        );
    };

    const customizedApp = (item) => {
        return (
                <div className="flex flex-row p-2 w-full hover:cursor-pointer -mt-2 hover:bg-gray-100 rounded-md gap-x-8" >
	                		<div style={{backgroundImage: `url(${item.img})`}} cclassName="bg-cover bg-center w-10 h-10 rounded-full"></div>
	                		<div className="flex flex-col  ">
	                			<p className="text-md font-semibold">{item.category}</p>
	                			<p className="text-md font-semibold">{item.name}</p>
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
			<div className=" w-full bg-bg_dash md:w-120 lg:w-120 scrollbar-thin hover:scrollbar-thumb-gray-200 scrollbar-track-gray-300 h-[698px] overflow-auto mt-1 ">
				
				<div className="flex flex-row gap-4 my-6">
					<div className="flex flex-col w-[90%]">
						<p className=" text-md font-medium text-createText">Good Morining Anna</p>
						<p className=" text-sm font-regular text-createText">Here is what is happening in your site</p>
					</div>
					<div className="p-1 group hover:cursor-pointer rounded-md w-fit h-fit px-4 bg-green-100">
						<div className="my-2 text-green-400"><BsActivity/></div>
					</div>
				</div>
				<div className="flex flex-row gap-4	">
					{
						cardDData?.map((info) => {
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
								/>
							)
						})
					}
					
				</div>
				<div className="flex flex-row gap-4 w-full h-[400px] py-4">
					<div className="bg-white rounded-md h-full w-[50%]">
						<div className=" bg-white rounded-md w-full">
							<div className="flex  border-b border-borderflex-row bg-white rounded-t-md py-2 px-4  w-full">
								<p className="w-[72%] font-bold text-lightBlack  text-md py-2">Report</p>
								<div className=" bg-gradient-to-b from-grade to-primary flex flex-row rounded-md p-1">
									<div className="text-white mt-2 mx-2"><BsCalendar4Week/></div>
									<select className="bg-transparent outline-0 text-white">
										<option className="text-black">Today</option>
										<option className="text-black">This week</option>
										<option className="text-black">This month</option>
										<option selected className="text-black">This year</option>
									</select>
								</div>
							</div>
						</div>
						<div className=" h-[300px]">
							
         				   <Chart type="bar" data={chartData} options={chartOptions} className="h-full" />
						</div>
					</div>	
					<div className="bg-white rounded-md h-full w-[25%]">
						<div className=" bg-white rounded-md w-full">
							<div className="flex  border-b border-borderflex-row bg-white rounded-t-md py-2 px-4  w-full">
								<p className="w-[72%] font-bold text-lightBlack  text-md py-2">Recent Activities</p>
								<p className="text-xs py-3 ml-2 text-primary hover:underline cursor-pointer">View all</p>
							</div>
						</div>
						<div className="-ml-4 mt-4 h-[300px]">
							<div><Timeline value={events} className="customized-timeline" marker={customizedMarker} content={customizedContent} /></div>
						</div>
					</div>
					<div className="bg-white rounded-md h-full w-[25%]">
						<div className=" bg-white rounded-md w-full">
							<div className="flex  border-b border-borderflex-row bg-white rounded-t-md py-2 px-4  w-full">
								<p className="w-[72%] font-bold text-lightBlack  text-md py-2">Top consultants</p>
								<p className="text-xs py-3 ml-2 text-primary hover:underline cursor-pointer">View all</p>
							</div>
						</div>
						<div className=" h-[300px]">
						{
							appt.map((item) => {
								console.log()
								return <div className="flex flex-row p-4 w-full hover:cursor-pointer -mt-2 hover:bg-gray-100 rounded-md gap-x-8" >
					                		<div style={{backgroundImage: `url(${item.img})`}} className="bg-cover bg-center w-10 h-10 rounded-full"></div>
					                		<div className="flex flex-col w-[50%] ">
					                			<p className="text-md font-semibold">{item.category}</p>
					                			<p className="text-sm text-lightblack">{item.name}</p>
					                		</div>
					                		<p className="text-xs text-lightblack self-end">12 min</p>
	           							</div>
							})
						}
						</div>
					</div>
				</div>
				<div className="flex flex-row gap-4 w-full h-[400px] ">
					<div  className="bg-white rounded-md w-full h-full">
						<Table name="Top products"/>
					</div>
				</div>
				<AddProduct
						visible={showModal}
						onClose={() => setShowModal(false)}
					/>
			</div>
		</>
	)
}