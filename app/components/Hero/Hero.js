'use client'
import React from 'react'
import Styles from '@/app/components/Hero/hero.module.css'
import Image from 'next/image'
import doc1 from '@/public/doc1.jpg'
import doc2 from '@/public/doc2.jpg'
import { motion } from "motion/react"
const Hero = () => {
  return (
    <div className={Styles.hero} >
    <motion.div className={Styles.article}
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    >
   <h2>we take care of your health</h2>
<h3>We Are Providing Best & Affordable
Health Care.</h3>

<h4>our is to deliver the highest quality healthcare services. We believe that everyone deserves access to excellent medical care without compromising on quality.</h4>
<button className={Styles.ctaButton}>Read More</button>
</motion.div>
<motion.div className={Styles.image}
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3, ease: "easeOut" }}
>
<Image src={doc1} width={300} height={300} alt="doctor" />
<Image src={doc2} width={300} height={300} alt="doctor" />
</motion.div>
</div>

  )
}

export default Hero