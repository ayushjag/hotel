
import { useState, useMemo } from 'react';
import { allRooms } from '../api/mockData';

export const useBooking = () => {
  const [bookingDetails, setBookingDetails] = useState({
    checkinDate: '',
    checkoutDate: '',
    guests: 1,
    roomType: 'any'
  });
  const [error, setError] = useState('');

  const handleDetailChange = (e) => {
    setBookingDetails(prevDetails => ({
      ...prevDetails,
      [e.target.name]: e.target.value
    }));
  };

  const availableRooms = useMemo(() => {
    const { checkinDate, checkoutDate, guests, roomType } = bookingDetails;
    
    if (!checkinDate || !checkoutDate) return [];

    if (new Date(checkinDate) >= new Date(checkoutDate)) {
      setError('Check-out date must be after the check-in date.');
      return []; 
    }
    
    setError('');
    
    return allRooms.filter(room => {
      const isTypeMatch = roomType === 'any' || room.type === roomType;
      const hasCapacity = room.capacity >= guests;
      return isTypeMatch && hasCapacity;
    });
  }, [bookingDetails]); 
  return {
    bookingDetails,
    handleDetailChange,
    availableRooms,
    error
  };
};