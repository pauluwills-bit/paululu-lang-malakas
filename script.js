const envelope = document.querySelector("#envelope");
const openButton = document.querySelector("#open");
const closeButton = document.querySelector("#reset");

function openLetter() {
  envelope.classList.add("open");
  envelope.classList.remove("close");
}

function closeLetter() {
  envelope.classList.add("close");
  envelope.classList.remove("open");
}

function toggleLetter() {
  envelope.classList.toggle("open");
  envelope.classList.toggle("close");
}

openButton.addEventListener("click", openLetter);
closeButton.addEventListener("click", closeLetter);
envelope.addEventListener("click", toggleLetter);
envelope.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleLetter();
  }
});
