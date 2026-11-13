const emailCodes = [
  107, 97, 105, 120, 105, 97, 110, 103, 121, 97, 111, 55, 55, 64, 103, 109, 97, 105,
  108, 46, 99, 111, 109,
];

const emailAddress = String.fromCharCode(...emailCodes);

const cvPathCodes = [
  97, 115, 115, 101, 116, 115, 47, 107, 121, 45, 100, 111, 99, 117, 109, 101, 110, 116, 45,
  50, 48, 50, 54, 46, 112, 100, 102,
];
const cvPath = String.fromCharCode(...cvPathCodes);

document.querySelectorAll("[data-email]").forEach((link) => {
  link.addEventListener("click", () => {
    window.location.href = `mailto:${emailAddress}`;
  });
});

document.querySelectorAll("[data-cv]").forEach((link) => {
  link.addEventListener("click", () => {
    window.open(cvPath, "_blank", "noopener,noreferrer");
  });
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const preview = document.querySelector("#ropeformer-preview");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let previewVisible = false;

function syncPreview() {
  if (previewVisible && !reducedMotion.matches && !document.hidden) {
    preview.play().catch(() => {});
  } else {
    preview.pause();
  }
}

new IntersectionObserver(([entry]) => {
  previewVisible = entry.isIntersecting;
  syncPreview();
}, { threshold: 0.15 }).observe(preview);
document.addEventListener("visibilitychange", syncPreview);
reducedMotion.addEventListener("change", syncPreview);
