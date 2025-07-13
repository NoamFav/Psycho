import React, { useState, useEffect } from "react";
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
      <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:rotate-1 group">
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
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-blue-300/20 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
    </div>
  );
};

// Modern navigation menu
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSubList = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="w-full lg:w-80 mb-8 lg:mb-0 relative z-10">
      <div className="lg:hidden flex justify-between items-center py-6">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Séverine Favier
        </div>
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-xl bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
        >
          <div className="w-6 h-6 relative">
            <span
              className={`absolute block w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                mobileMenuOpen ? "top-3 rotate-45" : "top-1"
              }`}
            ></span>
            <span
              className={`absolute block w-full h-0.5 bg-gray-800 transition-all duration-300 top-3 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute block w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                mobileMenuOpen ? "top-3 -rotate-45" : "top-5"
              }`}
            ></span>
          </div>
        </button>
      </div>

      <nav className={`${mobileMenuOpen ? "block" : "hidden"} lg:block`}>
        <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-6 shadow-2xl">
          <ul className="space-y-3">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `group flex items-center px-6 py-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                      : "text-gray-700 hover:shadow-md"
                  }`
                }
              >
                <FaBook className="text-xl mr-3 group-hover:scale-110 transition-transform duration-300" />

                <span className="font-medium">Accueil</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/psycho"
                className={({ isActive }) =>
                  `group flex items-center px-6 py-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                      : "text-gray-700 hover:shadow-md"
                  }`
                }
              >
                <FaBrain className="text-xl mr-3 group-hover:scale-110 transition-transform duration-300" />

                <span className="font-medium">Psychopédagogie</span>
              </NavLink>
            </li>
            <li className="relative">
              <div
                onClick={toggleSubList}
                className={`group w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white ${
                  isOpen
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "text-gray-700 hover:shadow-md"
                }`}
              >
                <NavLink to="/approach" className="flex items-center w-full">
                  <FaStar className="text-xl mr-3 group-hover:scale-110 transition-transform duration-300" />

                  <span className="font-medium">Mon approche</span>
                </NavLink>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
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
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <ul className="ml-6 mt-2 space-y-2">
                  <li>
                    <NavLink
                      to="/school"
                      className={({ isActive }) =>
                        `group flex items-center px-6 py-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-400 hover:text-white ${
                          isActive
                            ? "bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-md"
                            : "text-gray-600 hover:shadow-sm"
                        }`
                      }
                    >
                      <FaBullseye className="text-lg mr-3 group-hover:scale-110 transition-transform duration-300" />

                      <span className="font-medium">Suivi scolaire</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/learn"
                      className={({ isActive }) =>
                        `group flex items-center px-6 py-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-400 hover:text-white ${
                          isActive
                            ? "bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-md"
                            : "text-gray-600 hover:shadow-sm"
                        }`
                      }
                    >
                      <FaRocket className="text-lg mr-3 group-hover:scale-110 transition-transform duration-300" />

                      <span className="font-medium">Apprendre à apprendre</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/brevet"
                      className={({ isActive }) =>
                        `group flex items-center px-6 py-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-400 hover:text-white ${
                          isActive
                            ? "bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-md"
                            : "text-gray-600 hover:shadow-sm"
                        }`
                      }
                    >
                      <FaTrophy className="text-lg mr-3 group-hover:scale-110 transition-transform duration-300" />

                      <span className="font-medium">Préparation brevet</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink
                to="/pre"
                className={({ isActive }) =>
                  `group flex items-center px-6 py-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                      : "text-gray-700 hover:shadow-md"
                  }`
                }
              >
                <MdBackpack className="text-xl mr-3 group-hover:scale-110 transition-transform duration-300" />

                <span className="font-medium">Pré-rentrée</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/who"
                className={({ isActive }) =>
                  `group flex items-center px-6 py-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                      : "text-gray-700 hover:shadow-md"
                  }`
                }
              >
                <FaUserGraduate className="text-xl mr-3 group-hover:scale-110 transition-transform duration-300" />

                <span className="font-medium">Qui suis-je</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  `group flex items-center px-6 py-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                      : "text-gray-700 hover:shadow-md"
                  }`
                }
              >
                <FaPhone className="text-xl mr-3 group-hover:scale-110 transition-transform duration-300" />

                <span className="font-medium">Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

