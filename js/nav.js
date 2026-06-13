const nav = document.getElementById('site-nav');
const hamburger = document.getElementById('nav-hamburger');
const drawer = document.getElementById('nav-drawer');
const overlay = document.getElementById('nav-overlay');
const drawerClose = document.getElementById('nav-drawer-close');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

function closeDrawer() {
  hamburger.classList.remove('open');
  drawer.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function openDrawerTo() { closeDrawer(); }

hamburger.addEventListener('click', () => {
  const isOpen = drawer.classList.contains('open');
  if (isOpen) {
    closeDrawer();
  } else {
    hamburger.classList.add('open');
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
});

drawerClose.addEventListener('click', closeDrawer);
overlay.addEventListener('click', closeDrawer);
