import React from "react";
import Link from "next/link";
import {FaGithub } from "react-icons/fa";
import {FaFacebook } from "react-icons/fa";
import {FaYoutube } from "react-icons/fa";
import {BiCurrentLocation,BiPhoneCall,BiMailSend } from "react-icons/bi";

export default function Footer() {
  return (
    <div>
    <div className=" bg-slate-100 py-8 px-6 md:flex md:justify-around ">
      <div className="pt-8 md:pr-4 md:w-2/5">
        <h1 className="text-3xl text-teal-800">President Inistative for Artifical Intelligence and Cloud Computing</h1>

        <p className="pt-4">
          The mission of PIAIC is to reshape Pakistan by revolutionizing
          education, research, and business by adopting latest, cutting-edge
          technologies. Experts are calling this the 4th industrial revolution.
        </p>
      </div>
      <div className="pt-8 md: w-1/5">
        <h1 className="text-3xl text-teal-800 ">Available Program</h1>
        <ul>
        <li className="pt-4 text-xl hover:text-blue-800"> <Link  href='/Courses'>Artifical Intelligence</Link></li>
        <li className="pt-4 text-xl hover:text-blue-800"> <Link  href='/Courses'>BlockChain</Link></li>
        <li className="pt-4 text-xl hover:text-blue-800"> <Link href='/Courses'>Cloud Computing</Link></li>
        <li className="pt-4 text-xl hover:text-blue-800"> <Link href='/Courses'>IOT</Link></li>
        </ul>
      </div>
      <div className="pt-8  md:w-1/5">
        
        <h1 className="text-3xl text-teal-800" >Quick link</h1>
        <div className="flex pt-3">
          <Link href={'https://github.com/piaic-official'}>
        <FaGithub className=' text-teal-500 hover:text-black text-5xl pt-3'/>
          </Link>
        <p className="pl-1 text-xl pt-4">Github</p>
        </div>
        <div className="flex pt-3">
          <Link href={'https://www.facebook.com/piaic/'}>
          
        <FaFacebook className=' text-teal-500 hover:text-black text-5xl pt-3'/>
          </Link>
        <p className="pl-1 text-xl pt-4">Facebook</p>
        </div>
        <div className="flex pt-3">
          <Link href={'https://www.youtube.com/@PIAIC/streams'}>

       <FaYoutube className=' text-teal-500 hover:text-black text-5xl pt-3'/>
          </Link>
       <p className="pl-1 text-xl pt-4">Youtube</p>
        </div>
      </div>-
      <div className="pt-8 md:h-1/5">
        <h1 className="text-3xl text-teal-800">Have a Question</h1>
        <div className="flex pt-3">
        <BiCurrentLocation className=' text-teal-500  hover:text-black text-5xl pt-3'/>
        <p className="pl-1 text-xl pt-4">Karachi- Pakistan</p>
        </div>
        <div className="flex pt-3">
        <BiPhoneCall className=' text-teal-500  hover:text-black text-5xl pt-3'/>
        <p className="pl-1 text-xl pt-4">+92 333 111 11 11</p>
        </div>
        <div className="flex pt-3">
       <BiMailSend className=' text-teal-500 hover:text-black text-5xl pt-3'/>
       <p className="pl-1 text-xl pt-4">info@Piaic.com</p>
        </div>
      </div>
    </div>
      <div>
        <h1 className="py-4 mr-5 float-right">Copyright ©2022 All rights reserved | This template is made by Faisal Rashid</h1>
      </div>

    </div>
  );
}
