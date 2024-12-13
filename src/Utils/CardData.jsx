import img1 from '../assets/images/asdads.jpeg'
import img2 from '../assets/images/coffee.jpeg'
import img3 from '../assets/images/htyu.jpeg'
import img4 from '../assets/images/flow2.jpeg'
import img5 from '../assets/images/brou.jpeg'
import img6 from '../assets/images/incub1.jpeg'
import img7 from '../assets/images/incub.jpeg'
import img8 from '../assets/images/banana.jpeg'
import img12 from '../assets/images/chick.jpeg'
import img9 from '../assets/images/cocao.jpeg'
import img10 from '../assets/images/fruit.jpeg'
import img11 from '../assets/images/honey.jpeg'

//Vehicle imags

import pers2 from '../assets/images/use.jpg'
import pers3 from '../assets/images/boy8.png'
import pers4 from '../assets/images/boy1.png'
import pers5 from '../assets/images/boy2.png'
import pers6 from '../assets/images/boy3.png'
import pers7 from '../assets/images/driver1.png'
import pers8 from '../assets/images/driver2.png'
import pers9 from '../assets/images/driver3.png'
import pers10 from '../assets/images/driver4.png'
import pers11 from '../assets/images/driver7.png'
import pers12 from '../assets/images/driver5.png'
import pers13 from '../assets/images/driver6.png'
import v1 from '../assets/images/van1.png'
import v2 from '../assets/images/taxi1.png'
import v3 from '../assets/images/taxi2.png'
import v4 from '../assets/images/taxi3.png'
import {BsChevronCompactRight,BsPlusLg, BsActivity, BsCart4, BsBag, BsPersonFill,BsBoxes, BsSignTurnRight, BsChevronCompactLeft, BsStarFill, BsCarFront, BsChatDots, BsPatchExclamationFill, BsPatchExclamation, BsNewspaper, BsBadgeAr} from 'react-icons/bs'

export const requestData = 
[
	{
		id: "#abc123",
		image: pers2,
		name: "Kameni Ange",
		speciality: "Fishery",
		location: "Yaounde, Odza",
		destloc: "Awae"
	},
	{
		id: "#abc124",
		image: pers3,
		name: "Ngeuma Martin",
		speciality: "Gardening",
		location: "Yaounde, melen",
		destloc: "Yaounde, bastos"
	},
	{
		id: "#abc125",
		image: pers4,
		name: "Chrisyiano Ronaldo",
		speciality: "Poultry",
		location: "Yaounde, messasi",
		destloc: "Yaounde, melen"
	},
	{
		id: "#abc126",
		image: pers5,
		name: "Metaa Osiris",
		speciality: "Ranching",
		location: "Yaounde, ekounou",
		destloc: "Yaounde, melen"
	},
	{
		id: "#abc127",
		image: pers6,
		name: "Mbamoun Love",
		speciality: "Fishery",
		location: "Yaounde, Odza",
		destloc: "Yaounde, ekiee"
	},
	{
		id: "#abc128",
		image: pers7,
		name: "Nganou Marcel",
		speciality: "Fishery",
		location: "Yaounde, Odza",
		destloc: "Yaounde, melen"
	},
	{
		id: "#abc129",
		image: pers8,
		name: "Nganou Marcel",
		speciality: "Fishery",
		location: "Yaounde, Odza",
		destloc: "Yaounde, melen"
	},
	{
		id: "#abc122",
		image: pers9,
		name: "Nganou Marcel",
		speciality: "Fishery",
		location: "Yaounde, Odza",
		destloc: "Yaounde, melen"
	},
	{
		id: "#abc121",
		image: pers10,
		name: "Nganou Marcel",
		speciality: "Fishery",
		location: "Yaounde, Odza",
		destloc: "Yaounde, melen"
	},
]

