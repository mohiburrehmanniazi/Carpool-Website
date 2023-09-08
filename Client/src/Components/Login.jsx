import React, { useState, useEffect } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from "react-icons/fa";
import loginImg from '../assets/signup-img.png'
import axios from 'axios'
import Modal from './Modal'

function Login() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [openModal, setOpenModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('')

  const navigate = useNavigate()

  useEffect(()=>{
    if(JSON.parse(localStorage.getItem("token"))){
        navigate("/home")
    }
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setOpenModal(true)
      setModalMessage("Please fill out all fields")
      return;
    }
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result)
        if (result.data.message === "Success") {
          localStorage.setItem('token', JSON.stringify(result.data.token))
          navigate('/home')
        } else if (result.data === "Incorrect Password") {
          setOpenModal(true)
          setModalMessage("Incorrect Password")
        }
        else if (result.data === "No Record Exists") {
          setOpenModal(true)
          setModalMessage("We cannot find an account with this E-mail")
        }
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <section className="login">
        <div className="Form">
          <div className="login-img">
            <img src={loginImg} alt="" />
          </div>
          <div className="login-form">
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
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
                <label htmlFor="password">
                  <FaLock />
                </label>
                <input type="password" name="password" id="password" autoComplete='off' placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <hr />
              <div className="btn-div">

              <button className='log-in-btn'>Log In</button>
              </div>
            </form>
          </div>
        </div>
        {openModal && (
          <Modal
            closeModal={setOpenModal}
            message={modalMessage}
          />
        )}
      </section>
    </>
  )
}

export default Login