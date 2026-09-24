// ========================================================
// PORTFOLIO DATA (JSON-COMPATIBLE OBJECTS)
// Easily add, modify, or remove items without touching HTML!
// ========================================================

const portfolioData = {
  // 1. IMPACT METRICS
  metrics: [
    { value: "3.66", valueSuffix: "/4.0", label: "Bachelor GPA", sub: "Arab Open University (2020–2024)" },
    { value: "Grade A", label: "Graduation Project", sub: "AlzCare AI Healthcare System" },
    { value: "MSc AI", label: "Graduate Studies", sub: "Benha University (In Progress)" },
    { value: "180+", valueSuffix: "h", label: "Specialized Diplomas", sub: "ITI (.NET) & Route Academy" }
  ],

  // 2. FEATURED PROJECTS & CASE STUDIES
  projects: [
    {
      id: "alzcare",
      title: "AlzCare — Android AI Healthcare",
      badge: "Grade A Capstone",
      badgeClass: "",
      featured: true,
      category: "ai mobile",
      categoryLabel: "AI & Deep Learning / Mobile Systems",
      icon: "🧠",
      summary:
        "Early Alzheimer's detection from brain MRI scans using an on-device quantized CNN model with TensorFlow Lite, integrated into a native Android clinical ecosystem.",
      tags: ["Deep Learning", "CNN", "TensorFlow Lite", "Kotlin", "MVVM", "Firebase Auth", "Firestore"],
      problem:
        "Alzheimer's disease is one of the leading neurodegenerative conditions worldwide, yet early clinical diagnosis is frequently delayed due to the inaccessibility of expert neuro-radiologists and prohibitive computational costs. Traditional AI diagnostics depend on remote cloud servers, which introduces latency, exposes sensitive patient brain MRI scans over the network, and makes diagnostics unusable in low-connectivity rural health clinics.",
      solution:
        "Engineered AlzCare, an Android-native healthcare platform featuring privacy-preserving, on-device artificial intelligence. Developed a Convolutional Neural Network (CNN) trained on brain MRI scans, converted and quantized the model using TensorFlow Lite to execute low-latency inference directly on smartphone hardware. Integrated this local edge inference pipeline into a clean MVVM Android architecture with Firebase Authentication and Firestore for comprehensive doctor-patient clinic workflows.",
      features: [
        "<strong>On-Device Deep Learning:</strong> Quantized CNN model running locally via TensorFlow Lite without sending sensitive patient scans to external servers.",
        "<strong>Clean MVVM Architecture:</strong> Separation of concerns across UI, ViewModel, and Repository layers for high stability and responsiveness.",
        "<strong>Doctor & Patient Portals:</strong> Real-time appointment scheduling, diagnostic scan histories, and longitudinal patient health monitoring.",
        "<strong>Cloud Synchronization:</strong> Firebase Authentication and Cloud Firestore for resilient data persistence and synchronization."
      ],
      results:
        "Defended as the Bachelor of Computer Science Capstone Project at Arab Open University, achieving the highest distinction of Grade A (overall cumulative GPA: 3.66). Achieved sub-second inference latency on standard mobile hardware with high diagnostic sensitivity.",
      githubUrl: "https://github.com/AAshrafR/alz_care",
      liveUrl: "https://github.com/AAshrafR/alz_care/releases"
    },
    {
      id: "mclinic",
      title: "MClinic — Medical Clinic Management",
      badge: "Production Android",
      badgeClass: "badge-mobile",
      featured: false,
      category: "mobile",
      categoryLabel: "Mobile & Healthcare Systems",
      icon: "📱",
      summary:
        "Comprehensive Android clinic platform managing appointments, doctor administration, chronic health metric tracking (glucose, blood pressure), and prescriptions.",
      tags: ["Kotlin", "Android SDK", "MVVM", "Firebase", "Health Monitoring", "Data Visualization"],
      problem:
        "Private outpatient practices frequently suffer from fragmented paper records, double-booked reservations, and inefficient communication channels. Crucially, physicians have minimal visibility into chronic patients' physiological fluctuations (such as blood glucose and blood pressure) between physical visits, hindering preventative healthcare.",
      solution:
        "Developed MClinic, a full-featured medical clinic management application engineered with Kotlin and the MVVM architectural pattern. The system introduces dedicated administrative controls for clinic staff alongside an interactive patient portal that tracks vital health metrics, generates historical trend graphs, and digitizes prescription documents in real time using Firebase services.",
      features: [
        "<strong>Administrative Dashboard:</strong> Centralized controls for managing doctor rosters, operating hours, patient queues, and appointment reservations.",
        "<strong>Chronic Health Tracking:</strong> Interactive telemetry module allowing patients to log blood glucose and blood pressure measurements.",
        "<strong>Analytical Data Visualization:</strong> Built-in charts and graphs that plot physiological metrics over time for attending physicians.",
        "<strong>Digital Prescription Archives:</strong> Cloud-backed camera capture feature enabling patients to securely upload and store prescription images."
      ],
      results:
        "Significantly streamlined outpatient reservation workflows, eliminated paper-based record bottlenecks, and enabled continuous remote monitoring of at-risk chronic patients.",
      githubUrl: "https://github.com/AAshrafR/MClinc",
      liveUrl: "https://github.com/AAshrafR/MClinc#readme"
    },
    {
      id: "glucose",
      title: "Post-Meal Glucose Prediction",
      badge: "ML Research",
      badgeClass: "badge-ml",
      featured: false,
      category: "ai data",
      categoryLabel: "AI & Healthcare Data Science",
      icon: "📊",
      summary:
        "Machine learning predictive model estimating post-prandial glycemic excursions with strict subject-isolated GroupKFold validation and CatBoost benchmarks.",
      tags: ["Machine Learning", "Python", "CatBoost", "Extra Trees", "Scikit-Learn", "GroupKFold"],
      problem:
        "Post-prandial glycemic excursions (glucose surges after food intake) vary dramatically between individuals due to complex metabolic and dietary interactions. In conventional ML workflows, random cross-validation splits cause fatal data leakage by distributing records from the same individual across both training and testing sets, resulting in deceptively high test scores that fail when deployed on unseen patients.",
      solution:
        "Designed a leakage-free predictive machine learning pipeline in Python. Enforced subject-isolated grouped splits and GroupKFold cross-validation to guarantee that test sets contained strictly unseen patient profiles. Engineered non-linear physiological and dietary features, then benchmarked advanced gradient boosted trees (CatBoost) against Extra Trees ensembles across multiple clinical error metrics.",
      features: [
        "<strong>Leakage-Free Validation:</strong> Implemented GroupKFold cross-validation grouped by patient IDs to evaluate genuine model generalization.",
        "<strong>Non-Linear Feature Engineering:</strong> Extracted carbohydrate ratios, glycemic index metrics, and temporal meal patterns.",
        "<strong>Comparative Benchmark:</strong> Systematically evaluated algorithms using RMSE, MAE, and R² regression metrics.",
        "<strong>Feature Importance Analysis:</strong> Uncovered key dietary attributes that drive glycemic fluctuations."
      ],
      results:
        "CatBoost gradient boosting demonstrated superior non-linear capture of metabolic spikes compared to baseline models, providing a validated foundation for personalized computational dietary guidance.",
      githubUrl: "https://github.com/AAshrafR",
      liveUrl: "https://github.com/AAshrafR"
    },
    {
      id: "gobike",
      title: "Ford GoBike Analytics & Dashboard",
      badge: "Data Dashboard",
      badgeClass: "badge-data",
      featured: false,
      category: "data",
      categoryLabel: "Data Science & Systems",
      icon: "🚴",
      summary:
        "End-to-end urban mobility analytics transforming millions of trip records into automated feature pipelines and an interactive Dash/Plotly dashboard.",
      tags: ["Python", "Plotly", "Dash", "Pandas", "EDA", "Data Pipeline"],
      problem:
        "Urban micro-mobility operators collect millions of geospatial trip data points, but raw logs contain missing sensor readings, duration outliers, and timestamp irregularities. Operations teams struggle to balance bike dock availability during morning and evening rush hours without clear visual intelligence.",
      solution:
        "Engineered an automated data cleaning, transformation, and exploratory analysis pipeline in Python. Converted exploratory Jupyter notebook workflows into modular, reusable Python packages, and built an interactive web dashboard utilizing Plotly and Dash for real-time operational exploration.",
      features: [
        "<strong>Automated Data Pipeline:</strong> Handled coordinate filtering, outlier removal, and temporal trip feature extraction.",
        "<strong>User Segmentation:</strong> Identified clear behavioral contrasts between daily commuters (subscribers) and casual weekend riders.",
        "<strong>Interactive Web Dashboard:</strong> Responsive Dash and Plotly interface featuring spatial trip density heatmaps and temporal distribution charts."
      ],
      results:
        "Provided city operations teams with at-a-glance visibility into commuter trip spikes, enabling data-informed fleet redistribution without manual database querying.",
      githubUrl: "https://github.com/AAshrafR",
      liveUrl: "https://github.com/AAshrafR"
    },
    {
      id: "hospital",
      title: "Hospital Management System",
      badge: "Software Architecture",
      badgeClass: "badge-code",
      featured: false,
      category: "data",
      categoryLabel: "Software Engineering & Systems",
      icon: "🏥",
      summary:
        "Modular Python OOP architecture modeling hospital department hierarchies, patient admissions, and robust transactional JSON file persistence.",
      tags: ["Python", "OOP Architecture", "SOLID Principles", "JSON Persistence"],
      problem:
        "Healthcare software prototypes frequently collapse into fragile, tightly coupled architectures where business logic, persistence layers, and clinical records are mixed together, making maintenance difficult and introducing data corruption risks during updates.",
      solution:
        "Engineered a pure object-oriented software system in Python strictly adhering to SOLID design principles. Modeled domain entities (Patients, Doctors, Medical Staff, Departments, Wards) with clean encapsulation and inheritance, backed by a robust transactional JSON-based persistence engine.",
      features: [
        "<strong>SOLID OOP Architecture:</strong> Designed decoupled class hierarchies for clean abstraction, testability, and maintainability.",
        "<strong>Departmental Workflows:</strong> Modeled patient admission, doctor allocation, and medical department lifecycle operations.",
        "<strong>Reliable JSON State Management:</strong> Atomic read/write serialization preserving clinical state across application restarts."
      ],
      results:
        "Produced a modular, easily extensible healthcare administration framework that allows seamless addition of new clinical departments without modifying core system logic.",
      githubUrl: "https://github.com/AAshrafR",
      liveUrl: "https://github.com/AAshrafR"
    }
  ],

  // 3. EDUCATION & SPECIALIZED DIPLOMAS
  education: [
    {
      highlight: true,
      badge: "In Progress",
      badgeType: "live",
      period: "Feb 2026 – Present",
      degree: "Master's Degree in Artificial Intelligence",
      institution: "Benha University · Egypt",
      desc: "Focusing on advanced machine learning algorithms, deep neural network architectures, computer vision, intelligent systems design, and applied AI research.",
      tags: ["Machine Learning", "Deep Learning", "AI Research", "Intelligent Systems"]
    },
    {
      highlight: false,
      badge: "GPA: 3.66 / 4.0",
      badgeType: "grade",
      period: "Oct 2020 – Jun 2024",
      degree: "Bachelor of Computer Science",
      institution: "Arab Open University · Egypt",
      desc: "Core foundations in algorithms, data structures, operating systems, and computer architecture. Graduated with a <strong>Grade A</strong> capstone defense for <em>AlzCare</em>.",
      tags: ["Graduation Project: Grade A", "Computer Science", "Algorithms", "OOP"]
    },
    {
      highlight: false,
      badge: "120 Hours Intensive",
      badgeType: "diploma",
      period: "Aug 2024",
      degree: "Full Stack Web Development (.NET)",
      institution: "Information Technology Institute (ITI) · Egypt",
      desc: "Comprehensive professional training in backend and web architecture using modern C#, Entity Framework, ASP.NET MVC, and MySQL relational database management.",
      tags: ["C#", "ASP.NET MVC", "Entity Framework", "MySQL"]
    },
    {
      highlight: false,
      badge: "Professional Diploma",
      badgeType: "diploma",
      period: "May 2023 – Oct 2023",
      degree: "Android Development Diploma",
      institution: "Route Academy",
      desc: "Professional mobile engineering covering Kotlin, XML UI layouts, MVVM architecture, Data Binding, Room SQLite database, Firebase Auth/Firestore, and Git version control.",
      tags: ["Kotlin", "Android SDK", "MVVM", "Room DB", "Firebase"]
    },
    {
      highlight: false,
      badge: "60 Hours Intensive",
      badgeType: "diploma",
      period: "Aug 2021",
      degree: "Introduction to Web Technologies",
      institution: "Information Technology Institute (ITI) · Egypt",
      desc: "Foundational training in modern front-end web standards, responsive design, semantic HTML5, CSS styling, and DOM manipulation with vanilla JavaScript.",
      tags: ["HTML5", "CSS3", "JavaScript", "Web Standards"]
    }
  ],

  // 4. PROFESSIONAL EXPERIENCE & LEADERSHIP
  experience: [
    {
      featured: true,
      label: "CURRENT ROLE",
      isCurrent: true,
      role: "Teaching Assistant (Part-Time)",
      org: "Faculty of Information Technology and Computing — Arab Open University Egypt",
      period: "Feb 2026 – Present",
      intro: "Instructing and mentoring computer science students across foundational programming, systems architecture, and web engineering:",
      bullets: [
        "<strong>Programming Fundamentals & C#:</strong> Assist in teaching object-oriented C# programming, core data structures, algorithms, and algorithmic complexity.",
        "<strong>Computer Organization & Architecture:</strong> Explain CPU architecture, instruction cycles, memory hierarchy, cache management, and underlying hardware-software interaction.",
        "<strong>Web Technologies:</strong> Guide practical lab sessions covering HTML, CSS, JavaScript, PHP, and MySQL database integration.",
        "<strong>Code Debugging & Labs:</strong> Lead hands-on programming labs, conducting code reviews and guiding students to resolve logic bugs and syntax errors."
      ],
      tags: ["C# Programming", "Computer Architecture", "Algorithms", "Web Technologies", "Student Mentorship"]
    },
    {
      featured: false,
      label: "ACADEMIC COUNSELING",
      isCurrent: false,
      role: "Academic Advisor",
      org: "Arab Open University Egypt",
      period: "Aug 2023 – Sep 2023",
      desc: "Provided individualized academic advising on degree course selections, prerequisites, study schedules, and graduation requirements. Guided students through academic regulations to optimize their collegiate trajectory.",
      tags: ["Academic Planning", "Curriculum Guidance", "Student Success"]
    },
    {
      featured: false,
      label: "LEADERSHIP",
      isCurrent: false,
      role: "Administrative Member",
      org: "Student Council — Arab Open University Egypt",
      period: "Oct 2023 – Oct 2024",
      desc: "Organized academic workshops and student engagement initiatives across the university. Acted as a primary liaison facilitating clear communication between the student body and university administration.",
      tags: ["Event Management", "Leadership", "Communication"]
    },
    {
      featured: false,
      label: "TECHNICAL INTERNSHIP",
      isCurrent: false,
      role: "Network Engineering Trainee",
      org: "Dreams Resorts — Sharm El-Sheikh, Egypt",
      period: "Aug 2022 – Sep 2022",
      desc: "Monitored enterprise network infrastructure, assisted in diagnosing network routing and connectivity issues, and gained hands-on operational exposure to corporate LAN/WAN networking setups.",
      tags: ["Network Infrastructure", "Troubleshooting", "LAN/WAN"]
    }
  ],

  // 5. TECHNICAL TOOLKIT & SKILLS
  skills: [
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      skills: ["Python", "TensorFlow Lite", "CNN (Computer Vision)", "Scikit-learn", "CatBoost", "Extra Trees", "Feature Engineering", "GroupKFold Validation", "Model Quantization", "NumPy", "Pandas"]
    },
    {
      icon: "📱",
      title: "Mobile & Software Engineering",
      skills: ["Kotlin", "Java", "Android SDK", "MVVM Architecture", "XML Layouts", "Data Binding", "C#", "ASP.NET MVC", "Entity Framework", "REST APIs"]
    },
    {
      icon: "🗄️",
      title: "Databases & Backend",
      skills: ["Firebase Auth", "Cloud Firestore", "Room Database", "MySQL", "SQL", "PHP", "JSON Persistence"]
    },
    {
      icon: "💻",
      title: "Core Computer Science",
      skills: ["Data Structures", "Algorithms", "OOP Design Patterns", "Computer Organization", "CPU & Memory Hierarchy", "Clean Architecture"]
    },
    {
      icon: "🛠️",
      title: "Tools & Environment",
      skills: ["Git & GitHub", "Android Studio", "VS Code", "Jupyter Notebook", "Postman"]
    },
    {
      icon: "🌟",
      title: "Languages & Strengths",
      skills: ["Arabic (Native)", "English (Very Good)", "Technical Teaching", "Problem Solving", "Clear Communication", "Team Collaboration"]
    }
  ]
};

