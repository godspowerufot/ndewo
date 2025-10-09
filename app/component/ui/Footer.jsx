import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white px-6 h-full pt-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-12 pb-12 border-b border-gray-700">
          {/* Left Column: About */}
          <div className="max-w-md" data-aos="fade-up">
            <h4 className="text-2xl font-bold mb-4 text-white">About Ndewo</h4>
            <p className="text-gray-400 leading-relaxed">
              We're a premium travel concierge service helping you explore
              Nigeria like never before. Experience culture, heritage, and
              hidden gems with ease.
            </p>
          </div>

          {/* Right Column: Links & Contact */}
          <div className="grid grid-cols-2 gap-8 h-full">
            {/* Quick Links */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h4 className="text-lg font-semibold mb-4 text-white">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/experience"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    The ndewo Experience
                  </a>
                </li>
                <li>
                  <a
                    href="/vision"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Our Vision
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-lg font-semibold mb-4 text-white">
                Contact Us
              </h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="mailto:hello@kaabo.ng"
                    className="hover:text-white transition-colors duration-200"
                  >
                    hello@kaabo.ng
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+2340000000000"
                    className="hover:text-white transition-colors duration-200"
                  >
                    +234 000 000 0000
                  </a>
                </li>
                <li>Lagos, Nigeria</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div
          className="pt-8 text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Ndewo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
