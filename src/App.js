import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Aboutyourself from "./Components/Aboutyourself";
import Referral from "./Components/Referral/Referral";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/aboutyou" element={<Aboutyourself />} />
          <Route path="/dev" element={<Referral />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
