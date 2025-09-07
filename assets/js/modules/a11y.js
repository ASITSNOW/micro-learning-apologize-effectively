export function initA11y() {
    // Ensure external links announce new context
    document.querySelectorAll('a[rel~="external"]').forEach(a => {
        a.setAttribute('target', '_blank');
        if (!a.getAttribute('aria-label')) {
            a.setAttribute('aria-label', `${a.textContent} (opens in new tab)`);
        }
    });
}