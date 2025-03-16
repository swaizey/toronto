'use client'
import React, { useState, useRef } from 'react'
import Styles from '@/app/components/Contact/contact.module.css'
import apointt from '@/public/apointt.png'
import Image from 'next/image'
import DatePicker from "react-datepicker";
import { PiCalendarDotsDuotone } from "react-icons/pi";
import "react-datepicker/dist/react-datepicker.css";
import { RiMailSendFill } from "react-icons/ri";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    date: new Date()
  });

  const datePickerRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date: date
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div>
      <div className={Styles.contact}>
        <div className={Styles.first}>
          <Image src={apointt} alt="rmv" width={300} height={300}/>
          <h1 >Make <span>Appointment</span> & Take Care Of Your Healthy Life</h1>
        </div>
        <div className={Styles.second}>
          <form onSubmit={handleSubmit}>
             <div className={Styles.flexIt}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder='Phone'
                value={formData.phone}
                onChange={handleChange}
                required
              />
             </div>
          
    
            <div className={Styles.flexIt}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className={Styles.datePicker}>
                <input
                  type="text"
                  placeholder="Select Date"
                  value={formData.date.toLocaleDateString()}
                  onClick={() => datePickerRef.current.setOpen(true)}
                  readOnly
                />
                <DatePicker
                  selected={formData.date}
                  onChange={handleDateChange}
                  dateFormat="MMMM d, yyyy"
                  ref={datePickerRef}
                  className={Styles.datePickerInput}
                  required
                  
                />
                <PiCalendarDotsDuotone onClick={() => datePickerRef.current.setOpen(true)} />
              </div>
            </div>
           
              <textarea
                id="message"
                name="message"
                placeholder='Message'
                value={formData.message}
                onChange={handleChange}
                required
                className={Styles.textarea}
              />
      
              <button type="submit" className={Styles.submitButton}><span>Submit</span><RiMailSendFill /></button>
           
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact