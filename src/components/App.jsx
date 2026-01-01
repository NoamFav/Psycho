import { useState, useEffect, createContext, useContext } from "react";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

import logo from "../assets/logo.png";
import homeCreative from "../assets/home-creative.jpg";
import homeLearning from "../assets/home-learning.jpg";
import homeSuccess from "../assets/home-success.jpg";
import psychoPersonal from "../assets/psychop.png";
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
  FaHeartbeat,
  FaHeart,
  FaMicrophone,
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
  FaGraduationCap,
  FaQuoteRight,
  FaPaintBrush,
  FaPenFancy,
  FaDice,
  FaArrowRight,
  FaRocket,
  FaFont,
  FaBars,
  FaTimes,
  FaGithub,
  FaUserFriends,
} from "react-icons/fa";
{
  /*TODO make the color more pastel*/
}
import { MdBackpack } from "react-icons/md";

const FontContext = createContext();

const FontProvider = ({ children }) => {
  const [isDyslexic, setIsDyslexic] = useState(false);

  useEffect(() => {
    const saved = Cookies.get("dyslexicFont");
    if (saved !== undefined) {
      setIsDyslexic(saved === "true");
    }
  }, []);

  useEffect(() => {
    Cookies.set("dyslexicFont", isDyslexic.toString(), { expires: 365 });
    if (isDyslexic) {
      document.documentElement.classList.add("font-dyslexic");
    } else {
      document.documentElement.classList.remove("font-dyslexic");
    }
  }, [isDyslexic]);

  const toggleFont = () => setIsDyslexic((prev) => !prev);

  return (
    <FontContext.Provider value={{ isDyslexic, toggleFont }}>
      {children}
    </FontContext.Provider>
  );
};

FontProvider.propTypes = { children: PropTypes.node.isRequired };

const useFont = () => {
  const context = useContext(FontContext);
  if (!context) throw new Error("useFont must be used within a FontProvider");
  return context;
};

