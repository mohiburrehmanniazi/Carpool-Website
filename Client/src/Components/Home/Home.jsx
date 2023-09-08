import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar2 from "./Navbar2";
import "./Home.css"
import plus from "./Images/Plus.png"
import axios from "axios"
import Cards from "../Car Cards/Cards";
import car from "./Images/carposter.webp"
// import Modal from "../Modal";



function Home() {
  const [click, setClick] = useState("ex");
  const [cars, setCars] = useState([])
  const navigate = useNavigate()

  const authAxios = axios.create({
    baseURL: "http://localhost:3001/car-details",
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
    }
  })

  useEffect(() => {
    if (!click) {
      navigate("/cardetailsmain")
    }
  }, [click])


  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("token"))) {
      navigate("/login")
    }
    authAxios.get('http://localhost:3001/car-details')
      .then(users => {
        setCars(users.data)
      })
      .catch(err => console.log(err))
  }, [])
  
  return (
    <>
      <div className="Navbar">
        <Navbar2 />
      </div>
      
      <div>
        <img src={plus} alt="" className="plus" onClick={() => setClick(null)} />
        <div className="poster1">
        <h1 className="hh1">All Set And All <span className="sp1">Ready</span> Now</h1>
        <h1 className="hh2">Just <span className="sp2">Scroll</span> Down And Get Partner </h1>
        </div>
      </div>
      {/* <Modal/> */}
      {cars.map(car => <Cards key={car._id} car={car} />)}
    </>
  );
}

export default Home;