import React from 'react'
import { FaLinkedin, FaSlack, FaDiscord, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Social() {
  return (
    <main>
      <p className="flex justify-center">Get in touch</p>
      <ul className="flex justify-center gap-x-4 mb-3">
        <li><a href='https://www.linkedin.com'><FaLinkedin className='fill-rose-500' /></a></li>
        <li><a><FaSlack className='fill-rose-500' /></a></li>
        <li><a><FaDiscord className='fill-rose-500' /></a></li>
        <li><a><FaFacebook className='fill-rose-500' /></a></li>
        <li><a><FaTwitter className='fill-rose-500' /></a></li>
        <li><a><FaInstagram className='fill-rose-500' /></a></li>
      </ul>
    </main>
  )
}
