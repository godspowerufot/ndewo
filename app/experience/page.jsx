"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

function PricingSection() {
  // Load Calendly widget script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Open Calendly popup on button click
  const openCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/ufotgodspower8/consult-call", // ✅ Replace with your actual Calendly link
      });
    } else {
      alert("Calendly is still loading, please try again.");
    }
  };

  return (
    <section className="bg-[#3C4220] text-white py-16 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center max-w-2xl">
        <p className="mb-4">
          Get the full Kàbọ̀ experience with our all-inclusive multi-day
          packages.
        </p>
        <p className="mb-6">
          Hotel, daily transport, activities, and even optional visa
          facilitation—It’s all covered. Pick what suits you best.
        </p>

        <a
          href="https://calendly.com/ufotgodspower8/consult-call"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F5A623] text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition inline-block"
        >
          ENQUIRE NOW · BOOK A CALL
        </a>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-8 mt-12 w-full max-w-3xl max-h-[600px] overflow-y-auto px-4">
        {/* Weekenders */}
        <div className="bg-white text-black rounded-md shadow-md p-6">
          <h3 className="text-center font-serif text-lg uppercase tracking-wide text-[#5C4A2D]">
            The Weekenders
          </h3>
          <p className="text-center text-sm text-gray-500">starting at</p>
          <p className="text-center text-4xl font-bold text-[#7A2D1B] mt-2">
            $1,500
          </p>

          <ul className="mt-6 text-center space-y-3 text-sm text-gray-700">
            <li>2-Night Stay & 3-Day Itinerary</li>
            <li>Daily Transportation</li>
            <li>Food & Activities for the Weekend</li>
            <li>Visa on Arrival Facilitation</li>
          </ul>

          <div className="flex justify-center mt-6">
            <button className="bg-[#5C2C19] text-white py-2 px-6 rounded-full hover:bg-[#7A3B24] transition">
              EXPLORE MORE
            </button>
          </div>

          <p className="text-[12px] text-gray-500 mt-4 text-center">
            All prices exclude: International Flights, Personal Shopping, Meals
            outside designated activities, Travel Insurance
          </p>
        </div>

        {/* Full Experience */}
        <div className="bg-white text-black rounded-md shadow-md p-6">
          <h3 className="text-center font-serif text-lg uppercase tracking-wide text-[#5C4A2D]">
            The Full Experience
          </h3>
          <p className="text-center text-sm text-gray-500">starting at</p>
          <p className="text-center text-4xl font-bold text-[#7A2D1B] mt-2">
            $2,400
          </p>

          <ul className="mt-6 text-center space-y-3 text-sm text-gray-700">
            <li>6-Night Stay & 7-Day Itinerary</li>
            <li>Daily Transportation</li>
            <li>Food & Activities for the Week</li>
            <li>Visa on Arrival Facilitation</li>
          </ul>

          <div className="flex justify-center mt-6">
            <button className="bg-[#5C2C19] text-white py-2 px-6 rounded-full hover:bg-[#7A3B24] transition">
              EXPLORE MORE
            </button>
          </div>

          <p className="text-[12px] text-gray-500 mt-4 text-center">
            All prices exclude: International Flights, Personal Shopping, Meals
            outside designated activities, Travel Insurance
          </p>
        </div>
      </div>

      {/* Payment Options */}
      <div className="mt-12 max-w-3xl text-center">
        <h4 className="text-lg font-semibold mb-4">
          Flexible payment options for your convenience:
        </h4>
        <p className="text-sm">
          <span className="text-yellow-300 font-semibold">
            ● One-time Payment:
          </span>{" "}
          Pay in full and enjoy a hassle-free countdown to your journey <br />
          <span className="text-yellow-300 font-semibold">
            ● Installment Plan:
          </span>{" "}
          Pay a 30% deposit to secure your booking, followed by 2 equal monthly
          payments
        </p>
      </div>
    </section>
  );
}

