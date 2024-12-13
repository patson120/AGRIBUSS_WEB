import React from 'react';

const Feedback = () => {
  const feedbacks = [
    { name: 'Percy Mendouga', time: '3 min', message: 'The delivery was fast...' },
    { name: 'Mickel Lonla', time: '5 min', message: 'Very satisfied with...' },
    // Add more feedbacks here
  ];

  return (
    <div className="mb-4 bg-white  rounded-lg shadow-lg">
      <div className=' flex justify-between p-4 border-b-2 border-lightgrey '>
        <h2 className="text-xl font-semibold">Feedbacks</h2>
        <p className='text-xs text-gray-500 my-2 cursor-pointer hover:underline'> </p>
      </div>
      <div className="h-60 overflow-y-auto">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="flex justify-between items-center mb-2 px-4 p-2 bg-white border-b-[2px] border-lightgrey">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50"
                alt={feedback.name}
                className="rounded-full w-12 h-12"
              />
              <div className="ml-2">
                <h3 className="font-semibold">{feedback.name}</h3>
                <p className="text-gray-700">{feedback.message}</p>
              </div>
            </div>
            <p className="text-black self-start text-xs">{feedback.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
