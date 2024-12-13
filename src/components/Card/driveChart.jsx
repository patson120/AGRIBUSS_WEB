
import {BsChevronCompactRight, BsCaretDownFill,BsCalendar4Week, BsChevronCompactLeft, BsStarFill} from 'react-icons/bs'
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import {OrdData} from '../../Utils/tableData.jsx'
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

import { Outlet, Link } from "react-router-dom";
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { MultiSelect } from 'primereact/multiselect';
import { classNames } from 'primereact/utils';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { ResponsiveContainer, LineChart, Bar,  BarChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from "recharts";

export default function DriveChart({name}){
		const pieChartData =
	[
	
		{
			drive: "Mesasi",
			percentage: 40,
		},
		{
			drive: "Mvan",
			percentage: 60,
		},
		{
			drive: "Mesamendongo",
			percentage: 86,
		},
		{
			drive: "Awai",
			percentage: 60,
		},
		{
			drive: "Ekounou",
			percentage: 40,
		},
	]

	return(
		<div className="  bg-white mt-3 flex flex-col gap-2 rounded-md w-[20%]">
				<div className="flex border-b border-border flex-row bg-white rounded-t-md py-2 px-4  w-full">
					<p className="w-[72%] font-bold text-lightBlack text-md py-2">{name}</p>
					<div className="flex flex-row py-2">
						<Link to={`/farmer/Sales/Orders`}><p className="text-primary hover:underline text-xs ml-4 pr-2 mt-1">View all</p></Link>
					</div>
				</div>
				<div className="px-3 h-[300px]">
					<ResponsiveContainer width="100%" aspect={0}>
						<BarChart
							 data={pieChartData}
							 margin={{
							 	left:5, 
							 	right:5, 
							 	top:5, 
							 	bottom:5}}
						>
						 	<CartesianGrid

						 	/>
						 		<Tooltip 
						 			contentStyle={{backgroundColor: "white", borderRadius:"10px", border: "none"}}
						 		/>
						 		<Bar 
						 			dataKey="percentage" 
						 			stroke="orange" 
						 			activeDot={{r:10}} 
						 			type="monotone"
						 		/>
						 		<XAxis
							 		dataKey="date"
							 		interval="preserveStartEnd" 
						 			axisLine={false}
						 			stroke="lightslategrey"
						 			tickLine={true}
						 			tickSize={20}
						 			minTickGap={20}
						 		/>
						 		<YAxis
						 			stroke="lightslategrey"
						 			axisLine={false}
						 			tick={{strokeWidth: 2}}
						 			tickLine={false}
						 			tickSize={20}
						  		/>
						 		<Legend/>
						</BarChart>
					</ResponsiveContainer>
				</div>
		</div>
	)
}