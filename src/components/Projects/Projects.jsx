import React, { useState } from "react";
import "./Projects.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaTimes,
  FaInfoCircle,
} from "react-icons/fa";
import { portfolioData } from "../../data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const { projectCategories, projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="projects-section" data-aos="fade-left">
      <div className="section-header">
        <span className="section-subtitle">Portfolio Showcase</span>
        <h2 className="section-title">Featured Projects</h2>
      </div>

      <div className="projects-container">
        {/* Category Filter Tabs */}
        <div className="projects-tabs">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              className={`project-tab-btn ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div className="projects-grid" layout>
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                layout
              >
                <div className="project-img-wrapper">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="project-img"
                  />
                  <div className="project-img-overlay" />
                </div>

                <div className="project-body">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">
                      {project.shortDescription}
                    </p>

                    <div className="project-tech-stack">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-tag-mini">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="project-features-list">
                      {project.features.slice(0, 3).map((feature, fIdx) => (
                        <li key={fIdx}>
                          <FaCheckCircle
                            style={{
                              color: "var(--accent-purple)",
                              fontSize: "12px",
                              flexShrink: 0,
                            }}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-actions">
                    <button
                      className="project-btn project-btn-secondary"
                      onClick={() => setSelectedProject(project)}
                    >
                      <FaInfoCircle /> Details
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn project-btn-primary"
                    >
                      <FaGithub /> Repository
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <motion.div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>

              <h2
                style={{
                  fontSize: "26px",
                  color: "#ffffff",
                  marginBottom: "16px",
                }}
              >
                {selectedProject.title}
              </h2>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "16px",
                  lineHeight: "1.8",
                  marginBottom: "24px",
                }}
              >
                {selectedProject.fullDescription || selectedProject.shortDescription}
              </p>

              <h4
                style={{
                  color: "var(--accent-purple)",
                  marginBottom: "12px",
                  fontSize: "16px",
                }}
              >
                Key Architecture & Features
              </h4>
              <ul
                style={{
                  marginBottom: "24px",
                  paddingLeft: "20px",
                  color: "#cbd5e1",
                  lineHeight: "1.8",
                }}
              >
                {selectedProject.features.map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>

              <h4
                style={{
                  color: "var(--accent-purple)",
                  marginBottom: "12px",
                  fontSize: "16px",
                }}
              >
                Technologies Used
              </h4>
              <div
                className="project-tech-stack"
                style={{ marginBottom: "30px" }}
              >
                {selectedProject.tech.map((t) => (
                  <span key={t} className="tech-tag-mini">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn project-btn-primary"
                >
                  <FaGithub /> View Source Code
                </a>

                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn project-btn-secondary"
                  >
                    <FaExternalLinkAlt /> Live Preview
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}