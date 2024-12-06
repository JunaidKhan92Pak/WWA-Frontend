"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const countries = [
  { value: "USA", label: "United States" },
  { value: "India", label: "India" },
  { value: "Australia", label: "Australia" },
  { value: "Italy", label: "Italy" },
  { value: "Pakistan", label: "Pakistan" },
  { value: "Canada", label: "Canada" },
];

const cities = [
  { value: "Lahore", label: "Lahore" },
  { value: "Okara", label: "Okara" },
  { value: "Islamabad", label: "Islamabad" },
  { value: "Karachi", label: "Karachi" },
  { value: "Nepal", label: "Nepal" },
];

const Step1 = () => {
const router= useRouter();
  const [personalInfo, setPersonalInfo] = useState({
    contactNo: "",
    dob: "",
    country: "",
    nationality: "",
    city: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  try{
    const response = await fetch('https://wwa-bk.vercel.app/updateprofile/personal-Information' , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify(personalInfo),
    })
    const res = await response.json()
    console.log(res);     
    router.push("/completeprofile/academicinformation");

  } 
  catch(error){
    console.log(`There Is SOme Error ${error}`);
  }
  };

  return ( 
    <div>
      <section>
        <form
          onSubmit={handleSubmit}
          className="mx-auto p-8 bg-white rounded-md space-y-2"
        >
          <div className="flex w-full gap-3">
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2">Contact</label>
              <div className="flex space-x-2">
                <select
                  name="countryCode"
                  className="py-2 w-1/4 bg-[#F1F1F1] text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="+1">+1 (US)</option>
                  <option value="+91">+91 (India)</option>
                  <option value="+44">+44 (UK)</option>
                </select>
                <input
                  type="text"
                  name="contactNo"
                  placeholder="Contact Number"
                  value={personalInfo.contactNo}
                  onChange={handleChange}
                  className="w-3/4 px-4 py-2 bg-[#F1F1F1] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={personalInfo.dob}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#F1F1F1] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2">Country</label>
              <select
                name="country"
                value={personalInfo.country}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F1F1F1] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Select a country
                </option>
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm mb-2">Nationality</label>
              <select
                name="nationality"
                value={personalInfo.nationality}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F1F1F1] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Select your nationality
                </option>
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-2">City</label>
            <select
              name="city"
              value={personalInfo.city}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#F1F1F1] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select a city
              </option>
              {cities.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.label}
                </option>
              ))}
            </select>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-[#C7161E] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Continue
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Step1;
