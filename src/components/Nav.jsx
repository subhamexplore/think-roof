import React from "react";
import '../assets/styles/Navbar.css'
import brochure from './brochure.pdf'

const Nav = () => {
    const handleClick = () => {
        const link = document.createElement('a');
        link.download = 'Brochure';
    
        link.href = brochure;
    
        link.click();
      }; 
  return (
    <div className="navbar-full">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="/">
            <img
              src={require("../assets/images/logo.webp")}
              className="logo-img"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-3 my-auto">
                <a className="nav-link" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item mx-3 my-auto">
                <a className="nav-link" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item mx-3 my-auto">
                <a className="nav-link" href="#footer">
                  Enquire Now
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="/">
                  <button className="nav-button" onClick={handleClick}>Download Brochure</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
