import React from "react";
import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaDownload, FaCode, FaServer, FaCloud, FaPaperPlane } from "react-icons/fa";
import { portfolioData } from "../../data/portfolioData";
import profileImage from "../../assets/images/profile.jpeg";

function Hero() {
  const { personalInfo } = portfolioData;

  // Use imported local image if available or configured URL
  const displayAvatar = personalInfo.avatarUrl || profileImage;

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left Side Details */}
        <div className="hero-left" data-aos="fade-right">
          <div className="hero-greeting">
            <span className="greeting-dot"></span>
            {personalInfo.greeting}
          </div>

          <h1 className="hero-title gradient-text">
            {personalInfo.name}
          </h1>

          <div className="hero-subtitle">
            <Typewriter
              words={personalInfo.roles}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </div>

          <p className="hero-description">
            {personalInfo.bio}
          </p>

          <div className="hero-buttons">
            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeFileName}
              className="resume-btn"
            >
              <FaDownload /> Download Resume
            </a>

            <a href="#contact" className="contact-btn">
              <FaPaperPlane style={{ marginRight: "8px" }} /> Contact Me
            </a>
          </div>
        </div>

        {/* Right Side Avatar / Card Display */}
        <div className="hero-right" data-aos="fade-left">
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-glow" />

            {displayAvatar ? (
              <motion.img
                src={displayAvatar}
                alt={personalInfo.name}
                className="profile-img"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            ) : (
              <motion.div
                className="profile-placeholder-card"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="code-icon-badge">
                  <FaCode />
                </div>
                <div className="badge-text-title">{personalInfo.name}</div>
                <div className="badge-text-sub">Senior Backend Architect</div>
              </motion.div>
            )}

            {/* Floating Tech Badges */}
            <motion.div
              className="floating-badge badge-top-left"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <FaServer style={{ color: "#915EFF" }} /> Spring Boot Expert
            </motion.div>

            <motion.div
              className="floating-badge badge-bottom-right"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <FaCloud style={{ color: "#06b6d4" }} /> AWS Cloud Native
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;