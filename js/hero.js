let cur = 0;
const slides = document.querySelectorAll('.hero-slide');
const sdots = document.querySelectorAll('.s-dot');
const counter = document.getElementById('slide-counter');

function goSlide(n) {
  slides[cur].classList.remove('active');
  sdots[cur].classList.remove('active');
  cur = (n + slides.length) % slides.length;
  slides[cur].classList.add('active');
  sdots[cur].classList.add('active');
  if(counter) counter.textContent = String(cur+1).padStart(2,'0') + ' / ' + String(slides.length).padStart(2,'0');
}
function nextSlide() { goSlide(cur + 1); }
function prevSlide() { goSlide(cur - 1); }

let autoT = setInterval(nextSlide, 5000);
const hw = document.getElementById('hero-wrap');
if(hw) {
  hw.addEventListener('mouseenter', () => clearInterval(autoT));
  hw.addEventListener('mouseleave', () => { autoT = setInterval(nextSlide, 5000); });
}

function switchImg(idx, src, dot) {
  const img = document.getElementById('hero-img-' + idx);
  if(img) {
    img.style.opacity = '0';
    setTimeout(() => { img.src = src; img.style.opacity = '1'; }, 200);
  }
  dot.parentElement.querySelectorAll('.c-dot').forEach(d => d.classList.remove('active'));
  dot.classList.add('active');
}