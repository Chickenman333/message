const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yipee!";
  
  const gifWidth = gif.offsetWidth;
  const gifHeight = gif.offsetHeight;

  // Increase the GIF size by a certain percentage, e.g., 10%
  const increasePercentage = 10;
  const newGifWidth = gifWidth * (1 + increasePercentage / 100);
  const newGifHeight = gifHeight * (1 + increasePercentage / 100);

  gif.src = "https://i.pinimg.com/originals/91/bb/e5/91bbe5c5c9d32d755661e2cde47107e5.gif";

  gif.onload = () => {
    gif.style.width = newGifWidth + 'px';
    gif.style.height = newGifHeight + 'px';
  };
  
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = 'absolute'; // Keep this to ensure the button moves
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
