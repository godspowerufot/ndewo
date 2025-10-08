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
        viewport={{ once: true, amount: 0.2 }}
        className="bg-gray-50 py-20 px-4"
      >
        <div className="max-w-4xl mx-auto  font-clash text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8 tracking-wide">
            Our Mission
          </h2>

          <p className="text-gray-700 font-exodus text-xl leading-relaxed mb-6 max-w-3xl mx-auto">
            To curate experiences that transform Nigeria from a destination into
            a feeling—memorable, warm, and worth sharing.
          </p>
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
            Our Vision
          </h2>

          <p className="text-amber-800  font-exodus text-xl leading-relaxed max-w-3xl mx-auto">
            To become the gateway where first-time visitors and locals alike
            discover a Nigeria that feels alive, welcoming, and worth returning
            to.{" "}
          </p>
        </div>
      </motion.div>

      {/* ✅ Mission Section */}
    </>
  );
}

const Page = () => {
  return (
    <div>
      <header className="relative w-full h-[60vh] md:h-[80vh]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('/heritage.jpg')`,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0  bg-[#00000063] bg-opacity-50 z-10"></div>

        {/* Text */}
        <div className="relative z-20 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            About Ndewo
          </h1>
        </div>
      </header>
      <AboutSections />
    </div>
  );
};

export default Page;
