US‑1 — Information Architecture & Skeleton

    Goal Design the information architecture (IA) and deliver a working HTML/CSS/JS skeleton for the micro‑learning module. Topic is parameterized ({{topic}}); examples will reference How to Give a Good Apology.

User Story

    As an instructional designer, I want a clear IA and code skeleton so that I can prototype micro‑learning modules quickly with accessible, consistent structure.

Definition of Ready (DoR)

    Learning objective(s) drafted and approved (Bloom level noted).

    Audience and constraints captured (time to complete, device mix, LMS/LRS usage).

    Topic chosen or placeholder {{topic}} accepted.

    Brand/visual constraints available (or default theme allowed).

Acceptance Criteria (AC)

    IA Outline includes: Overview, Objectives, Scenario, Steps (3–7), Practice (1–3 checks), Summary, Resources, Feedback, Credits.

    Single‑page layout with jump‑to navigation and visible progress indicator.

    A11y/508: semantic landmarks, skip link, keyboard‑only navigation, focus styles, aria‑live feedback for practice, alt‑text placeholders, heading order valid (H1→H2→H3), contrast ≥ WCAG AA (variables provided), no keyboard traps.

    JS Enhancements (progressive): collapsible sections, localStorage‑backed progress, 1 practice interaction with instant feedback, and analytics hook function track(event, payload).

    Performance: core HTML/CSS/JS ≤ 250KB (unminified), no render‑blocking CSS/JS in <head> (except critical CSS), Lighthouse a11y score ≥ 90 (manual spot‑check allowed).

    Deliverables: IA document, wireframe (text or Figma link), index.html, assets/css/styles.css, assets/js/app.js + modules, README.

Definition of Done (DoD)

    All AC pass.

    Axe DevTools (or equivalent) reports no critical a11y issues on the skeleton.

    Keyboard walkthrough successful: Tab order logical; Enter/Space activate controls; Skip link works.

    README explains how to extend content and JS hooks.

IA Outline (for {{topic}})

    Overview — why & when to use this.

    Objectives — 2–3 measurable outcomes (e.g., Identify the 3 parts of an effective apology).

    Scenario — short narrative or problem statement.

    Steps — numbered, each with rationale and micro‑example.

    Practice — 1 quick check (radio/group) + feedback.

    Summary — key takeaways.

    Resources — links, downloadable job‑aid.

    Feedback — micro‑survey link.

    Credits — authoring info & license.