function Itinerary() {
  const itineraries = [
    {
      title: "Tech & Culture Fusion",
      img: "/tech-culture.jpg", // replace with actual image path
    },
    {
      title: "Wellness & Design Discovery",
      img: "/wellness-design.jpg",
    },
    {
      title: "Cultural & Business Blend",
      img: "/cultural-business.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12">
      <h1 className="text-4xl font-bold text-green-900 mb-4">Our Itinerary</h1>
      <p className="text-center text-gray-600 max-w-2xl mb-10">
        Our itineraries are bespoke and catered to you. Here are some examples
        of past itineraries.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {itineraries.map((item, index) => (
          <div
            key={index}
            className={`relative w-[300px] overflow-hidden group cursor-pointer ${
              index === 0
                ? "rounded-l-[20px]"
                : index === 1
                ? "rounded-none"
                : "rounded-r-[20px]"
            }`}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center bottom-0 justify-center text-white">
              <h2 className="text-2xl font-semibold text-center">
                {item.title}
              </h2>
              <button className="mt-4 px-6 py-2 bg-yellow-200 text-black rounded-full text-sm font-medium hover:bg-yellow-300 transition">
                DISCOVER
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const faqData = [
  {
    question: "What is Kääbö?",
    answer:
      "Kääbö is a travel consulting and concierge service that curates unique and personalized experiences in Nigeria. We specialize in creating immersive itineraries that showcase the best of Nigerian culture, landscapes, and leisure, while also offering premium services such as tailored travel packages, private tours, and networking opportunities. Whether you're looking for a cultural adventure, a business retreat, or a bespoke getaway, Kääbö ensures a seamless experience from start to finish.",
  },
  {
    question: "What sets Kääbö apart?",
    answer:
      "Kääbö stands out through our deep local expertise, personalized approach, and commitment to authentic Nigerian experiences. We offer exclusive access to hidden gems, cultural immersion opportunities, and premium concierge services that you won't find elsewhere. Our team of local experts ensures every detail is perfectly curated to match your preferences and interests.",
  },
  {
    question: "What's included in your 7-day program?",
    answer:
      "Our 7-day program includes accommodation in premium locations, guided cultural tours, authentic dining experiences, transportation, networking events with local entrepreneurs, visits to historical sites, art galleries, and markets. You'll also receive a dedicated concierge service, welcome package, and 24/7 support throughout your journey.",
  },
  {
    question: "What's NOT included in the program?",
    answer:
      "International flights to Nigeria, personal shopping expenses, alcoholic beverages (unless specified), travel insurance, visa processing fees, and any activities outside the planned itinerary are not included. Optional premium add-ons and personal expenses during free time are also excluded.",
  },
  {
    question: "How is the pricing structured?",
    answer:
      "Our pricing is tiered based on group size, accommodation level, and customization requirements. We offer Standard, Premium, and Luxury packages. Pricing includes all mentioned services with transparent breakdown provided upon inquiry. Group discounts and early bird rates are available for advance bookings.",
  },
  {
    question: "How do I enroll in a program?",
    answer:
      "Enrollment is simple: contact us through our website or phone, complete a brief consultation to understand your preferences, receive a customized proposal, confirm with a deposit, and we'll handle all arrangements. Our team will guide you through each step and provide pre-travel preparation materials.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards (Visa, MasterCard, American Express), bank transfers, PayPal, and mobile money transfers. Payment plans are available with 50% deposit required to secure booking and remaining balance due 30 days before travel. All transactions are secure and encrypted.",
  },
  {
    question: "What is the deposit policy?",
    answer:
      "A 50% deposit is required to confirm your booking and secure your spot. The deposit is non-refundable but can be transferred to future dates with 60 days notice. Full payment is due 30 days before your travel date. We offer flexible payment plans for bookings made more than 90 days in advance.",
  },
];

// Framer Motion animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title with a small slide animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-light text-amber-100 tracking-wide">
            FAQ
          </h1>
        </motion.div>

        {/* FAQ List with staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-amber-100/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]"
            >
              {/* Question */}
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-amber-100/5 transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-amber-100 text-lg md:text-xl font-light pr-4">
                  {faq.question}
                </span>
                <span className="text-amber-200 text-2xl transition-transform duration-300">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer with smooth height animation */}
              <motion.div
                initial={false}
                animate={
                  openIndex === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden px-6"
              >
                <p className="text-amber-200/90 leading-relaxed text-base py-4">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
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

      <PricingSection />
      <Itinerary />
      <FAQ />
    </div>
  );
};

export default page;
