// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p7");
const paper8 = document.querySelector("#p8");
const paper9 = document.querySelector("#p9");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 8;
let maxLocation = numOfPapers + 1;

function openBook() {}

function closeBook(isAtBeginning) {
  if (isAtBeginning) {
    book.style.transform = "translateX(0%)";
  } else {
  }

  prevBtn.style.transform = "translateX(0px)";
  nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
  if (currentLocation < maxLocation) {
    switch (currentLocation) {
      case 1:
        openBook();
        paper1.classList.add("flipped");
        //paper1.style.zIndex = 1;
        break;
      case 2:
        paper2.classList.add("flipped");
        //paper2.style.zIndex = 2;
        break;
      case 3:
        paper3.classList.add("flipped");
        // paper3.style.zIndex = 3;
        break;
      case 4:
        paper4.classList.add("flipped");
        //paper4.style.zIndex = 4;
        break;
      case 5:
        paper5.classList.add("flipped");
        //paper5.style.zIndex = 5;
        break;
      case 6:
        paper6.classList.add("flipped");
        //paper6.style.zIndex = 6;
        break;
      case 7:
        paper7.classList.add("flipped");
        //paper7.style.zIndex = 7;
        break;
      case 8:
        paper8.classList.add("flipped");
        //paper8.style.zIndex = 8;
        break;
      case 9:
        paper9.classList.add("flipped");
        //paper8.style.zIndex = 8;
        closeBook(false);
        break;
      default:
        throw new Error("unkown state");
    }
    currentLocation++;
  }
}

function goPrevPage() {
  if (currentLocation > 1) {
    switch (currentLocation) {
      case 2:
        closeBook(true);
        paper1.classList.remove("flipped");
        paper1.style.zIndex = 9;
        break;
      case 3:
        closeBook(true);
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 8;
        break;
      case 4:
        closeBook(true);
        paper3.classList.remove("flipped");
        paper3.style.zIndex = 7;
        break;
      case 5:
        closeBook(true);
        paper4.classList.remove("flipped");
        paper4.style.zIndex = 6;
        break;
      case 6:
        closeBook(true);
        paper5.classList.remove("flipped");
        paper5.style.zIndex = 5;
        break;
      case 7:
        paper6.classList.remove("flipped");
        paper6.style.zIndex = 4;
        break;
      case 8:
        openBook();
        paper7.classList.remove("flipped");
        paper7.style.zIndex = 3;
        break;
      case 9:
        openBook();
        paper8.classList.remove("flipped");
        paper8.style.zIndex = 2;
        break;
      case 10:
        openBook();
        paper9.classList.remove("flipped");
        paper9.style.zIndex = 1;
        break;
      default:
        throw new Error("unkown state");
    }

    currentLocation--;
  }
}

function hearts() {
  const container = document.querySelector(".container");
  const creat = document.createElement("div");

  creat.classList.add("hearts");
  creat.innerHTML = "&#128150";
  container.appendChild(creat);

  creat.style.left = Math.random() * 100 + "vw";
  setTimeout(() => {
    creat.remove();
  }, 3000);
}

setInterval(hearts, 100);

document.addEventListener("click", musicPlay);
function musicPlay() {
  document.getElementById("mus").play();
  document.removeEventListener("click", musicPlay);
}
