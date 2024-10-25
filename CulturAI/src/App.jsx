import { useState } from 'react'
import CampaignDashboard from './pages/CampaignDashboard'
import Dashboardfinal from './pages/Dashboardfinal';
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import ContactUs from './pages/ContactUs'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pricing from './pages/Pricing';
import Features from './pages/Features';

function App() {
  return (
    <>
    <Router>
      <div className="flex">
        <Sidebar /> 
        <div className="flex-grow bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
          <Navbar />
          
            <LandingPage />
            <Features/>
            <Pricing/>
            <ContactUs/>
            
            <Footer />
        </div>
      </div>
    </Router>
    </>
  )
}

export default App
