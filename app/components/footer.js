import React from 'react'
import style from '@/app/components/component.module.css'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { RiMailSendFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className={style.footer}>
        <div className={style.footerContainer}>
        <div className={style.first}>
            <h1>Toront<span style={{color:'gold'}}>o</span></h1>
            <p>Our family-centered approach to healthcare ensures that each member of your family receives personalized attention.</p>
            <div className={style.socials}>
            <TiSocialLinkedin />
            <TiSocialYoutube />
            <TiSocialInstagram />
            <TiSocialFacebook />
            </div>
        </div>
        <div className={style.second}>
            <h1>Quick Links</h1>
            <>
           
            <a href='#'>Home</a>
            <a href='#'>About Us</a>
            <a href='#'>Doctors</a>
            <a href='#'>Services</a>
            <a href='#'>Contact Us</a>
            </>
        </div>
  
        <div className={style.third}>
            <h1>Contact Details</h1>
            <>
            <p><FaLocationDot />35, Upper-Iweka Onitsha</p>
            <p><FaEnvelopeOpenText />Toronto@gmail.com</p>
            <p><FaPhone />+124 70187653</p>
            <p><FaClock />8AM - 8PM, Mon - Mon</p>
            </>
        </div>
        <div className={style.fourth}>
            <h1>Newsletter</h1>
            <>
            <p style={{fontWeight:'bold',fontSize:'2rem'}}>subscribe to our newsletter</p>
            <p>Stay informed and never miss out on the latest news, health tips.</p>
            <div className={style.input}>
                <input 
                    placeholder='Enter Your Email'
                />
                
                <button>Send <RiMailSendFill /></button>
            </div>
            </>
        </div>
    </div>
    <p>copyright 2025 © Toronto all right reserved</p>
    </div>
  )
}

export default Footer