export const AppointListData = 
[
	{
		key: "1abc",
		category: "Poultry",
		name: "Sandrah ndeh",
		icon: <BsActivity/>,
		date: "1 min",
		color: "yellow"
	},
	{	
		key: "2abc",
		category: "Gardening",
		name: "Thomas Manu",
		icon: <BsPersonFill/>,
		date: "30 min",
		color: "green"
	},
	{	
		key: "3abc",
		category: "Ranching",
		name: "Carine Loma",
		icon: <BsBoxes/>,
		date: "44 min",
		color: "red"
	},
	{
		key: "4abc",
		category: "Plantation",
		name: "Perscy tiewm",
		icon: <BsStarFill/>,
		date: "1 hour",
		color: "orange"
	},
	
]

export const cardData =
	[
		{
			title: "PRODUCTS",
			icon: <BsBoxes/>,
			sum: "50",
			icon2: <BsActivity/>,
			text: 25,
			view: "view",
			color: "red",
			link: "/farmer/products",
			parent: "farmer"
		},
		{
			title: "ORDERS",
			icon: <BsBag/>,
			sum: "20",
			icon2: <BsActivity/>,
			text: 25,
			view: "view",
			color: "green",
			link: "/farmer/sales/orders",
			parent: "farmer"
		},
		{
			title: "CUSTOMERS",
			icon: <BsPersonFill/>,
			sum: "205",
			icon2: <BsActivity/>,
			text: -12,
			view: "view",
			color: "gray",
			link: "/farmer/customers",
			parent: "farmer"
		},
		{
			title: "RESERVATIONS",
			icon: <BsCarFront/>,
			link: "/farmer/drive/reservations",
			sum: "2",
			icon2: <BsActivity/>,
			text: -12,
			view: "view",
			color: "orange",
			parent: "farmer"

		},
		{
			title: "FORUMS",
			icon: <BsChatDots/>,
			sum: "0",
			icon2: <BsActivity/>,
			text: -12,
			view: "view",
			color: "green",
			link: "/forum",
			parent: "farmer"
		},
	]

export const cardAData =
	[
		{
			title: "TOTAL USERS",
			icon: <BsCart4/>,
			link: "Sales",
			sum: "XAF100,000",
			icon2: <BsActivity/>,
			text: -12,
			view: "view",
			color: "orange",
			parent: "admin"
		},
		{
			title: "FARMERS",
			icon: <BsBag/>,
			sum: "2,089",
			icon2: <BsActivity/>,
			text: 25,
			view: "view",
			color: "green",
			link: "farmers",
			parent: "admin"
		},
		{
			title: "CONSULTANTS",
			icon: <BsPersonFill/>,
			sum: "21,205",
			icon2: <BsActivity/>,
			text: -12,
			view: "view",
			color: "blue",
			link: "drivers",
			parent: "admin"
		},
		{
			title: "DRIVERS",
			icon: <BsBoxes/>,
			sum: "1,000",
			icon2: <BsActivity/>,
			text: 25,
			view: "view",
			color: "red",
			link: "drivers",
			parent: "admin"
		},
		{
			title: "TOTAL CLIENTS",
			icon: <BsSignTurnRight/>,
			sum: "25,000",
			icon2: <BsActivity/>,
			text: -12,
			view: "view",
			color: "green",
			link: "clients",
			parent: "admin"
		},
	]

export const cardCData = 
	[
		{
			title: "TODAY APPOINTMENT",
			icon: <BsNewspaper/>,
			link: "appointment",
			sum: "10",
			icon2: <BsActivity/>,
			text: -12,
			view: "view",
			color: "gray",
			parent: "consultant"
		},
		{
			title: "PENDING APPOINTMENT",
			icon: <BsBadgeAr/>,
			link: "appointment",
			sum: "10",
			icon2: <BsActivity/>,
			text: -12,
			view: "view",
			color: "orange",
			parent: "consultant"
		},
		{
			title: "ACCEPTED APPOINTMENT",
			icon: <BsPatchExclamation/>,
			link: "appointment",
			sum: "10",
			icon2: <BsActivity/>,
			text: -12,
			view: "view",
			color: "green",
			parent: "consultant"
		},
		{
			title: "CANCELED APPOINTMENT",
			icon: <BsPatchExclamation/>,
			link: "appointment",
			sum: "10",
			icon2: <BsActivity/>,
			text: -12,
			view: "view",
			color: "red",
			parent: "consultant"
		},
	]

