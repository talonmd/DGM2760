
document.querySelector('#companyName').innerText = "Joe's Bed and Breakfast"

document.querySelector('header > h2').innerText =  "Best B&B in This Neck of the Woods"

let userName = prompt('What is your name?')

let message = `Nice to meet you, ${userName}. Welcome to the best lodging in Heber Valley!`

document.querySelector('#greeting').innerText = message
