'use client'
import React, { useState } from 'react';
import Styles from '@/app/components/component.module.css';
import Link from 'next/link';
import { FaChevronDown, FaBars, FaTimes, FaRegCalendarAlt } from "react-icons/fa";

const Nav = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={Styles.nav}>
      <div className={Styles.logo}>
        <p>Toront<span>O</span></p>
      </div>

      {/* Hamburger Menu Icon */}
      <div className={Styles.menuIcon} onClick={toggleSideNav}>
       <FaBars className={Styles.bg} />
      </div>

      {/* Navigation Links */}
      <div className={`${Styles.li} ${isSideNavOpen ? Styles.sideNavOpen : ''}
      
      `}>
      <div className={`${Styles.dropdownCloseIcon} ${!isSideNavOpen ? Styles.hideLg :''}`} onClick={toggleSideNav}>
          <FaTimes />
        </div>
        {/* Close Icon Inside Sidenav */}

        <ul>
          <Link href="#"><li>Home</li></Link>
          <Link href="#"><li>About</li></Link>
          <Link href="#"><li>Services</li></Link>
          <li className={Styles.dropdown} onClick={toggleDropdown}>
            Pages <FaChevronDown />
          </li>
          <Link href="#"><li>Contact</li></Link>
           <p className={Styles.hideLg}>Book Appointment <FaRegCalendarAlt /> </p>
        </ul>
      </div>

      {/* Dropdown Sidenav */}
      <div className={`${Styles.dropdownSidenav} ${isDropdownOpen ? Styles.dropdownSidenavOpen : ''}`}>
        <div  className={`${Styles.dropdownCloseIcon}`} onClick={toggleDropdown}>
          <FaTimes />
        </div>
        <ul>
          <Link href="#"><li>Services</li></Link>
          <Link href="#"><li>Services Details</li></Link>
          <Link href="#"><li>Team</li></Link>
          <Link href="#"><li>Team Details</li></Link>
          <Link href="#"><li>FAQ</li></Link>
          <Link href="#"><li>404</li></Link>
        </ul>
      </div>

     <p className={Styles.hide}>Book Appointment <FaRegCalendarAlt /> </p>
    </div>
  );
};

export default Nav;