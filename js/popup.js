// POPUP AUTO OPEN — only if not already seen
// if (!localStorage.getItem('vaagn_popup_seen')) {
//   setTimeout(() => openPopup('General'), 10000);
// }
// POPUP AUTO OPEN — every 10 seconds while popup is not currently visible
setInterval(() => {
  const overlay = document.getElementById('popup-overlay');
  if (overlay && !overlay.classList.contains('active')) {
    openPopup('General');
  }
}, 10000);
function openPopup(v) {
  document.getElementById('p-vehicle').value = v;
  document.getElementById('popup-sub').textContent = v !== 'General' 
    ? 'Enquiring about ' + v + '. Our team calls back within 24h.' 
    : 'Our team will call you back within 24 hours.';
  document.getElementById('popup-overlay').classList.add('active');
}

function closePopup() {
  document.getElementById('popup-overlay').classList.remove('active');
  localStorage.setItem('vaagn_popup_seen', '1');
}

document.getElementById('popup-overlay').addEventListener('click', e => { 
  if(e.target === e.currentTarget) closePopup(); 
});

async function submitPopup() {
  const name = document.getElementById('p-name').value.trim();
  const phone = document.getElementById('p-phone').value.trim();
  const city = document.getElementById('p-city').value.trim();
  const vehicle = document.getElementById('p-vehicle').value;
  if(!name || phone.length < 10) { alert('Please enter name and 10-digit phone.'); return; }
  
  const btn = document.querySelector('.p-submit');
  btn.textContent = 'Submitting…';
  btn.disabled = true;
  const p = new URLSearchParams({ 
    name, phone: '+91' + phone, city, vehicle, 
   source: document.referrer ? new URL(document.referrer).hostname : 'Direct',
    timestamp: new Date().toISOString() 
  });
  
  try { 
    await fetch('https://script.google.com/macros/s/AKfycbwzxRKP8thz4Rjj1cEckPWc2HyWR4qw_3HfaxkHNF31IVHrbPonCHZpVhTYWqpctmgm/exec?' + p.toString()); 
  } catch(e) {}
  
  btn.textContent = '✓ Sent!';
  localStorage.setItem('vaagn_popup_seen', '1');
  setTimeout(() => {
    closePopup();
    btn.textContent = 'Request Callback →';
    btn.disabled = false;
    ['p-name', 'p-phone', 'p-city'].forEach(id => document.getElementById(id).value = '');
  }, 1800);
}