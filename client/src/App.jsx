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
import AI_news from "./components/ai-news/AI_news.jsx";
import Events from "./components/events/Events.jsx";
import ProjectIdeas from "./components/projectIdeas/ProjectIdeas.jsx"
import AxiosDoc from "./components/axios/AxiosDoc.jsx";
import FramerMotion from "./components/framer-motion/FramerMotion.jsx";
import Docs from "./components/docs/Docs.jsx"
function App() {
  return (
    <>
        <BrowserRouter>
            <NavBars/>
            <Routes>
                <Route path="/" element={<HomeIndex />} />
                <Route path="/axios" element={<AxiosDoc />} />
                <Route path="/framer-motion" element={<FramerMotion />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/community" element={<Community />} />
                <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
                <Route path="/termsOfUse" element={<TermsOfUse />} />
                <Route path="/ai-news" element={<AI_news />} />
                <Route path="/events" element={<Events />} />
                <Route path="/project-ideas" element={<ProjectIdeas />} />
                <Route path="/docs/*" element={<Docs />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
