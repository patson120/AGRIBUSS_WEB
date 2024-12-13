import {BsChevronCompactRight, BsCaretDownFill,BsCalendar4Week, BsChevronCompactLeft, BsStarFill} from 'react-icons/bs'
import GradientBtn from '../Button/GradientBtn.jsx'
import {
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Area,
	AreaChart,
	Pie,
	PieChart,
	Cell,
  } from 'recharts';
import { barChartdata, tooltip } from '../../constants/objects.jsx';

export default function GraphCard1(){

	return(
		<>
			<div className=" bg-white mt-4 rounded-md w-full">
				<div className="flex  border-b border-borderflex-row justify-between bg-white rounded-t-md py-2 px-4  w-full">
					<p className="w-[72%] font-bold text-lightBlack  text-md py-2">Report</p>
					<div className='flex flex-row bg-gradient-to-b from-grade to-primary w-fit p-2 rounded-md'>
						<div className=" my-1 text-[80%] text-gray-600 "><BsCalendar4Week/></div>
                        <select className='text-sm text-gray-600 px-2 bg-transparent outline-none'>
                            <option>Today</option>
                            <option>This Week</option>
                            <option>This Month</option>
                            <option>This Year</option>
                        </select>
                    </div>
				</div>
				<div className="h-[300px] py-4 ">
                   <ResponsiveContainer>
                    <AreaChart width={600} height={300} data={barChartdata}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#58CD4D" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#58CD4D" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="green" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="green" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" tickLine={false} className="text-xs mt-4 border-none border-collapse" axisLine={false}/>
                      <YAxis tickLine={false} minTickGap={10} className="text-xs m-4 border-none" axisLine={false} />
                      <CartesianGrid strokeDasharray="4 1 2" vertical={false} />
                      <Tooltip wrapperStyle={tooltip}/>
                      <Area type="monotone" dataKey="orders" stroke="#58CD4D" fillOpacity={1} fill="url(#colorUv)" />
                      <Area type="monotone" dataKey="pv" stroke="green" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                    </ResponsiveContainer>   
				</div>
				
			</div>
		</>
	)
}