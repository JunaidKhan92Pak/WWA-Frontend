import type { Metadata } from "next";

import { AuthProvider } from "../(auth)/auth/authProvider";
import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";



export const metadata: Metadata = {
  title: "World Wide Admission",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      
        <MobileNavbar />
        <div className="hidden md:block m-4">
          <Navbar/>
        </div>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}