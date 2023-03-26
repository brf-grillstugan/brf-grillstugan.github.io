import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import MainLayout from './components/layouts/MainLayout';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Laundry from './pages/booking/Laundry';
import Grill from './pages/booking/Grill';
import { BookingEvent } from './components/layouts/types';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const username = "Viktor";
  const eventColor = "orange";
  const eventTitle = "(new) " + username;
  const page_style = { maxWidth: 900, margin: '0 auto' }
  const [booking, setBooking] = useState<BookingEvent | undefined>(undefined);

  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <CssBaseline />
        <MainLayout loggedIn={loggedIn}>
          <Routes>
            <Route path="/" element={<Home pageCardStyle={page_style} />} />
            <Route path="/about" element={<About pageCardStyle={page_style} />} />
            <Route path='/booking/laundry' element={<Laundry
              pageCardStyle={page_style}
              defaultBookingColor={eventColor}
              defaultBookingTitle={eventTitle}
              booking={booking}
              setBooking={setBooking}
            />} />
            <Route path='/booking/grill' element={<Grill
              pageCardStyle={page_style}
              defaultBookingColor={eventColor}
              defaultBookingTitle={eventTitle}
              booking={booking}
              setBooking={setBooking}
            />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
      </LocalizationProvider>
    </React.Fragment>
  );
}

export default App;
