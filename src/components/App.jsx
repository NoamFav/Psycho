import React, { useState, useEffect, createContext, useContext } from "react";

import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import homeCreative from "../assets/home-creative.jpg";
import homeLearning from "../assets/home-learning.jpg";
import homeSuccess from "../assets/home-success.jpg";
import psychoPersonal from "../assets/psyco-personal.jpg";
import psychoHelp from "../assets/psycho-help.jpg";
import learn from "../assets/learn.jpg";
import brevetPrep from "../assets/brevet-prep.jpg";
import approachHand from "../assets/approach-hand.jpg";
import preFirstDay from "../assets/pre-first-day.jpg";
import whoPortrait from "../assets/who-portrait.png";
import contactsRoom from "../assets/contacts-room.jpg";
import contactsAvatar from "../assets/contacts-avatar.jpg";

import {
  FaMoon,
  FaSun,
  FaBook,
  FaBrain,
  FaStar,
  FaTrophy,
  FaUserGraduate,
  FaPhone,
  FaMapMarkerAlt,
  FaQuestion,
  FaUserTie,
  FaTools,
  FaLightbulb,
  FaBullseye,
  FaChartLine,
  FaChartBar,
  FaCalendarAlt,
  FaSchool,
  FaClipboardList,
  FaHandshake,
  FaSearch,
  FaMoneyBillWave,
  FaClock,
  FaUsers,
  FaChalkboardTeacher,
  FaFileAlt,
  FaMap,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaGraduationCap,
  FaQuoteRight,
  FaPaintBrush,
  FaPenFancy,
  FaDice,
  FaNotesMedical,
  FaArrowRight,
  FaRocket,
} from "react-icons/fa";

import { MdBackpack } from "react-icons/md";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (saved !== null) {
      setIsDarkMode(JSON.parse(saved));
    } else {
      setIsDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white/30 dark:hover:bg-gray-700/50 transition-all duration-300 shadow-lg"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <FaSun className="text-2xl text-yellow-400" />
      ) : (
        <FaMoon className="text-2xl text-purple-600" />
      )}
    </button>
  );
};

// Custom hook for intersection observer
const useIntersectionObserver = (ref, options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref, options]);

  return isIntersecting;
};

// Modern animated card component
const AnimatedCard = ({ children, className = "", delay = 0 }) => {
  const cardRef = React.useRef(null);
  const isVisible = useIntersectionObserver(cardRef, { threshold: 0.1 });

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 rotate-0"
          : "opacity-0 translate-y-8 rotate-1"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-3xl shadow-2xl hover:shadow-3xl dark:shadow-gray-900/50 transition-all duration-500 hover:scale-105 hover:rotate-1 group">
        {children}
      </div>
    </div>
  );
};

AnimatedCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
};

