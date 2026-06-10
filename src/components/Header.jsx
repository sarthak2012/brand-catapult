import { useState } from "react";
import Logo from "./Logo.jsx";

const navLinks = ["Home", "About Us", "Services", "Work", "Culture"];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-t-4 border-dark-bg bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <a href="#" aria-label="Brand Catapult home">
          <Logo />
        </a>

        {/* desktop nav */}
        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link, i) => (
            <span key={link} className="flex items-center">
              <a
                href="#"
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  i === 0
                    ? "text-red-brand"
                    : "text-gray-400 hover:text-red-brand"
                }`}
              >
                {link.toUpperCase()}
              </a>
              {i < navLinks.length - 1 && (
                <span className="mx-4 h-1.5 w-1.5 rounded-full bg-red-brand" />
              )}
            </span>
          ))}
        </nav>

        {/* desktop buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#"
            className="rounded-full bg-dark-bg px-6 py-3 text-sm font-semibold tracking-wide text-white transition-opacity hover:opacity-90"
          >
            JOIN THE TEAM
          </a>
          <a
            href="#contact"
            className="rounded-full bg-red-brand px-6 py-3 text-sm font-semibold tracking-wide text-white transition-opacity hover:opacity-90"
          >
            CONTACT
          </a>
        </div>

        {/* mobile hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-black" />
            <span className="block h-0.5 w-6 bg-black" />
            <span className="block h-0.5 w-6 bg-black" />
          </div>
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <nav className="flex flex-col gap-4 border-t border-gray-100 px-5 py-5 lg:hidden">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href="#"
              onClick={() => setOpen(false)}
              className={`text-sm font-semibold tracking-wide ${
                i === 0 ? "text-red-brand" : "text-gray-500"
              }`}
            >
              {link.toUpperCase()}
            </a>
          ))}
          <a
            href="#"
            className="mt-2 rounded-full bg-dark-bg px-6 py-3 text-center text-sm font-semibold text-white"
          >
            JOIN THE TEAM
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-red-brand px-6 py-3 text-center text-sm font-semibold text-white"
          >
            CONTACT
          </a>
        </nav>
      )}
    </header>
  );
}
