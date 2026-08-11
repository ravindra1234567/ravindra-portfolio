import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import { FaDownload, FaGraduationCap, FaTrophy } from "react-icons/fa";
import { portfolioData } from "../../data/portfolioData";
import profileImage from "../../assets/images/profile.jpeg";

function About() {
  const { personalInfo, stats, education, awards } = portfolioData;

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
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-card-frame">
            <img src={avatar} alt={personalInfo.name} className="about-img" />
            <div className="about-card-footer">
              <span className="status-pulse-dot"></span>
              <span className="about-card-footer-text">
                {personalInfo.statusText}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Side Content, Stats, Education & Awards */}
        <motion.div
          className="about-content"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 style={{ fontSize: "24px", marginBottom: "16px", color: "#ffffff" }}>
            {personalInfo.aboutHeading}
          </h3>

          {personalInfo.aboutDescription.map((paragraph, index) => (
            <p className="about-description-text" key={index}>
              {paragraph}
            </p>
          ))}

          {/* Metrics & Statistics Grid */}
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div className="stat-box" key={idx}>
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Education & Awards Highlight Cards */}
          <div className="info-cards-row">
            {education && education.length > 0 && (
              <div className="info-highlight-card">
                <div className="card-title-header">
                  <FaGraduationCap /> Education
                </div>
                <div className="card-title-main">{education[0].degree}</div>
                <div className="card-sub-main">
                  {education[0].institution} ({education[0].score}) • Passout {education[0].year}
                </div>
              </div>
            )}

            {awards && awards.length > 0 && (
              <div className="info-highlight-card">
                <div className="card-title-header">
                  <FaTrophy /> Key Honors
                </div>
                <div className="card-title-main">{awards[0].title}</div>
                <div className="card-sub-main">{awards[0].organization}</div>
              </div>
            )}
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