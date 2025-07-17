import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
        {/* Column 1: About */}
        <div>
          <h4 className="text-lg font-semibold mb-4">About Káàbò</h4>
          <p>
            We’re a premium travel concierge service helping you explore Nigeria
            like never before. Experience culture, heritage, and hidden gems
            with ease.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                The Káàbò Experience
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Vision
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Catalogue
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p>Email: hello@kaabo.ng</p>
          <p>Phone: +234 000 000 0000</p>
          <p>Location: Lagos, Nigeria</p>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center mt-12 text-xs text-gray-400">
        © {new Date().getFullYear()} Káàbò. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
