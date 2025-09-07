import { initA11y } from './modules/a11y.js';
import { initProgress, updateProgressFromScroll } from './modules/progress.js';
import { initQuiz } from './modules/quiz.js';
import { storage } from './modules/storage.js';


window.track = function track(event, payload = {}) {
    // Hook for analytics. Replace with real integration later.
    // Example: console.log('track', event, payload)
};


function init() {
    initA11y();
    initProgress();
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