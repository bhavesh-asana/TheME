"use client";
import React from 'react'
import Typewriter from 'typewriter-effect'

export default function TypewriterFont() {
  return (
    <main className='text-rose-500 text-xl'>
      <Typewriter
        options={{
          strings: ['Software Developer', 'Data Scientist', 'Open Source Contributor', 'Mentor'],
          autoStart: true,
          loop: true,
        }}
      />
    </main>
  )
}
