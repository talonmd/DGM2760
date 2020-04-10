document.querySelector("header > h1").innerText = "Grant's Tomb";
document.querySelector("header > h2").innerText = "Literal Objects"

const question = {
    stem: "Who is buried in Grant's Tomb?",
    option1: "Tom",
    option2: "Grant",
    option3: "Patty",
    option4: "Wilford",
    correct: 2,
    display: () => {
        console.log(question.option1)
        document.querySelector('#stem').textContent = question.stem
        document.querySelector('.answer1').textContent = question.option1
        document.querySelector('.answer2').textContent = question.option2
        document.querySelector('.answer3').textContent = question.option3
        document.querySelector('.answer4').textContent = question.option4
        
    },
    check: (userChoice) => {
        if (userChoice === question.correct) {
            document.querySelector(".feedback").textContent = "You are Correct!"
        } else {
            document.querySelector(".feedback").textContent = "You are Incorrect. Try again."
        }
    }
}

document.querySelector('.answer1').addEventListener('click', () => question.check(1))
document.querySelector('.answer2').addEventListener('click', () => question.check(2))
document.querySelector('.answer3').addEventListener('click', () => question.check(1))
document.querySelector('.answer4').addEventListener('click', () => question.check(1))

question.display()