"use client"; // Add this line at the top
import React from "react";
import Navbar from "@/components/Navbar";
import { PiGlobeHemisphereEast, PiLifebuoyLight } from "react-icons/pi";
import { GiGraduateCap } from "react-icons/gi";
import { IoCarOutline } from "react-icons/io5";
import { GoShareAndroid } from "react-icons/go";
import { PiPersonSimpleCircleLight } from "react-icons/pi";
import { MdOutlineAnalytics } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { CiMobile1 } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { IoBusOutline } from "react-icons/io5";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { useState } from "react";

interface Country {
  name: string;
  flag: string;
}

interface ExpenseItem {
  title: string;
  amount: string;
  amountPKR: string;
  icon: React.ReactNode;
  bgColor: string;
}

const expenseData: ExpenseItem[] = [
  {
    title: "Rent",
    amount: "£500-850",
    amountPKR: "PKR 226,672-385,338",
    icon: <AiOutlineHome className="text-[#313131] text-3xl" />,
    bgColor: "bg-[#F4D0D2]", // Custom background color for Rent
  },
  {
    title: "Utilities",
    amount: "£50-100",
    amountPKR: "PKR 22,667-45,334",
    icon: <MdOutlineAnalytics className="text-[#313131] text-3xl" />,
    bgColor: "bg-[#FCE7D2]",
  },
  {
    title: "Internet",
    amount: "£20-50",
    amountPKR: "PKR 9,067-22,667",
    icon: <TfiWorld className="text-[#313131] text-2xl" />,
    bgColor: "bg-[#F4D0D2]", // Custom background color for Rent
  },
  {
    title: "Mobile",
    amount: "£10-20",
    amountPKR: "PKR 4,534-9,067",
    icon: <CiMobile1 className="text-[#313131] text-3xl" />,
    bgColor: "bg-[#FCE7D2]",
  },
  {
    title: "Groceries",
    amount: "£200-300",
    amountPKR: "PKR 90,672-136,009",
    icon: <CiShoppingBasket className="text-[#313131] text-3xl" />,
    bgColor: "bg-[#F4D0D2]", // Custom background color for Rent
  },
  {
    title: "Public Transport",
    amount: "£200-220",
    amountPKR: "PKR 90,672-99,739",
    icon: <IoBusOutline className="text-[#313131] text-3xl" />,
    bgColor: "bg-[#FCE7D2]",
  },
];

const steps = [
  {
    step: "01",
    title: "Country Selection",
    icon: <PiGlobeHemisphereEast className="w-8 h-8 text-[#05bfb8]" />,
    borderColor: "#05bfb8",
    isIconTop: true,
  },
  {
    step: "02",
    title: "University Selection",
    icon: <GiGraduateCap className="w-8 h-8 text-[#05bfb8]" />,
    borderColor: "#05bfb8",
    isIconTop: false,
  },
  {
    step: "03",
    title: "Accommodation Type",
    icon: <IoCarOutline className="w-8 h-8 text-[#F9B957]" />,
    borderColor: "#F9B957",
    isIconTop: true,
  },
  {
    step: "04",
    title: "Lifestyle",
    icon: <PiLifebuoyLight className="w-8 h-8 text-[#EA2834]" />,
    borderColor: "#EA2834",
    isIconTop: false,
  },
];

