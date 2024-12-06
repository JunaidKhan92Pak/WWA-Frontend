import React from "react";
// import Navbar from "../../../components/Navbar";
import Hero from "./components/Hero";
import StudyInUs from "./components/StudyInUk";
import WorkOpportunity from "./components/WorkOpportunity";
import PermanentResidency from "./components/PermanentResidency";
import PopularPrograms from "./components/PopularPrograms";
// import MobileNavbar from "@/components/MobileNavbar";
const Countrypage = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto">
        <Hero />
      </div>
      <StudyInUs />
      <WorkOpportunity />
      <PermanentResidency />
      <PopularPrograms />
    </div>
  );
};

export default Countrypage;
