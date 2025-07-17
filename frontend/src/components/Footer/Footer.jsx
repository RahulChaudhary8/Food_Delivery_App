import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { assets } from "../../assets/assets";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInfoCircle,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaWhatsapp,
  FaUserShield,
  FaTruck,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="tomatologofooter" src={assets.logo} alt="" />
          <p>This website is just for my portfolio, it's not a real website.</p>

          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/rahul.mahi.18400"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
            >
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>

            <a
              href="https://www.instagram.com/rahul.chaudhary.18400?igsh=bzl4b2lka2V6MTh3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
            >
              <FaInstagram
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/rahul-chaudhary-b5899a197/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>

            <a
              href="https://github.com/RahulChaudhary8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>

            <a
              href="https://wa.me/918318576674?text=Hello%20Rahul%2C%20I%20visited%20your%20eCommerce Website"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <Link to="/">Home</Link>
            </li>
            <li>
              <FaInfoCircle
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <Link to="/about">About us</Link>
            </li>
            <li>
              <FaTruck
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <Link to="/delivery">Delivery</Link>
            </li>
            <li>
              <FaUserShield
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>
              {" "}
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              Delhi, India
            </li>

            <li>
              {" "}
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              +91 8318576674, +91 8874011876
            </li>
            <li>
              {" "}
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              rahulchaudhary775285@gmail.com
            </li>
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
