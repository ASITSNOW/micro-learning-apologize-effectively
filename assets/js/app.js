import { initA11y } from './modules/a11y.js';
import { initProgress, updateProgressFromScroll } from './modules/progress.js';
import { initQuiz } from './modules/quiz.js';
import { storage } from './modules/storage.js';
import { initFlipCards } from './modules/flipcards.js';


window.track = function track(event, payload = {}) {
    // Hook for analytics. Replace with real integration later.
    // Example: console.log('track', event, payload)
};


function init() {
    initA11y();
    initProgress();
    initFlipCards({ feedbackRegionId: 'quiz-feedback' });
    initQuiz({ formId: 'quiz', feedbackId: 'quiz-feedback', correct: 'B' });
    updateProgressFromScroll();
    document.addEventListener('scroll', updateProgressFromScroll, { passive: true });
    track('module_loaded', { topic: document.title });
}


// Restore progress on load
document.addEventListener('DOMContentLoaded', () => {
    const saved = storage.get('progress') || 0;
    const bar = document.querySelector('.progress__bar');
    if (bar) bar.style.width = `${saved}%`;
    init();
});

// Keep TOC visible on desktop; allow dropdown on mobile
(() => {
  const d = document.querySelector('.toc-collapser');
  if (!d) return;

  const mq = window.matchMedia('(min-width: 900px)');
  const sync = e => {
    if (e.matches && !d.open) d.open = true;   // desktop => force open
    // mobile: leave user's state alone
  };
  mq.addEventListener ? mq.addEventListener('change', sync) : mq.addListener(sync);
  sync(mq); // run once on load
})();
