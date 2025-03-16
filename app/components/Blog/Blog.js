import React from 'react'
import Styles from '@/app/components/Blog/blog.module.css'
import Image from 'next/image'
import opera from '@/public/opera.jpg'
import docs from '@/public/docs.jpg'
import doc3 from '@/public/doc3.jpg'
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
  return (
    <div style={{padding:'2rem'}}>
        <p style={{color:'goldenrod', fontWeight:'bold'}}>Our BLOG</p>
        <h1 style={{margin:"1rem 0",color:"#7e0404",fontSize:'2.5rem'}}>Latest News & Articles</h1>
        <div className={Styles.blog}>
          <div className={Styles.blogItem}>
            <Image src={docs} width={300} height={300} alt="opera" />
            <h3>Best Medical Network Directory For Physicians & Clients</h3>
            <p>Hypertension, commonly known as high blood pressure, is a prevalent</p>
            <button>Read More <FaArrowRightLong style={{marginLeft:'1rem'}}/></button>
            </div>
          <div className={Styles.blogItem}>
            <Image src={opera} width={300} height={300} alt="opera" />
            <h3>Best Medical Network Directory For Physicians & Clients</h3>
            <p>Hypertension, commonly known as high blood pressure, is a prevalent</p>
            <button>Read More <FaArrowRightLong style={{marginLeft:'1rem'}}/></button>
            </div>
          <div className={Styles.blogItem}>
            <Image src={doc3} width={300} height={300} alt="opera" />
            <h3>Best Medical Network Directory For Physicians & Clients</h3>
            <p>Hypertension, commonly known as high blood pressure, is a prevalent</p>
            <button>Read More <FaArrowRightLong style={{marginLeft:'1rem'}}/></button>
            </div>
            </div>
    </div>
  )
}

export default Blog