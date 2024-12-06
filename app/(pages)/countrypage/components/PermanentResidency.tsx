import React from "react";
import Image from "next/image";

const PermanentResidency = () => {
  return (
    <section
    className="relative flex flex-col lg:flex-row items-center text-white bg-black bg-cover bg-center h-auto lg:h-[80vh] p-6"
    style={{
      backgroundImage: "url('/bg-usa.png')",
    }}
  >
    {/* Black Overlay */}
    <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
  
    {/* Content Section (50%) */}
    <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center space-y-4 px-4 text-center lg:text-left">
      <h5 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
        How to Get Permanent Residency in the United Kingdom as an International Student?
      </h5>
      <div className="text-[#9D9D9D] space-y-3">
        <p className="text-sm md:text-base leading-relaxed">
          Start with a UK Student Visa: As an international student, you begin by
          obtaining a Student Visa (known as the Tier 4 Visa). This visa allows
          you to study and work part-time in the UK while pursuing your education.
        </p>
        <p className="text-sm md:text-base leading-relaxed">
          Complete Your Studies: Successfully finish your degree program at a UK
          university. The degree level (undergraduate, postgraduate, or PhD)
          determines your next visa options.
        </p>
        <p className="text-sm md:text-base leading-relaxed">
          After graduating, you can apply for the Graduate Visa, which allows you
          to stay in the UK for up to 2 years (3 years for PhD graduates) to work
          or look for a job. During this period, you can switch to a work visa if
          you secure an eligible job.
        </p>
        <p className="font-semibold text-sm md:text-base">Read more...</p>
      </div>
    </div>
  
    {/* Image Section (50%) */}
    <div className="relative z-10 w-full lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0">
      <Image
        src="/sideimg.png" // Ensure the image is in the `public` folder
        alt="Side Image"
        width="600"
        height="600"
        className="rounded-lg shadow-lg object-cover w-[90%] sm:w-[80%] md:w-[70%] lg:w-full max-w-[600px]"
        />
    </div>
  </section>
  
  );
};

export default PermanentResidency;
