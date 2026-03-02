import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { impNavItems, navItems } from "../json/Navbar";
import Logo from "./Logo";

const Header = ({ isInsideHero = false }) => {

  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/investors" || location.pathname === "/port-vision" || location.pathname === "/port-roadmap";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Ensure we're at the top initially
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Call once to set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //  useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > window.innerHeight * 3);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll();
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

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
        className={`${isInsideHero ? 'relative w-full z-50' : 'fixed w-full top-0 z-50'} transition-all duration-300 ${isHome && !isScrolled && !isMobileMenuOpen
          ? `bg-transparent ${(location.pathname === "/investors" || location.pathname === "/port-vision" || location.pathname === "/port-roadmap") ? "text-secondary" : "text-primary"} cursor-follow`
          : "bg-primary text-secondary"
          }`}
      >
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4 relative">
          {/* Logo */}
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

          {/* Desktop Nav */}
          {!isMobileMenuOpen && (
            <nav className="hidden lg:block">
              <ul className="flex flex-row space-x-8">
                {impNavItems.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block py-1 md:py-0 font-medium transition-colors duration-300 ${isScrolled || !isHome || location.pathname === "/investors" || location.pathname === "/port-vision" || location.pathname === "/port-roadmap"
                          ? isActive
                            ? "text-secondary"
                            : "text-secondary/60 hover:text-secondary"
                          : isActive
                            ? "text-primary"
                            : "text-primary/70 hover:text-primary"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Hamburger Menu */}
          <div className="flex items-center space-x-2 md:space-x-3 z-60">
            <button
              className="relative w-7 h-7 flex flex-col justify-center items-center"
              onClick={toggleMobileMenu}
            >
              <span
                className={`absolute w-7 h-0.5 rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45" : "translate-y-[-6px]"
                  } ${isScrolled || !isHome || isMobileMenuOpen || location.pathname === "/investors" || location.pathname === "/port-vision" || location.pathname === "/port-roadmap" ? "bg-secondary" : "bg-primary"}`}
              ></span>
              <span
                className={`absolute w-7 h-0.5 rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45" : "translate-y-[6px]"
                  } ${isScrolled || !isHome || isMobileMenuOpen || location.pathname === "/investors" || location.pathname === "/port-vision" || location.pathname === "/port-roadmap" ? "bg-secondary" : "bg-primary"}`}
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
                    `block font-medium transition-colors duration-300 ${isActive
                      ? "text-secondary"
                      : "text-secondary/80 hover:text-secondary"
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
