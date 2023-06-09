function toggleMode() {
  const body = document.querySelector("body");
  body.classList.toggle("light");

  const img = document.querySelector("#profile img");
  if (body.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
  }
}