// Modern Home component
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
          <p className="text-2xl lg:text-3xl text-gray-700 font-light">
            Psychopédagogue certifiée
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-96 h-64 overflow-hidden rounded-3xl shadow-2xl">
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
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <FaQuestion className="text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Pourquoi ?</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
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
                <FaLightbulb className="text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Comment ?</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
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
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Prêt à débuter l&apos;aventure ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez comment libérer le potentiel de votre enfant grâce à une
            approche sur mesure
          </p>
          <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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

// Modern Psycho component
const Psycho = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          La Psychopédagogie
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Une approche holistique pour accompagner chaque enfant vers la
          réussite
        </p>
      </div>

      <div className="text-center">
        <img
          src={psychoPersonal}
          alt="Accompagnement personnalisé"
          className="rounded-3xl shadow-2xl mx-auto hover:scale-105 transition-transform duration-500"
        />
      </div>

      <AnimatedCard>
        <div className="p-8 space-y-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
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

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-3xl">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              L&apos;approche psychopédagogique prend en compte tous les aspects
              du développement -
              <span className="font-semibold text-purple-600">
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

// Modern School component
const School = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Suivi Scolaire Personnalisé
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Un accompagnement sur mesure pour révéler le potentiel de chaque élève
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatedCard>
          <div className="p-8 space-y-6">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                <FaChartBar className="text-3xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Le Bilan</h2>
              <p className="text-lg text-purple-600 font-semibold">
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
                  className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors duration-300"
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <p className="text-gray-700">{item.text}</p>
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
              className="rounded-3xl shadow-2xl mx-auto hover:scale-105 transition-transform duration-500"
            />
          </div>

          <AnimatedCard>
            <div className="p-8 text-center space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Tarifs</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl">
                  <FaMoneyBillWave className="text-2xl mr-3" />
                  <span className="text-xl font-semibold">Bilan : 300€</span>
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl">
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
              <FaBullseye className="text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Le Suivi</h2>
            <p className="text-lg text-blue-600 font-semibold">
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
                className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:from-purple-100 hover:to-pink-100 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center space-y-2">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-gray-700 font-medium">{item.text}</p>
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
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Apprendre à Apprendre
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Acquérir les bonnes méthodologies de travail, adaptées à chacun
        </p>
      </div>

      <div className="text-center">
        <img
          src={learn}
          alt="Méthodes d'apprentissage"
          className="rounded-3xl shadow-2xl mx-auto hover:scale-105 transition-transform duration-500"
        />
      </div>

      <AnimatedCard>
        <div className="p-8 space-y-8">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
              <FaBullseye className="text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              À chacun sa façon de travailler !
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-purple-600">
                S&apos;appuyant sur :
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl">
                  <FaLightbulb className="text-2xl" />
                  <p className="text-gray-700">
                    Les intelligences multiples (Howard Gardner)
                  </p>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl">
                  <FaHandshake className="text-2xl" />
                  <p className="text-gray-700">
                    Un entretien avec l&apos;élève et ses parents
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-purple-600">
                Nous travaillons sur :
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Méthodes de travail
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      <FaPenFancy />
                      Prise de notes
                    </li>
                    <li>
                      <FaFileAlt /> Fiches structurées
                    </li>
                    <li>
                      <FaMap /> Mind mapping
                    </li>
                    <li>
                      <FaQuoteRight /> Flash cards
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <h4 className="font-semibold text-gray-800">
                    Mise en œuvre autonome
                  </h4>
                </div>
                <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
                  <h4 className="font-semibold text-gray-800">
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
            <h2 className="text-3xl font-bold text-gray-800">
              Informations pratiques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">
                  <FaUsers /> Public
                </h3>
                <p className="text-gray-700">Collégiens et lycéens</p>
              </div>
              <div className="p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  <FaCalendarAlt /> Périodes
                </h3>
                <p className="text-gray-700">
                  Dernière semaine d&apos;août + petites vacances
                </p>
              </div>
              <div className="p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl">
                <h3 className="text-xl font-semibold text-pink-800 mb-2">
                  <FaMoneyBillWave /> Tarif
                </h3>
                <p className="text-gray-700 font-bold">450€ pour 5 séances</p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl">
            <p className="text-xl font-semibold">
              <FaArrowRight /> Apprendre à travailler de manière plus efficace
            </p>
          </div>
        </div>
      </AnimatedCard>
    </div>
  );
};

