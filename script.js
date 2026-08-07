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

document.querySelectorAll('form[data-recipient]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const details = [...new FormData(form).entries()]
      .map(([name, value]) => `${name} : ${value}`)
      .join('\n');
    const subject = form.dataset.subject || 'Demande envoyée depuis le site web';
    window.location.href = `mailto:${form.dataset.recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(details)}`;
  });
});
