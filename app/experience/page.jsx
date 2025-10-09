"use client";
import React from "react";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { openCalendlyPopup } from "@/lib/page";
function PricingSection() {
  // Open Calendly in new tab

  return (
    <section className="bg-[#f6edda] text-[#5a2f1f] py-16 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center  px-3 md:px-0 max-w-2xl" data-aos="fade-up">
        <h2 className="text-4xl  font-clash font-bold mb-2 uppercase">
          Start Your Journey
        </h2>
        <p className="mb-2 font-exodus">
          Nigeria is more than cities — it's the food, nightlife, fashion,
          waterfalls, caves, hills, and untouched landscapes waiting to be
          explored.
        </p>
        <p className="mb-2 font-exodus">
          Hotel, daily transport, activities, and even optional visa
          facilitation—It's all covered. Pick what suits you best.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-12 w-full max-w-6xl px-4">
        {/* Essential Explorer */}
        <div
          className="bg-white text-black rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          <div className="text-left mb-6">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
              Essential Explorer
            </h3>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-bold text-[#5C4A2D]">$1,900</span>
              <span className="text-gray-500 text-sm">/trip</span>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-6">
            Perfect for: Solo travelers, first-timers, minimalist adventurers
          </p>
          <p className="text-sm text-gray-500 mb-6">Duration: 4 Days</p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start text-sm text-gray-700">
              <svg
                className="w-5 h-5 text-[#5a2f1f] mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Airport pickup & drop-off
            </li>
            <li className="flex items-start text-sm text-gray-700">
              <svg
                className="w-5 h-5 text-[#5a2f1f] mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              2 curated local experiences
            </li>
            <li className="flex items-start text-sm text-gray-700">
              <svg
                className="w-5 h-5 text-[#5a2f1f] mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Daily breakfast
            </li>
            <li className="flex items-start text-sm text-gray-700">
              <svg
                className="w-5 h-5 text-[#5a2f1f] mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Local guide/host
            </li>
            <li className="flex items-start text-sm text-gray-700">
              <svg
                className="w-5 h-5 text-[#5a2f1f] mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Hotel accommodation
            </li>
            <li className="flex items-start text-sm text-gray-700">
              <svg
                className="w-5 h-5 text-[#5a2f1f] mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Customized itinerary
            </li>
          </ul>

          <button
            onClick={openCalendlyPopup}
            className="w-full bg-[#5a2f1f] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#5a2f1f] transition-colors duration-200"
          >
            EXPLORE MORE
          </button>
        </div>

        {/* Couple's Discovery */}
        <div
          className="bg-white text-black rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800"
        >
          <div className="text-left mb-6">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
              Couple's Discovery
            </h3>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-bold text-[#5C4A2D]">$2,600</span>
              <span className="text-gray-500 text-sm">/trip</span>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-6">
            Perfect for: Honeymooners, baecations, duo adventurers
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Duration: 4 Days / 3 Nights
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start text-sm text-gray-700">
              <svg
                className="w-5 h-5 text-[#5a2f1f] mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Private room in boutique stay
            </li>
            <li className="flex items-start text-sm text-gray-700">
              <svg
                className="w-5 h-5 text-[#5a2f1f] mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Choose 3 experiences: spa, food tour, boat cruise, gallery walk,
              night tour
            </li>
            <li className="flex items-start text-sm text-gray-700">
              <svg
                className="w-5 h-5 text-[#5a2f1f] mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Romantic dinner setup
            </li>
            <li className="flex items-start text-sm text-gray-700">
              <svg
                className="w-5 h-5 text-[#5a2f1f] mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Local guide & concierge
            </li>
            <li className="flex items-start text-sm text-gray-700">
              <svg
                className="w-5 h-5 text-[#5a2f1f] mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Photo moments + highlight reel
            </li>
          </ul>

          <button
            onClick={openCalendlyPopup}
            className="w-full bg-[#5a2f1f] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#5a2f1f] transition-colors duration-200"
          >
            EXPLORE MORE
          </button>
        </div>

        {/* Group Adventure - Featured */}
        <div
          className="bg-[#5a2f1f] text-white rounded-2xl shadow-2xl p-8 border-2 border-[#5a2f1f] hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="800"
        >
          <div className="text-left mb-6">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-2">
              Group Adventure
            </h3>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-bold text-white">$3,800</span>
              <span className="text-white text-sm">/trip</span>
            </div>
          </div>

          <p className="text-sm text-blue-100 mb-6">
            Perfect for: Friends, birthday squads, corporate teams (3–12 people)
          </p>
          <p className="text-sm text-white mb-6">Duration: 5 Days / 4 Nights</p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start text-sm text-white">
              <svg
                className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Private group transport (bus or SUV)
            </li>
            <li className="flex items-start text-sm text-white">
              <svg
                className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Choose 3 adventures: cave hike, heritage tour, beach games,
              cooking class
            </li>
            <li className="flex items-start text-sm text-white">
              <svg
                className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Event-style group dinner
            </li>
            <li className="flex items-start text-sm text-white">
              <svg
                className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              In-city photography & highlight reel
            </li>
            <li className="flex items-start text-sm text-white">
              <svg
                className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Dedicated concierge assistant
            </li>
          </ul>

          <button
            onClick={openCalendlyPopup}
            className="w-full bg-white text-[#5a2f1f] py-3 px-6 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
          >
            EXPLORE MORE
          </button>
        </div>
      </div>

      {/* Payment Options */}
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
        className="text-4xl font-clash font-bold text-center uppercase text-yellow-800 mb-2"
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
              <h2 className="text-2xl font-clash font-semibold text-center">
                {item.title}
              </h2>
              <button
                onClick={() => setSelected(item)}
                className="mt-4 px-6 py-2 bg-yellow-800 text-green rounded-full text-sm font-medium text-white transition"
              >
                DISCOVER
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 px-4 py-8"
          onClick={() => setSelected(null)}
          data-aos="fade"
          data-aos-duration="300"
        >
          {/* Modal Box */}
          <div
            className="bg-white h-[550px] lg:h-[650px] rounded-3xl shadow-2xl max-w-5xl w-full md:overflow-y-hidden relative grid md:grid-cols-2 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            data-aos="slide-left"
            data-aos-duration="400"
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
            <div className="p-8 md:p-10  font-clash flex flex-col justify-between max-h-[70vh]">
              <div>
                <h2 className="text-3xl  md:text-4xl font-bold text-yellow-800 mb-2 leading-tight">
                  {selected.title}
                </h2>
                <p className="text-[#5C4A2D] text-base leading-relaxed mb-6">
                  {selected.description}
                </p>

                <div className="border-t border-[#E5DCC3] pt-6">
                  <h3 className="text-lg font-bold text-yellow-800 mb-2 tracking-wide">
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
            </div>

            {/* Close Icon - Top Right */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-[#2D5016] hover:text-[#7A2D1B] transition-colors bg-white rounded-full p-2 shadow-lg hover:shadow-xl z-10"
            >
              <X size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const faqData = [
  {
    question: "What is Ndewo Africa?",
    answer:
      "Ndewo Africa is a curated travel and experience company that helps visitors and locals explore Nigeria with ease. From itineraries to tour guides, accommodation, and cultural experiences, we make sure your journey is seamless, memorable, and stress-free.",
  },
  {
    question: "Who can use Ndewo Africa's services?",
    answer:
      "Our services are perfect for first-time visitors coming to Nigeria, locals who want to explore different Nigerian states, and groups, solo travelers, and families looking for curated and safe experiences.",
  },
  {
    question: "What kind of experiences do you offer?",
    answer:
      "We create tailored experiences that include cultural tours (festivals, heritage sites, food tours), city experiences (nightlife, shopping, urban explorations), nature and adventure trips (beaches, hiking, waterfalls), and luxury and relaxation packages.",
  },
  {
    question: "Is it safe to travel with Ndewo Africa?",
    answer:
      "Yes. Your safety is our top priority. We partner with trusted guides, verified drivers, and secure accommodations. We also design itineraries with both safety and comfort in mind.",
  },
  {
    question: "Do you help with visas and travel documents?",
    answer:
      "Yes. We provide guidance on visa applications, entry requirements, and essential travel documents to ensure your arrival in Nigeria is stress-free.",
  },
  {
    question: "Can locals in Nigeria book experiences too?",
    answer:
      "Absolutely. We curate experiences for Nigerians who want to explore new cities, hidden gems, or plan a unique getaway within the country.",
  },
  {
    question: "Do you customize trips?",
    answer:
      "Yes. Every traveler is unique. We create personalized itineraries to match your interests—whether cultural, adventurous, luxurious, or a mix of everything.",
  },
  {
    question: "What's included in a typical package?",
    answer:
      "Depending on the package, you can expect accommodation arrangements, transportation (airport pick-up/drop-off, local transfers), curated itineraries, guided tours and cultural experiences, and 24/7 local support during your stay.",
  },
  {
    question: "How do I book an experience with Ndewo Africa?",
    answer:
      "Booking is simple. You can reach out via our website, email, or WhatsApp. We'll schedule a quick call to understand your needs, then create a tailored package for you.",
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer:
      "We understand that plans change. Our cancellation and rescheduling policies are flexible, depending on the package. We'll work with you to adjust your experience wherever possible.",
  },
  {
    question: "Do you offer group discounts?",
    answer:
      "Yes. We provide special packages and discounts for groups, whether for corporate retreats, family trips, or friend getaways.",
  },
  {
    question: "Why should I choose Ndewo Africa over planning my trip myself?",
    answer:
      "We remove the stress of planning, negotiating, and navigating Nigeria alone. With our insider knowledge, trusted partners, and curated itineraries, you enjoy the best of Nigeria without the hassle.",
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
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-4">
                  <p className="text-amber-200/90 leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
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
    <div className="overflow-x-hidden font-exodus">
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
            className="text-white font-clash text-4xl md:text-6xl font-bold text-center"
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
