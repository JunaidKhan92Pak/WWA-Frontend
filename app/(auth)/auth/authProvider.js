"use client";
import React, { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
// Create Auth Context
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const router = useRouter();

  // Login function
  const loginAction = async (userData) => {
    try {
      const res = await fetch(`https://wwa-bk.vercel.app/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const loggedInUser = await res.json();
      if (loggedInUser.success) {
        document.cookie = `authToken=${loggedInUser.token}; path=/`
        setToken(loggedInUser.token)
      }
      return loggedInUser;
    } catch (err) {
      console.error("Login error", err);
    }
  };

  // Signup function
  const signupAction = async (userData) => {
    try {
      const response = await fetch(`https://wwa-bk.vercel.app/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const res = await response.json();
      if (!response.ok || !res.signup) {
        return { success: false, message: res.message || "Sign-up failed." };
      }
      setUser(res.user);
      return { success: true };
    } catch (err) {
      console.error("Signup error", err);
      return { success: false, message: "An error occurred during sign-up." };
    }
  };

  // Forget Password function
 // Centralized base URL

  const forgetAction = async (email) => {
    try {
      const response = await fetch(`https://wwa-bk.vercel.app/forgotpassword`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
        credentials: "include",
      });
  
      if (!response.ok) {
        // Handle HTTP errors
        const errorRes = await response.json();
        console.error(`Error ${response.status}: ${errorRes.message || "Unknown error"}`);
        return { success: false, message: errorRes.message || "Failed to process request." };
      }
  
      // Parse and return successful response
      const forgotRes = await response.json();
      return forgotRes;
  
    } catch (error) {
      // Handle network or unexpected errors
      console.error("Network or server error in forgetAction:", error);
      return { success: false, message: "An unexpected error occurred. Please try again later." };
    }
  };
  

  const verifyOtpAction = async (enteredOtp) => {
    try {
      const response = await fetch("https://wwa-bk.vercel.app/verifyOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ enteredOtp }),
        credentials: "include",
      });
      const verifyRes = await response.json();
      return verifyRes;
    } catch (error) {
      console.error("Error during OTP verification:", error);

    }
  };
  
  const resetPasswordAction = async (newPassword) => {
    try {
      const response = await fetch("https://wwa-bk.vercel.app/resetpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newPassword }),
        credentials: "include",
      });
  
      // Check if the response was successful
      if (!response.ok) {
        throw new Error("Failed to reset password");
      }
  
      const data = await response.json();
      console.log(data); // For debugging purposes, remove this in production
      return data; // Return data to handle in handleSubmit
    } catch (error) {
      console.error("Error during password reset:", error);
      throw new Error("Something went wrong. Please try again later.");
    }
  };
  


  // Logout function
  const logout = async () => {
    console.log("Logging out...");
  
    try {
      // Send logout request to your API to handle server-side logout
      const response = await fetch('https://wwa-bk.vercel.app/logout', {
        method: "GET", // Or POST if preferred
        headers: {
          // Add any headers if required (e.g., for JWT token or content-type)
          "Content-Type": "application/json",
        },
      });
  
      // Ensure response is OK (status 200)
      if (!response.ok) {
        throw new Error("Failed to log out");
      }
  
      // Optionally, handle any response data if needed (e.g., success message)
      const res = await response.json();
      console.log("Logout successful:", res);
  
      // Remove the authToken cookie from client-side (clear the cookie)
      document.cookie = "authToken=; max-age=0; path=/"; // Clears the cookie
      router.push('/')
      // Redirect user to a public page (e.g., /signin)
      
    } catch (error) {
      console.log(`There was an error during logout: ${error}`);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loginAction,
        signupAction,
        forgetAction,
        verifyOtpAction,
        resetPasswordAction,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook to use Auth Context
export const useAuth = () => {
  return useContext(AuthContext);
};
