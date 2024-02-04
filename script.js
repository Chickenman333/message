const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif"); // Assuming this is the first GIF
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yipee!";
  
  // Temporarily store the current size of the first GIF
  const gifWidth = gif.offsetWidth;
  const gifHeight = gif.offsetHeight;

  gif.src = "https://i.pinimg.com/originals/91/bb/e5/91bbe5c5c9d32d755661e2cde47107e5.gif";

  // After changing the source, adjust the size of the second GIF to match the first one
  gif.onload = () => {
    gif.style.width = gifWidth + 'px';
    gif.style.height = gifHeight + 'px';
  };
  
  // Hide both buttons
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

