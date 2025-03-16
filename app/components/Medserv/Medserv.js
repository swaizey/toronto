import React from 'react'
import Styles from '@/app/components/Medserv/medserve.module.css'
import { CiStethoscope } from "react-icons/ci";
import { PiMicroscopeFill } from "react-icons/pi";
import { FaTooth } from "react-icons/fa";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { ImEyePlus } from "react-icons/im";
const Medserv = () => {
  return (
    <div className={Styles.medserv}>
        <div className={Styles.med1}>
            <p>medical services</p>
            <h1>We Provide The
            Best Services.</h1>
        </div>
        <div className={Styles.med2}>
            <ImEyePlus className={Styles.svg}/>
            <h3>Eye Care</h3>
            <p>we understand the importance of clear vision and its impact on your daily activities</p>
            <button>Read More 

<IoArrowForwardCircleOutline />
</button>
            </div>
        <div className={Styles.med2}>
            <PiMicroscopeFill className={Styles.svg}/>
           
            <h3>Medical Checkup</h3>
            <p>During your medical checkup, our skilled healthcare professionals.</p>
            <button>Read More 

<IoArrowForwardCircleOutline />
</button>
            </div>
        <div className={Styles.med2}>
            <FaTooth  className={Styles.svg}/>
            <h3>Dental Care</h3>
            <p>we are passionate about providing top-notch dental care to help you.</p>
            <button>Read More 

<IoArrowForwardCircleOutline />
</button>
            </div>
        <div className={Styles.med2}>
            <BsFillHeartPulseFill className={Styles.svg}/>
            <h3>Laboratory Service</h3>
            <p>we understand the critical role that accurate diagnostics play in guiding.</p>
            <button>Read More 

<IoArrowForwardCircleOutline />
</button>
            </div>
        <div className={Styles.med2}>
            <CiStethoscope className={Styles.svg}/>
            <h3>Patient Centered</h3>
            <p>hospitals, or clinics with positive reviews and ratings from patients.hospitals, or clinics with positive reviews and ratings from patients.</p>
<button>Read More 

<IoArrowForwardCircleOutline />
</button>
            </div>
    </div>
  )
}

export default Medserv