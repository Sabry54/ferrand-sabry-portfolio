let style;

export function initHolographicEffect() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", handleLeave);
    card.addEventListener("touchmove", handleMove);
    card.addEventListener("touchend", handleLeave);
  });
}

function handleMove(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = (y - centerY) / 10;
  const rotateY = (centerX - x) / 10;

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  const glareX = (x / rect.width) * 100;
  const glareY = (y / rect.height) * 100;

  card.style.setProperty("--glare-x", `${glareX}%`);
  card.style.setProperty("--glare-y", `${glareY}%`);
}

function handleLeave(e) {
  const card = e.currentTarget;
  card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  card.style.setProperty("--glare-x", "50%");
  card.style.setProperty("--glare-y", "50%");

  setTimeout(() => {
    card.classList.add("animated");
  }, 100);
}
