const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yipee!";
  
  const gifWidth = gif.offsetWidth;
  const gifHeight = gif.offsetHeight;

  gif.src = "https://media.tenor.com/yr7z512oIf4AAAAi/peach-goma-shy-blush-heart.gif";

  gif.onload = () => {
    gif.style.width = gifWidth + 'px';
    gif.style.height = gifHeight + 'px';
  };
  
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = 'absolute'; // Ensure button is positioned absolutely
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
