	import {
		BsChevronCompactRight, 
		BsPerson, 
		BsPersonFill,
		BsPeople,
		BsCarFrontFill,
		BsPeopleFill, BsArrowBarRight,BsClock, BsRecordCircle, BsList, BsWechat, BsNut, BsBoxSeam,BsCalendar4Week, BsGraphUpArrow, BsTruckFront, BsChevronCompactLeft,BsCart2, BsBoxes, BsFillGridFill, BsStarFill,
		BsCarFront,
		BsPaperclip,
		BsNewspaper,
		BsApp,
		BsFillMenuAppFill,
		BsBuilding}
	from 'react-icons/bs'

	export const filterMenu = [
		{
			name: "Categories",
			icon: <BsNut/>,
			menus: ["vegetables","fruit", "livestocks", "tool",  "tubers", "flower", "fish", "cash crop", "others",]
		},
		{
			name: "Trends",
			icon: <BsClock/>,
			menus: ["Most popular", "Most Search","Top Farmers"]
		},
		{
			name: "Country/Region of Manufacture",
			menus: ["Nigeria", "Cameroon", "Congo", "Guinea", "Not specified"]
		},
		{
			name: "Price",
			menus: ["Under 2000XAF", "2000XAF to 10000XAF", "Over 10000Xaf"]
		},
		{
			name: "Condition",
			menus: ["New", "Second hand"]
		},
		{
			name: "Buying Format",
			menus: ["All Listings", "Buy It Now"]
		}, 
		{
			name: "Delivery Options",
			menus: ["Free International Shipping", "Local Pickup"]
		}
	]

	export const colors = ["red", "orange", "yellow", "green", "pink", "teal"]

	export const subMenuList = [
			{
				name: "Sales",
				icon: <BsBoxes/>,
				menus: ["Orders", "Invoices"]
			},
	]

	export const menu = [
			// {
			// 	name: "Dashboard",
			// 	icon: <BsFillGridFill/>,
			// 	path: "/farmer/"
			// },
			{
				name: "Products",
				icon: <BsBoxSeam/>,
				path: "/farmer/products"
			},{
				name: "Customers",
				icon: <BsPeople/>,
				path: "/farmer/customers"
			},{
				name: "Orders",
				icon: <BsBoxes/>,
				path: "/farmer/orders"
			},{
				name: "Invoices",
				icon: <BsNewspaper/>,
				path: "/farmer/invoices"
			}
	]

	export const serviceMenuList = [
		{
			name: "Drive",
			icon: <BsCarFront/>,
			menus: ["Drive","Books", "Reservations"]
		},
		{
			name: "Consultation",
			icon: <BsCalendar4Week/>,
			menus: ["Consultants", "Appointments","Sessions"]
		},
	]
	export const serviceMenu = [
			{
				name: "Market Place",
				icon: <BsCart2/>,
				path: "/market"
			},{
				name: "Forum",
				icon: <BsWechat/>,
				path: "/forum"
			}
	]

	export const driverMenu = [
		// {
		// 	name: "Dashboard",
		// 	icon: <BsFillGridFill/>,
		// 	path: "/driver/"
		// },
		
			{
				name: "Vehicle",
				icon: <BsCarFrontFill/>,
				path: "/driver/vehicle"
			},{
				name: "Customers",
				icon: <BsPeopleFill/>,
				path: "/driver/customers"
			},
	]

	export const consultantMenu = [
		// {
		// 	name: "Dashboard",
		// 	icon: <BsFillGridFill/>,
		// 	path: "/consultant/"
		// },
		
		{
			name: "Appointments",
			icon: <BsFillMenuAppFill/>,
			path: "/consultant/appointment"
		},{
			name: "Schedule",
			icon: <BsCalendar4Week/>,
			path: "/consultant/schedule"
		},
	]

	export const subConsultantMenuList = [
		{
			name: "Appointments",
			icon: <BsFillMenuAppFill/>,
			menus: ["Requests", "List"]
		}
	]

	export const subDriverMenuList = [
			{
				name: "rides",
				icon: <BsCarFront/>,
				menus: ["Requests", "Sessions"]
			},
	]

	export const serviceDriverMenu = [

			{
				name: "Market Place",
				icon: <BsBoxes/>,
				path: "/market"
			},
	]

	export const serviceAdminMenu = [

			{
				name: "Market Place",
				icon: <BsBoxes/>,
				path: "/market"
			},
	]

	export const adminMenu = [
		// {
		// 	name: "Dashboard",
		// 	icon: <BsFillGridFill/>,
		// 	path: "/admin/"
		// },
		{
			name: "Clients",
			icon: <BsPerson/>,
			path: "/admin/clients"
		},
		{
			name: "Farmers",
			icon: <BsPersonFill/>,
			path: "/admin/farmers"
		},
		{
			name: "Drivers",
			icon: <BsPeopleFill/>,
			path: "/admin/drivers"
		},
		{
			name: "Consultants",
			icon: <BsPeople/>,
			path: "/admin/consultants"
		},
		{
			name: "Vehicles",
			icon: <BsCarFront/>,
			path: "/admin/vehicles"
		},
		{
			name: "Warehouse",
			icon: <BsBuilding/>,
			path: "/admin/warehouse"
		},
	]