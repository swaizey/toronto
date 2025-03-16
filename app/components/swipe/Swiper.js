'use client'
import {useState,useEffect} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { IoMdStar } from "react-icons/io";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import Image from 'next/image';
import boy from '@/public/boy.jpg';
import girl from '@/public/girl.jpg';
import girl2 from '@/public/girl2.jpg';
import guy from '@/public/guy.jpg';
import guy1 from '@/public/guy1.jpg';
import mama from '@/public/mama.jpg';

export default function App() {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0, // Check if window is defined
    height: typeof window !== 'undefined' ? window.innerHeight : 0, // Check if window is defined
  });

  useEffect(() => {
    // Ensure window is defined before adding event listener
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Cleanup function to remove the event listener
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {Array.from({ length: fullStars }, (_, index) => (
          <IoMdStar style={{color:'gold'}} key={`full-${index}`} />
        ))}
        {halfStars === 1 && <FaRegStarHalfStroke style={{color:'gold'}} key="half" />}
        {Array.from({ length: emptyStars }, (_, index) => (
          <IoMdStar key={`empty-${index}`} style={{ opacity: 0.3 }} />
        ))}
      </>
    );
  };
  let perView
  if(screenSize.width <=900){
    perView = 2
  }else{
    perView = 3
  }

  return (
    <div className='swiper-container'>
      <p style={{fontSize:'1.5rem', marginBottom:'1rem', color:'grey'}}>TESTIMONIAL</p>
      <h1 style={{fontSize:'2.5rem', marginBottom:'1rem',color: '#7e0404'}}>What Patients Say About Us.</h1>
      <Swiper
         slidesPerView={perView}
         spaceBetween={30}
         pagination={{
           clickable: true,
         }}
         autoplay={{
           delay: 3000,
           disableOnInteraction: false,
         }}
         modules={[Pagination, Autoplay]}
         className="mySwiper"
      >
        <SwiperSlide>
          <div className='user' >
            <Image src={boy} width={100} height={100} alt='boy'/>
            <div className='user-info'>
              <h3>Ben Okonkwo <p>{screenSize.width}</p></h3>
              <p>CEO at Okonkwo Int</p>
              <div className='stars'>
                {renderStars(4.5)}
              </div>
            </div>
          </div>
          <p className='p'> Johns testimonial goes here. He had a great experience with our services.</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className='user'>
            <Image src={girl} width={100} height={100} alt='boy'/>
            <div className='user-info'>
              <h3>Jane Igwe</h3>
              <p>CTO at Microsoft</p>
              <div className='stars'>
                {renderStars(5)}
              </div>
            </div>
          </div>
          <p className='p'>Janes testimonial goes here. She had an excellent experience with our services.</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className='user'>
            <Image src={mama} width={100} height={100} alt='boy'/>
            <div className='user-info'>
              <h3>Kathrine Ezichi</h3>
              <p></p>
              <div className='stars'>
                {renderStars(4.5)}
              </div>
            </div>
          </div>
          <p className='p'> Kathrines testimonial goes here. He had a great experience with our services.</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className='user'>
            <Image src={girl2} width={100} height={100} alt='boy'/>
            <div className='user-info'>
              <h3>Jane Smith</h3>
              <p>CTO at Microsoft</p>
              <div className='stars'>
                {renderStars(5)}
              </div>
            </div>
          </div>
          <p className='p'>Janes testimonial goes here. She had an excellent experience with our services.</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className='user'>
            <Image src={guy} width={100} height={100} alt='boy'/>
            <div className='user-info'>
              <h3>John Doe</h3>
              <p>CEO at Google</p>
              <div className='stars'>
                {renderStars(4.5)}
              </div>
            </div>
          </div>
          <p className='p'> Johns testimonial goes here. He had a great experience with our services.</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className='user'>
            <Image src={guy1} width={100} height={100} alt='boy'/>
            <div className='user-info'>
              <h3>Jane Smith</h3>
              <p>CTO at Microsoft</p>
              <div className='stars'>
                {renderStars(5)}
              </div>
            </div>
          </div>
          <p className='p'>Janes testimonial goes here. She had an excellent experience with our services.</p>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}