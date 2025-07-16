import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import gsap from "gsap";
import { impNavItems, navItems } from "../json/Navbar";
import { Services } from "../json/services";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";

const ServiceDropdown = ({ show, onMouseEnter, onMouseLeave }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed left-0 top-[80px] w-full bg-primary z-40"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="w-full max-w-7xl mx-auto px-4 py-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {Services.map((service) => (
                <a
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="transition-all duration-300 hover:scale-105"
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-32 h-32 object-cover mb-2"
                      onError={(e) => (e.target.style.display = "none")}
                    />
                    <span className="text-sm font-medium text-center text-secondary">
                      {service.title}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  const toggleMobileMenu = () => {
    if (!showServiceDropdown) {
      setIsMobileMenuOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.to(overlayRef.current, {
        duration: 0.5,
        y: 0,
        autoAlpha: 1,
        ease: "power2.out",
        pointerEvents: "auto",
      });
      gsap.fromTo(
        menuRef.current.children[0].children,
        { y: -20, autoAlpha: 0 },
        {
          duration: 0.4,
          y: 0,
          autoAlpha: 1,
          ease: "power2.out",
          stagger: 0.1,
          delay: 0.3,
        }
      );
    } else {
      gsap.to(overlayRef.current, {
        duration: 0.5,
        y: "-100%",
        autoAlpha: 0,
        ease: "power2.in",
        pointerEvents: "none",
      });
      gsap.to(menuRef.current.children[0].children, {
        duration: 0.2,
        y: -5,
        autoAlpha: 0,
        ease: "power2.in",
      });
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isHome && !isScrolled && !showServiceDropdown
            ? "bg-transparent text-primary"
            : "bg-primary text-secondary"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4 relative">
          <div
            onClick={() => {
              setIsMobileMenuOpen(false);
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="relative flex-shrink-0 flex cursor-pointer items-center z-60"
          >
            <Logo />
          </div>

          {/* Desktop Navigation */}
          {!isMobileMenuOpen && (
          <nav className="hidden lg:block relative">
            <ul className="flex flex-row space-x-8">
              {impNavItems.map((item, index) => {
                const isServices = item.name === "Services";
                const isActive = location.pathname === item.path;
                const textBase = !isHome || showServiceDropdown || isScrolled
                  ? "text-secondary/60 hover:text-secondary"
                  : "text-primary/60 hover:text-primary";
                const textActive = !isHome || showServiceDropdown || isScrolled ? "text-secondary" : "text-primary";

                return isServices ? (
                  <li
                    key={index}
                    className="relative"
                    onMouseEnter={() => {
                      setIsMobileMenuOpen(false);
                      setShowServiceDropdown(true);
                    }}
                    onMouseLeave={() => setShowServiceDropdown(false)}
                  >
                    <button
                      className={`font-medium transition-all ${textBase}`}
                    >
                      {item.name}
                    </button>
                    <ServiceDropdown
                      show={showServiceDropdown}
                      onMouseEnter={() => setShowServiceDropdown(true)}
                      onMouseLeave={() => setShowServiceDropdown(false)}
                    />
                  </li>
                ) : (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `font-medium transition-all ${
                          isActive ? textActive : textBase
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          )}

          {/* Mobile Hamburger */}
          <div className="flex items-center space-x-2 md:space-x-3 z-60">
            <button
              className="relative w-7 h-7 flex flex-col justify-center items-center"
              onClick={toggleMobileMenu}
            >
              <span
                className={`absolute w-7 h-0.5 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45" : "translate-y-[-6px]"
                } ${
                  isScrolled || !isHome || isMobileMenuOpen || showServiceDropdown
                    ? "bg-secondary"
                    : "bg-primary"
                }`}
              ></span>
              <span
                className={`absolute w-7 h-0.5 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45" : "translate-y-[6px]"
                } ${
                  isScrolled || !isHome || isMobileMenuOpen || showServiceDropdown
                    ? "bg-secondary"
                    : "bg-primary"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-primary"
        style={{
          zIndex: 40,
          transform: "translateY(-100%)",
          visibility: "hidden",
        }}
      >
        <nav
          ref={menuRef}
          className="flex flex-col items-center justify-center w-full h-full"
        >
          <ul className="flex flex-col items-center space-y-4 text-lg">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-secondary"
                        : "text-secondary/60 hover:text-secondary"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;