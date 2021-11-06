let buttons = document.querySelectorAll(".project .btn");
let modal = document.querySelector(".modal");
let modalImage = document.querySelector(".modal-inner img");
let closeBtn = document.querySelector(".close");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    modal.classList.add("open");
    let src =
      e.currentTarget.parentElement.parentElement.querySelector("img").src;
    modalImage.src = src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});
