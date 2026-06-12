// Reset scroll
if(window.location.hash) {

    const target = document.querySelector(window.location.hash);

    if(target){
        setTimeout(() => {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 200);
    }

} else {
    window.scrollTo(0, 0);
}

// Fade up
const obs = new IntersectionObserver(entries => entries.forEach(e => {
  if(e.isIntersecting) e.target.classList.add('visible');
}), { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));