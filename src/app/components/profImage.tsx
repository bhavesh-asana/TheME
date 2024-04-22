import React from 'react'
import Image from 'next/image'
import profileImg from '../../../public/profileImg.jpg'

export default function ProfImage() {
  return (
    <main>
      <Image
        src={profileImg} alt='Bhavesh Picture'
        className='w-48 h-48 bg-center rounded-full '
      />
    </main>
  )
}
