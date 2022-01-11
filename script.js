var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.addEventListener('click', toggle)
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete'
    li.appendChild(deleteButton);
	ul.appendChild(li);
    deleteButton.addEventListener('click', event => ul.removeChild(li))
    input.value = "";
}


function toggle() {
  this.classList.toggle("done");
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);