// Floating elements background
const FloatingElements = () => {
  const [elements, setElements] = useState([]);

  // Generate random movement for each element
  useEffect(() => {
    const generateElements = () => {
      const elementConfigs = [
        // Large background elements
        {
          size: "w-64 h-64",
          lightColor: "bg-purple-200/60",
          darkColor: "bg-purple-600/80",
          blur: "blur-3xl",
        },
        {
          size: "w-96 h-96",
          lightColor: "bg-pink-200/50",
          darkColor: "bg-pink-600/70",
          blur: "blur-3xl",
        },
        {
          size: "w-48 h-48",
          lightColor: "bg-blue-200/70",
          darkColor: "bg-blue-600/90",
          blur: "blur-3xl",
        },

        // Medium floating orbs
        {
          size: "w-32 h-32",
          lightColor: "bg-cyan-300/60",
          darkColor: "bg-cyan-400/80",
          blur: "blur-2xl",
        },
        {
          size: "w-40 h-40",
          lightColor: "bg-emerald-300/50",
          darkColor: "bg-emerald-400/70",
          blur: "blur-2xl",
        },
        {
          size: "w-36 h-36",
          lightColor: "bg-orange-300/60",
          darkColor: "bg-orange-500/80",
          blur: "blur-2xl",
        },
        {
          size: "w-28 h-28",
          lightColor: "bg-yellow-300/70",
          darkColor: "bg-yellow-400/90",
          blur: "blur-2xl",
        },

        // Small ambient particles
        {
          size: "w-16 h-16",
          lightColor: "bg-indigo-400/60",
          darkColor: "bg-indigo-300/80",
          blur: "blur-xl",
        },
        {
          size: "w-20 h-20",
          lightColor: "bg-rose-400/50",
          darkColor: "bg-rose-300/70",
          blur: "blur-xl",
        },
        {
          size: "w-12 h-12",
          lightColor: "bg-teal-400/70",
          darkColor: "bg-teal-300/90",
          blur: "blur-lg",
        },
        {
          size: "w-24 h-24",
          lightColor: "bg-violet-400/60",
          darkColor: "bg-violet-300/80",
          blur: "blur-xl",
        },
        {
          size: "w-18 h-18",
          lightColor: "bg-lime-400/50",
          darkColor: "bg-lime-300/70",
          blur: "blur-lg",
        },

        // Tiny sparkle effects
        {
          size: "w-8 h-8",
          lightColor: "bg-amber-500/80",
          darkColor: "bg-amber-200/90",
          blur: "blur-sm",
        },
        {
          size: "w-6 h-6",
          lightColor: "bg-pink-500/70",
          darkColor: "bg-pink-200/80",
          blur: "blur-sm",
        },
        {
          size: "w-10 h-10",
          lightColor: "bg-blue-500/60",
          darkColor: "bg-blue-200/70",
          blur: "blur-sm",
        },
        {
          size: "w-8 h-8",
          lightColor: "bg-green-500/80",
          darkColor: "bg-green-200/90",
          blur: "blur-sm",
        },
        {
          size: "w-12 h-12",
          lightColor: "bg-purple-500/70",
          darkColor: "bg-purple-200/80",
          blur: "blur-sm",
        },

        // Floating geometric shapes
        {
          size: "w-32 h-32",
          lightColor: "bg-gradient-to-br from-red-300/60 to-orange-300/60",
          darkColor: "bg-gradient-to-br from-red-400/80 to-orange-400/80",
          blur: "blur-2xl",
          shape: "rounded-2xl",
        },
        {
          size: "w-28 h-28",
          lightColor: "bg-gradient-to-tr from-cyan-300/50 to-blue-300/50",
          darkColor: "bg-gradient-to-tr from-cyan-400/70 to-blue-400/70",
          blur: "blur-2xl",
          shape: "rounded-2xl",
        },
        {
          size: "w-24 h-24",
          lightColor: "bg-gradient-to-bl from-emerald-300/60 to-teal-300/60",
          darkColor: "bg-gradient-to-bl from-emerald-400/80 to-teal-400/80",
          blur: "blur-xl",
          shape: "rounded-xl",
        },

        // Drifting elements
        {
          size: "w-44 h-44",
          lightColor: "bg-slate-400/20",
          darkColor: "bg-slate-200/40",
          blur: "blur-3xl",
        },
        {
          size: "w-52 h-52",
          lightColor: "bg-neutral-400/15",
          darkColor: "bg-neutral-200/35",
          blur: "blur-3xl",
        },
        {
          size: "w-38 h-38",
          lightColor: "bg-stone-400/25",
          darkColor: "bg-stone-200/45",
          blur: "blur-2xl",
        },
      ];

      return elementConfigs.map((config, index) => ({
        ...config,
        id: index,
        x: Math.random() * 100,
        y: Math.random() * 100,
        dx: (Math.random() - 0.5) * 0.3, // Slower movement
        dy: (Math.random() - 0.5) * 0.3,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        scale: 0.8 + Math.random() * 0.4, // Random scale between 0.8 and 1.2
        animationDelay: Math.random() * 5,
        animationDuration: 2 + Math.random() * 4, // Between 2-6 seconds
        animationType: Math.random() > 0.5 ? "pulse" : "bounce",
      }));
    };

    setElements(generateElements());
  }, []);

  // Animation loop for movement
  useEffect(() => {
    const interval = setInterval(() => {
      setElements((prevElements) =>
        prevElements.map((element) => {
          let newX = element.x + element.dx;
          let newY = element.y + element.dy;
          let newDx = element.dx;
          let newDy = element.dy;

          // Bounce off edges with some randomness
          if (newX <= -10 || newX >= 110) {
            newDx = -element.dx + (Math.random() - 0.5) * 0.1;
            newX = Math.max(-10, Math.min(110, newX));
          }
          if (newY <= -10 || newY >= 110) {
            newDy = -element.dy + (Math.random() - 0.5) * 0.1;
            newY = Math.max(-10, Math.min(110, newY));
          }

          // Add some random direction changes
          if (Math.random() < 0.02) {
            // 2% chance per frame
            newDx += (Math.random() - 0.5) * 0.1;
            newDy += (Math.random() - 0.5) * 0.1;
            // Limit speed
            const speed = Math.sqrt(newDx * newDx + newDy * newDy);
            if (speed > 0.5) {
              newDx = (newDx / speed) * 0.5;
              newDy = (newDy / speed) * 0.5;
            }
          }

          return {
            ...element,
            x: newX,
            y: newY,
            dx: newDx,
            dy: newDy,
            rotation: element.rotation + element.rotationSpeed,
          };
        }),
      );
    }, 100); // Update every 100ms for smooth movement

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute transition-all duration-1000 ease-in-out ${element.size} ${element.lightColor} dark:${element.darkColor} ${element.blur} ${element.shape || "rounded-full"} ${element.animationType === "pulse" ? "animate-pulse" : "animate-bounce"}`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            transform: `translate(-50%, -50%) rotate(${element.rotation}deg) scale(${element.scale})`,
            animationDelay: `${element.animationDelay}s`,
            animationDuration: `${element.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};

// Modern navigation menu
import React, { useState } from "react";
import {
  FaBook,
  FaBrain,
  FaStar,
  FaBullseye,
  FaRocket,
  FaTrophy,
  FaUserGraduate,
  FaPhone,
} from "react-icons/fa";
import { MdBackpack } from "react-icons/md";

// Mock NavLink component for demonstration
const NavLink = ({ to, children, className }) => {
  const [isActive] = useState(to === "/"); // Mock active state
  return (
    <div
      className={
        typeof className === "function" ? className({ isActive }) : className
      }
    >
      {children}
    </div>
  );
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleSubList = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { to: "/", icon: FaBook, label: "Accueil", delay: "0ms" },
    { to: "/psycho", icon: FaBrain, label: "Psychopédagogie", delay: "100ms" },
    { to: "/pre", icon: MdBackpack, label: "Pré-rentrée", delay: "200ms" },
    { to: "/who", icon: FaUserGraduate, label: "Qui suis-je", delay: "300ms" },
    { to: "/contacts", icon: FaPhone, label: "Contact", delay: "400ms" },
  ];

  const subMenuItems = [
    { to: "/school", icon: FaBullseye, label: "Suivi scolaire", delay: "0ms" },
    {
      to: "/learn",
      icon: FaRocket,
      label: "Apprendre à apprendre",
      delay: "100ms",
    },
    {
      to: "/brevet",
      icon: FaTrophy,
      label: "Préparation brevet",
      delay: "200ms",
    },
  ];

  return (
    <div className="w-full lg:w-80 mb-8 lg:mb-0 relative z-10">
      {/* Mobile Header */}
      <div className="lg:hidden flex justify-between items-center py-6">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-800 dark:to-pink-300 bg-clip-text text-transparent animate-pulse">
          Séverine Favier
        </div>
        <button
          onClick={toggleMobileMenu}
          className="p-3 rounded-xl bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 active:scale-95 group"
        >
          <div className="w-6 h-6 relative">
            <span
              className={`absolute block w-full h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-500 ease-in-out transform ${
                mobileMenuOpen
                  ? "top-3 rotate-45 bg-purple-600 dark:bg-pink-300"
                  : "top-1 group-hover:bg-purple-600 dark:group-hover:bg-pink-300"
              }`}
            ></span>
            <span
              className={`absolute block w-full h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 top-3 ${
                mobileMenuOpen
                  ? "opacity-0 scale-0"
                  : "opacity-100 scale-100 group-hover:bg-purple-600 dark:group-hover:bg-pink-300"
              }`}
            ></span>
            <span
              className={`absolute block w-full h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-500 ease-in-out transform ${
                mobileMenuOpen
                  ? "top-3 -rotate-45 bg-purple-600 dark:bg-pink-300"
                  : "top-5 group-hover:bg-purple-600 dark:group-hover:bg-pink-300"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Navigation */}
      <nav
        className={`${mobileMenuOpen ? "block" : "hidden"} lg:block transition-all duration-500`}
      >
        <div
          className={`bg-white/10 dark:bg-gray-800/30 backdrop-blur-md rounded-3xl border border-white/20 dark:border-gray-700/20 p-6 shadow-2xl dark:shadow-gray-900/50 transition-all duration-700 ${
            mobileMenuOpen ? "animate-slideInDown" : ""
          }`}
        >
          <ul className="space-y-3">
            {/* Regular Menu Items */}
            {menuItems.map((item) => (
              <li
                key={item.to}
                className={`transform transition-all duration-500 ${
                  mobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "lg:translate-x-0 lg:opacity-100"
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? item.delay : "0ms",
                  animationDelay: item.delay,
                }}
                onMouseEnter={() => setHoveredItem(item.to)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `group flex items-center px-6 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 active:scale-95 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 dark:hover:from-purple-800 dark:hover:to-pink-300 hover:text-white hover:shadow-xl ${
                      isActive
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-800 dark:to-pink-300 text-white shadow-lg scale-105"
                        : "text-gray-700 dark:text-gray-200 hover:shadow-md"
                    } ${hoveredItem === item.to ? "translate-x-2" : ""}`
                  }
                >
                  <item.icon
                    className={`text-xl mr-3 transition-all duration-300 ${
                      hoveredItem === item.to
                        ? "scale-125 rotate-12"
                        : "group-hover:scale-110"
                    }`}
                  />
                  <span className="font-medium transition-all duration-300">
                    {item.label}
                  </span>
                  {hoveredItem === item.to && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full animate-ping"></div>
                  )}
                </NavLink>
              </li>
            ))}

            {/* Dropdown Menu Item */}
            <li
              className="relative transform transition-all duration-500"
              style={{ transitionDelay: "250ms" }}
              onMouseEnter={() => setHoveredItem("/approach")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div
                onClick={toggleSubList}
                className={`group w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 active:scale-95 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 dark:hover:from-purple-800 dark:hover:to-pink-300 hover:text-white cursor-pointer hover:shadow-xl ${
                  isOpen
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-800 dark:to-pink-300 text-white shadow-lg scale-105"
                    : "text-gray-700 dark:text-gray-200 hover:shadow-md"
                } ${hoveredItem === "/approach" ? "translate-x-2" : ""}`}
              >
                <div className="flex items-center w-full">
                  <FaStar
                    className={`text-xl mr-3 transition-all duration-300 ${
                      hoveredItem === "/approach"
                        ? "scale-125 rotate-12"
                        : "group-hover:scale-110"
                    } ${isOpen ? "animate-spin" : ""}`}
                  />
                  <span className="font-medium transition-all duration-300">
                    Mon approche
                  </span>
                </div>
                <svg
                  className={`w-4 h-4 transition-all duration-500 ease-in-out ${
                    isOpen ? "rotate-180 scale-110" : "group-hover:scale-110"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                {hoveredItem === "/approach" && (
                  <div className="ml-2 w-2 h-2 bg-white rounded-full animate-ping"></div>
                )}
              </div>

              {/* Submenu */}
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="ml-6 mt-2 space-y-2">
                  {subMenuItems.map((item) => (
                    <li
                      key={item.to}
                      className={`transform transition-all duration-500 ${
                        isOpen
                          ? "translate-y-0 opacity-100 scale-100"
                          : "translate-y-4 opacity-0 scale-95"
                      }`}
                      style={{
                        transitionDelay: isOpen ? item.delay : "0ms",
                      }}
                      onMouseEnter={() => setHoveredItem(item.to)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          `group flex items-center px-6 py-3 rounded-xl transition-all duration-500 transform hover:scale-105 active:scale-95 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 dark:hover:from-pink-300 dark:hover:to-purple-800 hover:text-white hover:shadow-lg ${
                            isActive
                              ? "bg-gradient-to-r from-pink-400 to-purple-400 dark:from-pink-300 dark:to-purple-800 text-white shadow-md scale-105"
                              : "text-gray-600 dark:text-gray-300 hover:shadow-sm"
                          } ${hoveredItem === item.to ? "translate-x-2" : ""}`
                        }
                      >
                        <item.icon
                          className={`text-lg mr-3 transition-all duration-300 ${
                            hoveredItem === item.to
                              ? "scale-125 rotate-12"
                              : "group-hover:scale-110"
                          }`}
                        />
                        <span className="font-medium transition-all duration-300">
                          {item.label}
                        </span>
                        {hoveredItem === item.to && (
                          <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                        )}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 animate-bounce"></div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideInDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideInDown {
          animation: slideInDown 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

// Home component
const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: homeCreative, alt: "Enfant créatif" },
    { src: homeLearning, alt: "Apprentissage ludique" },
    { src: homeSuccess, alt: "Réussite scolaire" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
            Séverine Favier
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 font-light">
            Psychopédagogue certifiée
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-96 h-64 overflow-hidden rounded-3xl shadow-2xl dark:shadow-gray-900/50">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentImage
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-110"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImage
                      ? "bg-white scale-125"
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatedCard delay={200}>
          <div className="p-8 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-800 dark:to-pink-300 rounded-2xl flex items-center justify-center">
                <FaQuestion className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                Pourquoi ?
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Comprendre et améliorer le processus d&apos;apprentissage de
              chaque élève en alliant pédagogie moderne et approche
              psychologique bienveillante.
            </p>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={400}>
          <div className="p-8 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <FaLightbulb className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                Comment ?
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Une approche personnalisée basée sur l&apos;écoute, la
              bienveillance et l&apos;adaptation pour révéler et libérer le
              potentiel unique de chaque enfant.
            </p>
          </div>
        </AnimatedCard>
      </div>

      {/* Call to Action */}
      <AnimatedCard delay={600}>
        <div className="p-12 text-center space-y-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-800 dark:to-pink-300 bg-clip-text text-transparent">
            Prêt à débuter l&apos;aventure ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez comment libérer le potentiel de votre enfant grâce à une
            approche sur mesure
          </p>
          <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-800 dark:to-pink-300 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="flex items-center space-x-2">
              <span>Commencer maintenant</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
          </button>
        </div>
      </AnimatedCard>
    </div>
  );
};

// Modern Psycho component with dark mode support
const Psycho = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-800 dark:to-pink-300 bg-clip-text text-transparent">
          La Psychopédagogie
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Une approche holistique pour accompagner chaque enfant vers la
          réussite
        </p>
      </div>

      <div className="text-center">
        <img
          src={psychoPersonal}
          alt="Accompagnement personnalisé"
          className="rounded-3xl shadow-2xl dark:shadow-gray-900/50 mx-auto hover:scale-105 transition-transform duration-500"
        />
      </div>

      <AnimatedCard>
        <div className="p-8 space-y-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center">
            Un soutien adapté aux difficultés scolaires
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <FaTools />,
                title: "Blocages",
                color: "from-red-400 to-pink-400",
              },
              {
                icon: <FaChartLine />,
                title: "Retards scolaires",
                color: "from-yellow-400 to-orange-400",
              },
              {
                icon: <FaSchool />,
                title: "Phobies scolaires",
                color: "from-blue-400 to-purple-400",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-gradient-to-r ${item.color} text-white text-center space-y-3 hover:scale-105 transition-transform duration-300`}
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50  dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-3xl border border-purple-100/50 dark:border-purple-800/30">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              L&apos;approche psychopédagogique prend en compte tous les aspects
              du développement -
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                {" "}
                intellectuel, émotionnel, social et cognitif
              </span>{" "}
              - pour favoriser l&apos;épanouissement à l&apos;école et dans la
              vie quotidienne.
            </p>
          </div>
        </div>
      </AnimatedCard>
    </div>
  );
};

