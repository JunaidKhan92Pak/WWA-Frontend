"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Bot, Send } from "lucide-react";

const Page = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [userInput, setUserInput] = useState<string>("");

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userInput.trim()) return;

    const newMessage = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, newMessage]);

    try {
      const response = await fetch("http://localhost:8080/askai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: userInput }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch AI response");
      }

      const data = await response.json();
      const aiMessage = { sender: "ai", text: data.response };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage = {
        sender: "ai",
        text: "Something went wrong. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setUserInput("");
    }
  };

  return (
    <section
      className=" text-white bg-[#FCE7D2] bg-cover bg-center flex flex-col justify-between items-center"
      style={{
        height: "auto",
        minHeight: "100vh",
        backgroundImage: "url('/zues-input-bg.png')",
        padding: "39px 20px",
      }}
    >
      {/* Header Section */}
      <header className="w-full border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="WWAH Logo" width={120} height={40} />
          </Link>
          <Button variant="default">Login</Button>
        </div>
      </header>
      {/* Chat Input */}
      <div className="chat-input rounded-lg p-4 flex items-center gap-3  bg-white text-black w-[90%] md:w-1/2 ">
        <div className="chat-history overflow-y-auto max-h-96">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message mb-2 ${
                message.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block px-3 py-2 rounded-md ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSendMessage}
          className="flex  space-x-2 w-full  justify-between "
        >
          <div className="flex w-full items-center">
            <Bot className="h-6 w-6 " />
            <input
              type="text"
              placeholder="Chat with Zeus..."
              className="flex-1 bg-transparent border-none  focus:outline-none bg-white text-black px-5 "
            />
            <button type="submit" className="px-4 py-2  text-white rounded-md">
              <Send className="h-5 w-5 text-black cursor-pointer  transition-colors" />
            </button>
          </div>
        </form>
      </div>
      </section>
  );
};

export default Page;