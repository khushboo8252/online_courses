import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">NLITE Technologies LLP</h2>
            <h3 className="text-lg font-semibold mb-2">Popular Courses</h3>
            <ul className="space-y-1 text-sm">
              <li className="hover:text-blue-400 cursor-pointer">JAVA & REACT</li>
              <li className="hover:text-blue-400 cursor-pointer">.Net and React</li>
              <li className="hover:text-blue-400 cursor-pointer">Java and Angular</li>
              <li className="hover:text-blue-400 cursor-pointer">Python</li>
              <li className="hover:text-blue-400 cursor-pointer">DEVOPS</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li className="hover:text-blue-400 cursor-pointer">FAQ's</li>
              <li className="hover:text-blue-400 cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-blue-400 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-blue-400 cursor-pointer">Refunds Policy</li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Our Location</h3>
            <p className="text-sm leading-relaxed">
              1st Floor, Plot no 434,<br />
              Nandankanan Rd, Raghunathpur,<br />
              Bhubaneswar, Odisha 751024
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:contact@nlite.in"
                className="text-blue-400 hover:underline"
              >
                contact@nlite.in
              </a>
            </p>
            <p className="text-sm mt-1">Phone: +91 8428448903</p>
            <p className="text-sm">Phone: +91 9475484959</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <ul className="flex justify-center space-x-6 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                YouTube
              </a>
            </li>
          </ul>

          <p className="mt-4 text-xs text-gray-400">
            © 2025 NLITE Technologies LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