// Modern School component with dark mode support
const School = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-800 dark:to-pink-300  bg-clip-text text-transparent">
          Suivi Scolaire Personnalisé
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Un accompagnement sur mesure pour révéler le potentiel de chaque élève
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatedCard>
          <div className="p-8 space-y-6">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-800 dark:to-pink-300 rounded-full flex items-center justify-center mx-auto">
                <FaChartBar className="text-3xl text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                Le Bilan
              </h2>
              <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">
                4 séances d&apos;1h
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: <FaHandshake />,
                  text: "Rencontre dans un climat de confiance et sécurité",
                },
                {
                  icon: <FaSearch />,
                  text: "Évaluation complète des acquis et du comportement",
                },
                {
                  icon: <FaClipboardList />,
                  text: "Restitution détaillée et conseils personnalisés",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-800/30 border border-purple-100/50 dark:border-purple-800/30 transition-colors duration-300"
                >
                  <span className="text-2xl text-purple-600 dark:text-purple-400 flex-shrink-0">
                    {item.icon}
                  </span>
                  <p className="text-gray-700 dark:text-gray-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedCard>

        <div className="space-y-8">
          <div className="text-center">
            <img
              src={psychoHelp}
              alt="Accompagnement bienveillant"
              className="rounded-3xl shadow-2xl dark:shadow-gray-900/50 mx-auto hover:scale-105 transition-transform duration-500"
            />
          </div>

          <AnimatedCard>
            <div className="p-8 text-center space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Tarifs
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-800 dark:to-pink-300 text-white rounded-2xl flex items-center justify-center">
                  <FaMoneyBillWave className="text-2xl mr-3" />
                  <span className="text-xl font-semibold">Bilan : 300€</span>
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl flex items-center justify-center">
                  <FaClock className="text-2xl mr-3" />
                  <span className="text-xl font-semibold">Suivi : 50€/h</span>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>

      <AnimatedCard delay={400}>
        <div className="p-8 space-y-8">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
              <FaBullseye className="text-3xl text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Le Suivi
            </h2>
            <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
              Séances personnalisées - Rythme adapté
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <FaBook />, text: "Ateliers de lecture" },
              { icon: <FaBullseye />, text: "Soutien approfondi" },
              { icon: <FaPaintBrush />, text: "Méthodes alternatives" },
              { icon: <FaPenFancy />, text: "Techniques d'organisation" },
              { icon: <FaBrain />, text: "Apprendre à apprendre" },
              { icon: <FaDice />, text: "Jeux pédagogiques" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-r from-purple-50 to-pink-50  dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-800/30 dark:hover:to-pink-800/30 border border-purple-100/50 dark:border-purple-800/30 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center space-y-2">
                  <span className="text-2xl text-purple-600 dark:text-purple-400">
                    {item.icon}
                  </span>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedCard>
    </div>
  );
};

