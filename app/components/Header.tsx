import React from "react";
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
} from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  {
    to: "/morpheus",
    label: "Morpheus",
    icon: faMicrochip,
    size: "xl",
  },
  {
    to: "/violet",
    label: "Violet Collar",
    icon: faPaintBrush,
    size: "xl",
  },
  {
    to: "/tools",
    label: "Tools",
    icon: faWrench,
    size: "sm",
  },
  {
    to: "/docs",
    label: "Docs",
    icon: faScroll,
    size: "sm",
  },
  {
    to: "/login",
    label: "Sign In",
    icon: faKey,
    size: "sm",
  },
  {
    to: "/theories",
    label: "Theories",
    icon: faFlask,
    size: "sm",
  },
];

const getBtnStyles = (type: "main" | "util", size: string) => {
  const base =
    "flex items-center gap-2 font-mono border rounded-md transition shadow-md duration-150 transform";
  const sizeStyles =
    size === "xl"
      ? "text-xl px-6 py-3 hover:scale-105"
      : "text-sm px-4 py-2 hover:scale-100";

  const colorStyles =
    type === "main"
      ? "bg-indigo-800 text-white border-indigo-600 hover:bg-indigo-600"
      : "bg-slate-800 text-white border-slate-600 hover:bg-slate-600";

  return `${base} ${sizeStyles} ${colorStyles}`;
};

const Header = () => {
  return (
    <header className="w-full p-6 bg-[#0b0b13] text-white flex flex-col items-center shadow-md border-b border-gray-800 font-mono">

      {/* Home Button */}
      <Link
        to="/"
        className="absolute left-8 top-8 text-gray-300 hover:text-orange-300 text-base flex items-center gap-2 transition"
      >
        <FontAwesomeIcon icon={faHome} />
        Home
      </Link>

      {/* Top Row: Main Wings */}
      <div className="flex gap-8 mb-4 mt-2">
        {navLinks
          .filter((link) => link.size === "xl")
          .map(({ to, label, icon, size }) => (
            <Link key={to} to={to} className={getBtnStyles("main", size)}>
              <FontAwesomeIcon icon={icon} />
              {label}
            </Link>
          ))}
      </div>

      {/* Bottom Row: Utilities */}
      <div className="grid grid-cols-4 gap-4">
        {navLinks
          .filter((link) => link.size === "sm")
          .map(({ to, label, icon, size }) => (
            <Link key={to} to={to} className={getBtnStyles("util", size)}>
              <FontAwesomeIcon icon={icon} />
              {label}
            </Link>
          ))}
      </div>
    </header>
  );
};

export default Header;