const Page = () => {
  const countries: Country[] = [
    { name: "UK", flag: "/uk.png" },
    { name: "Australia", flag: "/australia.png" },
    { name: "USA", flag: "/usa.png" },
    { name: "Germany", flag: "/germany.png" },
    { name: "China", flag: "/china.png" },
    { name: "Canada", flag: "/canada.png" },
    { name: "Japan", flag: "/japan.png" },
  ];

  const [scrollX, setScrollX] = useState(0);

  // Scroll left function
  const scrollLeft = () => {
    setScrollX((prev) => Math.max(prev - 200, 0)); // Decrease scroll position (adjust 200px as needed)
  };

  // Scroll right function
  const scrollRight = () => {
    setScrollX((prev) => Math.min(prev + 200, (countries.length - 3) * 200)); // Ensure we don't scroll past the content
  };
  return (
    <>
      <Navbar />
      <div className="w-5/6 mx-auto shadow-lg rounded-xl my-10 relative overflow-hidden">
        {/* Background Image */}
        <Image
          src="/img5.png"
          alt="Background"
          layout="responsive"
          width={1920} // You can set an appropriate width for the image
          height={600} // Set an appropriate height for the image
          className="rounded-lg"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-100"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-start pl-14 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug max-w-md">
            Plan Your Study Abroad Living Expenses with Ease!
          </h2>
          <p className="text-base md:text-lg mb-6 leading-relaxed max-w-sm">
            Get complete estimates and budget smartly for housing, food, travel,
            and more.
          </p>
          <button className="px-6 md:px-8 py-3 bg-red-600 rounded-lg text-white text-base md:text-lg font-medium hover:bg-red-500 transition">
            Calculate Now
          </button>
        </div>
      </div>

      {/* Additional Section */}
      <div className="w-4/5 md:w-3/5 mx-auto my-10 p-6 md:p-10 bg-white text-center">
        {/* Heading Section */}
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Understand Your Living Costs in Just a Few Simple Steps!
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Planning your study abroad journey? Weve made budgeting easy! With
          our living expense calculator, you can break down your expected costs
          in no time. Just follow these quick steps to get an accurate snapshot
          of your monthly expenses for housing, food, transportation, and more.
        </p>
      </div>

      {/* Steps Section */}
      <div className="flex flex-wrap justify-center items-start lg:gap-6 gap-10 w-full mb-28">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-md p-6 w-40 sm:w-48 md:w-52 lg:w-52 xl:w-56 h-48 sm:h-52 md:h-52 lg:h-52 xl:h-56"
          >
            {/* Colored Borders Positioned Outside */}
            <div
              className={`absolute ${
                index % 2 === 0 ? "bottom-[-10px]" : "top-[-10px]"
              } left-0 right-0 mx-auto w-3/3 h-3`}
              style={{
                backgroundColor: step.borderColor,
                borderRadius: "0 0 8px 8px",
              }}
            ></div>

            {/* Icon */}
            <div
              className={`absolute ${
                index % 2 === 0 ? "-top-8" : "-bottom-8"
              } left-1/2 transform -translate-x-1/2`}
            >
              <div
                className="rounded-full w-16 h-16 flex items-center justify-center border-4 shadow-lg"
                style={{ borderColor: step.borderColor }}
              >
                {step.icon}
              </div>
            </div>

            {/* Card Content */}
            <div className="flex flex-col items-center justify-center mt-16">
              <h2 className="text-xl font-bold text-gray-800  text-center">
                {step.step}
              </h2>
              <p className="text-gray-700 text-xl w-2/3 font-medium text-center">
                {step.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-[875px] bg-[#FCE7D2] relative">
        {/* Background Image */}
        <Image
          src="/bg-usa.png" // Path to your image
          alt="Background Image" // Alt text for the image
          layout="fill" // Fills the parent container
          objectFit="cover" // Ensures the image covers the container while maintaining its aspect ratio
          className="absolute top-0 left-0 z-0" // Tailwind classes for positioning
        />

        {/* Content Section */}
        <div className="absolute inset-0 z-10 flex flex-col lg:flex-row gap-8 px-12  py-4">
          {/* Left Section - Selection */}
          <div className="space-y-6 w-full lg:w-2/3">
            {/* Country Selection */}
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                Country Selection
              </h2>
              <div className="relative w-full">
                {/* Left Arrow Button */}
                <button
                  onClick={scrollLeft}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent border-2 border-black text-black p-2 rounded-full shadow-md"
                >
                  &#60;
                </button>

                {/* Carousel Container */}
                <div
                  className="flex items-center justify-center"
                  style={{ transform: `translateX(-${scrollX}px)` }}
                >
                  {countries.map((country, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center w-20 h-20"
                    >
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="w-14 h-14 rounded-full border border-gray-300"
                      />
                      <p className="text-sm text-gray-700 mt-2">
                        {country.name}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Right Arrow Button */}
                <button
                  onClick={scrollRight}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent border-2 border-black text-black p-2 rounded-full shadow-md"
                >
                  &#62;
                </button>
              </div>
            </div>

            {/* Select University */}
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                Select University
              </h2>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600">
                <option>Select Universities</option>
                <option>University A</option>
                <option>University B</option>
                <option>University C</option>
              </select>
            </div>

            {/* Accommodation Type */}
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                Accommodation Type
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {/* Shared Accommodation Button with Icon Above Text */}
                <button className="flex flex-col items-center justify-center px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 w-full mx-auto">
                  <GoShareAndroid className="mb-1 w-5 h-5 text-gray-700" />{" "}
                  {/* Icon with margin */}
                  <span className="text-sm font-bold">Shared</span>{" "}
                  {/* Shared text on top */}
                  <span className="text-sm font-bold">Accommodation</span>{" "}
                  {/* Accommodation text below */}
                </button>

                {/* Single Accommodation Button with Icon Above Text */}
                <button className="flex flex-col items-center justify-center p-8 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 w-full mx-auto">
                  <PiPersonSimpleCircleLight className="my-2 w-5 h-5 text-gray-700" />
                  {/* Icon with margin */}
                  <span className="text-sm font-bold">Single</span>{" "}
                  {/* Single text on top */}
                  <span className="text-sm font-bold">Accommodation</span>{" "}
                  {/* Accommodation text below */}
                </button>
              </div>
            </div>

            {/* Lifestyle */}
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                Lifestyle
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Shared Accommodation Button with Icon Above Text */}
                <button className="flex flex-col items-center justify-center px-12 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 w-full mx-auto">
                  <GoShareAndroid className="my-2 w-6 h-6 text-gray-700" />{" "}
                  {/* Icon with margin */}
                  <span className="text-sm font-bold">Student Gudget</span>{" "}
                  {/* Accommodation text below */}
                </button>

                {/* Single Accommodation Button with Icon Above Text */}
                <button className="flex flex-col items-center justify-center p-8 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 w-full mx-auto">
                  <PiPersonSimpleCircleLight className="my-2 w-6 h-6 text-gray-700" />
                  {/* Icon with margin */}
                  <span className="text-sm font-bold">Moderate</span>{" "}
                  {/* Accommodation text below */}
                </button>
              </div>
              <button className="flex flex-col items-center justify-center p-8 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 w-full mx-auto">
                <PiPersonSimpleCircleLight className="my-2 w-6 h-6 text-gray-700" />
                {/* Icon with margin */}
                <span className="text-sm font-semibold">Luxury</span>{" "}
                {/* Accommodation text below */}
              </button>
            </div>

            {/* Calculate Button */}
            <button className="bg-red-600 text-white font-bold py-3 px-14 rounded-lg hover:bg-red-500 transition">
              Calculate
            </button>
          </div>

          {/* Right Section - Results */}
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6 w-full lg:w-1/2">
            {/* Expense Header */}
            {/* Heading Section */}
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-4 w-1/2">
                Your Estimated Living Expense will be:
              </h2>
              <input
                type="text"
                placeholder="£ 1140 - 1840"
                className="w-full p-3 border border-gray-300 rounded-lg text-start font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <p className="my-6 text-sm text-gray-600">
                = (PKR 517,334 - PKR 661,038)
              </p>
            </div>

            {/* Breakdown Section */}
            <div className="mt-8 bg-[#F1F1F1] p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-center mb-8 mt-20">
                Breakdown
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {expenseData.map((item, index) => (
                  <div key={index} className="text-center">
                    {/* Icon Box - Rectangular with Dynamic Background Color */}
                    <div
                      className={`flex items-center justify-center w-32 h-28 rounded-md mx-auto ${item.bgColor}`}
                    >
                      {item.icon}
                    </div>
                    {/* Title */}
                    <h4 className="mt-4 text-md font-semibold">{item.title}</h4>
                    {/* Amount in GBP */}
                    <p className="text-sm text-gray-700">{item.amount}</p>
                    {/* Amount in PKR */}
                    <p className="text-xs text-gray-500">{item.amountPKR}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Expense Breakdown */}
          {/* <div className="flex flex-col items-center bg-[#F1F1F1] py-16 rounded-2xl">
              <img
                src="/img6.png"
                alt="Expense Breakdown"
                className="w-96 h-96"
              />
              <p className="text-gray-600 text-center w-1/2">
                Your Expense Breakdowns will be shown here...
              </p>
            </div> */}
        </div>
      </div>
    </>
  );
};

export default Page;
