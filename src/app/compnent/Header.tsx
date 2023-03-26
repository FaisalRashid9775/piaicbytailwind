'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';
import logo from '../../../public/Logo.svg'
import {FaGithub } from "react-icons/fa";
import {FaFacebook } from "react-icons/fa";
import {FaYoutube } from "react-icons/fa";
export default function Header() {
    const [click, setclick]=useState(false)
  return (
    <>
    <div className='flex justify-between'>

    <div className=' pt-5  pl-3 md:pl-28'>
        <Image src={logo} alt='piaic' width={50} height={80}></Image>
    </div>

    <div className=' flex pt-5 gap-5 text-2xl pr-3 md:pr-20 items-center'>
        <Link href={'https://github.com/piaic-official'}><FaGithub className=' text-teal-500 hover:bg-white hover:text-black'/></Link>
        <Link href={'https://www.facebook.com/piaic/'}><FaFacebook className=' text-teal-500 hover:bg-white hover:text-black'/></Link>
        <Link href='https://www.youtube.com/c/PIAIC?app=desktop'><FaYoutube className=' text-teal-500 hover:bg-white hover:text-black'/></Link>
    </div>

    </div>

    <div className='hidden md:flex justify-between bg-teal-50 bg-opacity-2 mx-10 my-10'>
        <ul className='flex gap-10 text-2xl items-center pl-5'>
            <li className=' text-teal-700  hover:scale-x-110'> <Link href="/">Home</Link></li>
            <li className=' text-teal-700  hover:scale-x-110'> <Link href="/Howitwork">How it work</Link></li>
            <li className=' text-teal-700  hover:scale-x-110'> <Link href="/Courses">Courses</Link></li>
            <li className=' text-teal-700  hover:scale-x-110'> <Link href="/About">About</Link></li>
        </ul>
        <div className=' p-4 text-2xl bg-teal-500 hover:scale-125 text-white'>
            <Link href={"https://portal.piaic.org/signup"}>
            <button>GET CERTIFIED</button>
            </Link>
        </div>
    </div>

    <div className=''>
        <ul className=' mt-5 text-2xl bg-teal-100 px-5 py-5 uppercase md:hidden'>
            <li className=' text-teal border-b-2 pt-4 border-b-teal-900'> <Link href="/">Home</Link></li>
            <li className=' text-teal border-b-2 pt-4 border-b-teal-900'> <Link href="/Howitwork">How it work</Link></li>
            <li className=' text-teal border-b-2 pt-4 border-b-teal-900'> <Link href="/Courses">Courses</Link></li>
            <li className=' text-teal border-b-2 pt-4 border-b-teal-900'> <Link href="/About">About</Link></li>
            <li className=' text-teal border-b-2 pt-4 border-b-teal-900'> <Link href="https://portal.piaic.org/signup">Get Certified</Link></li>

        </ul>
    </div>


    </>
    
  )
}
