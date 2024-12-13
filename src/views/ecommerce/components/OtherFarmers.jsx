import React from 'react';
import { bestFarmers } from '../../../constants/objects';
import { Link } from 'react-router-dom';

const OtherFarmers = () => {
  const farmers = [
    { name: 'Martin Bony', type: 'Mixed Farming' },
    { name: 'Baleba Royce', type: 'Crop Farming' },
    // Add more farmers here
  ];

  return (
    <div className="mb-4 bg-white  rounded-lg shadow-lg">
      <div className=' flex justify-between p-4 border-b-2 border-lightgrey '>
        <h2 className="text-xl font-semibold">Other Farmers</h2>
        <p className='text-xs text-gray-500 my-2 cursor-pointer hover:underline'>See all</p>
      </div>
      <div className="h-[300px] overflow-y-auto pb-2">
        {bestFarmers.map((farmer, index) => (
          index <= 1 &&
          <div key={index} className="flex flex-col gap-2 px-4 py-2 bg-white border-b-[2px] border-lightgrey">
            <div className="flex items-center">
              <img
                src={farmer.image}
                alt={farmer.name}
                className="rounded-full w-12 h-12"
              />
              <div className="ml-2">
                <h3 className="font-semibold">{farmer.name}</h3>
                <p className="text-gray-500 text-sm">{farmer.type}</p>
              </div>
            </div>
            <div className='flex gap-4 justify-between'>
              <button className="bg-primary text-white px-4 py-1 w-1/2 rounded-lg">Follow</button>
              <Link to={`/seller/${farmer.id}`} className='w-1/2 '><button className="border-primary border-[1px] text-primary px-4 py-1 w-full rounded-lg">View</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherFarmers;
