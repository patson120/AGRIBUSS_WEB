

import img2 from '../assets/images/banana.jpeg'
import img3 from '../assets/images/cocao.jpeg'
import img4 from '../assets/images/coffee.jpeg'
import img5 from '../assets/images/honey.jpeg'
import img6 from '../assets/images/chick.jpeg'

import tl1 from '../assets/images/TOOL.jpeg'
import tl2 from '../assets/images/YOO.jpeg'
import tl3 from '../assets/images/incub.jpeg'
import tl4 from '../assets/images/incub1.jpeg'
import tl5 from '../assets/images/gth.jpg'
import tl7 from '../assets/images/fruit.jpeg'
import tl8 from '../assets/images/flow2.jpeg'
import tl6 from '../assets/images/gth.jpg'
import tl9 from '../assets/images/wing.jpeg'

// car imahes

import v1 from '../assets/images/van1.png'
import v2 from '../assets/images/taxi1.png'
import v3 from '../assets/images/taxi2.png'
import v4 from '../assets/images/taxi3.png'



	export const tool = 
	[
		{
			id: "123a",
			image: tl1,
			oPrice: 12500,
			nPrice: 10500,
		},
		{
			id: "123b",
			image: tl2,
			oPrice: 12500,
			nPrice: 10500,
		},
		{
			id: "123c",
			image: tl3,
			oPrice: 12500,
			nPrice: 10500,
		},
		{
			id: "12da",
			image: tl4,
			oPrice: 12500,
			nPrice: 10500,
		},
		{
			id: "123d",
			image: tl5,
			oPrice: 12500,
			nPrice: 10500,
		},
	]

	
	export const bookInfo = 
    [ 
    	{
    		code: "f230fh0g3",
    		driver: "Roger Menkue",
    		status: "delivered",
    		car: v1,
    		destination: "Awae",
    	},
    	{
    		code: "f230fh0g3",
    		driver: "Patrick Raoul",
    		status: "pending",
    		car: v2,
    		destination: "Esos",
    	},
    	{
    		code: "f230fh0g3",
    		driver: "Temdi lovert",
    		status: "pending",
    		car: v3,
    		destination: "TKC",
    	},
    	{
    		code: "f230fh0g3",
    		driver: "Tekue Rober",
    		status: "rejected",
    		car: v4,
    		destination: "Mendong",
    	},
    	{
    		code: "f230fh0g3",
    		driver: "Maffo Laurent",
    		status: "pending",
    		car: v1,
    		destination: "Appy",
    	},
    	{
    		code: "f230fh0g3",
    		driver: "Kang Frank",
    		status: "pending",
    		car: v2,
    		destination: "Mendong",
    	},
    	{
    		code: "f230fh0g3",
    		driver: "Stephane Ngo",
    		status: "pending",
    		car: v4,
    		destination: "Bastos",
    	},
    ]

   export const productInfo = 
    [ 
    	{
    		code: "f230fh0g3",
    		name: "Sugar cane",
    		status: "Instock",
    		image: img2,
    		oPrice: 1500,
    		category: "Fruit", 
    		quantity: 15,
    		desc: "Juicy sugar cane",
    		rate: 2
    	},
    	{
    		code: "f230sfh0g3",
    		name: "Rice",
    		category: "grains",
    		oPrice: 25000,
    		image: img3,
    		variation: 
    		[
    			{
    				code: "f230fh0g4",
    				status:"inStock",
    				price: 25000,
    				weight: 25,
    				quantity: 5,
    				img: img3,
    			},
    			{
    				code: "f230fh0g5",
    				status:"LowStock",
    				price: 35000,
    				weight: 50,
    				quantity: 10,
    				img: img5,
    			},
    		],
    		desc: "Juicy sugar cane",
    		rate: 4
    	},
    	{
    		code: "f230sfh0g6",
    		name: "Apple",
    		category: "Fruit",
    		oPrice: 1500,
    		image: img4,
    		variation: 
    		[
    			{
    				code: "f230fh0g5",
    				status:"inStock",
    				price: 1500,
    				size: "medium",
    				color: "green",
    				quantity: 4,
    				img: img6,
    			},
    			{
    				code: "f230fh0g7",
    				status:"inStock",
    				price: 1500,
    				size: "medium",
    				color: "red",
    				quantity: 4,
    				img: img6,
    			},
    		],
    		desc: "Juicy sugar cane",
    		rate: 4.5
    	},
    	{
    		code: "f230sfhw0g3",
    		name: "Sugar cane",
    		status: "Lowstock",
    		image: img5,
    		oPrice: 1500,
    		category: "Fruit",
    		quantity: 15,
    		desc: "Juicy sugar cane",
    		rate: 5
    	},
    	{
    		code: "f230qwsfh0g3",
    		name: "Sugar cane",
    		status: "Outofstock",
    		image: img6,
    		oPrice: 1500,
    		category: "Fruit",
    		quantity: 15,
    		desc: "Juicy sugar cane",
    		rate: 3
    	},
    	{
    		code: "f230sfsah0g3",
    		name: "Sugar cane",
    		status: "Instock",
    		image: img6,
    		oPrice: 1500,
    		category: "Fruit",
    		quantity: 15,
    		desc: "Juicy sugar cane",
    		rate: 4
    	},
    	{
    		code: "f230sfpah0g3",
    		name: "Pell",
    		status: "Instock",
    		image: tl1,
    		oPrice: 1500,
    		category: "Fruit",
    		quantity: 15,
    		desc: "Vry expenibe",
    		rate: 5
    	},
    	{
    		code: "f230fsah0g3",
    		name: "Incubator",
    		status: "Outofstock",
    		image: tl9,
    		oPrice: 1500,
    		category: "Tool",
    		quantity: 15,
    		desc: "Can take 100 eggs at a time",
    		rate: 2
    	},
    	{
    		code: "f230sfokah0g3",
    		name: "Blabla",
    		status: "Lowstock",
    		image: tl8,
    		oPrice: 1500,
    		category: "Fruit",
    		quantity: 15,
    		desc: "Juicy sugar cane",
    		rate: 4
    	},
    	{
    		code: "f230ssadafsah0g3",
    		name: "Sugar cane",
    		status: "Instock",
    		image: tl7,
    		oPrice: 1500,
    		category: "Fruit",
    		quantity: 15,
    		desc: "Juicy sugar cane",
    		rate: 3
    	},
    	{
    		code: "f230cssfsah0g3",
    		name: "Sugar cane",
    		status: "Instock",
    		image: tl6,
    		oPrice: 1500,
    		category: "Fruit",
    		quantity: 15,
    		desc: "Juicy sugar cane",
    		rate: 5
    	},
    ]



