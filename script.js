// Toggle dark/light mode
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('change', () => {
  if (modeToggle.checked) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
  }
});

// Set default mode based on user's preference
window.addEventListener('DOMContentLoaded', () => {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    body.classList.add('dark-mode');
    modeToggle.checked = true;
  } else {
    body.classList.add('light-mode');
  }
});
