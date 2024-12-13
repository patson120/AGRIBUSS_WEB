import React, { useState } from 'react';
import axiosInstance from '../../Utils/axiosInstance';

const Schedule = () => {
  const [selectedSchedule, setSelectedSchedule] = useState([]);
  const scheduleTime = ['7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.'];

  const handleCellClick = (day, time) => {
    const selectedCell = { day, time };
    const existingCell = selectedSchedule.find((cell) => cell.day === day);

    if (existingCell) {
      // If the day already exists, remove it
      setSelectedSchedule(selectedSchedule.filter((cell) => cell.day !== day));
    } else {
      // Add the new selection if the day is not already selected
      setSelectedSchedule([...selectedSchedule, selectedCell]);
    }
  };

  const handleSubmit = async () => {
    try {
      await axiosInstance.post('/schedule', { date: selectedSchedule });
      alert('Schedule saved successfully!');
      setSelectedSchedule([]); // Clear the selection after saving
    } catch (error) {
      console.error('Error saving schedule:', error);
      alert('Failed to save schedule.');
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Your Schedule</h1>
      <table className="w-full bg-white border-collapse">
        <thead className='bg-primary text-white'>
          <tr>
            <th className="border px-4 py-2">Time</th>
            <th className="border px-4 py-2">Monday</th>
            <th className="border px-4 py-2">Tuesday</th>
            <th className="border px-4 py-2">Wednesday</th>
            <th className="border px-4 py-2">Thursday</th>
            <th className="border px-4 py-2">Friday</th>
            <th className="border px-4 py-2">Saturday</th>
          </tr>
        </thead>
        <tbody>
          {scheduleTime.map((time, index) => (
            <tr key={index} className='text-center'>
              <td className="border px-4 py-2">{time}</td>
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
                <td key={day}
                  className="border px-4 py-2 cursor-pointer"
                  onClick={() => handleCellClick(day, time)}
                >
                  {selectedSchedule.some(cell => cell.day === day && cell.time === time) && (
                    <span className="text-green-500">✓</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSubmit} className="mt-4 bg-primary text-white px-4 py-2 rounded">
        Save Schedule
      </button>
    </div>
  );
};

export default Schedule;