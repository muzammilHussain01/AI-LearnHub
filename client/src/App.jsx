import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import NavBars from "./components/navbar/NavBars.jsx";
import HomeIndex from "./components/home/HomeIndex.jsx";
import Footer from "./components/footer/Footer.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import ContactUs from "./components/contactUs/ContactUs.jsx";
import PrivacyPolicy from "./components/legal/PrivacyPolicy.jsx"

import 'animate.css';
import Community from "./components/community/Community.jsx";
import TermsOfUse from "./components/legal/TermsOfUse.jsx";
function App() {
  return (
    <>
        <BrowserRouter>
            <NavBars/>
            <Routes>
                <Route path="/" element={<HomeIndex />} />
            </Routes>
            <Routes>
                <Route path="/aboutUs" element={<AboutUs />} />
            </Routes>
            <Routes>
                <Route path="/contactUs" element={<ContactUs />} />
            </Routes>
            <Routes>
                <Route path="/community" element={<Community />} />
            </Routes>
            <Routes>
                <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            </Routes>
            <Routes>
                <Route path="/termsOfUse" element={<TermsOfUse />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
