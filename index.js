// Write your code here!

// assign and remove main
const main = document.getElementById("main")
main.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.textContent = "Aden is the champion"

document.body.append(newHeader);


// const newHeaderId = document.createElement("id")
// newHeaderId.textContent = "victory"
// newHeader.append(newHeaderId);




// can use .textContent instead of .innerHTML

