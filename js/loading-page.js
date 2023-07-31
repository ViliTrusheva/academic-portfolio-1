window.addEventListener("load", loadingScreen);
const loadingText = "Hello world!";

function loadingScreen() {
  document.querySelector("#loading-screen-container").classList.remove("hidden");
  addLetter(1);
}
function addLetter(index) {
  if (index !== loadingText.length) {
    document.getElementById("hello-world").textContent = loadingText.slice(0, index) + "|";
    setTimeout(() => {
      addLetter(index + 1);
    }, 100);
  } else {
    document.getElementById("hello-world").textContent = loadingText.slice(0, index);
    setTimeout(() => {
      document.querySelector("#loading-screen-container").classList.add("hidden");
    }, 800);
  }

  // console.log(t)
}
