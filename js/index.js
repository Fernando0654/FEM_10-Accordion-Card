const question_btn = document.getElementsByClassName("faq-btn");
const arrow = document.querySelectorAll("#arrow");
const title = document.querySelectorAll(".title");
const texto = document.getElementsByClassName("faq-response");
let howMany = 0;

for (let i = 0; i < question_btn.length; i++) {
  question_btn[i].addEventListener("click", () => {
    closeAll();
    openQuest(i);
  });
}

function openQuest(i) {
  arrow[i].style.transform = "rotateX(180deg)";
  title[i].style.fontWeight = "700";
  texto[i].style.maxHeight = "10em";
  texto[i].style.opacity = "1";
}

function closeAll() {
  for (let i = 0; i < question_btn.length; i++) {
    arrow[i].style.transform = "rotateX(0deg)";
    title[i].style.fontWeight = "500";
    texto[i].style.maxHeight = "0px";
    texto[i].style.opacity = "0";
  }
}

window.onload = function () {
  console.log("Reload the browser c: if you use the responsive tool");
  if (screen.width >= 800) {
    document.getElementById("illust").src =
      "./assets/img/illustration-woman-online-desktop.svg";
    document.getElementById("shadow").src =
      "./assets/img/bg-pattern-desktop.svg";
  } else {
    document.getElementById("illust").src =
      "./assets/img/illustration-woman-online-mobile.svg";
    document.getElementById("shadow").src =
      "./assets/img/bg-pattern-mobile.svg";
  }
};
