
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allRooms } from '../api/mockData'; 

const RoomDetailPage = () => {
  const { roomId } = useParams(); 
  const room = allRooms.find(r => r.id === parseInt(roomId)); 


  if (!room) {
    return (
      <div className="text-center p-12">
        <h1 className="text-4xl font-bold text-gray-600">Room Not Found</h1>
        <p className="text-gray-500 mt-4">We couldn't find a room with that ID.</p>
        <Link to="/" className="mt-6 inline-block bg-gray-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-700">
          &larr; Back to Search
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
          <Link to="/" className="text-gray-600 hover:underline">
            &larr; Back to Search Results
          </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
        <div>
          <img src={room.imageUrl} alt={room.name} className="w-full h-auto rounded-lg shadow-lg"/>
        </div>

        <div className="flex flex-col">
          <h1 className="text-4xl font-extrabold text-gray-800">{room.name}</h1>
          <p className="text-gray-500 mt-2 text-lg">Perfect for up to {room.capacity} guests</p>
          <div className="my-6">
              <p className="text-gray-700">
                This is a placeholder description for the {room.name}. In a real application, this would contain detailed information about the room's amenities, features, and policies.
              </p>
          </div>
          <div className="mt-auto">
            <div className="flex items-baseline mb-4">
                <span className="text-4xl font-extrabold text-gray-800">${room.price}</span>
                <span className="text-gray-500 ml-1">/ night</span>
            </div>
            <button className="w-full bg-gray-300 text-black font-bold py-3 px-6 rounded-lg text-lg hover:bg-gray-400 transition duration-200">
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailPage;