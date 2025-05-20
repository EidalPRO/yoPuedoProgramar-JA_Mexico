
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-container");
  if (loader) {
    loader.classList.add("hide");
    setTimeout(() => {
      loader.remove();
      document.body.classList.remove("loading");
    }, 500);
  }
});


document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loading");
});

document.addEventListener("DOMContentLoaded", () => {
  AOS.init();

  // Regresar arriba boton
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
