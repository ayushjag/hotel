
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import RoomDetailPage from './pages/RoomDetailPage';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-300 to-gray-400 antialiased">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-lg">
         
          <Routes>
            <Route path="/" element={<BookingPage />} />
            <Route path="/room/:roomId" element={<RoomDetailPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;