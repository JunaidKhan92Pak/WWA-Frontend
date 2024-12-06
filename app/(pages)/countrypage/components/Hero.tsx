import React from "react";
import Image from "next/image";
import { AiFillBulb } from "react-icons/ai";

const Hero = () => {
  const arr1 = [
    { Icon: AiFillBulb, Heading: "Capital", Name: "London" },
    { Icon: AiFillBulb, Heading: "Language", Name: "English" },
    { Icon: AiFillBulb, Heading: "Population", Name: "67,961,439" },
    { Icon: AiFillBulb, Heading: "Currency", Name: "Pound Sterling" },
    { Icon: AiFillBulb, Heading: "INTERNATIONAL STUDENTS", Name: "679970" },
    { Icon: AiFillBulb, Heading: "ACADEMIC Intakes", Name: "Pound Sterling" },
    { Icon: AiFillBulb, Heading: "DIALING CODE", Name: "+44" },
    { Icon: AiFillBulb, Heading: "GDP", Name: "$4.5 BILLION" },
  ];

  return (
    <section className="mx-auto">
    <div
      className="relative md:h-screen flex justify-center items-center text-center rounded-2xl text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg-image.png')",
      }}
    >
      <div className="w-4/5 text-left">
        <div className="flex flex-wrap gap-5 items-center">
          <Image src="/flag.png" alt="flag" width={80} height={80} className="flex-shrink-0 object-cover w-1/4 sm:w-1/6 md:w-1/8 lg:w-1/10 xl:w-1/12" />
          <h1 className="text-[28px] sm:text-[32px] lg:text-[37px] leading-tight font-semibold">
            Study In United Kingdom
          </h1>
        </div>
        <p className="text-[12px] sm:text-[14px] py-2 max-w-[90%]">
          Step Into Success with a World-Class Education in UK.
        </p>
      </div>
    </div>
  
    <section className="relative mt-6">
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 bg-white text-black py-6 px-4 rounded-2xl shadow-lg w-11/12 max-w-[1200px] mx-auto">
        {arr1.map((item, index) => (
          <div key={index} className="flex items-center justify-start">
            <div className="flex-shrink-0 bg-[#F4D0D2] h-12 w-12 mx-2 rounded-md flex items-center justify-center">
              <item.Icon className="text-2xl text-[#FF6384]" />
            </div>
            <div className="flex flex-col text-left">
              <p className="font-semibold">{item.Heading}</p>
              <p>{item.Name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </section>
  
  );
};

export default Hero;