// Modern Learn component
const Learn = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-800 dark:to-pink-300 bg-clip-text text-transparent">
          Apprendre à Apprendre
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Acquérir les bonnes méthodologies de travail, adaptées à chacun
        </p>
      </div>

      <div className="text-center">
        <img
          src={learn}
          alt="Méthodes d'apprentissage"
          className="rounded-3xl shadow-2xl dark:shadow-gray-900/50 mx-auto hover:scale-105 transition-transform duration-500"
        />
      </div>

      <AnimatedCard>
        <div className="p-8 space-y-8">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-800 dark:to-pink-300 rounded-full flex items-center justify-center mx-auto">
              <FaBullseye className="text-3xl text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              À chacun sa façon de travailler !
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                S&apos;appuyant sur :
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100/50 dark:border-purple-800/30">
                  <FaLightbulb className="text-2xl text-purple-600 dark:text-purple-400" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Les intelligences multiples (Howard Gardner)
                  </p>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100/50 dark:border-purple-800/30">
                  <FaHandshake className="text-2xl text-purple-600 dark:text-purple-400" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Un entretien avec l&apos;élève et ses parents
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                Nous travaillons sur :
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50  dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-100/50 dark:border-purple-800/30">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    Méthodes de travail
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li className="flex items-center space-x-2">
                      <FaPenFancy className="text-purple-600 dark:text-purple-400" />
                      <span>Prise de notes</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaFileAlt className="text-purple-600 dark:text-purple-400" />
                      <span>Fiches structurées</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaMap className="text-purple-600 dark:text-purple-400" />
                      <span>Mind mapping</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaQuoteRight className="text-purple-600 dark:text-purple-400" />
                      <span>Flash cards</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-100/50 dark:border-blue-800/30">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                    Mise en œuvre autonome
                  </h4>
                </div>
                <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl border border-pink-100/50 dark:border-pink-800/30">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                    Organisation quotidienne
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedCard>

      <AnimatedCard delay={400}>
        <div className="p-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Informations pratiques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-r from-purple-100 to-pink-100  dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl border border-purple-200/50 dark:border-purple-700/30">
                <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-2 flex items-center justify-center space-x-2">
                  <FaUsers />
                  <span>Public</span>
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Collégiens et lycéens
                </p>
              </div>
              <div className="p-6 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl border border-blue-200/50 dark:border-blue-700/30">
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-2 flex items-center justify-center space-x-2">
                  <FaCalendarAlt />
                  <span>Périodes</span>
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Dernière semaine d&apos;août + petites vacances
                </p>
              </div>
              <div className="p-6 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 rounded-2xl border border-pink-200/50 dark:border-pink-700/30">
                <h3 className="text-xl font-semibold text-pink-800 dark:text-pink-300 mb-2 flex items-center justify-center space-x-2">
                  <FaMoneyBillWave />
                  <span>Tarif</span>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-bold">
                  450€ pour 5 séances
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-800 dark:to-pink-300 text-white rounded-2xl shadow-lg">
            <p className="text-xl font-semibold flex items-center justify-center space-x-2">
              <FaArrowRight />
              <span>Apprendre à travailler de manière plus efficace</span>
            </p>
          </div>
        </div>
      </AnimatedCard>
    </div>
  );
};

