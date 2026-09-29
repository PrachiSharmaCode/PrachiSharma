# AGENT.md

## Project overview
This repository is a personal portfolio built with React and Create React App. The app is a single-page portfolio with a dark theme, orange accent color, and multiple sections such as About, Skills, Projects, Timeline, and Contact.

The goal is to keep the site polished, modern, responsive, and visually consistent across desktop, laptop, tablet, and mobile breakpoints.

## Tech stack
- React 16
- Create React App
- Bootstrap (used selectively)
- Font Awesome icons
- Plain CSS modules/stylesheets in component folders

## Key project conventions
- Keep component structure simple: each section is usually one component with its own CSS file in the same folder.
- Prefer small, targeted styling changes over broad rewrites.
- Maintain the existing visual language: dark background, white text, orange accent highlights, minimal but sharp UI card treatments.
- Responsive design is important. Always check layouts at common widths: wide desktop, laptop, tablet, and mobile.
- Reuse existing patterns such as `.div-heading`, card styling, and spacing conventions before introducing new ones.

## File layout
- `src/App.js` — main page composition and section wiring
- `src/index.css` — global styles and shared variables
- `src/components/*` — feature sections and their CSS files
- `src/images/*` — local image assets
- `public/` — static HTML/public assets

## Editing guidelines
- Always mention what changes are made and what are was the reasoning behind the changes. In your explanation add section "Update and Reasoning" and in that write points about what is changed and why the change was made. 
- When updating a section, edit its component and matching CSS together.
- Keep naming consistent with existing classes and patterns in that component.
- Prefer CSS variables from `src/index.css` for theme values.
- Avoid introducing heavy libraries or frameworks unless explicitly requested.
- Preserve accessibility and semantic HTML.
- Do not remove working functionality just to simplify code; prefer incremental, minimal updates.

## Design guidance
- Keep the portfolio premium and clean rather than overly busy.
- The main heading style should stay consistent across sections.
- Section content should align to a shared max width with consistent side spacing.
- Use subtle shadows, border radius, and hover effects carefully to keep the interface modern and clean.
- For skills, categories should remain readable and structured, with headings left-aligned or centered as needed while preserving responsive behavior.

## Responsive design expectations
- Large desktop: generous spacing, balanced section widths
- Laptop: slightly tighter content widths to avoid feeling stretched
- Tablet: maintain readable cards and stacked layouts where needed
- Mobile: prioritize legibility, compact spacing, and safe wrapping

## Build and validation
Use the standard project commands:

- `npm install`
- `npm start` — run local dev server
- `npm run build` — production build verification

Before claiming a fix or UI change is complete, verify the relevant behavior with a build or a runtime check if possible.

## Preferred workflow for future edits
1. Read the target component and its CSS together.
2. Match the existing style conventions before changing design.
3. Make the smallest possible change that addresses the request.
4. Keep responsiveness in mind for all screen sizes.
5. Verify the result with a focused build or browser check when practical.

## Important reminders
- This is a portfolio, not a product dashboard. Typography, spacing, and consistency matter more than heavy visual complexity.
- Keep the site personal, polished, and professional.
- Do not overengineer or add unnecessary abstractions.
- Preserve current functionality while refining the presentation.