// Top Navigation Bar
const TopNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { isDyslexic, toggleFont } = useFont();

  const navLinks = [
    { to: "/", label: "Accueil", icon: <FaBook /> },
    { to: "/psycho", label: "Psychopédagogie", icon: <FaBrain /> },

    { to: "/contacts", label: "Contact", icon: <FaPhone /> },
  ];

  const serviceLinks = [
    { to: "/school", label: "Suivi scolaire", icon: <FaBullseye /> },
    { to: "/learn", label: "Apprendre à apprendre", icon: <FaRocket /> },
    { to: "/brevet", label: "Préparation brevet", icon: <FaTrophy /> },
    { to: "/pre", label: "Pré-rentrée", icon: <MdBackpack /> },
    { to: "/highschool", label: "Lycée", icon: <FaSchool /> },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20 ">
          {/* Logo */}
          {/*TODO add her logo instead*/}
          <NavLink to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <FaBrain className="text-white text-2xl" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-gray-900">
                Séverine Favier
              </h1>
              <p className="text-sm text-purple-600">Psychopédagogue</p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.slice(0, 2).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-medium transition-colors ${
                    isActive
                      ? "text-purple-600 bg-purple-50"
                      : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
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
              </button>
              {servicesOpen && (
                <div className="absolute top-full mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                  {serviceLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={() => setServicesOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 text-sm transition-colors ${
                          isActive
                            ? "text-purple-600 bg-purple-50"
                            : "text-gray-700 hover:bg-gray-50"
                        }`
                      }
                    >
                      {link.icon}
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-medium transition-colors ${
                    isActive
                      ? "text-purple-600 bg-purple-50"
                      : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Font Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleFont}
              className="p-2 rounded-lg border border-purple-600 text-purple-600 hover:bg-purple-50 transition-colors"
              title={isDyslexic ? "Police standard" : "Police dyslexie"}
            >
              <FaFont className="text-lg" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive
                      ? "text-purple-600 bg-purple-50"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                {link.icon}
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 pt-2 border-t border-gray-100">
              <p className="px-4 py-2 text-sm font-semibold text-gray-500">
                Services
              </p>
              {serviceLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 pl-8 rounded-lg text-sm transition-colors ${
                      isActive
                        ? "text-purple-600 bg-purple-50"
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  {link.icon}
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Home Component
const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: homeCreative, alt: "Enfant créatif" },
    { src: homeLearning, alt: "Apprentissage ludique" },
    { src: homeSuccess, alt: "Réussite scolaire" },
  ];

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentImage((p) => (p + 1) % images.length),
      4000,
    );
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-12">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-xl" />
            <img
              src={logo}
              alt="Logo"
              className="relative object-contain rounded-3xl bg-white shadow-2xl ring-1 ring-black/5"
            />
          </div>
        </div>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Accompagnement personnalisé pour révéler le potentiel unique de chaque
          enfant
        </p>

        <div className="relative w-full max-w-4xl mx-auto h-96 rounded-2xl overflow-hidden shadow-2xl">
          {images.map((image, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                i === currentImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {/*TODO reduce slightly*/}
            </div>
          ))}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentImage ? "bg-white w-8" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why & How Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
              <FaQuestion className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Pourquoi ?</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Pour comprendre et améliorer le processus d'apprentissage de chaque
            élève, en alliant pédagogie moderne et psychologie bienveillante.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <FaLightbulb className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Comment ?</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Grâce à une approche personnalisée, fondée sur l'écoute, la
            bienveillance et l'adaptation aux besoins spécifiques de chaque
            enfant.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl text-white max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Pour me contacter</h2>
        <p className="text-xl mb-8 opacity-90">
          Et découvrir comment libérer le potentiel de votre enfant
        </p>
        <NavLink
          to="/contacts"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-xl transition-all transform hover:scale-105"
        >
          Commencer maintenant
          <FaArrowRight />
        </NavLink>
      </section>
    </div>
  );
};

// Psycho Component
const Psycho = () => {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-900">La Psychopédagogie</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Une approche holistique pour accompagner chaque enfant vers la
          réussite
        </p>
      </div>

      <div className="flex justify-center">
        <img
          src={psychoPersonal}
          alt="Accompagnement"
          className="w-80 h-80 rounded-2xl shadow-xl"
        />
      </div>
      {/*TODO make the the div keyword like the p below, i know its wrong but fuck it*/}
      <div className="bg-white p-8 rounded-2xl border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8 ">
          {" "}
          {/*TODO font smaller*/}
          Un soutien pour les enfants en difficulté scolaire ou face à des
          troubles d'apprentissage:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: <FaTools />, title: "Blocages", color: "bg-red-500" },
            {
              icon: <FaChartLine />,
              title: "Retards scolaires",
              color: "bg-orange-500",
            },
            {
              icon: <FaSchool />,
              title: "Phobies scolaires",
              color: "bg-blue-500",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`${item.color} text-white p-6 rounded-xl text-center`}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="bg-purple-50 p-8 rounded-xl text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Mais aussi pour renforcer l'estime de soi, la confiance, améliorer
            la mémoire, l'organisation et l'autonomie.
            <span className="block mt-4 font-semibold text-purple-700 text-xl">
              Chaque enfant est unique.
            </span>
          </p>
          {/*TODO add text from mom*/}
        </div>
      </div>
      {/*TODO: two cta one for who i am and the other for my approach, each individual page*/}
      {/* Who Am I Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl border border-indigo-100">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Qui suis-je ?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center">
                <FaChalkboardTeacher className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Mon Parcours</h3>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Après une décennie dans les ressources humaines, ma passion pour
                la psychologie et l'école m'a menée à l'enseignement.
              </p>
              <p>
                J'ai enseigné avec enthousiasme en zone prioritaire pendant près
                de 10 ans, confrontée aux défis des enfants à besoins éducatifs
                particuliers.
              </p>
              <p>
                Aujourd'hui, je mets mon expertise au service des enfants et des
                parents, en leur dédiant un espace personnalisé pour favoriser
                l'épanouissement.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src={whoPortrait}
              alt="Séverine Favier"
              className="rounded-2xl shadow-xl mx-auto"
            />

            <div className="space-y-3">
              {[
                {
                  icon: <FaGraduationCap />,
                  text: "Master MEEF - Ingénierie de la formation",
                },
                { icon: <FaBrain />, text: "Psychologue Praticienne" },
                { icon: <FaUserTie />, text: "Master Management RH" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200"
                >
                  <span className="text-xl text-pink-600">{item.icon}</span>
                  <p className="text-sm text-gray-700 font-medium">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Approach Section */}
      <div className="text-center space-y-8">
        <h2 className="text-4xl font-bold text-gray-900">Mon Approche</h2>
        <img
          src={approachHand}
          alt="Approche"
          className="rounded-2xl shadow-xl mx-auto max-w-2xl"
        />

        <div className="bg-purple-50 p-8 rounded-xl max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            Ma méthode pédagogique allie outils modernes et approches
            traditionnelles, en cohérence avec les programmes nationaux, pour
            créer un environnement d'apprentissage optimal.
          </p>
        </div>
        {/*TODO less fat*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              icon: <FaBullseye />,
              title: "M'adapter à chacun",
              color: "bg-purple-500",
            },
            {
              icon: <FaStar />,
              title: "Renforcer la confiance",
              color: "bg-pink-500",
            },
            {
              icon: <FaBook />,
              title: "Soutenir les évaluations",
              color: "bg-blue-500",
            },
            {
              icon: <FaLightbulb />,
              title: "Susciter la curiosité",
              color: "bg-green-500",
            },
            {
              icon: <FaQuoteRight />,
              title: "Développer l'autonomie",
              color: "bg-orange-500",
            },
            {
              icon: <FaHandshake />,
              title: "Collaborer avec tous",
              color: "bg-indigo-500",
            },
          ].map((item, i) => (
            <div key={i} className={`${item.color} text-white p-6 rounded-xl`}>
              <div className="text-3xl mb-3">{item.icon}</div>
              <p className="font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// School Component
const School = () => {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Suivi Scolaire Personnalisé
        </h1>
        <p className="text-xl text-gray-600">
          Un accompagnement sur mesure pour chaque élève
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-gray-200">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaChartBar className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Le Bilan</h2>
            <p className="text-purple-600 font-semibold mt-2">4 séances d'1h</p>
          </div>

          <div className="space-y-3">
            {[
              {
                icon: <FaHandshake />,
                text: "Rencontre en climat de confiance ",
              },
              { icon: <FaSearch />, text: "Évaluation complète(2 séances)" },
              { icon: <FaClipboardList />, text: "Restitution détaillée" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl"
              >
                <span className="text-xl text-purple-600">{item.icon}</span>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <img
            src={psychoHelp}
            alt="Accompagnement"
            className="rounded-2xl shadow-xl"
          />

          <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tarifs</h3>
            <div className="space-y-3">
              <div className="p-4 bg-purple-600 text-white rounded-xl flex items-center justify-center gap-3">
                <FaMoneyBillWave className="text-2xl" />
                <span className="text-xl font-semibold">Bilan : 300€</span>
              </div>
              <div className="p-4 bg-blue-600 text-white rounded-xl">
                <p className="font-semibold">Suivi : 55€/h (primaire)</p>
              </div>
              <div className="p-4 bg-blue-600 text-white rounded-xl">
                <p className="font-semibold">Suivi : 60€/h (collège)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-gray-200">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <FaBullseye className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Le Suivi</h2>
          <p className="text-blue-600 font-semibold mt-2">
            Séances individuelles vers une mediation appropriée
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { icon: <FaBook />, text: "Ateliers de lecture" },
            { icon: <FaBullseye />, text: "Soutien approfondi" },
            { icon: <FaPaintBrush />, text: "Méthodes alternatives" },
            { icon: <FaPenFancy />, text: "Techniques d'organisation" },
            { icon: <FaBrain />, text: "Apprendre à apprendre" },
            { icon: <FaDice />, text: "Jeux pédagogiques" },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-purple-50 rounded-xl text-center">
              <div className="text-2xl text-purple-600 mb-2">{item.icon}</div>
              <p className="text-sm text-gray-700 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Learn Component
const Learn = () => {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Apprendre à Apprendre
        </h1>
        <p className="text-xl text-gray-600">
          Acquérir les bonnes méthodologies de travail
        </p>
      </div>

      <img
        src={learn}
        alt="Apprentissage"
        className="rounded-2xl shadow-xl mx-auto max-w-3xl"
      />

      <div className="bg-white p-8 rounded-2xl border border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            À chacun sa façon de travailler !
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-600">
              S'appuyant sur :
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl">
                <FaLightbulb className="text-2xl text-purple-600" />
                <p className="text-gray-700">
                  Les intelligences multiples (Howard Gardner)
                </p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl">
                <FaHandshake className="text-2xl text-purple-600" />
                <p className="text-gray-700">Entretien personnalisé</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-600">
              Nous travaillons sur :
            </h3>
            <div className="space-y-3">
              <div className="p-4 bg-purple-50 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Méthodes de travail
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <FaPenFancy className="text-purple-600" />
                    Prise de notes
                  </div>
                  <div className="flex items-center gap-2">
                    <FaFileAlt className="text-purple-600" />
                    Fiches
                  </div>
                  <div className="flex items-center gap-2">
                    <FaQuoteRight className="text-purple-600" />
                    Flash cards
                  </div>
                  {/*TODO add mindmap*/}
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <h4 className="font-semibold text-gray-800">
                  Mise en œuvre autonome
                </h4>
              </div>
              <div className="p-4 bg-pink-50 rounded-xl">
                <h4 className="font-semibold text-gray-800">
                  Organisation quotidienne
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-8">Informations pratiques</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <FaUsers className="text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Public</h3>
            <p>Collégiens et lycéens</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <FaCalendarAlt className="text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Périodes</h3>
            <p>Fin août + petites vacances</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <FaMoneyBillWave className="text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Tarif</h3>
            <p className="font-bold text-xl">450€ pour 5 séances</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Brevet Component
const Brevet = () => {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-900">
          En route pour le brevet !
        </h1>
        <p className="text-xl text-gray-600">
          Un accompagnement complet pour réussir
        </p>
      </div>

      <img
        src={brevetPrep}
        alt="Préparation brevet"
        className="rounded-2xl shadow-xl mx-auto max-w-3xl"
      />

      <div className="bg-white p-8 rounded-2xl border border-gray-200">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <FaGraduationCap className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Programme intensif
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-600">
              Informations pratiques
            </h3>
            <div className="space-y-3">
              <div className="p-4 bg-purple-50 rounded-xl">
                <p className="text-gray-700">
                  <span className="font-semibold">Périodes :</span> Toussaint,
                  février, printemps + session intensive
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <p className="text-gray-700">
                  <span className="font-semibold">Groupe :</span> 3 à 6 élèves
                </p>
              </div>
              <div className="p-4 bg-pink-50 rounded-xl">
                <p className="text-gray-700">
                  <span className="font-semibold">Vacances :</span> 15h (3h/jour
                  × 5 jours)
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <p className="text-gray-700">
                  <span className="font-semibold">Session intensive :</span> 17h
                  sur 6 sessions
                </p>
              </div>
              {/*TODO add session intensive en juin*/}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-600">
              Au programme
            </h3>
            <div className="space-y-2">
              {[
                { icon: <FaClipboardList />, text: "Organisation optimale" },
                { icon: <FaBook />, text: "Révision toutes matières" },
                { icon: <FaBullseye />, text: "Méthodologies" },
                { icon: <FaChartLine />, text: "Approfondissement" },
                { icon: <FaDice />, text: "Quiz et challenges" },
                { icon: <FaHeartbeat />, text: "Gestion du stress" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl"
                >
                  <span className="text-xl text-purple-600">{item.icon}</span>
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-8">Tarifs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <FaCalendarAlt className="text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Session standard</h3>
            <p className="text-3xl font-bold">300€/semaine</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <FaBullseye className="text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Session intensive</h3>
            <p className="text-3xl font-bold">350€/semaine</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Pre Component
const Pre = () => {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Pour une Rentrée Réussie !
        </h1>
        <p className="text-xl text-gray-600">Une semaine de révision sereine</p>
      </div>

      <img
        src={preFirstDay}
        alt="Préparation rentrée"
        className="rounded-2xl shadow-xl mx-auto max-w-3xl"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-gray-200">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MdBackpack className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Le Programme</h2>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Réviser ensemble, de manière ludique et bienveillante, les notions
              de l'année précédente.
            </p>
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Nous travaillerons sur :
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>• Compétences non acquises ou fragiles</p>
                <p>• Méthodes de travail efficaces</p>
                <p>• Autonomie et confiance</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-200">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaUsers className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Infos Pratiques
            </h2>
          </div>

          <div className="space-y-3">
            <div className="p-4 bg-blue-50 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Pour qui ?
              </h3>
              <p className="text-gray-700">
                Primaire, collège, nouveaux lycéens
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Période
              </h3>
              <p className="text-gray-700">Derniere semaine d'aout</p>
            </div>
            <div className="p-4 bg-pink-50 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Format
              </h3>
              <p className="text-gray-700">5 séances de 1h à 1h30</p>
            </div>
            <div className="p-4 bg-green-50 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Tarifs
              </h3>
              <div className="space-y-1 text-gray-700">
                <p>• 55€/h en individuel</p>
                <p>• Forfait 5 jours: 390€</p>
                <p>• En groupe : sur devis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Highschool Component
const Highschool = () => {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-900">Et au lycée !</h1>
        <p className="text-xl text-gray-600">
          Accompagnement pour chaque étape
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-gray-200">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <FaUsers className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Seconde</h2>
          Pour bien demarrer au lycée
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-600">Les défis</h3>
            <div className="space-y-2">
              {[
                { icon: <FaClock />, text: "Nouveau rythme" },
                { icon: <FaUsers />, text: "Autonomie accrue" },
                { icon: <FaChartLine />, text: "Méthodes exigeantes" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 bg-green-50 rounded-xl"
                >
                  <span className="text-xl text-green-600">{item.icon}</span>
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-teal-600">
              Mon accompagnement
            </h3>
            <div className="space-y-2">
              {[
                { icon: <FaClipboardList />, text: "Mieux s'organiser" },
                { icon: <FaBullseye />, text: "Gagner en efficacité" },
                { icon: <FaClock />, text: "Gérer son temps" },
                { icon: <FaHeart />, text: "Restaurer la motivation" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 bg-teal-50 rounded-xl"
                >
                  <span className="text-xl text-teal-600">{item.icon}</span>
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-gray-200">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <FaBook className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Première – Bac de Français
          </h2>
          Pour aborder le bac de francais avec clarté et confiance
          {/*TODO Stylizer*/}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { icon: <FaBook />, text: "Vulgarisation des œuvres" },
            { icon: <FaBrain />, text: "Méthode de mémorisation" },
            { icon: <FaBullseye />, text: "Aide aux choix" },
            { icon: <FaClipboardList />, text: "Méthodologie rédaction" },
            { icon: <FaUsers />, text: "Quiz ludiques" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl"
            >
              <span className="text-xl text-blue-600">{item.icon}</span>
              <span className="text-gray-700 text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-gray-200">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <FaGraduationCap className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Terminale</h2>
          Pour préparer le bac efficacement
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: <FaClipboardList />, text: "Outils de planification" },
            { icon: <FaBrain />, text: "Fiches et cartes mentales" },
            { icon: <FaMicrophone />, text: "Préparation Grand Oral" },
            { icon: <FaHeart />, text: "Motivation et confiance" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 bg-red-50 rounded-xl"
            >
              <span className="text-xl text-red-600 mt-1">{item.icon}</span>
              <span className="text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-6">Tarif</h2>
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl max-w-md mx-auto">
          <p className="text-4xl font-bold">65€/heure</p>
        </div>
        {/*TODO reduce it*/}
      </div>
    </div>
  );
};

// Contacts Component
//TODO Add her google review somehow and google view
const Contacts = () => (
  <div className="space-y-16">
    <div className="text-center space-y-4">
      <h1 className="text-5xl font-bold text-gray-900">Contact</h1>
      <p className="text-xl text-gray-600">
        Prêt à commencer cette aventure ensemble ?
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-2xl border border-gray-200">
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <FaMapMarkerAlt className="text-white text-xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Adresse</h3>
        </div>
        <div className="text-center space-y-2 mb-6">
          <p className="text-lg font-medium text-gray-800">16 rue Tilly</p>
          <p className="text-lg font-medium text-gray-800">92700 Colombes</p>
        </div>
        <img src={contactsRoom} alt="Salle" className="rounded-xl shadow-md" />
      </div>

      <div className="bg-white p-8 rounded-2xl border border-gray-200">
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <FaUserGraduate className="text-white text-xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Séverine Favier</h3>
          <p className="text-lg text-purple-600 font-semibold mt-2">
            Psychopédagogue
          </p>
        </div>
        <img
          src={contactsAvatar}
          alt="Séverine"
          className="rounded-full shadow-md mx-auto w-32 h-32 object-cover"
        />
      </div>
    </div>
  </div>
);

// Footer
const Footer = () => (
  <footer className="mt-20 border-t border-gray-200 bg-gray-50">
    {/*TODO add legal mention*/}
    <div className="max-w-7xl mx-auto px-4 py-12 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Créé avec passion
      </h3>
      <a
        href="https://github.com/noamfav"
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-md transition-all"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-xl" />
        <span>Noam Favier</span>
      </a>
    </div>
  </footer>
);

// Main App
const App = () => (
  <FontProvider>
    <Router>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=OpenDyslexic&display=swap'); .dyslexic-font, .dyslexic-font * { font-family: 'OpenDyslexic', sans-serif !important; }`}</style>
      <div className="min-h-screen bg-gray-50">
        <TopNav />
        <main className="max-w-7xl mx-auto px-4 py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/psycho" element={<Psycho />} />
            <Route path="/school" element={<School />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/brevet" element={<Brevet />} />
            <Route path="/pre" element={<Pre />} />
            <Route path="/highschool" element={<Highschool />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </FontProvider>
);

export default App;
