export function initQuiz({ formId, feedbackId, correct }) {
    const form = document.getElementById(formId);
    const fb = document.getElementById(feedbackId);
    if (!form || !fb) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        const data = new FormData(form);
        const ans = data.get('q1');
        if (!ans) { fb.textContent = 'Choose an option.'; return; }
        const ok = String(ans) === String(correct);
        fb.textContent = ok ? 'Correct.' : 'Not quite — review the steps above.';
        window.track?.('quiz_submit', { ok });
    });
}