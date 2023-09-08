import DetailsModal from './DetailsModal'
import "./Cards.css"
import carImg from "./car-1.png"
import { useState } from "react"
import { useNavigate } from 'react-router'

function Cards({ car }) {

    const [click, setClick] = useState("ko")
    const navigate = useNavigate()
    if (!click) {
        navigate('/carpage', { state: car })
    }

    return (
        <>
            <div className="parent">
                <div className="main-card">
                    <div className="imgd">
                        <img src={`http://localhost:3001/${car.img}`} alt="" />
                    </div>
                    {/* <div className="card-detail-section">
                        <div className='card-details'>
                        <h3 style={{paddingRight:'10px',color:'rgb(255,208,0)'}}>Route:</h3>
                            <h3>From:</h3>
                            <h3 className="data">{car.startPoint}</h3>
                            <h3 style={{paddingLeft:'91px'}}>To:</h3>
                            <h3 className="data">{car.destPoint}</h3>
                        </div>
                        <div className='card-details'>
                            <h3>Starting Time:</h3>
                            <h3 className="data">{car.goingTime}</h3>
                            <h3 style={{paddingLeft:'100px'}}>Approx. Time For Arrival:</h3>
                            <h3 className="data">{car.returnTime}</h3>
                        </div>
                        <div className='card-details'>
                            <h3>Seats Available:</h3>
                            <h3 className="data">{car.sittCap}</h3>
                        </div>
                        <div className='card-details'>
                            <h3>Trip: </h3>
                            <h3 className="data">{car.trip}</h3>
                        </div>
                        <div className='card-details'>
                            <h3>Price Per Seat: </h3>
                            <h3 className="data" style={{color:'#118c4f'}}>Rs.{car.price}</h3>
                        </div>
                        <div className="more-details-btn">
                        <button onClick={() => { setModal(true) }}>View More Details</button>
                        <button>Book Your Ride</button> */}
                    <div className="text-1">
                        <div style={{ display: "flex" }}>
                            <p>Starting Point:</p>
                            <p className="ot">{car.startPoint}</p>
                            <p>To:</p>
                            <p className="ot">{car.destPoint}</p>
                        </div>
                        <div className="text-2">
                            <p>Going Time:</p>
                            <p className="ot2">{car.goingTime}</p>
                            <p>Return Time:</p>
                            <p className="ot2">{car.returnTime}</p>
                        </div>
                        <div className="text-2">
                            <p>Car Name:</p>
                            <p className="ot2">{car.carName}</p>
                        </div>
                        <div className="text-2">
                            <p>Seats Available: </p>
                            <p className="ot2">{car.sittCap}</p>
                        </div>
                        <div className="text-2">
                            <p>Days A Week: </p>
                            <p className="ot2">{car.days}</p>
                        </div>
                        <div className="text-2">
                            <p className='b'>Price Per Seat:</p>
                            <p className="ot3">{car.price}</p>
                            <button className="btn" onClick={() => setClick(null)}>Book A Ride</button>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

{/* {modal && (<DetailsModal
                    setModal = {setModal}
                    key={car._id} car={car}
                />)}
            </div>

</div>
</div> */}

{/* )
} */}

export default Cards; 