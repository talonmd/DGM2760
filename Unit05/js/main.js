document.querySelector("header > h1").innerText = "The Arborist";
document.querySelector("header > h2").innerText = "Events and Arrays";

// create an array with four trees listed
const trees = ['banyan tree', 'black ash', ' bigtooth aspen', 'bald cyprus']

const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

// display the list of trees inside the displayResults div
const listTrees = () => {  // same as function() {}
  let treeList = ''
  trees.forEach(tree => {
    treeList += `${tree} <br>`
  })
  displayResults.innerHTML = `${treeList} <span>${trees.length} elements long</span>`
}

document.querySelector('#add_redwood').onclick = () => {
trees.push('redwood')
listTrees()
}