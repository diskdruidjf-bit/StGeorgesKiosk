const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
  });
}

document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => {
  links?.classList.remove('is-open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
