"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Step3 = () => {
  const router=useRouter();
  const [englishProficiency, setEnglishProficiency] = useState({
    proficiencyLevel: "",
    proficiencyTest: "",
    proficiencyTestScore: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEnglishProficiency({ ...englishProficiency, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8080/updateprofile/english-proficiency",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(englishProficiency),
        }
      );
      const res = await response.json();
      console.log(res);
      router.push("/completeprofile/studentpreference")
    } catch (error) {
      console.error(`There was an error: ${error}`);
    }
  };

  return (
    <div>
      <section>
        <form
          onSubmit={handleSubmit}
          className="mx-auto p-8 bg-white rounded-md space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                What is your English Proficiency level?
              </label>
              <select
                id="proficiencyLevel"
                name="proficiencyLevel"
                value={englishProficiency.proficiencyLevel}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F1F1F1] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="native speaker">Native Speaker</option>
                <option value="test">Completed a test</option>
                <option value="willingToTest">Willing to take a test</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Which English Proficiency test have you taken?
              </label>
              <select
                id="proficiencyTest"
                name="proficiencyTest"
                value={englishProficiency.proficiencyTest}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F1F1F1] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="ielts">IELTS</option>
                <option value="pte">PTE</option>
                <option value="toefl">TOEFL</option>
                <option value="languageCert">Language Cert</option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Obtained scores
              </label>
              <input
                type="text"
                name="proficiencyTestScore"
                value={englishProficiency.proficiencyTestScore}
                onChange={handleChange}
                placeholder="Write..."
                className="w-full bg-[#F1F1F1] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-700"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-2 bg-[#C7161E] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Continue
            </button>
            <p className="py-3 text-[12px]">
              Already have an account?{" "}
              <a className="text-[#F0851D]" href="/signin">
                Sign In
              </a>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Step3;
