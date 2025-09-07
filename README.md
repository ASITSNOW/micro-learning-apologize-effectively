# How to Give a Good Apology — Micro-Learning (Skeleton)

## Purpose
Accessible single-page skeleton for rapid prototyping.

## Run
Open `index.html` in a browser (no build). Optional: local static server.

## Edit content
- Set `{{topic}}`, footer `{{year}} {{org}}` in `index.html`.
- Fill `#overview`, `#objectives` `<li>`, `#scenario`.
- Steps: edit `<details>` blocks under `#steps` (H4 subsections).
- Practice: set prompt/options in `#practice`.

## Quiz config
`assets/js/app.js` → `initQuiz({ ..., correct: 'B' })` (use A/B/C).

## Progress & storage
Scroll progress persisted via `localStorage` key `progress`.

## Analytics
Use `window.track(event, payload)` hook; replace with real integration.

## A11y/QA
Skip link, keyboard nav, aria-live feedback; Lighthouse a11y ≥ 90.

## File map
project-root/
  index.html
  README.md
  assets/
    css/
      styles.css
    js/
      app.js
      modules/
        a11y.js
        progress.js
        quiz.js
        storage.js
    img/
      placeholder.png
    media/
      placeholder.vtt
  LICENSE

## License
All rights reserved. No reuse without permission.
