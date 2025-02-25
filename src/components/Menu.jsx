import { useState } from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSubList = (e) => {
    e.preventDefault(); // Prevent navigation on toggle
    setIsOpen(!isOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="w-full md:w-64 mb-6 md:mb-0">
      {/* Mobile menu button */}
      <div className="md:hidden flex justify-between items-center py-4">
        <span className="text-xl font-bold text-primary">Séverine Favier</span>
        <button
          onClick={toggleMobileMenu}
          className="text-gray-700 hover:text-primary focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <nav
        className={`${mobileMenuOpen ? "block" : "hidden"} md:block bg-white md:bg-transparent rounded-lg shadow-lg md:shadow-none p-4 md:p-0 transition-all duration-300`}
      >
        <ul className="space-y-3">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-300 ${isActive ? "bg-primary text-white font-bold" : "bg-purple-100"}`
              }
            >
              <span className="animate-pulse inline-block mr-2">📓</span>{" "}
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/psycho"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-300 ${isActive ? "bg-primary text-white font-bold" : "bg-purple-100"}`
              }
            >
              <span className="animate-bounce inline-block mr-2">🧠</span>{" "}
              Psychopédagogie ?
            </NavLink>
          </li>
          <li className="relative">
            <div>
              <button
                onClick={toggleSubList}
                className={`w-full text-left px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-300 ${isOpen ? "bg-primary text-white font-bold" : "bg-purple-100"}`}
              >
                <span className="animate-float inline-block mr-2">🌟</span> Mon
                approche
                <svg
                  className={`inline-block ml-2 h-4 w-4 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`}
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
              {isOpen && (
                <ul className="ml-6 mt-2 space-y-2 transition-all duration-300 ease-in">
                  <li>
                    <NavLink
                      to="/school"
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-full hover:bg-secondary hover:text-white transition-colors duration-300 ${isActive ? "bg-secondary text-white font-bold" : "bg-pink-100"}`
                      }
                    >
                      <span className="animate-pulse inline-block mr-2">
                        📚
                      </span>{" "}
                      Suivi scolaire
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/learn"
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-full hover:bg-secondary hover:text-white transition-colors duration-300 ${isActive ? "bg-secondary text-white font-bold" : "bg-pink-100"}`
                      }
                    >
                      <span className="animate-wiggle inline-block mr-2">
                        🪄
                      </span>{" "}
                      Apprendre à apprendre
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/brevet"
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-full hover:bg-secondary hover:text-white transition-colors duration-300 ${isActive ? "bg-secondary text-white font-bold" : "bg-pink-100"}`
                      }
                    >
                      <span className="animate-bounce inline-block mr-2">
                        🎓
                      </span>{" "}
                      Vers le brevet
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <NavLink
              to="/pre"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-300 ${isActive ? "bg-primary text-white font-bold" : "bg-purple-100"}`
              }
            >
              <span className="animate-bounce-slow inline-block mr-2">🏫</span>{" "}
              Pré rentrée
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/who"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-300 ${isActive ? "bg-primary text-white font-bold" : "bg-purple-100"}`
              }
            >
              <span className="animate-pulse inline-block mr-2">🙋🏻‍♀️</span> Qui
              suis-je ?
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-300 ${isActive ? "bg-primary text-white font-bold" : "bg-purple-100"}`
              }
            >
              <span className="animate-pulse inline-block mr-2">📞</span>{" "}
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
