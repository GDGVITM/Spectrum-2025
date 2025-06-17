import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../App.css";
import "../font.css";

const navLinks = [
  { label: "HOME", to: "/home" },
  { label: "EVENTS", to: "/events" },
  { label: "ABOUT US", to: "/about" },
  { label: "OUR TEAM", to: "/Our-team" },
  { label: "SPONSORS", to: "/Sponsor" },
  { label: "HACKBUILD", to: "/Hackbuild", highlighted: true },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 text-white px-4 sm:px-8 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="/navbarlogo.png"
            alt="GDG Logo"
            className="h-6 sm:h-10 w-auto object-contain"
          />
        </div>

        <nav className="hidden md:flex gap-6 text-base text-white font-bold tracking-widest font-[Audiowide]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`no-underline transition-all duration-300 relative ${
                location.pathname === link.to
                  ? "after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2.5px] after:bg-green-400 after:rounded-full"
                  : ""
              } ${
                link.highlighted
                  ? "text-green-400 hover:text-green-300 drop-shadow-[0_0_10px_rgba(34,197,94,0.9)] drop-shadow-[0_0_20px_rgba(34,197,94,0.8)] hover:drop-shadow-[0_0_25px_rgba(34,197,94,1)] hover:scale-110"
                  : "text-white hover:text-white/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden mt-4 flex flex-col items-center gap-4 text-base font-bold tracking-widest font-[Audiowide] pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`no-underline transition-all duration-300 relative ${
                location.pathname === link.to
                  ? "after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2.5px] after:bg-green-400 after:rounded-full"
                  : ""
              } ${
                link.highlighted
                  ? "text-green-400 hover:text-green-300 drop-shadow-[0_0_10px_rgba(34,197,94,0.9)] drop-shadow-[0_0_20px_rgba(34,197,94,0.8)] hover:drop-shadow-[0_0_25px_rgba(34,197,94,1)] hover:scale-110"
                  : "text-white hover:text-white/80"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;