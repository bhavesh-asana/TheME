"use client";
import React from 'react'
import profile from '../../../public/profile.jpg'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import { TypeAnimation } from 'react-type-animation'


export default function Header() {
    return (
        <main className='text-center'>
            <div className='block pt-12'>
                <Image
                src={profile} alt='Bhavesh Picture' className='object object-top rounded-full w-32 h-32'
                />
            </div>
            <div>
            <h1>Bhavesh Asanabada</h1>
            </div>
            <div>
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
                    style={{fontSize:'1em', display: 'inline'}}
                    className='text-rose-800'
                    repeat={Infinity}
                />
            </div>
            <div>
                <Button>Download Resume</Button>
            </div>
            <div>
            <p>Get in touch</p>
            <div>
                <ul className='flex gap-2'>
                    <li>Discord</li>
                    <li>Slack</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
            </div>
        </main>

    )
}