// Modern Brevet component
const Brevet = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          En route pour le brevet !
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Un accompagnement complet pour réussir cette étape importante
        </p>
      </div>

      <div className="text-center">
        <img
          src={brevetPrep}
          alt="Préparation au brevet"
          className="rounded-3xl shadow-2xl mx-auto hover:scale-105 transition-transform duration-500"
        />
      </div>

      <AnimatedCard>
        <div className="p-8 space-y-8">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
              <FaGraduationCap className="text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              Programme intensif
            </h2>
            <p className="text-lg text-gray-600">
              Dès les vacances de la Toussaint, j&apos;accompagne vos enfants
              dans leurs révisions, leur organisation, et la préparation aux
              différentes épreuves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-purple-600">
                Informations pratiques
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                  <p className="text-gray-700">
                    <span className="font-semibold">Périodes :</span> Vacances
                    de février / printemps + avant l&apos;examen
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <p className="text-gray-700">
                    <span className="font-semibold">Groupe :</span> Min 2 élèves
                    / Max 4 élèves
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
                  <p className="text-gray-700">
                    <span className="font-semibold">Durée :</span> 10h de cours
                    (2h/jour pendant 5 jours)
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-purple-600">
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
                    className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:from-purple-100 hover:to-pink-100 transition-all duration-300"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-gray-700">{item.text}</span>
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
            <h2 className="text-3xl font-bold text-gray-800">Tarifs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">
                  <FaCalendarAlt /> Session unique
                </h3>
                <p className="text-2xl font-bold text-gray-800">
                  300€ / semaine
                </p>
              </div>
              <div className="p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  <FaBullseye /> 4 sessions annuelles
                </h3>
                <p className="text-2xl font-bold text-gray-800">
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

// Modern Pre component
const Pre = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Pour une Rentrée Réussie !
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Une semaine de révision pour aborder la rentrée de façon sereine
        </p>
      </div>

      <div className="text-center">
        <img
          src={preFirstDay}
          alt="Préparation rentrée"
          className="rounded-3xl shadow-2xl mx-auto hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatedCard>
          <div className="p-8 space-y-6">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto">
                <MdBackpack className="text-3xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Le Programme</h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Je vous propose d&apos;accueillir vos enfants fin août pour
                réviser ensemble, de manière ludique et bienveillante, les
                notions de l&apos;année précédente.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Nous travaillerons sur :
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    • Les compétences non acquises ou fragiles
                  </p>
                  <p className="text-gray-700">
                    • Les méthodes de travail efficaces
                  </p>
                  <p className="text-gray-700">
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
                <FaUsers className="text-3xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">
                Informations Pratiques
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Pour qui ?
                </h3>
                <p className="text-gray-700">
                  Tous les élèves de primaire, collégiens et nouveaux lycéens
                </p>
              </div>

              <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Période
                </h3>
                <p className="text-gray-700">
                  Du 26 au 30 août (horaires à définir ensemble)
                </p>
              </div>

              <div className="p-4 bg-gradient-to-r from-pink-50 to-red-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Format
                </h3>
                <p className="text-gray-700">
                  5 séances de 1h à 1h30 selon le niveau et les besoins
                </p>
              </div>

              <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Tarifs
                </h3>
                <div className="space-y-1">
                  <p className="text-gray-700">• 50€/h en individuel</p>
                  <p className="text-gray-700">• En groupe : sur devis</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};

