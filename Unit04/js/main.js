document.querySelector("header > h1").innerText = "Fortune Teller";
document.querySelector("header > h2").innerText = "Switch Statements";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let month = getRandomIntInclusive(1, 12);
let fate = getRandomIntInclusive(1, 5);
let day = getRandomIntInclusive(1, 30);

function getMonthName(month) {
  let name;
  switch (month) {
    case 1:
      name = "January";
      break;
    case 2:
      name = "February";
      break;
    case 3:
      name = "March";
      break;
    case 4:
      name = "April";
      break;
    case 5:
      name = "May";
      break;
    case 6:
      name = "June";
      break;
    case 7:
      name = "July";
      break;
    case 8:
      name = "August";
      break;
    case 9:
      name = "September";
      break;
    case 10:
      name = "October";
      break;
    case 11:
      name = "November";
      break;
    case 12:
      name = "December";
      break;
    default:
      name = "not a month";
      break;
  }
  return name;
}

function getFortune(fate) {
  let string;
  switch (fate) {
    case 1:
      string =
        "find out that you are actually a ghost and your life is all made up";
      break;
    case 2:
      string = "get married in Las Vegas at a drive-through chapel";
      break;
    case 3:
      string =
        "eat a fortune cookie that will give you this exact same fortune";
      break;
    case 4:
      string = "buy a 3-D printer for your DnD team to print miniatures";
      break;
    case 5:
      string = "forget that you ever read this fortune";
      break;
  }
  return string;
}

const fateString = getFortune(fate);
const monthName = getMonthName(month);

const fortuneRevealed = `On ${monthName} ${day}, you will ${fateString}.`;

document.querySelector("#fortune").innerText = fortuneRevealed;
