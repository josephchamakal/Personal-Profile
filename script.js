"use strict";
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Set current year in the footer
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // Mobile Menu Toggle
  // const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  // mobileNavToggle.addEventListener("click", function () {
  //   document.body.classList.toggle("menu-open");
  // });

  // Close mobile menu when clicking a nav link
  // const mobileNavLinks = document.querySelectorAll(".mobile-nav .nav-link");
  // mobileNavLinks.forEach((link) => {
  //   link.addEventListener("click", function () {
  //     document.body.classList.remove("menu-open");
  //   });
  // });

  // Header scroll effect
  const header = document.getElementById("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Scroll to section function
  window.scrollToSection = function (sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to top button
  const scrollToTopBtn = document.getElementById("scroll-to-top");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("visible");
    } else {
      scrollToTopBtn.classList.remove("visible");
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Intersection Observer for animations on scroll
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });

  // Skills section data
  const skillCategories = [
    {
      name: "Web Development",
      icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
      skills: [
        { name: "HTML/CSS" },
        { name: "JavaScript" },
        { name: "React.js" },
        { name: "PHP" },
        { name: "Laravel" },
      ],
    },
    {
      name: "Software Engineering",
      icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
      skills: [
        { name: "Python" },
        { name: "C/C++" },
        { name: "Git/GitHub" },
        { name: "REST APIs" },
      ],
    },
    {
      name: "Database Design",
      icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
      skills: [
        { name: "SQL" },
        { name: "MongoDB" },
        { name: "Database Architecture" },
        { name: "Data Modeling" },
        { name: "Query Optimization" },
      ],
    },
    {
      name: "Data Analysis",
      icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 6l-9.5 9.5-5-5L1 18"></path><path d="M17 6h6v6"></path></svg>',
      skills: [
        { name: "Excel/Sheets" },
        { name: "Python (Pandas/Numpy)" },
        { name: "Data Visualization (Matplotlib)" },
        { name: "Statistical Analysis" },
      ],
    },
    {
      name: "Machine Learning",
      icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12.5a2.5 2.5 0 0 0-2.5-2.5H20a1.5 1.5 0 0 0-1.5-1.5h-2a1.5 1.5 0 0 0-1.5 1.5h-2A1.5 1.5 0 0 0 11.5 9h-2A1.5 1.5 0 0 0 8 10.5H6A1.5 1.5 0 0 0 4.5 12h-.05a2.5 2.5 0 0 0 0 5h.05A1.5 1.5 0 0 0 6 18.5h2a1.5 1.5 0 0 0 1.5-1.5h2a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5h2a1.5 1.5 0 0 0 1.5-1.5h.5a2.5 2.5 0 0 0 2.5-2.5Z"></path><circle cx="12" cy="12" r="2"></circle></svg>',
      skills: [
        { name: "TensorFlow" },
        { name: "Scikit-Learn" },
        { name: "Natural Language Processing" },
        { name: "Computer Vision" },
        { name: "Predictive Modeling" },
      ],
    },

    {
      name: "3D Design",
      icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>',
      skills: [
        { name: "Blender" },
        { name: "3D Modeling" },
        { name: "Texturing" },
        { name: "Animation" },
        { name: "Rendering" },
      ],
    },
    {
      name: "Other Skills",
      icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>',
      skills: [
        { name: "Project Management" },
        { name: "UI/UX Design" },
        { name: "SEO" },
        { name: "Docker/Kubernetes" },
      ],
    },
  ];

  // Render skills
  const skillsGrid = document.querySelector(".skills-grid");

  if (skillsGrid) {
    skillCategories.forEach((category, index) => {
      const skillCard = document.createElement("div");
      skillCard.className = "skill-card animate-on-scroll";
      skillCard.style.animationDelay = `${index * 0.1}s`;

      const skillsHTML = category.skills
        .map(
          (skill) => `
        <div class="skill-progress">
          <div class="skill-progress-header">
            <span class="skill-name">${skill.name}</span>
          </div>
          
        </div>
      `
        )
        .join("");

      skillCard.innerHTML = `
        <div class="skill-card-header">
          ${category.icon}
          <h3>${category.name}</h3>
        </div>
        ${skillsHTML}
      `;

      skillsGrid.appendChild(skillCard);
      observer.observe(skillCard);
    });
  }

  // Animate progress bars when they become visible
  document.querySelectorAll(".skill-card").forEach((card) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars =
              entry.target.querySelectorAll(".progress-bar-fill");
            progressBars.forEach((bar) => {
              setTimeout(() => {
                bar.style.width = bar.dataset.width;
              }, 300);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(card);
  });

  // Portfolio projects data
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with product management, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      github: "#",
      live: "#",
      category: "web",
    },
    {
      title: "Real-time Data Dashboard",
      description:
        "Interactive dashboard displaying real-time analytics data with customizable visualizations.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["Vue.js", "D3.js", "Express", "Socket.io"],
      github: "#",
      live: "#",
      category: "web",
    },
    {
      title: "Sentiment Analysis Tool",
      description:
        "Machine learning application that analyzes text for sentiment and emotion classification.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      technologies: ["Python", "TensorFlow", "NLP", "Flask"],
      github: "#",
      live: "#",
      category: "ml",
    },
    {
      title: "Database Management System",
      description:
        "Custom DBMS with advanced query capabilities, data modeling, and visual schema designer.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["SQL", "Python", "Django", "Redis"],
      github: "#",
      live: "#",
      category: "database",
    },

    {
      title: "3D Product Configurator",
      description:
        "Interactive 3D product visualization tool allowing customers to customize products in real-time.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      technologies: ["Three.js", "Blender", "WebGL", "React"],
      github: "#",
      live: "#",
      category: "3d",
    },
  ];

  // Portfolio categories
  const categories = [
    { id: "all", name: "All" },
    { id: "web", name: "Web Development" },
    { id: "ml", name: "Machine Learning" },
    { id: "database", name: "Database" },
    { id: "App", name: "App Development" },
    { id: "3d", name: "3D Design" },
  ];

  // Render portfolio filters
  const portfolioFilter = document.querySelector(".portfolio-filter");

  if (portfolioFilter) {
    categories.forEach((category) => {
      const button = document.createElement("button");
      button.className = `filter-btn ${category.id === "all" ? "active" : ""}`;
      button.textContent = category.name;
      button.dataset.filter = category.id;

      button.addEventListener("click", () => {
        // Remove active class from all buttons
        document.querySelectorAll(".filter-btn").forEach((btn) => {
          btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");

        // Filter projects
        filterProjects(category.id);
      });

      portfolioFilter.appendChild(button);
    });
  }

  // Render portfolio projects
  const portfolioGrid = document.querySelector(".portfolio-grid");

  if (portfolioGrid) {
    renderProjects(projects);

    // Add intersection observer for projects
    document.querySelectorAll(".project-card").forEach((card) => {
      observer.observe(card);
    });
  }

  // Filter projects function
  function filterProjects(category) {
    const filteredProjects =
      category === "all"
        ? projects
        : projects.filter((project) => project.category === category);

    renderProjects(filteredProjects);

    // Re-observe new project cards
    document.querySelectorAll(".project-card").forEach((card) => {
      observer.observe(card);
    });
  }

  // Render projects function
  function renderProjects(projectsList) {
    portfolioGrid.innerHTML = "";

    projectsList.forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.className = "project-card";

      const techHTML = project.technologies
        .map((tech) => `<span class="project-tech-tag">${tech}</span>`)
        .join("");

      projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tech">
            ${techHTML}
          </div>
          <div class="project-links">
            <a href="${project.github}" aria-label="GitHub Repository">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a href="${project.live}" aria-label="Live Demo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      `;

      portfolioGrid.appendChild(projectCard);
    });
  }

  // Contact form submission
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };

      // Simulate form submission
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.innerHTML;

      submitButton.disabled = true;
      submitButton.innerHTML = "Sending...";

      // Simulate API call with timeout
      setTimeout(() => {
        // Show success message (in a real app, you'd handle this with proper UI feedback)
        alert("Message sent successfully! I'll get back to you soon.");

        // Reset form
        contactForm.reset();

        // Reset button
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
      }, 1500);
    });
  }
});

const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => nav.classList.toggle("active"));
