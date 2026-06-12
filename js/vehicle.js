const SHEET_URL = 'https://script.google.com/macros/s/AKfycbwzxRKP8thz4Rjj1cEckPWc2HyWR4qw_3HfaxkHNF31IVHrbPonCHZpVhTYWqpctmgm/exec';

function sendToSheet(data) {
  const params = new URLSearchParams(data).toString();
  fetch(SHEET_URL + '?' + params, { method: 'GET', mode: 'no-cors' }).catch(() => {});
}

function submitForm(e) {
  e.preventDefault();
  const inputs = e.target.querySelectorAll('input');
  const selects = e.target.querySelectorAll('select');
  const name = inputs[0].value.trim();
  const phone = inputs[1].value.trim();
  const vehicle = selects[0] ? selects[0].value : document.title.split('—')[0].trim();
  const city = inputs[2] ? inputs[2].value.trim() : '';
  const source = document.title.split('—')[0].trim() + ' Landing';
  sendToSheet({ name, phone, city, vehicle, source, timestamp: new Date().toISOString() });
  const msg = 'Hi Vaagn Auto!%0A%0AInterested in: *' + vehicle + '*%0AName: ' + name + '%0APhone: ' + phone + '%0ACity: ' + city;
  window.open('https://wa.me/919600809197?text=' + msg, '_blank');
  e.target.innerHTML = '<div style="text-align:center;padding:28px;color:#fff;"><div style="font-size:2.5rem;margin-bottom:10px;">✅</div><div style="font-family:Space Grotesk,sans-serif;font-size:1.1rem;font-weight:600;margin-bottom:6px;">Submitted Successfully!</div><div style="font-size:.8rem;opacity:.5;">Our team will call you within 30 minutes.</div></div>';
}