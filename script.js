const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
const hoverTargets = document.querySelectorAll('a, button, .project-card, .stat-card, .tag');

document.addEventListener('mousemove', (event) => {
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;

  window.clearTimeout(window.__cursorRingDelay);
  window.__cursorRingDelay = window.setTimeout(() => {
    ring.style.left = `${event.clientX}px`;
    ring.style.top = `${event.clientY}px`;
  }, 60);
});

hoverTargets.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(2)';
    ring.style.transform = 'translate(-50%,-50%) scale(1.5)';
  });

  element.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    ring.style.transform = 'translate(-50%,-50%) scale(1)';
  });
});

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.add('visible');

    entry.target.querySelectorAll('.skill-fill').forEach((bar) => {
      bar.style.width = `${bar.dataset.width}%`;
    });
  });
}, { threshold: 0.15 });

reveals.forEach((element) => observer.observe(element));

const sendButton = document.getElementById('sendMessageBtn');

function sendMessage() {
  const name = document.getElementById('fname').value.trim();
  const email = document.getElementById('femail').value.trim();
  const message = document.getElementById('fmessage').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all required fields.');
    return;
  }

  document.getElementById('successMsg').style.display = 'block';
  document.getElementById('fname').value = '';
  document.getElementById('femail').value = '';
  document.getElementById('fsubject').value = '';
  document.getElementById('fmessage').value = '';
}

sendButton.addEventListener('click', sendMessage);