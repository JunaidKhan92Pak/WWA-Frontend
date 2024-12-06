import React from "react";
import Image from "next/image";

const PopularPrograms = () => {
  const arr1 = [
    {
      icon: "/Suitcasesvg.svg",
      caption: "Business & Management",
    },
    {
      icon: "/Notebooksvg.svg",
      caption: "Engineering Courses",
    },
    {
      icon: "/Laptopsvg.svg",
      caption: "Computer Science",
    },
    {
      icon: "/solarbroken.svg",
      caption: "Law Degree",
    },
    {
      icon: "/Heartsvg.svg",
      caption: "Health and Medicine",
    },
    {
      icon: "/Atomsvg.svg",
      caption: "Social Sciences",
    },
  ];

  return (
    <>
      <section
        className="relative flex flex-col lg:flex-row justify-between items-center mx-auto text-white bg-[#FCE7D2] bg-cover bg-center"
        style={{
          height: "auto",
          minHeight: "200.81px",
          backgroundImage: "url('/bg-usa.png')",
          padding: "39px 20px",
        }}
      >
        <div className="absolute inset-0 bg-[#FCE7D2] opacity-60 z-0"></div>

        <div className="relative flex flex-col lg:flex-row z-10 w-full justify-around items-center">
          <h3 className="text-[#313131] text-left font-bold w-full lg:w-2/5 text-lg lg:text-2xl mb-6 lg:mb-0">
            Popular Programs to Study in United Kingdom!
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:gap-10 gap-6">
            {arr1.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 items-center text-black"
              >
                <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg">
                  <Image
                    src={item.icon}
                    alt={item.caption}
                    width={30}
                    height={30}
                  />
                </div>
                <p className="text-[12px] text-center w-16 sm:w-20">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
   
      <section className="relative">
        <div className="relative">
          <Image
            src="/Diagram.png"
            alt="diagram"
            width={900}
            height={800}
            className="mx-auto py-20"
          />
        </div>

        <div className="absolute inset-0 w-2/5 mx-auto  flex top-28 justify-between px-10">
          <div className="text-center pt-5">
            <p className="font-bold text-md  text-black">Rent</p>
            <p className="text-black">£439-£700</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-md text-black">Transport</p>
            <p className="text-black">£30-£69</p>
          </div>
        </div>
        <div className="absolute inset-0 top-60 w-5/6 right-10 mx-auto flex justify-evenly">
          <div className="text-center pt-5 flex-2">
            <p className="font-bold text-sm w-2/5 text-black">
              Health & Wellbeing
            </p>
            <p className="text-black text-sm w-4/5">£26</p>
          </div>
          <div className="text-center w-1/6 pl-5">
            <p className="font-bold text-[12px] w-3/5">
              Cost of Living in United Kingdom!
            </p>
            <p className="font-bold text-sm w-3/5">Eating Out</p>
            <p className="w-3/5"> £66-£80</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-md text-black">Transport</p>
            <p className="text-black">£30-£69</p>
          </div>
        </div>

        <div className="absolute bottom-32 w-5/6 left-16 mx-auto flex justify-center gap-56">
          <div className="text-center pt-5 pl-5">
            <p className="font-bold text-md  text-black">Rent</p>
            <p className="text-black">£439-£700</p>
          </div>
          <div className="text-center pl-10">
            <p className="font-bold text-md text-black ">Transport</p>
            <p className="text-black">£30-£69</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularPrograms;
