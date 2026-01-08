import { useState, useEffect, createContext, useContext } from "react";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

import logo from "../assets/logo.png";
import homeCreative from "../assets/home-creative.jpg";
import homeLearning from "../assets/home-learning.jpg";
import homeSuccess from "../assets/home-success.jpg";
import psychoPersonal from "../assets/psychop.png";
import psychoHelp from "../assets/equality.jpeg";
import learn from "../assets/learn.jpg";
import brevetPrep from "../assets/brevet-prep.jpg";
import approachHand from "../assets/approach-hand.jpg";
import preFirstDay from "../assets/pre-first-day.jpg";
import whoPortrait from "../assets/contacts-avatar.jpg";
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
  FaProjectDiagram,
  FaEnvelope,
  FaBalanceScale,
  FaGlobe,
} from "react-icons/fa";
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
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <NavLink to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Logo Séverine Favier"
              className="w-12 h-12 rounded-full object-cover border-2 border-amber-100"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-semibold text-stone-800">
                Séverine Favier
              </h1>
              <p className="text-sm text-amber-700">Psychopédagogue</p>
            </div>
          </NavLink>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.slice(0, 2).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-medium transition-colors ${
                    isActive
                      ? "text-amber-800 bg-amber-50"
                      : "text-stone-700 hover:text-amber-700 hover:bg-stone-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="px-4 py-2 rounded-lg font-medium text-stone-700 hover:text-amber-700 hover:bg-stone-50 transition-colors flex items-center gap-2"
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
                <div className="absolute top-full mt-2 w-56 bg-white rounded-lg shadow-lg border border-stone-200 py-2">
                  {serviceLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={() => setServicesOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 text-sm transition-colors ${
                          isActive
                            ? "text-amber-800 bg-amber-50"
                            : "text-stone-700 hover:bg-stone-50"
                        }`
                      }
                    >
                      <span className="text-amber-600">{link.icon}</span>
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
                      ? "text-amber-800 bg-amber-50"
                      : "text-stone-700 hover:text-amber-700 hover:bg-stone-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleFont}
              className="p-2 rounded-lg border border-amber-300 text-amber-700 hover:bg-amber-50 transition-colors"
              title={isDyslexic ? "Police standard" : "Police dyslexie"}
            >
              <FaFont className="text-lg" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-stone-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive
                      ? "text-amber-800 bg-amber-50"
                      : "text-stone-700 hover:bg-stone-50"
                  }`
                }
              >
                <span className="text-amber-600">{link.icon}</span>
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 pt-2 border-t border-stone-200">
              <p className="px-4 py-2 text-sm font-semibold text-stone-500">
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
                        ? "text-amber-800 bg-amber-50"
                        : "text-stone-700 hover:bg-stone-50"
                    }`
                  }
                >
                  <span className="text-amber-600">{link.icon}</span>
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
      <section className="text-center space-y-8 py-12">
        <div className="flex justify-center">
          <img
            src={logo}
            alt="Logo"
            className="w-40 h-40 object-contain rounded-2xl shadow-md border border-stone-200"
          />
        </div>

        <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light">
          Accompagnement personnalisé pour révéler le potentiel unique de chaque
          enfant
        </p>

        <div className="relative w-full max-w-4xl mx-auto h-80 rounded-xl overflow-hidden shadow-lg">
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
            </div>
          ))}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentImage ? "bg-amber-100 w-6" : "bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-amber-50 to-stone-50 p-8 rounded-xl border border-amber-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
              <FaQuestion className="text-white text-lg" />
            </div>
            <h2 className="text-2xl font-semibold text-stone-800">
              Pourquoi ?
            </h2>
          </div>
          <p className="text-stone-600 leading-relaxed">
            Pour comprendre et améliorer le processus d&apos;apprentissage de
            chaque élève, en alliant pédagogie moderne et psychologie
            bienveillante.
          </p>
        </div>

        <div className="bg-gradient-to-br from-stone-100 to-amber-50 p-8 rounded-xl border border-stone-200">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-stone-600 rounded-lg flex items-center justify-center">
              <FaLightbulb className="text-white text-lg" />
            </div>
            <h2 className="text-2xl font-semibold text-stone-800">Comment ?</h2>
          </div>
          <p className="text-stone-600 leading-relaxed">
            Grâce à une approche personnalisée, fondée sur l&apos;écoute, la
            bienveillance et l&apos;adaptation aux besoins spécifiques de chaque
            enfant.
          </p>
        </div>
      </section>

      <section className="text-center py-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-xl text-white max-w-3xl mx-auto shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Pour me contacter</h2>
        <p className="text-lg mb-8 opacity-90 font-light">
          Et découvrir comment libérer le potentiel de votre enfant
        </p>
        <NavLink
          to="/contacts"
          className="inline-flex items-center gap-2 px-8 py-3 bg-white text-amber-700 font-medium rounded-lg hover:shadow-lg transition-all"
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
        <h1 className="text-4xl font-semibold text-stone-800">
          La Psychopédagogie
        </h1>
        <p className="text-lg text-stone-600 max-w-3xl mx-auto font-light">
          Une approche holistique pour accompagner chaque enfant vers la
          réussite
        </p>
      </div>

      <div className="flex justify-center">
        <img
          src={psychoPersonal}
          alt="Accompagnement"
          className="w-80 h-80 rounded-xl shadow-md"
        />
      </div>

      <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm">
        <h2 className="text-xl font-semibold text-stone-800 text-center mb-8">
          Un soutien pour les enfants en difficulté scolaire ou face à des
          troubles d&apos;apprentissage
        </h2>
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {[
            {
              icon: <FaTools />,
              title: "Blocages",
              color: "bg-rose-100 text-rose-700",
            },
            {
              icon: <FaChartLine />,
              title: "Retards scolaires",
              color: "bg-orange-100 text-orange-700",
            },
            {
              icon: <FaSchool />,
              title: "Phobies scolaires",
              color: "bg-blue-100 text-blue-700",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`${item.color} px-5 py-3 rounded-lg flex items-center gap-2`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium text-sm">{item.title}</span>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 p-6 rounded-xl">
          <p className="text-stone-700 leading-relaxed mb-4">
            Mais aussi pour renforcer l&apos;estime de soi, la confiance,
            améliorer la mémoire, l&apos;organisation et l&apos;autonomie.
          </p>
          <p className="text-center font-semibold text-amber-800 text-lg mb-4">
            Chaque enfant est unique.
          </p>
          <p className="text-stone-700 leading-relaxed">
            Mon accompagnement s&apos;adapte aux besoins spécifiques de chaque
            élève, en créant un environnement sécurisant où il peut progresser à
            son rythme, développer ses compétences et retrouver le plaisir
            d&apos;apprendre. Je travaille en étroite collaboration avec les
            familles et les équipes éducatives pour garantir une approche
            cohérente et bienveillante.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-stone-50 to-amber-50 p-8 rounded-xl border border-stone-200">
        <h2 className="text-3xl font-semibold text-center text-stone-800 mb-12">
          Qui suis-je ?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                <FaChalkboardTeacher className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-stone-800">
                Mon Parcours
              </h3>
            </div>

            <div className="space-y-4 text-stone-700 leading-relaxed">
              <p>
                Après une décennie dans les ressources humaines, ma passion pour
                la psychologie et l&apos;école m&apos;a menée à
                l&apos;enseignement.
              </p>
              <p>
                J&apos;ai enseigné avec enthousiasme en zone prioritaire pendant
                près de 10 ans, confrontée aux défis des enfants à besoins
                éducatifs particuliers.
              </p>
              <p>
                Aujourd&apos;hui, je mets mon expertise au service des enfants
                et des parents, en leur dédiant un espace personnalisé pour
                favoriser l&apos;épanouissement.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src={whoPortrait}
              alt="Séverine Favier"
              className="rounded-xl shadow-md mx-auto"
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
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-stone-200"
                >
                  <span className="text-lg text-amber-600">{item.icon}</span>
                  <p className="text-sm text-stone-700 font-medium">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center space-y-8">
        <h2 className="text-3xl font-semibold text-stone-800">Mon Approche</h2>
        <img
          src={approachHand}
          alt="Approche"
          className="rounded-xl shadow-md mx-auto max-w-2xl"
        />

        <div className="bg-amber-50 p-6 rounded-xl max-w-3xl mx-auto">
          <p className="text-stone-700 leading-relaxed">
            Ma méthode pédagogique allie outils modernes et approches
            traditionnelles, en cohérence avec les programmes nationaux, pour
            créer un environnement d&apos;apprentissage optimal.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {[
            {
              icon: <FaBullseye />,
              title: "M'adapter à chacun",
              color: "bg-amber-100 text-amber-800",
            },
            {
              icon: <FaStar />,
              title: "Renforcer la confiance",
              color: "bg-rose-100 text-rose-800",
            },
            {
              icon: <FaBook />,
              title: "Soutenir les évaluations",
              color: "bg-blue-100 text-blue-800",
            },
            {
              icon: <FaLightbulb />,
              title: "Susciter la curiosité",
              color: "bg-green-100 text-green-800",
            },
            {
              icon: <FaQuoteRight />,
              title: "Développer l'autonomie",
              color: "bg-orange-100 text-orange-800",
            },
            {
              icon: <FaHandshake />,
              title: "Collaborer avec tous",
              color: "bg-indigo-100 text-indigo-800",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`${item.color} px-4 py-3 rounded-lg flex items-center gap-2`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium text-sm">{item.title}</span>
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
        <h1 className="text-4xl font-semibold text-stone-800">
          Suivi Scolaire Personnalisé
        </h1>
        <p className="text-lg text-stone-600">
          Un accompagnement sur mesure pour chaque élève
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm">
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FaChartBar className="text-white text-xl" />
            </div>
            <h2 className="text-2xl font-semibold text-stone-800">Le Bilan</h2>
            <p className="text-amber-700 font-medium mt-2">
              4 séances d&apos;1h
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                icon: <FaHandshake />,
                text: "Rencontre en climat de confiance",
              },
              { icon: <FaSearch />, text: "Évaluation complète (2 séances)" },
              { icon: <FaClipboardList />, text: "Restitution détaillée" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg"
              >
                <span className="text-lg text-amber-600">{item.icon}</span>
                <p className="text-stone-700 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <img
            src={psychoHelp}
            alt="Accompagnement"
            className="rounded-xl shadow-md"
          />

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
            <h3 className="text-xl font-semibold text-stone-800 mb-4 text-center">
              Tarifs
            </h3>
            <div className="space-y-3">
              <div className="p-4 bg-amber-100 text-amber-900 rounded-lg flex items-center justify-center gap-3">
                <FaMoneyBillWave className="text-xl" />
                <span className="text-lg font-semibold">Bilan : 300€</span>
              </div>
              <div className="p-4 bg-stone-100 text-stone-800 rounded-lg text-center">
                <p className="font-medium">Suivi : 55€/h (primaire)</p>
              </div>
              <div className="p-4 bg-stone-100 text-stone-800 rounded-lg text-center">
                <p className="font-medium">Suivi : 60€/h (collège)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-stone-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <FaBullseye className="text-white text-xl" />
          </div>
          <h2 className="text-2xl font-semibold text-stone-800">Le Suivi</h2>
          <p className="text-stone-600 font-medium mt-2">
            Séances individuelles vers une médiation appropriée
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { icon: <FaBook />, text: "Ateliers de lecture" },
            { icon: <FaBullseye />, text: "Soutien approfondi" },
            { icon: <FaPaintBrush />, text: "Méthodes alternatives" },
            { icon: <FaPenFancy />, text: "Techniques d'organisation" },
            { icon: <FaBrain />, text: "Apprendre à apprendre" },
            { icon: <FaDice />, text: "Jeux pédagogiques" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-3 bg-amber-50 rounded-lg flex items-center gap-2"
            >
              <span className="text-lg text-amber-600">{item.icon}</span>
              <span className="text-sm text-stone-700 font-medium">
                {item.text}
              </span>
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
        <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
          Apprendre à Apprendre
        </h1>
        <p className="text-xl text-gray-600">
          Acquérir les bonnes méthodologies de travail
        </p>
      </div>

      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-2xl blur opacity-20" />
        <img
          src={learn}
          alt="Apprentissage"
          className="relative rounded-2xl shadow-2xl mx-auto max-w-3xl ring-1 ring-amber-200"
        />
      </div>

      <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl border border-amber-200 shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent">
            À chacun sa façon de travailler !
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-amber-700">
              S&apos;appuyant sur :
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-200">
                <FaLightbulb className="text-2xl text-amber-600" />
                <p className="text-gray-700">
                  Les intelligences multiples (Howard Gardner)
                </p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-200">
                <FaHandshake className="text-2xl text-amber-600" />
                <p className="text-gray-700">Entretien personnalisé</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-amber-700">
              Nous travaillons sur :
            </h3>
            <div className="space-y-3">
              <div className="p-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border border-amber-200">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Méthodes de travail
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <FaPenFancy className="text-amber-600" />
                    Prise de notes
                  </div>
                  <div className="flex items-center gap-2">
                    <FaFileAlt className="text-amber-600" />
                    Fiches
                  </div>
                  <div className="flex items-center gap-2">
                    <FaQuoteRight className="text-amber-600" />
                    Flash cards
                  </div>
                  <div className="flex items-center gap-2">
                    <FaProjectDiagram className="text-amber-600" />
                    Cartes mentales
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                <h4 className="font-semibold text-gray-800">
                  Mise en œuvre autonome
                </h4>
              </div>
              <div className="p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-200">
                <h4 className="font-semibold text-gray-800">
                  Organisation quotidienne
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-600 text-white p-8 rounded-2xl shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <h2 className="relative text-3xl font-bold mb-8 text-center">
          Informations pratiques
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30">
            <FaUsers className="text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Public</h3>
            <p>Collégiens et lycéens</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30">
            <FaCalendarAlt className="text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Périodes</h3>
            <p>Fin août + petites vacances</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30">
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
        <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
          En route pour le brevet !
        </h1>
        <p className="text-xl text-gray-600">
          Un accompagnement complet pour réussir
        </p>
      </div>

      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-2xl blur opacity-20" />
        <img
          src={brevetPrep}
          alt="Préparation brevet"
          className="relative rounded-2xl shadow-2xl mx-auto max-w-3xl ring-1 ring-amber-200"
        />
      </div>

      <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl border border-amber-200 shadow-lg">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <FaGraduationCap className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent">
            Programme intensif
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-amber-700">
              Informations pratiques
            </h3>
            <div className="space-y-3">
              <div className="p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-200">
                <p className="text-gray-700">
                  <span className="font-semibold">Périodes :</span> Toussaint,
                  février, printemps + session intensive en juin
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                <p className="text-gray-700">
                  <span className="font-semibold">Groupe :</span> 3 à 6 élèves
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-200">
                <p className="text-gray-700">
                  <span className="font-semibold">Vacances :</span> 15h (3h/jour
                  × 5 jours)
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <p className="text-gray-700">
                  <span className="font-semibold">Session intensive :</span> 17h
                  sur 6 sessions
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-amber-700">
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
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-200"
                >
                  <span className="text-xl text-amber-600">{item.icon}</span>
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-600 text-white p-8 rounded-2xl shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <h2 className="relative text-3xl font-bold mb-8 text-center">Tarifs</h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30">
            <FaCalendarAlt className="text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Session standard</h3>
            <p className="text-3xl font-bold">300€/semaine</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30">
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
        <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
          Pour une Rentrée Réussie !
        </h1>
        <p className="text-xl text-gray-600">Une semaine de révision sereine</p>
      </div>

      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-2xl blur opacity-20" />
        <img
          src={preFirstDay}
          alt="Préparation rentrée"
          className="relative rounded-2xl shadow-2xl mx-auto max-w-3xl ring-1 ring-amber-200"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl border border-green-200 shadow-lg">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <MdBackpack className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              Le Programme
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Réviser ensemble, de manière ludique et bienveillante, les notions
              de l&apos;année précédente.
            </p>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
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

        <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl border border-amber-200 shadow-lg">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaUsers className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent">
              Infos Pratiques
            </h2>
          </div>

          <div className="space-y-3">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Pour qui ?
              </h3>
              <p className="text-gray-700">
                Primaire, collège, nouveaux lycéens
              </p>
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl border border-purple-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Période
              </h3>
              <p className="text-gray-700">Dernière semaine d&apos;août</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Format
              </h3>
              <p className="text-gray-700">5 séances de 1h à 1h30</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-200">
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
        <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
          Et au lycée !
        </h1>
        <p className="text-xl text-gray-600">
          Accompagnement pour chaque étape
        </p>
      </div>

      <div className="bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl border border-green-200 shadow-lg">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <FaUsers className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
            Seconde
          </h2>
          <p className="text-gray-600 mt-2">Pour bien démarrer au lycée</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-700">Les défis</h3>
            <div className="space-y-2">
              {[
                { icon: <FaClock />, text: "Nouveau rythme" },
                { icon: <FaUsers />, text: "Autonomie accrue" },
                { icon: <FaChartLine />, text: "Méthodes exigeantes" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200"
                >
                  <span className="text-xl text-green-600">{item.icon}</span>
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-teal-700">
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
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border border-teal-200"
                >
                  <span className="text-xl text-teal-600">{item.icon}</span>
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border border-blue-200 shadow-lg">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <FaBook className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
            Première – Bac de Français
          </h2>
          <p className="text-gray-600 mt-2 italic">
            Pour aborder le bac de français avec clarté et confiance
          </p>
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
              className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200"
            >
              <span className="text-xl text-blue-600">{item.icon}</span>
              <span className="text-gray-700 text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-white to-red-50 p-8 rounded-2xl border border-red-200 shadow-lg">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-rose-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <FaGraduationCap className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-700 to-rose-600 bg-clip-text text-transparent">
            Terminale
          </h2>
          <p className="text-gray-600 mt-2">
            Pour préparer le bac efficacement
          </p>
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
              className="flex items-start gap-3 p-4 bg-gradient-to-r from-red-50 to-rose-50 rounded-xl border border-red-200"
            >
              <span className="text-xl text-red-600 mt-1">{item.icon}</span>
              <span className="text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-600 text-white p-8 rounded-2xl shadow-2xl text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <h2 className="relative text-3xl font-bold mb-6">Tarif</h2>
        <div className="relative bg-white/20 backdrop-blur-sm p-8 rounded-xl max-w-md mx-auto border border-white/30">
          <p className="text-4xl font-bold">65€/heure</p>
        </div>
      </div>
    </div>
  );
};

// Contacts Component
const Contacts = () => (
  <div className="space-y-16">
    <div className="text-center space-y-4">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
        Contact
      </h1>
      <p className="text-xl text-gray-600">
        Prêt à commencer cette aventure ensemble ?
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border border-blue-200 shadow-lg">
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <FaMapMarkerAlt className="text-white text-xl" />
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
            Adresse
          </h3>
        </div>
        <div className="text-center space-y-2 mb-6">
          <p className="text-lg font-medium text-gray-800">16 rue Tilly</p>
          <p className="text-lg font-medium text-gray-800">92700 Colombes</p>
        </div>
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-20" />
          <img
            src={contactsRoom}
            alt="Salle"
            className="relative rounded-xl shadow-md ring-1 ring-blue-200"
          />
        </div>
      </div>

      <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl border border-amber-200 shadow-lg">
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <FaUserGraduate className="text-white text-xl" />
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent">
            Séverine Favier
          </h3>
          <p className="text-lg text-amber-700 font-semibold mt-2">
            Psychopédagogue
          </p>
        </div>
        <div className="relative mb-6">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full blur opacity-20" />
          <img
            src={contactsAvatar}
            alt="Séverine"
            className="relative rounded-full shadow-lg mx-auto w-32 h-32 object-cover ring-2 ring-amber-200"
          />
        </div>

        <div className="space-y-3">
          <a
            href="tel:+33608665560"
            className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
          >
            <FaPhone className="text-blue-600" />
            <span className="text-gray-700">+33 6 08 66 55 60</span>
          </a>
          <a
            href="mailto:psychopedagogue@favier.eu"
            className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors"
          >
            <FaEnvelope className="text-purple-600" />
            <span className="text-gray-700 text-sm">
              psychopedagogue@favier.eu
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

// Legal Mentions Component
const Legal = () => (
  <div className="space-y-12 max-w-4xl mx-auto">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 bg-gray-700 rounded-xl flex items-center justify-center mx-auto">
        <FaBalanceScale className="text-white text-2xl" />
      </div>
      <h1 className="text-4xl font-bold text-gray-900">Mentions Légales</h1>
    </div>

    <div className="bg-white p-8 rounded-2xl border border-gray-200 space-y-6">
      <p className="text-gray-700 leading-relaxed">
        Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour
        la confiance en l&apos;économie numérique, il est précisé aux
        utilisateurs du site favier l&apos;identité des différents intervenants
        dans le cadre de sa réalisation et de son suivi.
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Édition du site
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Le présent site, accessible à l&apos;URL www.favier.eu (le « Site
            »), est édité par :
          </p>
          <div className="mt-2 p-4 bg-gray-50 rounded-xl">
            <p className="text-gray-700">
              <strong>Séverine Favier</strong>
              <br />
              16 Rue Tilly, 92700 Colombes
              <br />
              Nationalité : Française
              <br />
              Née le 17/09/1978
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Hébergement</h2>
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-gray-700">
              Le Site est hébergé par la société <strong>1&1 / IONOS</strong>
              <br />
              7 Place de la Gare - 57200 Sarreguemines
              <br />
              Téléphone : (+33) 9 70 80 89 11
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Directeur de publication
          </h2>
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-gray-700">
              Le Directeur de la publication du Site est{" "}
              <strong>Séverine Favier</strong>.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Nous contacter
          </h2>
          <div className="p-4 bg-gray-50 rounded-xl space-y-2">
            <p className="text-gray-700 flex items-center gap-2">
              <FaPhone className="text-blue-600" />
              <strong>Par téléphone :</strong> +33 6 08 66 55 60
            </p>
            <p className="text-gray-700 flex items-center gap-2">
              <FaEnvelope className="text-purple-600" />
              <strong>Par email :</strong> psychopedagogue@favier.eu
            </p>
            <p className="text-gray-700 flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-600" />
              <strong>Par courrier :</strong> 16 Rue Tilly, 92700 Colombes
            </p>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500 italic">
        Génération des mentions légales par Legalstart (
        <a
          href="https://www.legalstart.fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          www.legalstart.fr
        </a>
        ).
      </p>
    </div>
  </div>
);

// Footer
const Footer = () => (
  <footer className="mt-20 border-t border-gray-200 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Séverine Favier - Psychopédagogue
          </h3>
          <p className="text-gray-600 mb-2">16 Rue Tilly, 92700 Colombes</p>
          <p className="text-gray-600">+33 6 08 66 55 60</p>
          <p className="text-gray-600">psychopedagogue@favier.eu</p>
        </div>

        <div className="flex flex-col items-center md:items-end">
          {/* Developer Card */}
          <div className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl border border-amber-200 shadow-lg">
            <h3 className="text-xl font-bold bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent mb-2 text-center md:text-right">
              Noam Favier
            </h3>
            <p className="text-gray-600 mb-4 text-center md:text-right">
              Software Engineer
            </p>
            <div className="flex gap-3 justify-center md:justify-end">
              <a
                href="https://github.com/noamfav"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 text-white font-semibold rounded-xl shadow-md transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-lg" />
                <span>GitHub</span>
              </a>
              <a
                href="https://nf-software.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-semibold rounded-xl shadow-md transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe className="text-lg" />
                <span>Website</span>
              </a>
            </div>
          </div>

          <NavLink
            to="/legal"
            className="text-gray-600 hover:text-amber-600 transition-colors inline-flex items-center gap-2 mt-6"
          >
            <FaBalanceScale />
            Mentions légales
          </NavLink>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 pt-8 border-t border-gray-200">
        <p>
          © {new Date().getFullYear()} Séverine Favier. Tous droits réservés.
        </p>
      </div>
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
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </FontProvider>
);

export default App;
