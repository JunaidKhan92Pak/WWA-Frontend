"use client";

import React, { useState , useEffect} from "react";
import { FaCircleUser } from "react-icons/fa6";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useAuth } from "../app/(auth)/auth/authProvider";
import { getAuthToken } from "@/authHelper";
const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  // const [user, setUser] = useState(true); // User state to check if logged in
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = useAuth();

  useEffect(() => {
    // Check for authToken in cookies on page load
    const token = getAuthToken();
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);  
  };
  
  return (
    <div className="w-5/6 mx-auto py-3 px-5 shadow-md rounded-xl m-4 bg-white text-black">  {/* Navbar Content */}
      {/* Navbar Main */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Image src="/logo.png" alt="logo" width={113} height={45} />

        {/* Navigation Menu */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-5 text-[14px] items-center">
              <NavigationMenuItem>Study Destination</NavigationMenuItem>
              <NavigationMenuItem>
                Universities
                <NavigationMenuContent>
                  <NavigationMenuLink href="#">Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>Programs</NavigationMenuItem>
              <NavigationMenuItem>Scholarships</NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Conditional Rendering */}
        <div className="flex gap-5">
          {isAuthenticated ? (
            // Profile Dropdown for Logged-in Users
            <div className="relative flex items-center space-x-3 rtl:space-x-reverse">
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded={isDropdownOpen}
                onClick={toggleDropdown}
              >
                <span className="sr-only">Open user menu</span>
                <FaCircleUser className="bg-white text-xl"/>
                {/* <Image
                  className="w-8 h-8 rounded-full"
                  src="/docs/images/people/profile-picture-3.jpg"
                  alt="user photo"
                  width={32}
                  height={32}
                /> */}
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  id="user-dropdown"
                  className="absolute right-1 top-10 z-20 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      { "Bonnie Green"}
                    </span>
                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                      { "name@flowbite.com"}
                    </span>
                  </div>
                  <ul className="py-2">
                    <li>
                      <Link
                        href="/completeprofile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/chatmodel"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Chat with ZEUS
                      </Link>
                    </li>
                    <li>
                      <a
                       
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      onClick={()=>auth.logout()}>
                        Logout
                      </a>
                    </li>
                 
                  </ul>
                </div>
              )}
            </div>
          ) : (
            // Login/Signup Buttons for Guests
            <>
              <Link href="/signin">
                <Button className="text-[14px]" variant="outline">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  className="text-[14px] bg-[#C7161E] text-white"
                  variant="outline"
                >
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
