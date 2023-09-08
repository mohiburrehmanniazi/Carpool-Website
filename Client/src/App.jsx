/* eslint-disable no-unused-vars */
import React from "react";
import LandingPage from "./Components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home/Home";
import CarDetailsMain from "./Components/CarDetailsMain";
import About from "./Components/Home/About";
import Profile from "./Components/Home/Profile";
import CarPage from "./Components/Car Cards/CarPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/cardetailsmain" element={<CarDetailsMain />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/carpage" element={<CarPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
