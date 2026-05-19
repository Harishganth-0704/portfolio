// Smooth scrolling navigation trigger
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    // Offset for the sticky header
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = section.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

// Interactive Project Filtering
function filterProjects(category) {
  // Update active states on project filter buttons
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    if (btn.getAttribute("onclick").includes(category)) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Filter project cards
  const projectItems = document.querySelectorAll(".project-item");
  projectItems.forEach(item => {
    if (category === "all") {
      item.classList.remove("hidden");
    } else if (item.classList.contains(category)) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
}

// Generate Pinned GitHub Heatmap Cells
function generateHeatmap() {
  const grid = document.getElementById("heatmap-grid");
  if (!grid) return;

  // Clear existing items
  grid.innerHTML = "";

  // 53 columns * 7 rows = 371 cells (simulates full active year)
  const totalCells = 371;

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("heatmap-cell");

    // Assign realistic contribution weights (heavier on work days, lighter on weekends)
    const random = Math.random() * 100;
    let level = 0;

    if (random > 85) {
      level = 4; // heavy active (bright green)
    } else if (random > 65) {
      level = 3; // active
    } else if (random > 45) {
      level = 2; // medium
    } else if (random > 20) {
      level = 1; // light green
    } else {
      level = 0; // empty
    }

    cell.classList.add(`level-${level}`);
    grid.appendChild(cell);
  }
}

// Auto-activate Navigation Links on Scroll
function initScrollObserver() {
  const sections = document.querySelectorAll("section");
  const navButtons = document.querySelectorAll(".nav-btn");

  const observerOptions = {
    root: null,
    rootMargin: "-90px 0px -60% 0px", // triggers when section occupies viewport center
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        
        navButtons.forEach(btn => {
          if (btn.getAttribute("onclick").includes(id)) {
            btn.classList.add("active");
          } else {
            btn.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

// Initialize all features on load
document.addEventListener("DOMContentLoaded", () => {
  generateHeatmap();
  initScrollObserver();
});
