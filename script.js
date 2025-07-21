const aboutBox = document.querySelector(".about-box");
const projectBox = document.querySelector(".project-box");
const achievementBox = document.querySelector(".achievements-box");
const contactBox = document.querySelector(".contact-box");

function showAbout() {
  aboutBox.style.display = "block";
  projectBox.style.display = "none";
  achievementBox.style.display = "none";
  contactBox.style.display = "none";
}

function showProject() {
  aboutBox.style.display = "none";
  projectBox.style.display = "block";
  achievementBox.style.display = "none";
  contactBox.style.display = "none";
}

function showAchievement() {
  aboutBox.style.display = "none";
  projectBox.style.display = "none";
  achievementBox.style.display = "block";
  contactBox.style.display = "none";
}

function showContact() {
  aboutBox.style.display = "none";
  projectBox.style.display = "none";
  achievementBox.style.display = "none";
  contactBox.style.display = "block";
}