// ========================================================
// RENDER FUNCTIONS (HTML INJECTION)
// ========================================================

// 1. Render Metrics
function renderMetrics() {
  const container = document.getElementById("metricsContainer");
  if (!container) return;

  container.innerHTML = portfolioData.metrics
    .map(
      (m) => `
      <div class="metric-card reveal">
        <div class="metric-value">${m.value}${m.valueSuffix ? `<span>${m.valueSuffix}</span>` : ""}</div>
        <div class="metric-label">${m.label}</div>
        <div class="metric-sub">${m.sub}</div>
      </div>
    `
    )
    .join("");
}

// 2. Render Projects
function renderProjects() {
  const container = document.getElementById("projectsContainer");
  if (!container) return;

  container.innerHTML = portfolioData.projects
    .map(
      (p) => `
      <article class="project-card ${p.featured ? "featured " : ""}reveal" 
               data-category="${p.category}" 
               data-project-id="${p.id}" 
               tabindex="0" 
               role="button" 
               aria-label="View ${p.title} project details">
        <div class="card-top">
          <span class="card-badge ${p.badgeClass || ""}">${p.badge}</span>
          <span class="card-action-hint">Click for Details ↗</span>
        </div>

        <div class="project-content">
          <div class="project-title-row">
            <h3>${p.title}</h3>
            <span class="project-mini-icon">${p.icon}</span>
          </div>

          <p class="project-summary">${p.summary}</p>

          <div class="tags">
            ${p.tags.slice(0, 4).map((t) => `<span>${t}</span>`).join("")}
          </div>
        </div>

        <div class="card-footer">
          <span class="btn-card-details">
            Case Study &amp; Problems <span class="arrow">→</span>
          </span>
          <div class="card-quick-links">
            <span class="quick-link-pill">Live / Code</span>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

// 3. Render Education
function renderEducation() {
  const container = document.getElementById("educationContainer");
  if (!container) return;

  container.innerHTML = portfolioData.education
    .map(
      (e) => `
      <div class="education-card ${e.highlight ? "highlight " : ""}reveal">
        <div class="edu-header">
          <span class="edu-badge ${e.badgeType}">${e.badge}</span>
          <span class="edu-date">${e.period}</span>
        </div>
        <h3>${e.degree}</h3>
        <p class="edu-institution">${e.institution}</p>
        <p class="edu-desc">${e.desc}</p>
        <div class="edu-tags">
          ${e.tags.map((t) => `<span>${t}</span>`).join("")}
        </div>
      </div>
    `
    )
    .join("");
}

// 4. Render Experience
function renderExperience() {
  const container = document.getElementById("experienceContainer");
  if (!container) return;

  container.innerHTML = portfolioData.experience
    .map(
      (exp) => `
      <article class="experience-card ${exp.featured ? "featured-exp " : ""}reveal">
        <div class="experience-top">
          <div>
            <span class="experience-label ${exp.isCurrent ? "current" : ""}">${exp.label}</span>
            <h3>${exp.role}</h3>
            <p class="experience-org">${exp.org}</p>
          </div>
          <span class="experience-period">${exp.period}</span>
        </div>

        ${exp.intro ? `<p class="exp-intro">${exp.intro}</p>` : ""}
        ${exp.bullets ? `<ul class="exp-bullet-list">${exp.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>` : ""}
        ${exp.desc ? `<p>${exp.desc}</p>` : ""}

        <div class="experience-tags">
          ${exp.tags.map((t) => `<span>${t}</span>`).join("")}
        </div>
      </article>
    `
    )
    .join("");
}

// 5. Render Skills
function renderSkills() {
  const container = document.getElementById("skillsContainer");
  if (!container) return;

  container.innerHTML = portfolioData.skills
    .map(
      (s) => `
      <div class="skill-group reveal">
        <div class="skill-group-header">
          <span class="group-icon">${s.icon}</span>
          <h3>${s.title}</h3>
        </div>
        <div class="skill-list">
          ${s.skills.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </div>
    `
    )
    .join("");
}

// Initialize all HTML rendering
function initDynamicRendering() {
  renderMetrics();
  renderProjects();
  renderEducation();
  renderExperience();
  renderSkills();
}

// Execute initial render
initDynamicRendering();

// ========================================================
// MOBILE NAVIGATION
// ========================================================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  // Close when clicking nav links
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close when clicking outside navbar
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// ========================================================
// PROJECT FILTERING
// ========================================================
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    const cards = document.querySelectorAll(".project-card");

    cards.forEach((card) => {
      const categories = card.getAttribute("data-category") || "";
      if (filter === "all" || categories.split(" ").includes(filter)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// ========================================================
// PROJECT DETAILS MODAL
// ========================================================
const projectModal = document.getElementById("projectModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalBadge = document.getElementById("modalBadge");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalTags = document.getElementById("modalTags");
const modalProblem = document.getElementById("modalProblem");
const modalSolution = document.getElementById("modalSolution");
const modalFeatures = document.getElementById("modalFeatures");
const modalResults = document.getElementById("modalResults");
const modalGithubBtn = document.getElementById("modalGithubBtn");
const modalLiveBtn = document.getElementById("modalLiveBtn");

function openProjectModal(projectId) {
  const data = portfolioData.projects.find((p) => p.id === projectId);
  if (!data || !projectModal) return;

  // Populate modal fields
  modalBadge.textContent = data.badge;
  modalCategory.textContent = data.categoryLabel;
  modalTitle.textContent = data.title;
  modalProblem.textContent = data.problem;
  modalSolution.textContent = data.solution;
  modalResults.textContent = data.results;

  // Populate tags
  modalTags.innerHTML = "";
  data.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.textContent = tag;
    modalTags.appendChild(span);
  });

  // Populate feature bullet list
  modalFeatures.innerHTML = "";
  data.features.forEach((feature) => {
    const li = document.createElement("li");
    li.innerHTML = feature;
    modalFeatures.appendChild(li);
  });

  // Action links
  modalGithubBtn.href = data.githubUrl;
  modalLiveBtn.href = data.liveUrl;

  // Open modal
  projectModal.classList.add("open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Prevent page scrolling
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.classList.remove("open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = ""; // Restore page scrolling
}

// Attach click and keyboard events to project cards (delegation on container)
const projectsContainer = document.getElementById("projectsContainer");
if (projectsContainer) {
  projectsContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".project-card");
    if (card) {
      const projectId = card.getAttribute("data-project-id");
      if (projectId) openProjectModal(projectId);
    }
  });

  projectsContainer.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest(".project-card");
      if (card) {
        e.preventDefault();
        const projectId = card.getAttribute("data-project-id");
        if (projectId) openProjectModal(projectId);
      }
    }
  });
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeProjectModal);
}

// Close modal when clicking backdrop outside modal card
if (projectModal) {
  projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal || e.target.classList.contains("modal-container")) {
      closeProjectModal();
    }
  });
}

// Close modal on Escape key press
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && projectModal && projectModal.classList.contains("open")) {
    closeProjectModal();
  }
});

// ========================================================
// COPY EMAIL TO CLIPBOARD
// ========================================================
const copyEmailBtn = document.getElementById("copyEmailBtn");
const copyTooltip = document.getElementById("copyTooltip");
const emailText = "aashrafr24@gmail.com";

if (copyEmailBtn && copyTooltip) {
  copyEmailBtn.addEventListener("click", async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(emailText);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = emailText;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      copyTooltip.classList.add("show");
      setTimeout(() => {
        copyTooltip.classList.remove("show");
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  });
}

// ========================================================
// SCROLL REVEAL OBSERVER
// ========================================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("visible"));
  }
}

// Trigger reveal observer after DOM cards are injected
initScrollReveal();
