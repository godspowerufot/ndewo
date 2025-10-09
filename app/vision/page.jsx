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
        className="bg-amber-100 py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-clash md:text-5xl font-light text-amber-900 mb-8 tracking-wide">
            Our Founder
          </h2>

          <p className="text-amber-800 text-center  font-exodus text-lg leading-relaxed max-w-5xl mx-auto">
            Faith Azike a lawyer, digital entrepreneur, and visionary — founded
            Ndewo Africa to redefine the way people experience Nigeria. Having
            always been a connector and lover of people, Faith saw the need to
            create more meaningful ways for travelers to see Nigeria beyond the
            usual. Her goal wasn’t just to showcase places, but to design
            experiences that reflect each traveler’s personality, energy, and
            sense of adventure. Through Ndewo Africa, she’s building a bridge
            connecting the world to Nigeria’s warmth, culture, and soul, one
            curated experience at a time.
          </p>
          <span className="flex flex-col mt-4 ">
            <p className="text-amber-800  font-bold font-exodus text-xl leading-relaxed max-w-3xl mx-auto">
              Faith Azike
            </p>
            <p className="text-amber-800  font-exodus text-xl leading-relaxed max-w-3xl mx-auto">
              Founder & CEO, Ndewo Africa
            </p>
          </span>
        </div>
      </motion.div>
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

          <p className="text-gray-700 font-exodus text-base leading-relaxed mb-6 max-w-3xl mx-auto">
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
          <h2 className="text-4xl font-clash md:text-5xl font-light text-amber-900 mb-8 tracking-wide">
            The Ndewo Vision
          </h2>

          <p className="text-amber-800 text-center  font-exodus text-base leading-relaxed max-w-5xl mx-auto">
            At Ndewo Africa, we believe travel should feel personal an
            experience that speaks to who you are as much as where you go. Our
            vision is to make Nigeria not just a destination, but an experience
            that stays with you safe, curated, and deeply connected to the
            people and culture that make it special. We’re building a future
            where travelers can explore Nigeria through personalized
            itineraries, authentic local experiences, and carefully sourced
            keepsakes that carry a piece of the country’s story home. Beyond
            tourism, Ndewo Africa is a platform for cultural exchange, economic
            growth, and empowerment celebrating Nigeria’s creativity,
            hospitality, and heritage while creating opportunities for local
            communities to thrive.
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
          <h1
            data-aos="zoom-in"
            className="text-white text-4xl md:text-6xl  font-clash font-bold text-center"
          >
            About Ndewo
          </h1>
        </div>
      </header>
      <AboutSections />
    </div>
  );
};

export default Page;