// Modern Who component
const Who = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Qui suis-je ?
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez mon parcours et ma passion pour l&apos;accompagnement
          éducatif
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatedCard>
          <div className="p-8 space-y-6">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                <FaChalkboardTeacher className="text-3xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Mon Parcours</h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Après une décennie dans les ressources humaines, ma passion pour
                la psychologie et l&apos;école m&apos;a menée à
                l&apos;enseignement.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                J&apos;ai enseigné avec enthousiasme en zone prioritaire pendant
                près de 10 ans. J&apos;ai trop souvent été confrontée aux défis
                des enfants à besoins éducatifs particuliers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Pour mieux y répondre, j&apos;ai suivi une formation spécifique
                au sein de l&apos;Éducation Nationale. Maman de deux enfants,
                j&apos;ai également expérimenté les complexités de
                l&apos;inclusion.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
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
              className="rounded-3xl shadow-2xl mx-auto hover:scale-105 transition-transform duration-500"
            />
          </div>

          <AnimatedCard>
            <div className="p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto">
                  <FaGraduationCap className="text-3xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
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
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-50 to-red-50 rounded-xl hover:from-pink-100 hover:to-red-100 transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <p className="text-gray-700 font-medium">{item.text}</p>
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

// Modern Approach component
const Approach = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Mon Approche
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Une méthode personnalisée qui révèle le potentiel unique de chaque
          enfant
        </p>
      </div>

      <div className="text-center">
        <img
          src={approachHand}
          alt="Enfant avec une main tendue"
          className="rounded-3xl shadow-2xl mx-auto hover:scale-105 transition-transform duration-500"
        />
      </div>

      <AnimatedCard>
        <div className="p-8 space-y-6">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
              <FaBullseye className="text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              Comprendre l&apos;individu dans toute sa complexité
            </h2>
            <p className="text-lg text-purple-600 font-semibold">
              Adapter l&apos;apprentissage à ses besoins spécifiques
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-3xl">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
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
            <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center">
              <FaStar className="mr-4 text-4xl" />
              Mes Objectifs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <FaBullseye />,
                title: "M'adapter à chacun",
                color: "from-purple-400 to-pink-400",
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
                className={`group p-6 rounded-2xl bg-gradient-to-r ${item.color} text-white hover:scale-105 transition-all duration-300 hover:shadow-xl`}
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

// Modern Contacts component
const Contacts = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Contact
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Prêt à commencer cette aventure ensemble ?
        </p>
      </div>

      <AnimatedCard>
        <div className="p-8 text-center space-y-8">
          <div className="space-y-4">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
              <FaPhone className="text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              Premier échange téléphonique
            </h2>
            <p className="text-lg text-gray-600">
              Discutons ensemble des besoins de votre enfant
            </p>
          </div>

          <a
            href="https://calendly.com/psychopedagogue/reunion?month=2024-11"
            className="inline-block group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Adresse</h3>
            </div>

            <div className="text-center space-y-2">
              <p className="text-lg font-medium text-gray-800">16 rue Tilly</p>
              <p className="text-lg font-medium text-gray-800">
                92700 Colombes
              </p>
            </div>

            <div className="text-center">
              <img
                src={contactsRoom}
                alt="Salle de classe"
                className="rounded-2xl shadow-lg mx-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={400}>
          <div className="p-8 space-y-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto">
                <FaUserGraduate className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Séverine Favier
              </h3>
              <p className="text-lg text-purple-600 font-semibold">
                Psychopédagogue certifiée
              </p>
            </div>

            <div className="text-center">
              <img
                src={contactsAvatar}
                alt="Séverine Favier"
                className="rounded-full shadow-lg mx-auto w-32 h-32 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </AnimatedCard>
      </div>

      <AnimatedCard delay={600}>
        <div className="p-8 space-y-6">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Suivez-moi</h3>
            <p className="text-lg text-gray-600">
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
                className={`group p-6 rounded-2xl bg-gradient-to-r ${social.color} text-white hover:scale-105 transition-all duration-300 hover:shadow-xl`}
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
        <section className="p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Localisation</h3>
            <p className="text-lg text-gray-600">
              Carte Google Map interactive
            </p>
            <div className="overflow-hidden rounded-2xl shadow-inner">
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

// Main App component
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 relative overflow-hidden">
        <FloatingElements />
        <div className="relative z-10 container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
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
  );
};

export default App;
