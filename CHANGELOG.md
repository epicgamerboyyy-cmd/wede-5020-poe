# CHANGELOG

All notable changes to this project will be documented in this file.

This project follows [Semantic Versioning](https://semver.org/).

---

## [3.0.0] — 2026-06-18 — Part 3: JavaScript Functionality and SEO

### Added
- `js/enquiry.js` — client-side validation for the enquiry form; shows a cost estimate and availability response after submission without reloading the page
- `js/contact.js` — client-side validation for the contact form; compiles user input into a pre-filled `mailto:` link that opens the user's email client
- `js/services.js` — accordion component on the Services page FAQ section; keyboard-accessible with `Enter` and `Space` support
- `js/main.js` — scroll-reveal fade-in animation on the Home page using the `IntersectionObserver` API; falls back gracefully on unsupported browsers
- FAQ accordion section added to `services.html` with five common questions and answers
- Contact form added to `contact.html` with full validation (name, email, optional phone, message type, message)
- `robots.txt` — allows all crawlers, references the sitemap
- `sitemap.xml` — lists all five pages with `lastmod`, `changefreq`, and `priority`
- SEO `<meta name="description">` and `<meta name="keywords">` tags added to all five pages
- `.error` CSS class for inline validation error messages
- `.success-msg` CSS class for success feedback after form submission
- `.form-response` block with a table showing the estimated cost and availability (enquiry page)
- Full accordion CSS: `.accordion`, `.accordion-header`, `.accordion-body`, `.accordion-icon` with smooth `max-height` transition
- `.fade-in` and `.fade-in.visible` CSS for scroll-reveal animations
- Address and operating hours added to the contact info cards

### Changed
- `enquiry.html` — form action changed from `#` to JavaScript handler; `id="enquiryForm"` added; error `<span>` elements added after each input; submit button text updated to "Get My Estimate"
- `contact.html` — added phone number card and hours card to the contact details grid; added full contact form with mailto functionality
- `services.html` — FAQ accordion section added below the existing services grid
- `index.html` — `fade-in` class added to hero and intro sections; `js/main.js` linked
- `about.html` — SEO meta tags added
- `README.md` — Phase 4 status updated to "Complete"; Part 3 documentation section added

### Fixed
- `contact.html` — resolved leftover Git merge conflict markers from Part 2 development
- Phone validation uses South African number format (`0xx xxx xxxx` or `+27xx xxx xxxx`)

---

## [2.0.0] — 2026-05-28 — Part 2: CSS Styling and Responsiveness

### Added
- `css/styles.css` — full external stylesheet linked to all five pages
- CSS custom properties (`:root` variables) for the colour palette and spacing
- CSS reset (`box-sizing: border-box`, zeroed margins/padding)
- Base typography styles: `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing` using `rem` units
- Flexbox layout for header and navigation bar
- CSS Grid layout for services cards (2-column), history timeline (2-column), and contact cards (2-column)
- Visual styles: `background-color`, `border`, `border-radius`, `box-shadow` on cards and sections
- Pseudo-class styles: `:hover`, `:focus`, `:active` on navigation links, CTA buttons, and form fields
- CSS media queries for three breakpoints: tablet (`max-width: 1024px`), mobile (`max-width: 768px`), small mobile (`max-width: 480px`)
- Relative units (`rem`, `em`, `%`) throughout for font sizes, spacing, and widths
- Responsive hero banner image with `srcset` and `sizes` attributes on all pages
- `object-fit: cover` for graceful image cropping at all viewport widths
- Consistent footer added to all pages (`services.html`, `contact.html`, `enquiry.html` were missing one)
- Placeholder text added to enquiry form inputs for better UX

### Changed
- All HTML pages refactored: linked to `css/styles.css`
- Navigation rebuilt — removed invalid `<button>` wrappers around `<li>` elements; styled via CSS instead
- `about.html` — fixed unclosed `<h1>` tag and invalid `<bgcolor>` attribute in `<head>`; history section restructured into a proper grid layout
- `index.html` — removed invalid `<color="blue">` tag; cleaned up duplicate anchor tags in navigation
- All inline `width`/`height` attributes removed from images and iframes in favour of CSS
- iframes wrapped in `.map-container` div and made fully responsive via CSS
- Services section changed from `<ul>/<li>` to semantic `<div class="service-card">` for correct grid styling
- Page `<title>` tags updated to include the site name (e.g., "About Us | Solar Solutions")

### Fixed
- Invalid HTML: `<button>` elements cannot be parents of `<li>` elements — corrected on all pages
- Invalid `<color>` tag in `index.html`
- Unclosed `<h1>` containing an iframe in `about.html`
- Duplicate `<a>` tags within each navigation item
- Missing `</h1>` and `</html>` closing tags in `about.html`

---

## [1.0.0] — 2026-04-19 — Part 1: HTML Structure

### Added
- Five-page HTML website: `index.html`, `about.html`, `services.html`, `enquiry.html`, `contact.html`
- Semantic HTML structure with `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Navigation bar linking all pages
- Company history content on About page
- Services listing on Services page
- Enquiry form with name, email, interest selector, and message fields
- Contact details and Google Maps embed
- Sitemap image (`img/SITEMAP.png`)
- `README.md` with project overview, goals, timeline, and references
- `CHANGELOG.md` for version tracking

---

## Semantic Versioning Reference

Format: `MAJOR.MINOR.PATCH`

| Increment | Meaning | Example |
|-----------|---------|---------|
| MAJOR | Breaking changes | `1.0.0 → 2.0.0` |
| MINOR | New features | `1.0.0 → 1.1.0` |
| PATCH | Bug fixes / small improvements | `1.0.0 → 1.0.1` |
