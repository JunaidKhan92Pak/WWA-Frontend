"use client";
import Image from "next/image";
import logo from "@/public/logo.png";
// import plane from "@/public/plane.png";
// import SigninImage1 from "@/public/SigninImage1.png";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "../auth/authProvider";
import { CiUser } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { IoKeyOutline } from "react-icons/io5";

const Page = () => {
  const router = useRouter();
  const { signupAction } = useAuth(); // Access signupAction

  // Form state and validation errors
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear specific error
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate input fields
    const newErrors = {
      firstName: !formData.firstName ? "First name is required." : "",
      lastName: !formData.lastName ? "Last name is required." : "",
      email: !formData.email
        ? "Email is required."
        : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ? ""
        : "Enter a valid email address.",
      password: !formData.password ? "Password is required." : "",
      confirmPassword:
        formData.password !== formData.confirmPassword
          ? "Passwords do not match."
          : "",
    };

    if (Object.values(newErrors).some((err) => err)) {
      setErrors(newErrors);
      return;
    }
    const res = await signupAction(formData);
    if (res.success) {
      router.push("/home");
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: res.message, // Correct reference of res.message
      }));
    }
  };

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center py-5">
      {/* Sign-up Form Section */}
      <div className="w-full md:w-1/2 pt-5 md:pt-0 px-8 flex flex-col items-center justify-center">
      <Image
        src={logo}
        alt="Logo"
        width={80}
        height={80}
        className="mb-4 w-16 sm:w-24 mx-auto"
      />

        <h3 className="font-bold text-lg sm:text-xl text-center">
          Create an Account!
        </h3>
        <p className="text-gray-600 leading-6 text-center text-sm sm:px-10 mb-2">
          Please provide your information below to begin your learning journey
        </p>

        <form className="" onSubmit={handleSubmit}>
          <div className="flex justify-between">
            <div className="md:mr-2 mr-1 w-full">
              <label className="block text-gray-700 py-2">First Name</label>
              <div className="relative">
                <CiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="firstName"
                  className="w-full p-2 pl-10 border border-gray-300 rounded-lg"
                  placeholder="Enter First Name"
                  onChange={handleChange}
                  value={formData.firstName}
                />
              </div>

              {errors.firstName && (
                <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div className="w-full">
              <label className="block text-gray-700 py-2">Last Name</label>
              <div className="relative">
                <CiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="lastName"
                  className="w-full p-2 pl-10 border border-gray-300 rounded-lg"
                  placeholder="Enter Last Name"
                  onChange={handleChange}
                  value={formData.lastName}
                />
              </div>
              {errors.lastName && (
                <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>
          {/* Email */}
          <div>
            <label className="block text-gray-700 py-2">Email</label>
            <div className="relative">
              <IoMailOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                className="w-full p-2 pl-10 border border-gray-300 rounded-lg"
                placeholder="Enter your Email"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 py-2">Password</label>
            <div className="relative">
              <IoKeyOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                className="w-full p-2 pl-10 border border-gray-300 rounded-lg"
                placeholder="Enter your Password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 py-2">Confirm Password</label>
            <div className="relative">
              <IoKeyOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

              <input
                type="password"
                name="confirmPassword"
                className={`w-full p-2 pl-10 border rounded-lg ${
                  errors.confirmPassword ? "border-red-600" : "border-gray-300"
                }`}
                placeholder="Confirm your Password"
                onChange={handleChange}
                value={formData.confirmPassword}
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-red-600 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-700 text-white p-2 mt-2 rounded"
          >
            Go to my dashboard
          </button>
          <p className="text-[14px] text-center mt-2">
            Already have an account?{" "}
            <Link href="/signup" className="text-[#F0851D]">
              Sign In
            </Link>
          </p>{" "}
        </form>
      </div>

      {/* Image Section */}
      <div className="hidden  md:block">
    <div className="flex items-center justify-center ">
      <Image
        src="/Group.png"
        width={400}
        height={400}
        alt="Decorative"
        className="object-contain h-auto"
      />
    </div>
  </div>
    </div>
  );
};

export default Page;
