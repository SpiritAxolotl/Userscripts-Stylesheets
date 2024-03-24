//written for this video: https://youtu.be/D4lLHCyYqzQ
function clamp(x, min, max) {
  return Math.min(Math.max(x, min), max);
}
const audio = document.querySelector(`audio[src="/assets/skrillex.mp3"]`);
const startAt = 3.14;
const endAt = 236.79;
function audioScroll() {
  if (audio.paused || audio.currentTime === 0 || audio.currentTime === audio.duration) return;
  const p = clamp((audio.currentTime-startAt)/(audio.duration-startAt-(audio.duration-endAt)), 0, 1);
  const windowHeight = document.documentElement.scrollHeight-window.innerHeight;
  const scrollAmount = p*windowHeight;
  window.scrollTo(0, scrollAmount);
}
audio.addEventListener("click", setInterval(audioScroll, 1));