/**
 * Portfolio Data Configuration
 * --------------------------------------------------------------------------
 * Customize all text, profile information, skills, experiences, projects,
 * certifications, and contact links in this single file.
 * --------------------------------------------------------------------------
 */

export const portfolioData = {
  // Personal & Hero Section Configuration
  personalInfo: {
    name: "Ravindra Kumar",
    greeting: "Hello, I'm",
    roles: [
      "Senior Java Backend Engineer",
      "Spring Boot & Microservices Specialist",
      "Cloud & AWS Architect",
      "Distributed Systems Engineer",
    ],
    bio: "Senior Java Backend Engineer with 5.5+ years of experience engineering high-performance enterprise systems, microservices architectures, cloud-native backend applications, and reliable database solutions.",
    aboutHeading: "Architecting Scalable & Resilient Enterprise Solutions",
    aboutDescription: [
      "I specialize in designing and delivering high-throughput, fault-tolerant backend applications using Java, Spring Boot, Microservices, and Cloud infrastructure.",
      "With over 5.5 years of industry experience across telematics, e-commerce financing, and enterprise insurance domains, I have successfully transformed monolithic architectures into scalable microservices systems operating at scale."
    ],
    avatarUrl: "", // Optional avatar URL (leave empty to use default SVG/gradient avatar)
    resumeFileName: "Ravindra_Kumar_Resume.pdf",
    resumeUrl: "/resume.pdf", // Place resume.pdf inside the /public directory
    statusText: "Open to Senior Backend & Cloud Opportunities",
    isAvailable: true,
  },

  // Key Highlight Statistics
  stats: [
    { label: "Years Experience", value: "5.5+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Domains & Industries", value: "4" },
    { label: "Uptime & System Reliability", value: "99.9%" },
  ],

  // Social Links
  socialLinks: {
    github: "https://github.com/ravindra1234567",
    linkedin: "https://linkedin.com/in/ravindra156785166",
    email: "ravindrakushwahanwg@gmail.com",
    phone: "+91 70471 78936",
    location: "Noida, Uttar Pradesh, India",
  },

  // Skills Section Categorized
  skillCategories: [
    {
      id: "all",
      name: "All Skills",
    },
    {
      id: "backend",
      name: "Backend Development",
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
    },
    {
      id: "database",
      name: "Databases & Storage",
    },
    {
      id: "tools",
      name: "Tools & Testing",
    },
  ],

  skills: [
    { name: "Java 17/21", category: "backend", iconName: "FaJava", level: 95 },
    { name: "Spring Boot", category: "backend", iconName: "SiSpringboot", level: 95 },
    { name: "Microservices", category: "backend", iconName: "FaServer", level: 90 },
    { name: "Hibernate / JPA", category: "backend", iconName: "SiHibernate", level: 90 },
    { name: "RESTful APIs", category: "backend", iconName: "FaCode", level: 95 },

    { name: "AWS Services", category: "cloud", iconName: "FaAws", level: 85 },
    { name: "Docker", category: "cloud", iconName: "FaDocker", level: 85 },
    { name: "Kubernetes", category: "cloud", iconName: "SiKubernetes", level: 80 },
    { name: "Jenkins CI/CD", category: "cloud", iconName: "FaJenkins", level: 85 },

    { name: "MySQL", category: "database", iconName: "SiMysql", level: 90 },
    { name: "PostgreSQL", category: "database", iconName: "SiPostgresql", level: 90 },
    { name: "Redis Caching", category: "database", iconName: "FaDatabase", level: 80 },

    { name: "Git / GitHub", category: "tools", iconName: "FaGitAlt", level: 90 },
    { name: "JUnit 5 & Mockito", category: "tools", iconName: "SiJunit5", level: 85 },
    { name: "Postman", category: "tools", iconName: "FaTools", level: 90 },
  ],

  // Professional Experience
  experiences: [
    {
      company: "OneLap Telematics",
      role: "Senior Java Backend Engineer",
      duration: "Nov 2024 - Present",
      location: "Noida, India",
      description: [
        "Architected scalable backend microservices for real-time telemetry processing and fleet monitoring.",
        "Optimized AWS cloud deployments with Docker, Kubernetes (EKS), and automated CI/CD pipelines in Jenkins.",
        "Improved database query execution performance by 40% using PostgreSQL connection pooling and indexing."
      ],
      tech: ["Java 17", "Spring Boot", "AWS", "Kubernetes", "Jenkins", "MySQL", "PostgreSQL"],
    },
    {
      company: "SOLV B2B Platform",
      role: "Specialist Backend Engineer",
      duration: "Dec 2023 - Oct 2024",
      location: "Bengaluru, India",
      description: [
        "Engineered financial microservices handling MSME invoice processing and automated payment workflows.",
        "Implemented secure JWT authentication, rate limiting, and role-based authorization across REST endpoints.",
        "Integrated AWS S3 and SNS/SQS event messaging queues for asynchronous document processing."
      ],
      tech: ["Java", "Spring Boot", "Microservices", "AWS", "PostgreSQL", "REST APIs", "Docker"],
    },
    {
      company: "Nagarro",
      role: "Java Software Developer",
      duration: "Jul 2021 - Dec 2023",
      location: "Gurugram, India",
      description: [
        "Developed core business components for enterprise insurance applications and customer policy web portals.",
        "Designed relational database schemas with Hibernate JPA, maintaining unit test coverage with JUnit 5 and Mockito.",
        "Collaborated in Agile Scrum teams to deliver sprint features ahead of schedules with high quality."
      ],
      tech: ["Java", "Spring Boot", "Hibernate", "JPA", "SQL", "JUnit 5", "Insurance Domain"],
    },
  ],

  // Featured Projects
  projectCategories: [
    { id: "all", name: "All Projects" },
    { id: "telematics", name: "Telematics & IoT" },
    { id: "fintech", name: "FinTech & B2B" },
    { id: "enterprise", name: "Enterprise Systems" },
  ],

  projects: [
    {
      id: "onelap-gps",
      title: "OneLap Real-Time GPS Tracking Platform",
      category: "telematics",
      shortDescription: "High-throughput telemetry & real-time vehicle monitoring platform processing millions of GPS updates daily.",
      fullDescription: "An end-to-end telemetry platform engineered with Spring Boot and AWS to ingest, analyze, and display real-time GPS positioning data for vehicle fleets. Features dynamic geofencing alerts, route analytics, and live dashboard tracking.",
      tech: ["Java 17", "Spring Boot", "AWS", "MySQL", "WebSockets", "Docker"],
      features: [
        "Real-time GPS stream ingesting & parsing",
        "Geofencing violation triggers & mobile notifications",
        "Vehicle telemetry analytics & trip history playback",
        "Multi-tenant fleet management portal"
      ],
      githubUrl: "https://github.com/ravindra1234567/onelap-gps-tracker",
      liveUrl: "https://github.com/ravindra1234567",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop&q=80",
    },
    {
      id: "onelap-crm",
      title: "Enterprise Sales & Support CRM",
      category: "enterprise",
      shortDescription: "Comprehensive customer relationship management solution designed for automated lead assignment and support desk operations.",
      fullDescription: "A modern CRM system built for telemetry hardware distributors. It centralizes lead pipelines, warranty registrations, technician dispatching, and customer ticket resolution into a unified dashboard.",
      tech: ["Java", "Spring Boot", "MySQL", "REST API", "Redis", "JWT"],
      features: [
        "Automated lead allocation algorithms based on region",
        "Support ticket tracking with SLA escalation rules",
        "Customer service analytics & reporting export",
        "Role-Based Access Control (RBAC) authorization"
      ],
      githubUrl: "https://github.com/ravindra1234567/enterprise-crm",
      liveUrl: "https://github.com/ravindra1234567",
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&auto=format&fit=crop&q=80",
    },
    {
      id: "solv-b2b",
      title: "SOLV MSME Invoice & Financing Platform",
      category: "fintech",
      shortDescription: "Microservices-driven B2B payment gateway and invoice financing ecosystem for small business credit evaluation.",
      fullDescription: "A microservices platform facilitating seamless invoice discounting and credit approvals for MSME merchants. Provides automated document OCR parsing, bank gateway reconciliation, and ledger transaction tracking.",
      tech: ["Microservices", "Java", "Spring Cloud", "AWS S3", "PostgreSQL", "Kafka"],
      features: [
        "Asynchronous invoice verification workflow",
        "Multi-bank payment processing and ledger updates",
        "Secure document vault with AWS S3 storage",
        "Distributed transaction logging and audit trail"
      ],
      githubUrl: "https://github.com/ravindra1234567/solv-fintech-b2b",
      liveUrl: "https://github.com/ravindra1234567",
      imageUrl: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900&auto=format&fit=crop&q=80",
    },
    {
      id: "insurance-portal",
      title: "Cloud Insurance Policy & Claims Suite",
      category: "enterprise",
      shortDescription: "Enterprise claims processing engine & self-service insurance portal with automated underwriting validation.",
      fullDescription: "A robust insurance management engine designed for multi-tier policy generation, claims lifecycle management, premium calculation algorithms, and regulatory compliance logging.",
      tech: ["Java", "Spring Boot", "Hibernate JPA", "PostgreSQL", "Docker", "JUnit 5"],
      features: [
        "Automated premium calculator based on risk matrix",
        "Digital claims filing and adjuster workflow engine",
        "Automated policy PDF document generation",
        "High test coverage with Mockito & Integration tests"
      ],
      githubUrl: "https://github.com/ravindra1234567/insurance-management-suite",
      liveUrl: "https://github.com/ravindra1234567",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&auto=format&fit=crop&q=80",
    },
  ],

  // Achievements & Certifications
  achievements: [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services (AWS)",
      year: "2024",
      description: "Validated expertise in designing distributed, fault-tolerant applications on AWS.",
      icon: "FaAws",
    },
    {
      title: "Oracle Certified Professional: Java SE",
      issuer: "Oracle",
      year: "2023",
      description: "Demonstrated advanced proficiency in Java core memory models, concurrency, and OOP design patterns.",
      icon: "FaJava",
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      year: "2023",
      description: "Proven skill in configuring, managing, and troubleshooting production Kubernetes clusters.",
      icon: "SiKubernetes",
    },
  ],
};
