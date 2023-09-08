import "./CarForm.css";
import car from "../assets/checklist-img.jpg";
import { useState } from "react";
import axios from "axios"

function CarForm() {
  const [carModel, setCarModel] = useState()
  const [carName, setCarName] = useState()
  const [sittCap, setSittCap] = useState()
  const [trip, setTrip] = useState()
  const [startPoint, setStartPoint] = useState()
  const [destPoint, setDestPoint] = useState() 
  const [goingTime, setGoingTime] = useState() 
  const [returnTime, setReturnTime] = useState() 
  const [days, setDays] = useState()
  const [price, setPrice] = useState()
  const [desc, setDesc] = useState()
  const [img, setImg] = useState()

  const authAxios = axios.create({
    baseURL: "http://localhost:3001/car-details",
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
    }
  })
  const submit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("carModel", carModel)
    formData.append("carName", carName)
    formData.append("sittCap", sittCap)
    formData.append("trip", trip)
    formData.append("startPoint", startPoint)
    formData.append("destPoint", destPoint)
    formData.append("goingTime", goingTime)
    formData.append("returnTime", returnTime)
    formData.append("days", days)
    formData.append("price", price)
    formData.append("desc", desc)
    formData.append("img", img)
    authAxios.post("http://localhost:3001/car-details", formData)
        .then((data) =>{ 
          console.log(data)  
    })
  }
  return (
    <>
      <div className="h-text">
        <h2 className="h-t">Enter Your Car Details</h2>
      </div>
      <div className="m1">
        <div className="main">
          <form action="" method="post">
            <div className="main-details">
              <div className="car-details1">
                <div>
                  <img src={car} alt="" className="img2" />
                </div>
              </div>
              <div className="car-details2">
                <div className="card">
                  <label className="car-model-l"> Car Model:</label>
                  <input
                    type="text"
                    name="car modal"
                    className="cari"
                    placeholder="Enter Your Car Model"
                    required onChange={(e)=> setCarModel(e.target.value)}
                  />
                </div>
                <div className="card">
                  <label className="car-name-l"> Car Name:</label>
                  <input
                    type="text"
                    name="Car Name"
                    id="car-name"
                    placeholder="Enter Your Car's Name"
                    className="cari"
                    required onChange={(e)=> setCarName(e.target.value) }
                  />
                </div>
                <div className="card">
                  <label className="sitting"> Sitting Capacity:</label>
                  <select name="" id="" required className="options2" onChange={(e)=>{setSittCap(e.target.value)}}>
                    <option value="" disabled selected hidden>
                      Choose Sitting capacity
                    </option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div className="card">
                  <label className="trip">Trip:</label>
                  <select name="trip" id="" required className="options" onChange={(e)=> setTrip(e.target.value) }>
                    <option value="" selected disabled hidden>
                      Select Your Trip
                    </option>
                    <option value="OneWay">One-Way</option>
                    <option value="RoundTrip">Round-Trip</option>
                  </select>
                </div>
                <div className="card">
                  <label className="routel"> Route:</label>
                  <input
                    type="text"
                    placeholder="Starting Point"
                    className="inp1"
                    required onChange={(e)=> setStartPoint(e.target.value) }
                  />
                  To
                  <input
                    type="text"
                    placeholder="Destination"
                    className="inp1"
                    required onChange={(e)=> setDestPoint(e.target.value) }
                  />
                </div>
                <div className="card">
                  <label className="timel">Time:</label>
                  <input
                    type="time"
                    placeholder="Going Time"
                    className="inp1"
                    required onChange={(e)=> setGoingTime(e.target.value) }
                  />
                  To
                  <input
                    type="time"
                    placeholder="Return Time"
                    className="inp1"
                    required onChange={(e)=> setReturnTime(e.target.value) }
                  />
                </div>
                <div className="card">
                  <label className="day">Days A Week</label>
                  <input
                    type="text"
                    className="cari"
                    placeholder="Enter How Many Days"
                    required onChange={(e)=> setDays(e.target.value) }
                  />
                </div>
                <div className="card">
                  <label className="price">Price Per Seat</label>
                  <input
                    type="number"
                    className="cari"
                    placeholder="Enter Price"
                    required onChange={(e)=> setPrice(e.target.value) }
                  />
                </div>
                <div className="card">
                  <label className="disc">Discription</label>
                  <input
                    type="textarea"
                    placeholder="Enter Discription"
                    className="cari" onChange={(e)=> setDesc(e.target.value)}
                  />
                </div>
                <div className="card">
                  <label className="file">Upload Car Images:</label>
                  <input type="file" className="file1" required  onChange={(e)=> setImg(e.target.files[0]) }/>
                </div>
                <div className="btnd">
                  {" "}
                  <button className="btn" type="submit" onClick={submit}>Publish</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CarForm;
