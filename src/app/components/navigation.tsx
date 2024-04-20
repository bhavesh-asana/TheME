import React from 'react'
import Link from 'next/link'
import { Button } from '@nextui-org/react'

export default function Navigation() {
    return (
        <nav>
            <ul className='relative space-y-5 pt-3 w-auto h-auto'>
                <li>
                    <Link className='px-9 py-1.5 relative rounded-lg text-rose-700 bg-white shadow-lg hover:shadow-rose-500/40' href={"/"}>Home</Link>
                </li>
                <li>
                    <Link className='px-4 py-1.5 rounded-lg text-rose-700 bg-white shadow-lg hover:shadow-rose-500/40' href={"/experience"}>Experience</Link>
                </li>
                <li>
                    <Link className='px-5 py-1.5 rounded-lg text-rose-700 bg-white shadow-lg hover:shadow-rose-500/40' href={"/education"}>Education</Link>
                </li>
                <li>
                    <Link className='px-7 py-1.5 rounded-lg text-rose-700 bg-white shadow-lg hover:shadow-rose-500/40' href={"/projects"}>Projects</Link>
                </li>
                <li>
                    <Link className='px-10 py-1.5 rounded-lg text-rose-700 bg-white shadow-lg hover:shadow-rose-500/40' href={"/blog"}>Blog</Link>
                </li>
            </ul>
        </nav>
    )
}
