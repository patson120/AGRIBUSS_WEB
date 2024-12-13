// App.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { cardCData } from '../../Utils/CardData';
import NumCard from '../../components/Card/NumCard';
import { BsCalendar4Week } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const ConsultantStats = () => {
    // Sample data for appointments
    const appointmentData = [
      { id: 1, farmer: 'John Doe', date: '2024-10-01', status: 'Confirmed' },
      { id: 2, farmer: 'Jane Smith', date: '2024-10-02', status: 'Pending' },
      { id: 3, farmer: 'Alex Johnson', date: '2024-10-03', status: 'Canceled' },
    ];
  
    // Appointment status counts
    const statusCounts = {
      confirmed: appointmentData.filter(app => app.status === 'Confirmed').length,
      pending: appointmentData.filter(app => app.status === 'Pending').length,
      canceled: appointmentData.filter(app => app.status === 'Canceled').length,
    };
  
    // Line chart data
    const lineChartData = [
      { week: 'Week 1', appointments: 5 },
      { week: 'Week 2', appointments: 10 },
      { week: 'Week 3', appointments: 7 },
      { week: 'Week 4', appointments: 12 },
    ];
  
    return (
        <div className=" w-full bg-bg_dash md:w-120 lg:w-120 scrollbar-thin hover:scrollbar-thumb-gray-200 scrollbar-track-gray-300 h-[698px] overflow-auto mt-1 ">
            
            <div className="flex flex-row gap-4 my-6">
                <div className="flex flex-col w-[90%]">
                    <p className=" text-md font-medium text-createText">Good Morining Anna</p>
                    <p className=" text-sm font-regular text-createText">Here is what is happening in your site</p>
                </div>
            </div>
        
				<div className="flex flex-row gap-4 py-4	">
					{
						cardCData?.map((info) => {
							return(
                <div className="flex flex-row group shadow hover:cursor-pointer gap-4 w-full bg-white md:w-[%] h-fit p-4 rounded-md">
                  <div className="w-[70%]">
                    <p className="font-medium text-lightblack text-xs">{info?.title}</p>
                    <p className="font-bold text-xl ">{info?.sum}</p>
                    <div className={info?.text >= 0 ? "bg-green-100 rounded-xl flex flex-row w-fit h-fit px-2 gap-2 mt-7" : "bg-red-100 rounded-xl flex flex-row w-fit h-fit px-2 gap-2 mt-7"}>
                      <div className={info?.text >= 0 ? "my-1 text-[50%] text-green-400" : "my-1 text-[50%] text-red-400" }>{info?.icon2}</div>
                      <p className={info?.text >= 0 ? "text-[60%] text-green-400" : " text-[60%] text-red-400"}>{info?.text}%</p>
                    </div>
                  </div>
                  <div className="self-end w-[25%]">
                    <div className={`w-fit  h-fit p-4 rounded-full font-bold text-${info?.color}-500 bg-${info?.color}-100`}>{info?.icon}</div>
                    <Link to={`${info?.link}`}> <p className=" mt-5 ml-2 text-xs text-lightblack hover:underline" >{info?.view}</p></Link>
                  </div>
                </div>
							)
						})
					}
					
				</div>
  
        <div className="bg-white p-4 w-full rounded shadow mb-6">
          
					<div className="bg-white rounded-md h-full ">
						<div className=" bg-white rounded-md w-full">
							<div className="flex justify-between border-b border-borderflex-row bg-white rounded-t-md py-2 px-4  w-full">
								<p className=" font-bold text-lightBlack  text-md py-2">Apppointment Report</p>
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
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineChartData}>
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" />
              <Line type="monotone" dataKey="appointments" stroke="#4bc0c0" fill="#4bc0c0" />
            </LineChart>
          </ResponsiveContainer>
        </div>
  
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl mb-4">All Appointments</h2>
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2">Farmer</th>
                <th className="py-2">Date</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointmentData.map(app => (
                <tr key={app.id} className="border-b">
                  <td className="py-2">{app.farmer}</td>
                  <td className="py-2">{app.date}</td>
                  <td className="py-2">{app.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default ConsultantStats;