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
