export function initProgress() { updateProgressFromScroll(); }
export function updateProgressFromScroll() {
    const main = document.getElementById('main');
    if (!main) return;
    const rect = main.getBoundingClientRect();
    const total = main.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY - main.offsetTop;
    const pct = Math.min(100, Math.max(0, Math.round((scrolled / total) * 100)));
    const bar = document.querySelector('.progress__bar');
    if (bar) { bar.style.width = pct + '%'; }
    const container = document.querySelector('.progress');
    if (container) { container.setAttribute('aria-valuenow', String(pct)); }
    try { localStorage.setItem('progress', JSON.stringify(pct)); } catch { }
}