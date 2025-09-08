export function initQuiz({ formId, feedbackId, correct }) {
    const form = document.getElementById(formId);
    const fb = document.getElementById(feedbackId);
    if (!form || !fb) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        const data = new FormData(form);
        const ans = data.get('q1');
        if (!ans) { fb.innerHTML = '<div class="alert alert-info mb-0" role="status">Choose an option.</div>'; return; }
        const ok = String(ans) === String(correct);
        fb.innerHTML = ok
            ? '<div class="alert alert-success mb-0" role="status">Correct.</div>'
            : '<div class="alert alert-warning mb-0" role="status">Not quite — review the steps above.</div>';
        window.track?.('quiz_submit', { ok });
    });
}