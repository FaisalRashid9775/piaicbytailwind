import Image from "next/image";
import React from "react";
import ZiaKhan from "../../../public/ZiaKhan.jpg";
import Zeeshan from '../../../public/Zeeshan.jpg'
import Adil from '../../../public/Adil.jpg'

export default function OurInstructor() {
  return (
    <div className="bg-slate-100" >

      <div className="mb-10">
        <h1 className="text-2xl uppercase text-teal-600 font-bold text-center mb-5">
          Our Instructors
        </h1>
      </div>
    <div className=" md:flex md:gap-10 md:m-10">
      <div className=" bg-white mb-10">
        <div className="flex bg-white p-10">
          <div>
            <Image
              className=" rounded-full"
              src={ZiaKhan}
              alt="Ziakhan"
              width={100}
              height={100}
            ></Image>
          </div>
          <div className="pt-2">
            <h1 className="text-2xl pl-5 pt-5">ZIA KHAN</h1>
            <h1 className="text-xl pl-5 text-teal-600">CEO OF PIAIC</h1>
          </div>
        </div>
        <h1 className="text-xl px-5 pb-5">
          First you have to learn programing. The prediction for WEB 3 and
          MetaVerse is that its 13 trillions dollar market with 5 billon users.
          Get strong make small group practice hard to acheive our goal
        </h1>
      </div>

      
      <div className=" bg-white mb-10">
        <div className="flex bg-white p-10">
          <div>
            <Image
              className=" rounded-full"
              src={Zeeshan}
              alt="Ziakhan"
              width={100}
              height={100}
            ></Image>
          </div>
          <div className="pt-2">
            <h1 className="text-2xl pl-5 pt-5">ZEESHAN HANIF</h1>
            <h1 className="text-xl pl-5 text-teal-600">COO OF PIAIC</h1>
          </div>
        </div>
        <h1 className="text-xl px-5 pb-5">
          First you have to learn programing. The prediction for WEB 3 and
          MetaVerse is that its 13 trillions dollar market with 5 billon users.
          Get strong make small group practice hard to acheive our goal
        </h1>
      </div>

     
      <div className=" bg-white mb-10">
        <div className="flex bg-white p-10">
          <div>
            <Image
              className=" rounded-full"
              src={Adil }
              alt="Ziakhan"
              width={100}
              height={100}
            ></Image>
          </div>
          <div className="pt-2">
            <h1 className="text-2xl pl-5 pt-5">ADIL ALTAF</h1>
            <h1 className="text-xl pl-5 text-teal-600">HEAD OF PIAIC</h1>
          </div>
        </div>
        <h1 className="text-xl px-5 pb-5">
          First you have to learn programing. The prediction for WEB 3 and
          MetaVerse is that its 13 trillions dollar market with 5 billon users.
          Get strong make small group practice hard to acheive our goal
        </h1>
      </div>

    </div>
    </div>
  );
}
