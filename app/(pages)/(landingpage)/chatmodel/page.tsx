"use client";
import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
import Image from "next/image";
// import Link from "next/link";
import { Bot, Send } from "lucide-react";

const Page = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [userInput, setUserInput] = useState({ userPrompt: "" });

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.userPrompt.trim()) return;

    const newMessage = { sender: "user", text: userInput.userPrompt };
    setMessages((prev) => [...prev, newMessage]);
    console.log(userInput);

    try {
      const response = await fetch("https://wwa-bk.vercel.app/askai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ userPrompt: userInput.userPrompt }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch AI response");
      }

      const data = await response.json();
      const aiMessage = { sender: "ai", text: data.answer };
      console.log(data);

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage = {
        sender: "ai",
        text: "Something went wrong. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setUserInput({ userPrompt: "" });
    }
  };

  return (
    <section className="text-white flex flex-col justify-between items-center">
      {/* Header Section */}
      {/* <header className="w-full border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="WWAH Logo" width={120} height={40} />
          </Link>
          <Button className="bg-red-700" variant="default">
            Login
          </Button>
        </div>
      </header> */}

      {/* Chat Section */}
      <div className="chat-input fixed bottom-0 left-2 sm:left-10 lg:left-80 right-2 sm:right-10 lg:right-80 p-4 bg-white/80 backdrop-blur-sm rounded-lg border-t-2 border-l-2 border-r-2">
        {/* Input Form */}
        <form
          onSubmit={handleSendMessage}
          className="flex space-x-2 w-full justify-between"
        >
          <div className="flex w-full items-center">
            <Image src="/chatRobot.png" alt="icon" width={15} height={15} />
            <Bot className="h-6 w-6" />
            <input
              type="text"
              placeholder="Chat with Zeus..."
              className="flex-1 bg-transparent border-none focus:outline-none bg-white text-black px-5"
              value={userInput.userPrompt}
              onChange={(e) => setUserInput({ userPrompt: e.target.value })}
            />
            <button type="submit" className="px-4 py-2 text-white  rounded-md">
              <Send className="h-5 w-5 text-black cursor-pointer transition-colors" />
            </button>
          </div>
        </form>
      </div>
      {/* Chat History */}
      <div
        className="chat-history mx-auto flex flex-col gap-4 p-4 h-[78vh] w-full max-w-6xl overflow-y-auto "
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`inline-block px-4 py-3 rounded-lg max-w-xs sm:max-w-md lg:max-w-lg ${
                message.sender === "user"
                  ? "bg-blue-500 text-white text-right"
                  : "bg-gray-300 text-black text-left"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
