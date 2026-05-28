# CHANGELOG

All notable changes to this project will be documented in this file.

This project follows [Semantic Versioning](https://semver.org/).

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
