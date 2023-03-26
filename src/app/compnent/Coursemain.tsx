'use client'
import Image from "next/image";
import React from "react";
import image from "../../../public/Image.png";
import { BiBookBookmark } from "react-icons/bi";
import { AiFillSafetyCertificate, AiOutlineTeam } from "react-icons/ai"
import { RevealWrapper } from "next-reveal";
export default function Coursemain() {
  return (
    <div className=" md:flex bg-slate-100">
      <div className=" md:w-1/2">
        <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
        <Image
          src={image}
          alt="piaic"
          width={600}
          height={1000}
          className=" text-center md:m-10 bg-slate-200"
        ></Image>
        </RevealWrapper>
      </div>
      <div className=" px-4 pt-6 md:pt-5 md:w-1/3">
        <h1 className="text-xl text-teal-700 pt-5 font-bold">LEARN ANYTHING</h1>
        <h1 className="text-3xl pt-5">
          Benefits About Online Learning Expertise
        </h1>
        <div className="bg-white py-4 px-2 flex hover:bg-teal-700 hover:text-white mt-5">
          <div className="text-8xl">
            <BiBookBookmark />
          </div>
          <div className="pl-3">
            <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>

            <h1 className="text-2xl">Online Courses</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
              est explicabo? Ea sapiente officia architecto aut aperiam eius est
              ex? Veritatis labore corporis eligendi quidem eum nobis, ipsum
              iusto molestias.
            </p>
            </RevealWrapper>
          </div>
        </div>

        <div className="bg-white py-4 px-2 flex hover:bg-teal-700 hover:text-white mt-5">
          <div className="text-8xl">
            < AiFillSafetyCertificate />
          </div>
          <div className="pl-3">
            <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
            <h1 className="text-2xl">Earn A Certificates</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
              est explicabo? Ea sapiente officia architecto aut aperiam eius est
              ex? Veritatis labore corporis eligendi quidem eum nobis, ipsum
              iusto molestias.
            </p>
            </RevealWrapper>
          </div>
        </div>

        <div className="bg-white py-4 px-2 flex hover:bg-teal-700 hover:text-white mt-5">
          <div className="text-8xl">
            <AiOutlineTeam />
          </div>
          <div className="pl-3">
            <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
            <h1 className="text-2xl">Learn with Expert</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
              est explicabo? Ea sapiente officia architecto aut aperiam eius est
              ex? Veritatis labore corporis eligendi quidem eum nobis, ipsum
              iusto molestias.
            </p>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
