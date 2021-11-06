let overlay = document.querySelectorAll(".overlay");
let modal = document.querySelector(".modal");
let modalImage = document.querySelector(".modal-inner img");
let closeBtn = document.querySelector(".close");

overlay.forEach((el) => {
  el.addEventListener("click", (e) => {
    modal.classList.add("open");
    let src = e.currentTarget.parentElement.querySelector("img").src;
    modalImage.src = src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});
