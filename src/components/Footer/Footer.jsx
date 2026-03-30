import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-[#0b1a33] to-[#0a1630] text-white pt-16 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold">DigiTools</h2>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  Templates
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="" className="hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  Community
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Social Links</h3>
            <div className="flex gap-3">
              <button className="btn btn-circle btn-sm bg-white text-black border-none">
                <FaInstagram />
              </button>
              <button className="btn btn-circle btn-sm bg-white text-black border-none">
                <FaFacebookSquare />
              </button>
              <button className="btn btn-circle btn-sm bg-white text-black border-none">
                <FaXTwitter />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© 2026 Digitools. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="" className="hover:text-white">
              Terms of Service
            </a>
            <a href="" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
