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
import ReduxToolKit from "./components/reduxToolKit/ReduxToolKitDocs.jsx"
import ReactRouter from "./components/react-router/ReactRouter.jsx"
import ReactQueryDocs from "./components/react-query/ReactQueryDocs.jsx"
import ValidatorDocs from "./components/validator/ValidatorDocs.jsx";
import LoadLashDocs from "./components/load-lash/LoadLashDocs.jsx"
import ExpressRateLimitDoc from "./components/express-rate-limit/ExpressRateLimitDoc.jsx"
import ExpressDoc from "./components/express-doc/ExpressDoc.jsx";
import HelmetDoc from "./components/helmet/HelmetDoc.jsx";
import BootstrapIconsDoc from "./components/bootstrap-iocns/BootstrapIocnsDoc.jsx"
import BootstrapColorAndFontStyle from "./components/bootstrap-color/BootstrapColorAndFontStyle.jsx"
import MorganDoc from "./components/MorganDoc/MorganDoc.jsx"
import JsonwebtokenDoc from "./components/jsonwebtoken/JsonwebtokenDoc.jsx";
import CorsDoc from "./components/cors/CorsDoc.jsx"
import SwaggerDoc from "./components/swagger/SwaggerDoc.jsx"
import GitHubActionDoc from "./components/github-action/GitHubActionDoc.jsx";
function App() {
  return (
    <>
        <BrowserRouter>
            <NavBars/>
            <Routes>
                <Route path="/" element={<HomeIndex />} />
                <Route path="/axios" element={<AxiosDoc />} />
                <Route path="/framer-motion" element={<FramerMotion />} />
                <Route path="/react-router" element={<ReactRouter />} />
                <Route path="/redux-toolkit" element={<ReduxToolKit />} />
                <Route path="/react-query" element={<ReactQueryDocs />} />
                <Route path="/validator" element={<ValidatorDocs />} />
                <Route path="/loadlash" element={<LoadLashDocs />} />
                <Route path="/express-rate-limit" element={<ExpressRateLimitDoc />} />
                <Route path="/express" element={<ExpressDoc />} />
                <Route path="/helmet" element={<HelmetDoc />} />
                <Route path="/bootstrap-icons" element={<BootstrapIconsDoc />} />
                <Route path="/bootstrapColor-fontStyle" element={<BootstrapColorAndFontStyle />} />
                <Route path="/morgan" element={<MorganDoc />} />
                <Route path="/jwt-token" element={<JsonwebtokenDoc />} />
                <Route path="/cors" element={<CorsDoc />} />
                <Route path="/swagger" element={<SwaggerDoc/>}/>
                <Route path="/github-action" element={<GitHubActionDoc/>}/>
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
