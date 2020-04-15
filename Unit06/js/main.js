document.querySelector("header > h1").innerText = "Nonsense Story";
document.querySelector("header > h2").innerText = "String Manipulation"

function tellStory() {

nounArray = document.querySelector('#noun').textContent.trim().split(/\s+/).map(noun => noun.toLowerCase()) // trim does this: replace(/^\s+|\s+$/g, '')
adjectiveArray = document.querySelector('#adjective').textContent.trim().split(/\s+/).map(adjective => adjective.toLowerCase())
verbArray = document.querySelector('#verb').textContent.trim().split(/\s+/).map(verb => verb.toLowerCase())

const myStory = `Once upon a time there were four ${adjectiveArray[0]} ${nounArray[0]}s named Flopsy, Mopsy, Cotton-tail, and Peter.
They lived with their Mother underneath a ${nounArray[1]} near a ${adjectiveArray[1]} ${nounArray[2]}.
Now, my dears, said ${adjectiveArray[2]} Mrs. Rabbit, you may go over the ${nounArray[3]} or around the ${nounArray[4]}, but do not go into Mr. McGregor's ${nounArray[5]}.
Your Father had an accident there and was put into a ${nounArray[6]} by Mrs. McGregor.
Now ${verbArray[0]} along, and don't get into mischief. I am going ${verbArray[1]}ing.`

document.querySelector('#story').textContent = myStory

}