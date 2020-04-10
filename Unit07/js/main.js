document.querySelector("header > h1").innerText = "Pizza Emporium";
document.querySelector("header > h2").innerText = "Literal Objects"

let message

const pizza = {
    crust: 'thin',
    size: 'small',
    topping: 'pepperoni',
    buildPizza:  function () {
        message = `Baking a ${pizza.size} pizza on a ${pizza.crust} crust with ${pizza.topping} and cheese just for you.`
        document.querySelector('#message').textContent = message
    },
    shoppingList: () => {
        let flour = 1
        if (pizza.crust === 'thick') flour *= 2
        if (pizza.size === 'large') flour *= 4
        message = `You will need to purchase ${flour} cups of flour and 1 lb of ${pizza.topping}.`
        document.querySelector('#message').textContent = message
    }
}

document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')

document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')
document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage')

document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')
document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')

document.querySelector('#buildPizza').addEventListener('click', pizza.buildPizza)
document.querySelector('#shoppingList').addEventListener('click', pizza.shoppingList)
