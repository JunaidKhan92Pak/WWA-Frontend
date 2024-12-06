"use client";
import React, { useState, useEffect, useRef } from "react";
import { Bot, Send } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import Navbar from "@/components/Navbar";


const Page = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]); // Chat history
  const [userInput, setUserInput] = useState<{ userPrompt: string }>({ userPrompt: "" }); // User's input
  // const [isLoading, setIsLoading] = useState(false); // Loading state for API call
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload

    if (userInput.userPrompt.trim() === "") {
      alert("Please enter a valid message.");
      return; // Prevent sending empty messages
    }

    // Add user message to chat
    const userMessage = { sender: "user", text: userInput.userPrompt };
    setMessages((prev) => [...prev, userMessage]);

    // setIsLoading(true); // Set loading state before sending API request

    try {
      // Send user input to the API
      const response = await fetch("http://localhost:8080/askAi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Move this out of headers
        body: JSON.stringify(userInput),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch AI response");
      }

      const data = await response.json();
      const aiMessage = { sender: "ai", text: data?.answer || "No response from AI." };

      // Add AI response to the chat
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage = { sender: "ai", text: "Something went wrong. Please try again." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setUserInput({ userPrompt: "" }); // Clear input field
      // setIsLoading(false); // Reset loading state
    }
  };

  useEffect(() => {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

  return (
    // <div className="chat-container bg-gray-100 min-h-screen p-6 flex flex-col items-center">
    //   <div className="chat-box bg-white shadow-md rounded-lg p-4 w-full max-w-md space-y-4">
    //     <div className="chat-history overflow-y-auto max-h-96">
    //       {messages.map((message, index) => (
    //         <div key={index} className={`message mb-2 ${message.sender === "user" ? "text-right" : "text-left"}`}>
    //           <div className={`inline-block px-3 py-2 rounded-md ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
    //             {message.text}
    //           </div>
    //         </div>
    //       ))}
    //       {isLoading && <div className="text-center text-gray-500"><span>ZEUS is Responding...</span></div>}
    //       <div ref={chatEndRef} />
    //     </div>
    //     <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
    //       <input
    //         type="text"
    //         name="userPrompt"
    //         value={userInput.userPrompt}
    //         onChange={handleChange}
    //         placeholder="Type your message..."
    //         className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
    //       />
    //       <button
    //         type="submit"
    //         className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    //         disabled={isLoading} // Disable button when loading
    //       >
    //         Send
    //       </button>
    //     </form>
    //   </div>
    // </div>
    
    // className=" text-white bg-[#FCE7D2]  bg-contain bg-center flex flex-col justify-between items-center"
    // style={{
    //   height: "auto",
    //   minHeight: "100vh",
    //   backgroundImage: "url('/bg-usa.png')",
    //   padding: "39px 0px",
    // }}
  
    <section className="flex flex-col justify-between  items-center  border-4">
    {/* Header Section */}
    <div className="chat-history overflow-y-auto max-h-96 p-4 w-full sm:w-3/5 scroll-mx-0 ">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message mb-2  ${
              message.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block w-[90%] sm:w-[60%] text-left px-3 py-2 rounded-md ${
                message.sender === "user"
                  ? "bg-gray-200 text-black"
                  : "bg-gray-200 text-black"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
    {/* Chat Input */}
    <div className="chat-input rounded-lg md:p-4 flex flex-col items-center gap-3  bg-black text-white w-[90%] md:w-1/2 ">
      

      <form
        onSubmit={handleSendMessage}
        className="flex  space-x-2 w-full  justify-between  "
      >
        <div className="flex w-full items-center">
          <Bot className="h-6 w-6  pl-2" />
          <input
            type="text"
            name="userPrompt"
            value={userInput.userPrompt}
            onChange={handleChange}
            placeholder="Chat with ZEUS..."
            className="flex-1 bg-transparent border-none  focus:outline-none bg-black text-white pl-5 "
          />
          <button type="submit" className="px-4 py-2  text-white rounded-md">
            <Send className="h-5 w-5 text-white cursor-pointer  transition-colors" />
          </button>
        </div>
      </form>
    </div>
    </section>
  );
};

export default Page;
