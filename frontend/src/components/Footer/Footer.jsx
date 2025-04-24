import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";


const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="tomatologofooter" src={assets.logo} alt="" />
          <p>This website is just for my portfolio, it's not a real website.</p>
          <div className="footer-social-icons">
            
            <a href="https://www.linkedin.com/in/rahul-chaudhary-b5899a197/"
              target="_blank"
              rel="noopener noreferrer">
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>

            <a href="https://github.com/RahulChaudhary8"
              target="_blank"
              rel="noopener noreferrer">
              <img src={assets.github_icon} alt="GitHub" />
            </a>

            <a href="https://650ac10f18794a302356ccc6--loquacious-travesseiro-2cd842.netlify.app/"
              target="_blank"
              rel="noopener noreferrer">
              <img src={assets.port} alt="Portfolio" />
            </a>

          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 8874011874</li>
            <li>rahulchaudhary775285@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 © Rahul Chaudhary - All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
