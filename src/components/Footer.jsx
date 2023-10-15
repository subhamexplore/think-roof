import React from "react";
import "../assets/styles/Footer.css";
import Logo from "../assets/images/logo.webp";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import EmailLink from "./EmailLink";
import PhoneLink from "./PhoneLink";

const Footer = () => {
  const mailtoLink = `mailto:${'thinkroofinfra@gmail.com'}`;
  return (
    <>
      <div className="footer-last card text-center" id="footer">
        <div className="card-body">
          <h1 className="card-title">Contact Us</h1><br />
          <p>
            <BsFillTelephoneFill /> {" "}
            <PhoneLink phoneNumber="9437107338"/>, {" "}
            <PhoneLink phoneNumber="8338096767"/>, {" "}
            <PhoneLink phoneNumber="9437028567"/>,  {" "}
            <PhoneLink phoneNumber="8249624550"/>
          </p>
          <p>
            <AiOutlineMail className="mx-1" />
              <EmailLink email=" thinkroofinfra@gmail.com"/>
          </p>
          <div className="middle-footer">
            <div className="middle-footer-text"></div>
            <div className="middle-footer-icon">
              <div className="middle-footer-icons">
                <a
                  className="foot-logo"
                  href="https://www.facebook.com/profile.php?id=61552396980721"
                  target="__blank"
                >
                  <BiLogoFacebook className="react-icon"/>
                </a>
              </div>
              <div className="middle-footer-icons">
                <a
                  className="foot-logo"
                  href={mailtoLink}
                  target="__blank"
                >
                  <AiOutlineMail className="react-icon"/>
                </a>
              </div>
              <div className="middle-footer-icons">
                <a
                  className="foot-logo"
                  href="https://www.facebook.com/profile.php?id=61552396980721"
                  target="__blank"
                >
                  <AiOutlineInstagram className="react-icon"/>
                </a>
              </div>
            </div>
          </div>
          <div className="bottom-footer-icon">
            <i className="bottom-footer-icons">Presented by</i>
            <div className="bottom-footer-icons">
              <img height={55} className="logo-footerr" src={Logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
