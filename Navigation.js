import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Services from '../Components/Services';
import Home from '../Components/Home';
import About from '../Components/About';
import Checklist from '../Components/Checklist';
import Navbar from '../Components/Navbar';
import Calculator from '../Components/Calculator';


function Navigation() {
  return (
  <>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/checklist" element={<Checklist/>} />
      <Route path="/calculator" element={<Calculator/>} />
    </Routes>
  </>
  )
}

export default Navigation