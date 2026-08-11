import React from "react";
import "./Achievements.css";
import { FaAward, FaAws, FaJava } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { portfolioData } from "../../data/portfolioData";
import { motion } from "framer-motion";

const iconMap = {
  FaAws: <FaAws />,
  FaJava: <FaJava />,
  SiKubernetes: <SiKubernetes />,
};

export default function Achievements() {
  const { achievements } = portfolioData;

  if (!achievements || achievements.length === 0) return null;

  return (
    <section id="achievements" className="achievements-section" data-aos="fade-up">
      <div className="section-header">
        <span className="section-subtitle">Qualifications & Credentials</span>
        <h2 className="section-title">Certifications & Achievements</h2>
      </div>

      <div className="achievements-container">
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <motion.div
              className="achievement-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="achievement-header">
                  <div className="achievement-icon-wrapper">
                    {iconMap[item.icon] || <FaAward />}
                  </div>
                  <div>
                    <h3 className="achievement-title">{item.title}</h3>
                    <div className="achievement-issuer">{item.issuer}</div>
                  </div>
                </div>

                <p className="achievement-desc">{item.description}</p>
              </div>

              <div className="achievement-year">{item.year}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
