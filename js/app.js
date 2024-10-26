/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

// Define Global Variables
const navbarList = document.getElementById("navbar__list"); // The <ul> element for navigation
const sections = document.querySelectorAll("section"); // All sections in the page
const scrollToTopBtn = document.getElementById("scrollToTopBtn"); // Scroll to Top button

// Build the navigation menu dynamically
/**
 * Creates navigation items based on the sections.
 */
const createNav = () => {
  sections.forEach((section) => {
    const sectionId = section.getAttribute("id");
    const sectionNav = section.getAttribute("data-nav");

    const listItem = document.createElement("li");
    const a = document.createElement("a");

    a.href = `#${sectionId}`;
    a.className = "section-link";
    a.textContent = sectionNav;

    listItem.appendChild(a);
    navbarList.appendChild(listItem);
  });
};

// Scroll to section on navigation link click

/**
 * Scrolls to the section when a navigation link is clicked.
 */
const scrollToSection = (event) => {
  event.preventDefault();
  const targetId = event.target.getAttribute("href").substring(1);
  const targetSection = document.getElementById(targetId);

  targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
};

// Scroll to top of the page

/**
 * Scrolls smoothly to the top of the viewport.
 */
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

/**
 * Start Events
 */

// Build menu when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", createNav);

// Scroll to section on link click
navbarList.addEventListener("click", (event) => scrollToSection(event));

// Scroll to top on button click
scrollToTopBtn.addEventListener("click", scrollToTop);
