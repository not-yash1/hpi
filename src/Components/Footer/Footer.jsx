import React from 'react'
import './Footer.css'
import { PiPhoneCallLight } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { TbBrandFacebook } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="contact">
        <div className="mob">
            <PiPhoneCallLight style={{
                backgroundColor: 'rgb(14, 40, 71)',
                color: 'rgb(117, 130, 146)'
            }} />
            <h6>+91  90346 80100 &nbsp; +91  60050 11829</h6>
        </div>
        <div className="email">
            <CiMail style={{
                backgroundColor: 'rgb(14, 40, 71)',
                color: 'rgb(117, 130, 146)'
            }} />
            <h6>hpinfra2018@gmail.com</h6>
        </div>
      </div>
      <div className="socials">
        <div className="icons">
            <a target='blank' href="https://x.com"><SlSocialYoutube style={{
                backgroundColor: 'rgb(14, 40, 71)',
                color: 'rgb(225, 228, 232)'
            }} /> </a>
            {/* <a target='blank' href="https://x.com"><RiTwitterXLine style={{
                backgroundColor: 'rgb(14, 40, 71)',
                color: 'rgb(225, 228, 232)'
            }} /> </a> */}

            <a target='blank' href="https://instagram.com"><FaInstagram style={{
                backgroundColor: 'rgb(14, 40, 71)',
                color: 'rgb(225, 228, 232)',
                width: '25px',
                height: '25px',
            }} /> </a>
                
            <a target='blank' href="https://facebook.com"><TbBrandFacebook style={{
                    backgroundColor: 'rgb(14, 40, 71)',
                    color: 'rgb(225, 228, 232)',
                    borderRadius: '50%',
                    width: '45px',
                    height: '45px',
                    padding: '5px',
                }} /> </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
