import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { portfolioData } from "../../data/portfolioData";

export default function Footer() {
  const { personalInfo, socialLinks } = portfolioData;

  return (
    <footer className="footer">
      <h2 className="footer-brand">{personalInfo.name}</h2>
      <p className="footer-subtitle">{personalInfo.roles[0]}</p>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Certifications</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-social">
        {socialLinks.github && (
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="footer-social-btn"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        )}

        {socialLinks.linkedin && (
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="footer-social-btn"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        )}

        {socialLinks.email && (
          <a
            href={`mailto:${socialLinks.email}`}
            className="footer-social-btn"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        )}
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} {personalInfo.name}. Built with React & Spring Boot standards.
      </p>
    </footer>
  );
}