export const CustomerData = 
[
	{
		id: "12#asd",
		name: "Bassong Temto Leslie",
		image: img6,
		region: "Yaounde, Nkoa-bang"
	},
	{
		id: "13#asd",
		name: "Ateba gaspar",
		image:img2,
		region: "Douala, Kotto"
	},
	{
		id: "14#asd",
		name: "David Moumie",
		image: img4,
		region: "Baffoussam"
	},
	{
		id: "15#asd",
		name: "Tsopze alexendre",
		image: img5,
		region: "Yaounde"
	},,
	{
		id: "16#asd",
		name: "Monjie Amste",
		image: img2,
		region: "Yaounde, Melem"
	},,
	{
		id: "17#asd",
		name: "Bagari Arouna pascal",
		image: img6,
		region: "Yaounde, Bastos"
	},,
	{
		id: "18#asd",
		name: "Alomba blais helen",
		image: img4,
		region: "Yaounde"
	},,
	{
		id: "19#asd",
		name: "Tapamo stella",
		image: img3,
		region: "Yaounde"
	},,
	{
		id: "20#asd",
		name: "Njomo Andre Marie",
		image: img5,
		region: "Yaounde"
	},
]

export const OrdData = 
[
	{
		id:10,
		client: "Ateba gaspar olivier",
		image: img5,
		product: "Honey",
		quantity: 5,
		Amount: 5200,
		payment: "Mobile Money",
		status: "shipped",
		date: "3 Nov 2023",
	},
	{
		id:11,
		client: "Adouable Jessica",
		image: img2,
		product: "Chicks",
		quantity: 5,
		Amount: 7500,
		payment: "Orange Money",
		status: "pending",
		date: "3 Nov 2023",
	},
	{
		id:15,
		client: "Makimba Antoinette",
		image: img3,
		product: "Incubator",
		quantity: 1,
		Amount: 52000,
		payment: "Mobile Money",
		status: "cancelled",
		date: "3 Nov 2023",
	},
	{
		id:12,
		client: "Kameni ange chris",
		image: img4,
		product: "Banana",
		quantity: 3,
		Amount: 5200,
		payment: "Orange Money",
		status: "shipped",
		date: "3 Nov 2023",
	},
	{
		id:13,
		client: "Metaa Juspine rene",
		image: img6,
		product: "Coffee",
		quantity: 1,
		Amount: 52000,
		payment: "Mobile Money",
		status: "delivered",
		date: "3 Nov 2023",
	},
	{
		id:14,
		client: "Kempa rongue thomas",
		image: img5,
		product: "tea",
		quantity: 2,
		Amount: 1500,
		payment: "Mobile Money",
		status: "delivered",
		date: "3 Nov 2023",
	},
	{
		id:16,
		client: "Tamto sandra junie",
		image: img2,
		product: "tea",
		quantity: 2,
		Amount: 1500,
		payment: "Orange Money",
		status: "delivered",
		date: "3 Jan 2023",
	},
	{
		id:17,
		client: "Tsembom Percy",
		image: img3,
		product: "Coconut",
		quantity: 2,
		Amount: 1500,
		payment: "Mobile Money",
		status: "delivered",
		date: "3 Nov 2023",
	},
	{
		id:18,
		client: "Kempa rongue thomas",
		image: img4,
		product: "tea",
		quantity: 2,
		Amount: 1500,
		payment: "Mobile Money",
		status: "delivered",
		date: "3 Nov 2023",
	},
]


