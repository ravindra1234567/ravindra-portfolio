import React from "react";
import "./Experience.css";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { portfolioData } from "../../data/portfolioData";
import { motion } from "framer-motion";

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="experience-section" data-aos="fade-up">
      <div className="section-header">
        <span className="section-subtitle">Career Path</span>
        <h2 className="section-title">Work Experience</h2>
      </div>

      <div className="experience-container">
        <div className="timeline">
          {experiences.map((item, index) => (
            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="timeline-node">
                <FaBriefcase />
              </div>

              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="role-title">{item.role}</h3>
                    <h4 className="company-name">
                      {item.company}{" "}
                      {item.location && (
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: "normal",
                            color: "var(--text-muted)",
                            marginLeft: "8px",
                          }}
                        >
                          <FaMapMarkerAlt /> {item.location}
                        </span>
                      )}
                    </h4>
                  </div>

                  <span className="duration-badge">
                    <FaCalendarAlt /> {item.duration}
                  </span>
                </div>

                <ul className="experience-description">
                  {item.description.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>

                <div className="tech-tags">
                  {item.tech.map((tech) => (
                    <span className="tech-pill" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}