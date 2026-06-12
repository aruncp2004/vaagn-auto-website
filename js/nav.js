// Mega menu hover
const vehiclesLi = document.querySelector('.nav-links>li');
vehiclesLi.addEventListener('mouseenter', () => vehiclesLi.classList.add('active'));
vehiclesLi.addEventListener('mouseleave', () => vehiclesLi.classList.remove('active'));

// NAV SCROLL
const nav = document.querySelector('nav');
nav.classList.add('show');
window.addEventListener('scroll', () => {
  if(window.scrollY > 50) { nav.classList.add('show'); }
  else { nav.classList.remove('show'); }
  vehiclesLi.classList.remove('active');
}, { passive: true });

// DRAG TO SCROLL mega vehicles
const megaVehicles = document.querySelector('.mega-vehicles');
if(megaVehicles) {
  let isDown = false, startX, scrollLeft;
  megaVehicles.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX - megaVehicles.offsetLeft;
    scrollLeft = megaVehicles.scrollLeft;
  });
  megaVehicles.addEventListener('mouseleave', () => isDown = false);
  megaVehicles.addEventListener('mouseup', () => isDown = false);
  megaVehicles.addEventListener('mousemove', e => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - megaVehicles.offsetLeft;
    megaVehicles.scrollLeft = scrollLeft - (x - startX) * 2;
  });
}

// MEGA DRAWER
const hamburger = document.getElementById('nav-hamburger');
const megaDrawer = document.getElementById('mega-drawer');
const megaOverlay = document.getElementById('mega-overlay');
const megaClose = document.getElementById('mega-close');

function closeDrawer() {
  hamburger.classList.remove('open');
  megaDrawer.classList.remove('open');
  megaOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function openDrawerTo(section) {
  hamburger.classList.add('open');
  megaDrawer.classList.add('open');
  megaOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    const target = document.getElementById('drawer-' + section);
    if(target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.style.color = 'var(--blue)';
      setTimeout(() => target.style.color = '', 1500);
    }
  }, 300);
}

hamburger.addEventListener('click', () => {
  megaDrawer.classList.contains('open') ? closeDrawer() : (() => {
    hamburger.classList.add('open');
    megaDrawer.classList.add('open');
    megaOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  })();
});

megaClose.addEventListener('click', closeDrawer);
megaOverlay.addEventListener('click', closeDrawer);