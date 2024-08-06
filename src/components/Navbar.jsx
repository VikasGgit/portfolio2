import React, { useState } from "react";
import { NAVIGATION_LINKS, logo } from "../data/index.jsx";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    setIsMobileMenu(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 z-50 top-4">
        {/* Destop Menu */}
        <div className="items-center justify-center hidden max-w-2xl py-3 mx-auto rounded-lg bg-black/20 backdrop-blur-lg lg:flex">
          <div className="flex justify-between gap-6">
            <div>
              <a href="#">PortFolio</a>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        className="text-sm hover:text-yellow-400"
                        href="{item.href}"
                        onClick={(e) => handleLinkClick(e, item.href)}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}

        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">PortFolio</a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenu ? (
                  <FaTimes className="w-5 h-6 m-2" />
                ) : (
                  <FaBars className="w-5 h-6 m-2" />
                )}
              </button>
            </div>
          </div>

          {isMobileMenu && (
            <ul className="flex flex-col gap-4 mt-4 ml-4 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className="block w-full text-xl font-semibold cursor-pointer hover:text-fuchsia-400"
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
