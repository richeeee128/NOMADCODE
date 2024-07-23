const randomnumber = document.querySelector("#randomnumber");
const playernumber = document.querySelector("#player");
const gameForm = document.querySelector("#game-form");
const result = document.querySelector("#result");

function randomnumberHandler(event) {
  event.preventDefault();
  const numberRander = Math.abs(Math.ceil(randomnumber.value));
  console.log(Math.abs(parseInt(playernumber.value)));
  const randomNum = Math.floor(Math.random() * (numberRander + 1));
  if (randomNum == playernumber.value) {
    result.innerHTML = `You chose : ${playernumber.value}, the machine chose: ${randomNum}<br> 
    You win!!!!`;
  } else {
    result.innerHTML = `You chose : ${playernumber.value}, the machine chose: ${randomNum}<br> You Lost!`;
  }
}

gameForm.addEventListener("submit", randomnumberHandler);
