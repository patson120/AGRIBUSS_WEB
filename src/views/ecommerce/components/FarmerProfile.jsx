import React from 'react';
import { BsBuildings, BsEnvelope, BsTelephone, BsTelephonePlus } from 'react-icons/bs';
import { bestFarmers } from '../../../constants/objects';

const FarmerProfile = ({id}) => {
  
  const farmer = bestFarmers.find(p => p.id === parseInt(id));
  return (
    <div className="bg-white h-[687px] shadow-lg rounded-lg">
      {/* Cover Image */}
      <div className="h-40 w-full bg-gray-300 rounded-t-lg">
        <img
          src="https://via.placeholder.com/500x150"
          alt="Cover"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      
      {/* Profile Section */}
      <div className="flex flex-col items-center p-4 -mt-20">
        <img
          src={farmer.image}
          alt="Farmer Profile"
          className="rounded-full bg-gray-100 w-32 h-32 border-4 border-white shadow-md"
        />
        <h2 className="text-lg font-semibold mt-2">{farmer.name}</h2>
        <p className="text-gray-500">{farmer.category}</p>
        <div className="mt-1 text-2xl text-yellow-500">★★★★★</div>

        <div className="mt-4 w-full text-left">
          <div className='flex gap-2'>
            <BsEnvelope className='my-1 text-gray-600'/>
            <p className="text-gray-700"><strong>Email: </strong> Hidden</p>
          </div>
          <div className='flex gap-2'>
            <BsTelephone className='my-1 text-gray-600'/>
            <p className="text-gray-700"><strong>Tel:</strong> Hidden</p>
          </div>
          <div className='flex gap-2'>
            <BsBuildings className='my-1 text-gray-600'/>
            <p className="text-gray-700"><strong>Farm address:</strong> Hidden</p>
          </div>
          <button className="text-primary text-xs text-right w-full mt-1">Request Info</button>
        </div>

        <button className="bg-primary text-white px-4 py-2 w-64 hover:shadow rounded-lg mt-4">
          Follow
        </button>
        <button className="border border-primary text-primary w-64 hover:shadow px-4 py-2 rounded-lg mt-2">
          Add to favorites
        </button>
      </div>
    </div>
  );
};

export default FarmerProfile;
