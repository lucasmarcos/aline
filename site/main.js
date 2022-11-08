const colapso = document.getElementById("colapso");
const colapsar = document.getElementById("colapsar");

let show = true;
const toggle = () => {
  if (show) {
    colapsar.style.display = "none";
  } else {
    colapsar.style.display = "";
  }
  show = !show;
};
toggle();

colapso.addEventListener("click", toggle);
