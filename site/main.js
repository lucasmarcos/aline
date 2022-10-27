const colapso_1 = document.getElementById("colapso_1");
const colapso_2 = document.getElementById("colapso_2");

const colapsar_1 = document.getElementById("colapsar_1");
const colapsar_2 = document.getElementById("colapsar_2");

let show = true;
const toggle = () => {
  if (show) {
    colapsar_1.style.display = "none";
    colapsar_2.style.display = "none";
  } else {
    colapsar_1.style.display = "";
    colapsar_2.style.display = "";
  }
  show = !show;
};
toggle();

colapso_1.addEventListener("click", toggle);
colapso_2.addEventListener("click", toggle);
