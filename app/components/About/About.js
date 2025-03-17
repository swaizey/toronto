'use client'
import React from 'react'
import Styles from "@/app/components/About/about.module.css"
import doc4 from '@/public/doc4.jpg'
import doc5 from '@/public/doc5.jpg'
import opera from '@/public/opera.jpg'
import Image from 'next/image'
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "motion/react"
const About = () => {
  return (
    <div className={Styles.about}>
      <motion.div style={{backgroundColor:'red'}} className={Styles.img}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div  className={Styles.imgs}>
      <Image src={doc4} width={300} height={300} alt='doc'/>
      <Image src={doc5} width={300} height={300} alt='doc'/>
        </div>
      <Image  className={Styles.w}  src={opera} width={300} height={300} alt='doc'/>

      </motion.div>
      <motion.div className={Styles.text}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h4>
        about Toronto
        </h4>
        <h1>
        Our Best Services &
          Poplular Treatment
          Here.
        </h1>
        <p>we take pride in offering a wide range of best-in-class medical services and popular treatments to cater to your diverse healthcare needs .</p>
        <p>Our team of expert doctors and medical professionals are here to ensure that you receive the best possible care in a safe and comfortable environment.</p>
        <ul>
          <li><FaCheckCircle />Mental health Solutions</li>
          <li><FaCheckCircle />Rapid Patient Improvement</li>
          <li><FaCheckCircle />World Class Treatment</li>
        </ul>
        <button>Read More</button>
      </motion.div>

      </div>

  )
}

export default About