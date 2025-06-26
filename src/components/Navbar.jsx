import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import aditipic from "../assets/aditivrindavan.jpg"; // Your circular image

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showModal, setShowModal] = useState(false); // modal state
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);

      if (scrollTop > lastScrollY.current && scrollTop > 100) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      lastScrollY.current = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Modal close on overlay or ESC
  useEffect(() => {
    if (!showModal) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showModal]);

  return (
    <>
      {/* Modal for full image */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setShowModal(false)}
        >
          <img
            src={aditipic}
            alt="Aditi Full"
            className="max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl border-4 border-purple-500"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <nav
        className={`
          ${styles.paddingX}
          w-full flex items-center py-2 fixed top-0 z-20
          transition-transform duration-300
          ${scrolled ? "bg-primary" : "bg-transparent"}
          ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Aditi Mukherjee
            </p>
          </Link>

          {/* Desktop Navbar */}
          <ul className="list-none hidden sm:flex flex-row gap-8 items-center">
            {/* About link with large image on the left */}
            <li className="flex items-center gap-3">
              <img
                src={aditipic}
                alt="Aditi"
                className="w-[152px] h-[152px] rounded-full object-cover border-4 border-purple-500 cursor-pointer hover:scale-105 transition duration-300"
                onClick={() => setShowModal(true)}
              />

              <a
                href="#about"
                className={`${
                  active === "About" ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive("About")}
              >
                About
              </a>
            </li>

            {/* Other Nav Links */}
            {navLinks
              .filter((nav) => nav.title !== "About")
              .map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
          </ul>

          {/* Mobile Navbar */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl flex-col items-center`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}

                {/* Circular Image inside Mobile Menu */}
                <li className="mt-4 self-center">
                  <img
                    src={aditipic}
                    alt="Aditi"
                    className="w-28 h-28 max-w-[112px] max-h-[112px] rounded-full object-cover border-2 border-purple-500 cursor-pointer hover:scale-105 transition duration-300"
                    onClick={() => setShowModal(true)}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
