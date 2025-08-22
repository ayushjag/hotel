
import React from 'react';
import RoomCard from './RoomCard';

const InfoMessage = ({ title, children }) => (
  <div className="text-center p-12 bg-gray-50 rounded-lg border-2 border-dashed col-span-full"> 
    <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
    <p className="text-gray-500 mt-2">{children}</p>
  </div>
);

const RoomList = ({ rooms, isLoading, error }) => {
  const hasRooms = rooms.length > 0;

  const renderContent = () => {
    if (isLoading) {
      return (
        <InfoMessage title="Search for a Room">
          Please select your check-in and check-out dates to view our availability.
        </InfoMessage>
      );
    }
    if (error) {
       return (
        <InfoMessage title="Invalid Date Selection">
          {error}
        </InfoMessage>
       )
    }
    if (hasRooms) {
      return (
      
        rooms.map(room => (
          <RoomCard key={room.id} room={room} />
        ))
      );
    }
    return (
      <InfoMessage title="No Rooms Available">
        We couldn't find any rooms matching your criteria. Please try different dates or guest numbers.
      </InfoMessage>
    );
  };

  return (
    <div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${!hasRooms ? 'justify-items-center' : ''}`}>
        {renderContent()}
      </div>
    </div>
  );
};

export default RoomList;