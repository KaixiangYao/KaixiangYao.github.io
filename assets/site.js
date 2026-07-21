const emailCodes = [
  49, 50, 51, 49, 51, 52, 51, 51, 64, 109, 97, 105, 108, 46, 115, 117, 115, 116, 101, 99,
  104, 46, 101, 100, 117, 46, 99, 110,
];

const emailAddress = String.fromCharCode(...emailCodes);

document.querySelectorAll("[data-email]").forEach((link) => {
  link.addEventListener("click", () => {
    window.location.href = `mailto:${emailAddress}`;
  });
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
