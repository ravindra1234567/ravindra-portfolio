import React, { useState } from "react";
import "./Skills.css";
import { portfolioData } from "../../data/portfolioData";
import {
  FaJava,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaJenkins,
  FaServer,
  FaCode,
  FaDatabase,
  FaTools,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiHibernate,
  SiKubernetes,
  SiMysql,
  SiPostgresql,
  SiJunit5,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const iconMap = {
  FaJava: <FaJava />,
  SiSpringboot: <SiSpringboot />,
  FaServer: <FaServer />,
  SiHibernate: <SiHibernate />,
  FaCode: <FaCode />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  SiKubernetes: <SiKubernetes />,
  FaJenkins: <FaJenkins />,
  SiMysql: <SiMysql />,
  SiPostgresql: <SiPostgresql />,
  FaDatabase: <FaDatabase />,
  FaGitAlt: <FaGitAlt />,
  SiJunit5: <SiJunit5 />,
  FaTools: <FaTools />,
};

export default function Skills() {
  const { skillCategories, skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="skills-section" data-aos="zoom-in">
      <div className="section-header">
        <span className="section-subtitle">Technical Proficiency</span>
        <h2 className="section-title">Skills & Technologies</h2>
      </div>

      <div className="skills-container">
        {/* Category Filter Tabs */}
        <div className="skills-tabs">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              className={`skill-tab-btn ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div className="skills-grid" layout>
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <div className="skill-header">
                  <div className="skill-icon-wrapper">
                    {iconMap[skill.iconName] || <FaCode />}
                  </div>
                  <h3 className="skill-name">{skill.name}</h3>
                </div>

                <div className="skill-progress-container">
                  <div className="skill-progress-labels">
                    <span className="skill-level-text">Proficiency</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-progress-track">
                    <div
                      className="skill-progress-bar"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}