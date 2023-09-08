import React, { useState } from 'react'
import './Signup.css'
import { FaUser, FaEnvelope, FaPhoneAlt, FaLock } from "react-icons/fa";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Modal from './Modal';

const Signup = () => {

  const [f_name, setF_name] = useState('')
  const [l_name, setL_name] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [openModal, setOpenModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!f_name || !l_name || !email || !phone || !password) {
      setOpenModal(true)
      setModalMessage("Please fill out all fields")
      return;
    }
    const userData = {
      f_name: f_name,
      l_name: l_name,
      email: email,
      phone: phone,
      password: password
    };
    axios.post('http://localhost:3001/signup', userData)
    .then(result => {
      console.log(result);
      if(result.data == "user already exists"){
        setOpenModal(true)
        setModalMessage("user already exists")
        return;
      }
        navigate('/login');
    })
      .catch(err => console.log(err))
  }
  

  return (
    <>
      <div className="signup-form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstname">
              <FaUser />
            </label>
            <input type="text" name="f_name" id="firstName" autoComplete='off' placeholder='First Name'
              onChange={(e) => setF_name(e.target.value)}
            />
          </div>
          <hr />
          <div className="form-group">
            <label htmlFor="lastname">
              <FaUser />
            </label>
            <input type="text" name="l_name" id="lastName" autoComplete='off' placeholder='Last Name'
              onChange={(e) => setL_name(e.target.value)}
            />
          </div>
          <hr />
          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope />
            </label>
            <input type="email" name="email" id="email" autoComplete='off' placeholder='E-mail'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <hr />
          <div className="form-group">
            <label htmlFor="phone">
              <FaPhoneAlt />
            </label>
            <input type="number" name="phone" id="phone" autoComplete='off' placeholder='Phone No.'
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <hr />
          <div className="form-group">
            <label htmlFor="password">
              <FaLock />
            </label>
            <input type="password" name="password" id="password" autoComplete='off' placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <hr />
          <button className='sign-in-btn'>Sign In</button>
        </form>
        </div>
        {openModal && (
          <Modal 
            closeModal={setOpenModal}
            message={modalMessage}
          />
        )}
    </>
  )
}

export default Signup