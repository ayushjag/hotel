
import React from 'react';
import { useBooking } from '../hooks/useBooking';
import BookingForm from '../components/BookingForm';
import RoomList from '../components/RoomList';

const BookingPage = () => {
  const { 
    bookingDetails, 
    handleDetailChange, 
    availableRooms, 
    error 
  } = useBooking();

  const isLoading = !bookingDetails.checkinDate || !bookingDetails.checkoutDate;

  return (
    <main>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Find Your Perfect Stay
        </h1>
        <p className="text-center text-gray-500 mt-2">
          Select your dates and preferences to see our available rooms.
        </p>
      </header>

      <BookingForm 
        bookingDetails={bookingDetails} 
        onDetailChange={handleDetailChange} 
      />
      
      <div className="mt-8">
        <RoomList 
          rooms={availableRooms} 
          isLoading={isLoading && !error}
          error={error}
        />
      </div>
    </main>
  );
};

export default BookingPage;