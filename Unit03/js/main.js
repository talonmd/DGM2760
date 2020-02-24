document.querySelector("header > h1").innerText = "Guessing Game";
document.querySelector("header > h2").innerText = "Loops";

// pick a random number between 0 and 16

let correctNumber = Math.floor(Math.random() * 14);

correctNumber += 1;

console.log(`The correct number is ${correctNumber}.`);

let guessed = false;
let totalGuesses = 0;
let gamerGuess = 0;

function evalGuess() {
  totalGuesses++; // adds 1 to total guess (also could be +=1)
  gamerGuess = document.querySelector("#guess").value;
  console.log(totalGuesses, gamerGuess);
  const feedback = document.querySelector(".feedback > p");

  if (gamerGuess == correctNumber) {
    console.log(`gamerGuess is equal to correctNumber`)
    feedback.innerText = "You are Correct.";
    giveAward()
  } else if (gamerGuess > correctNumber && gamerGuess < 16) {
    feedback.innerText = "Your Guess was Too High.";
  } else if (gamerGuess < correctNumber && gamerGuess > 0) {
    feedback.innerText = "Your Guess was Too Low.";
  } else {
    feedback.innerText =
      "Please pick a number between 1 and 15 inclusive.";
    totalGuesses -=1
    }

document.querySelector(".trys > p").innerText = totalGuesses
}

function giveAward() {
    console.log('Congratulations!')
    let imagePath = ''

    switch(totalGuesses) {
        case 1:
        case 2:
        case 3:
            imagePath = 'blue.jpg'
            break;
        case 4:
        case 5:
        case 6:
            imagePath = 'red.jpg'
            break;
        case 7:
            imagePath = 'yellow.jpg'
            break;
        default:
            imagePath = 'yellow.jpg'
            break;
    }

let awardImage = document.createElement('img') // creates an image element
awardImage.setAttribute('src', `images/${imagePath}`)
const ribbon = document.querySelector('.award')
ribbon.appendChild(awardImage)

}

