let timeDelay;
let clicksCounter = 0;

let level = 1;
document.querySelector(".level").textContent = `Level: ${level}`;
displayPoints();

let message = document.querySelector(".message");
document.querySelector(".trophy").classList.toggle("displayed");
let winnersMessage = document.querySelector(".winners-message");
winnersMessage.classList.toggle("displayed");
let nextLevelButton = document.querySelector(".next-level");
nextLevelButton.classList.toggle("displayed");

let item1 = document.querySelector(".item--1");
item1.addEventListener("click", () => {
  item1.classList.toggle("clicked");
  clicksCounter += 1;
  timeDelay = generateTimeDelay();
  console.log(timeDelay, clicksCounter);
  setTimeout(() => item1.classList.remove("clicked"), timeDelay);
  setTimeout(pointsCalculator, timeDelay);
  displayPoints();
});

let item2 = document.querySelector(".item--2");
item2.addEventListener("click", () => {
  item2.classList.toggle("clicked");
  clicksCounter += 1;
  timeDelay = generateTimeDelay();
  console.log(timeDelay, clicksCounter);
  setTimeout(() => item2.classList.remove("clicked"), timeDelay);
  setTimeout(pointsCalculator, timeDelay);
  displayPoints();
});

let item3 = document.querySelector(".item--3");
item3.addEventListener("click", () => {
  item3.classList.toggle("clicked");
  clicksCounter += 1;
  timeDelay = generateTimeDelay();
  console.log(timeDelay, clicksCounter);
  setTimeout(() => item3.classList.remove("clicked"), timeDelay);
  setTimeout(pointsCalculator, timeDelay);
  displayPoints();
});

let item4 = document.querySelector(".item--4");
item4.addEventListener("click", () => {
  item4.classList.toggle("clicked");
  clicksCounter += 1;
  timeDelay = generateTimeDelay();
  console.log(timeDelay, clicksCounter);
  setTimeout(() => item4.classList.remove("clicked"), timeDelay);
  setTimeout(pointsCalculator, timeDelay);
  displayPoints();
});

let item5 = document.querySelector(".item--5");
item5.addEventListener("click", () => {
  item5.classList.toggle("clicked");
  clicksCounter += 1;
  timeDelay = generateTimeDelay();
  console.log(timeDelay, clicksCounter);
  setTimeout(() => item5.classList.remove("clicked"), timeDelay);
  setTimeout(pointsCalculator, timeDelay);
  displayPoints();
});

let item6 = document.querySelector(".item--6");
item6.addEventListener("click", () => {
  item6.classList.toggle("clicked");
  clicksCounter += 1;
  timeDelay = generateTimeDelay();
  console.log(timeDelay, clicksCounter);
  setTimeout(() => item6.classList.remove("clicked"), timeDelay);
  setTimeout(pointsCalculator, timeDelay);
  displayPoints();
});

let item7 = document.querySelector(".item--7");
item7.addEventListener("click", () => {
  item7.classList.toggle("clicked");
  clicksCounter += 1;
  timeDelay = generateTimeDelay();
  console.log(timeDelay, clicksCounter);
  setTimeout(() => item7.classList.remove("clicked"), timeDelay);
  setTimeout(pointsCalculator, timeDelay);
  displayPoints();
});

let item8 = document.querySelector(".item--8");
item8.addEventListener("click", () => {
  item8.classList.toggle("clicked");
  clicksCounter += 1;
  timeDelay = generateTimeDelay();
  console.log(timeDelay, clicksCounter);
  setTimeout(() => item8.classList.remove("clicked"), timeDelay);
  setTimeout(pointsCalculator, timeDelay);
  displayPoints();
});

let item9 = document.querySelector(".item--9");
item9.addEventListener("click", () => {
  item9.classList.toggle("clicked");
  clicksCounter += 1;
  timeDelay = generateTimeDelay();
  console.log(timeDelay, clicksCounter);
  setTimeout(() => item9.classList.remove("clicked"), timeDelay);
  setTimeout(pointsCalculator, timeDelay);
  displayPoints();
});

function generateTimeDelay() {
  if (level === 1) {
    return Math.ceil(Math.random() * 10) * 1000;
  } else if (level === 2) {
    return Math.ceil(Math.random() * 7) * 1000;
  } else if (level === 3) {
    return Math.ceil(Math.random() * 5) * 1000;
  } else if (level === 4) {
    return Math.ceil(Math.random() * 4) * 1000;
  } else if (level === 5) {
    return Math.ceil(Math.random() * 2.5) * 1000;
  }
}

function pointsCalculator() {
  if (clicksCounter >= 9) {
    winnersMessage.classList.toggle("displayed");
    document.querySelector(".points").classList.toggle("displayed");

    if (level === 1) {
      nextLevelButton.classList.toggle("displayed");
      message.textContent = "You've done it! Great Job.";
    } else if (level === 2) {
      nextLevelButton.classList.toggle("displayed");
      message.textContent = "You've done it again! Incredible.";
    } else if (level === 3) {
      nextLevelButton.classList.toggle("displayed");
      message.textContent = "Amazing! How are you doing so well?";
    } else if (level === 4) {
      nextLevelButton.classList.toggle("displayed");
      message.textContent = "You're already becoming a master. Superb!";
    } else if (level === 5) {
      document.querySelector(".next-level-ready").classList.toggle("displayed");
      message.textContent =
        "You have proven yourself a master of color and clicking. Give yourself a trophy, you deserve it!";
      document.querySelector(".trophy").classList.toggle("displayed");
    }
  }
  clicksCounter -= 1;
  displayPoints();
}

function displayPoints() {
  document.querySelector(".points").textContent = `Points: ${clicksCounter}`;
  document.querySelector(
    ".next-level-ready"
  ).textContent = `Next level ready in ${clicksCounter}`;
}

nextLevelButton.addEventListener("click", () => {
  if (clicksCounter === 0) {
    level += 1;
    winnersMessage.classList.toggle("displayed");
    document.querySelector(".points").classList.toggle("displayed");
    nextLevelButton.classList.toggle("displayed");
    document.querySelector(".level").textContent = `Level: ${level}`;
  }
});
