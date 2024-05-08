const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I miss you too! 😘";
  question.innerHTML += "<br><span class='happy-text'>🥳 ขอให้มีความสุขมากๆนะคะ เป็นปีที่มีแต่ความโชคดี พบเจอแต่สิ่งดีๆและผู้คนที่น่ารัก 🍀</span>";
  question.innerHTML += "<br><span class='additional-text'>อยู่เป็นความสดใสแบบนี้ไปนานๆนะคะ (Smile 😊 it's look good on you ) </span>";
  gif.src =
    "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";
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
