import React from "react";
import { BsFillMotherboardFill } from "react-icons/bs";
import Link from "next/link";
import { RevealWrapper } from  'next-reveal'

export default function PopularCourse() {
  return (
    <div className=" bg-slate-100 py-10">
      <div className="mb-10">
        <h1 className="text-2xl uppercase text-teal-600 font-bold text-center mb-5">
          Our Courses
        </h1>
        <h1 className="text-3xl text-center">
          Explore Our Popular Online Courses
        </h1>
      </div>

      <div className=" md:flex justify-around">
        <div className=" bg-white mb-10">
          <div className=" flex pt-10 px-8 gap-8">
            <div>
              <BsFillMotherboardFill className="text-6xl text-teal-600" />
            </div>
            <div>
            <Link href="https://piaic-site.vercel.app/Program">
              <h1 className="text-3xl">Artifical Intelligence</h1>
              <h1 className="text-lg">50+ Lectures (1-year)</h1>
              <h1 className="text-md">Rating : (5.0)</h1>
              <h1 className="text-md hover:text-teal-600">
              </h1>
                More Details ...</Link>
            </div>
          </div>
          <h1 className="text-2xl bg-slate-100 py-2 px-1 text-teal-600 text-center m-9">
            {" "}
            Rs : 6000/-whole Course
          </h1>
          <button className="mx-8 py-2 px-[90px] mb-10 bg-white text-2xl text-teal-600 border-teal-600 border-2 hover:bg-teal-600 hover:text-white">
            Register Now
          </button>
        </div>

        <div className=" bg-white mb-10">
          <div className=" flex pt-10 px-10 gap-8">
            <div>
              <BsFillMotherboardFill className="text-6xl text-teal-600" />
            </div>
            <div>
              <Link href="https://panaverse-dao-kappa.vercel.app/Syllabus">
              <h1 className="text-3xl">MetaVerse</h1>
              <h1 className="text-lg">50+ Lectures (1-year)</h1>
              <h1 className="text-md">Rating : (5.0)</h1>
              <h1 className="text-md hover:text-teal-600">More Details ...
              </h1>
              </Link>
            </div>
          </div>

          <h1 className="text-2xl bg-slate-100 py-2 px-4 text-teal-600 text-center m-9">
            {" "}
            Rs : 12000/-whole Course
          </h1>
          <button className="mx-8 py-2 px-[90px] mb-10 bg-white text-2xl text-teal-600 border-teal-600 border-2  hover:bg-teal-600 hover:text-white">
            Register Now
          </button>
        </div>

        <div className=" bg-white mb-10">
          <div className=" flex pt-10 px-6 gap-8">
            <div>
              <BsFillMotherboardFill className="text-6xl text-teal-600" />
            </div>
            <div>
                <Link href="https://piaic-site.vercel.app/Program">
              <h1 className="text-3xl">BlockChain</h1>
              <h1 className="text-lg">50+ Lectures (1-year)</h1>
              <h1 className="text-md">Rating : (5.0)</h1>
              <h1 className="text-md hover:text-teal-600">More Details ...
              </h1>
              </Link>
            </div>
          </div>

          <h1 className="text-2xl bg-slate-100 py-2 px-4 text-teal-600 text-center m-9">
            {" "}
            Rs : 6000/-whole Course
          </h1>
          <button className="mx-8 py-2 px-[90px] mb-10 bg-white text-2xl text-teal-600 border-teal-600 border-2  hover:bg-teal-600 hover:text-white">
            Register Now
          </button>
        </div>
      </div>

      {/* Second Step */}
      <div className="mb-10">
        <h1 className="text-2xl uppercase text-teal-600 font-bold text-center mb-5">
          Courses
        </h1>
        <h1 className="text-3xl text-center">
          Explore Our other Online Courses
        </h1>
      </div>

      <div className=" md:flex justify-around">

      <div className=" bg-white mb-10">
          <div className=" flex pt-10 px-6 gap-8">
            <div>
              <BsFillMotherboardFill className="text-6xl text-teal-600" />
            </div>
            <div>
            <Link href="https://piaic-site.vercel.app/Program">
              <h1 className="text-3xl">Cloud Computing</h1>
              <h1 className="text-lg">50+ Lectures (1.5-year)</h1>
              <h1 className="text-md">Rating : (5.0)</h1>
              <h1 className="text-md hover:text-teal-600">
              </h1>
               More Details ...</Link>
            </div>
          </div>

          <h1 className="text-2xl bg-slate-100 py-2 px-4 text-teal-600 text-center m-9">
            {" "}
            Rs : 6000/-whole Course
          </h1>
          <button className="mx-8 py-2 px-[90px] mb-10 bg-white text-2xl text-teal-600 border-teal-600 border-2  hover:bg-teal-600 hover:text-white">
            Register Now
          </button>
        </div>

        <div className=" bg-white mb-10">
          <div className=" flex pt-10 px-6 gap-8">
            <div>
              <BsFillMotherboardFill className="text-6xl text-teal-600" />
            </div>
            <div>
            <Link href="https://piaic-site.vercel.app/Program">
              <h1 className="text-3xl">Internet of things</h1>
              <h1 className="text-lg">50+ Lectures (1.5-year)</h1>
              <h1 className="text-md">Rating : (5.0)</h1>
              <h1 className="text-md hover:text-teal-600">
              </h1>
                \More Details ...</Link>
            </div>
          </div>

          <h1 className="text-2xl bg-slate-100 py-2 px-4 text-teal-600 text-center m-9">
            {" "}
            Rs : 6000/-whole Course
          </h1>
          <button className="mx-8 py-2 px-[90px] mb-10 bg-white text-2xl text-teal-600 border-teal-600 border-2  hover:bg-teal-600 hover:text-white">
            Register Now
          </button>
        </div>

        <div className=" bg-white mb-10">
          <div className=" flex pt-10 px-6 gap-8">
            <div>
              <BsFillMotherboardFill className="text-6xl text-teal-600" />
            </div>
            <div>
            <Link href="https://piaic-site.vercel.app/Program">
              <h1 className="text-3xl">Quantum Computing</h1>
              <h1 className="text-lg">50+ Lectures (1-year)</h1>
              <h1 className="text-md">Rating : (5.0)</h1>
              <h1 className="text-md hover:text-teal-600">
              </h1>
                More Details ...</Link>
            </div>
          </div>

          <h1 className="text-2xl bg-slate-100 py-2 px-4 text-teal-600 text-center m-9">
            {" "}
            Rs : 6000/-whole Course
          </h1>
          <button className="mx-8 py-2 px-[90px] mb-10 bg-white text-2xl text-teal-600 border-teal-600 border-2  hover:bg-teal-600 hover:text-white">
            Register Now
          </button>
        </div>

      </div>
    </div>
  );
}
