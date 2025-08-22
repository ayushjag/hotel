

import React from 'react';
import { Link } from 'react-router-dom'; 

const RoomCard = ({ room }) => {
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden 
                   transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img src={room.imageUrl} alt={room.name} className="w-full h-full object-cover"/>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-800">{room.name}</h3>
        <p className="text-gray-500 mt-1">
          Sleeps up to {room.capacity} guest(s)
        </p>
        <div className="flex-grow" />
        <div className="flex items-baseline justify-between mt-4">
          <div>
            <span className="text-2xl font-extrabold text-blue-600">${room.price}</span>
            <span className="text-gray-500 ml-1">/ night</span>
          </div>
        </div>
      </div>
      <div className="p-5 pt-0">
  
        <Link 
          to={`/room/${room.id}`} 
         className="w-full bg-[#E8E8E8] text-gray-900 font-bold py-2 px-4 rounded-lg 
                           hover:bg-[#CECECE] transition duration-200"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;