// Modern Brevet component with dark mode support
const Brevet = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-800 dark:to-pink-300 bg-clip-text text-transparent">
          En route pour le brevet !
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Un accompagnement complet pour réussir cette étape importante
        </p>
      </div>

      <div className="text-center">
        <img
          src={brevetPrep}
          alt="Préparation au brevet"
          className="rounded-3xl shadow-2xl dark:shadow-gray-900/50 mx-auto hover:scale-105 transition-transform duration-500"
        />
      </div>

      <AnimatedCard>
        <div className="p-8 space-y-8">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-800 dark:to-pink-300 rounded-full flex items-center justify-center mx-auto">
              <FaGraduationCap className="text-3xl text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Programme intensif
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Dès les vacances de la Toussaint, j&apos;accompagne vos enfants
              dans leurs révisions, leur organisation, et la préparation aux
              différentes épreuves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                Informations pratiques
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50  dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-100/50 dark:border-purple-800/30">
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Périodes :</span> Vacances
                    de février / printemps + avant l&apos;examen
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-100/50 dark:border-blue-800/30">
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Groupe :</span> Min 2 élèves
                    / Max 4 élèves
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl border border-pink-100/50 dark:border-pink-800/30">
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Durée :</span> 10h de cours
                    (2h/jour pendant 5 jours)
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                Au programme
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  {
                    icon: <FaClipboardList />,
                    text: "Organisation et optimisation de travail",
                  },
                  {
                    icon: <FaBook />,
                    text: "Révision dans toutes les matières",
                  },
                  { icon: <FaBullseye />, text: "Méthodologies de travail" },
                  {
                    icon: <FaChartLine />,
                    text: "Approfondissement des notions",
                  },
                  { icon: <FaDice />, text: "Exercices, quiz et challenges" },
                  { icon: <FaNotesMedical />, text: "Gestion du stress" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 0 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-800/30 dark:hover:to-pink-800/30 transition-all duration-300 border border-purple-100/50 dark:border-purple-800/30"
                  >
                    <span className="text-xl text-purple-600 dark:text-purple-400">
                      {item.icon}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedCard>

      <AnimatedCard delay={400}>
        <div className="p-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Tarifs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="p-6 bg-gradient-to-r from-purple-100 to-pink-100  dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl border border-purple-200/50 dark:border-purple-700/30">
                <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-2 flex items-center justify-center space-x-2">
                  <FaCalendarAlt />
                  <span>Session unique</span>
                </h3>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  300€ / semaine
                </p>
              </div>
              <div className="p-6 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl border border-blue-200/50 dark:border-blue-700/30">
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-2 flex items-center justify-center space-x-2">
                  <FaBullseye />
                  <span>4 sessions annuelles</span>
                </h3>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  250€ / semaine
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedCard>
    </div>
  );
};

