import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrochip,
  faPaintBrush,
  faWrench,
  faScroll,
  faKey,
  faFlask,
  faHome,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { to: "/morpheus", label: "Morpheus", icon: faMicrochip },
  { to: "/violet", label: "Violet Collar", icon: faPaintBrush },
  { to: "/tools", label: "Tools", icon: faWrench },
  { to: "/docs", label: "Docs", icon: faScroll },
  { to: "/theories", label: "Theories", icon: faFlask },
  { to: "/services", label: "Services", icon: faWrench },
  { to: "/login", label: "Sign In", icon: faKey },
];

const getBtnStyles = (isEnd: boolean) => {
  const base =
    "flex items-center gap-2 font-mono border rounded-md transition shadow-md duration-150 text-sm px-4 py-2";
  const color = isEnd
    ? "bg-orange-800 text-white border-orange-600 hover:bg-orange-600"
    : "bg-slate-800 text-white border-slate-600 hover:bg-slate-600";
  return `${base} ${color}`;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 bg-[#0b0b13] text-white border-b border-gray-800 font-mono relative z-50">
      <div className="flex justify-between items-center">
        {/* Home Button */}
        <Link
          to="/home"
          className="text-gray-300 hover:text-orange-300 text-base flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faHome} />
          Home
        </Link>

        {/* Burger for small devices */}
        <button
          className="lg:hidden text-white text-xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>

        {/* Full Nav on lg+ */}
        <nav className="hidden lg:flex gap-4">
          {navLinks.map(({ to, label, icon }, idx) => (
            <Link
              key={to}
              to={to}
              className={getBtnStyles(idx === navLinks.length - 1)}
            >
              <FontAwesomeIcon icon={icon} />
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Dropdown Menu for mobile */}
      {isOpen && (
        <div className="lg:hidden mt-4 flex flex-col gap-2">
          {navLinks.map(({ to, label, icon }, idx) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={getBtnStyles(idx === navLinks.length - 1)}
            >
              <FontAwesomeIcon icon={icon} />
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