export const cardDData =
	[
		{
			title: "RESERVATIONS",
			icon: <BsCart4/>,
			link: "Sales",
			sum: "10",
			icon2: <BsActivity/>,
			text: -12,
			view: "view",
			color: "orange",
			parent: "admin"
		},
		{
			title: "VEHICLES",
			icon: <BsBag/>,
			sum: "2,089",
			icon2: <BsActivity/>,
			text: 25,
			view: "view",
			color: "green",
			link: "farmers",
			parent: "admin"
		},
		{
			title: "CANCELED REQUEST",
			icon: <BsPersonFill/>,
			sum: "21,205",
			icon2: <BsActivity/>,
			text: -12,
			view: "view",
			color: "blue",
			link: "drivers",
			parent: "admin"
		},
		{
			title: "DRIVERS",
			icon: <BsBoxes/>,
			sum: "1,000",
			icon2: <BsActivity/>,
			text: 25,
			view: "view",
			color: "red",
			link: "drivers",
			parent: "admin"
		},
		{
			title: "TOTAL CLIENTS",
			icon: <BsSignTurnRight/>,
			sum: "25,000",
			icon2: <BsActivity/>,
			text: -12,
			view: "view",
			color: "green",
			link: "clients",
			parent: "admin"
		},
	]

export const prodCardData =
[
	{
		image: img1,
		name: "Apple",
		state: "bought",
		status: "INSTOCK",
		desc: "1 week dozen chicks",
		price: "XAF1,500",
		unit: "each",
		rate: "5k",
		lacation: "Yaounde Amadou"
	},
	{
		image: img2,
		state: "bought",
		name: "Apple",
		status: "LOWSTOCK",
		desc: "1 week dozen chicks",
		price: "XAF1,500",
		unit: "each",
		rate: "5k",
		lacation: "Yaounde Amadou"
	},
	{
		image: img3,
		state: "sold",
		name: "Apple",
		status: "OUTOFSTOCK",
		desc: "1 week dozen chicks",
		price: "XAF1,500",
		unit: "each",
		rate: "5k",
		lacation: "Yaounde Amadou"
	},
	{
		image: img4,
		state: "sold",
		name: "Apple",
		status: "INSTOCK",
		desc: "1 week dozen chicks",
		price: "XAF1,500",
		unit: "each",
		rate: "5k",
		lacation: "Yaounde Amadou"
	},
	{
		image: img5,
		state: "sold",
		name: "Apple",
		status: "INSTOCK",
		desc: "1 week dozen chicks",
		price: "XAF1,500",
		unit: "each",
		rate: "5k",
		lacation: "Yaounde Amadou"
	},
	{
		image: img6,
		state: "sold",
		name: "Apple",
		status: "LOWSTOCK",
		desc: "1 week dozen chicks",
		price: "XAF1,500",
		unit: "each",
		rate: "5k",
		lacation: "Yaounde Amadou"
	},
	{
		image: img7,
		state: "sold",
		name: "Apple",
		status: "OUTOFSTOCK",
		desc: "1 week dozen chicks",
		price: "XAF1,500",
		unit: "each",
		rate: "5k",
		lacation: "Yaounde Amadou"
	},
	{
		image: img8,
		state: "sold",
		name: "Apple",
		status: "INSTOCK",
		desc: "1 week dozen chicks",
		price: "XAF1,500",
		unit: "each",
		rate: "5k",
		lacation: "Yaounde Amadou"
	},
	{
		image: img7,
		state: "sold",
		name: "Apple",
		status: "INSTOCK",
		desc: "1 week dozen chicks",
		price: "XAF1,500",
		unit: "each",
		rate: "5k",
		lacation: "Yaounde Amadou"
	},
]

export const vehicleData = 
[
	{
		id: "#thh123",
		image: v1,
		location: "Yaounde, melen",
		rate: 4,
		status: "active",
		owner: " 7 Seat, huge back",
		profile: pers11,
	},
	{
		id: "#thh124",
		image: v2,
		location: "Yaounde, tekase",
		rate: 4,
		status: "inactive",
		owner: "5 Seats",
		profile: pers2
	},
	{
		id: "#thh125",
		image: v3,
		location: "Yaounde, Post",
		rate: 4,
		status: "active",
		owner: "8 seats",
		profile: pers10
	},
	{
		id: "#thh126",
		image: v4,
		location: "Yaounde, melen",
		rate: 4,
		status: "inactive",
		owner: "5 Seats, small back",
		profile: pers8
	},
	{
		id: "#thh127",
		image: v1,
		location: "Yaounde, melen",
		rate: 4,
		status: "inactive",
		owner: "5 Seats, ",
		profile: pers2
	},
	
]

export const driverData = 
[
	{
		id: "#thh123",
		name: "Gerard paul",
		img: pers7,
		rate: 4,
		location: "carrefour market ekiee",
		lang: "french",
	},
	{
		id: "#thh124",
		name: "Maxim song",
		rate: 4,
		img: pers8,
		location: "Yaounde, Mokolo",
		lang: "french",
	},
	{
		id: "#thh125",
		name: "Henry Donfack",
		rate: 2,
		img: pers9,
		location: "Yaounde, Amadou",
		lang: "english",
	},
	{
		id: "#thh126",
		name: "Mbah Royce",
		rate: 5,
		img: pers10,
		location: "Yaounde, Mvogbi",
		lang: "english",
	},
	{
		id: "#thh127",
		name: "Tanneu Monette",
		rate: 3,
		img: pers11,
		location: "Yaounde, Mokolo",
		lang: "french",
	},
	{
		id: "#thh128",
		name: "Tsembom Percy",
		rate: 5,
		img: pers3,
		location: "Yaounde, Mvan",
		lang: "english",
	},
	{
		id: "#thh129",
		name: "Kameni Chris",
		rate: 2,
		img: pers4,
		location: "Yaounde, Ekounou",
		lang: "french",
	},
	{
		id: "#thh130",
		name: "Roger Norvelle",
		rate: 4,
		img: pers8,
		location: "Yaounde, Awai",
		lang: "french",
	},
	{
		id: "#thh131",
		name: "Tamto Julien",
		rate: 4,
		img: pers12,
		location: "Yaounde, Bastos",
		lang: "english",
	},
	{
		id: "#thh133",
		name: "DN. Marcelin",
		rate: 5,
		img: pers13,
		location: "Yaounde, Appy",
		lang: "french",
	},
]

export const dealData =
[
	{
		image: img1,
		percentage: -25,
		oPrice: "6,500",
		nPrice: "4,500"
	},
	{
		image: img2,
		percentage: -25,
		oPrice: "6,500",
		nPrice: "4,500"
	},
	{
		image: img3,
		percentage: -25,
		oPrice: "6,500",
		nPrice: "4,500"
	},
	{
		image: img4,
		percentage: -25,
		oPrice: "6,500",
		nPrice: "4,500"
	},
	{
		image: img5,
		percentage: -25,
		oPrice: "6,500",
		nPrice: "4,500"
	},
	{
		image: img6,
		percentage: -25,
		oPrice: "6,500",
		nPrice: "4,500"
	},
	{
		image: img7,
		percentage: -25,
		oPrice: "6,500",
		nPrice: "4,500"
	},
	{
		image: img8,
		percentage: -25,
		oPrice: "6,500",
		nPrice: "4,500"
	},
	{
		image: img9,
		percentage: -25,
		oPrice: "6,500",
		nPrice: "4,500"
	},
]