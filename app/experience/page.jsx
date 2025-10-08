"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

function PricingSection() {
  // Open Calendly in new tab
  const openCalendlyPopup = () => {
    window.open(
      "https://calendly.com/faithazike/free-discovery-call-ndewo-africa",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="bg-[#3C4220] text-white py-16 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center max-w-2xl" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-2 uppercase">
          Start Your Journey
        </h2>
        <p className="mb-2">
          Nigeria is more than cities — it's the food, nightlife, fashion,
          waterfalls, caves, hills, and untouched landscapes waiting to be
          explored.
        </p>
        <p className="mb-2">
          Hotel, daily transport, activities, and even optional visa
          facilitation—It's all covered. Pick what suits you best.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-12 w-full max-w-6xl px-4">
        {/* Essential Explorer */}
        <div
          className="bg-white text-black rounded-md shadow-md p-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 className="text-center font-bold font-serif text-lg uppercase tracking-wide text-[#5C4A2D]">
            Essential Explorer
          </h3>
          <p className="text-center text-sm text-gray-500">
            Perfect for: Solo travelers, first-timers, minimalist adventurers
          </p>
          <p className="text-center text-sm mt-1">Duration: 4 Days</p>
          <p className="text-center text-4xl font-bold text-[#7A2D1B] mt-3">
            $1,900
          </p>

          <ul className="mt-6 space-y-2 text-sm text-gray-700">
            <li>✔ Airport pickup & drop-off</li>
            <li>✔ 2 curated local experiences</li>
            <li>✔ Daily breakfast</li>
            <li>✔ Local guide/host</li>
            <li>✔ Hotel accommodation</li>
            <li>✔ Customized itinerary</li>
          </ul>

          <div className="flex justify-center mt-6">
            <button
              onClick={openCalendlyPopup}
              className="bg-[#5C2C19] text-white py-2 px-6 rounded-full hover:bg-[#7A3B24] transition"
            >
              EXPLORE MORE
            </button>
          </div>
        </div>

        {/* Couple's Discovery */}
        <div
          className="bg-white text-black rounded-md shadow-md p-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-center font-bold font-serif text-lg uppercase tracking-wide text-[#5C4A2D]">
            Couple's Discovery
          </h3>
          <p className="text-center text-sm text-gray-500">
            Perfect for: Honeymooners, baecations, duo adventurers
          </p>
          <p className="text-center text-sm mt-1">
            Duration: 4 Days / 3 Nights
          </p>
          <p className="text-center text-4xl font-bold text-[#7A2D1B] mt-3">
            $2,600
          </p>

          <ul className="mt-6 space-y-2 text-sm text-gray-700">
            <li>✔ Private room in boutique stay</li>
            <li>
              ✔ Choose 3 experiences: spa, food tour, boat cruise, gallery walk,
              night tour
            </li>
            <li>✔ Romantic dinner setup</li>
            <li>✔ Local guide & concierge</li>
            <li>✔ Photo moments + highlight reel</li>
          </ul>

          <div className="flex justify-center mt-6">
            <button
              onClick={openCalendlyPopup}
              className="bg-[#5C2C19] text-white py-2 px-6 rounded-full hover:bg-[#7A3B24] transition"
            >
              EXPLORE MORE
            </button>
          </div>
        </div>

        {/* Group Adventure */}
        <div
          className="bg-white text-black rounded-md shadow-md p-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 className="text-center font-serif font-bold text-lg uppercase tracking-wide text-[#5C4A2D]">
            Group Adventure
          </h3>
          <p className="text-center text-sm text-gray-500">
            Perfect for: Friends, birthday squads, corporate teams (3–12 people)
          </p>
          <p className="text-center text-sm mt-1">
            Duration: 5 Days / 4 Nights
          </p>
          <p className="text-center text-4xl font-bold text-[#7A2D1B] mt-3">
            $3,800
          </p>

          <ul className="mt-6 space-y-2 text-sm text-gray-700">
            <li>✔ Private group transport (bus or SUV)</li>
            <li>
              ✔ Choose 3 adventures: cave hike, heritage tour, beach games,
              cooking class
            </li>
            <li>✔ Event-style group dinner</li>
            <li>✔ In-city photography & highlight reel</li>
            <li>✔ Dedicated concierge assistant</li>
          </ul>

          <div className="flex justify-center mt-6">
            <button
              onClick={openCalendlyPopup}
              className="bg-[#5C2C19] text-white py-2 px-6 rounded-full hover:bg-[#7A3B24] transition"
            >
              EXPLORE MORE
            </button>
          </div>
        </div>
      </div>

      {/* Payment Options */}
      <div
        className="mt-12 max-w-3xl text-center"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <h4 className="text-lg font-semibold mb-2">
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
      title: "Wellness & Retreats",
      img: "/wellness-design.jpg",
      description:
        "Rest. Reconnect. Rebirth. Need a reset? Let Nigeria's natural tranquility restore you.",
      signatures: [
        "Reboot Africa Weekend – Digital detox, yoga, spa therapy.",
        "Palm Wine & Breathwork Sessions – Guided wellness with local twists.",
        "Zen by the Beach – Lekki private beach + sound healing escape.",
        "Obudu Wellness Residency – immersive personal retreat.",
      ],
    },
    {
      title: "Cultural Immersion",
      img: "/cultural-business.jpg",
      description:
        "Live the stories behind the customs. We don't just visit communities—we sit with them, eat with them, and listen.",
      signatures: [
        "Igbo Village Homestay – Participate in harvest, learn native cooking.",
        "Yoruba Orisha Tour – Spiritual traditions and ancestral storytelling.",
        "Ijaw Fishing Festival Experience – Attend a live cultural festival.",
      ],
    },
    {
      title: "Urban Life & Night Pulse",
      img: "/tech-culture.jpg",
      description:
        "Explore Nigeria's cities like a local, not a tourist. From art crawls to street food sprees, let the city guide your senses.",
      signatures: [
        "Lagos Island Hop – From Lekki to Makoko, discover two sides of Lagos.",
        "Abuja Brunch Crawl – Food, art, and rooftop vibes.",
        "Night Pulse Tour – Exclusive nightlife experience with host + access.",
      ],
    },
    {
      title: "History & Heritage",
      img: "/heritage.jpg",
      description:
        "Know where it all began. For the curious soul tracing identity, legacy, and power through Nigerian soil.",
      signatures: [
        "Badagry Slave Route Walkthrough – Emotional, educational, essential.",
        "Benin Bronze Legacy Tour – Visit the home of ancient African art.",
        "Diaspora Homecoming Program – Full heritage experience & reconnection path.",
      ],
    },
    {
      title: "Creative Encounters",
      img: "/creative.jpg",
      description:
        "Feel the pulse of Nigeria's new wave. From fashion to film, explore the frontiers of African creativity.",
      signatures: [
        "Lagos Art Weekend – Galleries, pop-ups, meet-the-artist dinners.",
        "Creative Markets Tour – Discover Black-owned brands + souvenirs.",
        "Film Location Visit (Nollywood) – Go behind the scenes.",
        "Photography + Storytelling Workshop – Learn with local creatives.",
      ],
    },
    {
      title: "The Ndewo Life",
      img: "/ndewo-life.jpg",
      description:
        "Nigeria is more than cities — it's the food, nightlife, fashion, waterfalls, caves, hills, and untouched landscapes waiting to be explored.",
      signatures: [
        "Obudu Mountain Escape – Hike, cable car ride, and eco-lodge stay in Cross River.",
        "Erin Ijesha Waterfall Trek – A 7-tier hiking experience through cascading beauty.",
        "Awhum Cave Exploration – Spiritual adventure into ancient limestone wonders.",
        "Lekki Conservation Kayak Ride – Mangrove trails and monkey spotting.",
      ],
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12">
      <h1
        className="text-4xl font-bold text-center uppercase font-sans text-green-900 mb-2"
        data-aos="fade-up"
      >
        Our Signature experiences
      </h1>
      <p
        className="text-center text-gray-600 text-sm lg:text-xl max-w-4xl mb-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Our itineraries are crafted to immerse you in authentic Nigerian
        culture, nature, and lifestyle. Each experience is designed to connect
        you deeply with the local environment and communities, ensuring a
        memorable and transformative journey.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {itineraries.map((item, index) => (
          <div
            key={index}
            className="relative w-[350px] overflow-hidden group cursor-pointer rounded-xl shadow-lg"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
              <h2 className="text-2xl font-semibold text-center">
                {item.title}
              </h2>
              <button
                onClick={() => setSelected(item)}
                className="mt-4 px-6 py-2 bg-yellow-800 text-green rounded-full text-sm font-medium hover:bg-yellow-300 transition"
              >
                DISCOVER
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 px-4 py-8"
          >
            {/* Modal Box */}
            <motion.div
              key="modal"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white h-[550px] lg:h-[650px] rounded-3xl shadow-2xl max-w-5xl w-full overflow-hidden relative grid md:grid-cols-2 overflow-y-auto"
            >
              {/* Left Side - Image */}
              <div className="relative h-64 md:h-auto">
                <img
                  src={selected.img}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10"></div>
              </div>

              {/* Right Side - Content */}
              <div className="p-8 md:p-10 flex flex-col justify-between  max-h-[70vh]">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#2D5016] mb-2 leading-tight">
                    {selected.title}
                  </h2>
                  <p className="text-[#5C4A2D] text-base leading-relaxed mb-6">
                    {selected.description}
                  </p>

                  <div className="border-t border-[#E5DCC3] pt-6">
                    <h3 className="text-lg font-bold text-[#2D5016] mb-2 tracking-wide">
                      SIGNATURE EXPERIENCES
                    </h3>
                    <ul className="space-y-3">
                      {selected.signatures.map((sig, i) => (
                        <li key={i} className="flex items-start group">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#7A2D1B] mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                          <span className="text-[#5C4A2D] text-sm leading-relaxed">
                            {sig}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Close Button - Bottom Right */}
              </div>

              {/* Close Icon - Top Right */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-[#2D5016] hover:text-[#7A2D1B] transition-colors bg-white rounded-full p-2 shadow-lg hover:shadow-xl z-10"
              >
                <X size={24} strokeWidth={2.5} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-light text-amber-100 tracking-wide">
            FAQ
          </h1>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-amber-100/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-delay={index * 50}
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

              {/* Answer */}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Page = () => {
  useEffect(() => {
    // Initialize AOS from CDN
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js";
    script.async = true;
    script.onload = () => {
      if (window.AOS) {
        window.AOS.init({
          duration: 1000,
          once: true,
          easing: "ease-out",
        });
      }
    };
    document.body.appendChild(script);

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <header className="relative w-full h-[60vh] md:h-[80vh]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('/ndewo.jpg')`,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#00000063] bg-opacity-50 z-10"></div>

        {/* Text */}
        <div className="relative z-20 flex items-center justify-center h-full">
          <h1
            className="text-white text-4xl md:text-6xl font-bold text-center"
            data-aos="zoom-in"
          >
            THE NDEWO LIFE
          </h1>
        </div>
      </header>

      <PricingSection />
      <Itinerary />
      <FAQ />

      {/* AOS CSS */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
      />
    </div>
  );
};

export default Page;
