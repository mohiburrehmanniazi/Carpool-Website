import React from 'react';
import './DetailsModal.css';
import closeBtn from './icons8-cross-60.png';
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const DetailsModal = ({car, setModal }) => {
    
    return (
        <>
            <div className="modal-container">
                <div className="modal">
                    <div className="close-btn">
                        <img src={closeBtn} alt="" onClick={() => setModal(false)} />
                    </div>
                    <div className="details-container">
                        <div className="modal-details">
                            <h2>Name: </h2>
                            <h2 className='modal-data'>{user && `${user.f_name} ${user.l_name}`}</h2>
                        </div>
                        <div className='modal-details'>
                            <h2>Car Name:</h2>
                            <h2 className="data">{car.carName}</h2>
                            <h2 style={{paddingLeft:'91px'}}>Car Model:</h2>
                            <h2 className="data">{car.carModel}</h2>
                        </div>
                        <div className="modal-details">
                            <h2>Description: </h2>
                            <h2 className='modal-data'>{car.desc}</h2>
                        </div>
                        <div className="contact">
                            <h2>Contact: </h2>
                            <div className="contact-details">
                                <button className="email-btn"><FaEnvelope/> {user && `${user.email}`}</button>
                                <button className="phone-btn"><FaPhoneAlt/> {user && `${user.phone}`}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DetailsModal