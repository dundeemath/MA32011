document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll("details.quarto-details")
    .forEach((el) => {
      if (el.querySelector(".shinylive-container")) {
        el.setAttribute("open", "true");
        const summary = el.querySelector("summary");
        if (summary) summary.style.display = "none";
      }
    });
});
