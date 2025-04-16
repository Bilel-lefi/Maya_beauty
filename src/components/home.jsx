import React, { useState, useEffect, useRef } from "react";
import maya from "../assets/logo.jpg";
import img1 from "../assets/local.webp";
import img2 from "../assets/local1.webp";
import img3 from "../assets/local2.webp";
import M from "../assets/Mlogo.png";
import Cares from "./cares";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Home() {
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () =>
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  const nextSlide = () =>
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  const buttonRef = useRef(null);
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const button = buttonRef.current;
      const footer = document.getElementById("footer");

      if (button && footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const buttonHeight = button.offsetHeight;

        // Si le footer arrive trop proche, on arrête le fixed
        if (footerTop < window.innerHeight + buttonHeight + 16) {
          setIsFixed(false);
        } else {
          setIsFixed(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="flex flex-col bg-[#f5f5f5]">
      {/* Header */}
      <header className="p-4 flex md:justify-start md:ml-20 flex-row items-center justify-center md:gap-4">
        <img className="w-18 h-16 mb-2 md:mb-0" src={M} alt="Logo Maya" />
        <h2 className="text-xl font-semibold text-tertiary font-cursive">
          Maya Beauty
        </h2>
      </header>

      {/* Mobile layout */}
      <div className="flex flex-col px-4 gap-4 md:hidden">
        <div className="bg-white h-20 p-4 rounded-xl shadow flex items-center gap-4">
          <img className="w-18 h-16 rounded-xl-full" src={maya} alt="maya" />
          <h1 className="font-semibold font-cursive">Maya Beauty_Esthétique</h1>
        </div>

        <div className="bg-white rounded-xl shadow relative">
          <img
            src={images[index]}
            alt={`Slide ${index}`}
            className="w-full h-48 object-cover rounded-md transition duration-500"
          />
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2  bg-transparent rounded-full p-2 "
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-transparent rounded-full p-2 "
          >
            ▶
          </button>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <Cares />
        </div>

        <div className="bg-white p-4 rounded-xl shadow font-serif">
          <h2 className="text-lg font-semibold mb-2">Conditions</h2>

          <div className="border-t pt-2 flex items-center justify-between">
            <p>Réserver avec WhatsApp</p>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>

          <div className="border-t pt-2 flex items-center justify-between">
            <p>Handicapped access</p>
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          </div>

          <div className="border-t pt-2 flex items-center justify-between">
            <p>Men allowed</p>
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          </div>

          <div className="border-t pt-2 flex items-center justify-between">
            <p>Animals allowed</p>
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          </div>

          <div className="border-t pt-2 flex items-center justify-between">
            <p>Infants allowed</p>
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">04</div>
        <div className="bg-white p-4 rounded-xl shadow">05</div>
        <div
          ref={buttonRef}
          className={`w-[90%] mx-auto ${
            isFixed ? "fixed bottom-4 left-0 right-0" : "relative mt-4"
          } z-50 transition-all duration-300`}
        >
          <div className="bg-tertiary p-4 rounded-xl shadow text-center w-full">
            <a
              href="https://wa.me/33663111415"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center items-center text-black font-semibold"
            >
              Réserver
            </a>
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex flex-row flex-1 px-10">
        {/* Left column */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-white h-20 p-4 rounded-xl shadow flex items-center gap-4">
            <img className="w-18 h-16 rounded-xl-full" src={maya} alt="maya" />
            <h1 className="font-bold font-cursive">Maya Beauty_Esthétique</h1>
          </div>

          <div className="bg-white rounded-xl shadow relative">
            <img
              src={images[index]}
              alt={`Slide ${index}`}
              className="w-full h-48 object-cover rounded-md transition duration-500"
            />
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 -translate-y-1/2  bg-transparent rounded-full p-2 "
            >
              ◀
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-transparent rounded-full p-2 "
            >
              ▶
            </button>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-2 font-serif">
              Conditions
            </h2>

            <div className="border-t pt-2 flex items-center justify-between">
              <p>Réserver avec WhatsApp</p>
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            </div>

            <div className="border-t pt-2 flex items-center justify-between">
              <p>Handicapped access</p>
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            </div>

            <div className="border-t pt-2 flex items-center justify-between">
              <p>Men allowed</p>
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            </div>

            <div className="border-t pt-2 flex items-center justify-between">
              <p>Animals allowed</p>
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            </div>

            <div className="border-t pt-2 flex items-center justify-between">
              <p>Infants allowed</p>
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">04</div>
          <div className="bg-white p-4 rounded-xl shadow">05</div>
        </div>

        {/* Right column */}
        <div className="flex-1 flex flex-col gap-4 ml-10">
          <div className="bg-tertiary p-4 rounded-xl shadow">
            <a
              href="https://wa.me/33663111415"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-4 flex items-center justify-center text-center  text-black rounded-md"
            >
              Réserver
            </a>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <Cares />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        id="footer"
        className="bg-white text-white w-full mt-10 px-6 py-4"
      >
        <div className="flex flex-col md:flex-row md:justify-between items-center w-full max-w-4xl mx-auto">
          <h3 className="text-sm text-black font-semibold mb-2 md:mb-0">
            2025 © Maya
          </h3>

          <div className="flex gap-6 text-2xl">
            <a
              href="#"
              className="text-blue-600 hover:opacity-80 transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-green-600 hover:opacity-80 transition duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="#"
              className="text-pink-600 hover:opacity-80 transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-black hover:opacity-80 transition duration-300"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
