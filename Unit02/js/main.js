document.querySelector('header > h1').innerText = "Inspector Clousaeu"
document.querySelector('header > h2').innerText = "This IZ Chief Inspector Clousaeu speaking on ze pheaun"

function reDisplay() {
let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`
let offset = `Window offset is ${window.screenX} pixels from the left edge and ${window.screenY} pixels from the top of the display.`
let pageURL = `The URL for the page is ${document.URL}`
let docTitle = `The document title is ${document.title}`
let lastChanged = `The document was last updated on ${document.lastModified}`

let myWindow = document.querySelector('#myWindow')
myWindow.innerText = `${windowSizes} \n ${offset} \n ${pageURL}`
let myDocument = document.querySelector('#documentProperties')
myDocument.innerText = `${docTitle} \n ${lastChanged}`
}


















