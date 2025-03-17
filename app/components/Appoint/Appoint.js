'use client'
import React, { useState } from 'react'
import { MdEditCalendar } from "react-icons/md";
import { BsCalendarHeartFill } from "react-icons/bs";
import Styles from '@/app/components/Appoint/appoint.module.css'
import check from '@/public/8242622.png'
import apoint from '@/public/apoint.png'
import treat from '@/public/treat.png'
import presc from '@/public/presc.webp'
import docs from '@/public/docs.jpg'
import Image from 'next/image';
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "motion/react"

const Appoint = () => {
    const [show, setShow] = useState([false, false, false]);

    const toggleShow = (index) => {
        setShow(show.map((item, i) => (i === index ? !item : item)));
    };

    return (
        <>
            <div  className={Styles.appoint}>
                <BsCalendarHeartFill className={Styles.svg} />
                <div className={Styles.first}>
                    <h1>Open For Appointments</h1>
                    <p>we are delighted to announce that our doors are open, and we are now accepting appointments to serve you better.</p>
                </div>
                <button>Make Appointment
                    <MdEditCalendar />
                </button>
            </div>

            <div className={Styles.work}>
                <div className={Styles.text}>
                    <div>
                        <p>HOW WE WORK</p>
                        <h1>A Comprehensive
                            Directory For Your
                            Health Care.</h1>
                    </div>
                    <>
                        <p className={Styles.p}>we are your trusted one-stop destination for all your healthcare needs. Our comprehensive directory is designed to provide you with easy access to a wide range of healthcare services and providers, ensuring that you and your family</p>
                    </>
                </div>
                <motion.div className={Styles.icons}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <div>
                        <Image src={apoint} alt="check" width={300} height={300} />
                        <p>Book An Appointment</p>
                    </div>
                    <div>
                        <Image src={check} alt="check" width={300} height={300} />
                        <p>Conduct Check</p>
                    </div>
                    <div>
                        <Image src={treat} alt="check" width={300} height={300} />
                        <p>Perorm Treatment</p>
                    </div>
                    <div>
                        <Image src={presc} alt="check" width={300} height={300} />
                        <p>Prescribe & Payment</p>
                    </div>
                </motion.div>
            </div>

            <div className={Styles.faq}>
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <Image src={docs} alt="check" width={500} height={500} />
                </motion.div>
                <motion.div className={Styles.faqs}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <p style={{ color: '#ffbb00', fontSize: "1.3rem" }}>FAQs</p>
                    <h1>Consultations with Qualified Doctors</h1>

                    <div>
                        <div className={Styles.que} onClick={() => toggleShow(0)}>
                            {show[0] ? <FaMinus /> : <FaPlus />}
                            <h4>Are telemedicine consultations available?</h4>
                        </div>
                        <p className={`${Styles.answer} ${show[0] ? Styles.show : ''}`}>Yes, we offer telemedicine consultations with qualified doctors. You can schedule an appointment online and consult with a doctor from the comfort of your home.</p>
                    </div>

                    <div>
                        <div className={Styles.que} onClick={() => toggleShow(1)}>
                            {show[1] ? <FaMinus /> : <FaPlus />}
                            <h4>Do You accept health insurance</h4>
                        </div>
                        <p className={`${Styles.answer} ${show[1] ? Styles.show : ''}`}>Yes, we accept most major health insurance plans.</p>
                    </div>

                    <div>
                        <div className={Styles.que} onClick={() => toggleShow(2)}>
                            {show[2] ? <FaMinus /> : <FaPlus />}
                            <h4>How much does consultation cost</h4>
                        </div>
                        <p className={`${Styles.answer} ${show[2] ? Styles.show : ''}`}>Consultation fees vary depending on the doctor and the type of consultation.</p>
                    </div>

                </motion.div>
            </div>
        </>
    )
}

export default Appoint
