import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { portfolioData } from "../../data/portfolioData";
import profileImage from "../../assets/images/profile.jpeg";

function About() {
  const { personalInfo, stats } = portfolioData;

  const avatar = personalInfo.avatarUrl || profileImage;

  return (
    <section id="about" className="about-section" data-aos="fade-up">
      <div className="section-header">
        <span className="section-subtitle">Biography</span>
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about-container">
        {/* Left Side Image Frame */}
        <motion.div
          className="about-image-wrapper"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-card-frame">
            <img
              src={avatar}
              alt={personalInfo.name}
              className="about-img"
            />
            <div className="about-card-footer">
              <span className="status-pulse-dot"></span>
              <span className="about-card-footer-text">
                {personalInfo.statusText}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Side Content & Dynamic Stats */}
        <motion.div
          className="about-content"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 style={{ fontSize: "26px", marginBottom: "18px" }}>
            {personalInfo.aboutHeading}
          </h3>

          {personalInfo.aboutDescription.map((paragraph, index) => (
            <p className="about-description-text" key={index}>
              {paragraph}
            </p>
          ))}

          {/* Key Statistics Grid */}
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div className="stat-box" key={idx}>
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <a
            href={personalInfo.resumeUrl}
            download={personalInfo.resumeFileName}
            className="about-action-btn"
          >
            <FaDownload /> Download Curriculum Vitae
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;