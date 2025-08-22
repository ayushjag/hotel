import React from 'react';

const BookingForm = ({ bookingDetails, onDetailChange }) => {
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 items-end">
      
      <div className="form-group">
        <label htmlFor="checkin-date" className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
        <input 
          type="date" 
          id="checkin-date" 
          name="checkinDate"
          min={today}
          value={bookingDetails.checkinDate}
          onChange={onDetailChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="checkout-date" className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
        <input 
          type="date" 
          id="checkout-date"
          name="checkoutDate"
          min={bookingDetails.checkinDate || today}
          value={bookingDetails.checkoutDate}
          onChange={onDetailChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="form-group">
        <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
        <input 
          type="number" 
          id="guests" 
          name="guests"
          min="1"
          value={bookingDetails.guests}
          onChange={onDetailChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="form-group">
        <label htmlFor="room-type" className="block text-sm font-medium text-gray-700 mb-1">Room Type</label>
        <select 
          id="room-type"
          name="roomType"
          value={bookingDetails.roomType}
          onChange={onDetailChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="any">Any</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Suite">Suite</option>
        </select>
      </div>

    </div>
  );
};

export default BookingForm;