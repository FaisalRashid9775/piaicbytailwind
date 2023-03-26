import React from "react";
import Image from "next/image";
import President from '../../../public/President.jpg'
import OurInstructor from "../compnent/OurInstructor";

export default function page() {
  return (
    <div className=" bg-slate-100">
      <div className="py-5 px-8 md:px-48">
        <Image className=" rounded-full m-auto pb-5" src={President} alt="president" width={100} height={100}></Image>
        <h1 className="text-3xl font-bold text-center">Dr. Arif Alvi</h1>
        <h1 className="text-xl text-center text-teal-600 pb-5">President of the Islamic Republic of Pakistan</h1>
        <p>
          Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic
          of Pakistan on 9th September 2018.
        </p>
        <p>
          Dr. Arif Alvi was born in 1949 and completed his early education in
          Karachi. He did his Bachelor of Dental Surgery (BDS) from De-
          Montmorency College of Dentistry, Lahore where he was declared the
          Best Graduate. He completed his Masters of Science in the field of
          Prosthodontics from University of Michigan (1975) and in Orthodontics
          from University of Pacific, San Francisco (1982). He was awarded
          fellowship Diplomatic American Board of Orthodontists (1995).
        </p>
        <p>
          President Dr. Arif Alvi has been a renowned professional and has held
          many important positions in the field of Dentistry. He remained Dean
          of Orthodontics, College of Physicians and Surgeons of Pakistan,
          President, Pakistan Dental Association (1997-2001), Pakistan
          Association of Orthodontists (2005), Asia Pacific Dental Federation
          (2006-07) and Councilor of the World Dental Federation (2007-2013).
          Through his sheer hard work in the World Dental Federation, he was
          able to get the declaration of 20th March as World Oral Health Day. He
          is also an author of a book, theses, and many articles.
        </p>
        <p>
          Dr. Arif Alvi political career commenced with his pro-democracy
          struggle against the dictatorship of General Ayub Khan. He is a
          founding member of Pakistan Tehreek-e-Insaf (PTI) that came into being
          in 1996. He remained a member of the PTI Central Executive Committee
          since its inception and has held the offices of PTI President of Sindh
          (1997-2001), Central Vice President (2001-2006) and Secretary General
          (2006-2013). In line with Constitution of Pakistan, he resigned from
          all the positions of PTI before assuming the prestigious office of the
          President.
        </p>
      </div>

      <OurInstructor/>
    </div>
  );
}
