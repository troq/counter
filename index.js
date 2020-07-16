function setDom() {
  let record = parseInt(localStorage.getItem('record') || 0, 10);
  let start = parseInt(localStorage.getItem('start') || Date.now(), 10);
  let delta = Date.now() - start;
  let hours = Math.floor(delta / (1000 * 60 * 60));
  let minutes = Math.floor((delta - hours * 1000 * 60 * 60) / (1000 * 60));

  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('record').textContent = record;
};
setDom();
setInterval(setDom, 1000);

function reset() {
  let record = parseInt(localStorage.getItem('record') || 0, 10);
  let start = parseInt(localStorage.getItem('start') || Date.now(), 10);
  let delta = Date.now() - start;
  let hours = Math.floor(delta / (1000 * 60 * 60));

  localStorage.setItem('start', Date.now());
  if (hours > record) {
    localStorage.setItem('record', hours);
  }
  setDom();
}

document.getElementById('current').addEventListener('click', reset);
