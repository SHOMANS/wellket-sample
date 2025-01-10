"use client"
// pages/index.tsx
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import HowItWorks from "@/components/HowItWorks";

const LandingPage: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <header
        // initial={{ y: -50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
      >
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-xl font-bold"
          >
            LOGO
          </motion.div>
          <ul className="hidden md:flex space-x-8 text-gray-600">
            {["Home", "About", "How It Works", "FAQ", "Contact Us"].map((item) => (
              <motion.li
                whileHover={{ scale: 1.1, color: "#2563EB" }}
                key={item}
              >
                <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}>
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
          <div className="flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="/login"
              className="text-gray-600 hover:text-blue-500"
            >
              Login
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              <Link
                href="/get-started"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen flex flex-col justify-center items-center text-white"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source
            src="/videos/video1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-70 z-[-1]"></div>

        {/* Content */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-6 text-center"
        >
          Welcome to Our Platform
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg mb-6 text-center"
        >
          A powerful solution to simplify your life and enhance your productivity.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-white text-blue-500 px-6 py-3 rounded-full shadow-lg hover:bg-gray-100"
        >
          <Link href="/get-started">Get Started</Link>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className="py-40 bg-gray-100"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-gray-600 text-lg">
            Learn about our mission and how we strive to deliver the best experience.
          </p>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <HowItWorks />
      {/* <section id="how-it-works" className="py-16">
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-6">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Step One", "Step Two", "Step Three"].map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold">{step}</h3>
                <p className="text-gray-600">Description of {step.toLowerCase()}.</p>
              </motion.div>
            ))}
          </div>
        </motion.div> 
      </section> */}

      {/* Auto Slider Section */}

      {/* <GalleryCarousel /> */}

      <motion.section
        id="auto-slider"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="py-40 bg-gray-100"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Gallery</h2>
          <p>Auto slider content placeholder.</p>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        id="faq"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="py-40"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6">FAQ</h2>
          <div className="space-y-4">
            <motion.details
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 p-4 rounded-lg"
            >
              <summary className="font-semibold cursor-pointer">
                What is this platform about?
              </summary>
              <p className="text-gray-600 mt-2">
                It is a solution designed to meet your needs.
              </p>
            </motion.details>
            <motion.details
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 p-4 rounded-lg"
            >
              <summary className="font-semibold cursor-pointer">
                How does it work?
              </summary>
              <p className="text-gray-600 mt-2">
                Follow the steps outlined in the How It Works section.
              </p>
            </motion.details>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </motion.p>
      </footer>
    </div>
  );
};

export default LandingPage;
