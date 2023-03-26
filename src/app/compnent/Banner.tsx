'use client'
import Image from "next/image";
import React from "react";
import image from "../../../public/Image.png";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";

export default function Banner() {
  return (
    <div className=" bg-teal-400 bg-fixed bg-cover md:flex">
      <div className=" w-full md:w-1/2 text-4xl text-white">
        <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
        <h1 className=" px-5 md:pl-40 pt-12 md:pt-40">
          President Inistative for Artifical Intelligence and cloud computing
        </h1>
        </RevealWrapper>
        <Link href={'/'}>
        <button className=" bg-teal-600 text-white py-3 px-12 md:px-12 text-xl mt-5 md:mt-10 mx-9 md:ml-40 hover:scale-125  uppercase">
          Get start Now
        </button>
        </Link>
        <Link href={'https://portal.piaic.org/signup'}> 
        <button className=" bg-white text-teal-600 py-3 px-12 md:px-12 text-xl mt-5 md:mt-10 mx-9 hover:scale-125 uppercase ">
          View Courses
        </button>
        </Link>
      </div>
      <div className=" w-full md:w-1/2">
        <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
        <Image
          className=" md:float-right"
          src={image}
          alt="piaic"
          width={450}
          height={700}
        ></Image>

        </RevealWrapper>
      </div>
    </div>
  );
}
