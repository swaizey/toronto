'use client'
import React from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import Styles from '@/app/components/Subhero/subhero.module.css'
import { motion } from "motion/react"
const Subhero = () => {
  return (
    <motion.div className={Styles.subhero}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}>
      <div className={Styles.art}>
        <h1>Dont Hesitate To Contact us</h1>
        <p>Make an Appointment</p>
      </div>

      <div style={{marginRight:'1px solid gold'}} className={Styles.art2}>
      <FaUserDoctor />
      <h3>need family health</h3>
      <p>we understand the importance of family health overall well-being.</p>
      </div>
      <div className={Styles.divider}></div>
      <div className={Styles.art2}>
      <RiCustomerService2Fill />

      <h3>24 hours service</h3>
      <p>we take pride in offering 24-hour medical services to ensure that you.</p>
      </div>
    </motion.div>
  )
}

export default Subhero