export const OrderData = 
[
	{
		id:1,
		client: "Ateba gaspar olivier",
		image: img5,
		product: "Honey",
		quantity: 5,
		Amount: 5200,
		payment: "Mobile Money",
		status: "shipped",
		date: "3 Nov 2023",
	},
	{
		id:2,
		client: "Adouable Jessica",
		image: img2,
		product: "Chicks",
		quantity: 5,
		Amount: 7500,
		payment: "Orange Money",
		status: "pending",
		date: "3 Nov 2023",
	},
	{
		id:3,
		client: "Makimba Antoinette",
		image: img3,
		product: "Incubator",
		quantity: 1,
		Amount: 52000,
		payment: "Mobile Money",
		status: "cancelled",
		date: "3 Nov 2023",
	},
	{
		id:4,
		client: "Kameni ange chris",
		image: img4,
		product: "Banana",
		quantity: 3,
		Amount: 5200,
		payment: "Orange Money",
		status: "shipped",
		date: "3 Nov 2023",
	},
	{
		id:5,
		client: "Metaa Juspine rene",
		image: img6,
		product: "Coffee",
		quantity: 1,
		Amount: 52000,
		payment: "Mobile Money",
		status: "delivered",
		date: "3 Nov 2023",
	},
	{
		id:6,
		client: "Kempa rongue thomas",
		image: img5,
		product: "tea",
		quantity: 2,
		Amount: 1500,
		payment: "Mobile Money",
		status: "delivered",
		date: "3 Nov 2023",
	},
	{
		id:7,
		client: "Tamto sandra junie",
		image: img2,
		product: "tea",
		quantity: 2,
		Amount: 1500,
		payment: "Orange Money",
		status: "delivered",
		date: "3 Jan 2023",
	},
	{
		id:8,
		client: "Tsembom Percy",
		image: img3,
		product: "Coconut",
		quantity: 2,
		Amount: 1500,
		payment: "Mobile Money",
		status: "delivered",
		date: "3 Nov 2023",
	},
	{
		id:9,
		client: "Kempa rongue thomas",
		image: img4,
		product: "tea",
		quantity: 2,
		Amount: 1500,
		payment: "Mobile Money",
		status: "delivered",
		date: "3 Nov 2023",
	},
]

export const InvoiceData = 
[
	{
		id: "#abc1",
		client: "Kempa rongue thomas",
		image: img4,
		Amount: 1500,
		date: "3 Jan 2023",	
		payment: "Mobile Money",
		product: "tea",
		quantity: 2,
	},
	{
		id: "#abc2",
		client: "Ateba gaspar olivier",
		image: img2,
		Amount: 2500,
		date: "3 Nov 2023",
		payment: "Mobile Money",
		product: "tea",
		quantity: 2,	
	},
	{
		id: "#abc3",
		client: "Tsembom Percy",
		image: img3,
		Amount: 1000,
		date: "3 Sept 2023",
		payment: "Mobile Money",
		product: "tea",
		quantity: 2,	
	},
	{
		id: "#abc4",
		client: "Kempa rongue thomas",
		image: img6,
		Amount: 1500,
		date: "3 Nov 2023",	
		payment: "Mobile Money",
		product: "tea",
		quantity: 2,
	},
	{
		id: "#abc5",
		client: "Londo Yvan ciclere",
		image: img5,
		Amount: 1500,
		date: "3 Nov 2023",
		payment: "Mobile Money",	
		product: "tea",
		quantity: 2,
	},
	{
		id: "#abc6",
		client: "Maurice",
		image: img2,
		Amount: 1500,
		date: "3 Nov 2023",	
		payment: "Mobile Money",
		product: "tea",
		quantity: 2,
	},
	{
		id: "#abc7",
		client: "Taneu Monette",
		image: img4,
		Amount: 1500,
		date: "3 Nov 2023",	
		payment: "Mobile Money",
		product: "tea",
		quantity: 2,
	},
	{
		id: "#abc8",
		client: "Tsembom patate",
		image: img4,
		Amount: 1500,
		date: "3 Nov 2023",	
		payment: "Mobile Money",
		product: "tea",
		quantity: 2,
	},
	{
		id: "#abc9",
		client: "Marie Jea",
		image: img4,
		Amount: 1200,
		date: "3 Nov 2023",	
		payment: "Mobile Money",
		product: "tea",
		quantity: 2,
	},
	{
		id: "#abc10",
		client: "Kempa Sandra Norvelle",
		image: img4,
		Amount: 2500,
		date: "3 Nov 2023",	
		payment: "Mobile Money",
		product: "tea",
		quantity: 2,
	},
	{
		id: "#abc11",
		client: "Kempa rongue thomas",
		image: img4,
		Amount: 1500,
		date: "3 Nov 2023",	
		payment: "Mobile Money",
		product: "tea",
		quantity: 2,
	},
	{
		id: "#abc1",
		client: "Kempa rongue thomas",
		image: img4,
		Amount: 1500,
		date: "3 Nov 2023",	
		payment: "Mobile Money",
		product: "tea",
		quantity: 2,
	},
]