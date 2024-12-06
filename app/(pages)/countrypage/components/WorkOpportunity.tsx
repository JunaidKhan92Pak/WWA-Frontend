import React from "react";
import { PiSuitcaseSimpleLight } from "react-icons/pi";

const WorkOpportunity = () => {
  return (
    <div className="mx-auto w-full px-4 pb-20">
      <h3 className="text-center py-10 text-xl sm:text-2xl md:text-3xl font-bold">
        Work Opportunity in United Kingdom
      </h3>

      <div className="flex flex-col md:flex-row gap-5 justify-center">
        {/* Card 1 */}
        <div className="flex flex-col items-center md:items-start w-full md:w-2/5 py-5 text-base sm:text-lg md:text-xl bg-[#F1F1F1] rounded-2xl">
          <div className="p-5">
            <PiSuitcaseSimpleLight className="w-12 h-12 sm:w-16 sm:h-16 mx-auto md:mx-0" />
            <div className="mt-4 text-center md:text-left">
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold">Work while Studying</h4>
              <p className="mt-2">
                International students in the UK on a Student Visa (formerly Tier 4) are
                typically allowed to work part-time during their studies, up to 20 hours per week.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center md:items-start w-full md:w-2/5 py-5 text-base sm:text-lg md:text-xl bg-[#F1F1F1] rounded-2xl">
          <div className="p-5">
            <PiSuitcaseSimpleLight className="w-12 h-12 sm:w-16 sm:h-16 mx-auto md:mx-0" />
            <div className="mt-4 text-center md:text-left">
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold">Post-Study Work Visa</h4>
              <p className="mt-2">
                After earning a bachelor's or master's degree, students are granted a two-year work
                visa. PhD holders are granted a three-year work visa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOpportunity;
