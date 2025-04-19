import React, { useState, useEffect, useRef } from "react";
import maya from "../assets/logo.jpg";
import img1 from "../assets/local.webp";
import img2 from "../assets/local1.webp";
import img3 from "../assets/local2.webp";
import work from "../assets/work.webp";
import work1 from "../assets/work1.webp";
import work2 from "../assets/work2.webp";
import logo from "../assets/logo1-.png";
import Cares from "./cares";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaHeart,
} from "react-icons/fa";
import { PopupButton } from "react-calendly";
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
        <img
          className="w-20 h-[72px] mb-2 md:mb-0"
          src={logo}
          alt="Logo Maya"
        />
        <h2 className="text-xl font-semibold text-tertiary font-cursive ">
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

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2 font-serif">
            Conditions :
          </h2>

          <div className="border-t pt-2 flex items-center justify-between">
            <p>Réserver avec WhatsApp</p>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>

          <div className="border-t pt-2 flex items-center justify-between">
            <p>Accès handicapé</p>
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          </div>

          <div className="border-t pt-2 flex items-center justify-between">
            <p>Animaux autorisés</p>
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          </div>

          <div className="border-t pt-2 flex items-center justify-between">
            <p>Hommes acceptés</p>
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          </div>

          <div className="border-t pt-2 flex items-center justify-between">
            <p>Bébé sur place</p>
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-2 font-serif text-lg">
            Photos de Maya :
          </h2>
          <div className="flex space-x-4">
            <img src={work} alt="Image 1" className="w-20 h-20 rounded-lg" />
            <img src={work1} alt="Image 2" className="w-20 h-20 rounded-lg" />
            <img src={work2} alt="Image 3" className="w-20 h-20 rounded-lg" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className=" font-semibold mb-4 font-serif text-lg">Reviews :</h2>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-lg ">
              <span>Propreté</span>
              <div className="flex items-center gap-1 text-[#ffc68a]">
                <FaHeart />
                <span className="text-black ml-2">5</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-lg ">
              <span>Qualité du travail</span>
              <div className="flex items-center gap-1  text-[#ffc68a]">
                <FaHeart />
                <span className="text-black ml-2">5</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-lg ">
              <span>Savoir être et ponctualité</span>
              <div className="flex items-center gap-1  text-[#ffc68a]">
                <FaHeart />
                <span className="text-black ml-2">5</span>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={buttonRef}
          className={`w-full  p-4 mx-auto ${
            isFixed
              ? "fixed bottom-4 left-0 right-0 "
              : "flex px-0 p-4"
          } `}
        >
          <div className="bg-tertiary p-4 rounded-xl shadow w-full flex justify-center">
            <PopupButton
              url="https://calendly.com/lingibilel/15min"
              rootElement={document.getElementById("root")}
              text="réserver"
              className=" h-4 flex items-center justify-center text-center  text-black rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex flex-row flex-1 px-10">
        {/* Left column */}
        <div className="flex-1 flex flex-col gap-4 w-40">
          <div className="bg-white h-20 p-4 rounded-xl shadow flex items-center gap-4">
            <img className="w-18 h-16 rounded-xl-full" src={maya} alt="maya" />
            <h1 className="font-bold font-cursive">Maya Beauty_Esthétique</h1>
          </div>
          {/* <div className="bg-white h-20 p-4 rounded-xl shadow flex items-center gap-4">
            <div className="p-4">
              <InlineWidget url="https://calendly.com/yourname/15min" />
            </div>
          </div> */}

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
              Conditions :
            </h2>

            <div className="border-t pt-2 flex items-center justify-between">
              <p>Réserver avec WhatsApp</p>
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            </div>

            <div className="border-t pt-2 flex items-center justify-between">
              <p>Accès handicapé</p>
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            </div>

            <div className="border-t pt-2 flex items-center justify-between">
              <p>Animaux autorisés</p>
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            </div>

            <div className="border-t pt-2 flex items-center justify-between">
              <p>Hommes acceptés</p>
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            </div>

            <div className="border-t pt-2 flex items-center justify-between">
              <p>Bébé sur place</p>
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-semibold mb-2 font-serif text-lg">
              Photos de Maya :
            </h2>
            <div className="flex space-x-4">
              <img src={work} alt="Image 1" className="w-20 h-20 rounded-lg" />
              <img src={work1} alt="Image 2" className="w-20 h-20 rounded-lg" />
              <img src={work2} alt="Image 3" className="w-20 h-20 rounded-lg" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className=" font-semibold mb-4 font-serif text-lg">
              Reviews :
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-lg ">
                <span>Propreté</span>
                <div className="flex items-center gap-1 text-[#ffc68a]">
                  <FaHeart />
                  <span className="text-black ml-2">5</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-lg ">
                <span>Qualité du travail</span>
                <div className="flex items-center gap-1  text-[#ffc68a]">
                  <FaHeart />
                  <span className="text-black ml-2">5</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-lg ">
                <span>Savoir être et ponctualité</span>
                <div className="flex items-center gap-1  text-[#ffc68a]">
                  <FaHeart />
                  <span className="text-black ml-2">5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex-1 flex flex-col gap-4 ml-10">
          <div className="bg-tertiary p-4 rounded-xl shadow">
            <PopupButton
              url="https://calendly.com/lingibilel/15min"
              rootElement={document.getElementById("root")}
              text="réserver"
              className="w-full h-4 flex items-center justify-center text-center  text-black rounded-md"
            />
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
