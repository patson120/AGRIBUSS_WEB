import { useEffect, useState } from 'react';
import axiosInstance from '../../Utils/axiosInstance';
// import axiosInstance from '../Utils/axiosInstance.js';

export default function Appointments() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axiosInstance.get('/appointments'); // Adjust the endpoint as needed
                setAppointments(response.data);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        fetchAppointments();
    }, []);

    return (
        <div className="overflow-x-auto">
            <div className='py-4 text-2xl font-semibold text-green-700'>
                <p>Appointments</p>
            </div>
            <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-200 p-2">Consultant</th>
                        <th className="border border-gray-200 p-2">Client</th>
                        <th className="border border-gray-200 p-2">Date</th>
                        <th className="border border-gray-200 p-2">Start Time</th>
                        <th className="border border-gray-200 p-2">End Time</th>
                        <th className="border border-gray-200 p-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment) => (
                        <tr key={appointment._id}>
                            <td className="border border-gray-200 p-2">{appointment.consultant.name}</td>
                            <td className="border border-gray-200 p-2">{appointment.client.name}</td>
                            <td className="border border-gray-200 p-2">{new Date(appointment.date).toLocaleDateString()}</td>
                            <td className="border border-gray-200 p-2">{appointment.startTime}</td>
                            <td className="border border-gray-200 p-2">{appointment.endTime}</td>
                            <td className="border border-gray-200 p-2">{appointment.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}