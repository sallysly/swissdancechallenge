const video = document.querySelector('#cover');
const toggle = document.querySelector('#video-toggle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
toggle.hidden = false;
function updateVideoControl() {
  toggle.innerHTML = video.paused ? 'Lire la vidéo <span aria-hidden="true">▶</span>' : 'Mettre en pause <span aria-hidden="true">Ⅱ</span>';
  toggle.setAttribute('aria-label', video.paused ? 'Lire la vidéo de couverture' : 'Mettre la vidéo de couverture en pause');
}
toggle.addEventListener('click', () => {
  if (video.paused) video.play().catch(updateVideoControl);
  else video.pause();
});
video.addEventListener('play', updateVideoControl);
video.addEventListener('pause', updateVideoControl);
if (reducedMotion.matches) {
  video.autoplay = false;
  video.pause();
}
reducedMotion.addEventListener('change', event => {
  if (event.matches) video.pause();
});
updateVideoControl();

