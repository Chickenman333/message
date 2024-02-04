const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
let noBtnFirstHover = true;

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yipee!";
  
  const gifWidth = gif.offsetWidth;
  const gifHeight = gif.offsetHeight;

  gif.src = "https://i.pinimg.com/originals/91/bb/e5/91bbe5c5c9d32d755661e2cde47107e5.gif";

  gif.onload = () => {
    gif.style.width = gifWidth + 'px';
    gif.style.height = gifHeight + 'px';
  };
  
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  if (noBtnFirstHover) {
    gif.src = "https://i.pinimg.com/originals/9d/19/15/9d19152c47c6fddac22b0457e73bedd6.gif";
    noBtnFirstHover = false; // Prevent GIF from changing again after the first hover
  }

  noBtn.style.position = 'absolute'; // Ensure button is positioned absolutely
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
