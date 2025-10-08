"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PastExperiences = () => {
  const images = ["/experience.jpg", "/heritage.jpg", "/safari.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="flex flex-col md:flex-row min-h-screen bg-[#f6edda]">
      {/* Sticky Left Side with Carousel */}
      <div className="w-full relative md:w-1/2 h-[60vh] md:h-auto top-0 left-0 z-10 flex flex-col justify-between overflow-hidden">
        {/* Image Slides */}
        <div className="relative w-full h-full">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out`}
              style={{
                opacity: currentIndex === index ? 1 : 0,
              }}
            >
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 py-3 absolute left-1/2 -translate-x-1/2 bottom-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition ${
                currentIndex === index ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Scrollable Section */}
      <div className="w-full md:w-1/2 px-6 py-12 space-y-12 text-[#5a2f1f]">
        {/* Heading animates first */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl  font-clash md:text-5xl  font-semibold text-center"
        >
          Past Experiences
        </motion.h2>

        {/* Testimonial Text animates after heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto  font-exodus text-center italic text-lg space-y-4"
        >
          <p>
            &quot;My experience with ndewo was transformative to say the least.
            Every day was a new adventure – we met the most inspiring
            entrepreneurs, I learned about so many different sectors...&quot;
          </p>
          <p>
            &quot;...and of course I can’t leave out how much amazing Nigerian
            food we ate. ndewo bridges the gap between business and cultural
            exploration, making it a must for anyone...&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PastExperiences;
