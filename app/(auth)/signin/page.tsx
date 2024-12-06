"use client";
import Image from "next/image";
import logo from "@/public/logo.png";
// import plane from "@/public/plane.png";
// import SigninImage1 from "@/public/SigninImage1.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { IoMailOutline, IoKeyOutline } from "react-icons/io5";
import { useAuth } from "../auth/authProvider";

const Page = () => {
  const router = useRouter();
  const { loginAction } = useAuth(); // Get login function from context

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [generalError, setGeneralError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setGeneralError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      setGeneralError("Please fill in all fields.");
      return;
    } else {
      try {
        const loginres = await loginAction(userData);
        if (loginres.success) {
          router.push("/");
        } else {
          setGeneralError("Invalid email or password");
        }
      } catch (err) {
        setGeneralError("Login failed, please try again.");
        console.error("Login failed", err);
      }
    }
  };

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center py-5">
    {/* Form Section */}
    <div className="w-full md:w-1/2 pt-5 md:pt-0 px-8 flex flex-col items-center justify-center">
      <Image
        src={logo}
        alt="Logo"
        width={80}
        height={80}
        className="mb-4 w-16 sm:w-24 mx-auto"
      />
  
      <h3 className="font-bold text-lg sm:text-xl text-center">Welcome back</h3>
      <p className="text-gray-600 w-4/5 text-sm sm:text-base leading-5 text-center sm:px-8 mb-4">
        Achieve your study dreams in your ideal country with global support
        from Admission Hub.
      </p>
      {generalError && (
        <p className="text-red-500 text-center font-semibold mb-4">
          {generalError}
        </p>
      )}
      <form className="space-y-4 w-full sm:w-4/5 lg:w-3/4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 text-sm mb-1">Email Address</label>
          <div className="relative">
            <IoMailOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              className={`w-full pl-10 pr-2 py-2 border ${
                errors.email || generalError ? "border-red-600" : "border-gray-300"
              } rounded`}
              placeholder="Enter your email address"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-sm mb-1">Password</label>
          <div className="relative">
            <IoKeyOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              className={`w-full pl-10 pr-2 py-2 border ${
                errors.password || generalError ? "border-red-600" : "border-gray-300"
              } rounded`}
              placeholder="Enter your password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </div>
        </div>
  
        <div className="flex justify-between items-center text-xs sm:text-sm text-gray-600">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Remember me</span>
          </div>
          <Link href="/forget" className="text-red-400">
            Forget password?
          </Link>
        </div>
  
        <div className="flex items-center text-center text-gray-500 my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <button
          type="submit"
          className="w-full bg-red-700 text-white p-2 rounded"
        >
          Sign In
        </button>
        <p className="text-xs sm:text-sm text-center">
          Dont have an account?{" "}
          <Link href="/signup" className="text-[#F0851D]">
            Register
          </Link>
        </p>
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
