// assets/js/modules/flipcards.js
export function initFlipCards({ feedbackRegionId = 'quiz-feedback' } = {}) {
  const region = document.getElementById(feedbackRegionId); // optional global ARIA-live
  document.querySelectorAll('.mc').forEach(group => {
    group.addEventListener('change', e => {
      const input = e.target;
      if (!input || (input.type !== 'radio' && input.type !== 'checkbox')) return;

      // clear previous flips in the group (radio UX)
      group.querySelectorAll('label.flip').forEach(l => l.classList.remove('is-flipped','is-selected'));

      const label = input.closest('label.flip');
      if (!label) return;

      label.classList.add('is-selected','is-flipped');

      // optional live feedback
      const ok = label.dataset.correct === 'true';
      const msg = ok ? 'Correct.' : (label.dataset.feedback || 'Not quite — review the step.');
      if (region) region.textContent = msg;

      window.track?.('mc_select', { name: input.name, value: input.value, ok });
    });
  });
}