// Modern Pre component with dark mode support
const Pre = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-800 dark:to-pink-300 bg-clip-text text-transparent">
          Pour une Rentrée Réussie !
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Une semaine de révision pour aborder la rentrée de façon sereine
        </p>
      </div>

      <div className="text-center">
        <img
          src={preFirstDay}
          alt="Préparation rentrée"
          className="rounded-3xl shadow-2xl dark:shadow-gray-900/50 mx-auto hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatedCard>
          <div className="p-8 space-y-6">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto">
                <MdBackpack className="text-3xl text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                Le Programme
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Je vous propose d&apos;accueillir vos enfants fin août pour
                réviser ensemble, de manière ludique et bienveillante, les
                notions de l&apos;année précédente.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-2xl border border-green-100/50 dark:border-green-800/30">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                  Nous travaillerons sur :
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700 dark:text-gray-300">
                    • Les compétences non acquises ou fragiles
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    • Les méthodes de travail efficaces
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    • L&apos;autonomie et la confiance en soi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={200}>
          <div className="p-8 space-y-6">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                <FaUsers className="text-3xl text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                Informations Pratiques
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-100/50 dark:border-blue-800/30">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Pour qui ?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Tous les élèves de primaire, collégiens et nouveaux lycéens
                </p>
              </div>

              <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50  dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-100/50 dark:border-purple-800/30">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Période
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Du 26 au 30 août (horaires à définir ensemble)
                </p>
              </div>

              <div className="p-4 bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-xl border border-pink-100/50 dark:border-pink-800/30">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Format
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  5 séances de 1h à 1h30 selon le niveau et les besoins
                </p>
              </div>

              <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl border border-green-100/50 dark:border-green-800/30">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Tarifs
                </h3>
                <div className="space-y-1">
                  <p className="text-gray-700 dark:text-gray-300">
                    • 50€/h en individuel
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    • En groupe : sur devis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};

