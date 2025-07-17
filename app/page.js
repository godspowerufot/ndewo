"use client";
// components/ContactForm.jsx

import React, { useState } from "react";

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
    <div className="bg-[#f6edda] w-full relative flex items-center justify-center min-h-screen bg-cover bg-center">
      {/* Form container with white background and black text */}
      <div className="relative z-10 p-8 md:p-12 bg-white text-black rounded-lg max-w-xl w-full mx-4 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-center">
          Start Your Journey
        </h1>
        <p className="text-lg mb-8 text-center">
          We don't just take you home, we get you up and running.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="sr-only">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-4 text-lg bg-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 text-black placeholder-gray-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-4 text-lg bg-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 text-black placeholder-gray-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="6"
              className="w-full p-4 text-lg bg-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 text-black placeholder-gray-500 resize-y"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full border border-green-700 text-green-700 hover:bg-green-100 font-semibold py-4 px-6 rounded-md text-lg transition duration-300 ease-in-out"
          >
            Send
          </button>
        </form>
      </div>

      {/* Accessibility Icon */}
      <div className="absolute top-4 right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg cursor-pointer">
        <span className="text-2xl font-bold">♀</span>
      </div>
    </div>
  );
};

export const HeroText = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20 text-center text-[#343616]">
      <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">
        Nigeria like you have never seen it
      </h1>

      <p className="max-w-3xl mx-auto mb-6 text-lg md:text-xl">
        <strong>Káàbò</strong>, meaning ‘you are welcome’ in Yorùbá, is a
        premier travel consulting and concierge service that{" "}
        <strong className="font-semibold">
          offers personalized, immersive experiences of Nigeria for travelers
          from all walks of life
        </strong>
        .
      </p>

      <p className="max-w-3xl mx-auto mb-6 text-base md:text-lg">
        We work closely with you to understand your interests and preferences,
        using this insight to develop a bespoke program tailored specifically to
        your group. Over the course of your stay, you’ll experience Nigeria’s
        culture, industries, and heritage. From accommodations, transportation,
        and meals to exclusive access to events and local industry leaders,{" "}
        <strong className="font-semibold">
          every detail is handled seamlessly by the Káàbò team
        </strong>
        .
      </p>

      <p className="max-w-3xl mx-auto text-base md:text-lg">
        Our all-inclusive packages ensure that by the time you leave, you’ll not
        only have unforgettable memories but also the confidence and to navigate
        and explore Nigeria on your own for future visits.{" "}
        <strong className="font-semibold">
          Káàbò opens the doors to a Nigeria you’ve never seen before
        </strong>
        .
      </p>
    </section>
  );
};

const PastExperiences = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-screen bg-[#f6edda]">
      {/* Sticky Left Side */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-auto sticky top-0 left-0 z-10 bg-black">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('/your-image.jpg')` }}
        />
      </div>

      {/* Right Scrollable Section */}
      <div className="w-full md:w-1/2 px-6 py-12 space-y-12 text-[#5a2f1f]">
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center">
          Past Experiences
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <video
              key={index}
              className="w-full rounded-lg shadow-md"
              controls
              poster={`/thumbnail${index + 1}.jpg`} // optional preview image
            >
              <source src={`/video${index + 1}.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>

        {/* Scrollable Testimonial Text */}
        <div className="max-w-2xl mx-auto text-center italic text-lg space-y-4">
          <p>
            "My experience with Káàbò was transformative to say the least. Every
            day was a new adventure – we met the most inspiring entrepreneurs, I
            learned about so many different sectors..."
          </p>
          <p>
            "...and of course I can’t leave out how much amazing Nigerian food
            we ate. Káàbò bridges the gap between business and cultural
            exploration, making it a must for anyone..."
          </p>
        </div>
      </div>
    </section>
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

        {/* herpotext */}

        <HeroText />
        <PastExperiences />
        <ContactForm />
      </main>
    </>
  );
}
