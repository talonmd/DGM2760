function duplicateMenu() {
  // pulling all a elements from primary navigation
  let topList = document.querySelectorAll("ul#primaryNavigation li a");

  // mobile navigation list
  let newList = document.createElement("ul");

  topList.forEach((menuItem) => {
    let newLI = document.createElement("li");
    let newLink = document.createElement("a");

    newLink.textContent = menuItem.textContent;
    newLink.setAttribute("href", menuItem.getAttribute("href"));

    newList.appendChild(newLI);
    newLI.appendChild(newLink);


    document.querySelector("#smallNavArea").appendChild(newList);
  });
}


duplicateMenu();
