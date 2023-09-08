import { useState, useEffect } from "react";
import "./CarDetailsMain.css";
import { Navigate, useNavigate } from "react-router";
import car from "../assets/car-carform.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import CarForm from "./CarForm";

function CarDetailsMain() {
  const navigate = useNavigate()
  const [click, setClick] = useState("ex");

  useEffect(()=>{
    if (!click) {
      navigate('/home')
    }
  }, [click])

  if (!click) {
    navigate('/home')
  }
 
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("token"))) {
      navigate("/login")
    }
  }, [])
  
  return (
    <>
      <div className="btn-c">
        <button className="btn" onClick={() => setClick(null)}>
          Back To Home
        </button>
      </div>
      <div className="Mtext-con">
        <h1 className="Text-1">Enter Your Car Details And</h1>
        <h1 className="Text-2">
          And Enjoy with Your New <span className="sp">K</span>arpool Partner
        </h1>
      </div>
      <div className="car-d">
        <img src={car} alt="" className="car" />
      </div>
      
      <div className="car-form">
        <CarForm />
      </div>
    </>
  );
}
export default CarDetailsMain;
