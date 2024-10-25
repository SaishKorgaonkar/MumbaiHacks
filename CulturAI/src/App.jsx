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

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSqMOYZzRimSPc2ygGqX_QtIuHCY_ecmo",
  authDomain: "culturai-9fcdc.firebaseapp.com",
  projectId: "culturai-9fcdc",
  storageBucket: "culturai-9fcdc.appspot.com",
  messagingSenderId: "531151773387",
  appId: "1:531151773387:web:9b1e9a0f83932c43f9454e",
  measurementId: "G-H456CS3063"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

function App() {
  return (
    <>
    <Router>
      <div className="flex">
        <Sidebar /> 
        <div className="flex-grow bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} /> {/* Main Landing Page */}
              <Route path="/contact-us" element={<ContactUs />} /> Contact Us Page
              <Route path="/dashboard" element={<Dashboardfinal />} /> {/* Dashboard Page */}
            </Routes>
            <Footer />
        </div>
      </div>
    </Router>
    </>
  )
}

export default App
