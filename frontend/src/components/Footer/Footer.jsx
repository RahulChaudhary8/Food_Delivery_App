import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'


const Footer = () => {
  return (

<div className='footer' id='footer'>
<div className="footer-content">
<div className="footer-content-left">
<img src={assets.logo} alt="" />
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, esse labore! Voluptas eveniet sapiente quis magnam assumenda nisi, libero aut. Laudantium animi neque dicta similique odio delectus sint modi magni?</p>

<div className="footer-social-icons">
    <img src={assets.facebook_icon} alt="" />
    <img src={assets.twitter_icon} alt="" />
    <img src={assets.linkedin_icon} alt="" />

</div>
</div>
<div className="footer-content-center">
<h2>Company</h2>
<ul>
    <li>Home</li>
    <li>About us</li>
    <li>Delivery</li>
    <li>Privacy policy</li>
</ul>
</div>
<div className="footer-content-right">
    <h2>GET IN TOUCH</h2>
    <ul>
        <li>+91 8874011876</li>
        <li>only1734@gmail.com</li>
    </ul>
</div>
</div>
<hr />
<p className="footer-copyright">Copyright 2024 &copy; Delivery.com - All Right Reserved.</p>
</div>
)
}

export default Footer