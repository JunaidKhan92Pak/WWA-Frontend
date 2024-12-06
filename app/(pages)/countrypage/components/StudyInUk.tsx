"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const StudyInUk = () => {
  const sliderArray = ["/img1.png", "/img2.png", "/img3.png", "/img4.png"];

  return (
    <>
      {/* Introduction Section */}
      <div className="text-center w-4/6 mx-auto py-36">
        <h2 className="font-extrabold py-4">Why Study In United Kingdom!</h2>
        <p className="text-[18px] leading-6">
          Studying in the United Kingdom offers a wealth of advantages that make
          it an attractive destination for international students. The UK is
          home to world-class universities renowned for their high academic
          standards and cutting-edge research. Students can experience a rich
          blend of cultures, as campuses are filled with individuals from
          around the globe, fostering an inclusive environment. Many UK degree
          programs, especially at the postgraduate level, are shorter in
          duration than those in other countries. Read more...
        </p>
      </div>

      {/* Carousel Section */}
      <section
        className="relative flex justify-center items-center text-center text-white bg-5 bg-black bg-cover bg-center h-[80vh]"
        style={{
          backgroundImage: "url('/bg-usa.png')",
        }}
      >
          <div className="absolute inset-0 bg-black opacity-90 z-0"></div>

          <div className="relative z-10 w-full px-6">
    <h2 className="mb-8 text-2xl font-bold">
      Popular Cities in United Kingdom
    </h2>

          <Swiper
            spaceBetween={20} // Spacing between slides
            slidesPerView={2} // Show 2 slides at a time
            loop // Enable infinite scrolling
            breakpoints={{
              640: { slidesPerView: 1 }, // 1 slide for small screens
              1024: { slidesPerView: 3 }, // 3 slides for larger screens
            }}
          >
            {sliderArray.map((imgSrc, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <img
                  src={imgSrc}
                  alt={`Slide ${index + 1}`}
                  className="rounded-lg shadow-lg w-[80%] h-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default StudyInUk;
