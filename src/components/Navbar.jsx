import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { portfolioData } from "../data/portfolioData";
import { FaBars, FaTimes, FaChevronRight } from "react-icons/fa";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section detection
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <a href="#home" className="nav-brand">
          <span className="nav-logo-text">
            {portfolioData.personalInfo.name.split(" ")[0]}
            <span className="nav-logo-accent">
              {" " + (portfolioData.personalInfo.name.split(" ")[1] || "")}
            </span>
          </span>
        </a>

        {/* Desktop Menu Links */}
        <ul className="nav-links-desktop">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`nav-link ${
                  activeSection === link.href.substring(1) ? "active" : ""
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta-btn">
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`mobile-backdrop ${mobileMenuOpen ? "open" : ""}`}
        onClick={closeMobileMenu}
      />
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`mobile-nav-link ${
              activeSection === link.href.substring(1) ? "active" : ""
            }`}
            onClick={closeMobileMenu}
          >
            <span>{link.name}</span>
            <FaChevronRight style={{ fontSize: "12px", opacity: 0.6 }} />
          </a>
        ))}
        <a
          href="#contact"
          className="nav-cta-btn"
          style={{ textAlign: "center", marginTop: "20px" }}
          onClick={closeMobileMenu}
        >
          Hire Me
        </a>
      </div>
    </>
  );
}

export default Navbar;