// Modern Who component with dark mode support
const Who = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-800 dark:to-pink-300 bg-clip-text text-transparent">
          Qui suis-je ?
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Découvrez mon parcours et ma passion pour l&apos;accompagnement
          éducatif
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatedCard>
          <div className="p-8 space-y-6">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                <FaChalkboardTeacher className="text-3xl text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                Mon Parcours
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Après une décennie dans les ressources humaines, ma passion pour
                la psychologie et l&apos;école m&apos;a menée à
                l&apos;enseignement.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                J&apos;ai enseigné avec enthousiasme en zone prioritaire pendant
                près de 10 ans. J&apos;ai trop souvent été confrontée aux défis
                des enfants à besoins éducatifs particuliers.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Pour mieux y répondre, j&apos;ai suivi une formation spécifique
                au sein de l&apos;Éducation Nationale. Maman de deux enfants,
                j&apos;ai également expérimenté les complexités de
                l&apos;inclusion.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Aujourd&apos;hui, je souhaite mettre mon expertise au service
                des enfants et des parents, en leur dédiant un espace
                personnalisé pour favoriser l&apos;épanouissement scolaire et
                personnel de tous.
              </p>
            </div>
          </div>
        </AnimatedCard>

        <div className="space-y-8">
          <div className="text-center">
            <img
              src={whoPortrait}
              alt="Séverine Favier"
              className="rounded-3xl shadow-2xl dark:shadow-gray-900/50 mx-auto hover:scale-105 transition-transform duration-500"
            />
          </div>

          <AnimatedCard>
            <div className="p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto">
                  <FaGraduationCap className="text-3xl text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                  Mes Qualifications
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  {
                    icon: <FaGraduationCap />,
                    text: "Master 1 MEEF - pratique & ingénierie de la formation",
                  },
                  { icon: <FaBook />, text: "Concours Professeurs des écoles" },
                  { icon: <FaBrain />, text: "Psychologue Praticienne" },
                  {
                    icon: <FaUserTie />,
                    text: "Master 2 en Management des Ressources Humaines",
                  },
                  {
                    icon: <FaChartBar />,
                    text: "Master 1 en Sociologie du travail et du développement",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-xl hover:from-pink-100 hover:to-red-100 dark:hover:from-pink-800/30 dark:hover:to-red-800/30 transition-all duration-300 hover:scale-105 border border-pink-100/50 dark:border-pink-800/30"
                  >
                    <span className="text-2xl text-pink-600 dark:text-pink-400">
                      {item.icon}
                    </span>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </div>
  );
};

