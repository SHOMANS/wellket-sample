"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import HowItWorks from "@/components/HowItWorks";
import GalleryCarousel from "@/components/Gallery";

const LandingPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust the value for scroll threshold
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="font-sans">
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
          }`}
      >        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <ul className="hidden md:flex space-x-8 text-gray-600">

            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`text-xl font-bold ${isScrolled ? "text-black" : "text-white"}`}
            >
              WELLKET
            </motion.div>

            {["Home", "How It Works", "Why Ketamine?", "Testimonials", "FAQ", "Contact Us"].map((item) => (
              <motion.li
                whileHover={{ scale: 1.1, color: "#2563EB" }}
                key={item}
              >
                <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`${isScrolled ? "text-black" : "text-white"}`}>
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>


          <div className="flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="/login"
              className="text-gray-600 hover:text-blue-500 flex items-center mr-5"
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
        id="home"
        className="relative h-screen flex flex-col justify-center items-center text-white"
      >
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

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600 to-gray-500 opacity-70 z-[-1]"></div>

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

      <HowItWorks />

      <motion.section
        id="why-ketamine?"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="py-16"
      >
        <div
          className="relative bg-cover bg-center bg-no-repeat h-[400px] flex flex-col justify-center items-center text-center text-white px-6"
          style={{ backgroundImage: "url('/images/ketamine.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Why Ketamine?</h2>
            <p className="text-lg max-w-2xl">
              Discover the transformative benefits of ketamine therapy and how it can help improve your mental health and well-being.
            </p>
          </div>
        </div>
      </motion.section>



      <motion.section
        id="testimonials"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="py-16"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Testimonials</h2>
          <GalleryCarousel />
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

      <motion.section
        id="contact-us"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative bg-cover bg-center bg-no-repeat h-[400px] flex flex-col justify-center items-center text-center text-white"
        style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 px-6">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg max-w-2xl mb-6">
            Have questions or ready to get started? Reach out to us today and let us help you on your journey.
          </p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-white text-blue-500 px-6 py-3 rounded-full shadow-lg hover:bg-gray-100"
          >
            <Link href="/get-started">Get Started</Link>
          </motion.div>
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
