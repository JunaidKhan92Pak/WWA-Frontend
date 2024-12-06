"use client";
// import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Step4 = () => {
  // const router=useRouter();
  const [formData, setFormData] = useState({
    degreeLevel: "",
    fieldOfStudy: "",
    perferredCountry: "",
    perferredCity: "",
    studyBudget: "",
    studyMode: "",
  });

  // Handle input change for controlled form
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission and API call
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch(
        "http://localhost:8080/updateprofile/userPreference",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      const res = await response.json();
      console.log(res);
      // router.push("/completeprofile/studentpreference");

      if (response.ok) {
        alert("Form submitted successfully");
      } else {
        alert("Error submitting form: " + res.message);
      }
    } catch (error) {
      console.error(`There was an error: ${error}`);
      alert("There was an error with the submission.");
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
              <label
                htmlFor="preferredCountry"
                className="block text-gray-700 text-sm mb-2"
              >
                What is your preferred country for studying abroad?
              </label>
              <select
                id="perferredCountry"
                name="perferredCountry"
                value={formData.perferredCountry}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F1F1F1] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="USA">United States</option>
                <option value="China">China</option>
                <option value="Australia">Australia</option>
                <option value="Italy">Italy</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Germany">Germany</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Ireland">Ireland</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Denmark">Denmark</option>
                <option value="France">France</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="preferredCity"
                className="block text-gray-700 text-sm mb-2"
              >
                What is your preferred city?
              </label>
              <input
                type="text"
                id="perferredCity"
                name="perferredCity"
                value={formData.perferredCity}
                onChange={handleChange}
                placeholder="Write"
                className="w-full placeholder-gray-700 bg-[#F1F1F1] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="degreeLevel"
                className="block text-gray-700 text-sm mb-2"
              >
                Which degree level are you interested in?
              </label>
              <select
                id="degreeLevel"
                name="degreeLevel"
                value={formData.degreeLevel}
                onChange={handleChange}
                className="w-full text-[12px] px-4 py-3 bg-[#F1F1F1] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="foundation">Foundation</option>
                <option value="bachelor">Bachelor</option>
                <option value="preMaster">Pre Master</option>
                <option value="master">Master</option>
                <option value="phd">PhD</option>
                <option value="diploma">Diploma</option>
                <option value="certificate">Certificate</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="fieldOfStudy"
                className="block text-gray-700 text-sm mb-2"
              >
                Which field of study would you like to pursue?
              </label>
              <input
                type="text"
                id="fieldOfStudy"
                name="fieldOfStudy"
                value={formData.fieldOfStudy}
                onChange={handleChange}
                placeholder="Write..."
                className="w-full placeholder-gray-700 bg-[#F1F1F1] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="studyBudget"
                className="block text-gray-700 text-sm mb-2"
              >
                What is your preferred study budget for studying abroad?
              </label>
              <input
                type="text"
                id="studyBudget"
                name="studyBudget"
                value={formData.studyBudget}
                onChange={handleChange}
                placeholder="Write..."
                className="w-full placeholder-gray-700 bg-[#F1F1F1] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="studyMode"
                className="block text-gray-700 text-sm mb-2"
              >
                Which study mode would you prefer?
              </label>
              <select
                id="studyMode"
                name="studyMode"
                value={formData.studyMode}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F1F1F1] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="onCampus">On Campus</option>
                <option value="online">Online</option>
                <option value="blended">Blended</option>
              </select>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full text-[14px] py-2 bg-[#C7161E] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Create my Account
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

export default Step4;
