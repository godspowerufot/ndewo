"use client";

import { motion } from "framer-motion";

import React from "react";

// ✅ Shared animation for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function AboutSections() {
  return (
    <>
      {/* ✅ Our Founder Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // triggers when 20% of section is in view
        className="bg-gray-50 py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8 tracking-wide">
            Our Founder
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
            Digital entrepreneur Motyat 'Tia Taylor' Olatunmbi established Kääbö
            in 2023: a platform that not only welcomes the diaspora but also
            empowers them to contribute to Nigeria's promising trajectory, as
            part of an ambition to make a greater Nigeria.
          </p>

          <p className="text-gray-800 font-medium text-lg">Motyat Olatunmbi</p>
        </div>
      </motion.div>

      {/* ✅ The Kääbö Vision Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-amber-100 py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-amber-900 mb-8 tracking-wide">
            The Kääbö Vision
          </h2>

          <p className="text-amber-800 text-lg leading-relaxed max-w-4xl mx-auto">
            At Kääbö, we envision a Nigeria that stands as a beacon for its
            youth and the global community, redefining Africa's role on the
            world stage. Our mission is to ensure a seamless transition for
            those exploring Nigeria, providing them with the essential tools to
            fully engage with and contribute to the country's development. This
            initiative goes beyond mere experience; it's about empowering
            participants to play a significant role in Nigeria's progress and,
            consequently, in shaping the future of Africa. Our approach is more
            than a welcome; it's a catalyst for involvement in a transformative
            movement that will redefine Nigeria's and Africa's destiny.
          </p>
        </div>
      </motion.div>
    </>
  );
}

const page = () => {
  return (
    <div>
      <header className="relative w-full h-[60vh] md:h-[80vh]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('/path-to-your-image.jpg')`, // Replace with your actual image path
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        {/* Text */}
        <div className="relative z-20 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            Lorem Ipsum
          </h1>
        </div>
      </header>
      <AboutSections />
    </div>
  );
};

export default page;
