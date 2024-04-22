"use client";
import React from 'react'
import profile from '../../../public/profile.jpg'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'


export default function Header() {
    return (
        <main>
            <div className='flex flex-col justify-start items-center'>
                {/* <Image
                    src={profile} alt='Bhavesh Picture'
                    className='w-48 h-48  object object-top  rounded-full '
                /> */}
            </div>
            <div className='flex flex-col items-center justify-center mb-4'>
                <h1 className='text-2xl'>Bhavesh Asanabada</h1>
            </div>
            {/* <div>
                <TypeAnimation
                    sequence={
                        [
                            "I'm a Software Developer",
                            1500,
                            "I'm a Data Analyst",
                            1500,
                            "I'm a Researcher",
                            1500,
                            "I'm a Open Source Contributor",
                            1500,
                        ]
                    }
                    wrapper='span'
                    speed={10}
                    style={{ fontSize: '1em', display: 'inline' }}
                    className='text-rose-800'
                    repeat={Infinity}
                />
            </div> */}
        </main>

    )
}
