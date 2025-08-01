import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Component/HomePage'; 
import BookingPage from "./Component/BookingPage";
import NotReal from "./Component/NotReal";
import NotReal2 from './Component/NotReal2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/BookingPage" element={<BookingPage />} />
      <Route  path='/Notreal' element={<NotReal/>} />
      <Route path='/NotReal2'  element={<NotReal2/>}/>
    </Routes>
  );
}

export default App;

