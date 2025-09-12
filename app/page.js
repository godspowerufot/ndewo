"use client";
// components/ContactForm.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import PastExperiences from "./component/ui/pastexperience";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted! Check console for data.");
    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      className="bg-[#f6edda] w-full relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/wallpaper.jpg')`, // ✅ Add your background image here
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Form container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 p-8 my-8 bg-white h-fit md:p-12  backdrop-blur-md text-black rounded-xl max-w-3xl w-full mx-4 shadow-xl"
      >
        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-center text-[#2e2f1f] drop-shadow-sm">
          Start Your Journey
        </h1>
        <p className="text-lg mb-8 text-center text-gray-700">
          We don&apos;t just take you home, we get you up and running.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full p-4 text-lg bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 shadow-sm transition-all"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-4 text-lg bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 shadow-sm transition-all"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="6"
              className="w-full p-4 text-lg bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 shadow-sm transition-all resize-y"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-green-700 text-white hover:bg-green-800 font-semibold py-4 px-6 rounded-md text-lg shadow-md transition-all"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <main>
        <header className="relative w-full h-[60vh] md:h-[80vh]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url('/safari.jpg')`, // Replace with your actual image path
            }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#00000063] bg-opacity-50 z-10"></div>

          {/* Text */}
          <div className="relative z-20 flex items-center justify-center flex-col h-full">
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-white text-4xl md:text-8xl font-bold text-center"
            >
              Welcome to Ndewo Africa
            </motion.h1>

            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="text-white text-2xl md:text-3xl mt-4 text-center"
            >
              Your Gateway to Authentic African Experience
            </motion.h2>
          </div>
        </header>

        {/* herpotext */}

        <section className="bg-white py-16 px-4 md:px-20 text-center text-[#343616]">
          <div className="text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif font-medium mb-6"
            >
              Ndewo Africa
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto mb-6 text-lg md:text-xl"
            >
              <strong>A</strong>, modern travel concierge and cultural immersion
              brand rooted in authenticity, local connection, and unforgettable
              discovery.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto mb-6 text-base md:text-lg"
            >
              Whether you&apos;re exploring for the first time or returning to
              reconnect, we design experiences that bring you closer to the
              heart of Nigeria—and beyond.
            </motion.p>
          </div>
        </section>
        <PastExperiences />
        <ContactForm />
      </main>
    </>
  );
}
