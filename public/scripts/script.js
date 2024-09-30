const carousel = document.querySelector(".carousel");
console.log(carousel);

function smoothScroll(target, duration) {
  const targetPosition =
    target.getBoundingClientRect().top + window.scrollY - 150;
  const startPosition = window.scrollY;
  const startTime = performance.now();

  function animation(currentTime) {
    const timeElapsed = currentTime - startTime;
    const run = ease(
      timeElapsed,
      startPosition,
      targetPosition - startPosition,
      duration
    );
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    smoothScroll(target, 1000);
  });
});
