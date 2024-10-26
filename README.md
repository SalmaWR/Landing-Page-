# Dynamic Landing Page

## Project Description

This project creates a dynamic landing page with JavaScript, HTML, and CSS. It includes a navigation bar built dynamically from the sections on the page, smooth scrolling functionality for navigation links.

### Features

- **Dynamic Navigation Menu**: JavaScript automatically builds the navigation menu based on the sections present in the HTML file.
- **Smooth Scrolling**: Clicking a navigation link smoothly scrolls to the corresponding section.

## How to Run the Project

1. **Download or Clone** this repository.
2. Open the `index.html` file in a web browser to see the landing page in action.

## Code Explanation

### JavaScript

- **Global Variables**:
  - `navbarList`: The `<ul>` element that will contain the navigation links.
  - `sections`: A collection of all `<section>` elements in the HTML file.
  - `scrollToTopBtn` (optional): A button element for scrolling back to the top (if implemented).
- **Functions**:
  - **`createNav()`**: Loops through each section, creating navigation items and appending them to `navbarList`.
  - **`scrollToSection(event)`**: Prevents default anchor link behavior, extracts the section ID, and smoothly scrolls to the target section.
- **Event Listeners**:
  - `DOMContentLoaded`: Executes `createNav()` once the DOM is fully loaded.
  - `navbarList click event`: When a navigation link is clicked, `scrollToSection` is triggered, enabling smooth scrolling.