// Modern Approach component with dark mode support
const Approach = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-800 dark:to-pink-300 bg-clip-text text-transparent">
          Mon Approche
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Une méthode personnalisée qui révèle le potentiel unique de chaque
          enfant
        </p>
      </div>

      <div className="text-center">
        <img
          src={approachHand}
          alt="Enfant avec une main tendue"
          className="rounded-3xl shadow-2xl dark:shadow-gray-900/50 mx-auto hover:scale-105 transition-transform duration-500"
        />
      </div>

      <AnimatedCard>
        <div className="p-8 space-y-6">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-800 dark:to-pink-300 rounded-full flex items-center justify-center mx-auto">
              <FaBullseye className="text-3xl text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Comprendre l&apos;individu dans toute sa complexité
            </h2>
            <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">
              Adapter l&apos;apprentissage à ses besoins spécifiques
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50  dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-3xl border border-purple-100/50 dark:border-purple-800/30">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              Ma méthode pédagogique allie les outils modernes et des approches
              traditionnelles, conformes aux programmes nationaux, pour créer un
              environnement d&apos;apprentissage optimal.
            </p>
          </div>
        </div>
      </AnimatedCard>

      <AnimatedCard delay={200}>
        <div className="p-8 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 flex items-center justify-center">
              <FaStar className="mr-4 text-4xl text-purple-600 dark:text-purple-400" />
              Mes Objectifs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <FaBullseye />,
                title: "M'adapter à chacun",
                color:
                  "from-purple-400 to-pink-400 dark:from-purple-800 dark:to-pink-300",
              },
              {
                icon: <FaStar />,
                title: "Renforcer la confiance et l'estime de soi",
                color: "from-pink-400 to-red-400",
              },
              {
                icon: <FaBook />,
                title: "Soutenir lors des évaluations",
                color: "from-blue-400 to-purple-400",
              },
              {
                icon: <FaLightbulb />,
                title: "Susciter la curiosité et le désir d'apprendre",
                color: "from-green-400 to-blue-400",
              },
              {
                icon: <FaQuoteRight />,
                title: "Développer l'autonomie et le plaisir d'apprendre",
                color: "from-yellow-400 to-orange-400",
              },
              {
                icon: <FaHandshake />,
                title: "Collaborer avec les parents / acteurs éducatifs",
                color: "from-indigo-400 to-purple-400",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl bg-gradient-to-r ${item.color} text-white hover:scale-105 transition-all duration-300 hover:shadow-xl dark:shadow-gray-900/30`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <p className="text-lg font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedCard>
    </div>
  );
};

// Modern Contacts component with dark mode support
const Contacts = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-800 dark:to-pink-300 bg-clip-text text-transparent">
          Contact
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Prêt à commencer cette aventure ensemble ?
        </p>
      </div>

      <AnimatedCard>
        <div className="p-8 text-center space-y-8">
          <div className="space-y-4">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-800 dark:to-pink-300 rounded-full flex items-center justify-center mx-auto">
              <FaPhone className="text-3xl text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Premier échange téléphonique
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discutons ensemble des besoins de votre enfant
            </p>
          </div>

          <a
            href="https://calendly.com/psychopedagogue/reunion?month=2024-11"
            className="inline-block group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-800 dark:to-pink-300 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl dark:shadow-gray-900/30 transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center space-x-2">
              <span>Réserver un appel</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
          </a>
        </div>
      </AnimatedCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatedCard delay={200}>
          <div className="p-8 space-y-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                <FaMapMarkerAlt className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Adresse
              </h3>
            </div>

            <div className="text-center space-y-2">
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                16 rue Tilly
              </p>
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                92700 Colombes
              </p>
            </div>

            <div className="text-center">
              <img
                src={contactsRoom}
                alt="Salle de classe"
                className="rounded-2xl shadow-lg dark:shadow-gray-900/50 mx-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={400}>
          <div className="p-8 space-y-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto">
                <FaUserGraduate className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Séverine Favier
              </h3>
              <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">
                Psychopédagogue certifiée
              </p>
            </div>

            <div className="text-center">
              <img
                src={contactsAvatar}
                alt="Séverine Favier"
                className="rounded-full shadow-lg dark:shadow-gray-900/50 mx-auto w-32 h-32 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </AnimatedCard>
      </div>

      <AnimatedCard delay={600}>
        <div className="p-8 space-y-6">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Suivez-moi
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Restez connecté pour plus de conseils et d&apos;actualités
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <FaFacebookF />,
                name: "Facebook",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: <FaInstagram />,
                name: "Instagram",
                color: "from-pink-500 to-purple-600",
              },
              {
                icon: <FaLinkedinIn />,
                name: "LinkedIn",
                color: "from-blue-600 to-blue-700",
              },
              {
                icon: <FaWhatsapp />,
                name: "WhatsApp",
                color: "from-green-500 to-green-600",
              },
            ].map((social, index) => (
              <button
                key={index}
                className={`group p-6 rounded-2xl bg-gradient-to-r ${social.color} text-white hover:scale-105 transition-all duration-300 hover:shadow-xl dark:shadow-gray-900/30`}
              >
                <div className="text-center space-y-2">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                  <p className="text-sm font-medium">{social.name}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </AnimatedCard>

      <AnimatedCard delay={800}>
        <section className="p-8 bg-gradient-to-r from-purple-50 to-pink-50  dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl border border-purple-100/50 dark:border-purple-800/30">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Localisation
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Carte Google Map interactive
            </p>
            <div className="overflow-hidden rounded-2xl shadow-inner dark:shadow-gray-900/50">
              <iframe
                title="Localisation"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.565993122632!2d2.265246176444258!3d48.92366057134102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e665ee84ec765b%3A0xdca84c8210b42996!2s16%20Rue%20Tilly%2C%2092700%20Colombes%2C%20France!5e0!3m2!1sen!2snl!4v1752427888237!5m2!1sen!2snl"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[300px] border-0"
              />
            </div>
          </div>
        </section>
      </AnimatedCard>
    </div>
  );
};

// Main App component with dark mode support
const App = () => {
  return (
    <DarkModeProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 relative overflow-hidden transition-colors duration-300">
          <FloatingElements />
          <div className="relative z-10 container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <DarkModeToggle />
              <Menu />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/psycho" element={<Psycho />} />
                  <Route path="/school" element={<School />} />
                  <Route path="/learn" element={<Learn />} />
                  <Route path="/brevet" element={<Brevet />} />
                  <Route path="/pre" element={<Pre />} />
                  <Route path="/who" element={<Who />} />
                  <Route path="/approach" element={<Approach />} />
                  <Route path="/contacts" element={<Contacts />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
      </Router>
    </DarkModeProvider>
  );
};

export default App;
