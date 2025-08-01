import React from "react";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";
import LoginPage from "./routes/LoginPage";
import OrderOnline from "./routes/OrderOnline";
import {Route, Routes} from "react-router-dom";
import AboutPage from "./routes/AboutPage";


function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/reservations" element = {<Reservations />}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/OrderOnline" element={< OrderOnline/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </>
  );
}

export default App;
