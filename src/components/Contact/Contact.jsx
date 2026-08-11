import React, { useState } from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { portfolioData } from "../../data/portfolioData";

export default function Contact() {
  const { socialLinks, personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        success: false,
        error: "Please complete all required fields.",
      });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    // Simulate form submission delay or Mailto fallback
    setTimeout(() => {
      setStatus({
        submitting: false,
        success: true,
        error: null,
      });

      // Reset form fields
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Automatically hide success notification after 5 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <div className="section-header">
        <span className="section-subtitle">Get In Touch</span>
        <h2 className="section-title">Contact Me</h2>
      </div>

      <div className="contact-container">
        {/* Left Side Contact Details */}
        <div className="contact-info">
          <h3 className="contact-info-title">
            Let's Build Scalable Backend Solutions Together 🚀
          </h3>

          <p className="contact-info-desc">
            I am currently open to discussing Senior Backend Engineering roles,
            distributed microservices architecture, AWS cloud consultations, or exciting career opportunities.
          </p>

          <div className="info-box">
            <div className="info-icon-wrapper">
              <FaEnvelope />
            </div>
            <div className="info-details">
              <span className="info-label">Email Address</span>
              <a
                href={`mailto:${socialLinks.email}`}
                className="info-value"
                style={{ textDecoration: "none" }}
              >
                {socialLinks.email}
              </a>
            </div>
          </div>

          <div className="info-box">
            <div className="info-icon-wrapper">
              <FaPhone />
            </div>
            <div className="info-details">
              <span className="info-label">Phone Number</span>
              <a
                href={`tel:${socialLinks.phone}`}
                className="info-value"
                style={{ textDecoration: "none" }}
              >
                {socialLinks.phone}
              </a>
            </div>
          </div>

          <div className="info-box">
            <div className="info-icon-wrapper">
              <FaMapMarkerAlt />
            </div>
            <div className="info-details">
              <span className="info-label">Location</span>
              <span className="info-value">{socialLinks.location}</span>
            </div>
          </div>

          {personalInfo.isAvailable && (
            <div className="status-badge">
              <span className="status-pulse-dot" />
              <span>{personalInfo.statusText}</span>
            </div>
          )}

          <div className="social-icons-wrapper">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
            )}

            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
            )}

            {socialLinks.email && (
              <a
                href={`mailto:${socialLinks.email}`}
                className="social-btn"
                aria-label="Send Email"
              >
                <FaEnvelope />
              </a>
            )}
          </div>
        </div>

        {/* Right Side Interactive Contact Form */}
        <div className="contact-form-wrapper">
          {status.success && (
            <div className="form-toast toast-success">
              <FaCheckCircle /> Message sent successfully! I will get back to you soon.
            </div>
          )}

          {status.error && (
            <div className="form-toast toast-error">
              <FaExclamationCircle /> {status.error}
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Job opportunity, project inquiry, etc."
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={`Hi ${personalInfo.name.split(" ")[0]}, I would like to discuss an opportunity...`}
                className="form-textarea"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={status.submitting}
            >
              {status.submitting ? (
                "Sending..."
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}