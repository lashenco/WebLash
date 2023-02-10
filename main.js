let mode = document.querySelector(".light");
let icon = document.querySelector("#light");

mode.onclick = function () {
  return chMode();
};

function chMode() {
  mode.classList == "light"
    ? (mode.classList = "dark")
    : (mode.classList = "light");

  icon.classList == "fa-solid fa-moon"
    ? (icon.classList = "fa-solid fa-sun")
    : (icon.classList = "fa-solid fa-moon");

  let body = document.body;
  mode.classList.contains("light")
    ? body.setAttribute("data-theme", "light")
    : body.setAttribute("data-theme", "dark");
}
