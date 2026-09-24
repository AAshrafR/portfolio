// ================= PROJECT DATA STORE =================
const projectsData = {
  alzcare: {
    title: "AlzCare — Android AI Healthcare Application",
    badge: "Graduation Project · Grade A",
    category: "AI & Deep Learning / Mobile Systems",
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

  mclinic: {
    title: "MClinic — Medical Clinic Management Application",
    badge: "Production Android Application",
    category: "Mobile & Healthcare Systems",
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

  glucose: {
    title: "Post-Meal Blood Glucose Prediction",
    badge: "Machine Learning Research",
    category: "AI & Healthcare Data Science",
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

  gobike: {
    title: "Ford GoBike Analytics & Interactive Dashboard",
    badge: "Data Analytics & Dashboard",
    category: "Data Science & Systems",
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

  hospital: {
    title: "Hospital Management System",
    badge: "Software Architecture",
    category: "Software Engineering & Systems",
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
};

// ================= MOBILE NAVIGATION =================
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

// ================= PROJECT FILTERING =================
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    projectCards.forEach((card) => {
      const categories = card.getAttribute("data-category") || "";
      if (filter === "all" || categories.split(" ").includes(filter)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// ================= PROJECT DETAILS MODAL =================
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
  const data = projectsData[projectId];
  if (!data || !projectModal) return;

  // Populate modal fields
  modalBadge.textContent = data.badge;
  modalCategory.textContent = data.category;
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

// Attach click and keyboard events to project cards
projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const projectId = card.getAttribute("data-project-id");
    if (projectId) openProjectModal(projectId);
  });

  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const projectId = card.getAttribute("data-project-id");
      if (projectId) openProjectModal(projectId);
    }
  });
});

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

// ================= COPY EMAIL TO CLIPBOARD =================
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

// ================= SCROLL REVEAL OBSERVER =================
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
