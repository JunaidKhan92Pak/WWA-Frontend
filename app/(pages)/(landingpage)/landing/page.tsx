"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Bot, Headphones, Trophy, Users, Send } from "lucide-react";

function Page() {
  const universities = [
    {
      name: "Massey University",
      location: "New Zealand",
      image: "/university-1.png",
      acceptance: "70%",
      logo: "/massey-logo.png",
    },
    {
      name: "Massey University",
      location: "New Zealand",
      image: "/university-2.png",
      acceptance: "70%",
      logo: "/massey-logo.png",
    },
    {
      name: "Massey University",
      location: "New Zealand",
      image: "/university-3.png",
      acceptance: "70%",
      logo: "/massey-logo.png",
    },
  ];

  const features = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI powered platform",
      description:
        "Our state-of-the-art, AI platform simplifies the admission process. For assessing your eligibility to matching you with suitable programs, our technology ensures a smooth and efficient application experience.",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Comprehensive support services",
      description:
        "Our support goes beyond admissions. We offer a full suite of services including test preparation, application assistance, scholarship guidance, and pre-departure orientations.",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Success stories and proven track record",
      description:
        "Through many years of dedicated guidance, we've curated a gallery of study abroad success stories, where every destination is a masterpiece tailored to student ambitions.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Commitment to your future",
      description:
        "At WWAH, we are committed to your long-term success. Our career counseling support ensure that you're not only prepared for your studies but also equipped for a successful career.",
    },
  ];
  return (
    // landing page container starts
    <div className="landingPage">
      <div className="landingPageBg bg-custom-gradient w-full flex flex-col justify-center items-center">
        {/* header section starts */}
        {/* <header className="w-full border-b">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="WWAH Logo" width={120} height={40} />
            </Link>
            <Button variant="default">Login</Button>
          </div>
        </header> */}
        {/* header section ends */}

        {/* Hero Section Start */}
        <section className="HeroSection min-h-screen relative overflow-hidden flex flex-row justify-center lg:justify-between my-6 w-[90%]">
          {/* hero Section Left Side starts */}
          <div className="HeroLeftSection">
            {/* Hero Content */}
            <div className="hero-content space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Hello! <span className=" italic">Zeus</span> Here!
                <br />
                How can I Help You?
              </h1>

              {/* Chat Input */}
              <div className="chat-input rounded-lg p-4 flex items-center gap-3 bg-white bg-opacity-30">
                <Bot className="h-6 w-6 text-white/80" />
                <input
                  type="text"
                  placeholder="Chat with Zeus..."
                  className="flex-1 bg-transparent border-none  focus:outline-none text-white placeholder:text-white/60 "
                />
                <Send className="h-5 w-5 text-white/80 cursor-pointer hover:text-white transition-colors" />
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  {
                    text: "Find Countries",
                    imageUrl: "/Earth--Streamline-Solar-Broken.png",
                  },
                  {
                    text: "Find Universities",
                    imageUrl: "/Map-Point-School--Streamline-Solar-Broken.png",
                  },
                  {
                    text: "Find Scholarships",
                    imageUrl:
                      "/Square-Academic-Cap--Streamline-Solar-Broken.png",
                  },
                  {
                    text: "Find Courses",
                    imageUrl:
                      "/Notebook-Minimalistic--Streamline-Solar-Broken.png",
                  },
                ].map((item, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    className="custom-button bg-white bg-opacity-30 text-white"
                  >
                    <Image
                      src={item.imageUrl}
                      alt="icon"
                      width={15}
                      height={15}
                    />
                    <span>{item.text}</span>
                  </Button>
                ))}
              </div>
              {/* horizontal dotted line */}
              <div className="border-t border-dotted border-white mb-4"></div>

              {/* Students Uni Scholarship Section */}

              <div className="StudentsUniScholarship flex flex-col md:flex-row text-white justify-between">
                <div className="student flex flex-col  md:border-r border-dotted border-white mb-4 md:mr-4 pb-6 md:pr-6">
                  <h2>400k+</h2>
                  <p>Worldwide Students</p>
                </div>
                <div className="uni flex flex-col  md:border-r border-dotted border-white  mb-4 md:mr-4 pb-6 md:pr-6">
                  <h2>1000+</h2>
                  <p>Worldwide Universities</p>
                </div>
                <div className="scholarships flex flex-col">
                  <h2>1000+</h2>
                  <p>Free Scholarships</p>
                </div>
              </div>
            </div>
          </div>
          {/* hero Section Left Side ends */}

          {/* hero Section Right Side starts */}
          <div className="HeroRightSide relative h-[600px] hidden lg:block">
            <Image src="/Hero_Robot.png" alt="Robot" width={499} height={633} />
          </div>
          {/* hero Section Right Side Ends */}
        </section>
        {/* Hero Section Ends */}
      </div>
      {/* // landing page container ends */}

      {/* Top Universities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Top Universities!</h2>
            <Badge variant="outline" className="px-4 py-2 bg-[#F1F1F1]">
              <Image
                src="/VectorPk.png"
                alt="Pakistan"
                width={18}
                height={18}
              />
              Pakistan
            </Badge>
          </div>

          {/* University Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((uni, index) => (
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg"
              >
                {/* University Image */}
                <div className="relative h-48">
                  <Image
                    src={uni.image}
                    alt={uni.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* University Logo Overlay */}
                  <div className="absolute bottom-4 left-4 bg-white rounded-full p-2 shadow-md">
                    <Image
                      src={uni.logo}
                      alt={`${uni.name} logo`}
                      width={40}
                      height={40}
                    />
                  </div>
                </div>

                {/* University Details */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{uni.name}</h3>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span>{uni.location}</span>
                    </div>
                    <span>Public</span>
                    <span>Acceptance Rate: {uni.acceptance}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose WWAH?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-[#FCE7D2]">
                <div className="mb-4 text-primary">{feature.icon}</div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="flex justify-between items-center  bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">WWAH Mobile App:</h2>
              <p className="mb-8">
                Study Abroad dreams made simple: Just Download WWAH app, Upload
                & Travel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-black h-[3.5rem] text-left"
                >
                  <Image
                    src="/google-play.png"
                    alt="Get it on Google Play"
                    width={18}
                    height={14}
                  />
                  <p className="px-2 py-6">Get it on <br /> Google Play</p>
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-black h-[3.5rem] text-left"
                >
                  <Image
                    src="/app-store.png"
                    alt="Download on App Store"
                    width={18}
                    height={14}
                  />
                <p className="px-2 py-6">Download on the <br /> App Store</p>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/mobile-app.png"
                alt="WWAH Mobile App"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <div><h1>Footer</h1></div>
    </div>
  );
}

export default Page;
