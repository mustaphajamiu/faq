document.addEventListener("DOMContentLoaded", () => {
  const faqHeaders = document.querySelectorAll(".faq-header");

  faqHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const faqItem = header.parentElement;

      // Toggle expanded state
      faqItem.classList.toggle("expanded");
    });
  });
});
