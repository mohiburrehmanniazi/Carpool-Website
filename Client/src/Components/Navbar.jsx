/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
    const [color, setColor] = useState(false)
    const changeColor = () =>{
        if (window.scrollY >= 100) {
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <div className="nav-container">
            <header className={color ? "header-bg" : ""}>
                <h1><span style={{
                    color:'rgb(255, 208, 0)',
                    fontSize:'50px'
                }}>K</span>arpool'n</h1>
                <nav ref={navRef}>
                    <a className="tag-1" href="#header">Home</a>
                    <a className="tag-2" href="#about-sec">About Us</a>
                    <a className="tag-3" href="#cities">Cities</a>
                    <a className="tag-4" href="#cause">Our Cause</a>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button
                    className="nav-btn"
                    onClick={showNavbar}>
                    <FaBars />
                </button>
            </header>
        </div>
    );
}

export default Navbar;