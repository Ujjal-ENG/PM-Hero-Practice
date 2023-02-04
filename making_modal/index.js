const modal = document.querySelector(".show-modal");

const btnCloseModal = document.querySelector("#close-modal");

const btns = document.querySelectorAll(".btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    modal.classList.remove("hidden");
  });
}

btnCloseModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});
