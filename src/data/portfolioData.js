/**
 * Portfolio Data Configuration - Updated from Resume
 * --------------------------------------------------------------------------
 * Customize all text, profile information, skills, experiences, projects,
 * certifications, education, and contact links in this single file.
 * --------------------------------------------------------------------------
 */

export const portfolioData = {
  // Personal & Hero Section Configuration
  personalInfo: {
    name: "Ravindra Kumar",
    title: "Senior Software Engineer (Java)",
    greeting: "Hello, I'm",
    roles: [
      "Senior Software Engineer (Java)",
      "Spring Boot & Microservices Specialist",
      "AWS & Cloud Infrastructure Engineer",
      "Database & Distributed Systems Architect",
    ],
    bio: "Highly skilled IT professional with 5.5+ years of experience as a Java Developer, specializing in microservices architecture. Proven expertise in building robust applications using Java in GPS, Telematics, Insurance, Financial, and E-Commerce domains.",
    aboutHeading: "Building High-Throughput, Scalable Microservices Architecture",
    aboutDescription: [
      "I specialize in architecting, optimizing, and deploying enterprise-grade Java Spring Boot microservices with proven experience reducing API latency by up to 90% and database footprints by 83% (12TB to 2TB).",
      "Over 5.5+ years of experience across Onelap Telematics, SOLV (Standard Chartered R&T), and Nagarro, building high-concurrency solutions, automated ETL pipelines, Docker containerized deployments, and full-stack observability with Prometheus & Grafana."
    ],
    avatarUrl: "", // Optional avatar URL (uses profile image)
    resumeFileName: "Ravindra_Kumar_Resume.pdf",
    resumeUrl: "/resume.pdf",
    statusText: "Open to Senior Java Backend & Microservices Roles",
    isAvailable: true,
  },

  // Key Highlight Statistics
  stats: [
    { label: "Years Experience", value: "5.5+" },
    { label: "API Latency Reduction", value: "90%" },
    { label: "DB Footprint Reduction", value: "83%" },
    { label: "System Availability", value: "99.9%" },
  ],

  // Social & Contact Links
  socialLinks: {
    github: "https://github.com/ravindra1234567",
    linkedin: "https://linkedin.com/in/ravindra156785166",
    email: "ravindrakushwahanwg@gmail.com",
    phone: "7047178936",
    location: "Noida, India",
  },

  // Education Details
  education: [
    {
      degree: "B.E. in Computer Engineering",
      institution: "IET, DAVV",
      score: "78%",
      year: "2021",
    },
  ],

  // Awards & Hackathon Honors
  awards: [
    {
      title: "Winner of Smart India Hackathon",
      organization: "MHRD (Govt. Of India)",
      description: "Secured 1st rank nationally for innovative software architecture solutions.",
    },
    {
      title: "Finalist of Internal Smart India Hackathon",
      organization: "MHRD (Govt. Of India)",
      description: "Recognized among top teams for rapid prototyping and technical excellence.",
    },
  ],

  // Skills Section Categorized
  skillCategories: [
    { id: "all", name: "All Skills" },
    { id: "backend", name: "Backend & Microservices" },
    { id: "cloud", name: "Cloud & DevOps" },
    { id: "database", name: "Databases & Storage" },
    { id: "tools", name: "Tools & Testing" },
  ],

  skills: [
    { name: "Java 8 / Core Java", category: "backend", iconName: "FaJava", level: 95 },
    { name: "Spring Boot", category: "backend", iconName: "SiSpringboot", level: 95 },
    { name: "Microservices", category: "backend", iconName: "FaServer", level: 95 },
    { name: "Hibernate & JPA", category: "backend", iconName: "SiHibernate", level: 90 },
    { name: "Swagger / REST APIs", category: "backend", iconName: "FaCode", level: 95 },
    { name: "Log4j / Log4j2", category: "backend", iconName: "FaCode", level: 90 },

    { name: "AWS Cloud", category: "cloud", iconName: "FaAws", level: 85 },
    { name: "Docker Containerization", category: "cloud", iconName: "FaDocker", level: 90 },
    { name: "Kubernetes (K8s)", category: "cloud", iconName: "SiKubernetes", level: 85 },
    { name: "Jenkins CI/CD", category: "cloud", iconName: "FaJenkins", level: 85 },
    { name: "Prometheus & Grafana", category: "cloud", iconName: "FaServer", level: 85 },

    { name: "PostgreSQL (PSQL)", category: "database", iconName: "SiPostgresql", level: 95 },
    { name: "MySQL", category: "database", iconName: "SiMysql", level: 90 },
    { name: "SQL & Table Partitioning", category: "database", iconName: "FaDatabase", level: 95 },

    { name: "JUnit 5 & Mockito", category: "tools", iconName: "SiJunit5", level: 90 },
    { name: "Git / GitHub / Bitbucket", category: "tools", iconName: "FaGitAlt", level: 90 },
    { name: "Postman & Swagger", category: "tools", iconName: "FaTools", level: 90 },
    { name: "Jira / Agile Development", category: "tools", iconName: "FaTools", level: 90 },
  ],

  // Professional Experience
  experiences: [
    {
      company: "Onelap Telematics Pvt. LTD",
      role: "Senior Engineer",
      duration: "11/2024 – Present",
      location: "Noida (Hybrid)",
      description: [
        "Architected and optimized Java Spring Boot microservices, achieving up to 90% reduction in API response latency through connection pooling, pagination, batching, and SQL view creation.",
        "Reduced database storage footprint by 83% (12TB to 2TB) by implementing daily table partitioning in PostgreSQL and automated S3 archiving for positions older than 60 days.",
        "Built an automated ETL data recovery pipeline to extract, download, and re-ingest date-filtered historical position datasets from AWS S3 back into PostgreSQL for auditing.",
        "Diagnosed and resolved critical production memory leaks using Eclipse Memory Analyzer (MAT), fine-tuning Tomcat thread limits to stabilize high-concurrency performance.",
        "Established full-stack observability using Prometheus and Grafana for real-time monitoring and alerting, maintaining 99.9% system availability.",
        "Containerized microservices using Docker across DEV, QA, and PROD environments, standardizing deployment pipelines with Blue/Green database updates.",
        "Enhanced system security by implementing JWT, Spring Security, and Basic Authentication across REST endpoints and Spring Boot Actuator.",
        "Integrated Amazon Multi-Channel Fulfillment (MCF) APIs into corporate CRM, automating order fulfillment, multi-channel shipping, and inventory sync.",
        "Spearheaded a telecom/SIM usage audit, eliminating redundant data plans to cut monthly recurring telecom bills by 50%."
      ],
      tech: ["Java", "Spring Boot", "Microservices", "PostgreSQL", "AWS S3", "Docker", "Prometheus", "Grafana", "JWT", "Amazon MCF"],
    },
    {
      company: "SOLV (Standard Chartered Research & Tech India)",
      role: "Specialist - Engineering",
      duration: "12/2023 – 10/2024",
      location: "Noida (Hybrid)",
      description: [
        "Created new SFTP users in AWS Transfer Family with folder-level access restrictions for secure data transfer.",
        "Achieved a 10% reduction in API response times by optimizing database joins across core financial services.",
        "Implemented pagination and sorting across REST APIs for large datasets, increasing data retrieval efficiency by 20%.",
        "Deployed microservices using Jenkins tag-build strategies and actively monitored Kubernetes container logs for rapid incident resolution."
      ],
      tech: ["Java", "Spring Boot", "Microservices", "AWS Transfer Family", "SFTP", "PostgreSQL", "Jenkins", "Kubernetes"],
    },
    {
      company: "Nagarro Pvt. LTD.",
      role: "Java Developer",
      duration: "07/2021 – 12/2023",
      location: "Gurugram (Hybrid)",
      description: [
        "Researched and proposed the migration of monolithic architecture to microservices, enhancing system scalability and component flexibility.",
        "Developed Proof of Concepts (POCs) to initiate migration, including upgrading logging frameworks from Log4j to Log4j2 for enhanced security.",
        "Wrote and executed complex SQL queries to retrieve and manipulate data, improving backend efficiency by 20%.",
        "Analyzed and debugged core Java application code to identify root causes, reducing system downtime by 10%."
      ],
      tech: ["Java 8", "Spring Boot", "Hibernate", "JPA", "SQL", "Log4j2", "JUnit 5", "Insurance Domain"],
    },
  ],

  // Featured Projects
  projectCategories: [
    { id: "all", name: "All Projects" },
    { id: "gps", name: "GPS & Telematics" },
    { id: "fintech", name: "FinTech & B2B" },
    { id: "crm", name: "CRM & E-Commerce" },
    { id: "insurance", name: "Insurance" },
  ],

  projects: [
    {
      id: "onelap-gps",
      title: "OneLap GPS Tracker",
      category: "gps",
      shortDescription: "Real-time location monitoring and vehicle tracking platform with seamless GPS device communication.",
      fullDescription: "A high-concurrency telemetry platform providing real-time location tracking, route history playback, vehicle status updates, and automated geofence alert communications to maximize fleet visibility and tracking efficiency.",
      tech: ["Java", "Spring Boot", "PostgreSQL", "AWS S3", "Docker", "Prometheus"],
      features: [
        "Real-time GPS location tracking & route history playback",
        "Automated S3 position archiving cutting DB footprint by 83%",
        "High-concurrency thread tuning with 90% latency reduction",
        "99.9% uptime with Prometheus & Grafana alerting"
      ],
      githubUrl: "https://github.com/ravindra1234567/onelap-gps-tracker",
      liveUrl: "https://github.com/ravindra1234567",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop&q=80",
    },
    {
      id: "onelap-crm",
      title: "OneLap CRM & Amazon MCF Integration",
      category: "crm",
      shortDescription: "Enterprise CRM streamlining lead tracking, customer support, and automated Amazon MCF order fulfillment.",
      fullDescription: "A centralized customer relationship management platform automating sales activities, technician dispatching, and service operations. Integrated with Amazon Multi-Channel Fulfillment (MCF) APIs for automated shipping & inventory sync.",
      tech: ["Java", "Spring Boot", "Amazon MCF API", "PostgreSQL", "REST API", "JWT"],
      features: [
        "Amazon Multi-Channel Fulfillment (MCF) shipping integration",
        "Lead tracking & automated service operation workflows",
        "Telecom SIM usage audit cutting monthly bills by 50%",
        "JWT and Spring Security RBAC access control"
      ],
      githubUrl: "https://github.com/ravindra1234567/onelap-crm",
      liveUrl: "https://github.com/ravindra1234567",
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&auto=format&fit=crop&q=80",
    },
    {
      id: "solv-b2b",
      title: "Solv B2B MSME Trade & Payment Platform",
      category: "fintech",
      shortDescription: "Microservices platform supporting India's MSME sector with open trade, invoice processing, and financial transactions.",
      fullDescription: "A web-based microservices application covering the entire B2B trade value chain (master anchor, anchor, and dealer roles). Enables user onboarding, invoice uploading, AWS Transfer Family SFTP access, and payment processing.",
      tech: ["Microservices", "Java", "Spring Boot", "AWS Transfer SFTP", "Kubernetes", "Jenkins"],
      features: [
        "Role-based multi-tier trade ecosystem (Anchor & Dealer)",
        "SFTP folder isolation using AWS Transfer Family",
        "API pagination & sorting boosting efficiency by 20%",
        "Jenkins tag build deployments & Kubernetes monitoring"
      ],
      githubUrl: "https://github.com/ravindra1234567/solv-b2b-platform",
      liveUrl: "https://github.com/ravindra1234567",
      imageUrl: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900&auto=format&fit=crop&q=80",
    },
    {
      id: "insurance-app",
      title: "Enterprise Insurance Management Application",
      category: "insurance",
      shortDescription: "Simplified enterprise insurance suite providing policy administration, claims processing, and high-scalability.",
      fullDescription: "An insurance application suite supporting policy lifecycle management, claims filing, and automated risk verification. Migrated from monolithic architecture to microservices with Log4j2 framework security upgrades.",
      tech: ["Java 8", "Spring Boot", "Hibernate & JPA", "SQL", "Log4j2", "JUnit 5"],
      features: [
        "Monolith to Microservices architectural migration POCs",
        "Log4j to Log4j2 security & performance upgrades",
        "Complex SQL optimization yielding 20% efficiency gain",
        "Comprehensive unit test suites with JUnit 5 & Mockito"
      ],
      githubUrl: "https://github.com/ravindra1234567/insurance-application",
      liveUrl: "https://github.com/ravindra1234567",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&auto=format&fit=crop&q=80",
    },
  ],

  // Certificates & Awards
  achievements: [
    {
      title: "Winner of Smart India Hackathon",
      issuer: "MHRD (Govt. Of India)",
      year: "National Winner",
      description: "Awarded 1st place in national hackathon organized by Ministry of HRD, Govt. of India.",
      icon: "FaAward",
    },
    {
      title: "Problem Solving",
      issuer: "HackerRank",
      year: "Verified Certificate",
      description: "Demonstrated advanced algorithmic problem-solving & data structure competence.",
      icon: "FaCode",
    },
    {
      title: "Java (Intermediate)",
      issuer: "HackerRank",
      year: "Verified Certificate",
      description: "Validated OOP, concurrency, collection frameworks, and core Java engineering.",
      icon: "FaJava",
    },
    {
      title: "SQL Certification",
      issuer: "HackerRank",
      year: "Verified Certificate",
      description: "Certified expertise in complex queries, joins, indexing, and relational schema optimization.",
      icon: "FaDatabase",
    },
  ],
};
