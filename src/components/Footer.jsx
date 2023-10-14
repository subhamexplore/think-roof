import React from "react";
import "../assets/styles/Footer.css";
import Logo from '../assets/images/logo.png';
import {AiOutlineInstagram} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";
import {BiLogoFacebook} from "react-icons/bi"

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="top-footer">
        <h1 className="want-foot">Want to Know about us ?</h1>
      </div>
      <div className="middle-footer">
        <div className="middle-footer-text">
          <p>
            Come and know more about Zairza and join our community to experience
            such more amazing stuffs.
          </p>
        </div>
        <div className="middle-footer-icon">
          <div className="middle-footer-icons"><BiLogoFacebook /></div>
          <div className="middle-footer-icons"><AiOutlineMail /></div>
          <div className="middle-footer-icons"><AiOutlineInstagram /></div>
        </div>
      </div>
      <div className="bottom-footer">
       <div className="bottom-footer-text">
       <p>
          OUTR (CET Campus), Kalinga Nagar, Ghatikia, Bhubaneswar, Odisha. +91
          7205883336
        </p>
       </div>
       <div className="bottom-footer-icon">
       <i className="bottom-footer-icons">Presented by</i>
       <div className="bottom-footer-icons">
          <img 
          height={55}
          src={Logo} 
          alt="" />
       </div>
       </div>
      </div>
    </div>
  );
};

export default Footer;
