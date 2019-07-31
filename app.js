var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById('computer-score');
const scoreb_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const sci_div = document.getElementById('s');

function getCompchoice(){
  const choice = ["r","p","s"];
const randomNum=  Math.floor(Math.random()*3);
return choice[randomNum];
}
function convert(letter) {
  if(letter=="r") return "Rock";
    if(letter=="p") return "Paper";
   return "Scissors";
}

function win(user , comp) {
  const su= "user".fontsize(3).sub();
  const smp= "comp".fontsize(3).sub();
  const userDoc =  document.getElementById(user);
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convert(user)} ${su}  beats ${convert(comp)}${smp} . You win!`;
  userDoc.classList.add("green-glow");
  setTimeout(()=> userDoc.classList.remove("green-glow"),300);
}

 function lose( user , comp) {
   const su= "user".fontsize(3).sub();
   const smp= "comp".fontsize(3).sub();
   const userDoc =  document.getElementById(user);
   compScore++;
   userScore_span.innerHTML = userScore;
   compScore_span.innerHTML = compScore;
   result_p.innerHTML = `${convert(user)} ${su} loses to ${convert(comp)}${smp} . You lost!`;
   userDoc.classList.add("red-glow");
   setTimeout(() => userDoc.classList.remove("red-glow"),300);
}

function draw(user , comp) {
  const su= "user".fontsize(3).sub();
  const smp= "comp".fontsize(3).sub();
  const userDoc =  document.getElementById(user);
  result_p.innerHTML = `${convert(user)} ${su} equals to ${convert(comp)}${smp} .its a draw!`;
  userDoc.classList.add("gray-glow");
  setTimeout(() =>userDoc.classList.remove("gray-glow"),300)
}

function game(userChoice){
const compChoice = getCompchoice();
switch (userChoice+compChoice) {
  case "pr":
  case "rs":
  case "sp":
    win(userChoice , compChoice);
  break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice , compChoice);
      break;
      case "rr":
      case "pp":
      case "ss":
       draw(userChoice , compChoice);
        break;
}
}

  function main(){
rock_div.addEventListener('click', ()=> game("r"));
paper_div.addEventListener('click',()=> game("p"));
sci_div.addEventListener('click',  ()=> game("s"));
}

main();
