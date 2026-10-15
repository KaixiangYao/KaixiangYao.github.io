const emailCodes = [
  49, 50, 51, 49, 51, 52, 51, 51, 64, 109, 97, 105, 108, 46, 115, 117, 115, 116, 101, 99,
  104, 46, 101, 100, 117, 46, 99, 110,
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
const dialog = document.querySelector(".media-dialog");
const fullImage = dialog.querySelector("[data-full-image]");
const originalLink = dialog.querySelector("[data-media-original]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let previewVisible = false;

function syncPreview() {
  if (previewVisible && !reducedMotion.matches && !document.hidden && !dialog.open) {
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

document.querySelectorAll("[data-image-expand]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    fullImage.hidden = false;
    fullImage.src = link.href;
    fullImage.alt = link.querySelector("img").alt;
    originalLink.href = link.href;
    dialog.showModal();
    syncPreview();
  });
});
dialog.querySelector("[data-media-close]").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right ||
      event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener("close", syncPreview);
