import { useEffect, useState } from 'react';
import { Paginator } from 'primereact/paginator';
import { BsBuilding, BsCalendar2Event, BsGeoAlt, BsClock, BsCashCoin } from 'react-icons/bs';
import axiosInstance from '../Utils/axiosInstance.js';
import image from '../constants/images.js';
import { useSelector } from 'react-redux';

export default function Consultation() {
    const [q, setQ] = useState("");
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [consultants, setConsultants] = useState([]);
    const [selectedConsultant, setSelectedConsultant] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [availableDates, setAvailableDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [isBooking, setIsBooking] = useState(false);

    useEffect(() => {
        const fetchConsultants = async () => {
            try {
                const response = await axiosInstance.get('/consultants'); // Endpoint to fetch consultants
                setConsultants(response.data);
            } catch (error) {
                console.error('Error fetching consultants:', error);
            }
        };

        fetchConsultants();
    }, [])
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axiosInstance.get(`/schedule/`);
                console.log("API Response: ", response.data);
                setConsultants(response.data.data);
            } catch (error) {
                console.error('Error fetching schedule:', error);
            }
        };

        fetchUsers();
    }, []);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const handleViewClick = (consultant) => {
        setSelectedConsultant(consultant);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedConsultant(null);
    };
	
	const clientid = useSelector((state) => state.user.userInfo._id);  

	const handleBookClick = async (consultantId) => {
		const appointmentDetails = {
			consultant: consultantId,
			client: clientid, // Get farmer's ID from context or state
			date: selectedDate, // This should be the date selected by the farmer
			startTime: "12:00 PM", // Example start time
			endTime: "1:00 PM", // Example end time
		};
	
		try {
			const response = await axiosInstance.post('/appointments', appointmentDetails);
			console.log("Appointment booked:", response.data);
			// Notify the farmer about the booking success
		} catch (error) {
			console.error('Error booking appointment:', error);
		}
	};

    return (
        <>
            <div className="w-[90%] bg-bg_dash h-screen md:w-120 lg:w-120 scrollbar-thin hover:scrollbar-thumb-gray-200 scrollbar-track-gray-300 overflow-auto mt-1">
                <p className="text-lg font-medium text-createText my-6">Consultants</p>
                <div className="py-4">
                    <input
                        type="search"
                        name="search-form"
                        id="search-form"
                        placeholder="Search for..."
                        value={q}
                        className="p-2 search-input border-border border rounded-md bg-white"
                        onChange={(e) => setQ(e.target.value)}
                    />
                </div>
                <div className="flex flex-wrap mb-4 gap-5">
                    {consultants.map((item, index) => (
                        <div key={index} className='flex w-[45%] h-52 rounded-lg shadow-md bg-white'>
                            <img src={item?.consultant?.images.length > 0 ? item.consultant.images[0] : image.HERO_Consultation} alt='consultant' className='rounded-lg m-2 border-r-[1px] border bg-orange-200 w-60' />
                            <div className='p-2 justify-between px-4 w-full flex flex-col gap-1'>
                                <div className='flex flex-col gap-1'>
                                    <p className='font-bold text-lg text-gray-600'>{item?.firstname?.toUpperCase()}</p>
                                    <div className='flex text-[13px] text-gray-600 gap-4'>
                                        <BsBuilding size={16}/>
                                        <p>{item?.consultant?.consultantInfo?.workplace}</p>
                                    </div>
                                    <div className='flex text-[13px] text-gray-600 gap-4'>
                                        <BsGeoAlt size={16}/>
                                        <p>{item?.consultant?.consultantInfo?.location}</p>
                                    </div>
                                    <div className='flex text-[13px] text-gray-600 gap-4'>
                                        <BsCalendar2Event size={16}/>
                                        <p className='flex gap-4'>
                                            {item?.date?.map(i => i.day.slice(0, 3)).join(', ')}
                                        </p>
                                    </div>
                                    <div className='flex text-[13px] text-gray-600 gap-4'>
                                        <BsClock size={16}/>
                                        <p>12 am - 4 pm</p>
                                    </div>
                                    <div className='flex text-[13px] text-gray-600 gap-4'>
                                        <BsCashCoin size={16}/>
                                        <p>2000FCFA</p>
                                    </div>
                                </div>
                                <div className='flex w-full pb-1 gap-4'>
                                    <button 
                                        className='w-[47%] text-primary ring-1 ring-primary p-1 rounded-md' 
                                        onClick={() => handleViewClick(item)}>
                                        View
                                    </button>
                                    <button onClick={() => handleBookClick(item?.consultant?._id)} className='w-[47%] text-white bg-primary rounded-md'>Book</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Paginator first={first} rows={rows} totalRecords={consultants.length} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />
            </div>

            {isModalOpen && selectedConsultant && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 w-1/3">
                        <h2 className="text-lg font-bold">{selectedConsultant.firstname}</h2>
                        <p><strong>Workplace:</strong> {selectedConsultant.consultant?.consultantInfo?.workplace}</p>
                        <p><strong>Location:</strong> {selectedConsultant.consultant?.consultantInfo?.location}</p>
                        <p><strong>Available Days:</strong> {selectedConsultant.date?.map(i => i.day).join(', ')}</p>
                        <p><strong>Time:</strong> 12 am - 4 pm</p>
                        <div className="flex justify-end mt-4">
                            <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}