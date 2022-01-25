import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/Landing/LandingPage";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import AboutYou from "./Components/AboutYou/AboutYou";
import Referral from "./Components/Referral/Referral";
import DomainPage from "./Components/Domain/DomainPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/aboutyou" element={<AboutYou />} />
          <Route path="/referral" element={<Referral />} />
          <Route path="/domain" element={<DomainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
